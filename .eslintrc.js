module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'max-len': 'warn',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'linebreak-style': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
