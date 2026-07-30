import { readFileSync } from "node:fs";

const html = readFileSync("ai-creator-studio-mvp.html", "utf8");

const required = [
  "const i18n",
  "function tr(key)",
  "function applyLanguageMode",
  "function renderCurrentLanguagePage",
  "function renderTopActions",
  "function renderLanguageUserMenu",
  "function getWizardOptions",
  "function getPromptExamples",
  "function renderPromptExamplesHTML",
  "function detectProjectLanguage",
  "function getEnglishProjectFromPreset",
  "defaultPrompts",
  "inspirationGrid.innerHTML = renderPromptExamplesHTML()",
  "const promptExample = event.target.closest(\"[data-prompt-example]\")",
  "localizeWizardShell();",
  "const startButton = event.target.closest(\"#start-world-generation\")",
  "startGenerationFlow(wizardPrompt)",
  "const nextPage = document.body.classList.contains(\"wizard-mode\") ? \"wizard\" : currentPage",
  "data-i18n=\"nav.dashboard\"",
  "World Tone",
  "高幻想",
  "人性主题",
  "日式 RPG",
  "像素风",
  "Core Theme",
  "Narrative Style",
  "Target Audience",
  "Start Generating World",
  "AI will build a complete creative world from your prompt",
  "Hot Combo",
  "One-line Idea"
];

const forbidden = [
  "bindWizardInteractions"
];

const missing = required.filter((item) => !html.includes(item));
const forbiddenHits = forbidden.filter((item) => html.includes(item));

if (missing.length || forbiddenHits.length) {
  console.error(`Missing global language toggle pieces: ${missing.join(", ") || "none"}. Forbidden: ${forbiddenHits.join(", ") || "none"}`);
  process.exit(1);
}

console.log("global language toggle pieces present");
