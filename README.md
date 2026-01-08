# 앨런's 레시피 (Alan's Recipe)

맞춤 추천 레시피와 큐레이션으로 맛있는 식탁을 차려보세요. Next.js 16과 React 19를 기반으로 구축된 현대적인 레시피 웹 애플리케이션입니다.

## 📋 목차

- [프로젝트 소개](#프로젝트-소개)
- [기술 스택](#기술-스택)
- [주요 기능](#주요-기능)
- [프로젝트 구조](#프로젝트-구조)
- [시작하기](#시작하기)
- [개발 환경 설정](#개발-환경-설정)
- [주요 컴포넌트](#주요-컴포넌트)
- [라우팅 구조](#라우팅-구조)
- [스타일링](#스타일링)

## 🎯 프로젝트 소개

앨런's 레시피는 사용자에게 맞춤형 레시피 추천과 큐레이션된 시그니처 요리 컬렉션을 제공하는 웹 애플리케이션입니다. 직관적인 UI/UX와 반응형 디자인으로 모든 디바이스에서 최적의 경험을 제공합니다.

## 🛠 기술 스택

### 핵심 프레임워크
- **Next.js 16.0.10** - React 기반 풀스택 프레임워크
- **React 19.2.1** - 사용자 인터페이스 라이브러리
- **TypeScript 5** - 타입 안정성을 위한 정적 타입 검사

### 스타일링
- **Tailwind CSS 4.1.9** - 유틸리티 우선 CSS 프레임워크
- **Radix UI** - 접근성 높은 UI 컴포넌트 라이브러리
- **Shadcn/ui** - 재사용 가능한 UI 컴포넌트 시스템
- **Lucide React** - 아이콘 라이브러리

### 주요 라이브러리
- **next-themes** - 다크 모드 지원
- **react-hook-form** - 폼 관리
- **zod** - 스키마 검증
- **date-fns** - 날짜 유틸리티
- **@vercel/analytics** - 분석 도구

## ✨ 주요 기능

### 1. 홈페이지
- **맞춤 추천 레시피 (Alan's Choice: Top 3)**: 사용자에게 추천되는 상위 3개 레시피 표시
- **시그니쳐 리스트**: 큐레이션된 특별 레시피 컬렉션
- 반응형 그리드 레이아웃 (모바일/태블릿/데스크톱)

### 2. 레시피 상세 페이지
- 레시피 이미지, 제목, 설명
- 조리 시간, 난이도, 인분 정보
- 재료 목록
- 단계별 조리 방법
- 홈으로 돌아가기 네비게이션

### 3. 시그니쳐 컬렉션 페이지
- 테마별 레시피 컬렉션 (예: 주말 브런치 특집)
- 컬렉션 내 포함된 레시피 목록
- 각 레시피로의 직접 링크

### 4. 반응형 디자인
- 모바일: 슬라이더 형태의 시그니쳐 카드
- 태블릿: 2열 그리드 레이아웃
- 데스크톱: 3-4열 그리드 레이아웃

## 📁 프로젝트 구조

```
recipe-site/
├── app/                          # Next.js App Router 디렉토리
│   ├── layout.tsx               # 루트 레이아웃 (메타데이터, 폰트 설정)
│   ├── page.tsx                 # 홈페이지
│   ├── globals.css              # 전역 스타일 및 테마 변수
│   ├── recipe/
│   │   └── [id]/
│   │       └── page.tsx         # 동적 레시피 상세 페이지
│   └── signature/
│       └── [id]/
│           └── page.tsx         # 동적 시그니쳐 컬렉션 페이지
│
├── components/                   # React 컴포넌트
│   ├── header.tsx                # 헤더 네비게이션
│   ├── recipe-card.tsx          # 레시피 카드 컴포넌트
│   ├── recipes-for-you.tsx      # 추천 레시피 섹션
│   ├── signature-card.tsx       # 시그니쳐 카드 컴포넌트
│   ├── signature-list.tsx        # 시그니쳐 리스트 섹션
│   ├── theme-provider.tsx       # 테마 프로바이더
│   └── ui/                      # Shadcn/ui 컴포넌트들
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       └── ... (기타 UI 컴포넌트)
│
├── hooks/                        # 커스텀 훅
│   ├── use-mobile.ts
│   └── use-toast.ts
│
├── lib/                          # 유틸리티 함수
│   └── utils.ts                 # 클래스명 병합 유틸리티
│
├── public/                       # 정적 파일
│   ├── logo.png                 # 로고 이미지
│   ├── creamy-tomato-pasta-dish.jpg
│   ├── korean-bibimbap-bowl.jpg
│   └── ... (기타 이미지 파일)
│
├── styles/                       # 추가 스타일 파일
│   └── globals.css
│
├── components.json              # Shadcn/ui 설정
├── next.config.mjs              # Next.js 설정
├── package.json                 # 프로젝트 의존성
├── tsconfig.json                # TypeScript 설정
└── postcss.config.mjs          # PostCSS 설정
```

## 🚀 시작하기

### 사전 요구사항

- Node.js 18 이상
- npm, yarn, 또는 pnpm

### 설치

1. 저장소 클론
```bash
git clone <repository-url>
cd recipe-site
```

2. 의존성 설치
```bash
npm install
# 또는
yarn install
# 또는
pnpm install
```

3. 개발 서버 실행
```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
```

4. 브라우저에서 열기
```
http://localhost:3000
```

### 빌드

프로덕션 빌드를 생성하려면:

```bash
npm run build
npm start
```

## ⚙️ 개발 환경 설정

### TypeScript 설정

프로젝트는 TypeScript를 사용하며, `tsconfig.json`에서 다음 설정을 사용합니다:
- 엄격한 타입 검사 활성화
- 경로 별칭: `@/*` → `./*`
- React JSX 변환

### Next.js 설정

`next.config.mjs`에서:
- TypeScript 빌드 에러 무시 (개발 중)
- 이미지 최적화 비활성화

### 스타일 설정

- Tailwind CSS 4.x 사용
- CSS 변수를 통한 테마 시스템
- 다크 모드 지원 (CSS 변수 기반)
- 커스텀 폰트: Inter (본문), Playfair Display (제목)

## 🧩 주요 컴포넌트

### Header (`components/header.tsx`)
- 로고 및 사이트 제목
- 네비게이션 메뉴 (레시피, 시그니쳐, 소개)
- 반응형 디자인 (모바일에서 메뉴 숨김)

### RecipeCard (`components/recipe-card.tsx`)
- 레시피 썸네일 이미지
- 레시피 제목
- 조리 시간 및 난이도 표시
- 호버 효과 (이미지 확대, 오버레이)

### SignatureCard (`components/signature-card.tsx`)
- 시그니쳐 컬렉션 썸네일
- 그라데이션 오버레이
- 호버 시 제목 표시

### RecipesForYou (`components/recipes-for-you.tsx`)
- 추천 레시피 섹션
- 3열 그리드 레이아웃
- "더 많은 레시피 보러가기" 링크

### SignatureList (`components/signature-list.tsx`)
- 시그니쳐 컬렉션 리스트
- 데스크톱: 그리드 레이아웃
- 모바일/태블릿: 가로 스크롤 슬라이더
- 네비게이션 버튼 (좌/우 스크롤)

## 🗺 라우팅 구조

Next.js App Router를 사용한 파일 기반 라우팅:

```
/                          → 홈페이지 (app/page.tsx)
/recipe/[id]               → 레시피 상세 페이지 (app/recipe/[id]/page.tsx)
/signature/[id]            → 시그니쳐 컬렉션 페이지 (app/signature/[id]/page.tsx)
```

### 동적 라우팅

- `[id]`: 동적 세그먼트로 레시피 또는 시그니쳐 ID를 받습니다.
- `notFound()`: 존재하지 않는 ID에 대해 404 페이지를 표시합니다.

## 🎨 스타일링

### 색상 테마

프로젝트는 갈색 계열의 따뜻한 색상 팔레트를 사용합니다:
- Primary: `#8B4513` (SaddleBrown)
- Hover: `#A0522D` (Sienna)
- 배경: 흰색 및 회색 톤

### 폰트

- **본문**: Inter (Google Fonts)
- **제목**: Playfair Display (Google Fonts)

### 반응형 브레이크포인트

- 모바일: 기본 (< 640px)
- 태블릿: `md:` (≥ 768px)
- 데스크톱: `lg:` (≥ 1024px)
- 대형 데스크톱: `xl:` (≥ 1280px)

### 애니메이션

- 호버 효과: 이미지 확대, 그림자 변화
- 전환 효과: 부드러운 색상 및 크기 변화
- 스크롤 애니메이션: 슬라이더 스크롤

## 📝 데이터 구조

현재 프로젝트는 샘플 데이터를 사용합니다. 실제 프로덕션에서는 API나 데이터베이스에서 데이터를 가져와야 합니다.

### 레시피 데이터 구조
```typescript
{
  id: number
  title: string
  image: string
  cookTime: string
  difficulty: string
  servings: string
  description: string
  ingredients: string[]
  steps: string[]
}
```

### 시그니쳐 데이터 구조
```typescript
{
  id: number
  title: string
  description: string
  image: string
  recipes: Recipe[]
}
```

## 🔧 개발 스크립트

- `npm run dev` - 개발 서버 시작
- `npm run build` - 프로덕션 빌드 생성
- `npm run start` - 프로덕션 서버 시작
- `npm run lint` - ESLint 실행

## 📦 주요 의존성

### 프로덕션
- next, react, react-dom
- tailwindcss, tailwindcss-animate
- @radix-ui/* (UI 컴포넌트)
- lucide-react (아이콘)
- next-themes (테마 관리)

### 개발
- typescript
- @types/node, @types/react, @types/react-dom
- postcss, autoprefixer

## 🚧 향후 개선 사항

- [ ] API 연동 (레시피 데이터베이스)
- [ ] 사용자 인증 및 프로필
- [ ] 레시피 검색 기능
- [ ] 레시피 즐겨찾기
- [ ] 레시피 평가 및 리뷰
- [ ] 레시피 공유 기능
- [ ] 다크 모드 구현
- [ ] PWA 지원
- [ ] SEO 최적화

## 📄 라이선스

이 프로젝트는 개인 프로젝트입니다.

## 👤 작성자

앨런 (Alan)

---

**앨런's 레시피**로 맛있는 식탁을 차려보세요! 🍳✨
