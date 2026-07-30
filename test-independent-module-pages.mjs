import { readFileSync } from "node:fs";

const html = readFileSync("ai-creator-studio-mvp.html", "utf8");

const required = [
  "body.module-mode .creator-app",
  "body.module-mode .right-rail",
  "document.body.classList.toggle(\"module-mode\", page !== \"dashboard\")",
  "document.body.classList.toggle(\"dashboard-page-active\", page === \"dashboard\")"
];

const missing = required.filter((item) => !html.includes(item));

if (missing.length) {
  console.error(`Missing independent module page behavior: ${missing.join(", ")}`);
  process.exit(1);
}

console.log("independent module pages present");
