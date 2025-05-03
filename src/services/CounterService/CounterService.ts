export class CounterService {
  private count = 0;

  getCount(): number {
    return this.count;
  }

  increment(): void {
    this.count++;
  }

  decrement(): void {
    if (this.count === 0) return;

    this.count--;
  }

  resetCount(): void {
    this.count = 0;
  }
}
