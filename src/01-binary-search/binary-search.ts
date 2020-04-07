export default (arr: number[], item: number): number => {
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
