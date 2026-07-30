import { readFileSync } from "node:fs";

const html = readFileSync("ai-creator-studio-mvp.html", "utf8");

const required = [
  "<label>生日</label><button class=\"birthday-trigger\" data-action=\"birthday-open\"",
  "data-birthday-value",
  "birthday-popover",
  "birthday-year",
  "birthday-month",
  "birthday-days",
  "function openBirthdayPicker",
  "function renderBirthdayDays",
  "function selectBirthdayDay"
];

const forbidden = [
  "<label>生日</label><input value=\"未设置\">",
  "data-user-birthday type=\"date\""
];

const missing = required.filter((item) => !html.includes(item));
const forbiddenHits = forbidden.filter((item) => html.includes(item));

if (missing.length || forbiddenHits.length) {
  console.error(`Birthday date picker mismatch. Missing: ${missing.join(", ") || "none"}. Forbidden: ${forbiddenHits.join(", ") || "none"}`);
  process.exit(1);
}

console.log("user birthday date picker present");
