import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// App is served from https://<user>.github.io/small-good-moments-app/ on GitHub Pages,
// but from / during local dev.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/small-good-moments-app/' : '/',
  plugins: [react()],
}));
