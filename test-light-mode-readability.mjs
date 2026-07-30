import { readFileSync } from "node:fs";

const html = readFileSync("ai-creator-studio-mvp.html", "utf8");

const required = [
  "body.light-mode .hero-card h1",
  "body.light-mode [style*=\"color:#fff\"]",
  "body.light-mode [style*=\"color:white\"]",
  "body.light-mode [style*=\"color:#cbd5e1\"]",
  "body.light-mode [style*=\"color:#94a3b8\"]",
  "color: #111827 !important",
  "color: #334155 !important",
  "body.light-mode textarea",
  "body.light-mode select",
  "background: #ffffff !important",
  "body.light-mode .tag",
  "body.light-mode #start-world-generation",
  "linear-gradient(135deg, #2563eb, #0f766e)",
  "body.light-mode .activity-row",
  "body.light-mode .meta-row b"
];

const missing = required.filter((item) => !html.includes(item));

if (missing.length) {
  console.error(`Missing light mode readability rules: ${missing.join(", ")}`);
  process.exit(1);
}

console.log("light mode readability rules present");
