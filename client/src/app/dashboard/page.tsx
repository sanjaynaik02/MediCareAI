import { ProtectedRoute } from "@/features/auth/components/ProtectedRoute";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <main>
        <h1>Dashboard</h1>

        {/* Dashboard Content */}
      </main>
    </ProtectedRoute>
  );
}