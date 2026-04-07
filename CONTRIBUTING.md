# Contributing to Design Desk Skill

Thanks for your interest in improving Design Desk. Here's how to contribute.

## Getting Started

1. **Fork** this repo
2. **Clone** your fork locally
3. **Create a feature branch** off `main`:
   ```bash
   git checkout -b feat/your-feature-name
   ```
4. Make your changes
5. **Commit** with a clear message
6. **Push** your branch and open a PR against `main`

## What to Contribute

- **New references** — design knowledge files in `references/`
- **New workflows** — design workflows in `workflows/`
- **Stack support** — framework-specific guidance in `stacks/`
- **Templates** — reusable design templates in `templates/`
- **Standalone commands** — new `designdesk-*` skills in `standalone/`
- **Bug fixes** — corrections to existing design guidance
- **Anti-slop rules** — new patterns to catch in `references/anti-slop.md`

## Branch Naming

Use prefixes:

| Prefix | For |
|---|---|
| `feat/` | New features, references, workflows, stacks |
| `fix/` | Bug fixes, corrections |
| `docs/` | Documentation updates |
| `refactor/` | Restructuring without behavior change |

## Guidelines

- **Keep references focused.** One topic per file. Load on demand, not all at once.
- **Be opinionated.** Design Desk has a point of view. Vague advice helps nobody.
- **Test with Claude Code.** Run your changes through real design tasks before submitting.
- **No slop.** Practice what we preach — apply the anti-slop rules to your own contributions.

## Structure

```
SKILL.md                    # Router — matches requests to workflows + references
contexts/                   # Output style profiles (build, explore, review)
references/                 # Design knowledge files (loaded on demand)
stacks/                     # Framework-specific guidance
standalone/                 # Independent slash commands (designdesk-*)
templates/                  # Reusable design document templates
workflows/                  # Step-by-step design processes
```

## Pull Requests

- One logical change per PR
- Describe what the change does and why
- If adding a new reference or workflow, explain when it should be loaded
