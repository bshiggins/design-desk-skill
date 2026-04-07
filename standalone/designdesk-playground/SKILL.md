---
name: designdesk-playground
description: "Insert a UI playground phase into GSD for visual tuning and human review"
argument-hint: "[component or page name]"
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
Insert a playground phase into the GSD roadmap so the user can visually tune UI work before moving on. Creates an interactive HTML playground with sliders, toggles, and live preview for the specified component or page.

This bridges the gap between "code looks right" and "pixels look right" — Claude can write CSS but can't see it. The playground gives the human a tuning surface.
</objective>

<prerequisites>
- GSD must be active (`.planning/` directory exists with `ROADMAP.md`)
- A DESIGN.md should exist (run `/designdesk-new` first if not)
- The component or page to tune should already be built or in progress
</prerequisites>

<steps>
1. **Identify what to tune.** Use the argument or ask the user. Could be a component (card, navbar, hero), a page, or a set of tokens (palette, spacing, typography scale).

2. **Read current state.**
   - Load DESIGN.md for established tokens
   - Load ROADMAP.md to find the right insertion point
   - Check what's already built — read the relevant component/page files

3. **Determine playground type.** Based on what's being tuned:
   - **Component playground:** Renders the component in isolation with controls for props, spacing, colors, border-radius, shadow, etc.
   - **Token playground:** Full design system tuner — palette swatches, type scale preview, spacing grid
   - **Page playground:** Full page with overlay controls for global adjustments

4. **Insert the phase.** Use `/gsd-insert-phase` to add a playground phase at the right point in the roadmap. The phase should:
   - Be a decimal phase (e.g., 3.1 between phase 3 and 4)
   - Have a clear name: "Playground: [component/page name]"
   - Depend on the phase that built the component
   - Have UAT criteria: "Human has reviewed and approved visual tuning"

5. **Build the playground.** Create a self-contained HTML file with:
   - Live preview of the component/page using the project's actual tokens
   - Slider controls for tunable values (spacing, border-radius, font-size, opacity, etc.)
   - Color pickers for palette adjustment
   - Before/after toggle if modifying existing design
   - "Copy values" button that outputs the tuned tokens in a format DESIGN.md understands
   - Reference the `playground:playground` skill for the HTML playground pattern

6. **Serve and hand off.** Open the playground in the browser for the user to tune. The phase is complete when the user approves the visual result.
</steps>

<rules>
- This skill only works inside GSD projects. If no `.planning/` exists, tell the user to initialize GSD first or use `/design-desk` directly.
- The playground must use the project's actual design tokens, not generic defaults.
- Keep playgrounds focused — tune one thing well rather than everything at once.
- The output of a playground session should flow back into DESIGN.md as updated tokens.
</rules>
