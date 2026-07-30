import { readFileSync } from "node:fs";

const html = readFileSync("ai-creator-studio-mvp.html", "utf8");

const required = [
  "data-action=\"theme-toggle\"",
  "data-action=\"credits-open\"",
  "data-action=\"profile-open\"",
  "data-username-label",
  "用户信息",
  "用户名字",
  "生日",
  "手机号",
  "邮箱",
  "save-user-profile",
  "function saveUserProfile",
  "function toggleProfilePanel",
  "user-menu:hover .topbar-panel",
  "credits-menu:hover .topbar-panel"
];

const forbidden = [
  "♧",
  "data-action=\"user-menu\""
];

const missing = required.filter((item) => !html.includes(item));
const forbiddenHits = forbidden.filter((item) => html.includes(item));

if (missing.length || forbiddenHits.length) {
  console.error(`Topbar three-icon mismatch. Missing: ${missing.join(", ") || "none"}. Forbidden: ${forbiddenHits.join(", ") || "none"}`);
  process.exit(1);
}

console.log("topbar three icons present");
