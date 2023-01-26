class Node<T> {
  public value: T;
  public next: Node<T>;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class Queue<T> {
  public size: number;
  private head: Node<T>;
  private tail: Node<T>;

  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  public enqueue(value: T): Queue<T> {
    const node = new Node(value);

    if (this.size) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.size++;

    return this;
  }

  public dequeue(): T {
    return this.dequeueNode()?.value;
  }

  private dequeueNode(): Node<T> {
    if (this.size === 0) return undefined;

    const temp = this.head;
    const next = temp.next;

    if (next) {
      this.head = next;
      temp.next = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.size--;

    return temp;
  }
}
