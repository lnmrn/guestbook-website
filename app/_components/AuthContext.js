"use client";
import { createContext, useContext } from "react";

const AuthContext = createContext(null);

function AuthProvider({ children, session }) {
  console.log("Context here:", session.user);
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
