import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // จำเป็นสำหรับ Docker
    port: 5173, // Port ที่ต้องการใช้
    proxy: {
      '/api': {
        target: 'http://backend:5000', // ส่ง request ไปยัง backend service
        changeOrigin: true,
        secure: false
      }
    }
  }
})
