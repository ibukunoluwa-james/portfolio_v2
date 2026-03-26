# Portfolio — Master Structure

This file defines how all sections connect, the design system that ties them together, and the rules for page assembly.

---

## Site Map

```
portfolio/
├── 01-navigation.md      → Sticky nav bar (present on all pages)
├── 02-hero.md            → Home / landing section
├── 03-about.md           → About Me section
├── 04-projects.md        → Projects bento grid
├── 05-resume.md          → Resume / CV section
├── 06-contact.md         → Contact form section
└── 07-footer.md          → Footer (present on all pages)
```

---

## Page Assembly Order

Sections render top-to-bottom in this exact order:

```
┌─────────────────────────────────────┐
│  01 · Navigation (sticky)           │  ← always on top, z-index: 10
├─────────────────────────────────────┤
│  02 · Hero                          │  ← first visible section
├─ ─ ─ ─ ─ ─ section divider ─ ─ ─ ─ ┤
│  03 · About Me                      │
├─ ─ ─ ─ ─ ─ section divider ─ ─ ─ ─ ┤
│  04 · Projects                      │
├─ ─ ─ ─ ─ ─ section divider ─ ─ ─ ─ ┤
│  05 · Resume                        │
├─ ─ ─ ─ ─ ─ section divider ─ ─ ─ ─ ┤
│  06 · Contact                       │
├─────────────────────────────────────┤
│  07 · Footer                        │  ← always at bottom
└─────────────────────────────────────┘
```

### Section Dividers
Between every two adjacent sections, insert:
```html
<div style="height: 0.5px; background: var(--color-border-tertiary); margin: 0 52px;"></div>
```
Dividers appear between: Hero/About, About/Projects, Projects/Resume, Resume/Contact.
No divider between Contact and Footer (footer has its own top border).

---

## Navigation Anchor Links

Each section has an `id` attribute for scroll-to navigation:

| Nav label | Section id | File |
|-----------|-----------|------|
| Home | `#home` | 02-hero.md |
| About | `#about` | 03-about.md |
| Projects | `#projects` | 04-projects.md |
| Resume | `#resume` | 05-resume.md |
| `Hire me` CTA | `#contact` | 06-contact.md |

The `Get in touch` button in the Hero section also links to `#contact`.
The `View my work` button in the Hero section links to `#projects`.
The `View all projects` button in the Projects section links to a separate `/projects` page (full portfolio listing).
The `Download CV` button in the Resume section triggers a PDF download (`/assets/jordan-davies-cv.pdf`).

---

## Design System Tokens

All sections share these values. Never override them with hardcoded alternatives.

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--o` / `--color-accent` | `#C95A14` | Orange accent — CTAs, highlights, dots, bars |
| `--ol` | `#FDF0E8` | Orange light — highlighted pill backgrounds |
| `--om` | `#F4C99A` | Orange mid — highlighted pill borders |
| `--ot` | `#7A3209` | Orange text — text on orange light backgrounds |
| `--color-background-primary` | white | Section backgrounds, cards |
| `--color-background-secondary` | off-white/light gray | Surface cards, inputs, skill panels |
| `--color-background-tertiary` | page background | Alternating section backgrounds |
| `--color-text-primary` | near-black | Headings, primary content |
| `--color-text-secondary` | medium gray | Body text, labels |
| `--color-text-tertiary` | light gray | Hints, dates, percentages |
| `--color-border-tertiary` | 0.15α black | Default borders, dividers |
| `--color-border-primary` | 0.4α black | Emphasized borders |

### Typography
| Use | Size | Weight | Notes |
|-----|------|--------|-------|
| Section titles | 42px | 500 | letter-spacing -1.8px |
| Hero name | 64px | 500 | letter-spacing -3px |
| Card headings | 15–21px | 500 | varies by context |
| Body text | 14–15px | 400 | line-height 1.75–1.85 |
| Labels / pills | 11–13px | 400–500 | varies |
| Section labels | 11px | 500 | letter-spacing 1.4px, uppercase, orange |

Font family: system sans-serif (`var(--font-sans)`)
Weights used: **400** (regular) and **500** (medium) only — never 600 or 700.

### Spacing
| Token | Value | Usage |
|-------|-------|-------|
| Section padding (sides) | 52px | All sections |
| Section padding (top/bottom) | 88px | About, Projects, Resume, Contact |
| Hero padding | 72px top, 80px bottom | Hero only |
| Nav height | 62px | Navigation |
| Card border-radius | 12px (`--border-radius-lg`) | Most cards |
| Pill border-radius | 999px | All pill/badge shapes |
| Grid gap (bento) | 16px | Projects bento grid |

### Borders
- Default: `0.5px solid var(--color-border-tertiary)`
- Emphasis: `0.5px solid var(--color-border-primary)`
- No drop shadows anywhere

---

## Alternating Background Pattern

Sections alternate between white and page-background to create visual separation without borders:

| Section | Background |
|---------|-----------|
| Navigation | `--color-background-primary` (white) |
| Hero | `--color-background-primary` (white) |
| About | `--color-background-primary` (white) |
| Projects | `--color-background-tertiary` (page bg) |
| Resume | `--color-background-primary` (white) |
| Contact | `--color-background-tertiary` (page bg) |
| Footer | `--color-background-primary` (white) |

---

## Responsive Breakpoints

| Breakpoint | Behavior |
|-----------|---------|
| `≥ 1280px` | Full desktop layout — all two-column grids active |
| `768px – 1279px` | Tablet — reduce padding to 32px, maintain two-column where space allows |
| `< 768px` | Mobile — all two-column grids collapse to single column, nav collapses to hamburger |

Mobile-specific notes per section are documented in each section's `.md` file under **Mobile Adaptations**.

---

## Content To Replace (Dummy Data)

Before going live, replace all placeholder content with real data:

| Location | Placeholder | Replace with |
|----------|------------|--------------|
| Hero name | `Jordan Davies` | Real name |
| Hero role | `Full-Stack Developer & Designer` | Real title |
| Hero bio | Dummy paragraph | Real bio |
| Profile card initials | `JD` | Real initials |
| About bio (3 paragraphs) | Dummy text | Real bio |
| Stats (3+, 50+, 20+) | Placeholder numbers | Real numbers |
| All project tiles | Dummy projects | Real projects + screenshots |
| Resume — all experience | Sample entries | Real work history |
| Resume — education | Sample entries | Real education |
| Contact email | `hello@jordandavies.dev` | Real email |
| Footer social links | `GitHub`, `LinkedIn`, `Twitter` | Real profile URLs |
| Download CV button | `/assets/jordan-davies-cv.pdf` | Real CV file path |

---

## File Checklist

To fully recreate the portfolio from these docs:

- [ ] `01-navigation.md` — build sticky nav
- [ ] `02-hero.md` — build hero section
- [ ] `03-about.md` — build about section
- [ ] `04-projects.md` — build bento grid
- [ ] `05-resume.md` — build resume timeline + skills
- [ ] `06-contact.md` — build contact form
- [ ] `07-footer.md` — build footer
- [ ] Apply design tokens from this file globally
- [ ] Insert section dividers between sections per assembly order
- [ ] Assign section ids for anchor navigation
- [ ] Replace all dummy content with real data
- [ ] Add real project screenshots to bento tiles
- [ ] Upload CV PDF and update download link
- [ ] Test responsive layout at all breakpoints
