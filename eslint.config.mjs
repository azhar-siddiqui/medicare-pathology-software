import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  // Extend Next.js configurations using compat
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
  }),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      // General code quality
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-var': 'error',

      // React specific rules
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
  // Jest test files configuration
  {
    files: [
      '**/__tests__/**/*.{js,jsx,ts,tsx}',
      '**/*.test.{js,jsx,ts,tsx}',
      '**/*.spec.{js,jsx,ts,tsx}',
    ],
    languageOptions: {
      globals: {
        // Jest globals
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        jest: 'readonly',
        // Testing Library globals
        render: 'readonly',
        screen: 'readonly',
        fireEvent: 'readonly',
        waitFor: 'readonly',
        act: 'readonly',
      },
    },
    rules: {
      // Disable rules that don't apply to test files
      '@next/next/no-img-element': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      // Allow console statements in tests
      'no-console': 'off',
    },
  },
  // Cypress test files configuration
  {
    files: ['cypress/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        // Cypress globals
        cy: 'readonly',
        Cypress: 'readonly',
        // Mocha globals (used by Cypress)
        describe: 'readonly',
        it: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        before: 'readonly',
        after: 'readonly',
        context: 'readonly',
        specify: 'readonly',
      },
    },
    rules: {
      // Disable rules that don't apply to Cypress files
      '@next/next/no-img-element': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      // Allow console statements in Cypress tests
      'no-console': 'off',
    },
  },
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'dist/**',
      'coverage/**',
      'next-env.d.ts',
      'src/generated/**',
      '*.config.js',
      '*.config.mjs',
      'jest.setup.ts',
      'jest.config.ts',
      'cypress.config.ts',
    ],
  },
];

export default eslintConfig;
