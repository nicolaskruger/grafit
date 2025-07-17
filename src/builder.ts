import { Grafh } from "./grafh";

export const biRefBuilder = <T>(grafh: Grafh<T>) => {
  grafh.nodes
    ?.forEach(gh => {
      gh.nodes = gh.nodes?.filter(g => g !== grafh)
      biRefBuilder(gh)
      gh.nodes = [grafh, ...(gh.nodes || [])]
    })
  return grafh
}
