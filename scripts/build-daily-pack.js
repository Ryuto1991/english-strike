import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = fileURLToPath(new URL("..", import.meta.url));
const seedPath = fileURLToPath(new URL("../data/seed-prompts.json", import.meta.url));
const outputPath = fileURLToPath(new URL("../public/data/daily-pack.json", import.meta.url));
const reviewIntervals = [1, 3, 7];

function parseDateArg() {
  const flagIndex = process.argv.findIndex((arg) => arg === "--date");
  if (flagIndex >= 0 && process.argv[flagIndex + 1]) {
    return process.argv[flagIndex + 1];
  }

  return new Date().toISOString().slice(0, 10);
}

function selectPrompt(prompts, runDate) {
  const numericDate = Number(runDate.replaceAll("-", ""));
  return prompts[numericDate % prompts.length];
}

function buildReviewQueue(prompts, todayId) {
  const todayIndex = prompts.findIndex((prompt) => prompt.id === todayId);

  return reviewIntervals.map((daysAgo) => {
    const index = (todayIndex - daysAgo + prompts.length) % prompts.length;
    const prompt = prompts[index];

    return {
      days_ago: daysAgo,
      id: prompt.id,
      japanese: prompt.japanese,
      focus: prompt.focus
    };
  });
}

async function main() {
  const runDate = parseDateArg();
  const seed = JSON.parse(await fs.readFile(seedPath, "utf8"));
  const prompts = seed.prompts;

  if (!Array.isArray(prompts) || prompts.length === 0) {
    throw new Error("Seed prompts must be a non-empty array.");
  }

  const today = selectPrompt(prompts, runDate);
  const pack = {
    product: "English Strike V1",
    run_date: runDate,
    generated_at: new Date().toISOString(),
    timezone: "Asia/Tokyo",
    training_loop: {
      morning: ["capture", "forced_recall", "feedback", "read_aloud_x3"],
      evening: ["review", "reuse_check"]
    },
    today,
    reviews: buildReviewQueue(prompts, today.id),
    evidence_summary: [
      {
        mechanism: "retrieval_practice",
        rule: "Hide the answer until the user attempts output.",
        confidence: "high"
      },
      {
        mechanism: "corrective_feedback",
        rule: "Show a natural answer, a concise answer, and the main gap.",
        confidence: "high"
      },
      {
        mechanism: "spaced_review",
        rule: "Re-surface items at 1, 3, and 7 days.",
        confidence: "high"
      },
      {
        mechanism: "spoken_output",
        rule: "Require three read-aloud repetitions after feedback.",
        confidence: "medium"
      }
    ]
  };

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, `${JSON.stringify(pack, null, 2)}\n`, "utf8");

  process.stdout.write(`Generated ${path.resolve(rootDir, "public/data/daily-pack.json")}\n`);
}

main().catch((error) => {
  console.error(error.message || error);
  process.exitCode = 1;
});
