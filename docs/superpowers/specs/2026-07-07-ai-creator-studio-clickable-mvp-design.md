# AI Creator Studio Clickable MVP Design

Date: 2026-07-07
Status: Approved for implementation

## Goal

Build a local, clickable MVP for an AI Creator Studio that turns a user keyword prompt into a complete game/anime project concept dashboard.

The first version focuses on a polished, runnable product demo. It uses deterministic mock data instead of live AI calls so the project can be opened, clicked, and improved safely before API integration.

## User Experience

The app opens directly to the Studio workspace. There is no landing page.

The workspace contains:

- A top flow bar showing the project generation pipeline.
- A keyword input area with an example prompt.
- A generate button.
- A generated world section.
- Character setting cards.
- Character relationship and expression/action panels.
- Art direction panels for scenes, props, and equipment.
- 3D model preview panels.
- Gameplay and system design panels.
- A project output checklist.

When the user clicks the generate button, the UI enters a short loading state, then fills the dashboard with mock generated content.

## Scope

Included in MVP:

- Next.js application shell.
- Tailwind-styled responsive dashboard.
- Clickable generate interaction.
- Mock generated project data.
- Bible folder skeleton with placeholder documentation files.
- Local development server support.

Not included in MVP:

- Real OpenAI API calls.
- Real image generation.
- Real 3D model generation.
- PDF/PPT export.
- User accounts or database storage.

## Architecture

Use a single Next.js app with one main Studio page.

Recommended structure:

- `app/page.tsx`: main interactive Studio page.
- `app/globals.css`: global styling and Tailwind base.
- `components/`: reusable UI blocks if the page starts getting too large.
- `lib/mockProject.ts`: mock generated content.
- `bible/`: project documentation skeleton.

State stays client-side in the MVP. The generate button toggles loading and then displays mock data.

## Data Flow

1. User enters or keeps the keyword prompt.
2. User clicks Generate.
3. The page shows a loading state.
4. Mock project data is loaded into local state.
5. Dashboard sections render generated content.

## Error Handling

Because the first version uses mock data, error handling is minimal:

- Prevent empty prompt generation with a small inline hint.
- Keep the previous generated result visible if the user edits the prompt.
- Avoid any external network dependency in the first working demo.

## Testing and Verification

Verify:

- The app starts locally.
- The first screen is the Studio workspace.
- The generate button changes the visible dashboard state.
- Text fits in panels across desktop and mobile widths.
- No runtime errors appear in the browser or terminal.

