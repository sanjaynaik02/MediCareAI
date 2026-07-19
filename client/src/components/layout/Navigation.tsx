import Link from "next/link";

import { cn } from "@/lib/utils";
import { navigationLinks } from "@/constants/navigation";

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className }: NavigationProps) {
  return (
    <nav
      aria-label="Primary"
      className={cn("flex items-center", className)}
    >
      <ul className="flex items-center gap-6">
        {navigationLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-blue-400"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}