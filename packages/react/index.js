module.exports = {
 extends: ['plugin:react/recommended', '@damilaredev/eslint-config-typescript'],
 settings: {
  react: {
   version: '17.0',
  },
 },
 plugins: ['react-hooks'],
 rules: {
  'react/react-in-jsx-scope': 'off',
  'react/button-has-type': 'off',
  'react/jsx-props-no-spreading': 'off',
  'react/jsx-boolean-value': 'off',
  'react/require-default-props': 'off',
  'react/destructuring-assignment': 'off',
  'react-hooks/rules-of-hooks': 'error',
 },
};
