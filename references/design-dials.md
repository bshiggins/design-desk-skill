# Design Dials Reference

Three numeric dials that control the aesthetic output of every design. Set these in DESIGN.md during init and reference them throughout the project.

## The Three Dials

### DESIGN_VARIANCE (1-10)
How conventional vs. experimental the layout is.

| Level | What it looks like |
|---|---|
| 1-3 | Predictable. Centered layouts, symmetrical grids, equal padding. Safe, corporate. |
| 4-5 | Slightly offset. Left-aligned headers over centered data. Varied aspect ratios. |
| 6-7 | Asymmetric. Margin overlaps, mixed aspect ratios, intentional whitespace. |
| 8-9 | Masonry layouts, CSS Grid fractional units (2fr 1fr 1fr), massive empty zones. |
| 10 | Art direction. Rule-breaking for effect. Overlap, diagonal flow, grid-breaking. |

**Mobile override:** For levels 4-10, any asymmetric layout MUST collapse to single-column on viewports below 768px. Asymmetry that breaks mobile is not design — it's a bug.

### MOTION_INTENSITY (1-10)
How much movement exists in the interface.

| Level | What it looks like |
|---|---|
| 1-3 | Static. CSS `:hover` and `:active` only. No automatic animations. |
| 4-5 | Fluid CSS. Transitions with cubic-bezier. Simple fade-up on scroll. |
| 6-7 | Orchestrated. Staggered reveals, spring physics, scroll-triggered sequences. |
| 8-9 | Advanced. Parallax, horizontal scroll hijack, complex choreography. |
| 10 | Cinematic. GSAP timelines, 3D scenes, canvas animations, video-linked scroll. |

### VISUAL_DENSITY (1-10)
How much information fits in a given space.

| Level | What it looks like |
|---|---|
| 1-3 | Art gallery. Huge whitespace. Everything breathes. Feels expensive. |
| 4-5 | Standard web. Comfortable spacing for consumer apps. |
| 6-7 | Productive. Tighter spacing for dashboards and tools. |
| 8-9 | Dense. Minimal padding. 1px dividers instead of cards. Monospace for numbers. |
| 10 | Cockpit. Everything packed. Data-forward. Engineering aesthetic. |

## Default Baseline

When no DESIGN.md exists and you need a starting point:

```
DESIGN_VARIANCE: 6
MOTION_INTENSITY: 5
VISUAL_DENSITY: 4
```

This produces a modern, slightly asymmetric layout with fluid CSS transitions and comfortable spacing. It's a safe default that avoids both the generic (3/3/5) and the extreme (9/9/2).

## How Dials Interact

The dials aren't independent — they inform each other:

- **High variance + low density** = editorial, art-directed. Think portfolio sites, creative agencies.
- **Low variance + high density** = enterprise dashboard. Predictable layout, packed with data.
- **High motion + high density** = overwhelming. Generally avoid. If density is 7+, keep motion at 5 or below.
- **High variance + high motion** = maximum expression. Only for creative/portfolio contexts where the design IS the product.
- **Low everything** = corporate, conservative. Fine for healthcare, banking, government.

## Setting Dials During Init

When running `/design-desk init`, ask the user about their project context and map to dials:

| Context | Variance | Motion | Density |
|---|---|---|---|
| Marketing / Landing page | 7 | 6 | 3 |
| SaaS Dashboard | 4 | 4 | 7 |
| E-commerce | 5 | 5 | 5 |
| Portfolio / Creative | 8 | 7 | 3 |
| Healthcare / Medical | 3 | 3 | 5 |
| Blog / Editorial | 6 | 4 | 4 |
| Developer Tool | 4 | 3 | 8 |
| Mobile App | 5 | 5 | 5 |
| Luxury Brand | 7 | 5 | 2 |

These are starting suggestions. The user adjusts from here.

## Referencing Dials in Other Files

Other reference files (motion.md, layout.md, creative-arsenal.md) check the dial values before recommending patterns. If a motion reference suggests spring physics but the motion dial is 3, that recommendation gets filtered out.

Always respect the dials. Don't add motion-8 effects to a motion-3 project because they "look cool."
