# /design-desk accessibility

WCAG AA audit for frontend code.

## Flow

### 1. Scan for Issues

**Contrast:**
- Check all text/background combinations against 4.5:1 (normal) and 3:1 (large text)
- Check UI components against 3:1 (buttons, inputs, icons)
- Check focus indicators against 3:1

**Keyboard:**
- Tab order matches visual order
- All interactive elements reachable via Tab
- Escape closes modals/dropdowns/popovers
- Arrow keys navigate within menus/tabs/radio groups
- Focus visible on all interactive elements (no `outline: none` without replacement)

**Screen Reader:**
- All images have `alt` text (descriptive or `alt=""` for decorative)
- Icon-only buttons have `aria-label`
- Form inputs have associated `<label>` elements
- Dynamic content updates use `aria-live` regions
- Headings are sequential (h1 → h2 → h3, no skipping)

**Motion:**
- `prefers-reduced-motion` respected
- No auto-playing animations without pause controls
- No flashing content (3 flashes per second maximum)

**Touch:**
- Touch targets minimum 44x44px
- Adequate spacing between touch targets
- No hover-only functionality

**Color:**
- Color is not the sole indicator of state (add icons, text, patterns)
- `color-scheme: dark` set for dark mode projects

### 2. Score
Rate overall accessibility 1-10 based on severity and count of violations.

### 3. Prioritize Fixes
Order: critical barriers (can't use the interface) → major issues (difficult to use) → minor issues (suboptimal experience).
