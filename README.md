# Andrew Lin Portfolio

Static portfolio site built with plain HTML, CSS, and JavaScript for GitHub Pages.

## Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts (`Inter`, `Source Serif 4`)
- GitHub Pages for hosting

There is no build step, package manager, or bundler required.

## Project Structure

```text
.
├── index.html
├── about.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   └── resume.pdf
├── case-studies/
│   ├── jpmc.html
│   └── shopify.html
├── docs/
│   ├── design-spec.md
│   └── tasks.md
└── .nojekyll
```

## Run Locally

Because this site uses relative paths, run it through a local static server instead of opening the HTML files directly in the browser.

### Option 1: Python

If Python is installed:

```powershell
python -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000/
```

### Option 2: VS Code Live Server

If you use the Live Server extension in VS Code:

1. Open the repo in VS Code
2. Right-click `index.html`
3. Select `Open with Live Server`

### Option 3: Any Static Server

Any simple static file server will work as long as it serves the repo root.

## Local Setup Checklist

1. Clone the repo
2. Open it in your editor
3. Start a local static server from the repo root
4. Visit `index.html` through the server URL
5. Verify these pages load:
   - `/`
   - `/about.html`
   - `/case-studies/jpmc.html`
   - `/case-studies/shopify.html`

## Content to Replace

These placeholders are expected to be swapped with real content:

- `assets/resume.pdf`
- Placeholder image blocks across the homepage and case study pages
- About page portrait placeholder
- LinkedIn and email links in `about.html`
- Inline SVG logos if higher-fidelity versions are needed

## Editing Notes

- Keep all asset paths relative so the site works on GitHub Pages
- Main design system tokens live in `css/styles.css`
- Shared interaction logic lives in `js/main.js`
- The case study page uses reusable layout blocks documented in `docs/design-spec.md`

## GitHub Pages Setup

This repo is already configured for static hosting with `.nojekyll`.

To publish on GitHub Pages:

1. Push the repo to GitHub
2. Open the repository settings
3. Go to `Pages`
4. Set Source to `Deploy from a branch`
5. Select the `main` branch and `/ (root)` folder
6. Save and wait for the deployment to finish

## Validation

A quick local validation flow:

```powershell
python -m http.server 8000
```

Then verify:

- `http://127.0.0.1:8000/`
- `http://127.0.0.1:8000/about.html`
- `http://127.0.0.1:8000/case-studies/jpmc.html`
- `http://127.0.0.1:8000/case-studies/shopify.html`

## Reference Docs

- `docs/design-spec.md` — design system and page spec
- `docs/tasks.md` — implementation breakdown and acceptance criteria
