import unjs from 'eslint-config-unjs'

export default unjs(
  {
    ignores: ['dist', 'node_modules'],
  },
  {
    rules: {
      'unicorn/prefer-export-from': ['error', { ignoreUsedVariables: true }],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
)
