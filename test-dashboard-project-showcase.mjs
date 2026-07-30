import { readFileSync } from "node:fs";

const html = readFileSync("ai-creator-studio-mvp.html", "utf8");

const dashboardSection = html.match(/<section id="dashboard-page">([\s\S]*?)<section id="module-page"/)?.[1] || "";

const required = [
  "当前项目总览",
  "创作下一步",
  "data-page=\"keywords\"",
  "id=\"module-prompt\"",
  "currentPrompt"
];

const forbiddenInDashboard = [
  "id=\"dash-prompt\"",
  "id=\"dash-generate\"",
  "id=\"dash-count\"",
  "id=\"dash-hint\"",
  "关键词输入</h2>"
];

const missing = required.filter((item) => !html.includes(item));
const stillInDashboard = forbiddenInDashboard.filter((item) => dashboardSection.includes(item));

if (missing.length || stillInDashboard.length) {
  console.error(`Dashboard showcase mismatch. Missing: ${missing.join(", ") || "none"}. Still in dashboard: ${stillInDashboard.join(", ") || "none"}`);
  process.exit(1);
}

console.log("dashboard project showcase present");
