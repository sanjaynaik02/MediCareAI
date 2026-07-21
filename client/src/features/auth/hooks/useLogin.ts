import { useState } from "react";

import type { LoginFormValues } from "../schemas/login.schema";
import { AuthService } from "../services/auth.service";

export function useLogin() {
  const [isLoading, setIsLoading] = useState(false);

  const login = async (data: LoginFormValues) => {
    setIsLoading(true);

    try {
      const response = await AuthService.login(data);
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