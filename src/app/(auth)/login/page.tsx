// src/app/(auth)/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client"; // 방금 만든 클라이언트
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react"; // 로딩 아이콘
import { useTranslation } from "react-i18next";

export default function LoginPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 데모 계정 자동 로그인
  const handleDemoLogin = async () => {
    setEmail("test@test.com");
    setPassword("test1234");

    // Free 버전에서는 바로 대시보드로 이동
    router.push("/dashboard");
    router.refresh();
  };

  // 로그인 처리 함수
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(t("loginError"));
      } else {
        // 성공 시 대시보드로 이동
        router.push("/dashboard");
        router.refresh(); // 라우터 캐시 비우기
      }
    } catch (_err) {
      setError(t("loginError"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-4">
      {/* 배경 장식 */}
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-size-[50px_50px]" />

      <Card className="w-full max-w-md relative shadow-lg">
        <CardHeader className="space-y-4 text-center pb-8">
          <div className="mx-auto w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
            <div className="w-8 h-8 rounded bg-primary" />
          </div>
          <div className="space-y-2">
            <CardTitle className="text-3xl font-bold">
              {t("loginTitle")}
            </CardTitle>
            <CardDescription className="text-base">
              {t("loginDescription")}
            </CardDescription>
          </div>
        </CardHeader>

        <form onSubmit={handleLogin}>
          <CardContent className="space-y-8 px-8">
            {/* 데모 계정 정보 */}
            <div className="rounded-xl bg-muted/50 p-6 space-y-3">
              <p className="text-sm font-semibold text-muted-foreground">
                {t("demoCredentials")}:
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <span className="text-lg">📧</span>
                  <code className="text-sm font-mono bg-background px-3 py-2 rounded-lg border flex-1">
                    test@test.com
                  </code>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-lg">🔑</span>
                  <code className="text-sm font-mono bg-background px-3 py-2 rounded-lg border flex-1">
                    test1234
                  </code>
                </div>
              </div>
            </div>

            {/* 데모 로그인 버튼 */}
            <Button
              type="button"
              onClick={handleDemoLogin}
              className="w-full h-12 text-base font-medium bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary transition-all duration-200 shadow-lg"
            >
              🚀 {t("demoLogin")}
            </Button>

            {/* 입력 필드 */}
            <div className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="email" className="text-base font-medium">
                  {t("email")}
                </Label>
                <Input
                  id="email"
                  placeholder="test@test.com"
                  type="email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  className="h-12 text-base"
                  required
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="password" className="text-base font-medium">
                  {t("password")}
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                  className="h-12 text-base"
                  required
                />
              </div>
            </div>

            {/* 에러 메시지 */}
            {error && (
              <div className="rounded-xl bg-destructive/10 border border-destructive/20 p-4">
                <p className="text-sm text-destructive font-medium">{error}</p>
              </div>
            )}
          </CardContent>

          <CardFooter className="flex flex-col gap-4 pt-8 pb-8 px-8">
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 text-base shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40"
            >
              {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
              {t("loginButton")}
            </Button>

            <Button
              variant="ghost"
              type="button"
              onClick={() => router.push("/")}
              className="w-full h-12 text-base"
            >
              홈으로 돌아가기
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
