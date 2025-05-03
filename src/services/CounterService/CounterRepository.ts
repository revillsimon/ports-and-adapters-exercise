export interface CounterRepository {
  save(count: number): void;
  load(): number;
}
