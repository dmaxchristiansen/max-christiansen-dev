module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "unused-imports", "react-hooks"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
      },
    },
  ],
  extends: ["react-app", "plugin:jsx-a11y/recommended", "eslint:recommended"],
  ignorePatterns: ["gatsby-*.ts", "public"],
  rules: {
    quotes: [
      "warn",
      "double",
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    "react/destructuring-assignment": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
};
