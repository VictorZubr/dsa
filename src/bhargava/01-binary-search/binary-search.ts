export const binarySearch = (arr: number[], item: number): number => {
  let left: number = 0;
  let right: number = arr.length - 1;

  while (left <= right) {
    const current: number = Math.floor((left + right) / 2);
    if (arr[current] === item) {
      return current;
    }

    if (arr[current] > item) {
      right = current - 1;
    } else {
      left = current + 1;
    }
  }

  return -1;
};

export const recursiveBinarySearch = (
  arr: number[], item: number, left: number = 0, right: number = arr.length - 1,
): number => {
  const current: number = Math.floor((left + right) / 2);
  if (left > right) {
    return -1;
  }

  if (arr[current] === item) {
    return current;
  }

  return arr[current] > item
    ? recursiveBinarySearch(arr, item, left, current - 1)
    : recursiveBinarySearch(arr, item, current + 1, right);
};
