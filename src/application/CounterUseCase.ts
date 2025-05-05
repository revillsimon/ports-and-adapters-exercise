import type { CounterRepository } from "../domain/CounterRepository.js";
import { CounterService } from "../domain/CounterService.js";

/**
 * @name CounterUseCase
 * @description
 * The `CounterUseCase` class serves as the application layer for managing
 * counter-related operations. It acts as a use case that interacts with the
 * domain layer through the `CounterService` and `CounterRepository`.
 *
 * Responsibilities:
 * - Provides methods to get the current count, increment, decrement, and reset the counter.
 * - Delegates the business logic to the `CounterService`.
 *
 * @class CounterUseCase
 * @constructor
 * @param {CounterRepository} repository - The repository interface for accessing and persisting counter data.
 *
 * @field {CounterService} service - The service instance responsible for handling counter-related business logic.
 *
 * @method getCount - Retrieves the current count value.
 * @returns {number} The current count.
 *
 * @method increment - Increments the counter value by one.
 * @returns {void}
 *
 * @method decrement - Decrements the counter value by one.
 * @returns {void}
 *
 * @method reset - Resets the counter value to its initial state.
 * @returns {void}
 */

export class CounterUseCase {
  private service: CounterService;

  constructor(repository: CounterRepository) {
    this.service = new CounterService(repository);
  }

  getCount(): number {
    return this.service.getCount();
  }

  increment(): void {
    this.service.increment();
  }

  decrement(): void {
    this.service.decrement();
  }

  reset(): void {
    this.service.resetCount();
  }
}
