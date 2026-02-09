// src/components/layout/header.tsx
"use client"; // Dropdown 메뉴 때문에 클라이언트 컴포넌트여야 함

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client"; // 클라이언트용 불러오기
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "@/components/layout/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LanguageSwitcher } from "@/components/ui/language-switcher";

// Props 타입 정의
interface HeaderProps {
  userEmail?: string | null;
}

export function Header({ userEmail }: HeaderProps) {
  const router = useRouter();
  const supabase = createClient();

  // 로그아웃 함수
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login"); // 로그아웃 후 로그인 페이지로
    router.refresh();
  };

  return (
    <div className="flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="p-0 bg-slate-900 text-white border-none w-72"
        >
          <Sidebar />
        </SheetContent>
      </Sheet>
      <div className="flex-1" /> {/* 공간을 위한 flex-1 */}
      <div className="flex items-center gap-4">
        <LanguageSwitcher />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="relative h-10 w-10 rounded-full hover:bg-muted"
            >
              <Avatar className="h-9 w-9">
                <AvatarImage src="" alt="User avatar" />
                <AvatarFallback className="bg-primary text-primary-foreground text-sm font-medium">
                  {userEmail ? userEmail[0].toUpperCase() : "U"}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">관리자</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {userEmail || "Guest"}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleLogout}
              className="text-red-600 cursor-pointer focus:text-red-600"
            >
              로그아웃
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
