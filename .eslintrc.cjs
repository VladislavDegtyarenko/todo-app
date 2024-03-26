module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    '@wemake-services/javascript',
    '@wemake-services/typescript/recommended',
  ],
  ignorePatterns: ['dist', '.github', '.eslintrc.cjs', 'src/components/ui'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/no-absolute-path': 'off', // Disable absolute path check
    'no-console': 'off',
    'multiline-ternary': 'off',
  },
}
