import { describe, expect, test } from "vitest";
import { matrix } from "../src/matrix";
import { Grafh } from "../src/grafh";

describe("matrix", () => {
  test("in - 🐜", async () => {
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

    const res = matrix(grafh);
    const compare: boolean[][] = [
      [false, true, false, true],
      [false, false, true, false],
      [false, false, false, false],
      [false, false, false, false],
    ]
    expect(res).toEqual(compare)
  })
})

