import { readFileSync } from "node:fs";

const html = readFileSync("ai-creator-studio-mvp.html", "utf8");
const index = readFileSync("index.html", "utf8");

const mustInclude = [
  'let languageMode = "en";',
  'railCharacterSubtitle: en ? "Character Preview"',
  'railOutputSubtitle: en ? "Outputs Preview"',
  '["world", "World Bible", "World Setting"',
  '["gameplay", "Gameplay", "System Design"',
  "Gameplay & System Design",
  "Gameplay CG Preview",
  "Core Mechanics",
  "Key Info",
  "Cultivation x Technology",
  "Recommended Level: Lv.1 - Lv.100+",
  "Estimated Playtime: 30 - 80 hours",
  "Save Mode: Auto / Manual",
  "Platforms: PC / Console / Mobile",
  "Art Asset Gallery",
  "3D Model Library"
];

const mustNotInclude = [
  'railCharacterSubtitle: en ? "角色预览"',
  'railOutputSubtitle: en ? "输出预览"',
  "浜",
  "涓",
  "鍙",
  "鎵"
];

const indexMustInclude = [
  '<html lang="en"',
  "AI Creator Studio",
  "Open Interactive Prototype",
  "Design Engineering",
  "AI Workflow"
];

const missing = mustInclude.filter((item) => !html.includes(item));
const forbidden = mustNotInclude.filter((item) => html.includes(item));
const indexMissing = indexMustInclude.filter((item) => !index.includes(item));

if (missing.length || forbidden.length || indexMissing.length) {
  console.error("Portfolio English surface regression failed.");
  if (missing.length) console.error(`Missing in MVP: ${missing.join(" | ")}`);
  if (forbidden.length) console.error(`Forbidden in MVP: ${forbidden.join(" | ")}`);
  if (indexMissing.length) console.error(`Missing in index: ${indexMissing.join(" | ")}`);
  process.exit(1);
}

console.log("portfolio English surface checks passed");
