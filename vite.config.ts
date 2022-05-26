import { defineConfig } from 'vite';
import RubyPlugin from 'vite-plugin-ruby';
import vue from '@vitejs/plugin-vue';

import path from 'path';

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'app', 'javascript'),
      },
    ],
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  plugins: [vue(), RubyPlugin()],
  css: {
    preprocessorOptions: {
      scss: {
        sourceMap: false,
        additionalData(source: any, fp: any) {
          if (fp.endsWith('variables.scss')) return source;

          return `@import "@/assets/css/_variables.scss"; ${source}`;
        },
      },
    },
  },
});
