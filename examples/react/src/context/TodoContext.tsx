import { useState, type ReactNode } from "react";

import {
  CounterUseCase,
  LocalStorageCounterRepository,
} from "../../../../dist";
import { CounterContext } from "./useCounter";

const repository = new LocalStorageCounterRepository();
const counterUseCase = new CounterUseCase(repository);

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
