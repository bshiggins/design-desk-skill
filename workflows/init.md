# /design-desk init

Generate a DESIGN.md for a new or existing project.

## Flow

### 1. Check Existing State
- Look for DESIGN.md in project root. If found, offer to update or start fresh.
- Look for existing CSS/Tailwind config. If found, offer to run `/design-desk extract` first to capture existing tokens.

### 2. Interview (3-5 questions, one at a time)

**Question 1: What's the product?**
Understand the domain, audience, and purpose. This maps to design dials and color direction.

**Question 2: What should it feel like?**
Not "what color" — the emotional direction. Offer options: clean/minimal, bold/energetic, warm/approachable, premium/refined, technical/precise, playful/creative.

**Question 3: Any existing brand?**
Logo, colors, fonts already decided? Import them. No brand yet? Proceed with recommendations.

**Question 4: Show me something you like.**
A URL, screenshot, or description of a design they admire. This anchors the aesthetic.

**Question 5 (optional): Anything you hate?**
Anti-patterns specific to this project beyond the standard anti-slop rules.

### 3. Set Design Dials
Based on the interview, propose initial dial values. Reference `references/design-dials.md` for the mapping table. Present to user for adjustment.

### 4. Generate DESIGN.md
Use `templates/design-system.md` as the template. Fill in all 9 sections based on interview answers and dial settings.

### 5. Save and Confirm
Write DESIGN.md to project root. Summarize the key decisions. Remind the user this is Layer 1 (direction) — it will evolve as the product takes shape.

## Required Reading
- `references/design-dials.md`
- `templates/design-system.md`
- `references/color.md` (for palette generation)
- `references/typography.md` (for font selection)
