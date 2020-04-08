import { sumArray, recursiveSumArray, reducedSumArray } from './sum-array';

interface Test {
  name: string;
  fn: (arr: number[]) => number;
}

const tests: Test[] = [
  { name: 'for operator', fn: sumArray },
  { name: 'recursive', fn: recursiveSumArray },
  { name: 'reduce array method', fn: reducedSumArray },
];

tests.forEach((kit) => {
  describe(`Sum of array elements (${kit.name})`, () => {
    test('Sum [1, 2, 3] should be 6', () => {
      expect(kit.fn([1, 2, 3])).toBe(6);
    });
    test('Sum [15, 27, -10, 18, 15] should be 65', () => {
      expect(kit.fn([15, 27, -10, 18, 15])).toBe(65);
    });
  });
});
