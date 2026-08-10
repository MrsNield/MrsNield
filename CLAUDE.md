# Mrs. Nield's Math Classes — Class Website

A static site for three courses (Honors Precalculus, Precalculus, AP Calculus AB), deployed via GitHub Pages from this repo (`MrsNield/MrsNield`). No build step — `index.html` is opened directly by GitHub Pages.

## Architecture

- **`data.js`** — the only file that should change for day-to-day content updates (progress status, bellringers, board work, practice, videos). Defines the global `SITE_DATA` object.
- **`script.js`** — pure rendering engine. Reads `SITE_DATA` and builds the DOM. Should not need edits for routine content updates — only when adding a new tab/section/behavior.
- **`index.html`** — static shell (header, `<style>` block, two empty containers `#courseTabs`/`#mainContent`) plus the two `<script>` tags. No content lives here.

Load order matters: `data.js` must load before `script.js`.

## Data model (`SITE_DATA`)

- `courses` — top-level tab list (`honors`, `precalc`, `apcalc`) with a `ready` flag; unready courses show a placeholder message instead of their tab content.
- `honors` — the fully-built course:
  - `units[].objectives[]` — each objective has an `id` (e.g. `"1-1"`), `status` (`not-started` / `in-progress` / `covered`), and `basic`/`intermediate`/`advanced` rubric tiers.
  - `dailyLog` — `{date, objective}` entries powering "What Did I Miss?".
  - `boardWork` — `{date, objective, caption, image}`, image path under `images/board/`.
  - `bellringers` — `{date, prompt, image?}`; auto-hidden until 4:00 PM local time on their date (`BELLRINGER_REVEAL_HOUR` in `script.js`), then permanently visible.
  - `vocab`, `graphPractice`, `practice`, `videos`, `deltamath` — all keyed by objective id.
  - `graphPractice[].image` paths point at `images/graphs/` — these are unlabeled reference graphs of the 12 parent functions, reused across objectives (not per-day photos).
  - `rubricFile` — path to the downloadable PDF in `files/`.
- `precalc` — pre-planned course calendar (`units[].schedule[]`, each a `{date, type, label}` where `type` is `lesson`/`homework`/`quiz`/`review`/`test`/`final`), built ahead of time per unit instead of logged day-by-day like Honors. Also has its own `bellringers` array.
- `apcalc` — currently just a placeholder `message`.

## Image folders

- `images/graphs/` — the 12 static parent-function reference images (linear, quadratic, cubic, absolute_value, square_root, cube_root, reciprocal, exponential, logarithmic, sine, cosine, step_function). Fixed set, rarely changes.
- `images/board/`, `images/bellringers/` — day-specific photos added over the course of the year, referenced by date from `data.js`. Currently empty (`.gitkeep` placeholders).

## Workflow

- This folder is a git clone of `https://github.com/MrsNield/MrsNield` — edit, commit, and push here rather than uploading files through the GitHub web UI.
- A near-duplicate copy lives at `../Website/precalc-website/` (older, predates this clone, not connected to git). Treat **this** folder as canonical going forward.
- After editing `data.js`, sanity-check by opening `index.html` and clicking through the affected tab before pushing — there's no test suite.
