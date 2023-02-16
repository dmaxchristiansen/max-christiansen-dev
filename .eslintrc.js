module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json", "./cypress/tsconfig.json"],
  },
  root: true,
  env: {
    browser: true,
    node: true,
  },
  plugins: ["@typescript-eslint", "unused-imports", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:cypress/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "react-app",
  ],
  ignorePatterns: ["cypress.config.ts", "public"],
  rules: {
    quotes: [
      "warn",
      "double",
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    "jsx-a11y/media-has-caption": ["off", { video: ["Video"] }],
    "react/destructuring-assignment": "warn",
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "warn",
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
