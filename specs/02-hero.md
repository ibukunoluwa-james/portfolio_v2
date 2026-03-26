# Section: Hero (Home)

## Purpose
First impression. Communicates who Jordan is, what he does, and prompts action. Two-column layout balancing text content with a visual profile card.

---

## Layout
```
[Left Column — 1.1fr]        [Right Column — 1fr]
Status pill                  Profile Card (centered)
Name (large)
Role
Bio text
CTA buttons
Stats row
```

- Section padding: 72px top, 80px bottom, 52px sides
- Background: white (`--color-background-primary`)
- Columns gap: 48px
- Vertical alignment: center

---

## Content

### Left Column

#### Status Pill
- Layout: inline-flex, pill shape, border-radius 999px
- Background: `--color-background-secondary`
- Border: 0.5px `--color-border-tertiary`
- Contains: green dot (7px circle, `#4CAF50`) + text `Available for new projects`
- Font: 12px, `--color-text-secondary`
- Margin-bottom: 32px

#### Name
- Line 1: `Jordan` — primary text color
- Line 2: `Davies` — orange accent `#C95A14`
- Font: 64px, weight 500, letter-spacing -3px, line-height 1.0
- Margin-bottom: 8px

#### Role
- Text: `Full-Stack Developer & Designer`
- Font: 19px, `--color-text-secondary`, letter-spacing -0.3px
- Margin-bottom: 22px

#### Bio
- Text: `I craft elegant digital experiences that blend beautiful design with powerful functionality — specializing in modern web applications that users love.`
- Font: 15px, `--color-text-secondary`, line-height 1.75
- Max-width: 460px
- Margin-bottom: 40px

#### CTA Buttons
- Arranged: flex row, gap 12px
- Margin-bottom: 52px
- Button 1 — `View my work`: filled, background `#C95A14`, white text, border-radius 999px, padding 13px 30px, font 14px weight 500
- Button 2 — `Get in touch`: outline, transparent background, primary text, border 0.5px `--color-border-primary`, same sizing

#### Stats Row
- Flex row, gap 48px
- Separated by thin vertical dividers (0.5px, `--color-border-tertiary`)
- 3 stats:
  - `3+` / `Years experience`
  - `50+` / `Projects shipped`
  - `20+` / `Happy clients`
- Number: 26px, weight 500, letter-spacing -0.5px
- Label: 12px, `--color-text-tertiary`, margin-top 3px

---

### Right Column — Profile Card

#### Card Container
- Background: `--color-background-secondary`
- Border: 0.5px `--color-border-tertiary`
- Border-radius: 24px
- Padding: 32px 28px
- Width: 300px
- Position: relative (for floating badges)

#### Card Contents (top to bottom)
1. **Avatar circle** — 72px diameter, background `#C95A14`, white text `JD`, font 24px weight 500
2. **Name** — `Jordan Davies`, 17px weight 500
3. **Role** — `Full-Stack Developer & Designer`, 13px `--color-text-secondary`, margin-bottom 22px
4. **Divider** — 0.5px `--color-border-tertiary`
5. **Skills pills** (flex-wrap, gap 7px):
   - Highlighted (orange): `React`, `Node.js`, `Next.js` — background `#FDF0E8`, text `#7A3209`, border `#F4C99A`
   - Neutral: `TypeScript`, `UI/UX`, `Figma` — background `--color-background-primary`, border `--color-border-tertiary`
   - Font: 11px, border-radius 999px, padding 4px 10px

#### Floating Badges
Two small pill-shaped labels that float outside the card edges:

- **Top-right badge** (`top: -18px, right: -28px`):
  - Orange dot + text `Open to work`
  - Background: `--color-background-primary`, border: 0.5px `--color-border-tertiary`
  - Border-radius: 12px, padding: 9px 15px, font: 12px weight 500

- **Bottom-left badge** (`bottom: -18px, left: -28px`):
  - Star SVG icon (orange fill `#C95A14`) + text `Top-rated freelancer`
  - Same styling as top badge

---

## Mobile Adaptations
- Columns collapse to single column (left content on top, profile card below)
- Name reduces to 40px
- Profile card goes full width within padding
- Buttons go full-width (flex: 1 each)
- Stats row stays as flex row with dividers
