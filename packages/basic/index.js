module.exports = {
 env: {
  es2021: true,
  browser: true,
  node: true,
 },
 extends: [
  'standard',
  'plugin:import/recommended',
  'plugin:eslint-comments/recommended',
  'plugin:jsonc/recommended-with-jsonc',
  'plugin:yml/standard',
 ],
 plugins: ['html', 'unicorn'],
 settings: {
  'import/resolver': {
   node: { extensions: ['.js', '.mjs', 'cjs', '.ts', '.d.ts'] },
  },
 },
 overrides: [
  {
   files: ['*.json', '*.json5'],
   parser: 'jsonc-eslint-parser',
   rules: {
    quotes: ['error', 'double'],
    'quote-props': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
   },
  },
  {
   files: ['*.yaml', '*.yml'],
   parser: 'yaml-eslint-parser',
  },
  {
   files: ['*.d.ts'],
   rules: {
    'import/no-duplicates': 'off',
   },
  },
  {
   files: ['*.js'],
   rules: {
    '@typescript-eslint/no-var-requires': 'off',
   },
  },
  {
   files: ['*.test.ts', '*.test.js', '*.spec.ts', '*.spec.js'],
   rules: {
    'no-unused-expressions': 'off',
   },
  },
 ],
 rules: {},
};
