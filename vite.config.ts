import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimisations pour les performances
    rollupOptions: {
      output: {
        manualChunks: {
          // Séparer les librairies tierces dans des chunks séparés
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          icons: ['lucide-react', 'react-icons']
        }
      }
    },
    // Minification avancée
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Supprimer les console.log en production
        drop_debugger: true
      }
    },
    // Optimisation des assets
    assetsInlineLimit: 4096, // Inliner les petits assets
    cssCodeSplit: true, // Split CSS par route
    sourcemap: false // Désactiver les sourcemaps en production
  },
  server: {
    // Configuration pour le développement
    open: true,
    port: 3000
  },
  // Optimisation des dépendances
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion']
  }
})
