import { readFileSync } from "node:fs";

const html = readFileSync("ai-creator-studio-mvp.html", "utf8");
const index = readFileSync("index.html", "utf8");

const mvpMustInclude = [
  'let languageMode = "en";',
  "let currentPrompt = defaultPrompts.en;",
  'en: "Eastern future city, flying swords, spirit technology, sect conflict, open world RPG"',
  'document.querySelectorAll("[data-i18n]").forEach',
  "renderTopActions()",
  "function ensureProjectLanguage()",
  "getProjectFromPrompt(currentPrompt, projectLanguage)",
  'data-i18n="nav.dashboard">Dashboard<span>Home</span>',
  'id="asset-workspace-label" class="nav-section">Asset Workspace',
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

const mvpMustNotInclude = [
  'let currentPrompt = "'
];

const indexMustInclude = [
  '<html lang="en"',
  "AI Creator Studio",
  "Open Interactive Prototype",
  "Design Engineering",
  "AI Workflow"
];

const missing = mvpMustInclude.filter((item) => !html.includes(item));
const forbidden = mvpMustNotInclude.filter((item) => html.includes(item));
const indexMissing = indexMustInclude.filter((item) => !index.includes(item));

if (missing.length || forbidden.length || indexMissing.length) {
  console.error("Portfolio English surface regression failed.");
  if (missing.length) console.error(`Missing in MVP: ${missing.join(" | ")}`);
  if (forbidden.length) console.error(`Forbidden in MVP: ${forbidden.join(" | ")}`);
  if (indexMissing.length) console.error(`Missing in index: ${indexMissing.join(" | ")}`);
  process.exit(1);
}

console.log("portfolio English surface checks passed");
