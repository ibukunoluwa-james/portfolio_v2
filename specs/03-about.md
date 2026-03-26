# Section: About Me

## Purpose
Introduces Jordan personally and professionally. Two-column layout: bio + stats on the left, technical skill bars on the right.

---

## Layout
```
[Section Header — centered]

[Left Column — 1fr]          [Right Column — 1.05fr]
H3 greeting                  Skills panel card
Bio paragraphs (3)
Stats grid (3 cols)
```

- Section padding: 88px top/bottom, 52px sides
- Background: white (`--color-background-primary`)
- Grid gap: 48px
- Columns: `minmax(0, 1fr)` and `minmax(0, 1.05fr)`

---

## Content

### Section Header (centered)
- Label: `ABOUT ME` — 11px, weight 500, letter-spacing 1.4px, color `#C95A14`, uppercase
- Title: `Crafting digital experiences with purpose` — 42px, weight 500, letter-spacing -1.8px, line-height 1.05
- Subtitle: `A passionate developer who loves making beautiful, functional things` — 15px, `--color-text-secondary`
- Margin-bottom: 64px

---

### Left Column — Bio

#### Greeting
- Text: `Hi, I'm Jordan`
- Font: 21px, weight 500
- Margin-bottom: 18px

#### Bio Paragraphs
Three paragraphs, each 14px, `--color-text-secondary`, line-height 1.85, margin-bottom 16px:

1. `I'm a full-stack developer with a passion for creating seamless digital experiences. With over 3 years of experience, I specialize in building modern web applications that are both beautiful and performant.`

2. `My approach combines clean code, thoughtful design, and a user-first mindset. I believe the best products are built when design and development work hand in hand.`

3. `When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing what I've learned with the developer community.`

#### Stats Grid
- 3-column grid, gap 12px, margin-top 32px
- Each stat card:
  - Background: `--color-background-secondary`
  - Border: 0.5px `--color-border-tertiary`
  - Border-radius: `--border-radius-lg` (12px)
  - Padding: 20px 8px
  - Number: 26px, weight 500, color `#C95A14`
  - Label: 11px, `--color-text-tertiary`, margin-top 4px
- Stats: `3+` / `Years exp.` · `50+` / `Projects` · `20+` / `Clients`

---

### Right Column — Skills Panel

#### Panel Container
- Background: `--color-background-secondary`
- Border: 0.5px `--color-border-tertiary`
- Border-radius: 12px
- Padding: 28px

#### Panel Heading
- Text: `Technical skills`
- Font: 15px, weight 500
- Margin-bottom: 24px

#### Skill Bars (5 bars)
Each bar row contains:
- Top row: skill name (13px, primary) + percentage (13px, `--color-text-tertiary`) — space-between
- Bar: height 3px, background `--color-border-tertiary`, border-radius 999px
- Fill: same height, background `#C95A14`, border-radius 999px
- Margin-bottom: 18px (last bar: 0)

| Skill | % |
|-------|---|
| React / Next.js | 90% |
| TypeScript | 85% |
| Tailwind CSS | 95% |
| HTML / CSS | 95% |
| Node.js | 80% |

#### Also Experienced With
- Separated by top border (0.5px `--color-border-tertiary`), padding-top 20px, margin-top 4px
- Label: `Also experienced with` — 11px, `--color-text-tertiary`
- Pills (flex-wrap, gap 7px): `GraphQL` · `Redux` · `Jest` · `CI/CD` · `REST APIs` · `WebSockets`
- Pill style: 11px, border-radius 999px, padding 4px 10px, border 0.5px `--color-border-tertiary`, background `--color-background-primary`, text `--color-text-secondary`

---

## Mobile Adaptations
- Two columns collapse to single column (bio on top, skills panel below)
- Stats grid remains 3 columns
- Skills panel goes full width
