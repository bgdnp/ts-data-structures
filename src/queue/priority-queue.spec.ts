import { PriorityQueue } from './priority-queue';

describe('PriorityQueue', () => {
  test('enqueue/dequeue', () => {
    const queue = new PriorityQueue<string>();

    queue.enqueue('a', 1);
    queue.enqueue('b', 3);
    queue.enqueue('c', 5);
    queue.enqueue('d', 4);
    queue.enqueue('e', 2);

    expect(queue.dequeue()).toBe('c');
    expect(queue.dequeue()).toBe('d');
    expect(queue.dequeue()).toBe('b');
    expect(queue.dequeue()).toBe('e');
    expect(queue.dequeue()).toBe('a');
    expect(queue.dequeue()).toBeUndefined();
  });
});
