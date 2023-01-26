export class Stack<T> {
  private stack: T[] = [];

  get size(): number {
    return this.stack.length;
  }

  public push(value: T): Stack<T> {
    this.stack.push(value);

    return this;
  }

  public pop(): T {
    return this.stack.pop();
  }
}
