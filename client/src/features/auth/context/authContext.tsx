"use client";

import { createContext } from "react";

import type { AuthState, User } from "../types/auth.types";

export interface AuthContextType extends AuthState {
  login: (user: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);