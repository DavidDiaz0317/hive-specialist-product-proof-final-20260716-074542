import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("the fixture remains a bounded static application", async () => {
  const source = await readFile(new URL("../index.html", import.meta.url), "utf8");
  assert.match(source, /<main/);
});
