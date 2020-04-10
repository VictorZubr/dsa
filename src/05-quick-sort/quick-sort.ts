// eslint-disable-next-line import/prefer-default-export
export const quickSort = (arr: number[]): number[] => {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[0];
  const restItems = arr.slice(1);
  const smallerItems = restItems.filter((item) => item <= pivot);
  const greaterItems = restItems.filter((item) => item > pivot);

  return [...quickSort(smallerItems), pivot, ...quickSort(greaterItems)];
};
