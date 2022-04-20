// eslint-disable-next-line import/prefer-default-export
export const countArray = (arr: number[]): number => (
  arr.length ? 1 + countArray(arr.slice(1)) : 0
);
