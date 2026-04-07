# Creative Arsenal

Advanced UI concepts and patterns for when the design calls for something beyond standard components. Not every project needs these — match the concept to the motion dial and project context.

## Navigation & Menus
- **Dock Magnification** — nav-bar icons scale fluidly on hover, macOS dock style
- **Magnetic Button** — buttons pull slightly toward cursor on approach
- **Gooey Menu** — sub-items detach from main button like viscous liquid
- **Dynamic Island** — pill-shaped UI morphs to show status/alerts/player
- **Contextual Radial Menu** — circular menu expanding at click coordinates
- **Floating Speed Dial** — FAB that springs into curved secondary actions
- **Mega Menu Reveal** — full-screen dropdowns with stagger-faded complex content

## Layout & Grids
- **Bento Grid** — asymmetric tile-based grouping (Apple Control Center style)
- **Masonry Layout** — staggered grid without fixed row heights (Pinterest style)
- **Chroma Grid** — grid tiles showing subtle, continuously animating color gradients
- **Split Screen Scroll** — two halves sliding in opposite directions on scroll
- **Curtain Reveal** — hero section parting like curtains on scroll

## Cards & Containers
- **Parallax Tilt Card** — 3D-tilting card tracking mouse coordinates
- **Spotlight Border Card** — borders illuminate dynamically under cursor
- **Glassmorphism Panel** — frosted glass with inner refraction borders and specular highlights
- **Holographic Foil Card** — iridescent rainbow reflections shifting on hover
- **Swipe Stack** — physical card stack the user swipes through
- **Morphing Modal** — button that seamlessly expands into its own full-screen dialog

## Scroll Animations
- **Sticky Scroll Stack** — cards stick to top and physically stack over each other
- **Horizontal Scroll Hijack** — vertical scroll translates into horizontal gallery pan
- **Scroll-Linked Video** — video/3D framerate tied to scroll position
- **Zoom Parallax** — background image zooming on scroll
- **Scroll Progress Path** — SVG lines drawing themselves as user scrolls
- **Liquid Swipe Transition** — page transitions wiping like viscous liquid

## Galleries & Media
- **Dome Gallery** — panoramic 3D gallery feeling
- **Coverflow Carousel** — 3D carousel, center focused, edges angled back
- **Drag-to-Pan Grid** — boundless grid draggable in any direction
- **Accordion Image Slider** — narrow strips that expand fully on hover
- **Hover Image Trail** — mouse leaves trail of popping/fading images
- **Glitch Effect** — brief RGB-channel shifting digital distortion on hover

## Typography & Text
- **Kinetic Marquee** — endless text bands reversing or speeding on scroll
- **Text Mask Reveal** — large text acting as transparent window to video background
- **Text Scramble** — matrix-style character decoding on load or hover
- **Circular Text Path** — text curved along a spinning circular path
- **Gradient Stroke Animation** — outlined text with gradient running along stroke
- **Kinetic Typography Grid** — letter grid dodging or rotating away from cursor

## Micro-Interactions & Effects
- **Particle Explosion Button** — CTAs shattering into particles on success
- **Liquid Pull-to-Refresh** — reload indicator like detaching water droplets
- **Skeleton Shimmer** — shifting light across placeholder boxes
- **Directional Hover** — hover fill entering from the side the mouse entered
- **Ripple Click** — waves rippling from exact click coordinates
- **Animated SVG Line Drawing** — vectors drawing their own contours in real-time
- **Mesh Gradient Background** — organic, lava-lamp animated color blobs
- **Lens Blur Depth** — dynamic focus blurring background to highlight foreground

## The Bento Paradigm

When building modern dashboards or feature sections, the Bento 2.0 architecture creates a "Vercel-core meets Dribbble-clean" aesthetic:

### Core Specs
- Background: `#f9fafb` or equivalent off-white
- Cards: pure white with 1px border `border-slate-200/50`
- Border radius: `rounded-2xl` to `rounded-3xl` for major containers
- Shadow: diffusion shadow `shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]`
- Labels/titles: outside and below cards, gallery-style
- Padding: generous `p-8` or `p-10` inside cards

### The 5 Card Archetypes
1. **The Intelligent List** — vertical stack with auto-sorting loop, items swap via `layoutId`
2. **The Command Input** — search/AI bar with multi-step typewriter effect and processing state
3. **The Live Status** — scheduling interface with breathing indicators and pop-up notification badges
4. **The Data Stream** — horizontal infinite carousel of metrics, seamless loop
5. **The Contextual UI** — document view with staggered text highlight and floating action toolbar

### Animation Engine
- Spring physics: `type: "spring", stiffness: 100, damping: 20` — no linear easing
- Layout transitions: `layout` and `layoutId` props for smooth state changes
- Infinite loops: every card has an active state that loops (pulse, typewriter, float, carousel)
- Stagger: `staggerChildren` with parent and children in same client component tree
- Performance: memoize perpetual motion components, isolate in their own client components

## When to Use What

| Motion Dial | Appropriate Arsenal |
|---|---|
| 1-3 | None of this. Static is the aesthetic. |
| 4-5 | Subtle hovers, fade reveals, skeleton shimmers |
| 6-7 | Bento with animations, scroll reveals, magnetic buttons |
| 8-9 | Parallax tilt, horizontal scroll hijack, text mask reveals |
| 10 | Full creative: 3D, GSAP scroll sequences, particle effects, canvas |

**Never mix GSAP/Three.js with Framer Motion in the same component tree.** Default to Framer for UI/bento. Use GSAP exclusively for isolated scroll sequences or canvas backgrounds with strict useEffect cleanup.
