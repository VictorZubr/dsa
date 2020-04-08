export const sumArray = (arr: number[]): number => {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }

  return sum;
};

export const recursiveSumArray = (arr: number[]): number => (
  arr.length ? arr[0] + recursiveSumArray(arr.slice(1)) : 0
);

export const reducedSumArray = (arr: number[]): number => arr.reduce((sum, item) => sum + item);
