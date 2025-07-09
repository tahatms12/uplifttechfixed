
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['./tests/e2e/**/*.ts'],
    browser: {
      enabled: true,
      name: 'chrome', // or 'firefox', 'safari'
      headless: true,
    },
    // You might need to adjust the timeout for E2E tests
    testTimeout: 30000,
    hookTimeout: 30000,
  },
});
