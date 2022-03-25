module.exports = {
 extends: [
  'plugin:vue/vue3-recommended',
  '@damilaredev/eslint-config-typescript',
 ],
 overrides: [
  {
   files: ['*.vue'],
   parser: 'vue-eslint-parser',
   parserOptions: {
    parser: '@typescript-eslint/parser',
   },
   rules: {
    'no-unused-vars': 'off',
    'no-undef': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
   },
  },
 ],
 rules: {
  'vue/require-default-prop': 'off',
  'vue/multi-word-component-names': 'off',
  'vue/no-v-html': 'off',
  'vue/require-prop-types': 'off',
  'vue/multi-word-component-names': 'off',
 },
};
