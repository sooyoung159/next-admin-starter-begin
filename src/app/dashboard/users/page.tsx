// src/app/dashboard/users/page.tsx
"use client";

import { useState, useEffect } from "react";
import { User, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { useTranslation } from "react-i18next";

// 더미 데이터 생성 함수
function getUsers(): User[] {
  return [
    {
      id: "1",
      name: "김철수",
      email: "kim@example.com",
      role: "admin",
      status: "active",
      lastLogin: "2024-01-01",
    },
    {
      id: "2",
      name: "이영희",
      email: "lee@example.com",
      role: "user",
      status: "active",
      lastLogin: "2024-01-02",
    },
    {
      id: "3",
      name: "박민수",
      email: "park@example.com",
      role: "user",
      status: "inactive",
      lastLogin: "2023-12-25",
    },
    {
      id: "4",
      name: "최수진",
      email: "choi@example.com",
      role: "user",
      status: "pending",
      lastLogin: "-",
    },
    {
      id: "5",
      name: "정다은",
      email: "jung@example.com",
      role: "user",
      status: "active",
      lastLogin: "2024-01-03",
    },
    // 페이지네이션 테스트를 위해 데이터 몇 개 더 복사
    {
      id: "6",
      name: "홍길동",
      email: "hong@example.com",
      role: "user",
      status: "active",
      lastLogin: "2024-01-04",
    },
    {
      id: "7",
      name: "아무개",
      email: "nobody@example.com",
      role: "user",
      status: "inactive",
      lastLogin: "2023-11-11",
    },
    {
      id: "8",
      name: "테스트",
      email: "test@example.com",
      role: "admin",
      status: "active",
      lastLogin: "2024-01-05",
    },
    {
      id: "9",
      name: "개발자",
      email: "dev@example.com",
      role: "user",
      status: "pending",
      lastLogin: "-",
    },
    {
      id: "10",
      name: "디자이너",
      email: "design@example.com",
      role: "user",
      status: "active",
      lastLogin: "2024-01-06",
    },
    {
      id: "11",
      name: "기획자",
      email: "pm@example.com",
      role: "user",
      status: "active",
      lastLogin: "2024-01-07",
    },
  ];
}

export default function UsersPage() {
  const { t } = useTranslation();
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const users = getUsers();
    setData(users);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">{t("users")}</h2>
          <p className="text-muted-foreground">{t("usersDescription")}</p>
        </div>
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">{t("users")}</h2>
        <p className="text-muted-foreground">{t("usersDescription")}</p>
      </div>

      <DataTable columns={columns} data={data} />
    </div>
  );
}
