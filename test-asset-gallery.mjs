import { readFileSync } from "node:fs";

const html = readFileSync("ai-creator-studio-mvp.html", "utf8");

const required = [
  "资产工作区",
  "function renderAssetGallery",
  "function selectArtAsset",
  "function selectModelAsset",
  "selectedArtAsset",
  "selectedModelAsset",
  "data-art-asset",
  "data-model-asset",
  "id=\"art-asset-editor\"",
  "id=\"model-asset-editor\""
];

const missing = required.filter((item) => !html.includes(item));

if (missing.length) {
  console.error(`Missing asset gallery features: ${missing.join(", ")}`);
  process.exit(1);
}

console.log("asset gallery hooks present");
