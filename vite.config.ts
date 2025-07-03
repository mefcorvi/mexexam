import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    checker({
      stylelint: {
        lintCommand: 'stylelint **/*.{vue,css,less,scss,sass}',
        dev: {
          overrideConfig: {
            files: '.stylelintrc.cjs'
          }
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      less: {
        additionalData: `
          @import "@/assets/variables.less";
        `
      }
    }
  },
  build: {
    // Optimize for Cloudflare
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router'],
          utils: ['@vueuse/core', '@vueuse/router']
        }
      }
    },
    // Generate source maps for better debugging
    sourcemap: false
  }
});
