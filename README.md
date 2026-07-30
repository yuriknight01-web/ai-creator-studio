# AI Creator Studio

AI Creator Studio is a portfolio-ready design engineering prototype for an AI-assisted creative production workflow. It turns a single game or anime project idea into a structured creative workspace with a world bible, gameplay systems, character relationships, art direction, 3D asset planning, review states, and delivery handoff.

This is a static clickable MVP. It uses mock data, local interactions, and demo assets. It does not currently connect to a production AI API, payment provider, authentication service, database, or file-generation backend.

## Live Demo

- Portfolio case study: https://yuriknight01-web.github.io/ai-creator-studio/
- Interactive prototype: https://yuriknight01-web.github.io/ai-creator-studio/ai-creator-studio-mvp.html
- Design system page: https://yuriknight01-web.github.io/ai-creator-studio/design-system.html

## Product Overview

The product explores how AI can accelerate structured creative work without replacing the designer's role. The designer defines the workflow, information architecture, design system, review points, and output structure. AI acts as an execution layer that generates, updates, and organizes content inside a controlled product experience.

## Problem

Creative AI workflows often produce scattered outputs: prompts, images, notes, character ideas, and partial documents. For a team, those outputs need to become reusable, editable, versioned, and reviewable production assets.

AI Creator Studio reframes AI generation as a product workflow:

- Start from a creative idea.
- Generate a coherent project direction.
- Review world, gameplay, character, visual, and 3D modules.
- Edit individual assets without overwriting the entire project.
- Prepare structured delivery outputs.

## Target Users

- Indie game creators
- Animation and manga concept teams
- Narrative designers
- Concept artists
- Small creative studios
- Product and design-system teams exploring AI workflow tooling

## End-to-End Workflow

1. Input a creative prompt and optional settings.
2. Generate a world bible and project direction.
3. Review gameplay systems and CG preview.
4. Manage characters, factions, and relationship networks.
5. Review and edit art direction assets.
6. Review 3D model planning and model states.
7. Export a mock delivery package.

## Information Architecture

The prototype is organized around two primary surfaces:

- Portfolio entry page: `index.html`
- Clickable MVP: `ai-creator-studio-mvp.html`
- Internal design system page: `design-system.html`

The MVP contains:

- Dashboard / studio overview
- New project wizard
- World Bible
- Gameplay
- Characters
- Art & Visual
- 3D Models
- Documents / Delivery
- Subscription and points mock panels
- User center and language toggle

## Design System

The interface uses a dark AI SaaS visual direction with restrained cards, compact controls, strong hierarchy, and asset-forward layouts.

The project now includes a lightweight internal design system page that documents the prototype's foundations and reusable UI patterns:

- Foundation tokens: color, typography, spacing, radius, surfaces, shadows, and semantic states
- Core components: buttons, inputs, tags, cards, panels, modals, navigation, progress cards, delivery rows
- Component states: default, hover, active, disabled, loading, error, selected
- AI workflow primitives: Input, Agent, Tool, Output, Review

This page is intentionally static for the portfolio version. A production version could export tokens into Figma, CSS variables, and frontend component packages.

## AI Agent and Tool Structure

The prototype is structured around simulated AI workflow stages:

- World agent: creates world premise, factions, conflict, and key art direction.
- Gameplay agent: creates genre, combat, progression, and system loops.
- Character agent: creates cast, factions, traits, and relationship networks.
- Visual agent: creates art asset categories and prompt-level editing.
- 3D agent: creates greybox and textured model planning states.
- Delivery agent: organizes outputs into handoff documents.

These agents are currently represented with mock data and UI states. A production version would connect them to real generation, storage, review, export, and billing systems.

## Prototype States

The current MVP includes or simulates:

- New project flow
- Generation state
- Dashboard result state
- Edit states
- Preview states
- Subscription and credit states
- Language switching
- Light and dark mode
- Mock export package
- Review and version status
- Developer handoff preview

The prototype uses mock data and delayed UI feedback where no backend exists. The intended state model includes loading, empty, success, error, partial result, insufficient credits, retry, approval, and restore.

## Delivery and Handoff

The Documents surface demonstrates how generated work becomes structured project delivery:

- World Bible
- Character Design Bible
- Art Direction Bible
- Gameplay Specification
- 3D Asset Manifest
- Project Proposal
- Developer Handoff Preview

The current export flow is a high-fidelity prototype. It shows document status, review status, version metadata, and handoff structure, but does not create real downloadable files yet.

## Key Design Decisions

- Keep AI outputs structured instead of chat-like.
- Separate generation from review and editing.
- Let users modify individual characters, art assets, gameplay modules, and model specs.
- Treat art and 3D assets as reusable project libraries.
- Make the portfolio entry English-first for international reviewers.
- Be explicit that this is a clickable prototype with mock data.
- Keep AI positioned as an execution and acceleration layer. The designer owns the product direction, workflow, review model, and design system.

## Current Limitations

- No live AI API connection.
- No real account system.
- No real payment processing.
- No persistent database.
- No actual PDF, PPT, FBX, OBJ, or GLB generation.
- Demo content is prebuilt to show the intended product experience.

## Future Improvements

- Connect real AI generation APIs.
- Add persistent project storage.
- Add version history and visual diffing.
- Add approval workflows for human review.
- Add Figma/design-system token export.
- Add real document generation and downloadable handoff packages.
- Add role-based collaboration for teams.
- Expand localization beyond English and Chinese.
