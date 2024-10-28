import js from '@eslint/js';
import globals from 'globals';
import html from 'eslint-plugin-html';
import markdown from 'eslint-plugin-markdown';
import prettier from 'eslint-plugin-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import babelParser from '@babel/eslint-parser';

export default [
  js.configs.recommended,
  ...markdown.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    plugins: {
      html: html,
      markdown: markdown,
      prettier: prettier
    },
    rules: {
      'no-async-promise-executor': 'warn',
      'no-prototype-builtins': 'warn',
      'prettier/prettier': 'error',
      'no-underscore-dangle': 'off',
      'no-restricted-exports': 'off',
      'no-restricted-syntax': 'off',
      'no-shadow': 'warn'
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        myCustomGlobal: 'readonly'
      },
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        requireConfigFile: false,
        babelOptions: {
          configFile: false,
          presets: ['@babel/preset-env']
        }
      }
    },
    ignores: ['node_modules/', '_site/']
  }
];
