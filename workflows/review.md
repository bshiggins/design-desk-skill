# /design-desk review

Visual review workflow — spin up a local preview, let the human iterate, clean up when done.

## Purpose
Design can't be evaluated in code. This workflow generates a live HTML preview for human visual review, supports iteration, and cleans up automatically when the user is satisfied.

## Flow

### 1. Generate Preview
Build a self-contained HTML file with the component/page being reviewed:
- Include all CSS (inline or linked)
- Include any JS needed for interactivity
- Add viewport meta tag for mobile testing
- Include both light and dark mode if applicable

Save to a temp location: `/tmp/design-desk-review-[timestamp].html`

### 2. Serve It
Start a local server:
```bash
npx serve /tmp/design-desk-review-[timestamp].html -p 3333 --no-clipboard
```
Or use Python:
```bash
python3 -m http.server 3333 --directory /tmp/
```

Open in browser automatically.

### 3. Iteration Loop
Present the preview and ask: "How does this look? What would you change?"

For each piece of feedback:
1. Make the change in the source code
2. Regenerate the preview HTML
3. The browser auto-refreshes (or prompt to refresh)
4. Ask again: "Better? Anything else?"

Continue until the user says it's good.

### 4. Playground Mode (for tuning)
When the user needs to tune specific values (colors, spacing, font sizes, animation timing), generate a playground with interactive controls:

```html
<!-- Slider for border-radius -->
<input type="range" min="0" max="32" value="12"
  oninput="document.querySelector('.card').style.borderRadius = this.value + 'px'">

<!-- Color picker for accent -->
<input type="color" value="#C9A055"
  oninput="document.documentElement.style.setProperty('--color-primary', this.value)">
```

This lets the user find the right values visually instead of guessing in code.

### 5. Apply Final Values
When the user approves:
1. Read the final values from the playground controls
2. Update the actual source code with the approved values
3. Update DESIGN.md tokens if the changes affect the system

### 6. Clean Up (Automatic)
When the review is complete:
1. Kill the local server process
2. Delete the temp HTML file(s)
3. Confirm: "Preview cleaned up. Changes applied to [file:line]."

Do this automatically — don't ask the user if they want to clean up. Just do it.

## When to Trigger
- After building any significant UI component
- During `/design-desk polish` workflow
- When the user says "show me", "let me see it", "preview this"
- During design direction exploration (explore context)

## Anti-Patterns
- Don't serve the actual project dev server for quick component reviews — the temp HTML is faster
- Don't leave temp files or servers running after review
- Don't skip the visual review for UI work — code review alone isn't sufficient for design
