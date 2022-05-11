import { TestItem } from '../../../defs/test-item';
import multByColumn from './mult-by-column';
import { recIntMult, karatsubaMult } from './rec-int-mult';

type Mult = (x: number, y: number) => number;

const tests: Array<TestItem<Mult>> = [
  { name: 'Mult by column', fn: multByColumn },
  { name: 'Recursive integer multiplication', fn: recIntMult },
  { name: 'Karatsuba multiplication', fn: karatsubaMult },
];

tests.forEach((kit) => {
  describe(`Testing (${kit.name})`, () => {
    test('5678 * 1234 = 7006652', () => {
      expect(kit.fn(5678, 1234)).toBe(7006652);
    });
    test('0 * 0 = 0', () => {
      expect(kit.fn(0, 0)).toBe(0);
    });
    test('1 * 1 = 1', () => {
      expect(kit.fn(1, 1)).toBe(1);
    });
    test('42 * 53 = 2226', () => {
      expect(kit.fn(42, 53)).toBe(2226);
    });
    test('923442 * 53 = 48942426', () => {
      expect(kit.fn(923442, 53)).toBe(48942426);
    });
  });
});
