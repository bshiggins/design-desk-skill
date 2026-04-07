# React / Next.js Stack Reference

## Server vs Client Components

- Default to Server Components (RSC). They render on the server, ship zero JS.
- Use `'use client'` ONLY when the component needs: useState, useEffect, event handlers, browser APIs, or context providers.
- Interactive UI (animations, hover effects, form inputs) MUST be isolated as leaf client components. Don't make a whole page client-side for one button.
- Wrap providers in a dedicated `'use client'` component. Never put `'use client'` on a layout.

## Tailwind CSS v4

- No `tailwind.config.js` — configuration is in CSS via `@theme inline`
- No `tailwindcss` plugin in `postcss.config.js` — use `@tailwindcss/postcss` or the Vite plugin
- Check `package.json` for version before writing config. v3 and v4 syntax are incompatible.

## Performance Patterns

- **Images:** Use `next/image` with `width`, `height`, and `priority` (above-fold). Lazy load below-fold images.
- **Fonts:** Use `next/font` for self-hosted fonts with automatic optimization.
- **Suspense:** Wrap async components in `<Suspense>` with skeleton fallbacks.
- **Dynamic imports:** Use `next/dynamic` for heavy client components (3D scenes, chart libraries).

## Motion in React

- **Framer Motion:** Use `useMotionValue` and `useTransform` for continuous animations (mouse tracking, scroll-linked). NEVER use `useState` for these — it causes re-renders on every frame.
- **AnimatePresence:** Wrap lists and conditional content for enter/exit animations.
- **layout prop:** Use for smooth repositioning when DOM order changes.
- **Isolation:** Perpetual animations (infinite loops, floating effects) MUST be in their own memoized client component to avoid re-rendering the parent.

## Styling Patterns

- Use Tailwind utilities for 90% of styling
- CSS custom properties in `globals.css` for design tokens
- Avoid `@apply` in production code — it defeats Tailwind's purpose
- Use `cn()` utility (from `clsx` + `tailwind-merge`) for conditional classes

## Component Libraries

- **shadcn/ui:** Good foundation but NEVER use in default state. Customize radii, colors, shadows, and fonts to match the project DESIGN.md.
- **Radix UI:** Unstyled primitives for accessible components. Pair with Tailwind.
- **Headless UI:** Similar to Radix, works with Tailwind.
