import {
  CalendarDays,
  Clock3,
  Stethoscope,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const stats = [
  {
    icon: Stethoscope,
    value: "50+",
    label: "Doctors",
  },
  {
    icon: Users,
    value: "10K+",
    label: "Patients",
  },
  {
    icon: Clock3,
    value: "24/7",
    label: "Support",
  },
];

export default function Hero() {
  return (
    <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left Content */}
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            AI-Powered Healthcare Platform
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Healthcare Made
            <span className="mt-2 block text-blue-600">
              Simple and Accessible
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Connect with trusted doctors, schedule appointments effortlessly,
            access your medical records, and receive quality healthcare—all in
            one secure platform.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
              <CalendarDays className="h-4 w-4" />
              Book Appointment
            </Button>

            <Button
              variant="outline"
              className="border-slate-300 hover:bg-slate-100"
            >
              Find a Doctor
            </Button>
          </div>

          {/* Statistics */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <Icon className="mb-3 h-6 w-6 text-blue-600" />

                  <p className="text-2xl font-bold text-slate-900">
                    {stat.value}
                  </p>

                  <p className="text-sm text-slate-500">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Content */}
        <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-blue-100 via-white to-cyan-100 p-6 shadow-xl sm:p-8">
          <div className="flex min-h-[430px] flex-col justify-between rounded-[1.5rem] border border-white/70 bg-white/80 p-6 backdrop-blur">
            <div>
              <div className="mb-4 inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Future Healthcare Illustration
              </div>

              <h2 className="text-2xl font-semibold text-slate-900">
                Smarter healthcare,
                <br />
                connected seamlessly.
              </h2>

              <p className="mt-4 text-slate-600">
                This section will later showcase an interactive healthcare
                illustration, dashboard preview, or AI assistant.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-900 p-5 text-white">
                <p className="text-sm text-slate-300">
                  Appointments
                </p>

                <p className="mt-2 text-xl font-semibold">
                  Real-time Booking
                </p>
              </div>

              <div className="rounded-2xl bg-emerald-600 p-5 text-white">
                <p className="text-sm text-emerald-100">
                  Care Team
                </p>

                <p className="mt-2 text-xl font-semibold">
                  Always Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}