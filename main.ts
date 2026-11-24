// The Funniest AI Excuse — make.fun entry
// Writes a single-line excuse (1-200 chars, UTF-8) to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I finished it, then filed it in a folder I invented, and now neither of us can find it.";

// Defensive gate: refuse to write anything that would fail the house gate.
const chars = [...ENTRY];
if (
  chars.length < 1 ||
  chars.length > 200 ||
  ENTRY.includes("\n") ||
  ENTRY.includes("\r") ||
  ENTRY.trim() !== ENTRY ||
  ENTRY.trim().length === 0
) {
  throw new Error(
    `entry must be a single line of 1-200 chars with no surrounding whitespace (got ${chars.length} chars)`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
