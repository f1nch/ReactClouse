module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.tsx'] }],
    'import/no-unresolved': 0,
    'react/react-in-jsx-scope': 0,
    'react/no-array-index-key': 0,
    'import/extensions': 0,
    'object-property-newline': 1,
    'object-curly-newline': [1, { multiline: true, minProperties: 3 }],
    'no-unneeded-ternary': 1,
    'implicit-arrow-linebreak': [0, 'beside'],
    'import/prefer-default-export': 0,
  },
};
