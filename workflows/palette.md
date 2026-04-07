# /design-desk palette

Generate a project color palette.

## Flow

### 1. Interview
- What industry/domain?
- What mood? (calm, energetic, premium, warm, technical)
- Any existing brand colors to incorporate?
- Light mode, dark mode, or both?

### 2. Generate Palette
Read `references/color.md` for the construction method.

Build using OKLCH for perceptual uniformity:
- **Primary:** the brand/action color (full scale 50-950)
- **Neutral:** tinted toward primary hue (full scale 50-950)
- **Accent:** complementary or contrasting color for highlights
- **Semantic:** success (green), error (red), warning (amber), info (blue)
- **Surfaces:** background, surface, elevated, overlay

### 3. Verify Contrast
Every text/background combination must pass WCAG AA. Check and adjust.

### 4. Output
Format as:
- CSS custom properties (for direct use)
- Tailwind config (for Tailwind projects)
- Design tokens JSON (for design systems)

Use `templates/palette-spec.md` for the output format.

### 5. Save
Offer to write the palette section of DESIGN.md or create a new DESIGN.md if none exists.
