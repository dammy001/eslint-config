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
        sourceType: 'module',
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
    'require-await': 'error',
    'vue/valid-next-tick': 'off',
    'no-console': process.env.NODE_ENV !== 'production' ? 'warn' : 'error',
    'vue/define-macros-order': [
      'warn',
      {
        order: ['defineProps', 'defineEmits'],
      },
    ],
  },
}
