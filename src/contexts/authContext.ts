import { createContext } from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  currentUser: null as string | null,
  login: (username: string) => {},
  logout: () => {},
});