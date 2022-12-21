module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/base',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    'vue/attributes-order': 'error',
    'vue/order-in-components': 'error',
    'vue/require-default-prop': 'error',
    'vue/multi-word-component-names': 'off',
    'import/order': 'error',
  },
  settings: {
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        alias: {
          '@': './app/javascript',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.d.ts'],
      },
    },
  },
};
