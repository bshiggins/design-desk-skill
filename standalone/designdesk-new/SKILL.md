---
name: designdesk-new
description: "Initialize a new design system — interview, set dials, generate DESIGN.md"
argument-hint: "[project path]"
allowed-tools:
  - Read
  - Write
  - Bash
  - Glob
  - Grep
  - AskUserQuestion
---

<objective>
Create a DESIGN.md for a new or existing project. Runs a short design interview, sets design dials, and generates a persistent design system file that all future design-desk workflows read from.

If a project path is provided as an argument, operate there. Otherwise use the current working directory.
</objective>

<steps>
1. **Resolve project root.** Use the argument path or cwd. Confirm it's a real project (has package.json, pubspec.yaml, or similar).

2. **Check existing state.**
   - If DESIGN.md already exists, ask: update or start fresh?
   - If CSS/Tailwind config exists, offer to run the design-desk extract workflow first to capture existing tokens.

3. **Load references.** Read these from the design-desk skill directory:
   - `~/.claude/skills/design-desk/references/design-dials.md`
   - `~/.claude/skills/design-desk/templates/design-system.md`
   - `~/.claude/skills/design-desk/references/color.md`
   - `~/.claude/skills/design-desk/references/typography.md`

4. **Run the interview.** Ask 3-5 questions, one at a time:
   - What's the product? (domain, audience, purpose)
   - What should it feel like? (emotional direction, not specific colors)
   - Any existing brand? (logo, colors, fonts already decided)
   - Show me something you like. (URL, screenshot, or description)
   - Optional: Anything you hate? (anti-patterns beyond standard anti-slop)

5. **Set design dials.** Based on answers, propose initial dial values from the design-dials reference. Present for user adjustment.

6. **Generate DESIGN.md.** Use the design-system template. Fill all sections from interview + dials.

7. **Save and confirm.** Write DESIGN.md to project root. Summarize key decisions. Remind user this is Layer 1 (direction) — it evolves as the product takes shape.
</steps>

<rules>
- Never skip the interview. Generic design systems produce generic output.
- One question at a time. Don't dump all questions in a wall.
- If the user gives short answers, probe deeper on feel and audience — those drive the most decisions.
- If GSD is active (.planning/ exists), note in DESIGN.md that it integrates with GSD phases.
</rules>
