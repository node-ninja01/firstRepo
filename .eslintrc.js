module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1, }],
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'always'],
    "no-console": "off",
    "no-unused-vars": [2, {"args": "after-used", "argsIgnorePattern": "next"}]
  },
};
