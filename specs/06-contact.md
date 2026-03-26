# Section: Contact

## Purpose
Conversion section — makes it easy for visitors to reach out. Two-column layout with availability/info on the left and the contact form on the right.

---

## Layout
```
[Section Header — centered]

[Left Column — 1fr]           [Right Column — 1.5fr]
Availability banner           Contact form
Email info row
Location info row
Response time info row
```

- Section padding: 88px top/bottom, 52px sides
- Background: `--color-background-tertiary`
- Inner max-width: 920px, centered with `margin: 0 auto`
- Grid: `minmax(0, 1fr)` and `minmax(0, 1.5fr)`, gap 28px

---

## Content

### Section Header (centered)
- Label: `CONTACT` — 11px, weight 500, letter-spacing 1.4px, `#C95A14`, uppercase
- Title: `Let's work together` — 42px, weight 500, letter-spacing -1.8px
- Subtitle: `Have a project in mind or just want to say hello? I'd love to hear from you.` — 15px, `--color-text-secondary`
- Margin-bottom: 60px

---

## Left Column

### Availability Banner
- Background: `#C95A14` (solid orange)
- Border-radius: 12px
- Padding: 22px 20px
- Layout: flex row, align-items center, gap 14px

**Ring icon:**
- 36px circle, background `rgba(255,255,255,0.2)`, border-radius 50%
- Inner: 12px white circle centered inside ring

**Text block:**
- Title: `Available for work` — 14px, weight 500, white
- Subtitle: `Open to freelance & full-time roles` — 12px, `rgba(255,255,255,0.72)`, margin-top 2px

---

### Info Rows (3 rows)

Each row:
- Background: `--color-background-primary`
- Border: 0.5px `--color-border-tertiary`
- Border-radius: 12px
- Padding: 18px 20px
- Layout: flex row, align-items center, gap 14px
- Margin-bottom: 14px

**Icon container:** 38px square, border-radius 8px, background `#FDF0E8`, centered SVG icon (17px, stroke `#C95A14`)

**Text block:**
- Label: 11px, `--color-text-tertiary`, uppercase, letter-spacing 0.8px, margin-bottom 3px
- Value: 13px, weight 500, `--color-text-primary`

| Icon type | Label | Value |
|-----------|-------|-------|
| Envelope SVG | EMAIL | hello@jordandavies.dev |
| Pin/location SVG | LOCATION | Remote — worldwide |
| Clock SVG | RESPONSE TIME | Within 24 hours |

---

## Right Column — Contact Form

### Form Container
- Background: `--color-background-primary`
- Border: 0.5px `--color-border-tertiary`
- Border-radius: 12px
- Padding: 32px 28px

### Form Fields

**Row 1 — Two column grid (gap 16px):**
- Field: `Your name` — placeholder: `Jordan Smith`
- Field: `Email address` — placeholder: `you@example.com`

**Row 2 — Full width:**
- Field: `Subject` — placeholder: `Project inquiry`

**Row 3 — Full width textarea:**
- Field: `Message` — placeholder: `Tell me about your project...`
- Height: 108px, resize: none

**Field styling (all inputs):**
- Width: 100%
- Padding: 10px 14px
- Border: 0.5px `--color-border-tertiary`
- Border-radius: 8px
- Font: 14px, `--color-text-primary`
- Background: `--color-background-secondary`
- Focus: border-color `#C95A14`, outline none
- Label: 12px, `--color-text-secondary`, display block, margin-bottom 7px
- Margin-bottom: 16px per row

### Submit Button
- Label: `Send message`
- Full width
- Background: `#C95A14`, white text
- Border: none, border-radius 8px
- Padding: 13px
- Font: 14px, weight 500
- Margin-top: 4px

---

## Mobile Adaptations
- Two columns collapse to single column (info rows on top, form below)
- Availability banner stays full width
- Form fields stay full width (two-col row becomes single column)
- Submit button stays full width
