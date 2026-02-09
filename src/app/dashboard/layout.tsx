// src/app/dashboard/layout.tsx
import { Header } from "@/components/layout/header";
import { SidebarClient } from "@/components/layout/sidebar-client";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="hidden md:fixed md:inset-y-0 md:z-50 md:flex md:w-72 md:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-slate-900 px-6 pb-4">
          <SidebarClient />
        </div>
      </div>

      <div className="md:pl-72">
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center justify-between border-b bg-background px-4 shadow-sm md:px-6 lg:px-8">
          <div className="flex items-center gap-x-4">
            <Header userEmail="demo@example.com" />
          </div>
        </div>

        <main className="py-6">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
}
