import { eulerian } from "./eulerian";
import { Grafh } from "./grafh";

export type GrathDegree<T> = Grafh<T> & {
  degree?: Grafh<T>[]
}

export const inDegree = <T>(graph: Grafh<T>): GrathDegree<T>[] => {
  const all = eulerian(graph);
  return all.map(grape => ({
    ...grape,
    degree: all.filter(deg => deg.nodes && deg.nodes.some(d => d === grape))
  }))
}

export const outDegree = <T>(graph: Grafh<T>): GrathDegree<T>[] => {
  const all = eulerian(graph);
  return all.map(grape => ({
    ...grape,
    degree: grape.nodes || []
  }))
}
