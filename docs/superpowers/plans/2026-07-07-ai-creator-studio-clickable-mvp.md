# AI Creator Studio Clickable MVP Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a local, clickable Next.js MVP for an AI Creator Studio dashboard that turns a keyword prompt into a generated game/anime project concept.

**Architecture:** Create a single Next.js app with a client-side Studio page, focused reusable components, and deterministic mock project data. The page renders an empty-ready state, accepts a keyword prompt, shows a loading state, then displays generated dashboard sections.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, lucide-react.

## Global Constraints

- The app opens directly to the Studio workspace.
- There is no landing page.
- The first version uses deterministic mock data instead of live AI calls.
- Real OpenAI API calls, real image generation, real 3D model generation, PDF/PPT export, user accounts, and database storage are out of scope.
- The MVP includes a `bible/` folder skeleton with placeholder documentation files.
- Verify the app starts locally, the generate button changes visible dashboard state, and text fits in panels across desktop and mobile widths.

---

## File Structure

- Create `package.json`: project scripts and dependencies.
- Create `next.config.mjs`: minimal Next.js configuration.
- Create `tsconfig.json`: TypeScript settings.
- Create `postcss.config.mjs`: Tailwind PostCSS plugin configuration.
- Create `tailwind.config.ts`: Tailwind content and theme extension.
- Create `app/layout.tsx`: root HTML shell and metadata.
- Create `app/globals.css`: global styles and Tailwind layers.
- Create `app/page.tsx`: main client-side Studio interaction.
- Create `lib/mockProject.ts`: deterministic data model and generator.
- Create `bible/README.md`: documentation index.
- Create `bible/RFC-0001.md`: product vision skeleton.
- Create `bible/RFC-0002.md`: generation pipeline skeleton.
- Create `bible/RFC-0003.md`: studio UX skeleton.
- Create `bible/RFC-0003A.md`: visual system skeleton.
- Create `bible/ADR-0001.md`: technology decision skeleton.

### Task 1: Project Scaffold and Documentation Skeleton

**Files:**
- Create: `package.json`
- Create: `next.config.mjs`
- Create: `tsconfig.json`
- Create: `postcss.config.mjs`
- Create: `tailwind.config.ts`
- Create: `app/layout.tsx`
- Create: `app/globals.css`
- Create: `bible/README.md`
- Create: `bible/RFC-0001.md`
- Create: `bible/RFC-0002.md`
- Create: `bible/RFC-0003.md`
- Create: `bible/RFC-0003A.md`
- Create: `bible/ADR-0001.md`

**Interfaces:**
- Produces: a runnable Next.js app shell with Tailwind enabled.

- [ ] **Step 1: Create configuration files**

Create the files listed above with Next.js scripts, TypeScript, Tailwind, and metadata.

- [ ] **Step 2: Create bible skeleton**

Create each `bible/` file with a concrete title, `Status: Draft`, and short purpose section.

- [ ] **Step 3: Verify static file structure**

Run: `Get-ChildItem -Recurse -Depth 2`
Expected: app, bible, docs, package and config files are present.

### Task 2: Mock Project Data

**Files:**
- Create: `lib/mockProject.ts`

**Interfaces:**
- Produces: `DEFAULT_PROMPT: string`
- Produces: `GeneratedProject` TypeScript type
- Produces: `createMockProject(prompt: string): GeneratedProject`

- [ ] **Step 1: Define the data model**

Create a `GeneratedProject` type that includes world, characters, relationships, art direction, models, gameplay, and outputs.

- [ ] **Step 2: Implement deterministic generator**

Implement `createMockProject(prompt)` so the UI can generate a complete result without network calls.

- [ ] **Step 3: Type-check**

Run: `npm run typecheck`
Expected: TypeScript compiles with no errors after dependencies are installed.

### Task 3: Studio Page Interaction and Layout

**Files:**
- Create: `app/page.tsx`
- Modify: `app/globals.css`

**Interfaces:**
- Consumes: `DEFAULT_PROMPT`, `createMockProject`, and `GeneratedProject` from `lib/mockProject.ts`.
- Produces: a clickable Studio dashboard.

- [ ] **Step 1: Build client-side interaction**

Create a client component with prompt state, validation hint, loading state, and generated project state.

- [ ] **Step 2: Render dashboard sections**

Render the flow bar, keyword input, world panel, character cards, relationship panel, art panels, 3D model panels, gameplay systems, and output checklist.

- [ ] **Step 3: Verify in browser**

Run: `npm run dev`
Open: `http://localhost:3000`
Expected: the Studio loads, clicking Generate changes the visible content.

### Task 4: Visual QA and Polish

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/globals.css`

**Interfaces:**
- Consumes: the working Studio page.
- Produces: a polished MVP matching the provided dashboard direction.

- [ ] **Step 1: Check desktop layout**

Use the browser at desktop width and confirm no overlapping panels or unreadable text.

- [ ] **Step 2: Check mobile layout**

Use the browser at mobile width and confirm sections stack cleanly.

- [ ] **Step 3: Final verification**

Run: `npm run typecheck`
Run: `npm run lint`
Expected: both commands complete without project errors after dependencies are installed.

