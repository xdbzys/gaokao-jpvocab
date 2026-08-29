package com.gaokao.vocab;

import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.os.Handler;
import android.os.Looper;
import android.webkit.MimeTypeMap;

import androidx.core.content.FileProvider;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

/**
 * Capacitor plugin for in-app APK download and installation.
 * Downloads the APK to app cache, then triggers the system installer via FileProvider URI.
 *
 * v2.43.0 hardening:
 *  - Validates downloaded file is a real APK (PK zip magic + min size) before installing,
 *    so WAF/HTML pages from mirrors can no longer reach the installer.
 *  - Checks REQUEST_INSTALL_PACKAGES consent (Android 8+) and guides the user to settings.
 *  - installApk runs on the main thread inside try/catch to avoid native crashes.
 *  - New option autoInstall(false): only download and return the path (silent pre-download).
 */
@CapacitorPlugin(name = "ApkUpdater")
public class ApkUpdaterPlugin extends Plugin {

    private static final String APK_CACHE_DIR = "apk_updates";
    private static final long MIN_APK_SIZE = 1024 * 1024; // 1MB
    private Thread downloadThread;
    private final Handler mainHandler = new Handler(Looper.getMainLooper());

    /**
     * Download APK from the given URL and (optionally) install it.
     * Reports progress via "apkDownloadProgress" events.
     * Returns the file path on success.
     */
    @PluginMethod
    public void downloadAndInstall(JSObject options, PluginCall call) {
        String apkUrl = options.getString("url");
        if (apkUrl == null || apkUrl.isEmpty()) {
            call.reject("url is required");
            return;
        }
        boolean autoInstall = options.getBoolean("autoInstall", true) != Boolean.FALSE;

        final String finalUrl = apkUrl;
        final boolean shouldInstall = autoInstall;
        final Context ctx = getContext();
        final PluginCall finalCall = call;

        // Cancel any existing download
        if (downloadThread != null && downloadThread.isAlive()) {
            downloadThread.interrupt();
        }

        downloadThread = new Thread(() -> {
            HttpURLConnection conn = null;
            InputStream input = null;
            FileOutputStream output = null;
            File apkFile = null;

            try {
                // Clean old APKs from cache
                File cacheDir = new File(ctx.getCacheDir(), APK_CACHE_DIR);
                if (cacheDir.exists()) {
                    File[] oldFiles = cacheDir.listFiles();
                    if (oldFiles != null) {
                        for (File f : oldFiles) {
                            if (f.getName().endsWith(".apk")) {
                                //noinspection ResultOfMethodCallIgnored
                                f.delete();
                            }
                        }
                    }
                } else {
                    //noinspection ResultOfMethodCallIgnored
                    cacheDir.mkdirs();
                }

                // Download APK (follow redirects; GitHub releases redirect to CDN)
                URL url = new URL(finalUrl);
                conn = openWithRedirects(finalUrl);

                int responseCode = conn.getResponseCode();
                if (responseCode != HttpURLConnection.HTTP_OK) {
                    throw new Exception("HTTP " + responseCode);
                }

                int fileSize = conn.getContentLength();
                String fileName = "update_" + System.currentTimeMillis() + ".apk";
                apkFile = new File(cacheDir, fileName);

                input = conn.getInputStream();
                output = new FileOutputStream(apkFile);

                byte[] buffer = new byte[8192];
                int bytesRead;
                long totalRead = 0;
                int lastProgress = -1;

                while ((bytesRead = input.read(buffer)) != -1) {
                    if (Thread.currentThread().isInterrupted()) {
                        throw new InterruptedException("Download cancelled");
                    }
                    output.write(buffer, 0, bytesRead);
                    totalRead += bytesRead;

                    if (fileSize > 0) {
                        int progress = (int) (totalRead * 100 / fileSize);
                        if (progress != lastProgress) {
                            lastProgress = progress;
                            JSObject progressObj = new JSObject();
                            progressObj.put("progress", progress);
                            progressObj.put("downloaded", totalRead);
                            progressObj.put("total", fileSize);
                            notifyListeners("apkDownloadProgress", progressObj);
                        }
                    }
                }

                output.flush();
                output.close();
                input.close();

                // v2.43.0: integrity check — a real APK is a ZIP starting with "PK"
                if (!isValidApk(apkFile)) {
                    //noinspection ResultOfMethodCallIgnored
                    apkFile.delete();
                    throw new Exception("下载内容不是有效的安装包（可能被拦截或镜像失效）");
                }

                // Notify download complete
                JSObject completeObj = new JSObject();
                completeObj.put("progress", 100);
                completeObj.put("path", apkFile.getAbsolutePath());
                notifyListeners("apkDownloadProgress", completeObj);

                if (!shouldInstall) {
                    // Silent pre-download: return path, do not raise the installer
                    JSObject result = new JSObject();
                    result.put("success", true);
                    result.put("path", apkFile.getAbsolutePath());
                    result.put("installed", false);
                    finalCall.resolve(result);
                    return;
                }

                // Android 8+: user must allow "install unknown apps" for this app
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O
                        && !ctx.getPackageManager().canRequestPackageInstalls()) {
                    JSObject result = new JSObject();
                    result.put("success", false);
                    result.put("needPermission", true);
                    result.put("path", apkFile.getAbsolutePath());
                    finalCall.resolve(result);
                    // Guide user to the permission page; after granting, they can tap update again
                    try {
                        Intent permIntent = new Intent(
                                android.provider.Settings.ACTION_MANAGE_UNKNOWN_APP_SOURCES,
                                Uri.parse("package:" + ctx.getPackageName()));
                        permIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                        ctx.startActivity(permIntent);
                    } catch (Exception e) {
                        call.reject("需要\"安装未知应用\"权限，请在系统设置中允许本应用安装更新");
                    }
                    return;
                }

                // Install APK (on main thread, guarded)
                // apkFile 在下载过程中被重新赋值，非 effectively final，
                // 嵌套 lambda 引用需先复制为 final（否则 javac 报错，CI 构建失败）
                final File apkToInstall = apkFile;
                mainHandler.post(() -> {
                    try {
                        installApk(ctx, apkToInstall);
                        JSObject result = new JSObject();
                        result.put("success", true);
                        result.put("path", apkToInstall.getAbsolutePath());
                        result.put("installed", true);
                        finalCall.resolve(result);
                    } catch (Exception e) {
                        finalCall.reject("安装界面启动失败: " + e.getMessage());
                    }
                });

            } catch (InterruptedException e) {
                // Download was cancelled
                finalCall.reject("Download cancelled");
            } catch (Exception e) {
                finalCall.reject("Download failed: " + e.getMessage());
            } finally {
                try { if (output != null) output.close(); } catch (Exception ignored) {}
                try { if (input != null) input.close(); } catch (Exception ignored) {}
                if (conn != null) conn.disconnect();
            }
        });

        downloadThread.start();
    }

    /** Open connection, following up to 5 redirects (GitHub/Gitee CDN). */
    private HttpURLConnection openWithRedirects(String startUrl) throws Exception {
        String current = startUrl;
        for (int i = 0; i < 5; i++) {
            HttpURLConnection c = (HttpURLConnection) new URL(current).openConnection();
            c.setConnectTimeout(30000);
            c.setReadTimeout(60000);
            c.setInstanceFollowRedirects(false);
            c.setRequestProperty("Accept", "application/vnd.android.package-archive, application/octet-stream, */*");
            c.setRequestProperty("User-Agent", "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 Chrome/124 Mobile Safari/537.36");
            int code = c.getResponseCode();
            if (code == HttpURLConnection.HTTP_MOVED_PERM
                    || code == HttpURLConnection.HTTP_MOVED_TEMP
                    || code == 307 || code == 308) {
                String location = c.getHeaderField("Location");
                c.disconnect();
                if (location == null || location.isEmpty()) throw new Exception("重定向地址为空");
                current = new URL(new URL(current), location).toString(); // handle relative URLs
                continue;
            }
            return c;
        }
        throw new Exception("重定向次数过多");
    }

    /** A valid APK is a ZIP file starting with "PK\x03\x04" and reasonably large. */
    private boolean isValidApk(File file) {
        try {
            if (file == null || !file.exists() || file.length() < MIN_APK_SIZE) return false;
            try (FileInputStream fis = new FileInputStream(file)) {
                byte[] head = new byte[4];
                int read = fis.read(head);
                return read == 4 && head[0] == 'P' && head[1] == 'K';
            }
        } catch (Exception e) {
            return false;
        }
    }

    /**
     * Trigger the system APK installer via Intent (must run on main thread).
     */
    private void installApk(Context ctx, File apkFile) {
        Intent intent = new Intent(Intent.ACTION_VIEW);
        String mimeType = "application/vnd.android.package-archive";

        Uri uri;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
            uri = FileProvider.getUriForFile(ctx, ctx.getPackageName() + ".fileprovider", apkFile);
            intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
        } else {
            uri = Uri.fromFile(apkFile);
        }

        intent.setDataAndType(uri, mimeType);
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);

        ctx.startActivity(intent);
    }
}
