import type { CounterRepository } from "../../domain/CounterRepository.js";

/**
 * A mock implementation of the `CounterRepository` interface for testing purposes.
 *
 * This class provides an in-memory storage for the counter value, allowing
 * you to simulate saving and loading operations without relying on external dependencies.
 * It is useful for unit tests where you want to isolate the behavior of components
 * that interact with the `CounterRepository`.
 *
 * @name MockCounterRepository
 * @description Loads the counter value from the in-memory storage.
 * @implements {CounterRepository}
 *
 *
 * @field {number} count - An internal in-memory storage for the counter value.
 *
 * @method save
 * @param {number} count - The counter value to save.
 * @description Saves the given counter value to the in-memory storage.
 * @returns void
 *
 *
 * @method load
 * @returns {number} The current counter value stored in memory.
 */
export class MockCounterRepository implements CounterRepository {
  private count = 0;

  save(count: number): void {
    this.count = count;
  }

  load(): number {
    return this.count;
  }
}
