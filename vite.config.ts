import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]
        ]
      }
    }),
    VitePWA({
      strategies: 'generateSW',
      injectRegister: false,
      workbox: {
        navigationPreload: true,
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
        manifestTransforms: [
          async (manifest) => {
            const warnings = [];
            const manifestEntries = manifest.map((entry) => {
              let url = entry.url;
              // Remove hash from font URLs
              if (url.startsWith('/assets/poppins') && url.includes('.woff2')) {
                url = url.replace(/-\w+\.woff2$/, '.woff2');
              }
              return { ...entry, url };
            });
            return { manifest: manifestEntries, warnings };
          },
        ],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/cplyjoeqd4\.ufs\.sh\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'ufs-images',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
    }),
    
    process.env.ANALYZE && visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true
    })
  ],
  resolve: {
    alias: {
      '/fonts': path.resolve(__dirname, 'public/fonts')
    }
  },
  build: {
    target: 'es2022',
    minify: 'terser',
    cssMinify: 'lightningcss',
    modulePreload: {
      polyfill: false
    },
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          
          'ui-components': ['@headlessui/react', 'lucide-react']
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace'],
        passes: 2
      },
      mangle: {
        safari10: true
      },
      format: {
        comments: false
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: []
  }
});