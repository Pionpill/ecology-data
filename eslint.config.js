import tsParser from "@typescript-eslint/parser";
import ts from "@typescript-eslint/eslint-plugin";

export default [
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
    },
    plugins: {
      ts
    },
  },
];
