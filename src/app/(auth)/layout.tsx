// src/app/(auth)/layout.tsx
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      {/* 로그인 폼을 정중앙에 배치 */}
      {children}
    </div>
  );
}