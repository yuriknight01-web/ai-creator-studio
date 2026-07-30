import { readFileSync } from "node:fs";

const html = readFileSync("ai-creator-studio-mvp.html", "utf8");

const required = [
  "icon-sun",
  "icon-moneybag",
  "icon-user",
  "viewBox=\"0 0 24 24\"",
  "data-username-label>Creator</span>"
];

const forbidden = [
  "Creator⌄",
  "Mika⌄",
  ">☼</button>",
  ">$</button>",
  ">人</button>"
];

const missing = required.filter((item) => !html.includes(item));
const forbiddenHits = forbidden.filter((item) => html.includes(item));

if (missing.length || forbiddenHits.length) {
  console.error(`Topbar icon alignment mismatch. Missing: ${missing.join(", ") || "none"}. Forbidden: ${forbiddenHits.join(", ") || "none"}`);
  process.exit(1);
}

console.log("topbar icon alignment present");
