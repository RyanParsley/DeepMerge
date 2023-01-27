import { merge, deepmerge } from "./index";
import * as data from "./data.json";

const source = data.source;
const current = data.current;

test("merged should merge arrays", () => {
  expect(deepmerge(["simple"], ["example"])).toEqual(["simple", "example"]);
});

test("source and result length should match", () => {
  expect(merge(source, current).length).toEqual(source.length);
});

test("merged should merge complicated arrays", () => {
  const results = merge(source, current);
  expect(JSON.stringify(results)).toContain("MATTLAND");
});
