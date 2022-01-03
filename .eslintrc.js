module.exports = {
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    "prettier"
  ],
  rules: {
    // override/add rules settings here, such as:
    "no-unused-vars": "off",
    "vue/no-unused-vars": "off",
    "vue/require-default-prop": "off",
    "semi": "error",
    "comma-dangle": "error"
  }
};