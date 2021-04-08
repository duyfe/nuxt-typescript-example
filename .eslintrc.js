module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'comma-dangle': ['error', 'never'],
    'semi': ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],
    'max-len': 'off',
    'linebreak-style': 'off',
    'require-jsdoc': 'off',
    'no-irregular-whitespace': 'off',
    'no-invalid-this': 'off',
    'object-curly-spacing': ['error', 'always'],
    'no-undef': 'off'
  }
}
