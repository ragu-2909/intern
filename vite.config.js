import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [
    react(),
  ],
  optimizeDeps: {
    include: [
      // Add frequently used dependencies to pre-bundle them
      'react',
      'react-dom',
    ],
    exclude: [
      // Exclude dependencies you don't need or rarely use
      'unused-large-library',
    ],
  },
  build: {
 
  },
  server: {
    watch: {
      // Ignore unnecessary files during development
      ignored: ['**/node_modules/**', '**/.git/**'],
    },
  },
})