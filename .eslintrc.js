module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/essential"
  ],
  "rules": {},
  "parserOptions": {
    "parser": "babel-eslint"
  }/* 
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "development" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "development" ? "warn" : "off"
  } */
};
