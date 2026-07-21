import type { LoginFormValues } from "../schemas/login.schema";

export class AuthService {
  static async login(data: LoginFormValues) {
    // Simulate a network request
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("AuthService Login:", data);

    return {
      success: true,
      message: "Login successful",
    };
  }
}