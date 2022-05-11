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

// Формула 10 ** n * (a * c) + 10 ** (n/2) * (ad + bc) + b * d
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

// eslint-disable-next-line import/prefer-default-export
export const recIntMult = (x: number, y: number): number => {
  const str1 = x > y ? getNumberString(x) : getNumberString(y);
  const str2 = (x > y ? y : x).toString(DECIMAL).padStart(str1.length, '0');

  return recursiveIntMult(str1, str2);
};

// В формуле 10 ** n * (a * c) + 10 ** (n/2) * (ad + bc) + b * d
// выражение ad + bc можно заменить на (a + b) * (c + d) - ac - bd
// таким образом в этой формуле на одно произведение меньше чем в recursiveIntMult
const karatsubaRecursive = (str1: string, str2: string): number => {
  const { length: n } = str1;

  if (n === 1) {
    return Number(str1) * Number(str2);
  }

  const [strA, strB] = splitNumber(str1);
  const [strC, strD] = splitNumber(str2);

  const ac = recursiveIntMult(strA, strC);
  const bd = recursiveIntMult(strB, strD);

  const p = getNumberString(Number(strA) + Number(strB));
  const q = (Number(strC) + Number(strD)).toString(DECIMAL).padStart(p.length, '0');

  const pq = recursiveIntMult(p, q);

  const adbc = pq - ac - bd;

  return DECIMAL ** n * ac + DECIMAL ** (n / 2) * adbc + bd;
};

export const karatsubaMult = (x: number, y:number): number => {
  const str1 = x > y ? getNumberString(x) : getNumberString(y);
  const str2 = (x > y ? y : x).toString(DECIMAL).padStart(str1.length, '0');

  return karatsubaRecursive(str1, str2);
};
