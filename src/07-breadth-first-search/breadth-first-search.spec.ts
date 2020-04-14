import breadthFirstSearch, { Graph } from './breadth-first-search';

const graph: Graph = {
  you: ['alice', 'bob', 'claire'],
  bob: ['anuj', 'peggy'],
  alice: ['peggy'],
  claire: ['thom', 'jonny'],
  anuj: [],
  peggy: [],
  thom: [],
  jonny: [],
};

const endsWithM = (name: string): boolean => name.endsWith('m');
const containsGG = (name: string): boolean => name.includes('gg');
const containsVZ = (name: string): boolean => name.includes('vz');

describe('Breadth first search testing', () => {
  test('Target function (name ends in "m") should find "thom" in graph', () => {
    expect(breadthFirstSearch('you', graph, endsWithM)).toBe('thom');
  });
  test('Target function (name contains "gg") should find "peggy" in graph', () => {
    expect(breadthFirstSearch('you', graph, containsGG)).toBe('peggy');
  });
  test('Target function (name contains "vz") should not find anything in graph', () => {
    expect(breadthFirstSearch('you', graph, containsVZ)).toBe(false);
  });
});
