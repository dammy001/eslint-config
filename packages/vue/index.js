module.exports = {
 extends: [
  'plugin:vue/vue3-recommended',
  '@damilaredev/eslint-config-typescript',
 ],
 overrides: [],
 rules: {
  'vue/require-default-prop': 'off',
  'vue/multi-word-component-names': 'off',
  'vue/no-v-html': 'off',
  'vue/require-prop-types': 'off',
 },
};
