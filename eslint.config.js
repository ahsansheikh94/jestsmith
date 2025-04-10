const { defineConfig } = require("eslint-define-config");
const typescriptEslintPlugin = require("@typescript-eslint/eslint-plugin");

module.exports = defineConfig([
  {
    languageOptions: {
      parser: require("@typescript-eslint/parser"),
      parserOptions: {
        project: "./tsconfig.json",
        createDefaultProgram: true,
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin,
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
    rules: {
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/ban-ts-comment": "error",
      "@typescript-eslint/no-empty-function": "error",
      "@typescript-eslint/explicit-member-accessibility": [
        "error",
        { accessibility: "explicit" },
      ],
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/no-unsafe-call": "error",
      "@typescript-eslint/no-unsafe-member-access": "error",
      "@typescript-eslint/no-unsafe-return": "error",
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "no-console": "error",
      "no-debugger": "error",
      "no-undef": "off",
      "no-unused-vars": "off",
      "no-empty-function": "off",
      "no-eval": "error",
      "prefer-const": "error",
      "no-var": "error",
      "arrow-body-style": ["error", "always"],
      "prefer-arrow-callback": "error",
    },
  },
  // Exclude eslint.config.js and release.config.js from TypeScript parsing and type-based rules
  {
    files: ["eslint.config.js", "release.config.js"],
    languageOptions: {
      parser: require("espree"), // Use a JavaScript parser for these files
    },
    rules: {
      // Disable type checking for JavaScript files
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-return": "off",
    },
  },
  // TypeScript-specific rules for .ts and .tsx files
  {
    files: ["*.ts", "*.tsx"],
    rules: {
      "@typescript-eslint/no-var-requires": "error",
      "@typescript-eslint/ban-types": "error",
      "@typescript-eslint/type-annotation-spacing": "error",
    },
  },
]);
