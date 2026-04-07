# Dark Mode Reference

Dark mode is not "invert the colors." It's a complete design with its own hierarchy, contrast rules, and surface system.

## Core Principles

### Dark Is Not Black
Pure black (#000000) is harsh on screens. Use off-blacks with subtle tinting:

| Surface | Value | When |
|---|---|---|
| Background | #0a0a0c, #0f0f11 | Page background |
| Surface | #141416, #1a1a1e | Cards, panels |
| Elevated | #1f1f23, #242428 | Popovers, dropdowns |
| Overlay | rgba(0, 0, 0, 0.6) | Backdrops, scrims |

Tint your dark surfaces toward your brand hue — even slightly — for cohesion.

### Light Text Is Not White
Pure white (#ffffff) on dark backgrounds causes eye strain. Use off-whites:

| Purpose | Value | Opacity approach |
|---|---|---|
| Primary text | #e5e5e5, #f0f0f0 | rgba(255,255,255, 0.87) |
| Secondary text | #a0a0a0, #b0b0b0 | rgba(255,255,255, 0.60) |
| Muted/disabled | #666666, #707070 | rgba(255,255,255, 0.38) |

### Contrast Still Matters
WCAG AA applies in dark mode too:
- Primary text on background: minimum 4.5:1
- Muted text on background: minimum 4.5:1 (yes, even muted text)
- Interactive elements: minimum 3:1 against adjacent surfaces

## Surface Hierarchy

In dark mode, elevation is communicated by lightening surfaces rather than adding shadows (shadows are invisible against dark backgrounds):

```
Background (#0a0a0c)
  └─ Surface (+2% lightness: #141416)
       └─ Elevated (+4% lightness: #1f1f23)
            └─ Modal (+6% lightness: #2a2a30)
```

Each level is 2-3% lighter than the one below it. This creates a subtle stacking effect without shadows.

## Borders in Dark Mode

Borders need to be very subtle:
```css
--border-subtle: rgba(255, 255, 255, 0.08);
--border-default: rgba(255, 255, 255, 0.12);
--border-strong: rgba(255, 255, 255, 0.20);
```

## Accent Colors in Dark Mode

Your accent colors may need adjustment. Colors that look great on white may be too dark on dark backgrounds:
- Increase lightness by 10-15%
- May need to increase saturation slightly
- Test contrast against the dark surface, not just the background

## Implementation Pattern

### CSS Custom Properties
```css
:root {
  --bg: #fafafa;
  --surface: #ffffff;
  --text: #111111;
  --text-muted: #666666;
  --border: #e5e5e5;
}

[data-theme="dark"] {
  --bg: #0a0a0c;
  --surface: #141416;
  --text: #e5e5e5;
  --text-muted: #a0a0a0;
  --border: rgba(255, 255, 255, 0.12);
}
```

### System Preference Detection
```css
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    /* dark mode tokens */
  }
}
```

This respects system preference while allowing manual override.

### Toggle Implementation
Store preference in `localStorage`. Apply `data-theme` attribute to `<html>` before first paint to prevent flash:

```html
<script>
  const theme = localStorage.getItem('theme') ||
    (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
</script>
```

Place this script in `<head>` before any CSS loads.

## Common Mistakes
- Using the same shadow values for light and dark mode
- Forgetting to adjust image brightness (add slight overlay on images in dark mode)
- Using inverted colors for status indicators (green/red) — these need different shades, not inversion
- Forgetting `color-scheme: dark` on the root element — this fixes scrollbars, form elements, and other browser chrome
- Not testing focus rings — they must be visible on dark surfaces too
