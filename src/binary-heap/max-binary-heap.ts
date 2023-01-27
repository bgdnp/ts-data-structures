import { Queue } from '../queue';

export class MaxBinaryHeap<T = number> {
  private heap: T[] = [];

  public insert(value: T): MaxBinaryHeap<T> {
    this.heap.push(value);
    this.bubble(this.heap.length - 1);

    return this;
  }

  public extract(): T {
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    const end = this.heap.pop();
    this.heap[0] = end;
    this.sink();

    return max;
  }

  public bfs(visitFunc: (value: T) => void): void {
    const queue = new Queue<number>();
    queue.enqueue(0);

    while (queue.size) {
      const index = queue.dequeue();
      visitFunc(this.heap[index]);
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      if (leftChildIndex < this.heap.length) queue.enqueue(leftChildIndex);
      if (rightChildIndex < this.heap.length) queue.enqueue(rightChildIndex);
    }
  }

  public dfs(order: 'pre' | 'in' | 'post', visitFunc: (value: T) => void): void {
    order === 'pre' && this.dfsPreOrder(visitFunc);
    order === 'in' && this.dfsInOrder(visitFunc);
    order === 'post' && this.dfsPostOrder(visitFunc);
  }

  private bubble(index: number): void {
    if (index === 0) return;

    const current = this.heap[index];
    const parentIndex = Math.floor((Math.abs(index) - 1) / 2);

    if (current > this.heap[parentIndex]) {
      this.heap[index] = this.heap[parentIndex];
      this.heap[parentIndex] = current;
    }

    return this.bubble(parentIndex);
  }

  private sink(index: number = 0): void {
    const value = this.heap[index];
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;

    let swap = { index, value };

    if (leftChildIndex < this.heap.length) {
      let leftChild = this.heap[leftChildIndex];
      if (leftChild > swap.value) {
        swap = { index: leftChildIndex, value: leftChild };
      }
    }

    if (rightChildIndex < this.heap.length) {
      let rightChild = this.heap[rightChildIndex];
      if (rightChild > swap.value) {
        swap = { index: rightChildIndex, value: rightChild };
      }
    }

    if (swap.index === index) return;

    this.heap[index] = swap.value;
    this.heap[swap.index] = value;

    return this.sink(swap.index);
  }

  private dfsPreOrder(visitFunc: (value: T) => void, index: number = 0): void {
    if (index < this.heap.length) {
      visitFunc(this.heap[index]);
      this.dfsPreOrder(visitFunc, 2 * index + 1);
      this.dfsPreOrder(visitFunc, 2 * index + 2);
    }
  }

  private dfsInOrder(visitFunc: (value: T) => void, index: number = 0): void {
    if (index < this.heap.length) {
      this.dfsInOrder(visitFunc, 2 * index + 1);
      visitFunc(this.heap[index]);
      this.dfsInOrder(visitFunc, 2 * index + 2);
    }
  }

  private dfsPostOrder(visitFunc: (value: T) => void, index: number = 0): void {
    if (index < this.heap.length) {
      this.dfsPostOrder(visitFunc, 2 * index + 1);
      this.dfsPostOrder(visitFunc, 2 * index + 2);
      visitFunc(this.heap[index]);
    }
  }
}
