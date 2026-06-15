# The Great Oracle of Sissy Sluts — Guided PWA Starter

A small offline-first PWA fantasy/session roller.

## Current flow

1. Home page
   - Speak with the Oracle
   - Settings menu
   - Saved sessions

2. Outfit step
   - The Oracle asks: “So then, how is this Sissy Slut imagining her outfit?”
   - User selects up to 2 outfit prompts.

3. Treatment step
   - The Oracle asks: “How do you wish to be treated?”
   - User selects up to 2 treatment prompts.

4. Activity step
   - The Oracle asks: “What would you like to do today?”
   - User selects as many activity prompts as desired.

5. Result
   - Concrete outfit
   - Treatment tone
   - Specific task list generated from the selected activities

## Preview locally

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Files

- `index.html` — guided page flow
- `styles.css` — layout and theme
- `app.js` — prompts, templates, settings, chore list, generator logic
- `manifest.json` — PWA metadata
- `sw.js` — offline cache
