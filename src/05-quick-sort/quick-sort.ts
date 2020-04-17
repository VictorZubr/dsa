const splitByPivot = (arr: number[], pivot: number): [number[], number[]] => arr
  .reduce((acc: [number[], number[]], item) => {
    if (item > pivot) {
      acc[1].push(item);
    } else {
      acc[0].push(item);
    }

    return acc;
  }, [[], []]);

// eslint-disable-next-line import/prefer-default-export
export const quickSort = (arr: number[]): number[] => {
  if (arr.length < 2) {
    return arr;
  }
  const [pivot, ...restItems] = arr;
  const [smallerItems, greaterItems] = splitByPivot(restItems, pivot);

  return [...quickSort(smallerItems), pivot, ...quickSort(greaterItems)];
};
