import type { CounterRepository } from "../../domain/CounterRepository.js";
import fs from "node:fs";

export class FileSystemCounterRepository implements CounterRepository {
  constructor(private filePath: string = "./counter.json") {}

  save(count: number): void {
    fs.writeFileSync(this.filePath, JSON.stringify({ count }));
  }

  load(): number {
    if (!fs.existsSync(this.filePath)) return 0;

    const data = fs.readFileSync(this.filePath, "utf-8");
    return JSON.parse(data).count ?? 0;
  }
}
