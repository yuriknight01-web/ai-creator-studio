import { readFileSync } from "node:fs";

const html = readFileSync("ai-creator-studio-mvp.html", "utf8");
const navHasKeywords = html.includes('data-page="keywords"');
const worldMatch = html.match(/function renderWorldPage\(\) \{[\s\S]*?\n      \}/);
const worldSource = worldMatch?.[0] || "";

const requiredInPanel = [
  "当前项目关键词",
  "已识别关键词",
  "保存关键词设定",
  "重新生成当前项目"
];

const requiredInWorld = [
  "renderKeywordSettingsPanel"
];

const missing = requiredInWorld.filter((item) => !worldSource.includes(item));
const missingPanel = requiredInPanel.filter((item) => !html.includes(item));
const forbidden = ["修改世界观", 'data-edit-view="world"'].filter((item) => worldSource.includes(item));

if (navHasKeywords || missing.length || missingPanel.length || forbidden.length) {
  console.error(`World keyword merge mismatch. Nav has keywords: ${navHasKeywords}. Missing in world: ${missing.join(", ") || "none"}. Missing panel content: ${missingPanel.join(", ") || "none"}. Forbidden in world: ${forbidden.join(", ") || "none"}`);
  process.exit(1);
}

console.log("world keyword merge present");
