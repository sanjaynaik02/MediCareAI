"use client";

import { useAuth } from "@/features/auth/hooks/useAuth";
import { ProtectedRoute } from "@/features/auth/components/ProtectedRoute";

export default function DashboardPage() {
  const { user } = useAuth();
  return (
    <ProtectedRoute>
      <main className="p-8">
        <h1 className="text-3xl font-bold">Welcome, {user?.name}</h1>

        <p className="mt-2 text-muted-foreground">Role: {user?.role}</p>
      </main>
    </ProtectedRoute>
  );
}
