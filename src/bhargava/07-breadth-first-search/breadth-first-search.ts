export interface Graph {
  [key:string]: string[];
}

export default (
  name: string,
  graph: Graph,
  targetFunction: (name: string) => boolean,
): string | boolean => {
  const queue: string[] = (graph[name]).slice();
  const visited: string[] = [];
  while (queue.length) {
    const current = queue.shift() as string;
    if (!visited.includes(current)) {
      if (targetFunction(current)) {
        return current;
      }
      queue.push(...graph[current]);
      visited.push(current);
    }
  }

  return false;
};
