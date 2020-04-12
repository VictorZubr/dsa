import gcd from './gcd';

describe('Greatest common divisor of numbers  array tested', () => {
  test('GCD of [35, 60, 10, 55]  should be 5', () => {
    expect(gcd([35, 60, 10, 55])).toBe(5);
  });
  test('GCD of [70, 10, 150, 20, 90, 1000]  should be 10', () => {
    expect(gcd([70, 10, 150, 20, 90, 1000])).toBe(10);
  });
});
