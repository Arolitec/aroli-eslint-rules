module.exports = {
  overrides: [
    {
      files: ['*.spec.ts'],
      rules: {
        'max-lines-per-function': 'off',
      },
    },
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-console': 'warn',
    'max-depth': ['error', { max: 1 }],
    'max-lines-per-function': ['error', 17],
    'max-params': ['error', 3],
    eqeqeq: 'error',
    'prefer-const': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error'],
  },
  env: {
    browser: true,
    node: true,
    es2022: true,
    jest: true,
    worker: true
  },
}
