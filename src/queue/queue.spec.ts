import { Queue } from './queue';

describe('Queue', () => {
  test('enqueue/dequeue', () => {
    const queue = new Queue<number>();

    expect(queue.size).toBe(0);
    expect(queue.enqueue(1)).toBe(queue);
    expect(queue.size).toBe(1);
    expect(queue.enqueue(2)).toBe(queue);
    expect(queue.size).toBe(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.size).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.size).toBe(0);
    expect(queue.dequeue()).toBeUndefined();
  });
});
