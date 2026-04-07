# UX Writing Reference

Every word in a UI is a design decision. Words guide, reassure, and reduce friction — or they confuse, frustrate, and slow people down.

## Core Rule

**Make every word earn its place.** If removing a word doesn't change the meaning, remove it.

- "Please click the button below to submit your form" → "Submit"
- "There are currently no items in your cart" → "Your cart is empty"
- "An error has occurred while processing your request" → "Something went wrong. Try again."

## Labels & Buttons

### Buttons
Use action verbs. The button should say what it DOES, not what it IS.

| Bad | Good | Why |
|---|---|---|
| Submit | Save changes | Specific action |
| OK | Confirm deletion | States the consequence |
| Click here | Download PDF | Describes the outcome |
| Yes | Remove item | No ambiguity |

### Form Labels
- Short, specific, no punctuation
- "Email address" not "Please enter your email address:"
- "Password" not "Your Password"
- Use sentence case, not Title Case (except proper nouns)

### Navigation
- 1-2 words per nav item
- Use nouns for sections ("Dashboard", "Settings"), verbs for actions ("Create", "Import")
- Avoid jargon unless your audience expects it

## Error Messages

### The Formula
**What happened** + **Why** (if helpful) + **What to do next**

| Bad | Good |
|---|---|
| "Error 404" | "Page not found. Check the URL or go back to the homepage." |
| "Invalid input" | "Password must be at least 8 characters." |
| "Request failed" | "Couldn't save. Check your connection and try again." |
| "Unauthorized" | "You don't have access to this page. Contact your admin." |

### Rules
- Be specific, not generic
- Don't blame the user ("You entered an invalid email" → "This email format isn't valid")
- Include the fix, not just the problem
- Use plain language, not error codes (unless for developers)
- Place errors inline, next to the field — not in a banner at the top of the page

## Empty States

Empty states are the first impression for new features. They teach the interface.

### The Pattern
```
[Relevant illustration or icon]
[Clear headline: what's missing]
[Brief explanation: why it's empty and what goes here]
[Primary CTA: the action that fills this screen]
```

### Examples
- **No messages:** "No messages yet. Start a conversation with your team."
- **Empty dashboard:** "Your dashboard is waiting. Add your first widget to get started."
- **No search results:** "No results for 'xyz'. Try different keywords or check your filters."

### Rules
- Never just say "No data" or show a blank screen
- The CTA should be the primary action for this screen
- Match the tone to the product (playful for consumer, professional for enterprise)

## Confirmations & Destructive Actions

- Confirmation dialogs: state what will happen, not "Are you sure?"
  - Bad: "Are you sure you want to delete?"
  - Good: "Delete 'Project Alpha'? This can't be undone."
- Success messages: brief, then get out of the way
  - "Saved" (toast, 3 seconds, auto-dismiss)
  - "Email sent to team@company.com" (specific)

## Tone Guidelines

Match tone to the moment:

| Moment | Tone | Example |
|---|---|---|
| Success | Brief, positive | "Done." / "Saved." |
| Error | Calm, helpful | "Something went wrong. Try again." |
| Empty state | Encouraging | "Get started by creating your first project." |
| Destructive action | Direct, serious | "Delete this permanently? You can't undo this." |
| Loading | Invisible or minimal | Progress bar. No "Please wait..." |
| Onboarding | Friendly, guiding | "Welcome. Let's set up your workspace." |

## Words to Avoid in UI

| Avoid | Use instead | Why |
|---|---|---|
| Please | (just say the thing) | UI isn't a letter |
| Successfully | (omit) | If it worked, the state shows it |
| Error occurred | (be specific) | Vague and scary |
| Invalid | (explain what's wrong) | Cold and unhelpful |
| Oops | (be specific) | Feels dismissive for real errors |
| Click here | (label the action) | Screen readers need descriptive links |
| Hey there! | (skip the greeting) | Wastes space in UI |
