import { CounterService } from "./CounterService.js";

describe("CounterService", () => {
  it("should start at 0", () => {
    // Arrange
    const counter = new CounterService();
    const count = counter.getCount();

    // Assert
    expect(count).toBe(0);
  });
});
