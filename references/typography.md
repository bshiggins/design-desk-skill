# Typography Reference

Typography is the most impactful design decision you'll make. Bad typography makes everything look generic. Good typography creates instant recognition.

## Font Selection

### The Ban List
Inter, Roboto, Arial, Open Sans, Helvetica Neue, system-ui defaults. These are the AI uniform — recognizable, bland, forgettable.

### Recommended Sans-Serif
| Font | Character | Best for |
|---|---|---|
| Geist | Clean, modern, technical | SaaS, developer tools, dashboards |
| Satoshi | Geometric, contemporary | Startups, tech, modern brands |
| Cabinet Grotesk | Bold, distinctive | Headlines, landing pages, creative |
| Outfit | Friendly, geometric | Consumer apps, playful brands |
| Plus Jakarta Sans | Professional, warm | Corporate, healthcare, enterprise |
| Manrope | Rounded, approachable | Mobile apps, consumer products |
| Space Grotesk | Techy, distinctive | Dev tools, crypto, fintech |
| DM Sans | Clean, versatile | General purpose (better than Inter) |
| Sora | Modern, geometric | Tech, AI, contemporary |

### Recommended Serif
| Font | Character | Best for |
|---|---|---|
| Newsreader | Elegant, editorial | Blogs, magazines, content sites |
| Literata | Bookish, readable | Long-form reading, documentation |
| EB Garamond | Classic, refined | Luxury, legal, traditional |
| Source Serif 4 | Modern serif | Editorial, mixed with sans-serif |
| Libre Caslon Text | Warm, traditional | Invitations, heritage brands |

### Monospace (for code/data only)
Geist Mono, JetBrains Mono, Fira Code, IBM Plex Mono.

## Pairing Rules

The display font carries personality. The body font carries readability. They should complement, not compete.

**Strong pairings:**
- Geist + Geist Mono (technical)
- Cabinet Grotesk + DM Sans (bold + readable)
- Satoshi + Plus Jakarta Sans (geometric harmony)
- Space Grotesk + Manrope (tech + approachable)
- Newsreader + Satoshi (editorial + modern)
- EB Garamond + Outfit (classic + contemporary)

**Anti-pattern:** Two fonts fighting for attention. If both are distinctive, one wins and one loses.

## Type Scale

Use a modular scale with fluid sizing via `clamp()`. This adapts across viewports without breakpoint jumps.

```
--text-xs:   clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)
--text-sm:   clamp(0.875rem, 0.8rem + 0.35vw, 1rem)
--text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem)
--text-lg:   clamp(1.125rem, 1rem + 0.6vw, 1.25rem)
--text-xl:   clamp(1.25rem, 1rem + 1.2vw, 1.5rem)
--text-2xl:  clamp(1.5rem, 1.2rem + 1.5vw, 2rem)
--text-3xl:  clamp(1.875rem, 1.4rem + 2.3vw, 2.5rem)
--text-4xl:  clamp(2.25rem, 1.5rem + 3.5vw, 3.5rem)
--text-hero: clamp(2.5rem, 1.5rem + 5vw, 5.5rem)
```

## Hierarchy Rules

- **Line height:** 1.1–1.2 for headings, 1.5–1.75 for body text, 1.8 for long-form.
- **Line length:** 65–75 characters per line max. Use `max-w-[65ch]` for readability.
- **Letter spacing:** Tighter on large text (`tracking-tighter`), normal or slightly open on body.
- **Weight contrast:** Use at least 2 weight levels of difference between heading and body (e.g., 700 vs 400).
- **Color hierarchy:** Headlines in full contrast, body in slightly muted, captions/labels in reduced opacity.

## Loading Strategy

Always use `font-display: swap` to prevent invisible text during load. Preload critical fonts:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=...">
```

For self-hosted fonts (better performance), use `@font-face` with `font-display: swap` and subset to the characters you actually use.

## Common Mistakes

- Body text below 16px on mobile — unreadable, forces zoom
- Missing font-weight variations loaded — bold text falls back to browser faux-bold
- All-caps body text — reserved for labels, nav items, and short headings only
- Inconsistent heading levels — skipping from h2 to h5 breaks hierarchy and accessibility
- Decorating text instead of structuring it — gradients, shadows, and effects on body copy
