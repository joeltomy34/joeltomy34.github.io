import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig(({ mode }) => ({
  base: './',
  plugins: mode === 'single' ? [react(), tailwindcss(), viteSingleFile()] : [react(), tailwindcss()],
  build:
    mode === 'single'
      ? { target: 'es2020', outDir: 'dist-single' }
      : {
          target: 'es2020',
          rollupOptions: {
            output: {
              manualChunks: { motion: ['framer-motion'], react: ['react', 'react-dom'] },
            },
          },
        },
}));
