---
name: designdesk-improve
description: "Fix design issues from a review — work through audit findings systematically"
argument-hint: "[file or component to improve]"
allowed-tools:
  - Read
  - Write
  - Edit
  - Bash
  - Glob
  - Grep
  - AskUserQuestion
---

<objective>
Take design audit findings and fix them systematically. Reads DESIGN-REVIEW.md (from `/designdesk-review`) or audits inline, then works through fixes by priority — accessibility first, anti-slop second, token consistency third, polish fourth.

This is the action skill. It reads code, applies fixes, and iterates with the user.
</objective>

<steps>
1. **Load findings.** Check for DESIGN-REVIEW.md in project root.
   - If found, read it and use as the fix list.
   - If not found, run a quick inline audit (same as `/designdesk-review` but lighter — top 10 issues only) and confirm with the user before fixing.

2. **Load design context.**
   - Read DESIGN.md for tokens and constraints.
   - Read `~/.claude/design-desk-skill/references/anti-slop.md`.
   - Detect stack and load from `~/.claude/design-desk-skill/stacks/`.
   - Load relevant references based on what's being fixed:
     - Typography issues → `references/typography.md`
     - Color issues → `references/color.md`
     - Layout issues → `references/layout.md`
     - Motion issues → `references/motion.md`
     - Interaction issues → `references/interaction.md`
     - Accessibility issues → `references/interaction.md` (includes a11y guidance)

3. **Present the fix plan.** Group fixes by priority tier and show the user:
   - Tier 1: Accessibility (must fix)
   - Tier 2: Anti-slop violations (quality floor)
   - Tier 3: Token consistency (system coherence)
   - Tier 4: Polish (refinement)

   Ask: "Start from the top, or focus on a specific tier/file?"

4. **Fix iteratively.** For each fix:
   - Show what's wrong (current code)
   - Show the fix (new code)
   - Apply the change
   - Move to next

   Batch related fixes in the same file together.

5. **Run anti-slop check after each file.** Make sure fixes didn't introduce new violations.

6. **Offer visual review.** After a batch of fixes, suggest previewing the changes:
   - If the project has a dev server, remind the user to check the browser.
   - If building a standalone component, offer to generate a preview HTML.
   - If they want to tune values (colors, spacing, radii), offer `/designdesk-playground`.

7. **Update artifacts.**
   - Update DESIGN-REVIEW.md: mark fixed items as resolved, note remaining.
   - Update DESIGN.md if fixes changed token values.
   - If GSD is active, commit fixes with descriptive messages.

8. **Summary.** Report what was fixed, what remains, and updated scores.
</steps>

<rules>
- Follow the priority order. Accessibility before aesthetics, always.
- Don't over-fix. If the user says "just fix the contrast issues," do exactly that.
- Respect DESIGN.md tokens. Fixes should use established values, not invent new ones.
- If a fix is subjective (e.g., "this shadow could be softer"), present the option, don't just apply it.
- Batch file edits. Don't make 10 separate edits to the same file — group them.
</rules>
