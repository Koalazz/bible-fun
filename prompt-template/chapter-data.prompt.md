You are a biblical scholar and structured data expert.
Generate a complete data profile for **{{BOOK}} Chapter {{CHAPTER}}** that will power
an interactive scrollytelling webpage with:
  - A geographic map showing location-by-location movement
  - A vertical timeline showing chronological order
  - Character cards for key persons
  - Event cards tied to both a place and a time

Return ONLY valid JSON. Use the exact schema below. Do not add commentary.

---

SCHEMA:

{
  "book": "{{BOOK}}",
  "chapter": {{CHAPTER}},
  "chapter_title": "<short evocative title>",
  "chapter_summary": "<2–3 sentence overview for a general audience with no prior biblical knowledge>",
  "date_range": {
    "approximate": "<e.g. 'Spring–Summer AD 30' or 'c. 950 BC'>",
    "notes": "<brief note on scholarly dating uncertainty, or 'narrative time' if the book is not historical>"
  },

  "persons": [
    {
      "id": "<snake_case_id>",
      "name": "<full name or title used in this chapter>",
      "role": "<e.g. Apostle, Prophet, King, Angel, Narrator, Group>",
      "first_mention_verse": "<e.g. '1:1'>",
      "summary": "<2 sentences: who they are and their role in this specific chapter>",
      "significance": "<why they matter to the broader story arc of the book>"
    }
  ],

  "locations": [
    {
      "id": "<snake_case_id>",
      "name": "<place name as used in the text>",
      "modern_name": "<modern equivalent or 'disputed' or 'unknown'>",
      "lat": <decimal latitude, use best scholarly estimate>,
      "lng": <decimal longitude, use best scholarly estimate>,
      "description": "<1 sentence: what this place is and why it matters here>"
    }
  ],

  "events": [
    {
      "id": "<snake_case_id>",
      "sequence": <integer starting at 1>,
      "verses": "<e.g. '1:1-5'>",
      "title": "<short event title>",
      "description": "<3–5 sentences suitable for a general audience>",
      "location_id": "<references locations[].id, or null if location is unspecified>",
      "persons_present": ["<person_id>", "..."],
      "timeline_label": "<concise label for the timeline UI, e.g. 'Day 40 after resurrection'>",
      "scroll_anchor": "<URL-safe slug for the HTML id, e.g. 'ascension-of-jesus'>",
      "visual_notes": "<concrete suggestion for a map annotation or illustration brief>"
    }
  ],

  "routes": [
    {
      "person_id": "<person_id>",
      "path": [
        {
          "order": <integer starting at 1>,
          "location_id": "<location_id>",
          "event_id": "<event_id that placed them here>",
          "note": "<optional: why they moved to this location>"
        }
      ]
    }
  ],

  "timeline": [
    {
      "event_id": "<event_id>",
      "position": <integer starting at 1>,
      "label": "<timeline marker label shown in the UI>",
      "relative_time": "<time relative to chapter start, e.g. 'Day 1', 'That evening', 'Years later'>",
      "absolute_time": "<best scholarly estimate, e.g. 'April AD 30', or 'unknown'>"
    }
  ],

  "theological_themes": [
    "<one theme per string, 3–6 themes max, phrased as nouns or short phrases>"
  ],

  "discussion_questions": [
    "<3–5 questions suitable for group Bible study>"
  ]
}

---

INSTRUCTIONS:
- Cover ALL events in {{BOOK}} Chapter {{CHAPTER}} (entire chapter unless a specific verse range is noted in the title above)
- Include every named person AND significant unnamed groups (e.g. "the crowd", "the women")
- For coordinates, use the historically accepted location; set modern_name to "disputed" or "unknown" when uncertain
- sequence (in events) and position (in timeline) must both be strictly ascending integers
- routes traces each major person's physical movement through the chapter in order
- visual_notes must be concrete enough to brief an illustrator or a map overlay designer
- If the chapter has no clear geographic movement (e.g. a psalm, a letter), routes may be an empty array
- Output only the raw JSON object — no markdown fences, no commentary before or after
