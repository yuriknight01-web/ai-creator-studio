import { readFileSync } from "node:fs";

const html = readFileSync("ai-creator-studio-mvp.html", "utf8");

const required = [
  "data-action=\"open-subscription\"",
  "data-action=\"open-points\"",
  "onclick=\"openBillingModal('subscription')\"",
  "onclick=\"openBillingModal('points')\"",
  "id=\"subscription-modal\"",
  "id=\"points-modal\"",
  "billing-overlay",
  "backdrop-filter: blur",
  "function openBillingModal",
  "function closeBillingModal",
  "function renderBillingModal",
  "function renderSubscriptionModalContent",
  "function renderPointsModalContent",
  "Subscription Plans",
  "Choose Pro",
  "Points Recharge",
  "Recharge Now",
  "data-action=\"close-billing\"",
  "专业版",
  "团队版",
  "每月赠送",
  "12,000 积分",
  "专属模型队列",
  "高级导出格式",
  "商业授权标记",
  "会员权益",
  "@keyframes modalReveal",
  "@keyframes overlayFade",
  "5,500 积分",
  "立即充值"
];

const forbidden = [
  "每月 10 次",
  "每月 50 次",
  "无限次"
];

const missing = required.filter((item) => !html.includes(item));
const forbiddenHits = forbidden.filter((item) => html.includes(item));

if (missing.length || forbiddenHits.length) {
  console.error(`Billing modal mismatch. Missing: ${missing.join(", ") || "none"}. Forbidden: ${forbiddenHits.join(", ") || "none"}`);
  process.exit(1);
}

console.log("billing modals present");
