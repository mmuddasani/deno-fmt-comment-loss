import { assertEquals } from "https://deno.land/std@0.202.0/assert/mod.ts";

const WORD = /context/g;

async function countWord(path: string) {
  const text = await Deno.readTextFile(path);
  return [...text.matchAll(WORD)].length;
}

Deno.test("Formatting Object JSONC Preserves Comments", async () => {
  const inputCount = await countWord("./testdata/object.jsonc");
  const generatedCount = await countWord("./generated/object.jsonc");
  assertEquals(generatedCount, inputCount);
});

Deno.test("Formatting Array JSONC Preserves Comments", async () => {
  const inputCount = await countWord("./testdata/object.jsonc");
  const generatedCount = await countWord("./generated/object.jsonc");
  assertEquals(generatedCount, inputCount);
});
