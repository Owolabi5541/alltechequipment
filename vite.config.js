import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    cors: true,
    hmr: {
      clientPort: 443, // ngrok uses HTTPS
    }
  }
})