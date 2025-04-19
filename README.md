# 0120im - Modern Web Platform

## 프로젝트 개요

0120im은 Next.js 기반의 모던 웹 플랫폼으로, 모노레포 구조를 활용하여 여러 애플리케이션과 공유 패키지를 효율적으로 관리합니다. 이 프로젝트는 Turborepo를 사용하여 빌드 프로세스를 최적화하고, 코드 재사용성을 극대화합니다.

## 폴더 구조

```
0120im/
├── apps/
│   ├── blog/              # 블로그 애플리케이션
│   ├── cslab/             # CS 연구실 애플리케이션
│   └── www/               # 메인 웹사이트 애플리케이션
├── packages/              # 공유 패키지 디렉토리
│   ├── eslint-config/     # ESLint 설정
│   ├── typescript-config/ # TypeScript 설정
│   └── ui/                # 공유 UI 컴포넌트 라이브러리
│       └── src/           # UI 소스 코드
└── turbo.json             # Turborepo 설정
```
