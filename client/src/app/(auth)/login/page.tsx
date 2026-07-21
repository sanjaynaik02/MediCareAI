import AuthCard from "@/features/auth/components/AuthCard";
import AuthHeader from "@/features/auth/components/AuthHeader";
import LoginForm from "@/features/auth/components/LoginForm";
import { PublicRoute } from "@/features/auth/components/PublicRoute";

export default function LoginPage() {
  return (
    <PublicRoute>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <AuthCard>
          <AuthHeader
            title="Welcome Back"
            subtitle="Sign in to continue to MediCare AI."
          />

          <LoginForm />
        </AuthCard>
      </div>
    </PublicRoute>
  );
}