"use client";
import { createContext, useContext } from "react";

const AuthContext = createContext();

function AuthProvider({ children, session }) {
  return (
    <AuthContext.Provider value={{ session }}>{children}</AuthContext.Provider>
  );
}

function useAuthContext() {
  const authContext = useContext(AuthContext);
  if (!authContext) throw new Error("AuthContext used out of provider.");
  return authContext;
}

export { AuthProvider, useAuthContext };
