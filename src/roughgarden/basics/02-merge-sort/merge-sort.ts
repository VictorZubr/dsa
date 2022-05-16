// соединяет дв отсортированных массива в один
const merge = (arrC: Array<number>, arrD: Array<number>): Array<number> => {
  let i = 0;
  let j = 0;

  return Array.from(
    { length: arrC.length + arrD.length },
    // eslint-disable-next-line no-plusplus
    (): number => ((arrC[i] ?? Infinity) < (arrD[j] ?? Infinity) ? arrC[i++] : arrD[j++]),

    // Это валидный для линтера код, но я выбрал запись в одну строчку с отключением линтера
    /* (): number => {
      let res;
      if (arrC[i] < arrD[j]) {
        res = arrC[i];
        i += 1;
      } else {
        res = arrD[j];
        j += 1;
      }

      return res;
    }, */
  );
};

// eslint-disable-next-line import/prefer-default-export
export const mergeSort = (arr: Array<number>): Array<number> => {
  if (arr.length < 2) {
    return arr;
  }

  if (arr.length === 2) {
    const [first, second] = arr;
    return first < second ? arr : [second, first];
  }

  const left = arr.slice(0, arr.length / 2);
  const right = arr.slice(arr.length / 2);

  return merge(mergeSort(left), mergeSort(right));
};
