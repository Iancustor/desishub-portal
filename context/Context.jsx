"use client";
import { createContext, useContext } from "react";

export const appContex = createContext();

export function CreateProvider({ children }) {
  return <appContex.Provider value={{}}> {children}</appContex.Provider>;
}

export function myContext() {
  const context = useContext(myContext);
  return context;
}
