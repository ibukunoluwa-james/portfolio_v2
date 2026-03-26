# Section: Navigation

## Purpose
Sticky top bar that persists across all pages/sections. Provides primary wayfinding and a conversion CTA.

---

## Layout
```
[Logo]          [Nav Links]          [CTA Button]
left-aligned    center               right-aligned
```

- Full-width bar, height: 62px
- Background: white (`--color-background-primary`)
- Bottom border: 0.5px, `--color-border-tertiary`
- Horizontal padding: 52px each side

---

## Content

### Logo
- Text: `JD.`
- `JD` — primary text color
- `.` — orange accent (`#C95A14`)
- Font: 16px, weight 500

### Nav Links
- Links: `Home` · `About` · `Projects` · `Resume`
- Font: 13px, color `--color-text-secondary`
- Gap between links: 36px
- No underlines

### CTA Button
- Label: `Hire me`
- Style: filled pill — background `#C95A14`, white text
- Font: 13px, weight 500
- Padding: 8px 20px, border-radius: 999px

---

## Behavior
- Sticky — stays at top of viewport on scroll
- Active link can be highlighted (same color as text, weight 500) to indicate current section
- On mobile: nav links collapse into a hamburger menu (3 horizontal lines, top-right)
