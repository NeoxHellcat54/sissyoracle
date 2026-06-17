# The Great Oracle of Sissy Sluts — PWA Starter

A local-first guided PWA session roller with a Dark Oracle / Occult Tarot UI.

## Current flow

1. Home
2. Settings menu
3. This Sissy Slut wishes to speak with the Oracle
4. Outfit prompts, max 2
5. How do you wish to be treated?, max 2
6. Activity prompts, unlimited
7. Generated session

## Current UI

The app now uses the locked Dark Oracle / Occult Tarot direction:

- deep black/purple background
- hot pink glow accents
- gold tarot-card borders
- glowing selected prompt chips
- grouped activity sections
- revealed result cards
- mobile-first layout

## Current systems

### Outfit prompts

The app uses 20 outfit prompts:

Maid, Goth, Latex, Princess, Bimbo, Party Slut, Stripper, Schoolgirl, Lingerie, Doll, Casual Slut, Office Slut, Housewife, Pet, Cheerleader, Bride, Nurse, Pornstar, E-Girl, Emo.

Each prompt has variety pools for underwear, main outfit, overlay, legwear, shoes, hair, and makeup. Special wardrobe items can be added for any prompt. Defaults include Princess Belle dress, Princess Elsa dress, black/red/pink latex catsuits, and latex maid dress.

### Treatment prompts

Treatment prompts affect the Oracle's wording only. There is no separate Treatment section in the final result.

### Activities

The app uses 30 activity prompts, with unlimited selection. Activities can generate individual tasks or combine into task chains. Captions, confessions, messages, posts, and photo titles are generated as exact text.

## Local preview

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deployment

This can be uploaded to GitHub Pages, Netlify, Vercel, or any static host. It stores data locally in the browser using localStorage.
