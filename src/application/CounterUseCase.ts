import type { CounterRepository } from "../domain/CounterRepository.js";
import { CounterService } from "../domain/CounterService.js";

export class CounterUseCase {
  private service: CounterService;

  constructor(private repository: CounterRepository) {
    this.service = new CounterService(this.repository);
  }

  getCount(): number {
    return this.service.getCount();
  }
}
