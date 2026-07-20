import Logo from "@/components/common/Logo";

interface AuthHeaderProps {
  title: string;
  subtitle: string;
}

export default function AuthHeader({
  title,
  subtitle,
}: AuthHeaderProps) {
  return (
    <div className="mb-8 flex flex-col items-center text-center">
      <Logo />

      <h1 className="mt-6 text-2xl font-semibold tracking-tight text-slate-900">
        {title}
      </h1>

      <p className="mt-2 text-sm text-muted-foreground">
        {subtitle}
      </p>
    </div>
  );
}