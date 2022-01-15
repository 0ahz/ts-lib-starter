module.exports = {
  root: true,
  env: {
    jest: true,
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
