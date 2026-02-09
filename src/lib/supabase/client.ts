// src/lib/supabase/client.ts
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  // Free 버전에서는 Supabase 설정이 없어도 데모 모드로 작동
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ) {
    // 데모 모드: 더미 데이터 반환
    return createBrowserClient(
      "https://demo.supabase.co", // 데모 URL
      "demo-anon-key", // 데모 키
    );
  }

  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
