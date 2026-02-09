// src/components/layout/sidebar-client.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Users, Settings, ShoppingCart } from "lucide-react";
import { useTranslation } from "react-i18next";
import { NoSSR } from "@/components/no-ssr";

export function SidebarClient() {
  return (
    <NoSSR>
      <SidebarContent />
    </NoSSR>
  );
}

function SidebarContent() {
  const { t } = useTranslation();
  const pathname = usePathname();

  const routes = [
    {
      label: t("dashboardNav"),
      icon: LayoutDashboard,
      href: "/dashboard",
      color: "text-sky-500",
    },
    {
      label: t("users"),
      icon: Users,
      href: "/dashboard/users",
      color: "text-violet-500",
    },
    {
      label: t("payments"),
      icon: ShoppingCart,
      href: "/dashboard/payments",
      color: "text-pink-500",
    },
    {
      label: t("settings"),
      icon: Settings,
      href: "/dashboard/settings",
      color: "text-orange-500",
    },
  ];

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
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400",
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
