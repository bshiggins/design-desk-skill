# /design-desk motion

Audit or add animation to a component or page.

## Flow

### 1. Check Motion Dial
Read DESIGN.md for the MOTION_INTENSITY setting. All recommendations must respect this value.

### 2. If Auditing
- Read `references/motion.md`
- Check for forbidden patterns (linear easing, bounce, animating layout properties)
- Check for missing `prefers-reduced-motion` support
- Check mobile performance (excessive blur, continuous animations)
- Report violations with fixes

### 3. If Adding Motion
- Read `references/motion.md` + `references/creative-arsenal.md`
- Propose motion appropriate to the dial setting
- Suggest specific patterns from the creative arsenal if dial is 6+
- Provide implementation code with easing values and timing

### 4. Motion Spec
For complex animations, output a motion spec using `templates/motion-spec.md`:
- What animates, when, and how
- Timing and easing values
- Reduced-motion fallback
- Performance considerations
