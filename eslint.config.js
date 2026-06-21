import { globalIgnores } from 'eslint/config';
import globals from 'globals';
import eslintJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import unusedImports from 'eslint-plugin-unused-imports';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default tseslint.config(
  eslintJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tseslint.parser,
    },

    plugins: {
      'react-refresh': reactRefresh,
      '@stylistic': stylistic,
      'unused-imports': unusedImports,
      'simple-import-sort': simpleImportSort,
      'react-hooks': reactHooks,
    },

    rules: {
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],

      '@stylistic/quotes': ['error', 'double', { avoidEscape: true, allowTemplateLiterals: true }],
      '@stylistic/singleQuote': 'error',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/consistent-type-imports': 'error',

      '@typescript-eslint/no-explicit-any': 'warn',

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',

      '@stylistic/semi': 'error',
      '@stylistic/indent': [
        'error',
        2,
        {
          offsetTernaryExpressions: true,
          flatTernaryExpressions: true,
          SwitchCase: 1,
        },
      ],
      '@stylistic/block-spacing': ['error', 'always'],
      '@stylistic/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'semi',
            requireLast: true,
          },

          singleline: {
            delimiter: 'semi',
            requireLast: false,
          },

          multilineDetection: 'brackets',
        },
      ],
      '@stylistic/object-curly-newline': [
        'error',
        {
          consistent: true,
        },
      ],
      '@stylistic/max-len': [
        'error',
        {
          ignoreComments: true,
          code: 100,
        },
      ],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/object-property-newline': [
        'error',
        {
          allowAllPropertiesOnSameLine: true,
        },
      ],
      '@stylistic/arrow-spacing': 'error',

      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react', '^@?\\w'],
            ['^app/', '^widgets/', '^features/', '^entities/', '^shared/'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ['\\.module\\.scss$'],
          ],
        },
      ],
    },
  },
  globalIgnores(['./build_*', './.eslintrc.cjs', './eslint.*', './src/shared/proto/*']),
);
