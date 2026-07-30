import { readFileSync } from "node:fs";

const html = readFileSync("ai-creator-studio-mvp.html", "utf8");

const required = [
  "data-page=\"dashboard\"",
  "data-page=\"world\"",
  "data-page=\"characters\"",
  "data-page=\"visual\"",
  "data-page=\"gameplay\"",
  "data-page=\"models\"",
  "data-page=\"documents\"",
  "id=\"module-page\"",
  "function switchPage",
  "function renderModulePage",
  "function renderCharactersPage",
  "function renderVisualPage",
  "function renderGameplayPage",
  "function renderModelsPage",
  "function renderDocumentsPage"
];

const missing = required.filter((item) => !html.includes(item));

if (missing.length) {
  console.error(`Missing module page features: ${missing.join(", ")}`);
  process.exit(1);
}

console.log("module page hooks present");
