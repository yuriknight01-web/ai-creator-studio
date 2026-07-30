import { readFileSync } from "node:fs";

const html = readFileSync("ai-creator-studio-mvp.html", "utf8");

const required = [
  "function renderCharacterEditorPage",
  "角色基础",
  "剧情定位",
  "人物插画关键词",
  "关系关键词",
  "保存当前角色",
  "renderAssetGallery(\"art\")",
  "作品关键词",
  "修改关键词",
  "renderAssetGallery(\"model\")",
  "模型关键词",
  "材质状态"
];

const missing = required.filter((item) => !html.includes(item));

if (missing.length) {
  console.error(`Missing rich asset editors: ${missing.join(", ")}`);
  process.exit(1);
}

console.log("rich asset editors present");
