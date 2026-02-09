# Next.js Admin Starter (Free Version)

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-38B2AC?style=for-the-badge&logo=tailwind-css)
![Shadcn/ui](https://img.shields.io/badge/Shadcn/ui-0.0.0-000000?style=for-the-badge&logo=shadcn-ui)
![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**🚀 완벽한 Next.js 관리자 대시보드 시작 템플릿**

[👉 GitHub에서 보기](https://github.com/sooyoung159/next-admin-starter-begin) • [📖 문서](#-빠른-시작) • [💰 Premium 버전](#-premium-버전과의-차이)

</div>

## 🌟 특징

- ✅ **기본 대시보드** - 데이터 시각화
- ✅ **이메일 로그인** - 기본 인증 시스템
- ✅ **사용자 관리** - CRUD 기능
- ✅ **결제 내역** - 트랜잭션 관리
- ✅ **다국어 지원** - 한국어/영어
- ✅ **반응형 디자인** - 모바일 최적화
- ✅ **현대적 UI** - Tailwind CSS + Shadcn/ui

## 🛠️ 기술 스택

- **프레임워크**: Next.js 16
- **데이터베이스**: Supabase (선택사항)
- **스타일링**: Tailwind CSS
- **컴포넌트**: Shadcn/ui
- **아이콘**: Lucide React
- **다국어**: react-i18next
- **타입스크립트**: TypeScript

## 🚀 빠른 시작

### 1. 레포지토리 클론

```bash
git clone https://github.com/sooyoung159/next-admin-starter-begin.git
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

### 4. 개발 서버 실행

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 접속

## 📱 라우트

- `/` - 마케팅 홈페이지
- `/pricing` - 가격 정책 페이지 (Premium 버전 기능 안내)
- `/login` - 로그인 페이지
- `/dashboard` - 대시보드 (인증 필요)
- `/dashboard/users` - 사용자 관리
- `/dashboard/payments` - 결제 내역
- `/dashboard/settings` - 설정 페이지

## 💰 Premium 버전과의 차이

| 기능 | Free 버전 | Premium 버전 |
|------------------|-----------|-------------|
| 기본 대시보드 | ✅ | ✅ |
| 이메일 로그인 | ✅ | ✅ |
| 사용자 관리 | ✅ | ✅ |
| 결제 내역 | ✅ | ✅ |
| 다국어 지원 | ✅ | ✅ |
| **Google OAuth** | ❌ | ✅ |
| **고급 분석** | ❌ | ✅ |
| **Pricing 페이지** | ❌ | ✅ |
| **우선 지원** | ❌ | ✅ |
| **설정 가이드** | ❌ | ✅ |

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

### 💰 **가격 정책**

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

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. [LICENSE](LICENSE) 파일을 확인하세요.

## 🤝 기여하기

기여를 환영합니다! Issues나 Pull Request를 남겨주세요.

---

<div align="center">
  <p>⭐ 이 프로젝트가 마음에 드셨다면 GitHub에서 Star를 눌러주세요!</p>
</div>
