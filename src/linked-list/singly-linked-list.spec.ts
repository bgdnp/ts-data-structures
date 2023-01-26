import { SinglyLinkedList } from './singly-linked-list';

describe('SinglyLinkedList', () => {
  test('push', () => {
    const ll: any = new SinglyLinkedList();

    expect(ll.length).toBe(0);
    expect(ll.head).toBeNull();
    expect(ll.tail).toBeNull();

    expect(ll.push(1)).toBe(ll);

    expect(ll.length).toBe(1);
    expect(ll.head.next).toBeNull();
    expect(ll.head.value).toBe(1);
    expect(ll.tail.next).toBeNull();
    expect(ll.tail.value).toBe(1);

    expect(ll.push(2)).toBe(ll);

    expect(ll.length).toBe(2);
    expect(ll.head.next).toBe(ll.tail);
    expect(ll.head.value).toBe(1);
    expect(ll.tail.next).toBeNull();
    expect(ll.tail.value).toBe(2);

    expect(ll.push(3)).toBe(ll);

    expect(ll.length).toBe(3);
    expect(ll.head.next).not.toBe(ll.tail);
    expect(ll.head.value).toBe(1);
    expect(ll.tail.next).toBeNull();
    expect(ll.tail.value).toBe(3);
  });

  test('pop', () => {
    const ll: any = new SinglyLinkedList();

    ll.push(1).push(2).push(3);

    expect(ll.length).toBe(3);
    expect(ll.head.next).not.toBe(ll.tail);
    expect(ll.head.value).toBe(1);
    expect(ll.tail.next).toBeNull();
    expect(ll.tail.value).toBe(3);

    expect(ll.pop()).toBe(3);

    expect(ll.length).toBe(2);
    expect(ll.head.next).toBe(ll.tail);
    expect(ll.head.value).toBe(1);
    expect(ll.tail.next).toBeNull();
    expect(ll.tail.value).toBe(2);

    expect(ll.pop()).toBe(2);

    expect(ll.length).toBe(1);
    expect(ll.head.next).toBeNull();
    expect(ll.head.value).toBe(1);
    expect(ll.tail.next).toBeNull();
    expect(ll.tail.value).toBe(1);

    expect(ll.pop()).toBe(1);

    expect(ll.length).toBe(0);
    expect(ll.head).toBeNull();
    expect(ll.tail).toBeNull();

    expect(ll.pop()).toBeUndefined();
  });

  test('unshift', () => {
    const ll: any = new SinglyLinkedList();

    expect(ll.length).toBe(0);
    expect(ll.head).toBeNull();
    expect(ll.tail).toBeNull();

    expect(ll.unshift(1)).toBe(ll);

    expect(ll.length).toBe(1);
    expect(ll.head.next).toBeNull();
    expect(ll.head.value).toBe(1);
    expect(ll.tail.next).toBeNull();
    expect(ll.tail.value).toBe(1);

    expect(ll.unshift(2)).toBe(ll);

    expect(ll.length).toBe(2);
    expect(ll.head.next).toBe(ll.tail);
    expect(ll.head.value).toBe(2);
    expect(ll.tail.next).toBeNull();
    expect(ll.tail.value).toBe(1);

    expect(ll.unshift(3)).toBe(ll);

    expect(ll.length).toBe(3);
    expect(ll.head.next).not.toBe(ll.tail);
    expect(ll.head.value).toBe(3);
    expect(ll.tail.next).toBeNull();
    expect(ll.tail.value).toBe(1);
  });

  test('shift', () => {
    const ll: any = new SinglyLinkedList();

    ll.push(1).push(2).push(3);

    expect(ll.length).toBe(3);
    expect(ll.head.next).not.toBe(ll.tail);
    expect(ll.head.value).toBe(1);
    expect(ll.tail.next).toBeNull();
    expect(ll.tail.value).toBe(3);

    expect(ll.shift()).toBe(1);

    expect(ll.length).toBe(2);
    expect(ll.head.next).toBe(ll.tail);
    expect(ll.head.value).toBe(2);
    expect(ll.tail.next).toBeNull();
    expect(ll.tail.value).toBe(3);

    expect(ll.shift()).toBe(2);

    expect(ll.length).toBe(1);
    expect(ll.head.next).toBeNull();
    expect(ll.head.value).toBe(3);
    expect(ll.tail.next).toBeNull();
    expect(ll.tail.value).toBe(3);

    expect(ll.shift()).toBe(3);

    expect(ll.length).toBe(0);
    expect(ll.head).toBeNull();
    expect(ll.tail).toBeNull();

    expect(ll.shift()).toBeUndefined();
  });

  test('get', () => {
    const ll: any = new SinglyLinkedList();

    ll.push(1).push(2).push(3);

    expect(ll.get(0)).toBe(1);
    expect(ll.get(1)).toBe(2);
    expect(ll.get(2)).toBe(3);
    expect(ll.get(-3)).toBeUndefined();
    expect(ll.get(6)).toBeUndefined();
  });

  test('set', () => {
    const ll: any = new SinglyLinkedList();

    ll.push(1).push(2).push(3);

    expect(ll.set(1, 6)).toBe(ll);
    expect(ll.get(1)).toBe(6);
    expect(ll.set(7)).toBe(ll);
    expect(ll.get(7)).toBeUndefined();
  });

  test('remove', () => {
    const ll: any = new SinglyLinkedList();

    ll.push(1).push(2).push(3);

    expect(ll.remove(-3)).toBeUndefined();
    expect(ll.remove(7)).toBeUndefined();
    expect(ll.remove(1)).toBe(2);
    expect(ll.remove(1)).toBe(3);
    expect(ll.remove(1)).toBeUndefined();
    expect(ll.remove(0)).toBe(1);
    expect(ll.remove(0)).toBeUndefined();
  });

  test('traverse', () => {
    const ll: any = new SinglyLinkedList();
    const visitFunc = jest.fn((value) => value);

    ll.traverse(visitFunc);
    expect(visitFunc).not.toBeCalled();

    ll.push(1).push(2).push(3);

    ll.traverse(visitFunc);

    expect(visitFunc).toHaveBeenNthCalledWith(1, 1);
    expect(visitFunc).toHaveBeenNthCalledWith(2, 2);
    expect(visitFunc).toHaveBeenNthCalledWith(3, 3);
  });

  test('reverse', () => {
    const ll: any = new SinglyLinkedList();

    ll.push(1).push(2).push(3);

    const reversed = ll.reverse();

    expect(reversed.get(0)).toBe(3);
    expect(reversed.get(1)).toBe(2);
    expect(reversed.get(2)).toBe(1);
  });

  test('concat', () => {
    const ll1: any = new SinglyLinkedList();
    const ll2: any = new SinglyLinkedList();

    expect(ll1.concat(ll2)).toBe(ll1);
    expect(ll1.length).toBe(0);

    const ll3: any = new SinglyLinkedList();
    ll3.push(1);

    expect(ll1.concat(ll3)).toBe(ll1);
    expect(ll1.length).toBe(1);
    expect(ll1.get(0)).toBe(1);

    const ll4: any = new SinglyLinkedList();
    ll4.push(2);

    expect(ll1.concat(ll4)).toBe(ll1);
    expect(ll1.length).toBe(2);
    expect(ll1.get(0)).toBe(1);
    expect(ll1.get(1)).toBe(2);

    expect(ll1.concat(new SinglyLinkedList())).toBe(ll1);
    expect(ll1.length).toBe(2);
    expect(ll1.get(0)).toBe(1);
    expect(ll1.get(1)).toBe(2);
  });
});
