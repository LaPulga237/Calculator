import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ env }) => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'http://localhost:5173'
  const backendPort = import.meta.env.VITE_BACKEND_PORT || '5000'

  return {
    plugins: [react()],
    server: {
      origin: siteUrl,
      proxy: {
        '/api': {
          target: `http://localhost:${backendPort}`,
          changeOrigin: true,
        },
      },
    },
  }
})