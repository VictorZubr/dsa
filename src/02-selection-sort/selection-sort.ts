const getSmallestIndex = (arr: number[]): number => arr.reduce((acc, item, index) => (
  item < acc.smallestItem ? { smallestItem: item, smallestIndex: index } : acc
), { smallestItem: arr[0], smallestIndex: 0 }).smallestIndex;

export default (arr: number[]): number[] => {
  const sortedArray: number[] = [];
  const { length } = arr;

  for (let i: number = 0; i < length; i += 1) {
    const smallestIndex = getSmallestIndex(arr);
    sortedArray.push(...arr.splice(smallestIndex, 1));
  }

  return sortedArray;
};
