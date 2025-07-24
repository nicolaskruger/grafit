import { eulerian } from "./eulerian";
import { Grafh } from "./grafh";

const range = (ran: number) => '_'.repeat(ran).split("").map((_, i) => i)

const mx = (a: number, k: number): [number, number][] =>
  "_".repeat(a * k)
    .split("")
    .map((_, i) => [Math.floor(i / k), i % k])

const lineSpliter = <T>(lineLen: number, _in: T[]): T[][] => {
  const out: T[][] = []
  const lineNumb = Math.floor(_in.length / lineLen) + ((_in.length % lineLen) ? 1 : 0)
  return range(lineNumb)
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
