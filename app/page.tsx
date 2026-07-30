"use client";

import {
  BadgeCheck,
  Box,
  BrainCircuit,
  ClipboardList,
  Download,
  Gamepad2,
  Loader2,
  Network,
  Palette,
  Sparkles,
  Wand2
} from "lucide-react";
import { useMemo, useState } from "react";
import { createMockProject, DEFAULT_PROMPT, type Character, type GeneratedProject } from "@/lib/mockProject";

const flowSteps = [
  { icon: Wand2, label: "关键词输入" },
  { icon: BrainCircuit, label: "世界观生成" },
  { icon: Palette, label: "角色与美术设定" },
  { icon: Box, label: "3D 模型生成" },
  { icon: Gamepad2, label: "玩法与系统设计" },
  { icon: ClipboardList, label: "项目文档输出" }
];

export default function Home() {
  const [prompt, setPrompt] = useState(DEFAULT_PROMPT);
  const [project, setProject] = useState<GeneratedProject>(() => createMockProject(DEFAULT_PROMPT));
  const [isGenerating, setIsGenerating] = useState(false);
  const [hint, setHint] = useState("");

  const promptWordCount = useMemo(() => prompt.trim().length, [prompt]);

  function handleGenerate() {
    if (!prompt.trim()) {
      setHint("先输入一个世界关键词，例如：东方未来城市，御剑飞行，开放世界 RPG。");
      return;
    }

    setHint("");
    setIsGenerating(true);
    window.setTimeout(() => {
      setProject(createMockProject(prompt));
      setIsGenerating(false);
    }, 800);
  }

  return (
    <main className="min-h-screen px-4 py-5 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-4">
        <header className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="bg-gradient-to-r from-cyan-200 via-violet-300 to-fuchsia-300 bg-clip-text text-3xl font-black tracking-normal text-transparent sm:text-5xl">
              AI 一键生成游戏 / 动漫项目全案
            </h1>
            <span className="rounded border border-cyan-300/30 bg-cyan-300/10 px-2 py-1 text-xs font-semibold text-cyan-100">
              Clickable MVP
            </span>
          </div>
          <p className="max-w-4xl text-sm text-slate-300 sm:text-base">
            输入关键词，生成世界观、角色设定、美术方向、3D 资产规划、玩法系统与项目输出清单。
          </p>
        </header>

        <section className="grid gap-2 rounded-lg border border-line/80 bg-panel/70 p-3 shadow-glow backdrop-blur xl:grid-cols-6">
          {flowSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="flex min-h-14 items-center gap-3 rounded-md border border-slate-700/70 bg-slate-950/50 px-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-violet-300/30 bg-violet-500/20 text-violet-200">
                  <Icon size={19} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500">0{index + 1}</p>
                  <p className="truncate text-sm font-semibold text-slate-100">{step.label}</p>
                </div>
              </div>
            );
          })}
        </section>

        <div className="grid gap-4 xl:grid-cols-[0.9fr_1.2fr]">
          <section className="flex flex-col gap-4">
            <Panel title="1. 输入关键词" accent="示例">
              <textarea
                value={prompt}
                onChange={(event) => setPrompt(event.target.value)}
                className="min-h-24 w-full resize-none rounded-md border border-slate-700 bg-slate-950/80 p-3 text-sm leading-6 text-slate-100 outline-none transition focus:border-cyanline"
                placeholder={DEFAULT_PROMPT}
              />
              <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-slate-400">{promptWordCount} 个字符，建议包含题材、时代、玩法、视觉关键词。</p>
                <button
                  type="button"
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-violet-500 to-cyan-500 px-4 text-sm font-bold text-white shadow-glow transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isGenerating ? <Loader2 className="animate-spin" size={18} /> : <Sparkles size={18} />}
                  {isGenerating ? "生成中..." : "生成项目全案"}
                </button>
              </div>
              {hint ? <p className="mt-2 text-sm text-amber-200">{hint}</p> : null}
            </Panel>

            <Panel title="2. AI 生成世界观设定">
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase text-cyan-200">世界名称</p>
                  <h2 className="mt-1 text-2xl font-black text-white">{project.world.name}</h2>
                  <p className="text-sm text-slate-400">{project.world.era}</p>
                </div>
                <p className="text-sm leading-7 text-slate-300">{project.world.overview}</p>
                <TagCloud tags={project.world.keywords} />
                <ConceptImage title={project.title} subtitle={project.tagline} />
                <InfoBlock title="核心冲突" text={project.world.coreConflict} />
                <div className="grid gap-2 sm:grid-cols-2">
                  {project.world.factions.map((faction) => (
                    <div key={faction.name} className="rounded-md border border-slate-700/80 bg-slate-950/55 p-3">
                      <p className="font-bold text-cyan-100">{faction.name}</p>
                      <p className="mt-1 text-xs leading-5 text-slate-400">{faction.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Panel>
          </section>

          <section className="flex flex-col gap-4">
            <Panel title="3. AI 生成角色设定">
              <div className="grid gap-3 lg:grid-cols-3">
                {project.characters.map((character) => (
                  <CharacterCard key={character.name} character={character} />
                ))}
              </div>
              <div className="mt-4 grid gap-3 lg:grid-cols-[1fr_0.8fr]">
                <RelationshipPanel project={project} />
                <MotionPanel expressions={project.expressions} actions={project.actions} />
              </div>
            </Panel>

            <div className="grid gap-4 lg:grid-cols-2">
              <Panel title="4. AI 生成美术设定">
                <AssetStrip title="场景概念图" items={project.artDirection.scenes} tone="cyan" />
                <AssetStrip title="场景原画设定" items={project.artDirection.locations} tone="violet" />
                <AssetStrip title="道具 / 装备设定" items={[...project.artDirection.props, ...project.artDirection.equipment]} tone="amber" />
              </Panel>

              <Panel title="5. AI 生成 3D 模型">
                <AssetStrip title="角色 3D 模型" items={project.models.characters} tone="silver" />
                <AssetStrip title="场景 3D 模型" items={project.models.scenes} tone="cyan" />
                <AssetStrip title="道具 3D 模型" items={project.models.props} tone="violet" />
              </Panel>
            </div>
          </section>
        </div>

        <div className="grid gap-4 xl:grid-cols-[1.2fr_0.9fr]">
          <Panel title="6. AI 设计玩法 & 系统">
            <div className="grid gap-3 md:grid-cols-4">
              <SystemColumn title="6.1 游戏类型" items={[project.gameplay.type, project.gameplay.coreLoop.join(" / ")]} />
              <SystemColumn title="6.2 核心玩法" items={project.gameplay.coreLoop} />
              <SystemColumn title="6.3 战斗系统" items={project.gameplay.combat} />
              <SystemColumn title="6.4 成长 & 世界" items={[...project.gameplay.growth, ...project.gameplay.worldSystems]} />
            </div>
          </Panel>

          <Panel title="7. 项目输出">
            <div className="grid gap-3 sm:grid-cols-[1fr_1.1fr]">
              <div className="space-y-2">
                {project.outputs.map((output) => (
                  <div key={output} className="flex items-center gap-3 rounded-md border border-slate-700/70 bg-slate-950/60 p-3">
                    <Download className="text-violet-200" size={17} />
                    <span className="text-sm text-slate-200">{output}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-md border border-cyan-300/20 bg-gradient-to-br from-cyan-300/12 to-violet-500/10 p-4">
                <p className="text-xs font-semibold uppercase text-cyan-200">Project Package</p>
                <h3 className="mt-2 text-xl font-black text-white">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{project.tagline}</p>
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-300">
                  <Metric label="角色" value="3" />
                  <Metric label="势力" value="4" />
                  <Metric label="玩法" value="12+" />
                  <Metric label="文档" value="6" />
                </div>
              </div>
            </div>
          </Panel>
        </div>

        <footer className="pb-2 text-center text-sm font-semibold text-violet-200">
          输入关键词，AI 帮你从 0 到 1 生成完整项目方案，提升创作效率，激发无限创意！
        </footer>
      </div>
    </main>
  );
}

function Panel({ title, accent, children }: { title: string; accent?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-lg border border-line/90 bg-panel/78 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur">
      <div className="mb-3 flex items-center justify-between gap-2">
        <h2 className="text-lg font-black text-violet-200">{title}</h2>
        {accent ? <span className="rounded border border-violet-300/30 px-2 py-1 text-xs text-violet-100">{accent}</span> : null}
      </div>
      {children}
    </section>
  );
}

function TagCloud({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="rounded border border-cyan-300/25 bg-cyan-300/10 px-2 py-1 text-xs font-semibold text-cyan-100">
          {tag}
        </span>
      ))}
    </div>
  );
}

function InfoBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-md border border-slate-700/80 bg-slate-950/50 p-3">
      <p className="font-bold text-violet-100">{title}</p>
      <p className="mt-1 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}

function ConceptImage({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="relative min-h-56 overflow-hidden rounded-md border border-cyan-300/20 bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(56,213,255,0.26),transparent_28%),linear-gradient(45deg,rgba(124,92,255,0.22),transparent_38%),repeating-linear-gradient(90deg,rgba(255,255,255,0.05)_0_1px,transparent_1px_68px)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 to-transparent" />
      <div className="absolute left-5 top-7 h-28 w-20 rounded-t-full border border-cyan-200/30 bg-cyan-200/10" />
      <div className="absolute left-32 top-10 h-36 w-24 rounded-t-lg border border-violet-200/30 bg-violet-200/10" />
      <div className="absolute right-12 top-8 h-40 w-28 rounded-t-full border border-cyan-200/30 bg-cyan-200/10" />
      <div className="absolute right-40 top-20 h-20 w-48 rotate-[-8deg] border-t border-cyan-200/30" />
      <div className="relative flex min-h-56 flex-col justify-end p-4">
        <p className="text-xs font-semibold uppercase text-cyan-100">Generated World Preview</p>
        <h3 className="mt-1 text-2xl font-black text-white">{title}</h3>
        <p className="mt-1 max-w-xl text-sm leading-6 text-slate-300">{subtitle}</p>
      </div>
    </div>
  );
}

function CharacterCard({ character }: { character: Character }) {
  return (
    <div className="overflow-hidden rounded-md border border-slate-700/80 bg-slate-100 text-slate-950">
      <div className="p-3">
        <p className="text-sm font-black">{character.role}: {character.name}</p>
        <p className="mt-1 text-xs leading-5">设定：{character.archetype}</p>
        <p className="text-xs leading-5">性格：{character.personality}</p>
        <p className="text-xs leading-5">武器：{character.weapon}</p>
        <p className="text-xs leading-5">能力：{character.ability}</p>
      </div>
      <div className="grid min-h-52 grid-cols-3 gap-2 bg-gradient-to-br from-slate-200 to-slate-400 p-3">
        {[0, 1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="flex items-end justify-center rounded bg-white/45 p-1">
            <div className="h-28 w-10 rounded-t-full border border-slate-600 bg-gradient-to-b from-slate-800 to-slate-500" />
          </div>
        ))}
      </div>
      <div className="bg-slate-900 px-3 py-2 text-xs text-slate-200">色彩：{character.palette}</div>
    </div>
  );
}

function RelationshipPanel({ project }: { project: GeneratedProject }) {
  return (
    <div className="rounded-md border border-slate-700/80 bg-slate-950/50 p-3">
      <div className="mb-3 flex items-center gap-2">
        <Network size={17} className="text-cyan-200" />
        <h3 className="font-bold text-cyan-100">3.2 角色关系图</h3>
      </div>
      <div className="grid gap-2">
        {project.relationships.map((item) => (
          <div key={`${item.from}-${item.to}`} className="rounded border border-slate-700/70 bg-slate-900/70 p-2 text-xs leading-5 text-slate-300">
            <span className="font-bold text-violet-100">{item.from}</span>
            <span className="mx-2 text-cyan-200">→</span>
            <span className="font-bold text-violet-100">{item.to}</span>
            <p className="mt-1">{item.relation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MotionPanel({ expressions, actions }: { expressions: string[]; actions: string[] }) {
  return (
    <div className="rounded-md border border-slate-700/80 bg-slate-950/50 p-3">
      <h3 className="mb-3 font-bold text-cyan-100">3.3 表情 & 动作</h3>
      <div className="grid grid-cols-4 gap-2">
        {expressions.map((expression) => (
          <div key={expression} className="grid min-h-16 place-items-center rounded border border-slate-700 bg-slate-900/80 text-center text-xs text-slate-300">
            {expression}
          </div>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {actions.map((action) => (
          <div key={action} className="rounded border border-violet-300/20 bg-violet-400/10 p-2 text-xs text-violet-100">
            {action}
          </div>
        ))}
      </div>
    </div>
  );
}

function AssetStrip({ title, items, tone }: { title: string; items: string[]; tone: "cyan" | "violet" | "amber" | "silver" }) {
  const toneClass = {
    cyan: "from-cyan-300/25 to-cyan-900/20 border-cyan-300/25",
    violet: "from-violet-300/25 to-violet-900/20 border-violet-300/25",
    amber: "from-amber-300/25 to-amber-900/20 border-amber-300/25",
    silver: "from-slate-200/25 to-slate-800/20 border-slate-300/25"
  }[tone];

  return (
    <div className="mb-3 last:mb-0">
      <h3 className="mb-2 text-sm font-bold text-cyan-100">{title}</h3>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {items.map((item) => (
          <div key={item} className={`min-h-20 rounded-md border bg-gradient-to-br p-2 ${toneClass}`}>
            <div className="mb-2 h-9 rounded bg-white/10" />
            <p className="text-xs font-semibold leading-4 text-slate-200">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SystemColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-md border border-slate-700/80 bg-slate-950/50 p-3">
      <h3 className="mb-2 font-bold text-cyan-100">{title}</h3>
      <ul className="space-y-2 text-sm text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex gap-2 leading-5">
            <BadgeCheck className="mt-0.5 shrink-0 text-violet-200" size={14} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded border border-slate-700/70 bg-slate-950/60 p-2">
      <p className="text-slate-500">{label}</p>
      <p className="mt-1 text-lg font-black text-white">{value}</p>
    </div>
  );
}
