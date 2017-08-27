module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    browser: true,
    node: true,
    'jest/globals': true
  },
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react'
  ],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import',
    'flowtype',
    'compat',
    'jest',
    'prettier'
  ],
  rules: {
    'compat/compat': [2],
    'flowtype/no-weak-types': [1],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '*.js',
          '**/*.spec.js',
          '**/*.spec.jsx',
          'config/**/*.js',
          'bin/*'
        ]
      }
    ],
    indent: ['error', 4],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'react/react-in-jsx-scope': [0],
    'react/jsx-filename-extension': [0]
  },
  settings: {
    react: {
      pragma: 'h'
    }
  }
};
