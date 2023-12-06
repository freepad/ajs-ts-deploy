module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended'],
  overrides: [
    {
      files: ['**/*/*.test.ts'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      rules: { 'jest/prefer-expect-assertions': 'off' },
    },
  ],
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
    semi: 'off',
  },
};
