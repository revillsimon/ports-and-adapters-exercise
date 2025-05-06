import { createContext, useContext, useState, type ReactNode } from "react";

import {
  CounterUseCase,
  LocalStorageCounterRepository,
} from "../../../../dist/index.js";

const repository = new LocalStorageCounterRepository();
const counterUseCase = new CounterUseCase(repository);

interface CounterContextType {
  count: number;
  increment(): void;
  decrement(): void;
  reset(): void;
}

const CounterContext = createContext<CounterContextType | null>(null);

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(counterUseCase.getCount());

  const increment = () => {
    counterUseCase.increment();
    setCount(counterUseCase.getCount());
  };

  const decrement = () => {
    counterUseCase.decrement();
    setCount(counterUseCase.getCount());
  };

  const reset = () => {
    counterUseCase.reset();
    setCount(counterUseCase.getCount());
  };

  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }

  return context;
};
