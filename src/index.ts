import { CounterService } from "./domain/CounterService.js";
import { LocalStorageCounterRepository } from "./infrastructure/persistence/LocalStorageCounterRepository.js";

const repository = new LocalStorageCounterRepository();
const service = new CounterService(repository);

console.log("Current count:", service.getCount());
service.increment();
console.log("Updated count:", service.getCount());
