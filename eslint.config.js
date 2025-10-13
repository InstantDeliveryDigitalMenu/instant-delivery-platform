import pluginJs from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']
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
    rules: {
      'no-console': 'off',
      'react/react-in-jsx-scope': 'off',
      'import/no-named-as-default': 'off',
      'import/order': [
        'error',
        {
          'newlines-between': 'always-and-inside-groups',

          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          },

          groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index']
        }
      ],
      'prettier/prettier': [
        'warn',
        {
          arrowParens: 'avoid',
          printWidth: 120,
          semi: true,
          singleQuote: true,
          trailingComma: 'none'
        }
      ]
    }
  },
  importPlugin.flatConfigs.recommended
];
