export interface Ribs {
  [key: string]: number;
}

export interface Graph {
  [key: string]: Ribs;
}

export interface Parents {
  [key: string]: string | null;
}

export interface NodeCost {
  node: string | null;
  cost: number
}

const getLowestCostNode = (ribsCosts: Ribs, processed: string[]): NodeCost => Object
  .entries(ribsCosts).reduce((acc, [key, rate]) => (rate < acc.cost && !processed.includes(key)
    ? { node: key, cost: rate }
    : acc), { node: null, cost: Infinity } as NodeCost);

const getNewCostsAndParents = (
  node: string,
  graph: Graph,
  costs: Ribs,
  cost: number,
): {newCosts: Ribs, newParents: Parents } => {
  const neighbors = graph[node];
  return Object.keys(neighbors).reduce(({ newCosts, newParents }, key) => {
    const newCost = cost + neighbors[key];

    return (newCost < costs[key])
      ? { newCosts: { ...newCosts, [key]: newCost }, newParents: { ...newParents, [key]: node } }
      : { newCosts, newParents };
  }, { newCosts: {}, newParents: {} });
};

export default (graph: Graph, costs: Ribs, parents: Parents): Ribs => {
  const processed: string[] = [];

  let { node, cost } = getLowestCostNode(costs, processed);
  while (node) {
    const { newCosts, newParents } = getNewCostsAndParents(node, graph, costs, cost);
    Object.assign(costs, newCosts);
    Object.assign(parents, newParents);
    processed.push(node);
    ({ node, cost } = getLowestCostNode(costs, processed));
  }

  return costs;
};
