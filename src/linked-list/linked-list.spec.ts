import { LinkedList } from './linked-list';

describe('LinkedList', () => {
  const ll = new LinkedList<number>();

  describe('push', () => {
    it('should add value to the end of the list', () => {
      expect(ll.length).toBe(0);
      expect((ll as any).head).toBeNull();
      expect((ll as any).tail).toBeNull();

      expect(ll.push(1)).toBe(ll);

      expect(ll.length).toBe(1);
      expect((ll as any).head.value).toBe(1);
      expect((ll as any).head.next).toBeNull();
      expect((ll as any).tail.value).toBe(1);
      expect((ll as any).tail.next).toBeNull();

      expect(ll.push(2)).toBe(ll);

      expect(ll.length).toBe(2);
      expect((ll as any).head.value).toBe(1);
      expect((ll as any).head.next).toBe((ll as any).tail);
      expect((ll as any).tail.value).toBe(2);
      expect((ll as any).tail.next).toBeNull();
    });
  });

  describe('pop', () => {
    it('should get and remove value from the end of the list', () => {
      expect(ll.length).toBe(2);
      expect((ll as any).head.value).toBe(1);
      expect((ll as any).head.next).toBe((ll as any).tail);
      expect((ll as any).tail.value).toBe(2);
      expect((ll as any).tail.next).toBeNull();

      expect(ll.pop()).toBe(2);

      expect(ll.length).toBe(1);
      expect((ll as any).head.value).toBe(1);
      expect((ll as any).head.next).toBeNull();
      expect((ll as any).tail.value).toBe(1);
      expect((ll as any).tail.next).toBeNull();

      expect(ll.pop()).toBe(1);

      expect(ll.length).toBe(0);
      expect((ll as any).head).toBeNull();
      expect((ll as any).tail).toBeNull();

      expect(ll.pop()).toBeUndefined();

      expect(ll.length).toBe(0);
      expect((ll as any).head).toBeNull();
      expect((ll as any).tail).toBeNull();
    });
  });

  describe('unshift', () => {
    it('should add value to the start of the list', () => {
      expect(ll.length).toBe(0);
      expect((ll as any).head).toBeNull();
      expect((ll as any).tail).toBeNull();

      expect(ll.unshift(1)).toBe(ll);

      expect(ll.length).toBe(1);
      expect((ll as any).head.value).toBe(1);
      expect((ll as any).head.next).toBeNull();
      expect((ll as any).tail.value).toBe(1);
      expect((ll as any).tail.next).toBeNull();

      expect(ll.unshift(2)).toBe(ll);

      expect(ll.length).toBe(2);
      expect((ll as any).head.value).toBe(2);
      expect((ll as any).head.next).toBe((ll as any).tail);
      expect((ll as any).tail.value).toBe(1);
      expect((ll as any).tail.next).toBeNull();
    });
  });

  describe('shift', () => {
    it('should get and remove value from the beginning of the list', () => {
      expect(ll.length).toBe(2);
      expect((ll as any).head.value).toBe(2);
      expect((ll as any).head.next).toBe((ll as any).tail);
      expect((ll as any).tail.value).toBe(1);
      expect((ll as any).tail.next).toBeNull();

      expect(ll.shift()).toBe(2);

      expect(ll.length).toBe(1);
      expect((ll as any).head.value).toBe(1);
      expect((ll as any).head.next).toBeNull();
      expect((ll as any).tail.value).toBe(1);
      expect((ll as any).tail.next).toBeNull();

      expect(ll.shift()).toBe(1);

      expect(ll.length).toBe(0);
      expect((ll as any).head).toBeNull();
      expect((ll as any).tail).toBeNull();

      expect(ll.shift()).toBeUndefined();

      expect(ll.length).toBe(0);
      expect((ll as any).head).toBeNull();
      expect((ll as any).tail).toBeNull();
    });
  });

  describe('get', () => {
    it('should get value at specified index', () => {
      ll.push(1);
      ll.push(2);
      ll.push(3);

      expect(ll.get(0)).toBe(1);
      expect(ll.get(1)).toBe(2);
      expect(ll.get(2)).toBe(3);
      expect(ll.get(3)).toBeUndefined();
      expect(ll.get(-1)).toBeUndefined();
    });
  });

  describe('set', () => {
    it('should set value at specified index', () => {
      expect(ll.set(0, 4)).toBe(ll);
      expect(ll.get(0)).toBe(4);
    });
  });

  describe('remove', () => {
    it('should remove value at specified index', () => {
      expect(ll.remove(1)).toBe(2);

      expect(ll.length).toBe(2);
      expect((ll as any).head.value).toBe(4);
      expect((ll as any).head.next).toBe((ll as any).tail);
      expect((ll as any).tail.value).toBe(3);
      expect((ll as any).tail.next).toBeNull();

      expect(ll.remove(1)).toBe(3);

      expect(ll.length).toBe(1);
      expect((ll as any).head.value).toBe(4);
      expect((ll as any).head.next).toBeNull();
      expect((ll as any).tail.value).toBe(4);
      expect((ll as any).tail.next).toBeNull();

      expect(ll.remove(0)).toBe(4);

      expect(ll.length).toBe(0);
      expect((ll as any).head).toBeNull();
      expect((ll as any).tail).toBeNull();
    });
  });

  describe('reverse', () => {
    it('should reverse list', () => {
      ll.push(1);
      ll.push(2);
      ll.push(3);
      ll.push(4);

      expect(ll.reverse()).toBe(ll);

      expect(ll.get(0)).toBe(4);
      expect(ll.get(1)).toBe(3);
      expect(ll.get(2)).toBe(2);
      expect(ll.get(3)).toBe(1);
    });
  });
});
