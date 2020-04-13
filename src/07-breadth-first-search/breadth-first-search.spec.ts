import breadthFirstSearch from './breadth-first-search';

const graph = {
  you: ['alice', 'bob', 'claire'],
  bob: ['anuj', 'peggy'],
  alice: ['peggy'],
  claire: ['thom', 'jonny'],
  anuj: [],
  peggy: [],
  thom: [],
  jonny: [],
};

const targetFunction = (name: string): boolean => name[name.length - 1] === 'm';

describe('Breadth first search testing', () => {
  test('Target function (name ends in m) should find "thom" in graph', () => {
    expect(breadthFirstSearch('you', graph, targetFunction)).toBe('thom');
  });
});
