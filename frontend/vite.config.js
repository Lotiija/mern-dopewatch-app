import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Your backend API server URL
        changeOrigin: true,              // Ensures the host header is properly modified
        secure: false,                   // Set to false if you're working with HTTP and not HTTPS
        // rewrite: (path) => path.replace(/^\/api/, ''), // Optional: rewrite path (e.g., /api/products -> /products)
      },
    },
  },
  plugins: [react()],
})
