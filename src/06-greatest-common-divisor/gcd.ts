const gcd = (first: number, second: number): number => (
  second ? gcd(second, first % second) : first
);

export default (arr: number[]): number => arr
  .slice(1)
  .reduce((result, item) => gcd(result, item), arr[0]);
