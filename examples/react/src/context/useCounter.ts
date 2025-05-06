import { createContext, useContext } from "react";
import type { CounterContextType } from "./types";

export const CounterContext = createContext<CounterContextType | null>(null);

export const useCounter = () => {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }

  return context;
};
