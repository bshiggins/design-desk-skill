# GSD Integration Reference

How Design Desk works alongside GSD when a `.planning/` directory exists. This file is only loaded when GSD is detected — standalone usage ignores it entirely.

## Detection

If the project root contains a `.planning/` directory, GSD is active. Read `ROADMAP.md` to understand the current phase structure.

## Integration Points

### During /gsd:discuss-phase (for UI phases)
When the discussion involves frontend/UI work:
1. Check for DESIGN.md in the project root
2. If missing, suggest running `/design-desk init` before planning
3. Capture design decisions in CONTEXT.md using design vocabulary (dials, palette direction, typography mood)
4. Don't resolve implementation details — that's for planning

### During /gsd:plan-phase (for UI phases)
When planning frontend tasks:
1. Read DESIGN.md for established tokens and constraints
2. Reference anti-slop rules in task acceptance criteria
3. Include pre-flight checklist items as verification steps
4. Suggest design dials if not yet set

### During /gsd:execute-phase (for UI phases)
When building frontend code:
1. Load relevant Design Desk references based on the task
2. Build against DESIGN.md tokens
3. Respect design dials for motion/variance/density decisions
4. Run anti-slop check on each component before marking task complete

### During /gsd:verify-work (for UI phases)
When verifying frontend work:
1. Run `/design-desk critique` as part of verification
2. Check pre-flight checklist
3. Flag anti-slop violations as verification failures
4. Suggest a playground for human visual review if the phase involves significant UI

## Adding a Design Phase

Design Desk can suggest adding a dedicated design phase to a GSD roadmap. This is appropriate when:
- The project has significant frontend work
- No DESIGN.md exists yet
- Multiple UI phases would benefit from a shared design system

The design phase would be an early phase (before UI implementation) that:
1. Runs `/design-desk init` to establish DESIGN.md
2. Sets design dials
3. Generates token system
4. Gets human approval on direction before any code

## What Design Desk Does NOT Do

- Does not modify GSD's phase management or state
- Does not create or update ROADMAP.md, PLAN.md, or STATE.md
- Does not interfere with GSD's commit protocols
- Does not replace GSD's verification — it adds design-specific checks alongside

Design Desk is a design advisor that speaks when spoken to. GSD remains the project manager.
