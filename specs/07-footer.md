# Section: Footer

## Purpose
Closes the page. Minimal — logo, copyright, and social links in a single horizontal bar.

---

## Layout
```
[Logo]          [Copyright text]          [Social links]
left            center                    right
```

- Padding: 28px top/bottom, 52px sides
- Background: white (`--color-background-primary`)
- Top border: 0.5px `--color-border-tertiary`
- Flex row, align-items center, justify-content space-between

---

## Content

### Logo
- Text: `JD.`
- `JD` — primary text color
- `.` — orange `#C95A14`
- Font: 14px, weight 500

### Copyright
- Text: `© 2025 Jordan Davies. All rights reserved.`
- Font: 12px, `--color-text-tertiary`
- Centered

### Social Links
- Flex row, gap 24px
- Links: `GitHub` · `LinkedIn` · `Twitter`
- Font: 12px, `--color-text-secondary`
- No underlines
- Each links to respective profile URL (to be filled in)

---

## Mobile Adaptations
- Collapses to single column, center-aligned
- Order: Logo → Copyright → Social links (stacked vertically)
- Gap between items: 12px
