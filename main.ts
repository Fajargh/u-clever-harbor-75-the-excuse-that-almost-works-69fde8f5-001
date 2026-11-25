import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one line a gamer texts the boss to skip work on GTA 6 launch week.
// A boring, specific, believable mishap with a concrete time — never mention
// the game, or the manager knows at once. The opening nods at the suspicious
// timing (self-aware, not a confession), and "till Thursday" is why the whole
// day is lost, not just the morning. 20 words, one line, plain words.
// (A spaced em dash would count as a word under whitespace splitting, so the
// clause is joined with a comma instead — it reads like a hurried text.)
const EXCUSE =
  "Sorry, I know the timing's awful, a pipe burst in my bathroom overnight and the plumber can't come till Thursday.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
