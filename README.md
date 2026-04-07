# Design Desk Skill

Design intelligence for [Claude Code](https://claude.ai/code) — anti-slop enforcement, motion craft, typography, color, layout, persistent design systems, and multi-stack support.

## What It Does

Design Desk elevates frontend work by providing opinionated design guidance directly in your AI coding workflow. It catches common design mistakes (slop), enforces consistent design systems, and helps you build polished UIs across any stack.

**Supported stacks:** React/Next.js, Vue/Nuxt, Svelte, SwiftUI, Flutter, React Native, HTML+Tailwind

## Install

```bash
# Clone into Claude Code config directory
git clone https://github.com/bshiggins/design-desk-skill.git ~/.claude/design-desk-skill

# Symlink each command into skills
for skill in ~/.claude/design-desk-skill/standalone/designdesk-*; do
  ln -s "$skill" ~/.claude/skills/$(basename "$skill")
done
```

### Update notifications (optional)

Copy the session-start hook for automatic update detection:

```bash
cp ~/.claude/design-desk-skill/bin/check-update.js ~/.claude/hooks/designdesk-check-update.js
```

Then add to your `~/.claude/settings.json` under `hooks.SessionStart`:

```json
{
  "hooks": [{ "type": "command", "command": "node ~/.claude/hooks/designdesk-check-update.js" }]
}
```

## Commands

| Command | What it does |
|---|---|
| `/designdesk-new` | Initialize a new design system (DESIGN.md) with guided interview |
| `/designdesk-review` | Audit frontend code — score 5 dimensions, flag violations, produce report |
| `/designdesk-improve` | Fix findings from a review, working by priority tier |
| `/designdesk-playground` | Insert a visual tuning phase into GSD for human review |
| `/designdesk-idea` | Quick-capture a design idea or inspiration |
| `/designdesk-update` | Pull latest version from GitHub |

## How It Works

Design knowledge lives in reference files loaded on demand, keeping context lean. You only load what the task needs.

**References:** anti-slop rules, color theory, typography, layout, motion, interaction patterns, glass/depth, dark mode, UX writing, creative arsenal, design dials

**Stacks:** Framework-specific guidance for React/Next.js, Vue/Nuxt, Svelte, SwiftUI, Flutter, React Native, HTML+Tailwind

## GSD Integration

If your project uses [GSD](https://github.com/gsd-build/get-shit-done), Design Desk integrates with discuss, plan, execute, and verify phases. See `references/gsd-integration.md`.

## Statusline Chaining

Claude Code supports one `statusLine` command. If you use both GSD and Design Desk, create a wrapper script that chains both statuslines. See `bin/statusline.js` for the standalone version.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT
