# Pre-Flight Checklist

The final gate before any UI code ships. Run through every item. If something fails, fix it before delivery.

## 1. Anti-Slop Test
- [ ] Would a designer immediately say "AI made this"? If yes, identify what gives it away and fix it.
- [ ] Is there at least one design choice specific to this project (not generic)?
- [ ] No Inter, Roboto, or Arial as primary fonts?
- [ ] No AI purple, no cyan-on-dark, no neon gradients?
- [ ] No 3-column equal card grid?
- [ ] No emojis used as UI icons?

## 2. Typography
- [ ] Font loaded via preconnect + swap (no invisible text flash)?
- [ ] Minimum 16px body text on mobile?
- [ ] Line height 1.5+ for body text?
- [ ] Line length under 75 characters?
- [ ] At least 2 weight levels between heading and body?
- [ ] Heading hierarchy is sequential (no skipping h2 to h5)?

## 3. Color & Contrast
- [ ] WCAG AA contrast on ALL text (4.5:1 normal, 3:1 large)?
- [ ] No pure black (#000) or pure white (#fff)?
- [ ] Neutrals tinted toward brand hue?
- [ ] One primary accent, not five competing colors?
- [ ] Color is not the only indicator of state (add icons/text for accessibility)?

## 4. Layout
- [ ] No horizontal scroll at any breakpoint (375px, 768px, 1024px, 1440px)?
- [ ] Content doesn't hide behind fixed navbars (scroll-margin-top set)?
- [ ] Container max-width is consistent across sections?
- [ ] Spacing has rhythm (not uniform padding everywhere)?
- [ ] Z-index follows a defined scale (no arbitrary z-[9999])?
- [ ] Using `min-h-[100dvh]` not `h-screen` for full-height sections?

## 5. Interaction
- [ ] All clickable elements have `cursor-pointer`?
- [ ] Every interactive element has hover, focus, active, and disabled states?
- [ ] Focus rings visible for keyboard navigation?
- [ ] Touch targets minimum 44x44px on mobile?
- [ ] Loading states provided (skeleton or spinner)?
- [ ] Empty states designed (not just "No data")?
- [ ] Error states are inline and specific?

## 6. Motion
- [ ] Animations use transform + opacity only (GPU-accelerated)?
- [ ] `prefers-reduced-motion` fallback provided?
- [ ] No interaction-blocking animations (can always click during animation)?
- [ ] Easing is not linear or bounce?
- [ ] Micro-interactions under 300ms, larger animations under 800ms?
- [ ] Motion level matches DESIGN.md dial setting?

## 7. Responsive
- [ ] Tested at 375px (phone), 768px (tablet), 1024px (desktop), 1440px (wide)?
- [ ] Images have `max-width: 100%` and `height: auto`?
- [ ] Text doesn't overflow containers on mobile?
- [ ] Touch-specific: no hover-dependent functionality?
- [ ] Navigation is accessible on mobile (hamburger or bottom nav)?

## 8. Accessibility
- [ ] All images have descriptive alt text (or `alt=""` for decorative)?
- [ ] Icon-only buttons have aria-label?
- [ ] Tab order matches visual order?
- [ ] `color-scheme: dark` set on root for dark mode projects?
- [ ] Escape key closes modals/dropdowns?
- [ ] Form inputs have associated `<label>` elements?
- [ ] Dynamic content updates use `aria-live` regions?

## 9. Performance
- [ ] Images in WebP/AVIF with srcset for responsive sizes?
- [ ] Lazy loading on below-fold images?
- [ ] No backdrop-filter abuse on scrolling containers?
- [ ] No `will-change` applied globally?
- [ ] Glass effects reduced on mobile (blur, saturate)?
- [ ] No unnecessary client-side JavaScript for static content?

## 10. Code Quality
- [ ] CSS variables for all design tokens (colors, spacing, radii, shadows)?
- [ ] Consistent naming convention for classes/variables?
- [ ] No inline styles for design decisions (use tokens)?
- [ ] Brand logos verified from official sources?
- [ ] No broken image URLs or placeholder references left in?

## UX Laws Cross-Check
- [ ] **Jakob's Law**: Am I using familiar patterns where conventions exist?
- [ ] **Hick's Law**: No more than 5-7 choices at any decision point?
- [ ] **Proximity**: Spacing communicates grouping correctly?
- [ ] **Miller's Law**: Lists and groups chunked to 7 or fewer items?
- [ ] **Von Restorff**: Exactly ONE thing stands out per section (the right thing)?
