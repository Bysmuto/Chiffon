import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',            // Keeps links working relative to the folder
  build: {
    outDir: 'docs',      // Tells Vite to output to a "docs" folder
  }
})