import selectionSort from './selection-sort';

describe('Selection sor testing', () => {
  test('[5, 7, 9, 2] should be sorted to [2, 5, 7, 9]', () => {
    expect(selectionSort([5, 7, 9, 2])).toStrictEqual([2, 5, 7, 9]);
  });
  test('[1, 2, 3, 4] should be same', () => {
    expect(selectionSort([1, 2, 3, 4])).toStrictEqual([1, 2, 3, 4]);
  });
  test('[1, 1, 1, 1] should be same', () => {
    expect(selectionSort([1, 1, 1, 1])).toStrictEqual([1, 1, 1, 1]);
  });
});
