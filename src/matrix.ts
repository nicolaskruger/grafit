import { eulerian } from "./eulerian";
import { Grafh } from "./grafh";

const range = (ran: number) => '_'.repeat(ran).split("").map((_, i) => ran)

const mx = (a: number, k: number): [number, number][] =>
  "_".repeat(a * k)
    .split("")
    .map((_, i) => [i % k, Math.floor(i / k)])

const lineSpliter = <T>(lineLen: number, _in: T[]): T[][] => {
  const out: T[][] = []
  return range(Math.floor(_in.length / lineLen) + _in.length % lineLen ? 1 : 0)
    .reduce((acc, curr) => {
      acc.push(_in.slice(curr * lineLen, (curr + 1) * lineLen))
      return acc;
    }, out)

}

export const matrix = <T>(graph: Grafh<T>): boolean[][] => {
  const inLine = eulerian(graph);
  const len = inLine.length;
  const _mx = mx(len, len)
    .map(([i, j]) => {
      return inLine[i].nodes?.includes(inLine[j]) || false;
    })
  return lineSpliter(len, _mx)
} 
