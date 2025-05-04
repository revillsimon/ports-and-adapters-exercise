import type { CounterRepository } from "../../domain/CounterRepository.js";

export class MockCounterRepository implements CounterRepository {
  private count = 0;

  save(count: number): void {
    this.count = count;
  }

  load(): number {
    return this.count;
  }
}
