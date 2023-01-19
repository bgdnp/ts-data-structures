class Node<T> {
  public value: T;
  public next: Node<T> | null;
  public prev: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList<T> {
  public length: number;
  private head: Node<T> | null;
  private tail: Node<T> | null;

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  public static fromArray<T>(arr: T[]): DoublyLinkedList<T> {
    const self = new DoublyLinkedList<T>();

    arr.forEach((el) => self.push(el));

    return self;
  }

  public push(value: T): DoublyLinkedList<T> {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;

    return this;
  }

  public pop(): T {
    return this.popNode()?.value;
  }

  public unshift(value: T): DoublyLinkedList<T> {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this.length++;

    return this;
  }

  public shift(): T {
    return this.shiftNode()?.value;
  }

  public get(index: number): T {
    return this.getNode(index)?.value;
  }

  public set(index: number, value: T): DoublyLinkedList<T> {
    const node = this.getNode(index);

    if (node) {
      node.value = value;
    }

    return this;
  }

  public remove(index: number): T {
    return this.removeNode(index)?.value;
  }

  public reverse(): DoublyLinkedList<T> {
    let prev = null;
    let temp = this.head;

    this.head = this.tail;
    this.tail = temp;

    while (temp.next) {
      const next = temp.next;
      temp.next = prev;
      temp.prev = next;
      prev = temp;
      temp = next;
    }

    temp.next = prev;
    temp.prev = null;

    return this;
  }

  private popNode(): Node<T> {
    if (!this.head) {
      return undefined;
    }

    if (this.head === this.tail) {
      const temp = this.tail;
      this.head = null;
      this.tail = null;
      this.length--;

      return temp;
    }

    const temp = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    temp.prev = null;
    this.length--;

    return temp;
  }

  private shiftNode(): Node<T> {
    if (!this.head) {
      return undefined;
    }

    if (this.head === this.tail) {
      const temp = this.head;
      this.head = null;
      this.tail = null;
      this.length--;

      return temp;
    }

    const temp = this.head;
    this.head = temp.next;
    this.head.prev = null;
    temp.next = null;
    this.length--;

    return temp;
  }

  private getNode(index: number): Node<T> {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let temp = this.head;

    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }

    return temp;
  }

  private removeNode(index: number): Node<T> {
    if (index === 0) {
      return this.shiftNode();
    }

    if (index === this.length - 1) {
      return this.popNode();
    }

    let prev = null;
    let temp = this.head;

    for (let i = 0; i < index; i++) {
      prev = temp;
      temp = temp.next;
    }

    prev.next = temp.next;
    temp.next.prev = prev;
    temp.next = null;
    temp.prev = null;
    this.length--;

    return temp;
  }
}
