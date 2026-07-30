import { readFileSync } from "node:fs";

const html = readFileSync("ai-creator-studio-mvp.html", "utf8");

const required = [
  "openNewProjectWizard();",
  "function renderGenerationStatus",
  "function startGenerationFlow",
  "function detectProjectLanguage",
  "function getEnglishProjectFromPreset",
  "projectLanguage: \"en\"",
  "World Bible PDF",
  "generation-status",
  "正在解析关键词",
  "生成世界观",
  "构建角色",
  "规划玩法",
  "生成美术方向",
  "整理项目工作室",
  "生成完整项目消耗 100 积分",
  "后续修改角色、世界观、美术、玩法等细节免费",
  "generation-progress-fill",
  "generation-orbit"
];

const forbidden = [
  "startWorld.textContent = \"生成中...\""
];

const missing = required.filter((item) => !html.includes(item));
const forbiddenHits = forbidden.filter((item) => html.includes(item));

if (missing.length || forbiddenHits.length) {
  console.error(`Generation flow mismatch. Missing: ${missing.join(", ") || "none"}. Forbidden: ${forbiddenHits.join(", ") || "none"}`);
  process.exit(1);
}

console.log("generation flow present");
