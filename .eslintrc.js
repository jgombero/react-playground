module.exports = {
  extends: ["react-app", "prettier"],
  plugins: ["prettier"],
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    "import/no-extraneous-dependencies": "off",
    "prettier/prettier": "error",
    "no-console": "warn",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-filename-extension": "off", // disable if necessary
    "react/static-property-placement": "off", // disable if necessary
    "react/jsx-props-no-spreading": "off", // disable if necessary
    "react/require-default-props": "off",
    "jsx-a11y/click-events-have-key-events": 0,
    "arrow-body-style": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
  },
  parser: "babel-eslint",
};
