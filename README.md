# Dressed & Dared

A GitHub-ready static PWA for rolling:

- a hard-coded category/color outfit
- one fully random user-filled location
- a user-selected number of fully random, non-duplicate dares

The app uses local storage only. No accounts, Firebase, or backend.

## Current locked rules

### Outfit

- Clothing categories are hard-coded.
- The user only checks available colors per category.
- No item types.
- If a category has no checked colors, it is skipped.
- Normal outfit rolls have a 30% matching-color chance and a 70% mixed-color chance.
- If the user owns shop outfits, outfit source is 75% normal random outfit and 25% shop outfit.

### Locations

- User-filled plain list.
- No categories.
- No intensity.
- Full randomness.
- One location is rolled.

### Dares

- User-filled plain list.
- No categories.
- No intensity.
- No placeholders.
- User chooses how many dares to roll.
- Same dare cannot appear twice in the same roll.

### Exhys

- Each rolled dare gets a reward from 30 to 70 Exhys.
- Lower values are more likely.
- Weight formula: `weight = 2 - ((amount - 30) / 40)`.
- Total roll reward is the sum of each dare reward.
- The user claims Exhys by pressing **Mark as Done**.

### Shop

Shop categories:

- Themes
- Roll Effects
- Outfits

Every purchase globally increases all future shop prices by 10% compounded.

Formula:

```js
currentPrice = basePrice * Math.pow(1.1, totalPurchases)
currentPrice = Math.ceil(currentPrice * 10) / 10
```

### Purchasable outfit rarity roster

Common:

- Angel Lingerie — all white lingerie and heels only
- Devil Lingerie — black and red heels and lingerie only
- Casual Girly — jeans, trainers, t-shirt
- Elegant Girly — elegant dress and heels

Rare:

- Cheerleader
- Maid
- Schoolgirl
- Goth

Epic:

- Princess Belle Cosplay
- Elsa Cosplay

Legendary:

- Latex Maid
- Latex Doll

## Deploy on GitHub Pages

1. Create a new GitHub repository.
2. Upload all files from this folder.
3. Open the repository settings.
4. Go to **Pages**.
5. Set the source to your main branch and root folder.
6. Save.

GitHub Pages will host the app as a static PWA.

## Local testing

Open `index.html` directly, or run a small local server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```
