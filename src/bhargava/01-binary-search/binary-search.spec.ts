import { binarySearch, recursiveBinarySearch } from './binary-search';

interface Test {
  name: string;
  fn: (arr: number[], item: number, left?: number, right?: number) => number;
}

const tests: Test[] = [
  { name: 'for operator', fn: binarySearch },
  { name: 'recursive', fn: recursiveBinarySearch },
];

const testArray = Array.from({ length: 100 }, (_, index) => index + 1);

tests.forEach((kit) => {
  describe(`Testing binary search (${kit.name})`, () => {
    test('Item 1 has index 0', () => {
      expect(kit.fn(testArray, 1)).toBe(0);
    });
    test('Item 100 has index 99', () => {
      expect(kit.fn(testArray, 100)).toBe(99);
    });
    test('Item 101 has index -1', () => {
      expect(kit.fn(testArray, 101)).toBe(-1);
    });
    test('Item 17 has index 16', () => {
      expect(kit.fn(testArray, 17)).toBe(16);
    });
  });
});
