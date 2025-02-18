/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        printWidth: 100,
        singleQuote: true,
      },
    ],
  },
};
