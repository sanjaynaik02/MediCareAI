import {
  Activity,
  BrainCircuit,
  CalendarClock,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";

export interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    description:
      "Track patients and hospital operations instantly with live insights.",
  },
  {
    icon: BrainCircuit,
    title: "AI Diagnostics",
    description:
      "Support medical decisions with intelligent recommendations and analysis.",
  },
  {
    icon: CalendarClock,
    title: "Smart Scheduling",
    description:
      "Reduce delays with seamless appointment and resource planning.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Care",
    description:
      "Protect patient data with robust, compliant healthcare workflows.",
  },
  {
    icon: Stethoscope,
    title: "Care Coordination",
    description:
      "Keep care teams aligned with connected communications and updates.",
  },
  {
    icon: Sparkles,
    title: "Patient Experience",
    description:
      "Deliver faster, simpler, and more personalized care experiences.",
  },
];