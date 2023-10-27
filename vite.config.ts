import { resolve } from 'path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@helpers': resolve(__dirname, './src/helpers'),
      '@sideComponents': resolve(__dirname, './src/sideComponents'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@Types': resolve(__dirname, './src/Types'),
    },
  },
})
