module.exports = {
  env: {
    mocha: true,
    "truffle/globals": true,
    node: true,
    es2021: true
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 12
  },
  plugins: ["truffle"],
  rules: {
    semi: "always",
    quotes: "double"
  }
};
