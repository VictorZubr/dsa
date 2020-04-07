const getSmallestIndex = (arr: number[]): number => {
  let smallestIndex: number = 0;
  let smallestItem: number = arr[smallestIndex];

  for (let i: number = 1; i < arr.length; i += 1) {
    if (arr[i] < smallestItem) {
      smallestItem = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
};

export default (arr: number[]): number[] => {
  const sortedArray: number[] = [];
  const { length } = arr;

  for (let i: number = 0; i < length; i += 1) {
    const smallestIndex = getSmallestIndex(arr);
    sortedArray.push(...arr.splice(smallestIndex, 1));
  }

  return sortedArray;
};
