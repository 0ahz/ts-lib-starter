module.exports = {
  root: true,
  env: {
    jest: true,
    node: true,
    browser: true,
  },
  globals: {},
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    //
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['jest'],
  rules: {},
}
