import { eulerian } from "./eulerian"
import { Grafh } from "./grafh"
export const adjacent = <T>(grafh: Grafh<T>): T[][] =>
  eulerian(grafh).map(e => (e.nodes || []).map(node => node.body))
