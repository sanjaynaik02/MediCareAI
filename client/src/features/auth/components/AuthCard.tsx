import { ReactNode } from "react";

interface AuthCardProps {
  children: ReactNode;
}

export default function AuthCard({
  children,
}: AuthCardProps) {
  return (
    <div className="w-full max-w-md rounded-3xl border border-border/60 bg-card p-8 shadow-lg">
      {children}
    </div>
  );
}