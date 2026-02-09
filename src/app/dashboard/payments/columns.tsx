// src/app/dashboard/payments/columns.tsx
"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Payment } from "@/types"; // 아까 만든 타입 불러오기
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "상태",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      const statusConfig = {
        success: {
          label: "성공",
          color: "bg-green-100 text-green-800 border-green-200",
        },
        failed: {
          label: "실패",
          color: "bg-red-100 text-red-800 border-red-200",
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
    accessorKey: "email",
    header: "이메일",
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-8 px-2 hover:bg-muted"
        >
          결제 금액
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      // 원화 표기로 변환
      const formatted = new Intl.NumberFormat("ko-KR", {
        style: "currency",
        currency: "KRW",
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "created_at",
    header: "날짜",
    cell: ({ row }) => {
      const date = new Date(row.getValue("created_at"));
      return <div>{date.toLocaleDateString("ko-KR")}</div>;
    },
  },
];
