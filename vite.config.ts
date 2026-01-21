import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Avoid relying on Node globals like `process` for type-checking.
  // Vite loads config from the project root, so "." is the correct envDir.
  const env = loadEnv(mode, '.', '')

  return {
    // For GitHub Pages set VITE_BASE="/<repo>/"
    base: env.VITE_BASE || '/',
    plugins: [react()],
  }
})
