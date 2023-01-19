import { DoublyLinkedList } from './doubly-linked-list';

describe('DoublyLinkedList', () => {
  const dll = new DoublyLinkedList<number>();

  describe('fromArray', () => {
    it('should create list from array', () => {
      const dll2 = DoublyLinkedList.fromArray([1, 2, 3]);

      expect(dll2.get(0)).toBe(1);
      expect(dll2.get(1)).toBe(2);
      expect(dll2.get(2)).toBe(3);
    });
  });

  describe('push', () => {
    it('should add value to the end of the list', () => {
      expect(dll.length).toBe(0);
      expect((dll as any).head).toBeNull();
      expect((dll as any).tail).toBeNull();

      expect(dll.push(1)).toBe(dll);

      expect(dll.length).toBe(1);
      expect((dll as any).head.value).toBe(1);
      expect((dll as any).head.prev).toBeNull();
      expect((dll as any).head.next).toBeNull();
      expect((dll as any).tail.value).toBe(1);
      expect((dll as any).tail.prev).toBeNull();
      expect((dll as any).tail.next).toBeNull();

      expect(dll.push(2)).toBe(dll);

      expect(dll.length).toBe(2);
      expect((dll as any).head.value).toBe(1);
      expect((dll as any).head.prev).toBeNull();
      expect((dll as any).head.next).toBe((dll as any).tail);
      expect((dll as any).tail.value).toBe(2);
      expect((dll as any).tail.prev).toBe((dll as any).head);
      expect((dll as any).tail.next).toBeNull();

      expect(dll.push(3)).toBe(dll);

      expect(dll.length).toBe(3);
      expect((dll as any).head.value).toBe(1);
      expect((dll as any).head.prev).toBeNull();
      expect((dll as any).head.next).toBeDefined();
      expect((dll as any).tail.value).toBe(3);
      expect((dll as any).tail.prev).toBeDefined();
      expect((dll as any).tail.next).toBeNull();
    });
  });

  describe('pop', () => {
    it('should get and remove value from the end of the list', () => {
      expect(dll.length).toBe(3);
      expect((dll as any).head.value).toBe(1);
      expect((dll as any).head.prev).toBeNull();
      expect((dll as any).head.next).toBeDefined();
      expect((dll as any).tail.value).toBe(3);
      expect((dll as any).tail.prev).toBeDefined();
      expect((dll as any).tail.next).toBeNull();

      expect(dll.pop()).toBe(3);

      expect(dll.length).toBe(2);
      expect((dll as any).head.value).toBe(1);
      expect((dll as any).head.prev).toBeNull();
      expect((dll as any).head.next).toBe((dll as any).tail);
      expect((dll as any).tail.value).toBe(2);
      expect((dll as any).tail.prev).toBe((dll as any).head);
      expect((dll as any).tail.next).toBeNull();

      expect(dll.pop()).toBe(2);

      expect(dll.length).toBe(1);
      expect((dll as any).head.value).toBe(1);
      expect((dll as any).head.prev).toBeNull();
      expect((dll as any).head.next).toBeNull();
      expect((dll as any).tail.value).toBe(1);
      expect((dll as any).tail.prev).toBeNull();
      expect((dll as any).tail.next).toBeNull();

      expect(dll.pop()).toBe(1);

      expect(dll.length).toBe(0);
      expect((dll as any).head).toBeNull();
      expect((dll as any).tail).toBeNull();

      expect(dll.pop()).toBeUndefined();
    });
  });

  describe('unshift', () => {
    it('should add value to the start of the list', () => {
      expect(dll.length).toBe(0);
      expect((dll as any).head).toBeNull();
      expect((dll as any).tail).toBeNull();

      expect(dll.unshift(1)).toBe(dll);

      expect(dll.length).toBe(1);
      expect((dll as any).head.value).toBe(1);
      expect((dll as any).head.prev).toBeNull();
      expect((dll as any).head.next).toBeNull();
      expect((dll as any).tail.value).toBe(1);
      expect((dll as any).tail.prev).toBeNull();
      expect((dll as any).tail.next).toBeNull();

      expect(dll.unshift(2)).toBe(dll);

      expect(dll.length).toBe(2);
      expect((dll as any).head.value).toBe(2);
      expect((dll as any).head.prev).toBeNull();
      expect((dll as any).head.next).toBe((dll as any).tail);
      expect((dll as any).tail.value).toBe(1);
      expect((dll as any).tail.prev).toBe((dll as any).head);
      expect((dll as any).tail.next).toBeNull();

      expect(dll.unshift(3)).toBe(dll);

      expect(dll.length).toBe(3);
      expect((dll as any).head.value).toBe(3);
      expect((dll as any).head.prev).toBeNull();
      expect((dll as any).head.next).toBeDefined();
      expect((dll as any).tail.value).toBe(1);
      expect((dll as any).tail.prev).toBeDefined();
      expect((dll as any).tail.next).toBeNull();
    });
  });

  describe('shift', () => {
    it('should get and remove value from the beginning of the list', () => {
      expect(dll.length).toBe(3);
      expect((dll as any).head.value).toBe(3);
      expect((dll as any).head.prev).toBeNull();
      expect((dll as any).head.next).toBeDefined();
      expect((dll as any).tail.value).toBe(1);
      expect((dll as any).tail.prev).toBeDefined();
      expect((dll as any).tail.next).toBeNull();

      expect(dll.shift()).toBe(3);

      expect(dll.length).toBe(2);
      expect((dll as any).head.value).toBe(2);
      expect((dll as any).head.prev).toBeNull();
      expect((dll as any).head.next).toBe((dll as any).tail);
      expect((dll as any).tail.value).toBe(1);
      expect((dll as any).tail.prev).toBe((dll as any).head);
      expect((dll as any).tail.next).toBeNull();

      expect(dll.shift()).toBe(2);

      expect(dll.length).toBe(1);
      expect((dll as any).head.value).toBe(1);
      expect((dll as any).head.prev).toBeNull();
      expect((dll as any).head.next).toBeNull();
      expect((dll as any).tail.value).toBe(1);
      expect((dll as any).tail.prev).toBeNull();
      expect((dll as any).tail.next).toBeNull();

      expect(dll.shift()).toBe(1);

      expect(dll.length).toBe(0);
      expect((dll as any).head).toBeNull();
      expect((dll as any).tail).toBeNull();

      expect(dll.shift()).toBeUndefined();
    });
  });

  describe('get', () => {
    it('should get value at specified index', () => {
      dll.push(1);
      dll.push(2);
      dll.push(3);

      expect(dll.get(0)).toBe(1);
      expect(dll.get(1)).toBe(2);
      expect(dll.get(2)).toBe(3);
      expect(dll.get(3)).toBeUndefined();
      expect(dll.get(-1)).toBeUndefined();
    });
  });

  describe('set', () => {
    it('should set value at specified index', () => {
      expect(dll.set(0, 4)).toBe(dll);
      expect(dll.get(0)).toBe(4);
    });
  });

  describe('remove', () => {
    it('should remove value at specified index', () => {
      expect(dll.remove(1)).toBe(2);

      expect(dll.length).toBe(2);
      expect((dll as any).head.value).toBe(4);
      expect((dll as any).head.next).toBe((dll as any).tail);
      expect((dll as any).tail.value).toBe(3);
      expect((dll as any).tail.next).toBeNull();

      expect(dll.remove(1)).toBe(3);

      expect(dll.length).toBe(1);
      expect((dll as any).head.value).toBe(4);
      expect((dll as any).head.next).toBeNull();
      expect((dll as any).tail.value).toBe(4);
      expect((dll as any).tail.next).toBeNull();

      expect(dll.remove(0)).toBe(4);

      expect(dll.length).toBe(0);
      expect((dll as any).head).toBeNull();
      expect((dll as any).tail).toBeNull();

      expect(dll.remove(-1)).toBeUndefined();
    });
  });

  describe('reverse', () => {
    it('should reverse list', () => {
      dll.push(1);
      dll.push(2);
      dll.push(3);
      dll.push(4);

      expect(dll.reverse()).toBe(dll);

      expect(dll.get(0)).toBe(4);
      expect(dll.get(1)).toBe(3);
      expect(dll.get(2)).toBe(2);
      expect(dll.get(3)).toBe(1);
    });
  });
});
