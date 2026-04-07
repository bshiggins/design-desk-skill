<ui_patterns>

Visual patterns for user-facing Design Desk output. All workflows reference this file for consistent branding.

**Brand color: Teal.** All banners, accents, and status indicators use teal theming.

## Terminal Color Codes

When outputting ANY Design Desk branded element, wrap in teal ANSI codes:

```
Teal:       \033[38;2;0;188;180m   (RGB: 0, 188, 180)
Bright Teal:\033[38;2;0;224;216m   (RGB: 0, 224, 216 — for highlights)
Dim Teal:   \033[38;2;0;140;134m   (RGB: 0, 140, 134 — for borders/frames)
Reset:      \033[0m
Bold:       \033[1m
```

To output teal text in the terminal, use bash `echo -e` or `printf`:
```bash
printf '\033[38;2;0;188;180m'
cat << 'BANNER'
... banner content ...
BANNER
printf '\033[0m'
```

## Install / Update Banner

The marquee. Displayed on first install, updates, and session start when Design Desk is active. Borderless — the ASCII art speaks for itself.

**To display this banner in teal, use:**
```bash
printf '\033[1m\033[38;2;0;188;180m'
cat << 'BANNER'

  ██████╗ ███████╗███████╗██╗ ██████╗ ███╗   ██╗
  ██╔══██╗██╔════╝██╔════╝██║██╔════╝ ████╗  ██║
  ██║  ██║█████╗  ███████╗██║██║  ███╗██╔██╗ ██║
  ██║  ██║██╔══╝  ╚════██║██║██║   ██║██║╚██╗██║
  ██████╔╝███████╗███████║██║╚██████╔╝██║ ╚████║
  ╚═════╝ ╚══════╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝
  ██████╗ ███████╗███████╗██╗  ██╗
  ██╔══██╗██╔════╝██╔════╝██║ ██╔╝
  ██║  ██║█████╗  ███████╗█████╔╝
  ██║  ██║██╔══╝  ╚════██║██╔═██╗
  ██████╔╝███████╗███████║██║  ██╗
  ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝

BANNER
printf '\033[0m\033[38;2;0;150;144m'
cat << 'TAG'
  Design intelligence for AI coding agents
  v{VERSION} — designdesk.app

TAG
printf '\033[0m'
```

## Stage Banners

Use for major workflow transitions. Teal-accented.

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 DESK ► {STAGE NAME}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Stage names (uppercase):**
- `INITIALIZING`
- `EXTRACTING TOKENS`
- `GENERATING PALETTE`
- `AUDITING`
- `CRITIQUING`
- `POLISHING`
- `REVIEWING`
- `PREVIEWING`
- `COMPLETE ✓`

---

## Checkpoint Boxes

User action required. 62-character width.

```
╔══════════════════════════════════════════════════════════════╗
║  DESIGN CHECKPOINT: {Type}                                   ║
╚══════════════════════════════════════════════════════════════╝

{Content}

──────────────────────────────────────────────────────────────
→ {ACTION PROMPT}
──────────────────────────────────────────────────────────────
```

**Types:**
- `DESIGN CHECKPOINT: Visual Review` → `→ How does this look? What would you change?`
- `DESIGN CHECKPOINT: Direction` → `→ Select: option-a / option-b / option-c`
- `DESIGN CHECKPOINT: Approval` → `→ Type "approved" or describe changes`
- `DESIGN CHECKPOINT: Dial Check` → `→ Adjust dials or type "confirmed"`

---

## Status Symbols

```
✓  Complete / Passed / Approved
✗  Failed / Violation / Slop detected
◆  In Progress
○  Pending
△  Warning / Needs attention
♦  Design decision point
```

---

## Audit Scores

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 DESK ► AUDIT RESULTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Typography   ████████░░  8/10
  Color        ██████░░░░  6/10
  Layout       █████████░  9/10
  Motion       ████░░░░░░  4/10
  Interaction  ███████░░░  7/10

  Overall      ██████░░░░  6.8/10

  Anti-Slop:   NEEDS WORK
  Tells found: 3
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Design Dials Display

```
───────────────────────────────────────────────────────
  ♦ Design Dials

  VARIANCE   ░░░░░░██░░  6  (asymmetric layouts)
  MOTION     ░░░░░█████  5  (fluid CSS transitions)
  DENSITY    ░░░░████░░  4  (comfortable spacing)
───────────────────────────────────────────────────────
```

---

## Preview / Review Banner

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 DESK ► PREVIEWING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Preview:  http://localhost:3333
  File:     /tmp/design-desk-review-{timestamp}.html

╔══════════════════════════════════════════════════════════════╗
║  DESIGN CHECKPOINT: Visual Review                            ║
╚══════════════════════════════════════════════════════════════╝

How does this look? What would you change?

──────────────────────────────────────────────────────────────
→ Describe changes, or type "approved" to continue
──────────────────────────────────────────────────────────────
```

---

## Completion Banner

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 DESK ► COMPLETE ✓
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  {Summary of what was done}

  Files modified:
    ✓ {file:line} — {change}
    ✓ {file:line} — {change}

  Preview cleaned up ✓
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Error Box

```
╔══════════════════════════════════════════════════════════════╗
║  DESK ERROR                                                  ║
╚══════════════════════════════════════════════════════════════╝

{Error description}

**To fix:** {Resolution steps}
```

---

## Anti-Patterns

- Varying box/banner widths — always 62 characters
- Mixing banner styles — always use `━` for stage banners
- Missing `DESK ►` prefix in banners
- Random emoji — only use ✓, ✗, ◆, ○, △, ♦ as defined above
- Skipping the visual review checkpoint for UI work
- Leaving preview servers or temp files running

</ui_patterns>
