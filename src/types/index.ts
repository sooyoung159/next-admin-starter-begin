// src/types/index.ts
export type Payment = {
  id: string;
  amount: number;
  status: 'processing' | 'success' | 'failed';
  email: string;
  created_at: string;
};
