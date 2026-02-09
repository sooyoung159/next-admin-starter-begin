// src/components/marketing/marketing-page.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Laptop } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function MarketingPage() {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. 네비게이션 바 */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link
              className="flex items-center space-x-2 font-bold text-xl transition-transform hover:scale-105"
              href="#"
            >
              <div className="rounded-lg bg-primary p-1">
                <Laptop className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                AdminStarter
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                className="text-sm font-medium transition-colors hover:text-primary"
                href="#features"
              >
                {t("features")}
              </Link>
              <Link
                className="text-sm font-medium transition-colors hover:text-primary"
                href="#pricing"
              >
                {t("pricing")}
              </Link>
              <Link href="/login">
                <Button
                  size="sm"
                  className="shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40"
                >
                  {t("login")}
                </Button>
              </Link>
            </nav>
            <div className="md:hidden">
              <Link href="/login">
                <Button size="sm" className="shadow-lg shadow-primary/25">
                  {t("login")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* 2. 히어로 섹션 (가장 중요!) */}
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
          {/* 배경 장식 */}
          <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:50px_50px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-background/80" />

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
            <div className="mx-auto max-w-4xl text-center space-y-8">
              {/* 뱃지 */}
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                ✨ Next.js 16 + Supabase + Tailwind CSS
              </div>

              {/* 메인 타이틀 */}
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  <span className="block">{t("heroTitle")}</span>
                </h1>
                <p className="mx-auto text-lg text-muted-foreground sm:text-xl md:text-2xl leading-relaxed max-w-3xl">
                  {t("heroDescription")}
                </p>
              </div>

              {/* CTA 버튼 */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="h-12 px-8 text-lg shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40 hover:scale-105"
                  >
                    {t("viewDemo")}
                  </Button>
                </Link>
                <Link href="https://github.com/your-id/repo" target="_blank">
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 px-8 text-lg border-2 transition-all hover:scale-105"
                  >
                    GitHub 보기
                  </Button>
                </Link>
              </div>

              {/* 통계 */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">컴포넌트</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">반응형</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10분</div>
                  <div className="text-sm text-muted-foreground">설치 시간</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. 기능 소개 섹션 */}
        <section
          id="features"
          className="w-full py-20 md:py-32 bg-gradient-to-b from-background to-muted/30"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                {t("features")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                개발에 집중할 수 있도록 필요한 모든 것들이 준비되어 있습니다.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-2xl border bg-card p-8 shadow-sm transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="rounded-xl bg-primary/10 p-3 w-fit mb-4">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{t("authentication")}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("authenticationDesc")}
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border bg-card p-8 shadow-sm transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="rounded-xl bg-primary/10 p-3 w-fit mb-4">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{t("dashboardFeature")}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("dashboardFeatureDesc")}
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border bg-card p-8 shadow-sm transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="rounded-xl bg-primary/10 p-3 w-fit mb-4">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{t("responsive")}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("responsiveDesc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 4. 푸터 */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-between px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2026 Admin Starter. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            이용약관
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            개인정보처리방침
          </Link>
        </nav>
      </footer>
    </div>
  );
}
