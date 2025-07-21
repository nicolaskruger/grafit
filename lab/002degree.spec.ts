import { describe, expect, test } from "vitest";
import { Grafh } from "../src/grafh";
import { inDegree, outDegree, GrathDegree } from "../src/degree"

const fetch = (graph: GrathDegree<string>[], body: string) => {
  const [grape] = graph.filter(gh => gh.body === body)
  return grape;
}

describe("degree", () => {
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

    const res = inDegree(grafh);
    expect(fetch(res, "🆎").degree?.length).toBe(0);
    expect(fetch(res, "🆑").degree?.length).toBe(1);
    expect(fetch(res, "🆖").degree?.length).toBe(1);
    expect(fetch(res, "🆔").degree?.length).toBe(1);
  })
  test("out - 📠", async () => {
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

    const res = outDegree(grafh);
    expect(fetch(res, "🆎").degree?.length).toBe(2);
    expect(fetch(res, "🆑").degree?.length).toBe(1);
    expect(fetch(res, "🆖").degree?.length).toBe(0);
    expect(fetch(res, "🆔").degree?.length).toBe(0);
  })

})
