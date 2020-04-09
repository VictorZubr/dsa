import { countArray } from './count-array';

describe('Recursive count array testing', () => {
  test('Count items of [0, 1] should be 2', () => {
    expect(countArray([0, 1])).toBe(2);
  });
  test('Count items of [0] should be 1', () => {
    expect(countArray([0])).toBe(1);
  });
  test('Count items of [] should be 0', () => {
    expect(countArray([])).toBe(0);
  });
  test('Count items of Array(100) should be 100', () => {
    expect(countArray(Array(100))).toBe(100);
  });
});
