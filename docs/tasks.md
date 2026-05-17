# Implementation Tasks: Andrew Lin Portfolio Website

## Overview

16 tasks across 4 phases. See [design-spec.md](design-spec.md) for the full design system and page specifications.

---

## Phase 1: Foundation

### Task 1.1 — Create `.nojekyll` and folder structure
- Create empty `.nojekyll` at repo root
- Create directories: `css/`, `js/`, `assets/images/`, `case-studies/`
- Create empty placeholder `assets/resume.pdf` (or a 1-page PDF saying "Resume coming soon")

### Task 1.2 — Create `css/styles.css` with design system tokens
- `:root` block with all CSS custom properties (colors, typography sizes, spacing scale, container widths, radius)
- CSS reset / normalize (minimal — box-sizing, margin reset, img max-width)
- Global `letter-spacing: -0.03em` on body
- Google Fonts `@import` for Inter (400, 500) and Source Serif 4 (400)
- Utility classes: `.container-wide`, `.container-narrow` with `margin-inline: auto` and `padding-inline: clamp()`
- Typography classes mapping to the 5-step scale
- Base `body` styles: `background: var(--color-surface)`, `color: var(--color-text-primary)`, `font-family: Inter`

### Task 1.3 — Create shared nav + footer HTML pattern
- Write the `<header>` / `<nav>` markup (semantic, accessible) that will be copy-pasted into all pages
- Write the `<footer>` markup
- CSS for nav: flex layout, sticky positioning, backdrop blur
- CSS for footer: simple centered copyright
- *Depends on: 1.2*

---

## Phase 2: Front Page

### Task 2.1 — Build `index.html` skeleton
- Full HTML document: `<!DOCTYPE>`, `<head>` with meta tags (charset, viewport, description, OG tags), Google Fonts link, CSS link
- Semantic structure: `<header>`, `<main>`, `<section id="work">`, `<footer>`
- Paste in nav + footer from Task 1.3
- *Depends on: 1.3*

### Task 2.2 — Hero section
- Two-column flex layout (left: heading + subtitle, right: company list)
- `<h1>` with Source Serif 4, subtitle `<p>` tags with "JPMorgan Chase" wrapped in `<span>` for color
- Company list: 4 rows using inline SVG icons (simplified/placeholder versions), company name, year
- CSS: flex with gap, responsive stacking at `--bp-md`
- *Depends on: 2.1*

### Task 2.3 — Case study cards section
- 3 card components, each an `<a>` wrapping a flex row (text left + image right)
- Card 1: links to `case-studies/jpmc.html`
- Card 2: links to `#` (placeholder)
- Card 3: WIP treatment — add `.card--wip` modifier class with `opacity: 0.5`, `pointer-events: none`, position a "Coming Soon" pill badge
- Placeholder images: use a solid `var(--color-divider)` background `<div>` with aspect-ratio 16/9 as stand-in
- CSS: card layout, hover states (subtle scale or opacity shift), WIP modifier
- *Depends on: 2.1*

### Task 2.4 — Front page responsive styles
- Mobile (<48rem): stack hero columns, stack card columns (text above image), full-width
- Tablet (48rem+): unlock 2-column layouts
- Desktop (64rem+): full spacing scale
- Adjust nav: links wrap naturally on small screens (no hamburger needed given only 3 links)
- *Depends on: 2.2, 2.3*

---

## Phase 3: Subpages

### Task 3.1 — Build `about.html`
- Same `<head>`, nav, and footer as index
- Two-column layout: `<aside>` with photo placeholder (colored `<div>` with aspect ratio ~5:6), `<article>` with text content
- "Hello!" heading, bio paragraphs, bullet list with contact links (LinkedIn and email — use `#` placeholder hrefs)
- Design Philosophy: `<h2>` with divider, `<ol>` with 3 items using `<strong>` for bold-first-sentence
- Education: `<h2>` with divider, school + degree text
- Responsive: photo stacks above text on mobile
- *Depends on: 1.3* — *parallel with 3.2, 3.4*

### Task 3.2 — Build case study CSS components
- `.cs-header` — meta + title block
- `.cs-hero` — full-width image with radius
- `.cs-details` — 4-column grid with labels
- `.section-block` — the label → heading → body pattern
- `.stat-pair` — two side-by-side metric cards
- `.split-columns` — two equal columns
- `.feature-row` — image + text, vertically centered
- `.research-row` — thumbnail + description
- All with responsive stacking behavior
- *Depends on: 1.2* — *parallel with 3.1, 3.4*

### Task 3.3 — Build `case-studies/jpmc.html`
- Same `<head>`, nav, footer (paths adjusted: `../css/styles.css`, etc.)
- Compose the page using blocks from Task 3.2:
  - Header → Hero Image (placeholder div) → Details Grid → Problem section block → Stat cards (75%, ~4,000) → Insight → Goals split → Design Opportunity → Solution + 3 feature rows (placeholder images) → Impact → 3 Research phases (placeholder thumbnails) → 3 Key Decisions → Reflection
- All real text content from the Figma audit
- *Depends on: 3.2*

### Task 3.4 — Build `case-studies/shopify.html` placeholder
- Minimal page with nav + footer + a centered message: "Case study coming soon."
- *Depends on: 1.3* — *parallel with 3.1, 3.2*

---

## Phase 4: Polish *(parallel with Phase 3)*

### Task 4.1 — Create `js/main.js`
- Smooth scroll for `#work` anchor link
- Sticky nav: add/remove a `.nav--scrolled` class for background blur effect on scroll
- Subtle fade-in-on-scroll animation using `IntersectionObserver` for case study cards and section blocks
- Respect `prefers-reduced-motion`: disable animations if set
- *Depends on: 2.1*

### Task 4.2 — Hover & focus states
- Nav links: subtle color shift or underline on hover/focus
- Case study cards: gentle `transform: translateY(-2px)` or slight opacity change on hover, with `transition`
- About page links (LinkedIn, email): underline visible by default, color shift on hover
- Focus-visible rings: consistent `outline` style using `--color-text-subtle`
- *Depends on: 2.3, 3.1*

### Task 4.3 — SEO & meta tags
- All pages: `<title>`, `<meta name="description">`, Open Graph (`og:title`, `og:description`, `og:image`, `og:url`), `<meta name="viewport">`
- Semantic heading hierarchy audit: one `<h1>` per page, logical `<h2>`/`<h3>` nesting
- `<html lang="en">`
- *Depends on: all pages built*

### Task 4.4 — Accessibility pass
- All images: descriptive `alt` text (or `alt=""` for decorative)
- Nav links: ensure keyboard navigable, visible focus states
- Color contrast check: verify `--color-text-secondary` and `--color-text-subtle` pass WCAG AA on `--color-surface`
- Skip-to-content link (hidden, visible on focus)
- `aria-current="page"` on active nav link per page
- *Depends on: all pages built*

---

## Task Dependency Graph

```
1.1 ─┐
1.2 ─┼→ 1.3 ─┬→ 2.1 ─┬→ 2.2 ─┬→ 2.4
     │        │       └→ 2.3 ─┘
     │        ├→ 3.1 ──────────→ 4.2
     │        └→ 3.4
     └→ 3.2 ──→ 3.3
                              4.1 (parallel, needs 2.1)
                              4.3 (after all pages)
                              4.4 (after all pages)
```

**Parallelizable groups**:
- Tasks 3.1 + 3.2 + 3.4 can run in parallel (all depend on 1.3 or 1.2 only)
- Tasks 4.1 + 4.2 can run parallel with Phase 3
- Tasks 4.3 + 4.4 run last as a final sweep

---

## Acceptance Criteria

### Phase 1: Foundation — DONE when:
- [ ] Repo contains `.nojekyll`, `css/styles.css`, `js/main.js` (empty), `assets/images/`, `assets/resume.pdf`, `case-studies/` directory
- [ ] `styles.css` compiles (no syntax errors) and defines all `:root` custom properties: 5 color tokens, 3 brand colors, 5 type size tokens, 8 spacing tokens, 2 container widths, 1 radius token
- [ ] Opening a blank HTML file that links `styles.css` in a browser shows the warm cream background (`#f8f8f6`), Inter body font loads, and `-0.03em` tracking is applied globally
- [ ] `.container-wide` and `.container-narrow` classes center content with fluid padding and respect their max-widths
- [ ] Nav HTML pattern exists (can be pasted into any page) with correct semantic structure: `<header>` > `<nav>` with "Andrew Lin" link + 3 nav links
- [ ] Footer HTML pattern exists with `<footer>` and copyright text

### Phase 2: Front Page — DONE when:
- [ ] `index.html` opens in browser with no console errors, correct `<title>`, and meta viewport tag
- [ ] Nav is visible at top, sticks on scroll, and all 3 links point to correct targets ("Work" → smooth-scrolls to `#work`, "About" → `about.html`, "Resume" → `assets/resume.pdf` in new tab)
- [ ] Hero section displays: `<h1>` in Source Serif 4, subtitle text in Inter with "JPMorgan Chase" visually muted, company list with 4 rows of icon + name + year on the right
- [ ] At desktop width (≥1024px), hero is two columns. Below 768px, it stacks to single column (text first, companies below)
- [ ] 3 case study cards are visible below hero, each showing meta label + title on left and a placeholder image area on right
- [ ] Card 1 (JPMC) is clickable and navigates to `case-studies/jpmc.html`. Card 2 (Shopify) links to `#`
- [ ] Card 3 (Zelle) is visually greyed out with a "Coming Soon" badge, is not clickable (`pointer-events: none` or equivalent), and looks distinct from active cards
- [ ] Cards stack to single column below 768px (text above image)
- [ ] Footer is visible at bottom with copyright text
- [ ] Page passes basic HTML validation (no unclosed tags, no duplicate IDs)

### Phase 3: Subpages — DONE when:

**About page (`about.html`)**:
- [ ] Page loads with same nav and footer as index, nav "About" link is visually marked as current page
- [ ] Photo placeholder is visible on the left, text content on the right at desktop widths
- [ ] "Hello!" heading renders in Source Serif 4
- [ ] Bio paragraphs, bullet list, and contact links (LinkedIn, email) are all present and readable
- [ ] Design Philosophy section has 3 numbered items with bold first sentences and a divider line above
- [ ] Education section has UCLA info with divider line above
- [ ] On mobile (<768px), photo stacks above text content

**JPMC Case Study (`case-studies/jpmc.html`)**:
- [ ] Page loads with nav and footer, all relative paths work (`../css/styles.css`, `../assets/`, etc.)
- [ ] All 13 content sections are present with real text content from the Figma design
- [ ] Details grid shows 4 columns (Role, Team, Timeline, Platform) at desktop, stacks on mobile
- [ ] Stat cards display side-by-side at desktop, stack on mobile
- [ ] Feature rows show image + text side-by-side at desktop, stack on mobile
- [ ] Goals section shows two columns at desktop, stacks on mobile
- [ ] All placeholder images are visible as styled `<div>` placeholders (not broken `<img>` tags)
- [ ] Content column is noticeably narrower than the front page (`--container-narrow`)
- [ ] Page is scrollable and sections have generous vertical rhythm between them

**Shopify placeholder (`case-studies/shopify.html`)**:
- [ ] Page loads with nav and footer, shows centered "Case study coming soon" message

### Phase 4: Polish — DONE when:

**Interactions (4.1, 4.2)**:
- [ ] Clicking "Work" in nav smooth-scrolls to the case study section on the front page
- [ ] Nav gains a subtle background treatment (blur/opacity) when user scrolls past the hero
- [ ] Case study cards and section blocks fade in as they enter the viewport during scroll
- [ ] All animations are disabled when `prefers-reduced-motion: reduce` is set in OS settings
- [ ] Hovering over active case study cards produces a subtle visual response (transform, opacity, or color shift)
- [ ] All nav links and interactive elements show a visible focus ring when navigated via keyboard (Tab key)
- [ ] Focus ring style is consistent across the site and uses the design system's color palette

**SEO & Meta (4.3)**:
- [ ] Every page has a unique `<title>` and `<meta name="description">`
- [ ] Every page has Open Graph tags (`og:title`, `og:description`, `og:type`)
- [ ] `<html lang="en">` is set on all pages
- [ ] Each page has exactly one `<h1>`, and heading levels don't skip (no `<h1>` → `<h3>`)

**Accessibility (4.4)**:
- [ ] Every `<img>` (or image placeholder) has an `alt` attribute (descriptive or empty for decorative)
- [ ] A hidden skip-to-content link is present and becomes visible on focus
- [ ] Nav indicates the current page via `aria-current="page"`
- [ ] The site is fully navigable using only the keyboard (Tab, Enter, Escape)
- [ ] Color contrast between `--color-text-secondary` (#7c7c7c) on `--color-surface` (#f8f8f6) meets WCAG AA for large text (3:1 ratio minimum) — verify with a contrast checker
- [ ] Color contrast between `--color-text-subtle` (#766d6d) on `--color-surface` meets WCAG AA for large text

### Full Site — DONE when:
- [ ] All pages link to each other correctly (nav works from every page, case study cards link correctly, back navigation works)
- [ ] Site works when served from a local static server (`npx serve .` or `python -m http.server`)
- [ ] Site works when deployed to GitHub Pages (no broken paths, no CORS issues, no 404s)
- [ ] Resizing the browser from 320px to 1920px produces no layout breakage, overflow, or horizontal scrolling
- [ ] `git push` to `main` results in a live, working site on GitHub Pages

---

## Open Items
- [ ] Company logo inline SVGs: recreate simplified versions of JPMC, Shopify, Kayak, HP logos
- [ ] Placeholder images for case study thumbnails, about photo, and case study screenshots
- [ ] LinkedIn and email URLs for the About page contact links
- [ ] Resume PDF to drop into `assets/resume.pdf`
