module.exports = {
  "extends": [
    "airbnb",
    "plugin:flowtype/recommended"
  ],

  "parser": "babel-eslint",

  "plugins": [
    "flowtype"
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

    "flowtype/generic-spacing": 0
  }
};
