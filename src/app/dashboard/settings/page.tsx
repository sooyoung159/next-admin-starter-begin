// src/app/dashboard/settings/page.tsx
"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { User } from "@supabase/supabase-js";

export default function SettingsPage() {
  const { t } = useTranslation();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const supabase = createClient();
        const {
          data: { user },
        } = await supabase.auth.getUser();
        setUser(user);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">{t("settings")}</h2>
          <p className="text-muted-foreground">{t("settingsDescription")}</p>
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
        <h2 className="text-3xl font-bold tracking-tight">{t("settings")}</h2>
        <p className="text-muted-foreground">{t("settingsDescription")}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>{t("myProfile")}</CardTitle>
            <CardDescription>{t("profileDescription")}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">{t("email")}</Label>
              <Input id="email" defaultValue={user?.email} disabled />
            </div>
            <div className="space-y-2">
              <Label htmlFor="uid">{t("userId")}</Label>
              <Input
                id="uid"
                defaultValue={user?.id}
                disabled
                className="bg-muted text-muted-foreground"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              {t("changePassword")}
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t("subscription")}</CardTitle>
            <CardDescription>{t("subscriptionDescription")}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg bg-primary/10 p-4">
              <div className="text-lg font-semibold text-primary">
                {t("freePlan")}
              </div>
              <p className="text-sm text-muted-foreground">
                {t("freePlanDescription")}
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{t("userCount")}</span>
                <span className="font-medium">1 / 5</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{t("apiCalls")}</span>
                <span className="font-medium">1,000 / 10,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{t("storage")}</span>
                <span className="font-medium">2GB / 10GB</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">{t("upgradePlan")}</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
