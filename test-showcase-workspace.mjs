import { readFileSync } from "node:fs";

const html = readFileSync("ai-creator-studio-mvp.html", "utf8");
const dashboardSection = html.match(/<section id="dashboard-page">([\s\S]*?)<section id="module-page"/)?.[1] || "";

const required = [
  "data-result-page=\"world\"",
  "data-result-page=\"characters\"",
  "data-result-page=\"gameplay\"",
  "data-result-page=\"visual\"",
  "data-result-page=\"models\"",
  "function openResultPage",
  "function renderResultPage",
  "function renderResultWorldPage",
  "世界观大插画",
  "角色关系",
  "CG 预览",
  "怪物插画",
  "灰模",
  "已上色",
  "function renderShowcaseProgress"
];

const forbiddenDashboard = [
  "id=\"edit-panel\"",
  "编辑世界观设定",
  "保存世界观"
];

const missing = required.filter((item) => !html.includes(item));
const forbidden = forbiddenDashboard.filter((item) => dashboardSection.includes(item));

if (missing.length || forbidden.length) {
  console.error(`Showcase workspace mismatch. Missing: ${missing.join(", ") || "none"}. Forbidden in dashboard: ${forbidden.join(", ") || "none"}`);
  process.exit(1);
}

console.log("showcase workspace present");
