import binarySearch from './binary-search';

const testArray = Array.from({ length: 100 }, (_, index) => index + 1);

describe('Testing binary search', () => {
  test('Item 1 has index 0', () => {
    expect(binarySearch(testArray, 1)).toBe(0);
  });
  test('Item 100 has index 99', () => {
    expect(binarySearch(testArray, 100)).toBe(99);
  });
  test('Item 101 has index -1', () => {
    expect(binarySearch(testArray, 101)).toBe(-1);
  });
  test('Item 17 has index 16', () => {
    expect(binarySearch(testArray, 17)).toBe(16);
  });
});
