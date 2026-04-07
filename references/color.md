# Color Reference

Color is the fastest way to ruin or elevate a design. Restraint wins. One strong accent with tinted neutrals outperforms five competing colors every time.

## Palette Construction

### The Formula
1. **One primary accent** — the brand color, the action color, the thing that pops
2. **Tinted neutrals** — don't use pure gray. Tint toward your primary hue for subconscious cohesion
3. **Semantic colors** — success (green), error (red), warning (amber), info (blue) — functional, not decorative
4. **Surface hierarchy** — background, surface, elevated surface, overlay — each slightly different

### OKLCH for Perceptual Uniformity

Use OKLCH color space for building palettes. Unlike HSL, OKLCH is perceptually uniform — equal steps in lightness actually look equal to human eyes.

```css
--primary-50:  oklch(0.97 0.01 var(--hue));
--primary-100: oklch(0.93 0.02 var(--hue));
--primary-200: oklch(0.87 0.04 var(--hue));
--primary-300: oklch(0.78 0.08 var(--hue));
--primary-400: oklch(0.68 0.12 var(--hue));
--primary-500: oklch(0.58 0.16 var(--hue));
--primary-600: oklch(0.48 0.14 var(--hue));
--primary-700: oklch(0.40 0.12 var(--hue));
--primary-800: oklch(0.32 0.10 var(--hue));
--primary-900: oklch(0.24 0.08 var(--hue));
--primary-950: oklch(0.16 0.06 var(--hue));
```

### Tinting Neutrals

Pure grays feel disconnected from your palette. Tint them:

```css
/* Dead gray */
--neutral-500: oklch(0.55 0.00 0);
/* Alive, cohesive — tinted toward brand hue */
--neutral-500: oklch(0.55 0.015 var(--hue));
```

Even saturation of 0.01-0.02 creates subconscious warmth without being visible.

## Contrast Requirements

WCAG AA minimum (non-negotiable):
- **Normal text:** 4.5:1 contrast ratio
- **Large text (>=18px bold, >=24px regular):** 3:1
- **UI components and graphical objects:** 3:1 against adjacent colors
- **Focus indicators:** 3:1 against background

## The Ban List

- **AI Purple (#7C3AED and neighbors)** — the most recognizable AI tell
- **Purple-to-blue gradients** — every AI demo uses these
- **Cyan-on-dark** — the "futuristic AI" cliche
- **Neon accents on dark backgrounds** — screams generated
- **Pure black (#000000)** — use off-blacks (#0a0a0c, #111111)
- **Pure white (#ffffff)** — use off-whites (#fafafa, #f5f5f5)
- **Rainbow gradients** — almost never appropriate
- **Evenly distributed multi-color palettes** — dominant + accent is better

## Dark Mode

Dark mode is not "invert everything." It's a separate design:

- **Background:** not pure black. Use very dark with slight tint (#0a0a0c, #1a1a1a)
- **Surfaces:** slightly lighter than background, subtle elevation
- **Text:** not pure white. Use #e5e5e5, #f5f5f5
- **Borders:** very subtle. rgba(255,255,255,0.1) to rgba(255,255,255,0.15)
- **Shadows:** nearly invisible in dark mode. Use border or elevation instead
- **Accents:** may need to be lighter/more saturated to maintain contrast

## CSS Variables Pattern

```css
:root {
  --color-primary: oklch(0.58 0.16 250);
  --color-surface: oklch(0.98 0.005 250);
  --color-text: oklch(0.15 0.02 250);
  --color-text-muted: oklch(0.45 0.015 250);
  --color-border: oklch(0.85 0.01 250);
}

[data-theme="dark"] {
  --color-surface: oklch(0.12 0.01 250);
  --color-text: oklch(0.90 0.01 250);
  --color-text-muted: oklch(0.60 0.01 250);
  --color-border: oklch(0.25 0.01 250);
}
```
