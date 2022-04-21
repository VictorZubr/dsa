const DECIMAL = 10;

const getNumberString = (num: number): string => {
  const digits = num.toString(DECIMAL);
  const lengthToPowerOfTwo = 2 ** Math.ceil(Math.log2(digits.length));

  return digits.padStart(lengthToPowerOfTwo, '0');
};

const splitNumber = (str: string): Array<string> => {
  const halfIndex = str.length / 2;
  return [str.substring(0, halfIndex), str.substring(halfIndex)];
};

const recursiveIntMult = (str1: string, str2: string): number => {
  const { length: n } = str1;

  if (n === 1) {
    return Number(str1) * Number(str2);
  }

  const [strA, strB] = splitNumber(str1);
  const [strC, strD] = splitNumber(str2);

  const ac = recursiveIntMult(strA, strC);
  const ad = recursiveIntMult(strA, strD);
  const bc = recursiveIntMult(strB, strC);
  const bd = recursiveIntMult(strB, strD);

  return DECIMAL ** n * ac + DECIMAL ** (n / 2) * (ad + bc) + bd;
};

export default (x: number, y: number): number => {
  const str1 = x > y ? getNumberString(x) : getNumberString(y);
  const str2 = (x > y ? y : x).toString(DECIMAL).padStart(str1.length, '0');

  return recursiveIntMult(str1, str2);
};
