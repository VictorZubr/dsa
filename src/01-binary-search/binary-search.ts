export default (arr: number[], item: number): number => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const current = Math.floor((left + right) / 2);
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
