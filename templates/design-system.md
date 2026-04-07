# DESIGN.md Template

Copy this template to your project root as `DESIGN.md` and fill in during `/design-desk init`.

---

# DESIGN.md — [Project Name]

## 1. Visual Theme & Atmosphere

**Aesthetic direction:** [e.g., minimalist and warm, bold and technical, premium and refined]
**Tone:** [e.g., professional, playful, serious, approachable]
**Design Dials:**
- DESIGN_VARIANCE: [1-10]
- MOTION_INTENSITY: [1-10]
- VISUAL_DENSITY: [1-10]

**Inspiration:** [URLs, descriptions, or references to designs that capture the desired feel]

## 2. Color Palette & Roles

**Primary:** [hex + OKLCH] — [role: CTAs, links, key actions]
**Accent:** [hex + OKLCH] — [role: highlights, secondary emphasis]
**Neutrals:** [base hex, tinted toward primary hue]
- 50: [value]
- 100-900: [values]
- 950: [value]

**Semantic:**
- Success: [hex]
- Error: [hex]
- Warning: [hex]
- Info: [hex]

**Surfaces:**
- Background: [hex]
- Surface: [hex]
- Elevated: [hex]
- Overlay: [hex/rgba]

**Banned colors:** [any project-specific color restrictions]

## 3. Typography Rules

**Headline font:** [name, weights loaded, source]
**Body font:** [name, weights loaded, source]
**Mono font:** [name, for code/data only]

**Scale:**
- Hero: [clamp value]
- H1: [clamp value]
- H2: [clamp value]
- H3: [clamp value]
- Body: [clamp value]
- Small: [clamp value]
- Caption: [clamp value]

**Rules:**
- Line height (body): [value]
- Line height (headings): [value]
- Max line length: [value, e.g., 65ch]
- Letter-spacing (headings): [value]

## 4. Component Stylings

**Buttons:**
- Primary: [bg, text, hover, active, focus, disabled, loading]
- Secondary: [bg, text, hover, active, focus, disabled]
- Ghost: [text, hover, active, focus]
- Border radius: [value]
- Min height: [value, e.g., 44px for touch targets]

**Inputs:**
- Default: [border, bg, text, placeholder]
- Focus: [border, ring]
- Error: [border, message color]
- Border radius: [value]

**Cards:**
- Background: [value]
- Border: [value or none]
- Shadow: [value]
- Hover: [shadow change, translate]
- Border radius: [value]
- Padding: [value]

## 5. Layout Principles

**Container max-width:** [value, e.g., max-w-7xl]
**Container padding:** [value, e.g., px-4 sm:px-6 lg:px-8]
**Section spacing:** [clamp value]
**Group spacing:** [clamp value]
**Element spacing:** [clamp value]
**Grid system:** [e.g., CSS Grid with 12 columns, or flexible fr units]

**Breakpoints:**
- Mobile: 375px
- Tablet: 768px
- Desktop: 1024px
- Wide: 1440px

## 6. Depth & Elevation

**Shadow scale:**
- xs: [value]
- sm: [value]
- md: [value]
- lg: [value]
- xl: [value]

**Border radius scale:**
- sm: [value]
- md: [value]
- lg: [value]
- xl: [value]
- full: 9999px

**Z-index scale:**
- base: 0
- above: 10
- sticky: 20
- overlay: 30
- modal: 40
- toast: 50

**Glass effects:** [yes/no, and if yes, the spec]

## 7. Motion & Animation

**Motion dial:** [1-10, from dials above]

**Timing:**
- Micro: [value, e.g., 150ms]
- Standard: [value, e.g., 300ms]
- Emphasis: [value, e.g., 500ms]

**Easing:** [CSS cubic-bezier value for default easing]

**Entrance pattern:** [e.g., fade-up, stagger reveal, clip reveal]

**Rules:**
- GPU-accelerated only (transform + opacity)
- prefers-reduced-motion respected
- [any project-specific motion rules]

## 8. Do's and Don'ts

**Do:**
- [project-specific positive patterns]

**Don't:**
- [project-specific restrictions beyond standard anti-slop]

## 9. Responsive Behavior

**Strategy:** [mobile-first / desktop-first]
**Navigation (mobile):** [hamburger / bottom nav / drawer]
**Grid collapse:** [how multi-column layouts collapse on mobile]
**Image handling:** [responsive images strategy]
**Touch considerations:** [any touch-specific patterns]
