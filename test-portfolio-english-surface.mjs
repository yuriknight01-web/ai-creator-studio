import { readFileSync } from "node:fs";

const html = readFileSync("ai-creator-studio-mvp.html", "utf8");
const index = readFileSync("index.html", "utf8");
const designSystem = readFileSync("design-system.html", "utf8");

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
  "3D Model Library",
  "Developer Handoff Preview",
  "Review + Version Status",
  "Version History",
  "Compare v0.2 / v0.3",
  "Restore Previous Version",
  "Approve Handoff",
  "Current Limitation",
  "Data Source: Mock Data"
];

const mvpMustNotInclude = [
  'let currentPrompt = "'
];

const indexMustInclude = [
  '<html lang="en"',
  "AI Creator Studio",
  "Open Interactive Prototype",
  "Start 3-minute Demo",
  "Case Study at a Glance",
  "3-minute Demo Path",
  "Open Component Library",
  "Design Engineering",
  "AI Workflow",
  "AI Agent + Tool Architecture",
  "Designer Input",
  "Version and Review Model",
  "Review + Handoff",
  "Delivery Package"
];

const designSystemMustInclude = [
  '<html lang="en"',
  "AI Creator Studio - Design System",
  "Design tokens and workflow components",
  "Reusable UI Patterns",
  "Input -> Agent -> Tool -> Output -> Review",
  "Component Library"
];

const missing = mvpMustInclude.filter((item) => !html.includes(item));
const forbidden = mvpMustNotInclude.filter((item) => html.includes(item));
const indexMissing = indexMustInclude.filter((item) => !index.includes(item));
const designSystemMissing = designSystemMustInclude.filter((item) => !designSystem.includes(item));

if (missing.length || forbidden.length || indexMissing.length || designSystemMissing.length) {
  console.error("Portfolio English surface regression failed.");
  if (missing.length) console.error(`Missing in MVP: ${missing.join(" | ")}`);
  if (forbidden.length) console.error(`Forbidden in MVP: ${forbidden.join(" | ")}`);
  if (indexMissing.length) console.error(`Missing in index: ${indexMissing.join(" | ")}`);
  if (designSystemMissing.length) console.error(`Missing in design system: ${designSystemMissing.join(" | ")}`);
  process.exit(1);
}

console.log("portfolio English surface checks passed");
