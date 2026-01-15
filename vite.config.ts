import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Garante que o process.env.API_KEY não quebre o build se for undefined
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || "")
  }
});