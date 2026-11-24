// Ridiculous at First Glance, Real by the Second
// Writes one sentence pitching a bizarre startup idea to /output/entry.txt.
// Node 22, no dependencies, no network. Fully deterministic: the exact
// same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "We hire champion nappers to sleep in hotel beds all day, and hotels pay for their nap reports, because a mattress that survives a champion napper never gets a one-star review.";

// Gate guard: fail loudly if the sentence is empty, whitespace-only,
// or over 200 characters.
if (PITCH.trim().length === 0) {
  console.error("Gate failed: pitch is empty or whitespace-only.");
  process.exit(1);
}
if (PITCH.length > 200) {
  console.error(
    `Gate failed: pitch is ${PITCH.length} characters, over the 200-character limit.`,
  );
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
console.log(`Wrote ${PITCH.length}-character pitch to /output/entry.txt`);
