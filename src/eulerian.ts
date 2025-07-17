import { Grafh } from "./grafh";

export const eulerian = <T>(graph: Grafh<T>, check?: Grafh<T>[]): Grafh<T>[] => {
  check = check || [graph]
  if (check.includes(graph)) return check;
  return graph.nodes
    ?.reduce((acc, curr) => eulerian(curr, acc), check)
    || check
}
