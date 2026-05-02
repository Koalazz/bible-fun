# Bible Chapter Data Prompt Template

This folder contains a reusable prompt template for extracting structured,
webpage-ready data from any Bible book and chapter. The output JSON is
designed to directly power an interactive scrollytelling webpage with:

- **Geographic map** — pins and animated travel routes per person
- **Vertical timeline** — chronological event markers
- **Character cards** — key persons with roles and significance
- **Event sections** — scroll-anchored narrative cards

---

## Files

| File | Purpose |
|------|---------|
| `chapter-data.prompt.md` | The prompt template |
| `README.md` | This guide |

---

## How to Use

### Step 1 — Fill in the two required placeholders

Open `chapter-data.prompt.md` and replace:

| Placeholder | Replace with | Example |
|-------------|-------------|---------|
| `{{BOOK}}` | Full book name | `Acts`, `Genesis`, `Revelation` |
| `{{CHAPTER}}` | Chapter number | `1`, `12` |

By default the prompt instructs the model to cover the **entire chapter**.
No verse range is needed.

**Optional — restrict to specific verses:** If you only want a subset of the
chapter, append a parenthetical to the title line at the top of the prompt:

```
**{{BOOK}} Chapter {{CHAPTER}} (verses 1–14 only)**
```

The instruction at the bottom of the template reads from that title, so the
model will automatically scope its output to those verses.

### Step 2 — Paste into an AI model

Paste the filled-in prompt into any of these models (all work well):

- **Claude** (claude.ai) — recommended for structured JSON fidelity
- **ChatGPT** (GPT-4o or later)
- **Gemini** (Gemini 1.5 Pro or later)

Use a model with at least a **32k context window** for longer chapters.

### Step 3 — Save the output

Save the returned JSON as:

```
data/
  acts/
    chapter-01.json
  genesis/
    chapter-01.json
```

Use a consistent naming convention from the start — lowercase book name,
zero-padded chapter number.

---

## Example — Acts Chapter 1

Placeholders filled in:

```
{{BOOK}}     → Acts
{{CHAPTER}}  → 1
```

The resulting prompt asks for:
- All events in Acts Chapter 1 (the full 26 verses, by default)
- Persons: Jesus, Peter, Matthias, Judas, the women, the Eleven, etc.
- Locations: Jerusalem, Mount of Olives, the Upper Room
- Routes: Jesus's ascension path, disciples returning to the city
- Timeline: from Day 1 post-resurrection to the day Matthias is chosen

---

## Tips for Specific Book Types

| Book type | Notes |
|-----------|-------|
| **Historical narrative** (Acts, Genesis, Kings) | All fields populate naturally |
| **Epistles** (Romans, Galatians) | `routes` will be empty; focus on `persons`, `events`, `theological_themes` |
| **Psalms / Wisdom** (Psalms, Proverbs) | Set `date_range.approximate` to the attributed author's era; `locations` may be sparse |
| **Prophecy** (Isaiah, Revelation) | Use `visual_notes` to capture symbolic imagery; mark speculative coordinates as `"disputed"` |
| **Gospels** (Matthew–John) | Parallel events across gospels: note variant accounts in `events[].description` |

---

## Output Schema Reference

```
persons[]          — who appears in this chapter
locations[]        — where events take place (with lat/lng for the map)
events[]           — what happens, in order, tied to a location and persons
routes[]           — each person's location-by-location movement path
timeline[]         — chronological position of each event for the sidebar
theological_themes — 3–6 key themes
discussion_questions — ready-to-use group study questions
```

Every `event` links to a `location` by `location_id` and lists `persons_present`
by their `person_id` values — this is what drives both the map overlays and the
character tracking on the webpage.

---

## Reusing Across a Full Book

Run the prompt once per chapter, saving each result as its own JSON file.
The webpage can then load them chapter by chapter, keeping each file small
and independently cacheable.
