import { readFileSync } from "node:fs";

const html = readFileSync("ai-creator-studio-mvp.html", "utf8");

const required = [
  "id=\"character-picker\"",
  "id=\"visual-picker\"",
  "function selectCharacter",
  "function selectVisualAsset",
  "selectedCharacterIndex",
  "selectedVisualAsset",
  "data-character-index",
  "data-visual-asset",
  "锁定"
];

const missing = required.filter((item) => !html.includes(item));

if (missing.length) {
  console.error(`Missing object editor features: ${missing.join(", ")}`);
  process.exit(1);
}

console.log("object editor hooks present");
