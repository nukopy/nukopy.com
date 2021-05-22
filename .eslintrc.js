module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  // parserOptions: {
  //   sourceType: 'module',
  //   extraFileExtensions: ['.json'],
  // },
  rules: {
    'prefer-arrow-callback': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
  },
};
