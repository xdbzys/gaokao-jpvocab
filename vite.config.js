import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  base: './',
  plugins: [react(), viteSingleFile()],
  build: {
    // es2015：兼容安卓10 等旧版 WebView/浏览器（Chromium 61-79 不支持 ?. ?? 等新语法）
    target: 'es2015',
    cssCodeSplit: false,
  },
});
