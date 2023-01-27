class Node<T> {
  public value: T;
  public priority: number;
  public next: Node<T>;

  constructor(value: T, priority: number) {
    this.value = value;
    this.priority = priority;
    this.next = null;
  }
}

export class PriorityQueue<T> {
  private heap: Node<T>[] = [];

  public enqueue(value: T, priority: number) {
    const node = new Node(value, priority);

    this.heap.push(node);
    this.prioritize(this.heap.length - 1);
  }

  public dequeue(): T {
    if (this.heap.length <= 1) return this.heap.pop()?.value;

    const max = this.heap[0];
    const end = this.heap.pop();
    this.heap[0] = end;
    this.deprioritize();

    return max.value;
  }

  private prioritize(index: number): void {
    if (index === 0) return;

    const current = this.heap[index];
    const parentIndex = Math.floor((Math.abs(index) - 1) / 2);

    if (current.priority > this.heap[parentIndex].priority) {
      this.heap[index] = this.heap[parentIndex];
      this.heap[parentIndex] = current;
    }

    return this.prioritize(parentIndex);
  }

  private deprioritize(index: number = 0): void {
    const value = this.heap[index];
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;

    let swap = { index, value };

    if (leftChildIndex < this.heap.length) {
      let leftChild = this.heap[leftChildIndex];
      if (leftChild.priority > swap.value.priority) {
        swap = { index: leftChildIndex, value: leftChild };
      }
    }

    if (rightChildIndex < this.heap.length) {
      let rightChild = this.heap[rightChildIndex];
      if (rightChild.priority > swap.value.priority) {
        swap = { index: rightChildIndex, value: rightChild };
      }
    }

    if (swap.index === index) return;

    this.heap[index] = swap.value;
    this.heap[swap.index] = value;

    return this.deprioritize(swap.index);
  }
}
