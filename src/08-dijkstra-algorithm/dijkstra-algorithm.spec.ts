import dijkstraAlgorithm from './dijkstra-algorithm';

const graph = {
  start: { a: 6, b: 2 },
  a: { fin: 1 },
  b: { a: 3, fin: 5 },
  fin: {},
};

const costs = { a: 6, b: 2, fin: Infinity };

const parents = { a: 'start', b: 'start', fin: null };

describe('Dijkstra algorithm testing', () => {
  const res = { a: 5, b: 2, fin: 6 };
  test(`Costs from start in graph should be ${JSON.stringify(res)}`, () => {
    expect(dijkstraAlgorithm(graph, costs, parents)).toEqual(res);
  });
});
