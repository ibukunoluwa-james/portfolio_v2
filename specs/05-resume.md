# Section: Resume

## Purpose
Presents work history, education, and skills in a structured two-column layout. A download button provides instant CV access.

---

## Layout
```
[Section Header — left] [Download CV button — right]

[Left Column — 1.1fr]        [Right Column — 1fr]
Work experience timeline     Technical proficiency card
Education timeline           Tools & workflow card
                             Soft skills card
```

- Section padding: 88px top/bottom, 52px sides
- Background: white (`--color-background-primary`)
- Grid: `minmax(0, 1.1fr)` and `minmax(0, 1fr)`, gap 32px

---

## Content

### Section Header Row
Left side (stacked):
- Label: `RESUME` — 11px, weight 500, letter-spacing 1.4px, `#C95A14`, uppercase
- Title: `Experience & background` — 42px, weight 500, letter-spacing -1.8px
- Subtitle: `My journey — where I've worked, studied, and what I bring` — 15px, `--color-text-secondary`

Right side:
- **Download CV button**
  - Icon: download arrow SVG (white, 14px)
  - Label: `Download CV`
  - Style: inline-flex, background `#C95A14`, white text, border-radius 999px, padding 11px 22px, font 13px weight 500
  - Aligned to top-right of the header row

---

## Left Column — Timeline

### Timeline Item Structure
Each item uses:
```
[Dot + vertical line]   [Card]
```
- Left side: 10px orange dot (`#C95A14`) with 2px border (`#FDF0E8`), aligned top. Vertical line (1px, `--color-border-tertiary`) extends downward (omit on last item of each group)
- Right side: card — flex 1, margin-bottom 24px (last: 0)

### Timeline Card Structure
- Background: `--color-background-secondary`
- Border: 0.5px `--color-border-tertiary`
- Border-radius: 12px
- Padding: 16px 18px
- Top row (space-between): **Role** (14px, weight 500) + **Date** (11px, `--color-text-tertiary`, white-space nowrap)
- Company name: 12px, `#C95A14`, weight 500, margin-bottom 8px
- Description: 12px, `--color-text-secondary`, line-height 1.7

---

### Work Experience Group

Timeline heading: `Work experience` — 13px weight 500, with a flex line extending right (0.5px `--color-border-tertiary`)

**Item 1**
- Role: Full-Stack Developer Intern
- Date: 2024 – 2025
- Company: Saiket Systems
- Description: Developed and maintained web applications using React, Node.js, and MySQL. Collaborated on feature implementation, bug fixes, and performance optimization.

**Item 2**
- Role: Volunteer Full-Stack Developer
- Date: 2023 – 2025
- Company: Go with Fund.org
- Description: Improved website UI/UX, managed CI/CD pipelines for streamlined deployment, and contributed to database design and optimization.

**Item 3** *(last item — no vertical line)*
- Role: Freelance Developer & Designer
- Date: 2022 – present
- Company: Self-employed
- Description: Built websites and web apps for 20+ clients across various industries. Handled design to deployment including ongoing maintenance.

---

### Education Group

Timeline heading: `Education` — same style as work heading

**Item 1**
- Role: BSc Computer Science
- Date: 2024 – 2028
- Company: Covenant University
- Description: Transitioned from Industrial Mathematics. Building strong foundations in algorithms and software engineering.

**Item 2** *(last item — no vertical line)*
- Role: Self-taught Development
- Date: 2021 – present
- Company: freeCodeCamp, Udemy & docs
- Description: Continuously learning through projects, courses, and open-source contributions. Strong believer in learning by building.

---

## Right Column — Skills Cards

Three stacked cards, margin-bottom 16px between each (last: 0).

### Card Base Style
- Background: `--color-background-secondary`
- Border: 0.5px `--color-border-tertiary`
- Border-radius: 12px
- Padding: 22px
- Card title: 13px, weight 500, margin-bottom 16px

---

### Card 1 — Technical Proficiency

Skill bars (same structure as About section):
- Bar height: 3px, background `--color-border-tertiary` / fill `#C95A14`, border-radius 999px
- Label + % on top row, bar below
- Margin-bottom 14px each (last: 0)

| Skill | % |
|-------|---|
| React / Next.js | 90% |
| TypeScript | 85% |
| Tailwind CSS | 95% |
| Node.js | 80% |
| Python | 70% |
| SQL / Databases | 78% |

---

### Card 2 — Tools & Workflow

Flex-wrap pill grid, gap 7px:
- Highlighted (orange): `Git & GitHub`, `Figma`
- Neutral: `Docker`, `CI/CD`, `REST APIs`, `GraphQL`, `Jest`, `Vercel`, `Linux`, `VS Code`

Pill style: 11px, border-radius 999px, padding 4px 10px, border 0.5px

---

### Card 3 — Soft Skills

2-column grid, gap 8px:

Each item:
- Background: `--color-background-primary`
- Border: 0.5px `--color-border-tertiary`
- Border-radius: 8px
- Padding: 8px 12px
- Orange dot (6px) + label text (12px, `--color-text-secondary`)

Items: `Problem-solving` · `Adaptability` · `Communication` · `Teamwork` · `Attention to detail` · `Self-directed`

---

## Mobile Adaptations
- Two columns collapse to single column (timeline on top, skills cards below)
- Download CV button moves below the section subtitle
- Timeline cards go full width
- Skills cards go full width
