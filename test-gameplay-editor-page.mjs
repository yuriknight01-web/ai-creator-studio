import { readFileSync } from "node:fs";

const html = readFileSync("ai-creator-studio-mvp.html", "utf8");

const required = [
  "function renderGameplayPage",
  "Gameplay Modules",
  "save-gameplay",
  "保存玩法系统"
];

const gameplayMatch = html.match(/function renderGameplayPage\(\) \{[\s\S]*?\n      \}/);
const gameplaySource = gameplayMatch?.[0] || "";

const missing = required.filter((item) => !html.includes(item));
const forbidden = ["cg-preview", "CG 预览"].filter((item) => gameplaySource.includes(item));

if (missing.length || forbidden.length) {
  console.error(`Gameplay editor mismatch. Missing: ${missing.join(", ") || "none"}. Forbidden in editor: ${forbidden.join(", ") || "none"}`);
  process.exit(1);
}

console.log("gameplay editor page present");
