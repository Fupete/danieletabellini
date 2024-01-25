module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:markdown/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    babelOptions: {
      presets: ['@babel/preset-env']
    },
    requireConfigFile: false
  },
  plugins: ['html', 'markdown', 'prettier'],
  rules: {
    'no-async-promise-executor': 'warn',
    'no-prototype-builtins': 'warn',
    'prettier/prettier': 'error',
    'import/extensions': 'off',
    'no-underscore-dangle': 'off',
    'no-restricted-exports': 'off',
    'no-restricted-syntax': 'off',
    'no-shadow': 'warn',
    'spaced-comment': 'warn'
  }
};
