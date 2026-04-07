# /design-desk critique

The AI Slop Test. Honest assessment of whether the current UI looks AI-generated.

## Flow

### 1. Identify Target
What to critique: a file path, a component, a page, or a screenshot path.

### 2. Load Anti-Slop Rules
Read `references/anti-slop.md` — the full forbidden patterns list.

### 3. Run the Test

Ask one question: **"If I showed this to a designer and said AI made it, would they believe me immediately?"**

If yes, identify exactly what gives it away:
- Which specific anti-slop patterns are present?
- What makes it feel generic vs. intentional?
- Where is the design making safe/default choices instead of bold ones?

If no (it passes), confirm what makes it work:
- What specific choices feel intentional?
- What's distinctive about this design?

### 4. Provide Verdict

**PASS** — the design has intentionality. Note what's working.

**NEEDS WORK** — list the specific tells with fixes:
```
TELL: Inter font as primary
FIX: Replace with [recommended font from typography.md]
FILE: src/app/globals.css:12

TELL: 3-column equal card grid
FIX: Use asymmetric grid (2fr 1fr) or bento layout
FILE: src/components/Features.tsx:45
```

**SLOP** — multiple fundamental issues. Suggest starting over with `/design-desk init` to establish direction first.

### 5. UX Laws Check
After the slop test, quick-scan against the 5 UX laws:
- Is anything fighting user expectations? (Jakob's)
- Too many choices anywhere? (Hick's)
- Is spacing communicating grouping? (Proximity)
- Anything over 7 items unchunked? (Miller's)
- Is the right thing standing out? (Von Restorff)
