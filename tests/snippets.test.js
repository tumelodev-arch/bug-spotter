import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
const items = JSON.parse(await readFile(new URL("../data/snippets.json", import.meta.url), "utf8"));
test("has ten or more original examples with explanations and test ideas", () => {
  assert.ok(items.length >= 10);
  for (const item of items) {
    assert.ok(item.id && item.topic && item.title && item.context);
    assert.ok(Array.isArray(item.code) && item.code.length >= 3);
    assert.ok(Number.isInteger(item.bad) && item.bad >= 0 && item.bad < item.code.length);
    assert.ok(item.explanation && item.fix && item.test);
  }
});
test("example IDs are unique", () => {
  assert.equal(new Set(items.map(x=>x.id)).size, items.length);
});
