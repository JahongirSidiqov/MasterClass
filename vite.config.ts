
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild' // Terser o'rniga esbuild ishlatamiz, u tezroq va qo'shimcha kutubxona talab qilmaydi
  }
});
