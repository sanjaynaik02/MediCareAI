"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

import Logo from "@/components/common/Logo";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formValues);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-50 via-white to-slate-100 px-4 py-12">
      <div className="w-full max-w-md rounded-3xl border border-border/60 bg-card p-8 shadow-lg">
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="flex justify-center">
            <Logo />
            </div>

            <p className="mt-4 text-center text-sm text-muted-foreground">
                Welcome back! Sign in to continue.
            </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-foreground">
              Email address
            </Label>
            <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={formValues.email}
            onChange={(event) =>
                setFormValues((current) => ({
                    ...current,
                    email: event.target.value,
                    }))
                }
            />
            </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-foreground">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder= "Enter your password"
              value={formValues.password}
              onChange={(event) =>
                setFormValues((current) => ({ ...current, password: event.target.value }))
              }
            />
          </div>

          <div className="flex items-center justify-between gap-3 text-sm">
            <div className="flex items-center gap-2">
                <Checkbox
                    id="rememberMe"
                    name="rememberMe"
                    checked={formValues.rememberMe}
                    onCheckedChange={(checked) =>
                        setFormValues((current) => ({
                            ...current,
                            rememberMe: checked === true,
                        }))
                    }
                />

                <Label htmlFor="rememberMe">
                    Remember me
                </Label>
            </div>
            <Link
              href="/forgot-password"
              className="font-medium text-primary transition hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-semibold text-primary hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}