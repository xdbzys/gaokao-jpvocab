import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';
import fs from 'fs';
import path from 'path';

// 自定义插件：viteSingleFile 之后替换 import.meta.url
// 原因：@capacitor/filesystem web 实现使用 import.meta.url，
// viteSingleFile 将所有 JS 内联到非 ES module 的 <script> 标签，
// 导致 import.meta 不可用 → SyntaxError → 整个 JS 不执行 → 蓝屏
function replaceImportMetaAfterInline() {
  return {
    name: 'replace-import-meta-after-inline',
    enforce: 'post',
    // closeBundle 在所有插件（含 viteSingleFile）处理完之后执行
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const htmlPath = path.join(distDir, 'index.html');
      if (fs.existsSync(htmlPath)) {
        let html = fs.readFileSync(htmlPath, 'utf8');
        const before = (html.match(/import\.meta/g) || []).length;
        html = html.replace(/import\.meta\.url/g, '""');
        html = html.replace(/import\.meta\.resolve/g, 'undefined');
        const after = (html.match(/import\.meta/g) || []).length;
        fs.writeFileSync(htmlPath, html);
        if (before > 0) {
          console.log(`[replace-import-meta] Replaced ${before} import.meta occurrences (${after} remaining)`);
        }
      }
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [react(), viteSingleFile(), replaceImportMetaAfterInline()],
  define: {
    'import.meta.url': JSON.stringify(''),
  },
  build: {
    // es2015：兼容安卓10 等旧版 WebView/浏览器（Chromium 61-79 不支持 ?. ?? 等新语法）
    target: 'es2015',
    cssCodeSplit: false,
  },
});
