# UX Laws Reference

Fundamental laws of human perception and cognition that inform every design decision. These aren't suggestions — they're how human brains work. Violate them and your UI fights the user.

## The Core Laws

### 1. Jakob's Law
**Users spend most of their time on OTHER sites.** They expect yours to work the same way.

Don't reinvent navigation, form patterns, or interaction paradigms unless you have a compelling reason. Novel doesn't mean better — familiar means fast.

**Application:**
- Navigation goes where people expect it (top or left)
- Links look like links. Buttons look like buttons
- Forms follow the pattern: label above input, error below
- Shopping carts, search bars, login flows — use conventions
- Save innovation for the VALUE your product delivers, not the controls

**When to break it:** Only when your product's core differentiator requires a new interaction pattern, and only after testing that users can learn it quickly.

### 2. Hick's Law
**The time to make a decision increases logarithmically with the number of choices.**

More options = slower decisions = higher abandonment. Every choice you present is a tax on the user's attention.

**Application:**
- Limit primary actions to 1 per screen. Secondary actions get reduced visual weight
- Navigation items: 5-7 max in the main nav
- Form fields: show only what's needed now, progressive disclosure for the rest
- Pricing tiers: 3 is ideal, 4 is max
- Settings: group and hide, don't list everything flat
- CTAs: one clear primary, everything else is secondary or tertiary

**The magic number:** If you have more than 5-7 options at one level, you need categories, tabs, or progressive disclosure.

### 3. Law of Proximity (Gestalt)
**Objects near each other are perceived as related.**

Spacing IS information. The distance between elements tells the user what belongs together without labels, borders, or cards.

**Application:**
- Group related form fields with tight spacing, separate groups with generous gaps
- A label must be closer to its input than to the previous input
- Related actions cluster together. Destructive actions get spatial separation
- Section spacing > group spacing > element spacing (rhythm)
- Don't use cards or borders to show relationships when spacing alone communicates it

**Common violation:** Equal spacing everywhere. If everything is 16px apart, nothing feels grouped.

### 4. Miller's Law
**The average person can hold 7 (plus or minus 2) items in working memory.**

Don't present more than 7 items without chunking. This applies to navigation items, form sections, dashboard metrics, menu items — anything the user needs to hold in their head.

**Application:**
- Break long forms into multi-step wizards (3-5 fields per step)
- Dashboard: 5-7 key metrics, not 15. Details on drill-down
- Phone numbers: 555-867-5309, not 5558675309
- Chunk long lists into categories of 5-7
- If a sidebar has 12 items, group them into 3-4 sections

**This doesn't mean everything must be 7.** It means anything over 7 needs structure — grouping, hierarchy, progressive disclosure.

### 5. Von Restorff Effect (Isolation Effect)
**Items that stand out from their surroundings are more likely to be remembered.**

The thing that's different gets attention. Use this intentionally — make your primary CTA, key metric, or critical warning visually distinct from everything around it.

**Application:**
- Primary CTA gets the accent color. Everything else is muted
- The most important metric gets visual emphasis (size, color, position)
- Error states break the visual pattern to demand attention
- Pricing: highlight the recommended tier with a different visual treatment
- Don't make everything bold/colored — when everything stands out, nothing does

**The trap:** If you highlight 5 things on a page, you've highlighted nothing.

## The Iteration Principle

**Design takes iteration. Don't get detailed too quickly.**

The product informs design decisions. You can't polish what isn't shaped yet. Work in layers:

### Layer 1: Direction (broad strokes)
- Overall aesthetic: dark/light, dense/airy, playful/serious
- Layout approach: how content flows
- Color direction: warm/cool, high/low contrast
- Typography mood: what the fonts say about the brand

### Layer 2: Structure (framework)
- Component hierarchy: what's primary, secondary, tertiary
- Spacing system: the rhythm of the page
- Grid decisions: how content is organized
- Navigation architecture: how users move through

### Layer 3: Detail (refinement)
- Specific color values: exact tokens
- Typography scale: precise sizes and weights
- Component states: hover, focus, active, loading, error, empty
- Shadows, borders, radii: surface treatment

### Layer 4: Polish (final pass)
- Motion: transitions, animations, microinteractions
- Responsive fine-tuning: every breakpoint considered
- Accessibility verification: contrast, focus, screen reader
- Anti-slop gate: does it look AI-generated?

**Each layer must be reviewed before moving to the next.** Polishing motion on a layout that hasn't been approved wastes everyone's time.

## Applying Laws During Design

When reviewing any design decision, run through:

1. **Is this familiar?** (Jakob's) — Am I inventing something that already has a convention?
2. **How many choices?** (Hick's) — Can I reduce options or add progressive disclosure?
3. **What's grouped?** (Proximity) — Does spacing communicate relationships correctly?
4. **How many items?** (Miller's) — Is anything over 7 unchunked?
5. **What stands out?** (Von Restorff) — Is the right thing getting attention? Is only ONE thing getting attention?
