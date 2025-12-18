module.exports = {
  root: true,
  extends: [
    '@react-native',
    '@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  env: {
    'react-native/react-native': true,
  },
};