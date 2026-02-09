// src/components/layout/sidebar.tsx
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Users, Settings, ShoppingCart } from "lucide-react";

const routes = [
  {
    label: "대시보드",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "사용자 관리",
    icon: Users,
    href: "/dashboard/users",
    color: "text-violet-500",
  },
  {
    label: "결제 내역",
    icon: ShoppingCart,
    href: "/dashboard/payments",
    color: "text-pink-700",
  },
  {
    label: "설정",
    icon: Settings,
    href: "/dashboard/settings",
  },
];

export function Sidebar() {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-slate-900 text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <h1 className="text-2xl font-bold">
            Admin<span className="text-primary">Kit</span>
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                "text-zinc-400",
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
