import type { CounterRepository } from "./CounterRepository.js";

/**
 * @name CounterService
 * @description The `CounterService` class provides methods to manage a simple counter. It allows you to increment, decrement, retrieve, and reset the counter value.
 *
 * @field count {number} - The current value of the counter (private).
 *
 * @method getCount - Retrieves the current value of the counter.
 * @returns {number} The current counter value.
 *
 * @method increment - Increments the counter value by 1.
 *
 * @method decrement - Decrements the counter value by 1, but does not allow it to go below 0.
 *
 * @method resetCount - Resets the counter value to 0.
 */
export class CounterService {
  private count: number;

  constructor(private repository: CounterRepository) {
    this.count = this.repository.load();
  }

  getCount(): number {
    return this.count;
  }

  increment(): void {
    this.count++;
    this.repository.save(this.count);
  }

  decrement(): void {
    if (this.count === 0) return;

    this.count--;
    this.repository.save(this.count);
  }

  resetCount(): void {
    this.count = 0;
  }
}
