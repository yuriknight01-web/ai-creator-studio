import { readFileSync } from "node:fs";

const html = readFileSync("ai-creator-studio-mvp.html", "utf8");

const required = [
  "preset-picker",
  "preset-trigger",
  "preset-menu",
  "preset-submenu",
  "data-preset-value",
  "function closePresetPickers",
  "function selectPresetOption",
  "const shouldOpen = !picker?.classList.contains(\"open\")",
  "if (node === exceptPicker) return",
  "node.classList.remove(\"open\");",
  ".preset-group.active .preset-submenu",
  ".preset-group::after",
  ".preset-group.active::after",
  "const presetGroup = event.target.closest(\".preset-group\")",
  "presetGroup.classList.add(\"active\")",
  "picker.querySelectorAll(\".preset-group.active\")",
  "document.addEventListener(\"mouseout\"",
  "const isPresetInteraction = event.target.closest(\".preset-trigger, .preset-menu\")",
  "if (!isPresetInteraction) closePresetPickers()",
  "\"Fantasy\"",
  "\"Sci-Fi\"",
  "\"Horror\"",
  "\"RPG\"",
  "\"Camera\"",
  "都市异能",
  "High Fantasy（高幻想）",
  "Cosmic Horror（克苏鲁）",
  "Environmental Storytelling（环境叙事）",
  "Extraction Shooter",
  "Monster Hunter Combat",
  "Time Loop",
  "Young Adult",
  "HD-2D",
  "开放世界探索",
  "角色收集养成",
  "开放世界玩家",
  "生存建造",
  "二次元赛璐璐",
  "魂系攻防",
  "季节活动",
  "舒适经营",
  "策略卡牌",
  "末世生存",
  "轻度社交",
  "高自由度沙盒",
  "悬疑反转",
  "视角",
  "核心循环",
  "Explore → Fight → Loot",
  "Die → Upgrade → Retry",
  "AI 将基于你的选择自由扩展细节"
];

const forbidden = [
  "<optgroup",
  "参考作品",
  "data-wizard-multiple",
  "selectedOptions",
  "《黑暗之魂》",
  "《塞尔达》"
];

const missing = required.filter((item) => !html.includes(item));
const forbiddenHits = forbidden.filter((item) => html.includes(item));

if (missing.length || forbiddenHits.length) {
  console.error(`Wizard option library mismatch. Missing: ${missing.join(", ") || "none"}. Forbidden: ${forbiddenHits.join(", ") || "none"}`);
  process.exit(1);
}

console.log("expanded wizard option library present");
