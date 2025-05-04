import type { CounterRepository } from "../../domain/CounterRepository.js";
import { CounterService } from "../../domain/CounterService.js";
import { MockCounterRepository } from "../mocks/MockCounterRepository.js";

describe("CounterService", () => {
  let service: CounterService;
  let repository: CounterRepository;

  beforeEach(() => {
    repository = new MockCounterRepository();
    service = new CounterService(repository);
  });

  it("should start at 0", () => {
    // Arrange
    const count = service.getCount();

    // Assert
    expect(count).toBe(0);
  });

  it("should increment the count", () => {
    // Act
    service.increment();

    // Assert
    const count = service.getCount();
    expect(count).toBe(1);
  });

  it("should decrement the count", () => {
    // Act
    service.increment();
    service.decrement();

    // Assert
    const count = service.getCount();
    expect(count).toBe(0);
  });

  it("should not allow the count to go below 0", () => {
    // Act
    service.decrement();

    // Assert
    const count = service.getCount();
    expect(count).toBe(0);
  });

  it("should reset the count to 0", () => {
    // Act
    service.increment();
    service.increment();
    service.resetCount();

    // Assert
    const count = service.getCount();
    expect(count).toBe(0);
  });
});
