import AuthCard from "@/features/auth/components/AuthCard";
import AuthHeader from "@/features/auth/components/AuthHeader";
import LoginForm from "@/features/auth/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 px-4 py-12">
      <AuthCard>
        <AuthHeader
          title="Welcome Back"
          subtitle="Sign in to continue to MediCare AI."
        />

        <LoginForm />
      </AuthCard>
    </div>
  );
}