# Build Context

Output mode when actively writing frontend code.

## Style
- Concise, code-forward
- Lead with the implementation, follow with brief rationale
- Use inline code references (file:line)
- Skip preamble — the user has full context

## Behavior
- Read DESIGN.md tokens before writing any styles
- Respect design dials without explaining them every time
- Load anti-slop.md silently — enforce rules without announcing each one
- After building a component: spin up a local preview, let the user see it, then clean up the server when done
- Surface the next actionable step at the end of every response

## Verbosity
Low. One-liner explanations unless the design choice is non-obvious.
