---
name: designdesk-review
description: "Audit a frontend project — score design quality, flag anti-slop violations, report fixes"
argument-hint: "[file or directory to audit]"
allowed-tools:
  - Read
  - Write
  - Bash
  - Glob
  - Grep
  - AskUserQuestion
---

<objective>
Run a full design audit on a frontend project or specific files. Scans code against anti-slop rules, DESIGN.md tokens, interaction completeness, and accessibility. Produces a scored report with prioritized fixes.

This is read-only — it identifies problems but doesn't fix them. Use `/designdesk-improve` to act on findings.
</objective>

<steps>
1. **Resolve target.** Use the argument (file or directory) or default to scanning the whole project's frontend files.

2. **Load context.**
   - Read DESIGN.md from project root. If missing, note it as a finding (no design system established).
   - Read `~/.claude/design-desk-skill/references/anti-slop.md` for forbidden patterns.
   - Read `~/.claude/design-desk-skill/references/pre-flight.md` for the full checklist.
   - Detect stack (Next.js, Vue, Svelte, etc.) and load matching file from `~/.claude/design-desk-skill/stacks/`.

3. **Scan frontend files.** Identify and read:
   - CSS/SCSS files, globals.css, tailwind.config
   - Component files (.tsx, .vue, .svelte, .swift, .dart)
   - Layout files, page files
   - Focus on recently modified files first

4. **Check against rules.**

   **Anti-Slop Violations:**
   - Banned fonts, colors, layouts, patterns per anti-slop reference
   - Generic or template-looking design choices

   **Token Consistency (if DESIGN.md exists):**
   - Colors match palette (no hardcoded hex outside tokens)
   - Spacing follows the defined scale
   - Typography uses the declared font stack
   - Border radii match the system

   **Interaction Completeness:**
   - Interactive elements have all states (hover, focus, active, disabled)
   - Loading states exist
   - Empty states are designed
   - Error states are inline and specific

   **Accessibility:**
   - Contrast ratios pass WCAG AA
   - Focus indicators visible
   - Touch targets 44x44px minimum
   - Alt text on images, aria-labels on icon buttons

5. **Score and report.** Score 5 dimensions (1-10):
   - Typography
   - Color
   - Layout
   - Motion
   - Interaction

   List specific violations with file:line references and recommended fixes.

6. **Prioritize.** Order fixes by impact:
   1. Accessibility (legal/ethical)
   2. Anti-slop (quality floor)
   3. Token consistency (system coherence)
   4. Polish (refinement)

7. **Save report.** Write findings to `DESIGN-REVIEW.md` in the project root. This is the handoff artifact for `/designdesk-improve`.
</steps>

<rules>
- Don't fix anything. This skill is diagnosis only.
- Be specific — file paths, line numbers, exact values that are wrong and what they should be.
- If no DESIGN.md exists, audit against anti-slop rules only and recommend running `/designdesk-new` first.
- Score honestly. A 5/10 means average, not bad. Most projects start at 3-4.
</rules>
