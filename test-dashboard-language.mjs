import { readFileSync } from "node:fs";

const html = readFileSync("ai-creator-studio-mvp.html", "utf8");

const required = [
  "function getDashboardCopy",
  "function localizeDashboardShell",
  "Welcome back, Creator",
  "欢迎回来，Creator",
  "Current Project",
  "当前项目总览",
  "Creation Progress",
  "创作进度",
  "Continue Creating",
  "继续创作",
  "renderShowcaseProgress",
  "languageMode === \"en\""
];

const missing = required.filter((item) => !html.includes(item));

if (missing.length) {
  console.error(`Missing dashboard language pieces: ${missing.join(", ")}`);
  process.exit(1);
}

console.log("dashboard language pieces present");
