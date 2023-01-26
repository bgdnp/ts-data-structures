import { Stack } from './stack';

describe('Stack', () => {
  test('push/pop', () => {
    const stack = new Stack<number>();

    expect(stack.size).toBe(0);
    expect(stack.push(1)).toBe(stack);
    expect(stack.size).toBe(1);
    expect(stack.pop()).toBe(1);
    expect(stack.size).toBe(0);
  });
});
