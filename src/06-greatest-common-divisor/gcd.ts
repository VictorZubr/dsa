const gcd = (first: number, second: number): number => (
  second ? gcd(second, first % second) : first
);

export default ([first, ...otherItems]: number[]): number => otherItems
  .reduce((result, item) => gcd(result, item), first);
