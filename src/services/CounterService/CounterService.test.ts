import { CounterService } from "./CounterService.js";

describe("CounterService", () => {
  it("should start at 0", () => {
    // Arrange
    const counter = new CounterService();
    const count = counter.getCount();

    // Assert
    expect(count).toBe(0);
  });

  it("should increment the count", () => {
    // Arrange
    const counter = new CounterService();

    // Act
    counter.increment();

    // Assert
    const count = counter.getCount();
    expect(count).toBe(1);
  });
});
