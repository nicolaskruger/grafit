import { describe, expect, test } from "vitest";
import { Grafh } from "../src/grafh";
import { multiAdjacent, MultAdj } from "../src/mutiAdjacent";

describe("multi adjacent", () => {
  test("in - 👿", async () => {
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

    const res = multiAdjacent(grafh);
    const compare: MultAdj<string>[][] = [
      [{ this: "🆎", that: "🆑" }, { this: "🆎", that: "🆖" }],
      [{ this: "🆑", that: "🆔" }],
      [],
      []
    ]
    expect(res).toEqual(compare)
  })
})

