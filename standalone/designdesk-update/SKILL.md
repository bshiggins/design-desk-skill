---
name: designdesk-update
description: "Update Design Desk skill to latest version"
allowed-tools:
  - Bash
  - Read
  - AskUserQuestion
---

<objective>
Check for Design Desk skill updates, show what changed, and pull the latest version.
</objective>

<process>
1. **Read current version.**
   ```bash
   cat ~/.claude/design-desk-skill/VERSION
   ```

2. **Fetch remote and compare.**
   ```bash
   git -C ~/.claude/design-desk-skill fetch origin --quiet
   LOCAL=$(git -C ~/.claude/design-desk-skill rev-parse HEAD)
   REMOTE=$(git -C ~/.claude/design-desk-skill rev-parse origin/main)
   ```

3. **If up to date:** Tell the user and stop.

4. **If update available:** Show what changed.
   ```bash
   git -C ~/.claude/design-desk-skill log --oneline HEAD..origin/main
   ```
   Also show the new version:
   ```bash
   git -C ~/.claude/design-desk-skill show origin/main:VERSION
   ```

5. **Ask for confirmation.** Show the changelog and ask: "Update Design Desk to [version]?"

6. **Pull the update.**
   ```bash
   git -C ~/.claude/design-desk-skill pull origin main
   ```

7. **Clear the update cache.**
   ```bash
   rm -f ~/.cache/designdesk/update-check.json
   ```

8. **Confirm.** Tell the user the update is complete and they should restart their session for changes to take effect.
</process>

<rules>
- Always show what changed before pulling.
- Never force-pull or reset. If there are local changes, warn the user.
- Clear the cache after updating so the session-start hook doesn't show a stale notification.
</rules>
