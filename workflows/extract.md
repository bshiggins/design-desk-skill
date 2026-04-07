# /design-desk extract

Reverse-engineer design tokens from existing CSS/Tailwind code into DESIGN.md format.

## Flow

### 1. Identify Sources
Scan for design token sources:
- `globals.css`, `global.css`, `app.css`
- `tailwind.config.ts/js`
- CSS custom properties (`:root { --color-* }`)
- Theme files, design system files
- Component styles with hardcoded values

### 2. Extract Tokens

**Colors:**
- Find all color definitions (hex, rgb, hsl, oklch, CSS vars)
- Identify primary, secondary, accent, neutral roles
- Note background and surface colors
- Flag any AI-purple or banned colors

**Typography:**
- Font families loaded (Google Fonts links, @font-face, Tailwind config)
- Font sizes in use (map to a scale)
- Font weights used
- Line heights and letter-spacing values

**Spacing:**
- Padding and margin values in use
- Gap values
- Section spacing patterns
- Container max-widths

**Other:**
- Border radii in use
- Shadow definitions
- Transition/animation timing
- Breakpoints

### 3. Organize Into DESIGN.md Sections
Map extracted values to the 9-section DESIGN.md template. Fill in what was found, mark gaps.

### 4. Present to User
Show the extracted system. Ask:
- "Does this look right? Anything I'm missing?"
- "Should I fill in the gaps with recommendations?"

### 5. Save
Write to DESIGN.md (merge with existing if present). Propose design dials based on what was extracted.
