# Motion Reference

Motion communicates state changes, creates spatial relationships, and adds delight. But motion without purpose is noise. One well-orchestrated moment beats ten random wiggles.

## The Motion Dial

Motion intensity is a project-level decision captured in DESIGN.md:

| Level | What it means | Implementation |
|---|---|---|
| 1-3 | Static | CSS `:hover` and `:active` states only. No automatic animations |
| 4-6 | Fluid | CSS transitions with cubic-bezier. Staggered load-ins. Transform + opacity only |
| 7-8 | Choreographed | Scroll-triggered reveals, spring physics, orchestrated sequences |
| 9-10 | Cinematic | Complex scroll sequences, parallax, 3D, canvas animations |

**Match motion to the product.** A medical dashboard is not a portfolio site. A banking app is not a creative agency homepage.

## Timing

- **Micro-interactions** (hover, focus, toggle): 150-200ms
- **Small transitions** (panel open, dropdown): 200-300ms
- **Medium transitions** (page sections, modals): 300-500ms
- **Large orchestrations** (hero reveals, page transitions): 500-800ms
- **Maximum for any user-triggered interaction:** 500ms

Anything over 500ms for a user action feels sluggish. Save longer durations for ambient/scroll-triggered animations.

## Easing

### Use
- **ease-out-quart/quint/expo** — natural deceleration. Objects in motion slow down gradually. This is the default for most UI motion.
- **ease-in-out** — for things that move from point A to point B (sliding panels, repositioning)
- **Spring physics** — for interactive elements that need to feel physical. Framer Motion: `type: "spring", stiffness: 100, damping: 20`

### Avoid
- **Linear** — feels mechanical and robotic
- **Bounce / elastic** — dated, tacky. Real objects don't bounce in UI
- **ease-in** — feels like it's accelerating into a wall. Almost never right for UI

### CSS Values
```css
/* Good defaults */
--ease-out:     cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out:  cubic-bezier(0.65, 0, 0.35, 1);
--ease-spring:  cubic-bezier(0.34, 1.56, 0.64, 1);

/* For different intensities */
--ease-subtle:  cubic-bezier(0.25, 0.1, 0.25, 1);
--ease-expressive: cubic-bezier(0.16, 1, 0.3, 1);
```

## Animation Patterns

### Entrance Animations (scroll-triggered or on mount)
- **Fade up:** opacity 0→1, translateY 20px→0. The workhorse. Simple, effective.
- **Staggered reveal:** children animate in sequence with 60-120ms delay between items.
- **Clip reveal:** clip-path from left/right/bottom, revealing content like a curtain.
- **Character cascade:** individual letters animate in sequence. Reserved for hero headlines only.
- **Blur in:** opacity 0→1 with filter blur 8px→0. Soft, premium feel.

### Interactive States
- **Hover lift:** translateY(-2px) + subtle shadow increase. Classic, restrained.
- **Active press:** scale(0.98) or translateY(1px). Simulates physical push.
- **Focus ring:** 2px outline with offset, using the primary color. Visible, not decorative.
- **Magnetic pull:** element moves slightly toward cursor. Use sparingly, only on CTAs.

### Loading & Transitions
- **Skeleton shimmer:** gradient sweep across placeholder boxes. Match layout sizes.
- **Content swap:** crossfade old→new content. Never jump-cut.
- **Progress indication:** linear for known durations, indeterminate for unknown.

## Performance Rules

### GPU-Accelerated Only
Animate exclusively via `transform` and `opacity`. Never animate:
- `width`, `height` (triggers layout)
- `top`, `left`, `right`, `bottom` (triggers layout)
- `padding`, `margin` (triggers layout)
- `border-width` (triggers layout + paint)
- `font-size` (triggers layout)

For height animations, use `grid-template-rows: 0fr → 1fr` transition instead of animating `height` directly.

### Will-Change
Use `will-change: transform` sparingly — only on elements that will definitely animate. Adding it to everything defeats the purpose and wastes GPU memory.

### Reduced Motion
Always respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

In JS: check `window.matchMedia('(prefers-reduced-motion: reduce)').matches` before running animations.

### Mobile Performance
- Reduce backdrop-blur values (24px → 10px)
- Remove decorative grain/noise filters on scrolling containers
- Disable continuous animations (floating, pulsing) on low-power devices
- Reduce stagger counts — 3 items staggering feels intentional, 20 feels laggy

## Framework Guidance

### CSS Only (Motion 1-6)
Transitions and keyframe animations. No JS dependency. Best for hover states, simple reveals, and micro-interactions.

### Framer Motion (Motion 5-8, React)
Spring physics, layout animations, AnimatePresence for enter/exit. Use `useMotionValue` and `useTransform` for continuous animations — never `useState` for mouse tracking or scroll-linked motion.

### GSAP + ScrollTrigger (Motion 7-10)
Complex scroll choreography, timeline-based sequences, parallax. Never mix GSAP with Framer Motion in the same component tree. Use GSAP for page-level orchestration, Framer for component-level interaction.

### CSS Scroll-Driven Animations (Modern, Motion 5-8)
Native scroll-linked animations without JS. Use `animation-timeline: scroll()` or `view()`. Excellent performance, no JS bundle cost. Browser support is good as of 2025+.

## Common Mistakes

- Adding motion to everything — it becomes noise
- Different easing curves on the same page — feels inconsistent
- Entrance animations that replay on every scroll — trigger "once" only
- Hover effects that cause layout shift — use transform, not dimensions
- Motion that blocks interaction — never prevent clicking during an animation
- Infinite loops that drain battery — always provide a way to stop
