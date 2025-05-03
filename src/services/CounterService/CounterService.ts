export class CounterService {
  private count = 0;

  getCount(): number {
    return this.count;
  }

  increment(): void {
    this.count++;
  }
}
