module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  globals: { __REDUX_DEVTOOLS_EXTENSION__: true },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  extends: ["alloy", "alloy/react", "alloy/typescript"],
  plugins: ["emotion", "react-hooks"],
  rules: {
    "@typescript-eslint/no-useless-constructor": "warn",
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/explicit-member-accessibility": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
