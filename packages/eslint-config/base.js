import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import onlyWarn from "eslint-plugin-only-warn";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import turboPlugin from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";
/**
 * 공유 ESLint 설정
 * TypeScript 프로젝트를 위한 최적화된 규칙 설정
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const config = [
  // 기본 설정
  js.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier, // Prettier와 충돌하는 규칙 비활성화 (마지막에 위치)

  // 메인 규칙 설정
  {
    plugins: {
      turbo: turboPlugin,
      import: importPlugin,
      react,
      "react-hooks": reactHooks,
    },
    settings: {
      react: {
        version: "detect", // React 버전 자동 감지
      },
    },
    rules: {
      // Import 관련 규칙
      "import/order": [
        "warn",
        {
          groups: [
            "builtin", // Node.js 내장 모듈
            "external", // 외부 라이브러리
            "internal", // 프로젝트 내부 모듈
            ["parent", "sibling", "index"], // 상대 경로
            "type", // type imports
          ],
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
            {
              pattern: "next/**",
              group: "external",
              position: "before",
            },
            {
              pattern: "@repo/**",
              group: "internal",
              position: "before",
            },
            {
              pattern: "@/**",
              group: "internal",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["react", "type"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          distinctGroup: false,
          warnOnUnassignedImports: true,
        },
      ],
      "import/no-duplicates": "error",
      "import/no-unresolved": "off", // TypeScript가 처리

      // React 관련 규칙
      "react/react-in-jsx-scope": "off", // React 17+ 자동 import
      "react/prop-types": "off", // TypeScript 사용시 불필요
      "react/jsx-uses-react": "off", // React 17+ 불필요
      "react/jsx-uses-vars": "error",
      "react/jsx-key": "error",
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-no-undef": "error",
      "react/jsx-pascal-case": "error",
      "react/no-children-prop": "error",
      "react/no-danger-with-children": "error",
      "react/no-deprecated": "error",
      "react/no-direct-mutation-state": "error",
      "react/no-find-dom-node": "error",
      "react/no-is-mounted": "error",
      "react/no-render-return-value": "error",
      "react/no-string-refs": "error",
      "react/no-unescaped-entities": "error",
      "react/no-unknown-property": "error",
      "react/no-unsafe": "warn",
      "react/require-render-return": "error",
      "react/self-closing-comp": ["error", { component: true, html: true }],

      // React Hooks 규칙
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Turbo 관련
      "turbo/no-undeclared-env-vars": "warn",

      // 코드 품질 규칙
      "no-debugger": "error",
      "no-console": ["warn", { allow: ["warn", "error", "info"] }],
      "no-var": "error",
      "no-duplicate-imports": "error",
      curly: ["error", "all"],
      eqeqeq: ["error", "always"],
      "prefer-const": [
        "error",
        {
          destructuring: "all",
          ignoreReadBeforeAssign: false,
        },
      ],
    },
  },

  // 모든 오류를 경고로 변환 (개발 편의성)
  {
    plugins: {
      onlyWarn,
    },
  },

  // 무시할 파일/폴더
  {
    ignores: [
      "**/dist/**",
      "**/build/**",
      "**/node_modules/**",
      "**/.next/**",
      "**/coverage/**",
      "**/.turbo/**",
    ],
  },
];
