---
name: design-desk
description: "Design intelligence for frontend projects — anti-slop enforcement, motion craft, typography, color, layout, persistent design systems, and multi-stack support. Use when building UI components, pages, or applications. Use when designing, styling, reviewing, auditing, or polishing any frontend code. Triggers on: design, UI, UX, frontend, component, style, theme, color, palette, typography, font, animation, motion, transition, hover, responsive, mobile, accessibility, WCAG, polish, refine, critique, audit, layout, spacing, grid, card, hero, navbar, dashboard, landing page, dark mode, glass, shadow, elevation. Works with React, Next.js, Vue, Nuxt, Svelte, SwiftUI, Flutter, React Native, HTML+Tailwind. Integrates with GSD workflow when .planning/ exists."
---

# Design Desk

Design intelligence that elevates any frontend project. Persistent design systems, anti-slop enforcement, motion craft, and stack-aware implementation guidance.

## How This Skill Works

SKILL.md is a router. Design knowledge lives in reference files loaded on demand. This keeps context lean — you only load what the task needs.

## Context Gathering

Design skills produce generic output without project context. Before any design work:

1. **Check for DESIGN.md** in the project root. If it exists, load it — it has the project's design direction, tokens, and constraints.
2. **No DESIGN.md?** Run the init workflow to create one before proceeding.
3. **Quick task?** (fixing one component, adjusting spacing) — DESIGN.md is sufficient, skip the interview.

## GSD Integration

If a `.planning/` directory exists, this project uses GSD. Read `references/gsd-integration.md` for phase-aware behavior — how to inject design intelligence into discuss, plan, execute, and verify stages. If no `.planning/` exists, ignore this section entirely.

## Routing

Match the user's request to the right workflow + references:

### Workflows (slash commands)

| Request pattern | Workflow | References to load |
|---|---|---|
| "init", "setup design", "new project design" | `workflows/init.md` | `references/design-dials.md`, `templates/design-system.md` |
| "audit", "check design", "review code" | `workflows/audit.md` | `references/anti-slop.md`, `references/pre-flight.md`, + stack file |
| "extract tokens", "reverse-engineer" | `workflows/extract.md` | `templates/design-system.md` |
| "critique", "slop test", "is this good" | `workflows/critique.md` | `references/anti-slop.md` |
| "polish", "refine", "improve this" | `workflows/polish.md` | `references/motion.md`, `references/interaction.md` |
| "design system", "update tokens" | `workflows/system.md` | `templates/design-system.md`, `references/design-dials.md` |
| "animation", "motion", "spring", "transition" | `workflows/motion.md` | `references/motion.md`, `references/creative-arsenal.md` |
| "responsive", "mobile", "breakpoints" | `workflows/responsive.md` | `references/layout.md` |
| "accessibility", "WCAG", "contrast", "a11y" | `workflows/accessibility.md` | `references/interaction.md` |
| "palette", "colors", "color scheme" | `workflows/palette.md` | `references/color.md` |

### Building (no slash command — just doing the work)

When building components or pages, load these references based on what you're doing:

1. **Always load:** `references/anti-slop.md` (the quality floor)
2. **If project has DESIGN.md:** read it for tokens and constraints
3. **Stack-specific guidance:** detect the framework and load from `stacks/`
4. **Domain-specific:** load the relevant reference for the work at hand

| Building... | Load |
|---|---|
| Typography, headings, text | `references/typography.md` |
| Colors, palette, theming | `references/color.md` |
| Layout, grids, spacing | `references/layout.md` |
| Animations, transitions, hover | `references/motion.md` |
| Forms, buttons, interactive elements | `references/interaction.md` |
| Glass effects, shadows, cards | `references/glass-and-depth.md` |
| Dark mode, light/dark switching | `references/dark-mode.md` |
| Copy, labels, empty states | `references/ux-writing.md` |
| Something creative or advanced | `references/creative-arsenal.md` |

### Stack Detection

Check the project for framework markers and load the matching stack file:

| Marker | Stack file |
|---|---|
| `next.config.*`, `app/layout.tsx` | `stacks/react-nextjs.md` |
| `tailwind.config.*`, plain `.html` | `stacks/html-tailwind.md` |
| `nuxt.config.*`, `.vue` files | `stacks/vue-nuxt.md` |
| `*.swift`, `SwiftUI` imports | `stacks/swiftui.md` |
| `pubspec.yaml`, `.dart` files | `stacks/flutter.md` |
| `react-native`, `expo` in package.json | `stacks/react-native.md` |

### Context Profiles

Set output style based on what the user is doing:

| Mode | Context file | When |
|---|---|---|
| Build | `contexts/build.md` | Writing code, implementing designs |
| Explore | `contexts/explore.md` | Comparing options, picking direction |
| Review | `contexts/review.md` | Auditing, critiquing, scoring |
