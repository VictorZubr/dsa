export interface Ribs {
  [key: string]: number;
}

export interface Graph {
  [key: string]: Ribs;
}

export interface Parents {
  [key: string]: string | null;
}

type NodeCost = {node: string | null; cost: number};

export default (graph: Graph, costs: Ribs, parents: Parents): Ribs => {
  const processed: string[] = [];

  const getLowestCostNode = (ribsCosts: Ribs): NodeCost => {
    const accumulator: NodeCost = { node: null, cost: Infinity };

    const { node, cost } = Object.entries(ribsCosts).reduce((acc, [key, rate]) => {
      if (rate < acc.cost && !processed.includes(key)) {
        return { node: key, cost: rate };
      }
      return acc;
    }, accumulator);

    return { node, cost };
  };

  let { node, cost } = getLowestCostNode(costs);
  while (node) {
    const neighbors = graph[node];
    // TODO refactor function to resolve ESLint problem
    // eslint-disable-next-line no-loop-func
    Object.keys(neighbors).forEach((key) => {
      const newCost = cost + neighbors[key];
      if (newCost < costs[key]) {
        Object.assign(costs, { [key]: newCost });
        Object.assign(parents, { [key]: node });
      }
    });

    processed.push(node);
    ({ node, cost } = getLowestCostNode(costs));
  }

  return costs;
};
