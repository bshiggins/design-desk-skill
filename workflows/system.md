# /design-desk system

Generate or update design system tokens. This manages the DESIGN.md as a living document.

## Flow

### If DESIGN.md exists — Update
1. Read current DESIGN.md
2. Ask what needs changing (colors, typography, spacing, dials)
3. Update the relevant sections
4. Preserve unchanged sections
5. Save

### If DESIGN.md doesn't exist — Create
Redirect to `/design-desk init`.

### Page-Specific Overrides
For pages that deviate from the master system:
1. Create `design-system/pages/{page-name}.md`
2. Document only what differs from DESIGN.md
3. When building that page, read the override first, fall back to DESIGN.md for everything else

## Required Reading
- `references/design-dials.md`
- `templates/design-system.md`
