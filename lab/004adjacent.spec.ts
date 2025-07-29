import { describe, expect, test } from "vitest";
import { adjacent } from "../src/adjacent";
import { Grafh } from "../src/grafh";

describe("adjacent", () => {
  test("in - ✊", async () => {
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

    const res = adjacent(grafh);
    const compare: string[][] = [
      ["🆑", "🆖"],
      ["🆔"],
      [],
      []
    ]
    expect(res).toEqual(compare)
  })
})

