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
  ],
  plugins: ['jest'],
  rules: {},
}
