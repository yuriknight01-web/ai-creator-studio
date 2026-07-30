import { readFileSync } from "node:fs";

const html = readFileSync("ai-creator-studio-mvp.html", "utf8");

const required = [
  "id=\"new-project-button\"",
  "body.wizard-mode .sidebar",
  "body.wizard-mode .creator-app",
  "body.wizard-mode .workspace > .workspace-top",
  "function renderNewProjectWizard",
  "让我们从一个想法开始",
  "世界基调",
  "核心主题",
  "故事风格",
  "目标受众",
  "游戏类型",
  "美术风格",
  "战斗风格",
  "更多设定",
  "开始生成世界",
  "getPromptExamples",
  "renderPromptExamplesHTML",
  "inspiration-grid",
  "inspiration-card",
  "热门组合",
  "美术风格",
  "游戏玩法",
  "剧情主题",
  "情绪体验",
  "一句话创意",
  "开放世界 + 吉卜力画风 + 治愈探索",
  "如果《黑魂》发生在西游世界？",
  "current-project-return",
  "工作室",
  "还没有任何项目",
  "openNewProjectWizard",
  "document.body.classList.add(\"wizard-mode\")",
  "document.body.classList.remove(\"wizard-mode\")",
  "start-world-generation"
];

const missing = required.filter((item) => !html.includes(item));

if (missing.length) {
  console.error(`Missing new project wizard: ${missing.join(", ")}`);
  process.exit(1);
}

console.log("new project wizard present");
