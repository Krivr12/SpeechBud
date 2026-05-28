// ==========================================
// VITE CONFIG - Registers Tailwind CSS v4 plugin
// ==========================================
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Tailwind CSS v4 via Vite plugin (no tailwind.config.js needed)
  ],
})
