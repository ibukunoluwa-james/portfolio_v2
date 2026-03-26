# Section: Projects

## Purpose
Showcases selected work in a bento grid layout. One featured project gets a large tile; remaining projects fill smaller tiles. Filter buttons allow category-based browsing.

---

## Layout
```
[Section Header — centered]
[Filter Buttons — centered]

[Bento Grid — 12 column]
[Featured tile — 7 cols] [Medium tile — 5 cols]
[Small tile — 4 cols] [Small tile — 4 cols] [Small tile — 4 cols]

[View all projects button — centered]
```

- Section padding: 88px top/bottom, 52px sides
- Background: `--color-background-tertiary`
- Bento grid: `grid-template-columns: repeat(12, minmax(0, 1fr))`, gap 16px

---

## Content

### Section Header (centered)
- Label: `PROJECTS` — 11px, weight 500, letter-spacing 1.4px, `#C95A14`, uppercase
- Title: `Things I've built` — 42px, weight 500, letter-spacing -1.8px
- Subtitle: `A selection of projects across design and development` — 15px, `--color-text-secondary`
- Margin-bottom: 20px

### Filter Buttons
- Centered flex row, gap 8px, margin-bottom 44px
- Buttons: `All` (active) · `Full-stack` · `Frontend` · `UI/UX`
- Default style: 12px, padding 7px 18px, border-radius 999px, border 0.5px `--color-border-tertiary`, background `--color-background-secondary`, text `--color-text-secondary`
- Active style: background `#C95A14`, text white, border-color `#C95A14`

---

## Tile Structure

Every tile shares:
- Background: `--color-background-primary`
- Border: 0.5px `--color-border-tertiary`
- Border-radius: 16px
- Overflow: hidden
- Flex-direction: column

Each tile has 3 zones: **Thumbnail**, **Body**, **Footer**

### Thumbnail
- Full-width, fixed height (varies by tile size — see below)
- Contains:
  - Abstract CSS pattern (colored grid cells at 28% opacity) as placeholder until real screenshots are added
  - Category tag pill (bottom-left overlay): 11px, white background, border, border-radius 999px
  - Featured badge (top-left, featured tile only): `Featured` — orange background `#C95A14`, white text, 11px, border-radius 999px, padding 5px 12px

### Body
- Padding: 18px (featured: 22px)
- Title: 15px weight 500, primary text (featured: 20px)
- Description: 13px, `--color-text-secondary`, line-height 1.7, flex: 1 (hidden on small tiles)

### Footer
- Flex row, space-between, aligned center
- Stack pills (flex-wrap, gap 6px):
  - Highlighted: background `#FDF0E8`, text `#7A3209`, border `#F4C99A`
  - Neutral: background `--color-background-secondary`, `--color-border-tertiary`
  - Font: 11px, border-radius 999px, padding 4px 10px
- Arrow button: 32px circle, border 0.5px `--color-border-tertiary`, background `--color-background-secondary`, diagonal arrow SVG, margin-left 12px

---

## Projects Data

### Featured Tile (7 columns, thumbnail height 240px)
- **Title:** Analytics Dashboard
- **Description:** A real-time data visualization platform built for a SaaS client, featuring custom charts, advanced filters, and team collaboration tools. Handles 50k+ events per day with sub-100ms query times.
- **Category tag:** Full-stack
- **Thumbnail color:** `#FDF0E8` (orange tint)
- **Stack:** `React` (hi), `Node.js` (hi), `PostgreSQL`, `Tailwind`, `Redis`

### Medium Tile (5 columns, thumbnail height 180px)
- **Title:** Storefront Platform
- **Description:** Full-featured e-commerce with product management, cart, Stripe payments, and a custom CMS for store owners.
- **Category tag:** Full-stack
- **Thumbnail color:** `#EDF2FB` (blue tint)
- **Stack:** `Next.js` (hi), `TypeScript` (hi), `Stripe`

### Small Tile 1 (4 columns, thumbnail height 140px)
- **Title:** UI Component Library
- **Category tag:** Frontend
- **Thumbnail color:** `#F0EEFF` (purple tint)
- **Stack:** `React` (hi), `Storybook`
- *No description shown*

### Small Tile 2 (4 columns, thumbnail height 140px)
- **Title:** Habit Tracker App
- **Category tag:** Mobile
- **Thumbnail color:** `#EDFAF3` (green tint)
- **Stack:** `React Native` (hi), `SQLite`
- *No description shown*

### Small Tile 3 (4 columns, thumbnail height 140px)
- **Title:** REST API Boilerplate
- **Category tag:** Backend
- **Thumbnail color:** `#FFF8F0` (warm tint)
- **Stack:** `Node.js` (hi), `Docker`
- *No description shown*

---

## View All Button
- Centered, margin-top 36px
- Label: `View all projects`
- Style: outline pill — transparent background, border 0.5px `--color-border-primary`, primary text, padding 12px 32px, font 14px, border-radius 999px

---

## Note on Thumbnails
Thumbnail patterns are placeholder CSS grids. Replace with real project screenshots (object-fit: cover) when available. The pattern opacity (0.28) and category tag overlay remain regardless.

---

## Mobile Adaptations
- Bento grid collapses to single column
- All tiles stack vertically, full width
- Descriptions shown on all tiles (no hiding)
- Featured badge and category tag still shown
