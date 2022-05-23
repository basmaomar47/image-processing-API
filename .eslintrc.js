module.exports = {
    env: {
    node: true,
    browser: true,
    es2021: true,
  },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier' ],
  parser: '@typescript-eslint/parser',
    parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 1,
  },
};
