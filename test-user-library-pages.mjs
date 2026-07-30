import { readFileSync } from "node:fs";

const html = readFileSync("ai-creator-studio-mvp.html", "utf8");

const required = [
  "data-page=\"projects\"",
  "data-page=\"history\"",
  "data-page=\"cases\"",
  "我的项目",
  "灵感收藏",
  "用户案例",
  "function renderProjectsPage",
  "function renderFavoritesPage",
  "function renderCasesPage",
  "收藏总数",
  "应用到当前项目",
  "复制为新项目"
];

const missing = required.filter((item) => !html.includes(item));

if (missing.length) {
  console.error(`Missing user library pages: ${missing.join(", ")}`);
  process.exit(1);
}

if (html.includes("${item.genre}") && !html.includes("currentGenre")) {
  console.error("Project cards need a fallback genre instead of rendering undefined.");
  process.exit(1);
}

console.log("user library pages present");
