module.exports = {
  "extends": [
    "airbnb",
    "plugin:flowtype/recommended"
  ],

  "env": {
    "jest/globals": true
  },

  "parser": "babel-eslint",

  "plugins": [
    "flowtype",
    "jest"
  ],

  "rules": {
    "arrow-parens": "off",

    "react/jsx-filename-extension": "off",
    "react/prefer-stateless-function": "off",
    "react/sort-comp": [1, {
      order: [
        'type-annotations',
        'static-methods',
        'lifecycle',
        'everything-else',
        'render'
      ]
    }],

    "flowtype/generic-spacing": 0,

    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/valid-expect": "error"
  }
};
