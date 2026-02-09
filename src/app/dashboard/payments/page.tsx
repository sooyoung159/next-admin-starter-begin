// src/app/dashboard/payments/page.tsx
"use client";

import { useState, useEffect } from "react";
import { Payment } from "@/types";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { useTranslation } from "react-i18next";
import { demoPayments } from "@/lib/demo-data";

export default function PaymentsPage() {
  const { t } = useTranslation();
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        // Free 버전에서는 데모 데이터 사용
        setPayments(demoPayments);
      } catch (err) {
        console.error("Error:", err);
        setError(t("error"));
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, [t]);

  if (loading) {
    return (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">{t("payments")}</h2>
          <p className="text-muted-foreground">{t("paymentsDescription")}</p>
        </div>
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">{t("payments")}</h2>
          <p className="text-muted-foreground">{t("paymentsDescription")}</p>
        </div>
        <div className="rounded-lg border border-destructive bg-destructive/10 p-4">
          <p className="text-destructive">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">{t("payments")}</h2>
        <p className="text-muted-foreground">{t("paymentsDescription")}</p>
      </div>

      <DataTable columns={columns} data={payments} />
    </div>
  );
}
