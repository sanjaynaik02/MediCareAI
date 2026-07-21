import { useState } from "react";

import type { LoginFormValues } from "../schemas/login.schema";
import { AuthService } from "../services/auth.service";
import { useAuth } from "./useAuth";

export function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const { login: loginUser } = useAuth();
  const login = async (data: LoginFormValues) => {
    setIsLoading(true);

    try {
      const response = await AuthService.login(data);

      if (response.success) {
        loginUser({
          id: "1",
          name: "John Doe",
          email: data.email,
          role: "ADMIN",
        });
      }

      return response;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    login,
    isLoading,
  };
}
