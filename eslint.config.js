import pluginJs from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import pluginReact from "eslint-plugin-react";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]
  },
  {
    languageOptions: {
      globals: globals.browser
    }
  },
  pluginJs.configs.recommended,
  prettierRecommended,
  pluginReact.configs.flat.recommended,
  {
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    parserOptions: {
      parser: "@typescript-eslint/parser",
      extraFileExtensions: [".tsx"],
      ecmaVersion: 2021
    },
    plugins: ["@typescript-eslint"],
    rules: {
      "no-console": "off",
      "react/react-in-jsx-scope": "off",
      "import/no-named-as-default": "off",
      "import/order": [
        "error",
        {
          "newlines-between": "always-and-inside-groups",

          alphabetize: {
            order: "asc",
            caseInsensitive: true
          },

          groups: [
            "external",
            "builtin",
            "internal",
            "sibling",
            "parent",
            "index"
          ]
        }
      ],
      "prettier/prettier": [
        "warn",
        {
          arrowParens: "avoid",
          printWidth: 80,
          endOfLine: "auto",
          semi: true,
          singleQuote: false,
          trailingComma: "none"
        }
      ]
    }
  },
  importPlugin.flatConfigs.recommended
];
