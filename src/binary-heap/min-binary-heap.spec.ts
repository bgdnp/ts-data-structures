import { MinBinaryHeap } from './min-binary-heap';

describe('MinBinaryHeap', () => {
  test('insert', () => {
    const bh: any = new MinBinaryHeap();

    expect(bh.heap).toEqual([]);

    bh.insert(23);

    expect(bh.heap).toEqual([23]);

    bh.insert(17);

    expect(bh.heap).toEqual([17, 23]);

    bh.insert(33);

    expect(bh.heap).toEqual([17, 23, 33]);

    bh.insert(19);

    expect(bh.heap).toEqual([17, 19, 33, 23]);
  });

  test('extract', () => {
    const bh: any = new MinBinaryHeap();
    bh.heap = [17, 19, 33, 23, 21];

    expect(bh.extract()).toBe(17);
    expect(bh.heap).toEqual([19, 21, 33, 23]);
    expect(bh.extract()).toBe(19);
    expect(bh.heap).toEqual([21, 23, 33]);
    expect(bh.extract()).toBe(21);
    expect(bh.heap).toEqual([23, 33]);
    expect(bh.extract()).toBe(23);
    expect(bh.heap).toEqual([33]);
    expect(bh.extract()).toBe(33);
    expect(bh.heap).toEqual([]);
  });

  test('bfs', () => {
    const bh: any = new MinBinaryHeap();
    bh.insert(42).insert(39).insert(33).insert(19).insert(23).insert(17).insert(20);

    const result = [];

    bh.bfs((value: number) => {
      result.push(value);
    });

    expect(result).toEqual(bh.heap);
  });

  test('dfs', () => {
    const bh: any = new MinBinaryHeap();
    bh.insert(42).insert(39).insert(33).insert(19).insert(23).insert(17).insert(20);

    const preResult = [];

    bh.dfs('pre', (value: number) => {
      preResult.push(value);
    });

    expect(preResult).toEqual([17, 23, 42, 33, 19, 39, 20]);

    const inResult = [];

    bh.dfs('in', (value: number) => {
      inResult.push(value);
    });

    expect(inResult).toEqual([42, 23, 33, 17, 39, 19, 20]);

    const postResult = [];

    bh.dfs('post', (value: number) => {
      postResult.push(value);
    });

    expect(postResult).toEqual([42, 33, 23, 39, 20, 19, 17]);
  });
});
