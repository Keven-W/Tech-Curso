import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/sobre/',   // ← ESSA LINHA RESOLVE O DEPLOY
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});