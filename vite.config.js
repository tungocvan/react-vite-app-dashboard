import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'PWA TNV App',
        short_name: 'PWA TNV App',
        description: 'TNV Progressive Web App!',
        theme_color: '#ffffff',
        icons: [
          {
            src: './assets/images/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './assets/images/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: './assets/images/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: "./assets/images/pwa-384x384.png",
            sizes: "384x384",
            type: "image/png",
            form_factor: "narrow",
            label: "Application",
            purpose: "any"
          },          
        ],
        screenshots: [
          {
            src: "./assets/images/pwa-1280x720.png",
            sizes: "1280x720",
            type: "image/png",
            form_factor: "wide"
          },
          {
            src: "./assets/images/pwa-720x1280.png",
            sizes: "720x1280",
            type: "image/png",
            form_factor: "narrow"
          }
        ],
      },
    }),
  ],
  server: {
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  }
})
