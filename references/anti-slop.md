# Anti-Slop Reference

The quality floor. Every frontend output must pass these checks. AI coding agents have statistical biases toward specific UI patterns — this file corrects them.

## The AI Slop Test

After building any UI, ask: **"If I showed this to someone and said AI made this, would they believe me immediately?"**

If yes — that's the problem. A distinctive interface makes someone ask "how was this made?" not "which AI made this?"

## Forbidden Patterns

### Typography
- **Inter, Roboto, Arial, Open Sans, system defaults** — these are the AI uniform. Choose fonts with personality. Geist, Outfit, Cabinet Grotesk, Satoshi, or domain-appropriate selections.
- **Monospace as lazy shorthand for "technical"** — monospace is for code and data, not aesthetic signaling.
- **Oversized H1s** — control hierarchy with weight and color, not just massive scale.
- **Serif fonts on dashboards/software UI** — serif is for editorial and creative contexts only.

### Color
- **The AI palette: cyan-on-dark, purple-to-blue gradients, neon accents on dark backgrounds** — this is the single most recognizable tell.
- **Pure black (#000) or pure white (#fff)** — always tint. Pure extremes don't exist in nature.
- **Gray text on colored backgrounds** — looks washed out. Use a shade of the background color instead.
- **Oversaturated accents** — desaturate to blend with neutrals. Saturation below 80%.
- **Gradient text on headings** — decorative rather than meaningful, overused by AI.
- **Fluctuating warm/cool grays** — one palette per project. Pick a gray family and commit.

### Layout
- **3-column equal card grids** — the feature row cliche. Use 2-column zig-zag, asymmetric grid, or horizontal scroll instead.
- **Centered hero/H1 sections** (when variance is high) — use split screen, left-aligned content, or asymmetric whitespace.
- **Cards everywhere** — not everything needs a container. Use borders, dividers, or negative space.
- **Cards inside cards** — visual noise. Flatten the hierarchy.
- **Identical padding everywhere** — spacing needs rhythm. Tight groupings, generous separations.
- **Same container widths mixed** — pick max-w-6xl or max-w-7xl and commit.
- **The hero metric layout template** — big number, small label, supporting stats, gradient accent. Everyone does this.

### Visual
- **Glassmorphism as decoration** — blur effects must serve a functional purpose (layering, depth), not just look "cool."
- **Rounded rectangles with generic drop shadows** — safe, forgettable, could be any AI output.
- **Large icons with rounded corners above every heading** — rarely adds value, makes sites look templated.
- **Neon/outer glows** — use inner borders or subtle tinted shadows instead.
- **Custom mouse cursors** — outdated, hurts performance and accessibility.
- **Sparklines as decoration** — tiny charts that look sophisticated but convey nothing.

### Content
- **"John Doe", "Jane Smith", "Sarah Chen"** — use creative, realistic names.
- **Generic avatar SVGs** — use photo placeholders or styled initials.
- **Round numbers: 99.99%, 50%, $100.00** — use organic data (47.2%, $87.43).
- **"Acme", "Nexus", "SmartFlow"** — invent contextual brand names.
- **"Elevate", "Seamless", "Unleash", "Next-Gen"** — AI copywriting cliches. Use concrete verbs.
- **Unsplash URLs** — they break. Use `https://picsum.photos/seed/{random}/800/600` or SVG placeholders.

### Icons
- **Emojis as UI icons** — use SVG icons from Phosphor, Lucide, Heroicons, or Radix.
- **Mixed icon sets** — pick one library, standardize stroke width (1.5 or 2.0).
- **Incorrect brand logos** — verify from Simple Icons or official sources.

### Motion
- **Bounce or elastic easing** — dated and tacky. Real objects decelerate smoothly (ease-out-quart/quint/expo).
- **Linear easing** — feels mechanical. Use cubic-bezier curves.
- **Animating width, height, padding, margin** — GPU-hostile. Use transform and opacity only.
- **Scattered micro-interactions** — one well-orchestrated moment beats ten random wiggles.
- **No prefers-reduced-motion support** — always provide a fallback.

## The Positive Test

Good design has:
- **Intentionality** — every choice serves a purpose
- **Restraint** — one strong accent color, not five competing ones
- **Rhythm** — varied spacing creates visual flow
- **Hierarchy** — the eye knows where to go
- **Surprise** — at least one element that's unexpected and delightful
- **Consistency** — tokens enforced, not suggestions

## Pre-Delivery Gate

Before any UI code leaves your hands:

- [ ] Would a designer say "AI made this"? Fix whatever gives it away.
- [ ] Is there at least one design choice that feels intentional and specific to this project?
- [ ] Does the typography have character (not Inter/Roboto)?
- [ ] Is the color palette restrained and tinted (not pure black/white, not AI purple)?
- [ ] Do interactive elements have visible feedback (hover, focus, active, loading)?
- [ ] Does it work at 375px without horizontal scroll?
- [ ] Is there motion, and does it respect prefers-reduced-motion?
