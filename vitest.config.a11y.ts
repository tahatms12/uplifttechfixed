import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts', './src/test/setupA11y.ts'],
    include: ['**/*.a11y.test.tsx'],
  },
  resolve: {
    alias: {
      'jest-axe': path.resolve(__dirname, 'node_modules/jest-axe'),
    },
  },
});