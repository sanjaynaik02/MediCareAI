"use client";

import Link from "next/link";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormValues } from "../schemas/login.schema";
import { useLogin } from "../hooks/useLogin";


export default function LoginForm() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const { register, handleSubmit, control, formState: { errors } } = form;

  const { login, isLoading } = useLogin();

const onSubmit = async (data: LoginFormValues) => {
  const response = await login(data);

  console.log(response);
};

  return (
    <>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="space-y-2">
          <Label
            htmlFor="email"
            className="text-sm font-medium text-foreground"
          >
            Email address
          </Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            {...register("email")}
          />
            {errors.email && (
    <p className="text-sm text-destructive">
      {errors.email.message}
    </p>
  )}

        </div>

        <div className="space-y-2">
  <Label htmlFor="password">Password</Label>

  <Input
    id="password"
    type="password"
    placeholder="Enter your password"
    {...register("password")}
  />

  {errors.password && (
    <p className="text-sm text-destructive">
      {errors.password.message}
    </p>
  )}
</div>

        <div className="flex items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-2">
            <Controller
              name="rememberMe"
              control={control}
              render={({ field }) => (
                <Checkbox
                  id="rememberMe"
                  name={field.name}
                  checked={field.value}
                  onBlur={field.onBlur}
                  onCheckedChange={(checked) =>
                    field.onChange(checked === true)
                  }
                  ref={field.ref}
                />
              )}
            />

            <Label htmlFor="rememberMe">Remember me</Label>
          </div>
          <Link
            href="/forgot-password"
            className="font-medium text-primary transition hover:underline"
          >
            Forgot password?
          </Link>
        </div>

<Button
  type="submit"
  className="w-full"
  disabled={isLoading}
>
  {isLoading ? "Signing in..." : "Login"}
</Button>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-semibold text-primary hover:underline"
        >
          Register
        </Link>
      </p>
    </>
  );
}
