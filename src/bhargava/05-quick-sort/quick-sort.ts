const splitByPivot = (arr: number[], pivot: number): [number[], number[]] => arr
  .reduce(([smallerItems, greaterItems], item) => {
    const goalArray: number[] = item > pivot ? greaterItems : smallerItems;
    goalArray.push(item);

    return [smallerItems, greaterItems];
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
