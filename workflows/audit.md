# /design-desk audit

Check current code against anti-slop rules and project DESIGN.md.

## Prerequisites
- DESIGN.md must exist. If missing, redirect to `/design-desk init`.
- Identify the tech stack and load the appropriate stack file.

## Flow

### 1. Load Context
- Read DESIGN.md for project tokens and constraints
- Read `references/anti-slop.md` for forbidden patterns
- Read `references/pre-flight.md` for the full checklist
- Detect stack and load from `stacks/`

### 2. Scan Files
Identify frontend files to audit:
- CSS/SCSS files, globals.css, tailwind.config
- Component files (.tsx, .vue, .svelte, .swift, .dart)
- Layout files, page files
- Focus on recently modified files first

### 3. Check Against Rules

**Anti-Slop Violations:**
- Banned fonts (Inter, Roboto, Arial as primary)
- Banned colors (AI purple, cyan-on-dark, pure black/white)
- Banned layouts (3-column equal cards, centered everything)
- Banned patterns (emojis as icons, mixed icon sets)

**Token Consistency:**
- Colors match DESIGN.md palette (no hardcoded hex outside tokens)
- Spacing follows the defined scale
- Typography uses the declared font stack
- Border radii match the system

**Interaction Completeness:**
- Interactive elements have all states (hover, focus, active, disabled)
- Loading states exist
- Empty states are designed
- Error states are inline and specific

**Accessibility:**
- Contrast ratios pass WCAG AA
- Focus indicators visible
- Touch targets 44x44px minimum
- Alt text on images, aria-labels on icon buttons

### 4. Score and Report

Use `templates/audit-report.md` for output format. Score on 5 dimensions (1-10):
1. Typography
2. Color
3. Layout
4. Motion
5. Interaction

Provide specific violations with file:line references and recommended fixes.

### 5. Prioritize Fixes
Order fixes by impact: accessibility first, then anti-slop, then token consistency, then polish.
