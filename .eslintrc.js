module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/eslint-recommended', 'plugin:prettier/recommended'],
  plugins: ['react', '@typescript-eslint', 'eslint-plugin', 'jest'],
  parser: '@typescript-eslint/parser',
  rules: {
    // ! Will be Removed
    'import/no-cycle': 0,
    'mouse-events-have-key-events': 0,
    // Custom
    'no-use-before-define': 0,
    'no-unused-vars': 0,
    'operator-linebreak': ["error", "after", { "overrides": { "?": "before", ":": "before" } }],
    // React
    'react/prop-types': 0,
    'react/display-name': 0,
  },
  settings: {
    'prettier/prettier': 'error',
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
}
