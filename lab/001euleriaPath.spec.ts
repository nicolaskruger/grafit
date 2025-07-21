import { expect, test, describe } from "vitest"
import { Grafh } from '../src/grafh'
import { biRefBuilder } from '../src/builder'
import { eulerian } from "../src/eulerian"

describe("eulerian - path", () => {
  test("🐂", async () => {
    let grafh: Grafh<string> = {
      body: "🆎",
      nodes: [
        {
          body: "🆑",
          nodes: [
            { body: "🆔" }
          ],
        },
        { body: "🆖" }
      ]
    }

    grafh = biRefBuilder(grafh);
    const nodes = eulerian(grafh);

    expect(nodes.filter(node => "🆎🆖🆑🆔".includes(node.body)).length)
      .toBe(4)
  })
})
