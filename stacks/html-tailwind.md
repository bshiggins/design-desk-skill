# HTML + Tailwind Stack Reference

The simplest stack. No build tools required for prototyping (CDN), or use the CLI/Vite plugin for production.

## Setup

### Quick Prototype (CDN)
```html
<script src="https://cdn.tailwindcss.com"></script>
```
Fine for playgrounds, demos, single-file prototypes. Not for production.

### Production
Use Tailwind CLI or Vite plugin. Generates only the CSS classes actually used.

## Patterns

- **Semantic HTML first.** Use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`. Not everything is a `<div>`.
- **Utility-first.** Style with Tailwind classes, not custom CSS. Reserve custom CSS for complex animations and pseudo-element tricks.
- **Responsive:** Mobile-first. Unprefixed classes are mobile, `sm:`, `md:`, `lg:`, `xl:` add complexity.
- **Dark mode:** Use `dark:` variant. Set up with `class` strategy for manual toggle or `media` for system preference.

## Design Tokens in Tailwind

```html
<style>
  :root {
    --color-primary: oklch(0.58 0.16 250);
    --color-surface: oklch(0.98 0.005 250);
  }
</style>
```

Reference in Tailwind: `bg-[var(--color-primary)]` or extend the config.

## Motion (CSS Only)

- Transitions: `transition-all duration-300 ease-out`
- Hover: `hover:translate-y-[-2px] hover:shadow-lg`
- Active: `active:scale-[0.98]`
- Scroll animations: Use `@keyframes` + `animation-timeline: view()` for modern browsers
- Reduced motion: `motion-reduce:transition-none motion-reduce:animate-none`

## Icons

Use inline SVGs or icon libraries via CDN:
- Phosphor: `<script src="https://unpkg.com/@phosphor-icons/web"></script>`
- Lucide: individual SVG imports
- Heroicons: copy SVG markup directly

## Common Patterns

- **Container:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section:** `py-16 sm:py-24`
- **Grid:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- **Glass card:** `backdrop-blur-md bg-white/10 border border-white/20 rounded-xl`
- **Focus ring:** `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`
