import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  // GitHub Pages: /TRIZ-VIP/  |  Render static (root): /
  let base = env.VITE_BASE || '/TRIZ-VIP/'
  if (!base.endsWith('/')) base = `${base}/`

  return {
    base,
    plugins: [
      react(),
      tailwindcss(),
    ],
    server: {
      proxy: {
        "/api": "http://localhost:3001",
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
