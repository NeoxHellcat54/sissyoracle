# The Great Oracle of Sissy Sluts — PWA Starter

A basic offline-first PWA fantasy/session generator.

## What it includes

- Multi-select "Offerings" tag system
- Reality level selector
- Exposure style selector
- Sluttiness selector
- Outfit generation without a clothing list
- Chore vault stored in localStorage
- Broad wardrobe/sharing settings
- Session result card
- Regenerate / soften / sluttier / fantasy / realistic adjustment buttons
- Saved sessions stored locally
- Basic PWA manifest and service worker

## How to run locally

Use any static server. For example:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## How to upload to GitHub

1. Create a new GitHub repository.
2. Upload these files to the repository root:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `manifest.json`
   - `sw.js`
   - `README.md`
3. Enable GitHub Pages from the repository settings.
4. Set Pages source to your main branch/root folder.

## Main files to edit

- `app.js`: tags, outfit templates, generation rules, settings, chores, saved sessions.
- `styles.css`: visual theme.
- `index.html`: layout and controls.

## Notes

This starter treats generated sessions as optional fantasy/roleplay prompts. It does not include punishment, rewards, forced completion, accounts, cloud sync, or analytics.
