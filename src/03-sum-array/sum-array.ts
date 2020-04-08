export const sumArray = (arr: number[]): number => {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }

  return sum;
};

export const recursiveSumArray = (arr: number[]): number => {
  if (arr.length === 0) {
    return 0;
  }

  return arr[0] + recursiveSumArray(arr.slice(1));
};

export const reducedSumArray = (arr: number[]): number => arr.reduce((sum, item) => sum + item);
