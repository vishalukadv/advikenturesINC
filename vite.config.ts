import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  build: {
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui': ['lucide-react', 'clsx', 'tailwind-merge'],
          'forms': ['react-hook-form'],
          'data': ['date-fns', '@tanstack/react-query'],
          'supabase': ['@supabase/supabase-js']
        }
      }
    }
  },
  base: '/', // Ensures assets are loaded correctly on GoDaddy
  server: {
    historyApiFallback: true
  }
});