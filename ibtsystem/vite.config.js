import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.jpeg', '**/*.jpg', '**/*.png', '**/*.tiff', '**/*.JPEG', '**/*.JPG', "**/*.HEIC"],
})
