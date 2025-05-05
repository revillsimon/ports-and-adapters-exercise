import { CounterUseCase } from "../../application/CounterUseCase.js";
import type { CounterRepository } from "../../domain/CounterRepository.js";
import { MockCounterRepository } from "../mocks/MockCounterRepository.js";

describe("CounterUseCase", () => {
  let repository: CounterRepository;
  let useCase: CounterUseCase;

  beforeEach(() => {
    repository = new MockCounterRepository();
    useCase = new CounterUseCase(repository);
  });

  it("initial count should be 0", () => {
    // Arrange
    const initialCount = useCase.getCount();

    // Assert
    expect(initialCount).toBe(0);
  });

  it("should increment the count", () => {
    // Act
    useCase.increment();

    // Assert
    const count = useCase.getCount();
    expect(count).toBe(1);
  });
});
