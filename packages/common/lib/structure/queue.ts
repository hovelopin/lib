interface Dictionary<T> {
  [key: string]: T;
}

export class Queue<T> {
  private items: Dictionary<T>;
  private headIndex: number;
  private tailIndex: number;

  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(value: T) {
    this.items[this.tailIndex] = value;
    this.tailIndex++;
  }

  dequeue(): T | undefined {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  peek(): T {
    return this.items[this.headIndex];
  }

  size(): number {
    return this.tailIndex - this.headIndex;
  }
}
