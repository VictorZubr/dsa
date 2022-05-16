// function will used in different array sort tests
export default (fn: Function) => {
  describe('Selection sort testing', () => {
    test('[5, 7, 9, 2] should be sorted to [2, 5, 7, 9]', () => {
      expect(fn([5, 7, 9, 2])).toEqual([2, 5, 7, 9]);
    });
    test('[1, 2, 3, 4] should be same', () => {
      expect(fn([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    });
    test('[-1, 120, 15, -7] should be [-7, -1, 15, 120]', () => {
      expect(fn([-1, 120, 15, -7])).toEqual([-7, -1, 15, 120]);
    });
    test('[5, 7, 9, 2, 18] should be sorted to [2, 5, 7, 9, 18]', () => {
      expect(fn([5, 7, 9, 2, 18])).toEqual([2, 5, 7, 9, 18]);
    });
    test('[] should be sorted to []', () => {
      expect(fn([])).toEqual([]);
    });
    test('[1] should be sorted to [1]', () => {
      expect(fn([1])).toEqual([1]);
    });
    test('[5, 7, 9, 2, 18, -20, 0, -1, 105, 1, 2] should be sorted to [-20, -1, 0, 1, 2, 2, 5, 7, 9, 18, 105]', () => {
      expect(fn([5, 7, 9, 2, 18, -20, 0, -1, 105, 1, 2])).toEqual([-20, -1, 0, 1, 2, 2, 5, 7, 9, 18, 105]);
    });
  });
};
