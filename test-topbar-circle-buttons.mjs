import { readFileSync } from "node:fs";

const html = readFileSync("ai-creator-studio-mvp.html", "utf8");

const required = [
  ".top-icons .round-btn",
  "flex: 0 0 34px",
  "min-width: 34px",
  "max-width: 34px",
  "aspect-ratio: 1 / 1",
  "padding: 0",
  ".top-icons .round-btn svg",
  ".top-icons .round-btn .icon-moneybag"
];

const missing = required.filter((item) => !html.includes(item));

if (missing.length) {
  console.error(`Topbar circle button sizing mismatch. Missing: ${missing.join(", ")}`);
  process.exit(1);
}

console.log("topbar circle buttons are constrained");
