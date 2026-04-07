# Interaction Reference

Every interactive surface must feel intentional and responsive. The user should never wonder "did that work?" or "is this clickable?"

## Interactive States (Mandatory)

Every interactive element must implement ALL of these states. This is non-negotiable — LLMs naturally generate only the "happy path" static state.

### The Full State Cycle
1. **Default** — resting appearance
2. **Hover** — visual feedback on mouse over (desktop only)
3. **Focus** — visible focus ring for keyboard navigation (2px outline, primary color, offset)
4. **Active/Pressed** — tactile feedback: `scale(0.98)` or `translateY(1px)`
5. **Loading** — skeleton shimmer or spinner. Disable the element during async operations
6. **Disabled** — reduced opacity (0.5), `cursor-not-allowed`, `pointer-events-none`
7. **Error** — clear inline error message near the problem
8. **Empty** — not "Nothing here" but a designed empty state that teaches the interface

### Hover States That Don't Break
- Use `color`, `opacity`, `box-shadow`, `transform` — properties that don't cause layout shift
- Never use `scale` on hover for cards/containers — it pushes adjacent content
- `translateY(-2px)` + shadow increase is the classic hover lift — reliable and subtle
- Touch devices: hover effects should not be required for functionality. Use `:hover` for enhancement only

### Cursor
- `cursor-pointer` on ALL clickable elements (buttons, cards, links, toggles)
- `cursor-not-allowed` on disabled elements
- `cursor-grab` / `cursor-grabbing` on draggable elements
- Never use custom cursor images — they hurt performance and accessibility

## Forms

### Structure
```
Label (above input, always visible)
Input field
Helper text (optional, muted)
Error text (red, appears on validation failure)
```

Gap between label and input: 4-8px. Gap between input and helper/error: 4px. Gap between form groups: 16-24px.

### Rules
- Labels MUST sit above inputs, not beside or inside (placeholder-as-label is banned)
- Placeholder text is supplementary guidance, not a replacement for labels
- Error messages must be specific: "Password must be at least 8 characters" not "Invalid input"
- Success states matter: green checkmark, brief confirmation, then move on
- Auto-focus the first field on form mount
- Tab order must follow visual order

## Progressive Disclosure

Start simple. Reveal complexity through interaction:
- Show basic options first, "Advanced" expands the rest
- Hover states that reveal secondary actions
- Accordion sections for optional content
- Wizard patterns for multi-step processes (3-5 fields per step per Miller's Law)

## Empty States

Empty states are teaching moments, not dead ends. Design them intentionally:

**Good empty state:**
- Illustration or icon that matches the brand
- Clear headline: "No projects yet"
- Helpful description: "Create your first project to get started"
- Primary CTA: the action that fills this screen

**Bad empty state:**
- "No data" with nothing else
- A generic placeholder icon
- No guidance on what to do next

## Loading Patterns

### Skeleton Screens
Match the layout dimensions of the content they replace. A skeleton that doesn't match the final layout creates a jarring shift.

```
[████████████████████] ← heading skeleton
[████████ ████████] ← two-column skeleton
[████████████████████████████████] ← paragraph skeleton
```

Shimmer effect: gradient sweep from left to right, 1.5s duration, infinite loop.

### Button Loading
- Disable the button immediately on click
- Replace text with a spinner or loading indicator
- Keep the button the same size (prevent layout shift)
- Re-enable with success/error feedback

### Optimistic UI
Update the interface immediately, sync in the background. If the sync fails, roll back with an error message. This makes the app feel instant.

## Accessibility Interaction Requirements

- **Tab order matches visual order** — don't rearrange with CSS without matching the DOM
- **Focus visible** — never `outline: none` without providing an alternative focus indicator
- **Touch targets** — 44x44px minimum on mobile
- **Escape closes** — modals, dropdowns, popovers all close on Escape key
- **Arrow keys navigate** — within menus, tabs, radio groups
- **Screen reader announcements** — dynamic content changes need `aria-live` regions
