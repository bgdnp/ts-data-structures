class Node<T> {
  public value: T;
  public next: Node<T>;
  public prev: Node<T>;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList<T> {
  public length: number;
  private head: Node<T>;
  private tail: Node<T>;

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  public push(value: T): DoublyLinkedList<T> {
    const node = new Node(value);

    if (this.length) {
      this.tail.next = node;
      node.prev = this.tail;
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

  public unshift(value: T): DoublyLinkedList<T> {
    const node = new Node(value);

    if (this.length) {
      node.next = this.head;
      this.head.prev = node;
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

  public set(index: number, value: T): DoublyLinkedList<T> {
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

  public reverse(): DoublyLinkedList<T> {
    const list = new DoublyLinkedList<T>();

    this.traverse((value) => {
      list.unshift(value);
    });

    return list;
  }

  public concat(list: DoublyLinkedList<T>): DoublyLinkedList<T> {
    if (this.length && list.length) {
      this.tail.next = list.head;
      list.head.prev = this.tail;
      this.tail = list.tail;
      this.length += list.length;
    } else if (!this.length) {
      this.head = list.head;
      this.tail = list.tail;
      this.length = list.length;
    }

    return this;
  }

  private popNode(): Node<T> {
    if (this.length === 0) return undefined;

    const temp = this.tail;
    const prev = temp.prev;

    if (prev) {
      this.tail = prev;
      this.tail.next = null;
      temp.prev = null;
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
      this.head.prev = null;
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

    let temp: Node<T>;

    if (this.length - index >= index) {
      temp = this.head;

      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;

      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
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
    temp.prev = null;
    this.length--;

    return temp;
  }
}
