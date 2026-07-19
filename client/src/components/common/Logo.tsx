import { HeartPulse } from "lucide-react";
import { cn } from "@/lib/utils"; 

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-600 shadow-sm">
        <HeartPulse className="h-5 w-5" />
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-lg font-semibold text-slate-900">MediCare AI</span>
        <span className="text-sm text-slate-500"> Simple and Accessible Healthcare</span>
      </div>
    </div>
  );
}
