# Layout Reference

Layout is the skeleton. Get it wrong and no amount of color or typography saves it. Get it right and the design feels effortless.

## Spatial Design Principles

### Rhythm Through Varied Spacing
Uniform spacing is the enemy of good design. Create rhythm:
- **Tight groupings** for related elements (8-12px)
- **Comfortable gaps** between groups (24-32px)
- **Generous separations** between sections (64-128px)

The eye should flow, not march.

### Fluid Spacing
Use `clamp()` for spacing that breathes on larger screens:

```css
--space-section: clamp(4rem, 8vw, 8rem);
--space-group:   clamp(1.5rem, 3vw, 3rem);
--space-element: clamp(0.75rem, 1.5vw, 1.5rem);
```

### Grid Systems

**CSS Grid over Flexbox for layout.** Flexbox is for component-level alignment. Grid is for page-level structure.

```css
/* Don't: complex flex math */
.card { width: calc(33.333% - 1rem); }

/* Do: grid */
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
```

**Break the grid intentionally.** Asymmetric layouts (2fr 1fr, 3fr 2fr) feel more designed than equal columns. Use fractional units for visual weight.

### Container Strategy
Pick one and commit:
- `max-w-6xl` (1152px) — tighter, more editorial
- `max-w-7xl` (1280px) — standard, most apps
- `max-w-screen-xl` (1280px) — full bleed feeling

Always center: `mx-auto px-4 sm:px-6 lg:px-8`

## Layout Anti-Patterns

### The 3-Column Equal Card Grid
The most common AI layout. Three identical cards side by side with icon + heading + description. Banned. Instead:
- 2-column zig-zag (image left, text right, then swap)
- Asymmetric grid (one large card + two small)
- Horizontal scroll with varied card sizes
- Bento grid with mixed proportions

### Center Everything
Left-aligned text with asymmetric layouts feels more intentional than centered-everything. Center alignment works for:
- Short hero headlines (1-2 lines)
- CTAs and buttons
- Icons and avatars
- Footer content

It doesn't work for paragraphs, feature descriptions, or anything longer than two lines.

### Cards Inside Cards
Nesting containers creates visual noise. Flatten the hierarchy. If you need to group within a card, use borders, dividers, or spacing — not another card.

### Fixed Navbar at top-0
Floating navbars with `top-4 left-4 right-4` feel premium. Account for the sticky nav height in content spacing (`scroll-margin-top: 80px`).

## Responsive Strategy

### Mobile-First Always
Write base styles for mobile, add complexity at larger breakpoints:

```css
/* Base: mobile */
.grid { grid-template-columns: 1fr; }

/* Tablet */
@media (min-width: 768px) { .grid { grid-template-columns: repeat(2, 1fr); } }

/* Desktop */
@media (min-width: 1024px) { .grid { grid-template-columns: repeat(3, 1fr); } }
```

### Container Queries for Components
Use `@container` for component-level responsiveness. The component adapts to its container, not the viewport:

```css
.card-container { container-type: inline-size; }

@container (min-width: 400px) {
  .card { flex-direction: row; }
}
```

### Critical Breakpoints
- **375px** — smallest phone (iPhone SE). Nothing must break here.
- **768px** — tablet. Most 2-column layouts kick in.
- **1024px** — small desktop. Full layouts appear.
- **1440px** — standard desktop. Max-width containers hit their ceiling.

### No Horizontal Scroll
Test at every breakpoint. If content overflows, fix it:
- Images: `max-width: 100%; height: auto;`
- Tables: wrap in `overflow-x-auto` container
- Code blocks: `overflow-x-auto` with scrollbar
- Never use `100vw` — it includes scrollbar width. Use `100%` instead.

## Viewport Stability

Never use `h-screen` (100vh) for full-height sections. On iOS Safari, 100vh includes the address bar, causing content to jump when the bar appears/disappears. Use `min-h-[100dvh]` (dynamic viewport height) instead.

## Z-Index Scale

Define a scale and stick to it:

```css
--z-base:    0;
--z-above:   10;    /* lifted elements: dropdowns, tooltips */
--z-sticky:  20;    /* sticky headers, floating buttons */
--z-overlay: 30;    /* overlays, backdrops */
--z-modal:   40;    /* modals, dialogs */
--z-toast:   50;    /* notifications, toasts */
```

Never use arbitrary z-index values. If you need `z-[9999]`, your layering model is broken.
