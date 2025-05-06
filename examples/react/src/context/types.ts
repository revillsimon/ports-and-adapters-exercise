export interface CounterContextType {
  count: number;
  increment(): void;
  decrement(): void;
  reset(): void;
}
