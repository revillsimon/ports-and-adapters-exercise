import type { CounterRepository } from "./CounterRepository.js";
import { CounterService } from "./CounterService.js";

describe("CounterService", () => {
  let counter: CounterService;
  let mockCounterRepository: CounterRepository = {
    save: vi.fn(),
    load: vi.fn(() => 0),
  };

  beforeEach(() => {
    counter = new CounterService(mockCounterRepository);
  });

  it("should start at 0", () => {
    // Arrange
    const count = counter.getCount();

    // Assert
    expect(count).toBe(0);
  });

  it("should increment the count", () => {
    // Act
    counter.increment();

    // Assert
    const count = counter.getCount();
    expect(count).toBe(1);
  });

  it("should decrement the count", () => {
    // Act
    counter.increment();
    counter.decrement();

    // Assert
    const count = counter.getCount();
    expect(count).toBe(0);
  });

  it("should not allow the count to go below 0", () => {
    // Act
    counter.decrement();

    // Assert
    const count = counter.getCount();
    expect(count).toBe(0);
  });

  it("should reset the count to 0", () => {
    // Act
    counter.increment();
    counter.increment();
    counter.resetCount();

    // Assert
    const count = counter.getCount();
    expect(count).toBe(0);
  });
});
