// eslint.config.mjs
import typescript from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';

export default [
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.browser,
        React: 'readable'  // Add this line to define React as a global
      }
    },
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      "no-undef": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "warn",
    },
    ignores: ["node_modules/**", "dist/**", "build/**"]
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        React: 'readable'
      }
    },
    rules: {
      "no-undef": "error",
      "no-unused-vars": "warn",
    }
  }
];