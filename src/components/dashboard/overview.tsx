// src/components/dashboard/overview.tsx
"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { useEffect, useState } from "react";

export function Overview() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const generatedData = [
      { name: "1월", total: Math.floor(Math.random() * 5000) + 1000 },
      { name: "2월", total: Math.floor(Math.random() * 5000) + 1000 },
      { name: "3월", total: Math.floor(Math.random() * 5000) + 1000 },
      { name: "4월", total: Math.floor(Math.random() * 5000) + 1000 },
      { name: "5월", total: Math.floor(Math.random() * 5000) + 1000 },
      { name: "6월", total: Math.floor(Math.random() * 5000) + 1000 },
      { name: "7월", total: Math.floor(Math.random() * 5000) + 1000 },
      { name: "8월", total: Math.floor(Math.random() * 5000) + 1000 },
      { name: "9월", total: Math.floor(Math.random() * 5000) + 1000 },
      { name: "10월", total: Math.floor(Math.random() * 5000) + 1000 },
      { name: "11월", total: Math.floor(Math.random() * 5000) + 1000 },
      { name: "12월", total: Math.floor(Math.random() * 5000) + 1000 },
    ];
    setData(generatedData);
  }, []);

  if (data.length === 0) return <div className="h-[350px]" />; // 데이터 로딩 전 공간 확보

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey="total" fill="#0f172a" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}