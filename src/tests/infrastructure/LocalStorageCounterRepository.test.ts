import { LocalStorageCounterRepository } from "../../infrastructure/persistence/LocalStorageCounterRepository.js";

describe("LocalStorageCounterRepository", () => {
  let repository: LocalStorageCounterRepository;

  beforeEach(() => {
    localStorage.clear();
    repository = new LocalStorageCounterRepository();
  });

  it("should save and load count", () => {
    // Arrange
    const count = 5;

    // Act
    repository.save(count);

    // Assert
    const loadedCount = repository.load();
    expect(loadedCount).toBe(count);
  });

  it("should load a count of zero when no count is saved previously", () => {
    // Arrange
    const loadedCount = repository.load();

    // Assert
    expect(loadedCount).toBe(0);
  });
});
