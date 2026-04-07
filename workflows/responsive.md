# /design-desk responsive

Check and fix responsive behavior across breakpoints.

## Flow

### 1. Load Context
Read `references/layout.md` for responsive strategy and breakpoint targets.

### 2. Check All Breakpoints
Test at: 375px, 768px, 1024px, 1440px

For each breakpoint, verify:
- No horizontal scrolling
- No content overflow or clipping
- Text is readable (minimum 16px body on mobile)
- Touch targets are 44x44px minimum on mobile
- Navigation is accessible (hamburger or bottom nav on mobile)
- Images scale properly (max-width: 100%, height: auto)
- Grid layouts collapse appropriately
- No hover-dependent functionality on touch devices

### 3. Check Viewport Stability
- No `h-screen` usage (use `min-h-[100dvh]`)
- Fixed elements don't overlap content
- Scroll-margin-top accounts for sticky headers

### 4. Report Fixes
List issues by breakpoint with file:line references and recommended CSS changes.
