const DECIMAL = 10;

const rowReducer = (a: string) => (
  rowResult: number, b: string, positionB: number,
): number => rowResult + Number(b) * Number(a) * 10 ** positionB;

const multiplication = (arr: Array<string>) => (
  multResult: number, a: string, positionA: number,
): number => multResult + arr.reduce(rowReducer(a), 0) * 10 ** positionA;


// multiplication by column
export default (x: number, y: number): number => {
  const multiplicand: Array<string> = x.toString(DECIMAL).split('').reverse();
  const multiplier: Array<string> = y.toString(DECIMAL).split('').reverse();

  return multiplicand.reduce(multiplication(multiplier), 0);
};
