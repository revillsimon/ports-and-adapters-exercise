import { FileSystemCounterRepository } from "../../infrastructure/persistence/FileSystemCounterRepository.js";
import fs from "node:fs";

vi.mock("node:fs", () => {
  const fsMock = {
    writeFileSync: vi.fn(),
    readFileSync: vi.fn().mockReturnValue(JSON.stringify({ count: 5 })),
    existsSync: vi.fn().mockReturnValue(true),
  };

  return { ...fsMock, default: fsMock };
});

describe("FileSystemCounterRepository", () => {
  let repository: FileSystemCounterRepository;

  beforeEach(() => {
    repository = new FileSystemCounterRepository();
  });

  it("should load the count from a file", () => {
    // Arrange
    const count = repository.load();

    // Assert
    expect(count).toBe(5);
  });

  it("should save the count to a file", () => {
    // Arrange
    repository.save(10);

    // Assert
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      "./counter.json",
      JSON.stringify({ count: 10 })
    );
  });

  it("should return 0 if the file does not exist", () => {
    // Arrange
    vi.mocked(fs.existsSync).mockReturnValue(false);

    // Assert
    expect(repository.load()).toBe(0);
  });
});
