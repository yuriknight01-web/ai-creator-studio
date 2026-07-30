import { readFileSync } from "node:fs";

const html = readFileSync("ai-creator-studio-mvp.html", "utf8");

const required = [
  "data-edit-view=\"world\"",
  "data-edit-view=\"characters\"",
  "data-edit-view=\"visual\"",
  "id=\"edit-panel\"",
  "function switchEditView",
  "function renderEditPanel",
  "function saveEditorChanges",
  "id=\"edit-save\""
];

const missing = required.filter((item) => !html.includes(item));

if (missing.length) {
  console.error(`Missing editor features: ${missing.join(", ")}`);
  process.exit(1);
}

console.log("dashboard editing hooks present");
