export interface User {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "DOCTOR" | "PATIENT" | "RECEPTIONIST";
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}