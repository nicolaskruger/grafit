import { eulerian } from "./eulerian"
import { Grafh } from "./grafh"

export type MultAdj<T> = {
  this: T,
  that: T
}

export const multiAdjacent = <T>(grafh: Grafh<T>): MultAdj<T>[][] =>
  eulerian(grafh).map(e => (e.nodes || []).map(node => ({
    this: e.body,
    that: node.body
  })))


