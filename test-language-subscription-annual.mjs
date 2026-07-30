import { readFileSync } from "node:fs";

const html = readFileSync("ai-creator-studio-mvp.html", "utf8");

const required = [
  "data-action=\"language-toggle\"",
  "data-plan-cn=\"专业版\"",
  "data-plan-en=\"Pro\"",
  "Standard",
  "Business",
  "function toggleLanguageMode",
  "data-subscription-label",
  "月版",
  "年版",
  "年付更省",
  "$16.66 / 月",
  "每年 $199.99"
];

const missing = required.filter((item) => !html.includes(item));

if (missing.length) {
  console.error(`Missing language/subscription annual pieces: ${missing.join(", ")}`);
  process.exit(1);
}

console.log("language subscription annual pieces present");
