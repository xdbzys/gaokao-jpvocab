package com.gaokao.vocab;

import android.os.Bundle;
import android.view.KeyEvent;
import android.webkit.WebView;
import android.webkit.WebSettings;
import android.webkit.JavascriptInterface;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    private static boolean volumeKeyNavEnabled = false;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        // Register custom plugins before super.onCreate
        registerPlugin(ApkUpdaterPlugin.class);
        
        super.onCreate(savedInstanceState);

        WebView webView = this.bridge.getWebView();
        if (webView != null) {
            WebSettings settings = webView.getSettings();
            settings.setCacheMode(WebSettings.LOAD_NO_CACHE);
            webView.clearCache(true);

            // 修改 User-Agent 为标准浏览器，避免 Gitee 等 CDN 拦截 WebView 请求
            String originalUA = settings.getUserAgentString();
            String cleanUA = originalUA
                .replace("Capacitor/", "")
                .replace("Capacitor;", ";")
                .replace(" wv", "")
                .replaceAll("\\s+", " ")
                .trim();
            settings.setUserAgentString(cleanUA);

            // 添加音量键控制接口
            webView.addJavascriptInterface(new Object() {
                @JavascriptInterface
                public void setVolumeKeyNavEnabled(boolean enabled) {
                    volumeKeyNavEnabled = enabled;
                }
            }, "VolumeKeyNative");
        }
    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if (volumeKeyNavEnabled && (keyCode == KeyEvent.KEYCODE_VOLUME_UP || keyCode == KeyEvent.KEYCODE_VOLUME_DOWN)) {
            String direction = keyCode == KeyEvent.KEYCODE_VOLUME_UP ? "up" : "down";
            String js = "window.__volumeKeyNav && window.__volumeKeyNav('" + direction + "')";
            WebView webView = this.bridge != null ? this.bridge.getWebView() : null;
            if (webView != null) {
                webView.post(() -> webView.evaluateJavascript(js, null));
            }
            return true;
        }
        return super.onKeyDown(keyCode, event);
    }

    @Override
    public boolean onKeyUp(int keyCode, KeyEvent event) {
        if (volumeKeyNavEnabled && (keyCode == KeyEvent.KEYCODE_VOLUME_UP || keyCode == KeyEvent.KEYCODE_VOLUME_DOWN)) {
            return true; // 消费事件，防止系统音量变化
        }
        return super.onKeyUp(keyCode, event);
    }
}
