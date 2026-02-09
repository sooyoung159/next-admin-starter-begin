// src/app/dashboard/users/columns.tsx
"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// 데이터 타입 정의 (나중엔 DB 스키마랑 맞추면 됨)
export type User = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  status: "active" | "inactive" | "pending";
  lastLogin: string;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "이름",
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          이메일
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "role",
    header: "권한",
    cell: ({ row }) => {
      const role = row.getValue("role") as string;
      return (
        <div className="font-medium">
          {role === "admin" ? "관리자" : "일반"}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "상태",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      const statusConfig = {
        active: {
          label: "활성",
          color: "bg-green-100 text-green-800 border-green-200",
        },
        inactive: {
          label: "비활성",
          color: "bg-gray-100 text-gray-800 border-gray-200",
        },
        pending: {
          label: "대기",
          color: "bg-yellow-100 text-yellow-800 border-yellow-200",
        },
      };
      const config = statusConfig[status as keyof typeof statusConfig];

      if (!config) {
        return <div className="text-sm text-muted-foreground">{status}</div>;
      }

      return (
        <div
          className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${config.color}`}
        >
          {config.label}
        </div>
      );
    },
  },
  {
    accessorKey: "lastLogin",
    header: "최근 접속",
  },
  // 액션 버튼 (수정/삭제)
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-muted">
              <span className="sr-only">메뉴 열기</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>작업</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.id)}
            >
              ID 복사하기
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>정보 수정</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600 focus:text-red-600">
              계정 삭제
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
