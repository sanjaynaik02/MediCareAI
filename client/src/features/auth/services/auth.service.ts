// import { apiClient } from "@/lib/api/apiClient";
import type { LoginFormValues } from "../schemas/login.schema";

export class AuthService {
  static async login(data: LoginFormValues) {
    // Future implementation
    // const response = await apiClient.post("/auth/login", data);
    // return response.data;

    // Temporary mock implementation
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Using API Client...");
    console.log("AuthService Login:", data);

    return {
      success: true,
      message: "Login successful",
    };
  }
}