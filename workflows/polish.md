# /design-desk polish

Elevate an existing component or page with intentional design refinements. This is Layer 4 work — only do this after structure and style are established.

## Prerequisites
- The component should already be functional
- DESIGN.md should exist (for dials and tokens)
- Structure and layout should be approved before polishing

## Flow

### 1. Read Context
- Load DESIGN.md for dials and tokens
- Load `references/motion.md` for animation guidance
- Load `references/interaction.md` for state completeness
- Check the motion dial — don't add motion-8 effects to a motion-3 project

### 2. Identify Polish Opportunities

**Spacing refinement:**
- Tighten related elements, separate unrelated ones
- Ensure rhythm (not uniform padding)

**Typography tuning:**
- Weight and color hierarchy
- Letter-spacing on headings
- Line-height on body text

**Interactive states:**
- Add missing hover/focus/active states
- Smooth transitions (150-300ms, ease-out)
- Loading and error states if missing

**Motion (if dial allows):**
- Entrance animations on scroll
- Hover micro-interactions
- State transitions between views

**Visual details:**
- Shadow refinement (tinted, scaled)
- Border radius consistency
- Background texture or gradient (if appropriate to the aesthetic)

### 3. Apply Refinements
Make changes incrementally. Each refinement should improve the component without changing its functionality or layout.

### 4. Before/After
Describe what changed and why. If the user has a browser available, suggest reviewing visually.
