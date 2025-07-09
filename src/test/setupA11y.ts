import { afterEach, expect } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';
import { configureAxe } from 'jest-axe';

// Extend Vitest's expect with jest-dom matchers
expect.extend(matchers);

// Configure axe-core
const axe = configureAxe({
  rules: {
    // Disable color-contrast rule for now, as it's handled separately
    'color-contrast': { enabled: false },
  },
});

// Extend expect with jest-axe matchers
expect.extend(axe);

afterEach(() => {
  cleanup();
});