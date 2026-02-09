# Next Admin Starter - Free

🆓 **Free 버전** - 현대적인 관리자 대시보드 시작 키트

## 🚀 무료 기능

- ✅ **기본 대시보드** - 데이터 시각화
- ✅ **이메일 로그인** - 기본 인증 시스템
- ✅ **사용자 관리** - CRUD 기능
- ✅ **결제 내역** - 트랜잭션 관리
- ✅ **다국어 지원** - 한국어/영어
- ✅ **반응형 디자인** - 모바일 최적화
- ✅ **현대적 UI** - Tailwind CSS + Shadcn/ui

## 💰 Premium 버전과의 차이

| 기능               | Free 버전 | Premium 버전 |
| ------------------ | --------- | ------------ |
| 기본 대시보드      | ✅        | ✅           |
| 이메일 로그인      | ✅        | ✅           |
| 사용자 관리        | ✅        | ✅           |
| 결제 내역          | ✅        | ✅           |
| 다국어 지원        | ✅        | ✅           |
| **Google OAuth**   | ❌        | ✅           |
| **고급 분석**      | ❌        | ✅           |
| **Pricing 페이지** | ❌        | ✅           |
| **우선 지원**      | ❌        | ✅           |
| **설정 가이드**    | ❌        | ✅           |

## 💎 Premium 버전 기능 상세

### 🔥 **Google OAuth 로그인**

- 구글 계정으로 빠른 로그인
- 보안적인 OAuth 2.0 인증
- 이메일 가입 없이 바로 접근

### 📊 **고급 분석 차트**

- **사용자 성장 차트** - 월별 가입자 추이 (라인 차트)
- **결제 통계 파이 차트** - 성공/실패/대기 비율
- **매출 추이 차트** - 6개월간 수익 분석
- **실시간 데이터 업데이트**

### 💰 **Pricing 페이지 템플릿**

- 3단계 가격 정책 (Free/Pro/Enterprise)
- 기능 비교 표
- 업그레이드 유도 CTA
- 반응형 디자인

### 🛠️ **완전한 설정 가이드**

- **Google OAuth 설정** - 단계별 가이드
- **데이터베이스 설정** - SQL 스크립트 제공
- **환경 변수 설정** - 상세한 설명
- **배포 가이드** - Vercel/Netlify 등

### 🎨 **추가 프리미엄 컴포넌트**

- 고급 UI 컴포넌트
- 테마 색상 옵션
- 커스텀 훅

### 🚀 **우선 기술 지원**

- 버그 수정 우선 처리
- 기능 요청 검토
- 개발 컨설팅

## 💰 가격 정책

- **Free**: 무료 (MIT 라이선스)
- **Pro**: $10/월 (상용 라이선스)
- **Enterprise**: 맞춤 견적 (상용 라이선스)

## 🚀 Premium 버전으로 업그레이드

**왜 Premium 버전인가?**

1. **시간 절약** - 설정 가이드로 수시간 단축
2. **전문가성** - Google OAuth, 고급 분석 등
3. **지속 업데이트** - 새로운 기능 지속 추가
4. **기술 지원** - 우선 지원과 컨설팅
5. **상업 라이선스** - 상업적 사용 가능

**👉 [Premium 버전 보기](https://github.com/your-org/next-admin-starter-premium)**

---

**💡 Free 버전으로도 충분한 기능을 제공합니다!**

- 완전한 기본 관리자 기능
- 무제한 커스터마이징
- 오픈소스 수정 자유
- 활발한 커뮤니티 지원

## 🛠️ 기술 스택

- **프레임워크**: Next.js 16
- **데이터베이스**: Supabase
- **스타일링**: Tailwind CSS
- **컴포넌트**: Shadcn/ui
- **아이콘**: Lucide React
- **다국어**: react-i18next
- **타입스크립트**: TypeScript

## 📋 요구사항

- Node.js 18+
- npm 또는 yarn

## 🚀 빠른 시작

### 1. 레포지토리 클론

```bash
git clone [your-repo-url]
cd next-admin-starter-free
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 환경 변수 설정

**Free 버전에서는 Supabase 설정 없이도 바로 실행 가능합니다!**

데모 모드로 바로 체험해보세요:

```bash
npm run dev
```

**실제 데이터베이스 연결을 원하시면:**

`.env.local` 파일 생성:

```env
# Supabase 설정 (선택사항 - Free 버전은 데모 모드로 작동)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Supabase 프로젝트 설정 (선택사항)

**Free 버전에서는 이 단계를 건너뛰어도 됩니다!**

실제 데이터베이스를 사용하려면:

1. [Supabase Dashboard](https://supabase.com/dashboard)에서 새 프로젝트 생성
2. Authentication > Settings에서 기본 설정 확인
3. Database에서 필요한 테이블 생성

**SQL 스크립트:**

```sql
-- users 테이블
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  role VARCHAR(50) DEFAULT 'user',
  status VARCHAR(50) DEFAULT 'active',
  last_login TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- payments 테이블
CREATE TABLE payments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  amount DECIMAL(10,2) NOT NULL,
  status VARCHAR(50) DEFAULT 'success',
  date TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### 5. 개발 서버 실행

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 접속

## 📊 데이터베이스 스키마

### users 테이블

```sql
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  role VARCHAR(50) DEFAULT 'user',
  status VARCHAR(50) DEFAULT 'active',
  last_login TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### payments 테이블

```sql
CREATE TABLE payments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  amount DECIMAL(10,2) NOT NULL,
  status VARCHAR(50) DEFAULT 'success',
  date TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 🎨 Free 버전 확장 가이드

### ✅ Free 버전에서만 가능한 커스터마이징

#### 1. **새로운 페이지 추가**

```bash
# 새로운 페이지 생성
mkdir src/app/new-feature
touch src/app/new-feature/page.tsx
```

```tsx
// src/app/new-feature/page.tsx
export default function NewFeature() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold">새로운 기능</h1>
      <p>Free 버전에서 자유롭게 추가할 수 있습니다!</p>
    </div>
  );
}
```

#### 2. **새로운 UI 컴포넌트 추가**

```bash
# 컴포넌트 생성
mkdir src/components/features
touch src/components/features/my-component.tsx
```

```tsx
// src/components/features/my-component.tsx
export function MyComponent() {
  return (
    <div className="p-4 border rounded-lg bg-card">
      <h3 className="font-semibold">나만의 컴포넌트</h3>
      <p className="text-sm text-muted-foreground">
        Free 버전에서 무한 확장 가능!
      </p>
    </div>
  );
}
```

#### 3. **새로운 API 라우트 추가**

```bash
# API 라우트 생성
mkdir src/app/api/data
touch src/app/api/data/route.ts
```

```tsx
// src/app/api/data/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    message: "Free 버전 API!",
    timestamp: new Date().toISOString(),
  };

  return NextResponse.json(data);
}
```

#### 4. **테마 색상 커스터마이징**

```css
/* src/app/globals.css */
:root {
  --primary: 220 90% 56%; /* 기본 파란색 */
  --primary-foreground: 210 40% 98%;

  /* 원하는 색상으로 변경 */
  --primary: 142 76% 36%; /* 초록색 */
  --primary: 0 84% 60%; /* 빨간색 */
  --primary: 280 100% 70%; /* 보라색 */
}
```

#### 5. **다국어 추가**

```typescript
// lib/i18n.ts
const ja = {
  welcome: "ようこそ",
  dashboard: "ダッシュボード",
  // 일본어 번역 추가
};

i18n.init({
  resources: {
    ko: { translation: ko },
    en: { translation: en },
    ja: { translation: ja }, // 새 언어 추가
  },
});
```

#### 6. **데이터베이스 테이블 추가**

```sql
-- 새로운 테이블 생성 (Free 버전 가능)
CREATE TABLE categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- RLS 정책 추가
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view categories" ON categories
    FOR SELECT USING (true);
```

### 🚀 Free 버전 제한 없음

Free 버전에서는 다음을 **무제한**으로 할 수 있습니다:

- ✅ 무한한 페이지 추가
- ✅ 무한한 컴포넌트 생성
- ✅ 무한한 API 라우트
- ✅ 완전한 테마 커스터마이징
- ✅ 무제한 언어 추가
- ✅ 데이터베이스 확장
- ✅ 완전한 오픈소스 수정

### 💡 추천 확장 아이디어

1. **블로그 기능** - 게시글 CRUD
2. **갤러리** - 이미지 관리
3. **캘린더** - 일정 관리
4. **채팅** - 실시간 메시지
5. **파일 업로드** - 문서 관리

## 🎨 커스터마이징

### 테마 색상 변경

`src/app/globals.css`에서 CSS 변수 수정:

```css
:root {
  --primary: 210 40% 98%;
  --primary-foreground: 222.2 84% 4.9%;
  /* ... 다른 색상들 */
}
```

### 다국어 추가

`lib/i18n.ts`에서 새 언어 추가:

```typescript
const ja = {
  // 일본어 번역
};

i18n.init({
  resources: {
    ko: { translation: ko },
    en: { translation: en },
    ja: { translation: ja }, // 추가
  },
});
```

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── (auth)/          # 인증 관련 페이지
│   ├── (marketing)/     # 마케팅 페이지
│   ├── dashboard/        # 대시보드 페이지
│   └── globals.css      # 전역 스타일
├── components/
│   └── ui/             # UI 컴포넌트
├── lib/
│   ├── supabase/       # Supabase 클라이언트
│   └── i18n.ts        # 다국어 설정
└── types/              # TypeScript 타입
```

## 🔐 인증

### 이메일 로그인

- 기본 제공되는 데모 계정:
  - 이메일: `test@test.com`
  - 비밀번호: `test1234`

## 📱 라우트

- `/` - 마케팅 홈페이지
- `/pricing` - 가격 정책 페이지 (Premium 버전 기능 안내)
- `/login` - 로그인 페이지
- `/dashboard` - 대시보드 (인증 필요)
- `/dashboard/users` - 사용자 관리
- `/dashboard/payments` - 결제 내역
- `/dashboard/settings` - 설정 페이지

## 🚀 Premium 버전으로 업그레이드

더 많은 기능이 필요하신가요? [Premium 버전](https://github.com/your-org/next-admin-starter-premium)을 확인하세요:

- 🔥 **Google OAuth** 로그인
- 📊 **고급 분석** 기능
- 💰 **Pricing 페이지** 템플릿
- 🎨 **추가 테마** 옵션
- 🚀 **우선 기술** 지원

## 🚀 배포

### Vercel

```bash
npm run build
vercel --prod
```

### 다른 플랫폼

1. 빌드: `npm run build`
2. 시작: `npm start`
3. 환경 변수 설정
4. 도메인 연결

## 🤝 기여

1. Fork
2. Feature 브랜치 생성
3. 커밋 & 푸시
4. Pull Request

## 📄 라이선스

MIT License

## 💬 지원

이슈 리포트 또는 [이메일](mailto:support@example.com)로 문의

---

**Made with ❤️ using Next.js 16 + Supabase**

**👉 [Premium 버전으로 업그레이드](https://github.com/your-org/next-admin-starter-premium)**
