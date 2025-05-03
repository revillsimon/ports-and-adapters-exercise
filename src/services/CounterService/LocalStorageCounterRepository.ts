import type { CounterRepository } from "./CounterRepository.js";
/**
 * @name LocalStorageCounterRepository
 * @description The `LocalStorageCounterRepository` class implements the `CounterRepository` interface to manage the counter value in the browser's local storage.
 * It provides methods to save and load the counter value.
 *
 * @field storageKey {string} - The key used to store the counter value in local storage (private).
 *
 * @method save - Saves the counter value to local storage.
 * @param count {number} - The counter value to save.
 *
 * @method load - Loads the counter value from local storage.
 * @returns {number} The loaded counter value. If no value is found, it returns 0.
 */
export class LocalStorageCounterRepository implements CounterRepository {
  private storageKey = "counter";

  save(count: number): void {
    localStorage.setItem(this.storageKey, count.toString());
  }

  load(): number {
    return parseInt(localStorage.getItem(this.storageKey) || "0", 10);
  }
}
