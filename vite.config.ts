import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Configuración para el widget (modo 'widget')
  if (mode === 'widget') {
    return {
      plugins: [vue()],
      build: {
        lib: {
          entry: 'src/web-component.js',
          name: 'BISesalWidget',
          fileName: 'bi-sesal-widget',
          formats: ['umd']
        },
        rollupOptions: {
          external: ['vue'],
          output: {
            globals: {
              vue: 'Vue'
            }
          }
        },
        chunkSizeWarningLimit: 1024
      },
      define: {
        __VUE_PROD_DEVTOOLS__: false
      }
    }
  }

  // Configuración normal de la app
  return {
    plugins: [vue()],
    server: {
      port: 3001,
      proxy: {
        '/api': {
          target: 'http://localhost:4000',
          changeOrigin: true
        }
      }
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('maplibre-gl')) {
              return 'maplibre'
            }
          }
        }
      },
      chunkSizeWarningLimit: 1024
    },
    // Configuración para Netlify
    base: mode === 'production' ? '/' : '/',
    preview: {
      port: 4173,
      strictPort: true
    }
  }
})
