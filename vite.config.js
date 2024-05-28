import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  resolve: {
    alias: {
      'components': path.resolve(__dirname, './src/components'),
      'services': path.resolve(__dirname, './src/services'),
      'config': path.resolve(__dirname, './src/config'),
      'consts': path.resolve(__dirname, './src/consts'),
      'hooks': path.resolve(__dirname, './src/hooks'),
      'store': path.resolve(__dirname, './src/store')
    }
  },
  plugins: [
    react(),
    VitePWA({
      injectRegister: 'script',
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Dual N-Back',
        short_name: 'Dual N-Back',
        description: 'Dual N-Back',
        theme_color: '#ffffff',
        start_url: "/",
        icons: [
          {
            src: 'pwa-144x144.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
    }),
  ]
});
