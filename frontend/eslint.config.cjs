const { defineConfig } = require('eslint-define-config');
const vuePlugin = require('eslint-plugin-vue');
const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');
const prettierConfig = require('eslint-config-prettier');

module.exports = defineConfig([
  {
    ignores: [
      'node_modules',
    ],
  },
  {
    files: ['*.js', '*.jsx', '*.ts', '*.tsx', '*.vue'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      'no-undef': 'error',
      'no-unused-vars': 'warn',
    },
  },
  {
    files: ['*.ts', '*.tsx'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
    },
  },
  {
    files: ['*.vue'],
    languageOptions: {
      parser: require('vue-eslint-parser'),
      parserOptions: {
        parser: require('@typescript-eslint/parser'),
      },
    },
    rules: {
      'vue/no-multiple-template-root': 'off',
    },
  },
  {
    plugins: {
      vue: vuePlugin,
      '@typescript-eslint': typescriptEslintPlugin,
    },
  },
  prettierConfig,
]);