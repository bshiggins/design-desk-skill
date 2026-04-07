---
name: designdesk-idea
description: "Capture a design idea, inspiration, or direction for later reference"
argument-hint: "[idea description]"
allowed-tools:
  - Read
  - Write
  - Bash
  - Glob
  - AskUserQuestion
---

<objective>
Zero-friction capture of a design idea, inspiration, or visual direction. Saves it where it can be found later — either in DESIGN.md as a note, in GSD todos, or as a standalone design note file.

This is the design equivalent of `/gsd-note` — quick capture, no ceremony.
</objective>

<steps>
1. **Get the idea.** From the argument, conversation context, or ask the user. Could be:
   - A visual direction ("glassmorphism with warm tones")
   - An inspiration reference ("like Linear's sidebar but with our palette")
   - A constraint ("must work on 320px screens")
   - A component idea ("floating action button that morphs into a menu")
   - A critique note ("the hero section feels too heavy")

2. **Determine where to save.** Check project context:
   - **GSD active + `.planning/` exists:** Save as a GSD todo with area "design" via the todo workflow, or append to an existing design notes file in `.planning/`
   - **DESIGN.md exists:** Append to a `## Notes` section at the bottom of DESIGN.md
   - **Neither:** Create a `DESIGN-NOTES.md` file in project root

3. **Format the note.** Each entry gets:
   - Date (ISO format)
   - One-line summary
   - Detail if provided (URL, screenshot reference, longer description)
   - Tag: `inspiration`, `constraint`, `direction`, `component`, `critique`

4. **Confirm.** One line: "Saved: [summary] to [location]"
</steps>

<rules>
- Never block on this. Capture and move on — the whole point is zero friction.
- If the user gives a URL or screenshot, note it but don't deep-analyze. That's for later.
- Don't create DESIGN.md from an idea capture — that's `/designdesk-new`'s job.
- Append, don't overwrite. Multiple ideas accumulate over time.
</rules>
