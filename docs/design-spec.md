# Design Document: Andrew Lin Portfolio Website

## Design Intent

**Aesthetic**: Minimal, warm, editorial. Like a well-curated magazine spread — not a tech startup landing page. The warm cream background, tight letter-spacing, and generous whitespace create a sense of quiet confidence. The serif heading paired with sans-serif body evokes "designer who reads."

**Hierarchy**: Content-first. No decorative flourishes. Visual hierarchy is achieved through font size contrast, whitespace, and muted color tones — not through borders, cards, or heavy UI chrome.

**Personality**: The design says "I care about craft and restraint." Every decision (narrow content column, limited color palette, editorial spacing) reflects UX design values.

---

## Design System

### Color Palette

A near-monochrome palette with warm undertones. The warmth of the background is critical — it should never feel sterile.

| Token                  | Value       | Intent                                              |
|------------------------|-------------|-----------------------------------------------------|
| `--color-surface`      | `#f8f8f6`   | Warm cream surface — NOT white, deliberately warm   |
| `--color-text-primary` | `#000000`   | Maximum contrast for primary content                |
| `--color-text-secondary`| `#7c7c7c`  | De-emphasized text (dates, meta info)               |
| `--color-text-subtle`  | `#766d6d`   | Warm muted tone for labels — warmer than grey       |
| `--color-divider`      | `#d9d9d9`   | Subtle section separators                           |

Brand colors only appear at icon scale (24×24) — they shouldn't dominate:

| Token                  | Value       | Usage                                               |
|------------------------|-------------|-----------------------------------------------------|
| `--color-brand-jpmc`   | `#1279cd`   | JPMorgan Chase icon                                 |
| `--color-brand-shopify`| `#96bf47`   | Shopify icon                                        |
| `--color-brand-hp`     | `#024adc`   | HP icon                                             |

### Typography

**Philosophy**: Tight, editorial tracking. Serif for personality (headings only). Sans-serif for everything else. Only two font families, limited to a disciplined 5-step scale.

**Fonts**:
- **Source Serif 4** (Google Fonts) — headings only. Provides warmth and editorial character.
- **Inter** (Google Fonts) — body, nav, labels, everything else. Clean and highly legible.

**Global rule**: All text uses `letter-spacing: -0.03em` (-3%). This creates the slightly tight, editorial feel that distinguishes the design from a default web page.

| Token              | Size     | Weight   | Family          | Usage                                    |
|--------------------|----------|----------|-----------------|------------------------------------------|
| `--text-xl`        | 2rem     | 400      | Source Serif 4  | Page headings ("Hi, I'm Andrew", "Hello!")|
| `--text-lg`        | 1.5rem   | 400      | Inter           | Section headings, card titles, case study body |
| `--text-base`      | 1.125rem | 400/500  | Inter           | Body text, company names, about page copy |
| `--text-sm`        | 1rem     | 400      | Inter           | Nav links, small body text               |
| `--text-xs`        | 0.875rem | 400      | Inter           | Meta labels ("JP Morgan Chase · 2025")   |

**Weight usage**: Regular (400) is default. Medium (500) is used sparingly — section headers on the About page and bold-first-sentence in design philosophy. No bold (700) anywhere.

### Spacing Scale

Based on an **8pt grid**, normalized from the Figma values into a clean geometric progression:

| Token           | Value   | Figma ref | Usage                                          |
|-----------------|---------|-----------|------------------------------------------------|
| `--space-xs`    | 0.5rem  | ~8px      | Tight gaps (meta label → title)                |
| `--space-sm`    | 1rem    | ~16px     | Component internals (icon→text, list items)    |
| `--space-md`    | 1.5rem  | ~24px     | Within-section gaps (heading→body, philosophy items) |
| `--space-lg`    | 2rem    | ~32px     | Column gutters, section sub-gaps               |
| `--space-xl`    | 3rem    | ~48px     | Nav link gaps (from ~42px)                     |
| `--space-2xl`   | 4rem    | ~64px     | Hero column gap                                |
| `--space-3xl`   | 6rem    | ~90px     | Between case study cards                       |
| `--space-4xl`   | 9rem    | ~145px    | Major section breaks (hero → work)             |

### Layout System

**Container strategy**: Two container widths reflecting two reading modes.

| Container | Max-width | Intent                                                |
|-----------|-----------|-------------------------------------------------------|
| `--container-wide`   | 72rem (~1152px) | Front page — generous 2-column layouts     |
| `--container-narrow` | 42rem (~672px)  | Case study, about text — focused reading column, like Medium/Substack |

**Horizontal margins**: Use `clamp()` for fluid gutters — generous on desktop, tight on mobile:
```
padding-inline: clamp(1.5rem, 5vw, 10rem);
```

**Vertical rhythm**: The page breathes. Major sections are separated by `--space-4xl` (9rem). Card-level items by `--space-3xl` (6rem). Within-section elements use `--space-md` to `--space-lg`.

### Breakpoints

Mobile-first, 3 breakpoints:

| Name      | Query               | Layout changes                            |
|-----------|---------------------|-------------------------------------------|
| Default   | < 768px             | Single column, stacked everything         |
| `--bp-md` | `min-width: 48rem`  | 2-column hero, side-by-side cards         |
| `--bp-lg` | `min-width: 64rem`  | Full desktop layout, wide container       |

### Border Radius

Only used on images (case study thumbnails, about photo). A single token:

| Token              | Value    | Intent                        |
|--------------------|----------|-------------------------------|
| `--radius-image`   | 0.5rem   | Soft, approachable image corners |

### Shadows

None. The design is intentionally flat. Depth is created through whitespace and contrast, not elevation.

---

## Pages

---

### PAGE 1: Front (`index.html`)

#### Navigation (shared component across all pages)
- Flex row: logo-text left, links right, inside `--container-wide`
- "Andrew Lin" → home link. "Work" → `#work` scroll. "About" → `about.html`. "Resume" → `assets/resume.pdf` (new tab)
- `--text-sm`, `--space-xl` gap between links
- Sticky on scroll with subtle background blur on the warm cream surface
- Top padding: ~4rem from page top

#### Hero
- Two-column flex inside `--container-wide`
- **Left (~65%)**: `<h1>` "Hi, I'm Andrew." in `--text-xl` (Source Serif 4). Two subtitle lines in `--text-lg`. "JPMorgan Chase" in `--color-text-subtle` inline.
- **Right (~35%)**: Company résumé list — 4 rows, each: [24×24 colored-bg icon] [company name `--text-base`] ... [year `--text-base` in `--color-text-secondary`, right-aligned]. Rows separated by `--space-sm`. Icons use inline SVGs.
- Column gap: `--space-2xl`

#### Case Study Cards (`#work`)
- `--space-4xl` below hero. Cards separated by `--space-3xl`.
- Each card: flex row — text left (~38%), image right (~57%), gap `--space-lg`
- Text block: meta label (`--text-xs`, `--color-text-subtle`) + title (`--text-lg`, primary). Gap `--space-xs`.
- Image: `--radius-image` corners, aspect-ratio ~16:9, placeholder
- **Card 1** (JPMC): links to `case-studies/jpmc.html`
- **Card 2** (Shopify): placeholder `href="#"`
- **Card 3** (Zelle/WIP): `opacity: 0.5`, `pointer-events: none`, "Coming Soon" badge (small pill, `--text-xs`), greyed-out image

#### Footer
- Simple `<footer>` inside `--container-wide`, top border optional
- "© 2026 Andrew Lin" in `--text-sm`, `--color-text-secondary`

---

### PAGE 2: About Me (`about.html`)

#### Layout Intent
Two-column: a personal photo anchors the left, text flows on the right. The photo creates a personal, approachable feel — it's not a corporate headshot, it's a polaroid. The text column is narrow for comfortable reading.

- **Photo column** (~35%): Single image, `--radius-image`, polaroid-style. Vertically aligned with the heading.
- **Text column** (~55%): Max-width `--container-narrow`. All text content lives here.
- Gap: `--space-2xl`
- On mobile: photo stacks above text, full-width

#### Content Flow (text column)
1. **"Hello!"** — `--text-xl` (Source Serif 4). Same heading style as front page.
2. **Bio** — 2 paragraphs, `--text-base`, `--space-sm` between paragraphs. Personal narrative voice.
3. **Outside of work** — bullet list (`--text-base`). Ends with "Reach me on: **Linkedin** or via **email**" (underlined links).
4. **Design Philosophy** — `--text-base` Inter Medium header + `--color-divider` 1px rule. 3 numbered items with bold-first-sentence (Medium weight) + regular elaboration. `--space-md` between items.
5. **Education** — Same header style. "UCLA" + degree info in `--text-base`.

Section-to-section gap: `--space-lg`

---

### PAGE 3: JPMC Case Study (`case-studies/jpmc.html`)

#### Layout Intent
Long-form editorial — like reading a well-formatted Medium article. Single narrow column (`--container-narrow`) creates focused, immersive reading. Generous vertical rhythm prevents wall-of-text fatigue.

#### Content Flow (single column)

1. **Header** — meta (`--text-xs`, `--color-text-subtle`) + title (`--text-xl` or `--text-lg` depending on length). `--space-xs` gap.

2. **Hero Image** — full column width, `--radius-image`, 16:9 aspect ratio. Optional decorative rotated phone screenshot floating top-right (absolute, for visual interest — can omit initially).

3. **Project Details Grid** — 4 equal columns
   - Labels: `--text-xs`, `--color-text-subtle`
   - Values: `--text-sm`
   - Role | Team | Timeline | Platform

4. **Problem** — Section label pattern: `--text-xs` label → `--text-lg` bold statement → `--text-base` supporting paragraph

5. **Stat Cards** — 2 side-by-side, subtle background (slightly darker than surface, or a thin border), inner padding `--space-md`. Large number in `--text-lg`, description in `--text-xs`.

6. **Insight** — Same section-label pattern. Large quote-like text in `--text-lg`.

7. **Goals** — 2-column: "Business goals" | "User goals". Each: `--text-xs` header + bulleted items in `--text-base`.

8. **Design Opportunity** — HMW statement in `--text-lg`, slightly larger/italicized for emphasis.

9. **Solution** — Section label + statement. Then 3 feature rows: image left (~55%), text right (~40%), `--space-lg` gap. Image is a phone screenshot, text is a single punchy line in `--text-lg`.

10. **Impact & Validation** — Same section-label pattern.

11. **Research Phases** — 3 blocks, each: phase title (bold `--text-base`) + thumbnail + description side by side + participant count in `--text-xs`.

12. **Key Decisions** — 3 blocks: `--text-xs` label + decision text in `--text-base`. `--space-3xl` between blocks.

13. **Reflection** — `--text-xs` label + "What I've learned" heading + 2 learning items.

**Vertical rhythm between major sections**: `--space-3xl` (6rem). Within sections: `--space-md` to `--space-lg`.

---

## Case Study Building Blocks (reusable across all case studies)

The case study page is NOT a rigid template — each story will differ in structure and length. But the visual building blocks are consistent. Think of them as **LEGO bricks** that can be arranged in any order, repeated, or omitted per case study.

### Block: Case Study Header
- Meta label: `--text-xs`, `--color-text-subtle` (e.g., "JP Morgan Chase · 2025")
- Project title: `--text-xl` or `--text-lg`, `--color-text-primary`
- Gap between meta and title: `--space-xs`
- Always appears first.

### Block: Hero Image
- Full `--container-narrow` width, `--radius-image` corners
- Aspect ratio ~16:9
- Optionally has a decorative floating element (like the rotated phone on JPMC)

### Block: Details Grid
- 4 equal columns: labels in `--text-xs` `--color-text-subtle`, values in `--text-sm`
- Standard fields: Role, Team, Timeline, Platform
- Future case studies may have different/fewer fields

### Block: Section Block (the primary building block)
- Structure: `--text-xs` muted label → `--text-lg` heading or bold statement → `--text-base` supporting paragraph(s)
- Used for: Problem, Insight, Design Opportunity, Solution, Impact, Key Decisions, Reflection, or any narrative section
- The label and body are optional — some instances are just label + heading, others are label + heading + body
- `--space-xs` between label and heading, `--space-sm` between heading and body

### Block: Stat Cards
- 2 side-by-side cards (equal width, subtle background or border)
- Each: large number/metric in `--text-lg` + description in `--text-xs`
- Inner padding `--space-md`
- Number of cards may vary (2 is typical, could be 3)

### Block: Two-Column Split
- Two equal columns with `--space-lg` gap
- Each column has a `--text-xs` label header + content below
- Used for: Business vs. User goals, or any comparison/parallel structure
- Content within columns: bulleted or plain text in `--text-base`

### Block: Feature Row (image + text)
- Image left (~55%) + text right (~40%), vertically centered
- Image: `--radius-image`, phone screenshots or UI captures
- Text: a single punchy statement in `--text-lg`
- Can be repeated N times (JPMC has 3)

### Block: Research/Evidence Row (thumbnail + description)
- Smaller thumbnail left (~35%) + description text right
- Phase title in bold `--text-base`, detail text in `--text-base`, participant count in `--text-xs`
- Can be repeated per research round

### Block: Narrative Text
- Plain paragraphs in `--text-base`
- Used for transitions, supporting context, connecting sections
- No label, no special formatting

### Composition Rules
- All blocks live inside `--container-narrow`
- Major blocks separated by `--space-3xl` (6rem)
- Minor blocks (within a logical group) separated by `--space-lg` (2rem)
- The order and selection of blocks varies per case study — the JPMC arrangement is one example, not the only valid sequence

---

## Responsive Strategy

**Philosophy**: Mobile-first with `min-width` queries. The content is already narrow and readable — responsiveness is mostly about stacking columns and adjusting spacing, not redesigning.

| Breakpoint | Layout changes |
|---|---|
| **Default (<768px)** | Single column. Hero stacks (text → companies). Cards stack (text → image). About stacks (photo → text). Nav: "Andrew Lin" + links wrap or become a row. Spacing scales down ~60%. |
| **`min-width: 48rem`** | Two-column hero. Side-by-side cards. About photo + text side by side. Case study features side by side. |
| **`min-width: 64rem`** | Full desktop layout. `--container-wide` at max. Generous spacing at full scale. |

**Fluid techniques**:
- `clamp()` for container padding: `clamp(1.5rem, 5vw, 10rem)`
- `clamp()` for heading size: `clamp(1.75rem, 2vw + 1rem, 2rem)` 
- Spacing scale reduces naturally — don't need per-breakpoint overrides for every token

---

## Decisions (confirmed)

1. **WIP card** → Greyed-out with a "Coming Soon" badge. Reduced opacity, no link, muted styling on hover.
2. **Resume link** → Placeholder `resume.pdf` in repo. Link opens PDF in new tab (`target="_blank"`). Build download/view infrastructure so dropping in a new PDF is all that's needed.
3. **"About" link** → Links to a separate `about.html` page.
4. **Case study cards** → Each card links to a dedicated case study page (separate HTML file).
   - Card 1 (JPMC 2025) → `case-studies/jpmc.html`
   - Card 2 (Shopify 2023) → Empty/placeholder for now (`#`).
   - Card 3 (JPMC 2026 / Zelle) → WIP, no link.
5. **Footer** → Copyright only for now (e.g., "© 2026 Andrew Lin").
6. **Images** → Placeholder images for all case study thumbnails.
7. **Company logos** → Inline SVGs embedded directly in HTML.

---

## File Structure

```
andrewlin.github.io/
├── index.html                  # Front page (home)
├── about.html                  # About Me page
├── css/
│   └── styles.css              # All styles, CSS custom properties
├── js/
│   └── main.js                 # Scroll behavior, nav sticky, animations
├── assets/
│   ├── images/                 # Case study thumbnails, placeholders
│   └── resume.pdf              # Resume PDF placeholder (drop-in replacement)
├── case-studies/
│   ├── jpmc.html               # JPMC case study detail page
│   └── shopify.html            # Shopify placeholder (future)
├── docs/
│   ├── design-spec.md          # This file
│   └── tasks.md                # Implementation task breakdown
└── .nojekyll                   # Disable Jekyll processing on GitHub Pages
```

## GitHub Pages Setup

- `.nojekyll` at repo root to bypass Jekyll processing
- Entry point: `index.html` at repo root
- All asset paths must be **relative** (e.g., `css/styles.css`, `assets/images/...`)
- No build step required — push to `main` branch and enable GitHub Pages from Settings → Pages → Source: "Deploy from a branch" → `main` / `/ (root)`
