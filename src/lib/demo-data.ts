// src/lib/demo-data.ts
// Free 버전 데모 데이터

export const demoUsers = [
  {
    id: "1",
    email: "admin@example.com",
    name: "관리자",
    role: "admin",
    status: "active",
    last_login: "2024-01-15T10:30:00Z",
    created_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "2",
    email: "user1@example.com",
    name: "김철수",
    role: "user",
    status: "active",
    last_login: "2024-01-14T15:45:00Z",
    created_at: "2024-01-02T00:00:00Z",
  },
  {
    id: "3",
    email: "user2@example.com",
    name: "이영희",
    role: "user",
    status: "inactive",
    last_login: "2024-01-10T09:20:00Z",
    created_at: "2024-01-03T00:00:00Z",
  },
  {
    id: "4",
    email: "user3@example.com",
    name: "박지성",
    role: "user",
    status: "active",
    last_login: "2024-01-13T14:15:00Z",
    created_at: "2024-01-04T00:00:00Z",
  },
  {
    id: "5",
    email: "user4@example.com",
    name: "최민준",
    role: "user",
    status: "active",
    last_login: "2024-01-12T11:30:00Z",
    created_at: "2024-01-05T00:00:00Z",
  },
];

export const demoPayments = [
  {
    id: "1",
    email: "user1@example.com",
    amount: 50000,
    status: "success" as const,
    created_at: "2024-01-15T10:30:00Z",
  },
  {
    id: "2",
    email: "user2@example.com",
    amount: 75000,
    status: "success" as const,
    created_at: "2024-01-14T15:45:00Z",
  },
  {
    id: "3",
    email: "user3@example.com",
    amount: 25000,
    status: "failed" as const,
    created_at: "2024-01-13T14:15:00Z",
  },
  {
    id: "4",
    email: "user4@example.com",
    amount: 120000,
    status: "success" as const,
    created_at: "2024-01-12T11:30:00Z",
  },
  {
    id: "5",
    email: "user5@example.com",
    amount: 85000,
    status: "processing" as const,
    created_at: "2024-01-11T16:20:00Z",
  },
];

export const demoOverviewData = [
  { month: "1월", sales: 4500000 },
  { month: "2월", sales: 5200000 },
  { month: "3월", sales: 3800000 },
  { month: "4월", sales: 6100000 },
  { month: "5월", sales: 7200000 },
  { month: "6월", sales: 5800000 },
];
