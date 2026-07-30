import { readFileSync } from "node:fs";

const html = readFileSync("ai-creator-studio-mvp.html", "utf8");

const required = [
  "function renderKeywordSettingsPage",
  "关键词设定",
  "当前项目关键词",
  "已识别关键词",
  "保存关键词设定",
  "重新生成当前项目"
];

const forbidden = [
  "function renderKeywordsPage() {\n        return renderNewProjectWizard();"
];

const missing = required.filter((item) => !html.includes(item));
const forbiddenHits = forbidden.filter((item) => html.includes(item));

if (missing.length || forbiddenHits.length) {
  console.error(`Keyword settings page mismatch. Missing: ${missing.join(", ") || "none"}. Forbidden: ${forbiddenHits.join(", ") || "none"}`);
  process.exit(1);
}

console.log("keyword settings page present");
