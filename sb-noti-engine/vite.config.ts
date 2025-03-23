import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Import the new package
import tailwindcssPostcss from '@tailwindcss/postcss'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcssPostcss,
      ],
    },
  },
});