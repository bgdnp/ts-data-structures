import { MaxBinaryHeap } from './max-binary-heap';

describe('MaxBinaryHeap', () => {
  test('insert', () => {
    const bh: any = new MaxBinaryHeap();

    expect(bh.heap).toEqual([]);

    bh.insert(23);

    expect(bh.heap).toEqual([23]);

    bh.insert(17);

    expect(bh.heap).toEqual([23, 17]);

    bh.insert(33);

    expect(bh.heap).toEqual([33, 17, 23]);

    bh.insert(19);

    expect(bh.heap).toEqual([33, 19, 23, 17]);
  });

  test('extract', () => {
    const bh: any = new MaxBinaryHeap();
    bh.heap = [33, 19, 23, 17];

    expect(bh.extract()).toBe(33);
    expect(bh.heap).toEqual([23, 19, 17]);
    expect(bh.extract()).toBe(23);
    expect(bh.heap).toEqual([19, 17]);
    expect(bh.extract()).toBe(19);
    expect(bh.heap).toEqual([17]);
    expect(bh.extract()).toBe(17);
    expect(bh.heap).toEqual([]);
  });

  test('bfs', () => {
    const bh: any = new MaxBinaryHeap();
    bh.insert(42).insert(39).insert(33).insert(19).insert(23).insert(17).insert(20);

    const result = [];

    bh.bfs((value: number) => {
      result.push(value);
    });

    expect(result).toEqual(bh.heap);
  });

  test('dfs', () => {
    const bh: any = new MaxBinaryHeap();
    bh.insert(42).insert(39).insert(33).insert(19).insert(23).insert(17).insert(20);

    const preResult = [];

    bh.dfs('pre', (value: number) => {
      preResult.push(value);
    });

    expect(preResult).toEqual([42, 39, 19, 23, 33, 17, 20]);

    const inResult = [];

    bh.dfs('in', (value: number) => {
      inResult.push(value);
    });

    expect(inResult).toEqual([19, 39, 23, 42, 17, 33, 20]);

    const postResult = [];

    bh.dfs('post', (value: number) => {
      postResult.push(value);
    });

    expect(postResult).toEqual([19, 23, 39, 17, 20, 33, 42]);
  });
});
