module.exports = {
  settings: {
    react: { version: "detect" },
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  env: {
    es6: true,
    node: true,
  },
  plugins: ["prettier", "react"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "all",
        arrowParens: "always",
        printWidth: 100,
        semi: true,
      },
    ],
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/no-unescaped-entities": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "prefer-arrow-callback": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
};
