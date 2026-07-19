import {
  Search,
  TriangleAlert,
  CalendarDays,
  LogIn,
} from "lucide-react";


import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavbarActionsProps {
  className?: string;
}

export default function NavbarActions({ className }: NavbarActionsProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Button variant="ghost" size="icon" aria-label="Search">
        <Search className="h-4 w-4" />
      </Button>

      <Button className="gap-2 bg-red-400 hover:bg-red-500 text-white">
        <TriangleAlert className="h-4 w-4" />
        Emergency
      </Button>

      <Button className="gap-2 bg-blue-500 hover:bg-blue-700 text-white">
        <CalendarDays className="h-4 w-4" />
        Book Appointment
      </Button>

      <Button className="gap-2 bg-white hover:bg-gray-200 text-black">
        <LogIn className="h-4 w-4" />
        Login
      </Button>
    </div>
  );
}