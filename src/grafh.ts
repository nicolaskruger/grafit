export type Grafh<T> = {
  nodes?: Grafh<T>[],
  body: T
}

