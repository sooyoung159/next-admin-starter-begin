// src/app/(marketing)/layout.tsx
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* 나중에 여기에 Navbar(로고, 로그인 버튼) 넣을 예정 */}
      <main className="flex-1">{children}</main>
      {/* 나중에 여기에 Footer 넣을 예정 */}
    </div>
  );
}
