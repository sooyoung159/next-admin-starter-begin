// src/app/(marketing)/page.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Laptop } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { LanguageSwitcher } from "@/components/ui/language-switcher";

export default function MarketingPage() {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Delay setting isClient to true until after hydration
    const timer = setTimeout(() => setIsClient(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!isClient) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

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
              <LanguageSwitcher />
              <Link href="/login">
                <Button
                  size="sm"
                  className="shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40"
                >
                  {t("login")}
                </Button>
              </Link>
            </nav>
            <div className="md:hidden flex items-center space-x-2">
              <LanguageSwitcher />
              <Link href="/login">
                <Button size="sm" className="shadow-lg shadow-primary/25">
                  {t("login")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* 2. 히어로 섹션 */}
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
          <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:50px_50px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-background/80" />

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
            <div className="mx-auto max-w-4xl text-center space-y-8">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                ✨ Next.js 16 + Supabase + Tailwind CSS
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  <span className="block">{t("heroTitle")}</span>
                </h1>
                <p className="mx-auto text-lg text-muted-foreground sm:text-xl md:text-2xl leading-relaxed max-w-3xl">
                  {t("heroDescription")}
                </p>
              </div>

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
                    {t("viewGithub")}
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">
                    {t("components")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">
                    {t("responsive")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {t("setupTimeValue")}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t("installTime")}
                  </div>
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
                {t("featuresDescription")}
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-2xl border bg-card p-8 shadow-sm transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="rounded-xl bg-primary/10 p-3 w-fit mb-4">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    {t("authentication")}
                  </h3>
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
                  <h3 className="text-xl font-bold mb-3">
                    {t("dashboardFeature")}
                  </h3>
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

              {/* i18n 데모 카드 */}
              <div className="group relative overflow-hidden rounded-2xl border bg-card p-8 shadow-sm transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="rounded-xl bg-primary/10 p-3 w-fit mb-4">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{t("i18nFeature")}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t("i18nFeatureDesc")}
                  </p>
                  {/* 실제 언어 스위치 데모 */}
                  <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm font-medium">
                      {t("tryLanguageSwitch")}:
                    </span>
                    <LanguageSwitcher />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 4. 가격 정책 섹션 */}
      <section id="pricing" className="w-full py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              {t("pricingTitle")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("pricingDescription")}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
            {/* Free Plan */}
            <div className="relative rounded-2xl border bg-card p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{t("freePlan")}</h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-4xl font-bold">{t("freePrice")}</span>
                  <span className="text-muted-foreground ml-2">
                    /{t("monthly")}
                  </span>
                </div>
                <p className="text-muted-foreground">{t("freeDescription")}</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0" />
                  <span>{t("allFeatures")}</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0" />
                  <span>{t("basicSupport")}</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0" />
                  <span>{t("mitLicense")}</span>
                </li>
              </ul>
              <Button className="w-full" size="lg" variant="outline">
                {t("getStartedFree")}
              </Button>
            </div>

            {/* Pro Plan */}
            <div className="relative rounded-2xl border-2 border-primary bg-card p-8 shadow-lg shadow-primary/10 scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  {t("mostPopular")}
                </div>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{t("proPlan")}</h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-4xl font-bold">{t("proPrice")}</span>
                  <span className="text-muted-foreground ml-2">
                    /{t("monthly")}
                  </span>
                </div>
                <p className="text-muted-foreground">{t("proDescription")}</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0" />
                  <span>{t("allFeatures")}</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0" />
                  <span>{t("prioritySupport")}</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0" />
                  <span>{t("googleOAuth")}</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0" />
                  <span>{t("advancedAnalytics")}</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0" />
                  <span>{t("commercialLicense")}</span>
                </li>
              </ul>
              <Button className="w-full" size="lg">
                {t("upgradeToPro")}
              </Button>
            </div>

            {/* Enterprise Plan */}
            <div className="relative rounded-2xl border bg-card p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">
                  {t("enterprisePlan")}
                </h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-4xl font-bold">
                    {t("enterprisePrice")}
                  </span>
                </div>
                <p className="text-muted-foreground">
                  {t("enterpriseDescription")}
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0" />
                  <span>{t("allFeatures")}</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0" />
                  <span>{t("customIntegrations")}</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0" />
                  <span>{t("dedicatedSupport")}</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0" />
                  <span>{t("customDevelopment")}</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full" size="lg">
                {t("contactSales")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 푸터 */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-between px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">{t("copyright")}</p>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            {t("termsOfService")}
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            {t("privacyPolicy")}
          </Link>
        </nav>
      </footer>
    </div>
  );
}
