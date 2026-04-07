# Design Desk Skill

Design intelligence for [Claude Code](https://claude.ai/code) — anti-slop enforcement, motion craft, typography, color, layout, persistent design systems, and multi-stack support.

## What It Does

Design Desk elevates frontend work by providing opinionated design guidance directly in your AI coding workflow. It catches common design mistakes (slop), enforces consistent design systems, and helps you build polished UIs across any stack.

**Supported stacks:** React/Next.js, Vue/Nuxt, Svelte, SwiftUI, Flutter, React Native, HTML+Tailwind

## Install

Clone or symlink into your Claude Code skills directory:

```bash
# Clone
git clone https://github.com/bshiggins/design-desk-skill.git
ln -s "$(pwd)/design-desk-skill" ~/.claude/skills/design-desk

# Standalone commands (optional)
ln -s "$(pwd)/design-desk-skill/standalone/designdesk-new" ~/.claude/skills/designdesk-new
ln -s "$(pwd)/design-desk-skill/standalone/designdesk-playground" ~/.claude/skills/designdesk-playground
ln -s "$(pwd)/design-desk-skill/standalone/designdesk-idea" ~/.claude/skills/designdesk-idea
```

## Commands

| Command | What it does |
|---|---|
| `/design-desk` | Main router — audit, critique, polish, motion, palette, and more |
| `/designdesk-new` | Initialize a new design system (DESIGN.md) with guided interview |
| `/designdesk-playground` | Insert a visual tuning phase into GSD for human review |
| `/designdesk-idea` | Quick-capture a design idea or inspiration |

## How It Works

The main skill (`/design-desk`) is a router. Design knowledge lives in reference files loaded on demand, keeping context lean. You only load what the task needs.

**Workflows:** init, audit, critique, polish, motion, palette, extract, responsive, accessibility, review, system

**References:** anti-slop rules, color theory, typography, layout, motion, interaction patterns, glass/depth, dark mode, UX writing, creative arsenal, design dials

**Stacks:** Framework-specific guidance for each supported stack

## GSD Integration

If your project uses [GSD](https://github.com/gsd-build/get-shit-done), Design Desk integrates with discuss, plan, execute, and verify phases. See `references/gsd-integration.md`.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT
