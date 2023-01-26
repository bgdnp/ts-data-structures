class Node<T> {
  public value: T;
  public next: Node<T>;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class SinglyLinkedList<T> {
  public length: number;
  private head: Node<T>;
  private tail: Node<T>;

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  public push(value: T): SinglyLinkedList<T> {
    const node = new Node(value);

    if (this.length) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.length++;

    return this;
  }

  public pop(): T {
    return this.popNode()?.value;
  }

  public unshift(value: T): SinglyLinkedList<T> {
    const node = new Node(value);

    if (this.length) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
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

  public set(index: number, value: T): SinglyLinkedList<T> {
    const node = this.getNode(index);

    if (node) node.value = value;

    return this;
  }

  public remove(index: number): T {
    return this.removeNode(index)?.value;
  }

  public traverse(visitFunc: (value: T) => void): void {
    let current = this.head;

    while (current) {
      visitFunc(current.value);
      current = current.next;
    }
  }

  public reverse(): SinglyLinkedList<T> {
    const list = new SinglyLinkedList<T>();

    this.traverse((value) => {
      list.unshift(value);
    });

    return list;
  }

  public concat(list: SinglyLinkedList<T>): SinglyLinkedList<T> {
    if (this.length) {
      this.tail.next = list.head;
      this.tail = list.tail ?? this.tail;
      this.length += list.length;
    } else {
      this.head = list.head;
      this.tail = list.tail;
      this.length = list.length;
    }

    return this;
  }

  private popNode(): Node<T> {
    if (this.length === 0) return undefined;

    let prev = null;
    let temp = this.head;

    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }

    if (prev) {
      this.tail = prev;
      this.tail.next = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length--;

    return temp;
  }

  private shiftNode(): Node<T> {
    if (this.length === 0) return undefined;

    const temp = this.head;
    const next = temp.next;

    if (next) {
      this.head = next;
      temp.next = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length--;

    return temp;
  }

  private getNode(index: number): Node<T> {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;

    let temp = this.head;

    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }

    return temp;
  }

  private removeNode(index: number): Node<T> {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shiftNode();
    if (index === this.length - 1) return this.popNode();

    const prev = this.getNode(index - 1);
    const temp = prev.next;

    prev.next = temp.next;
    temp.next = null;
    this.length--;

    return temp;
  }
}
