---
name: add-acts-chapter
description: Use when adding or implementing a chapter of Acts in the bible-fun project, including chapter JSON, the Acts manifest entry, inline fallback manifest, and static chapter route.
---

# Add Acts Chapter

Use this skill in `/root/projects/bible-fun` when the task is to add, enable, or finish a chapter of Acts.

## Project Shape

- Main library page: `index.html`
- Manifest source: `data/books.js`
- Inline fallback manifest: `BOOKS_MANIFEST_FALLBACK` inside `index.html`
- Chapter data: `data/acts/chapter-NN.json`
- Implemented chapter pages: `acts/chapter1.html`, `acts/chapter2.html`
- Legacy per-page data: `acts/acts-ch1-data.js`, `acts/acts-ch2-data.js`
- Public static chapter route: `bible/acts/NNN/index.html`
- Chapter data prompt: `prompt-template/chapter-data.prompt.md`
- Main manifest validation: `node scripts/test-mainpage-manifest.js`

Acts currently has 28 chapter entries. A chapter is clickable only when its manifest entry has `status: "implemented"` and an `href` like `/bible/acts/003`.

## Workflow

1. Identify the chapter number and zero-padded id.
   - `3` -> `003`
   - JSON file -> `data/acts/chapter-03.json`
   - Route href -> `/bible/acts/003`
   - Static route file -> `bible/acts/003/index.html`

2. Check current state before editing.
   - Read `data/books.js`.
   - Read the target `data/acts/chapter-NN.json` if present.
   - Read `acts/chapter2.html` as the newest implemented page template.
   - Read the matching existing page/data files only as needed.

3. Ensure the chapter data exists and is valid.
   - If missing, use `prompt-template/chapter-data.prompt.md` with `{{BOOK}} = Acts` and `{{CHAPTER}} = N`.
   - Save raw JSON only in `data/acts/chapter-NN.json`.
   - Preserve the schema: `book`, `chapter`, `chapter_title`, `chapter_summary`, `date_range`, `persons`, `locations`, `events`, `routes`, `timeline`, `theological_themes`, `discussion_questions`.
   - Verify all `events[].location_id` values exist in `locations[]` unless `null`.
   - Verify all `events[].persons_present` values exist in `persons[]`.
   - Verify all `timeline[].event_id` and `routes[].path[].event_id` values exist in `events[]`.
   - Keep `events[].sequence` and `timeline[].position` strictly ascending.
   - Do not use `"unknown"` for `timeline[].absolute_time` when the chapter has a usable `date_range.approximate`; copy the chapter-level year/range into each timeline item unless a more specific date is known. The event dots and timeline date labels depend on `absolute_time` containing a parseable year marker such as `AD 31–33`.

4. Add or update the implemented chapter page and route.
   - Prefer cloning `acts/chapter2.html` and adapting it for the target chapter.
   - Generate a matching data wrapper such as `acts/acts-chN-data.js` from `data/acts/chapter-NN.json` when the page loads an external chapter data script.
   - Update title text, `DATA.chapter`, chapter labels, previous/next navigation, and any hardcoded chapter number.
   - If the page inlines chapter data, embed the target JSON carefully as a JS object.
   - Create `bible/acts/NNN/index.html` for the public route and inline the chapter data script there. Do not depend only on `/acts/chapterN.html`, because a static host may return 404 for `/bible/acts/NNN`.
   - Keep chapter-row links as ordinary `<a href="/bible/acts/NNN">` links. Do not add client-side `pushState` routing just to make chapter links work; the static route file should make the URL valid.
   - If adding a `CHAPTER_NNN_HTML` string to `index.html` for an iframe `srcDoc` route, create it with `JSON.stringify(pageHtml)` and then escape nested closing script tags by replacing `</script` with `<\/script`. Raw `</script>` inside a JavaScript string in `index.html` can terminate the parent script and break the main page.
   - Preserve the existing static React/Babel architecture unless the task explicitly asks for a refactor.
   - When a chapter is already implemented and you modify its timeline data or rendered chapter HTML, update all four copies that can be served: `data/acts/chapter-NN.json`, `acts/acts-chN-data.js` if present, `acts/chapterN.html`, and `bible/acts/NNN/index.html`; then regenerate the matching `CHAPTER_NNN_HTML` constant in `index.html` if it exists.
   - **Danish localization (`CHAPTER_TEXT.da`) is all-or-nothing for events.** If the manifest entry has `title_da`, or if the chapter page has any `CHAPTER_TEXT.da` block, populate `CHAPTER_TEXT.da.events` for every `DATA.events[].id`, not just the visible timeline events. Each localized event must include non-empty `title`, `description`, and `timeline_label`. Do not leave `CHAPTER_TEXT = {}` on an implemented chapter that has a Danish manifest title.
   - Also populate `CHAPTER_TEXT.da.timeline` for every `DATA.timeline[].event_id` with non-empty `label` and `relative_time`.
   - When adding or updating a Danish localization block for an implemented chapter, translate event `description` fields as well as event `title` and `timeline_label`; otherwise the event banner falls back to English while Danish is selected.
   - **Mobile time dots (`playback-step-time`)**: Use the `dotTimeLabel(tl, idx)` helper, which renders `(relative_time stripped of ` — suffix`)` and prepends the year marker (`AD NN`) only when `shouldShowYear(tl, idx)` is true. This keeps each dot uniquely labelled (the `relative_time` field varies per event) while still surfacing the year on the first event of every year-group. Define the helper alongside `shouldShowYear`:
     ```js
     function dotTimeLabel(tl, idx) {
       const base = (tl.relative_time || '').replace(/\s*[—–]\s.*$/, '').trim();
       const marker = shouldShowYear(tl, idx) ? yearMarker(ABSOLUTE_TIMES[tl.event_id]?.date || '') : '';
       if (marker && yearMarker(base) === marker) return base;
       return marker ? `${marker} ${base}`.trim() : base;
     }
     ```
     Do NOT fall back to `compactTimeLabel(ABSOLUTE_TIMES[…]?.date || …)` alone — when every event shares the same `absolute_time` (common in single-day chapters like Acts 5) it collapses every dot to identical text. Apply the `dotTimeLabel` approach in the chapter page, the static route file, AND when regenerating the `CHAPTER_NNN_HTML` constant in `index.html`.
   - **Mobile dot label readability**: When a mobile chapter playback track has many event dots, give each dot enough stable horizontal space, use `letter-spacing: 0`, and add a high-contrast label background if labels are shown under the dots. Do not let dot labels overlap or depend on viewport-width font scaling.
   - For mobile playback tracks with more than 8 dots or multi-word dot labels, use a horizontally scrollable track with at least `84px` stable width per dot label, label `white-space: normal`, `overflow-wrap: anywhere`, enough track height for two to three text lines, and `overflow-y: visible` on the playback container. Do not squeeze labels into narrow fixed widths like `52px`.
   - **Regenerate `CHAPTER_NNN_HTML` in `index.html`** after modifying `bible/acts/NNN/index.html`. Build the new constant with `JSON.stringify(html).replace(/<\/script/gi, '<\\/script')`, then replace only the matching `const CHAPTER_NNN_HTML = ...;` constant. Verify the source contains `<\/script` escapes but the evaluated string contains real `</script>` tags.

5. Update both manifests.
   - In `data/books.js`, change the target chapter to `status: "implemented"` and add `href: "/bible/acts/NNN"`.
   - Preserve or add `title_da` only if a Danish title is already known or supplied.
   - Mirror the exact same manifest change inside `BOOKS_MANIFEST_FALLBACK` in `index.html`.
   - Do not mark unrelated chapters implemented.
   - If `scripts/test-mainpage-manifest.js` hard-codes the implemented Acts chapter list or clickable count, update those expectations for the newly implemented chapter.

6. Validate.
   - Run `node scripts/test-mainpage-manifest.js`.
   - Run a chapter data relationship check: all event locations/persons, timeline event IDs, and route event/location IDs must resolve; event sequences and timeline positions must be strictly ascending.
   - Run a static sanity check for the new chapter page, such as searching for stale hardcoded chapter numbers and the expected `/bible/acts/NNN` route.
   - Verify the main page did not break:
     - Confirm the parent script imports only the React hooks it uses.
     - If `index.html` contains `CHAPTER_NNN_HTML`, confirm that constant does not contain raw `</script>` inside its string.
     - Confirm ordinary chapter links still render as `href={ch.href}` and no unnecessary `pushState`/`onNavigate` routing was introduced.
   - If the chapter has Danish localization, run a localization coverage check:
     - `CHAPTER_TEXT.da.events` contains every `DATA.events[].id`.
     - Every Danish event has non-empty `title`, `description`, and `timeline_label`.
     - `CHAPTER_TEXT.da.timeline` contains every `DATA.timeline[].event_id`.
     - Every Danish timeline item has non-empty `label` and `relative_time`.
   - Verify both the main page and chapter route serve correctly from a static server:
     - Start a simple static server from `/root/projects/bible-fun`, for example `python3 -m http.server 8765`.
     - Check `curl -I http://127.0.0.1:8765/` returns `200`.
     - Check `curl -I http://127.0.0.1:8765/bible/acts/NNN/` returns `200`.
     - Stop the server before finishing.
   - If browser tooling is available, open the main page and the new chapter route and check the console for errors.

## Guardrails

- Keep edits scoped to the target Acts chapter and the manifest entries needed to expose it.
- Do not reorder the 28 Acts chapters.
- Do not remove existing Danish localization fields.
- Do not leave Danish chapter event descriptions dependent on the English base data when a Danish event localization block exists.
- Do not mark a chapter with `title_da` as finished while its rendered page has no `CHAPTER_TEXT.da` event descriptions.
- Do not rewrite the app into a framework build; it is intentionally static HTML plus browser-loaded React/Babel.
- Do not leave the main page dependent on a server-side SPA fallback for new chapter links. Add a real `bible/acts/NNN/index.html` static route.
- Do not put raw `</script>` text inside embedded HTML strings in `index.html`; always escape it as `<\/script`.
- Do not add custom client-side history routing unless the task explicitly asks for it.
- Avoid editing generated logs under `.gstack/` and local agent settings.
