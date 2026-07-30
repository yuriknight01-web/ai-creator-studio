import { readFileSync } from "node:fs";

const html = readFileSync("ai-creator-studio-mvp.html", "utf8");

const required = [
  "data-action=\"theme-toggle\"",
  "data-action=\"credits-open\"",
  "class=\"user-menu\"",
  "积分余额",
  "订阅方案",
  "单独购买积分",
  "用户信息",
  "用户名字",
  "切换语言",
  "订阅",
  "支付信息",
  "退出登录",
  "body.light-mode",
  "function toggleThemeMode",
  "function toggleCreditsPanel"
];

const missing = required.filter((item) => !html.includes(item));

if (missing.length) {
  console.error(`Missing topbar actions: ${missing.join(", ")}`);
  process.exit(1);
}

console.log("topbar actions present");
