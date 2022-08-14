import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin()]
});
