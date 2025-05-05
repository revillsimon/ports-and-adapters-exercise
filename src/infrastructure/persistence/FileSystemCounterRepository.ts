import type { CounterRepository } from "../../domain/CounterRepository.js";
import fs from "node:fs";

/**
 * @name FileSystemCounterRepository
 * @description A repository implementation for storing and retrieving a counter value
 * using the file system as the persistence mechanism.
 *
 * This class implements the `CounterRepository` interface and provides
 * methods to save and load the counter value to and from a JSON file.
 *
 * @class
 * @param filePath - The path to the JSON file used for persistence. Defaults to `./counter.json`.
 *
 * @method save - Saves the counter value to the JSON file.
 * @param count - The counter value to be saved.
 *
 * @method load - Loads the counter value from the JSON file.
 * @returns The counter value. Returns `0` if the file does not exist or is invalid.
 */
export class FileSystemCounterRepository implements CounterRepository {
  constructor(private filePath: string = "./counter.json") {}

  save(count: number): void {
    fs.writeFileSync(this.filePath, JSON.stringify({ count }));
  }

  load(): number {
    if (!fs.existsSync(this.filePath)) return 0;

    const data = fs.readFileSync(this.filePath, "utf-8");
    /* v8 ignore next */
    return JSON.parse(data).count ?? 0;
  }
}
