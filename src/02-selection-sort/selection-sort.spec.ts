import selectionSort from './selection-sort';

describe('Selection sort testing', () => {
  test('[5, 7, 9, 2] should be sorted to [2, 5, 7, 9]', () => {
    expect(selectionSort([5, 7, 9, 2])).toEqual([2, 5, 7, 9]);
  });
  test('[1, 2, 3, 4] should be same', () => {
    expect(selectionSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });
  test('[-1, 120, 15, -7] should be [-7, -1, 15, 120]', () => {
    expect(selectionSort([-1, 120, 15, -7])).toEqual([-7, -1, 15, 120]);
  });
});
