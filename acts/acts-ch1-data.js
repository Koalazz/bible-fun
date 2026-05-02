const ACTS_CH1 = {
  "book": "Acts",
  "chapter": 1,
  "chapter_title": "Waiting for the Promise",
  "chapter_summary": "After his resurrection, Jesus spends forty days with his followers, teaching them about God's kingdom and promising that the Holy Spirit will soon come upon them. He then ascends visibly into the sky from the Mount of Olives, leaving his disciples to return to Jerusalem, where they pray together and choose a twelfth apostle to replace Judas, who had betrayed Jesus and died.",
  "date_range": {
    "approximate": "Spring AD 30 (or AD 33)",
    "notes": "The crucifixion is dated by most scholars to either AD 30 or AD 33; the Ascension occurs 40 days after Easter, placing it in late April or mid-May."
  },
  "persons": [
    { "id": "jesus",               "name": "Jesus",                      "role": "Risen Lord",               "summary": "The central figure of the entire book, Jesus appears to his apostles over forty days after his resurrection, giving final instructions before ascending to heaven.",                                                                              "color": "#E8591A" },
    { "id": "peter",               "name": "Peter",                      "role": "Apostle, Leader",           "summary": "The most prominent apostle, Peter takes the lead in the Upper Room by addressing the group about replacing Judas, citing scripture and overseeing the selection.",                                                                         "color": "#5B8FA8" },
    { "id": "the_eleven",          "name": "The Eleven",                 "role": "Apostles",                  "summary": "The eleven remaining apostles witness the Ascension and return to Jerusalem, gathering in the Upper Room to pray and wait for the Holy Spirit.",                                                                                           "color": "#A09070" },
    { "id": "the_women",           "name": "The Women",                  "role": "Group — Disciples",         "summary": "An unnamed group of women who followed Jesus from Galilee join the apostles in constant prayer in the Upper Room, signalling that the early community included both men and women.",                                                       "color": "#C68B6E" },
    { "id": "mary_mother_of_jesus","name": "Mary",                       "role": "Mother of Jesus",           "summary": "Mary, the mother of Jesus, is explicitly named among those gathered in the Upper Room in prayer — her final appearance in the New Testament narrative.",                                                                                  "color": "#9B7EB0" },
    { "id": "brothers_of_jesus",   "name": "Brothers of Jesus",          "role": "Group — Disciples",         "summary": "Jesus's brothers, previously skeptical during his ministry, appear here as part of the praying community — a change of heart after the resurrection. James will later lead the Jerusalem church.",                                        "color": "#7A8FA0" },
    { "id": "matthias",            "name": "Matthias",                   "role": "Apostle (newly chosen)",    "summary": "Chosen by lot from among the wider group of disciples to fill the vacancy left by Judas and restore the Twelve to their full number.",                                                                                                  "color": "#6B8F71" },
    { "id": "joseph_barsabbas",    "name": "Joseph Barsabbas",           "role": "Disciple, candidate",       "summary": "The other finalist considered to replace Judas alongside Matthias. Though the lot falls to Matthias, his presence shows the broader circle of faithful disciples.",                                                                       "color": "#7DAA7D" },
    { "id": "two_men_in_white",    "name": "Two Men in White",           "role": "Angels",                    "summary": "Two angelic figures appear at the Ascension and redirect the disciples from gazing upward toward the mission ahead — setting the tone for the entire book of Acts.",                                                                      "color": "#D4C4A0" },
    { "id": "judas_iscariot",      "name": "Judas Iscariot",             "role": "Betrayer (deceased)",       "summary": "Judas betrayed Jesus and subsequently died. Peter recounts this story to explain why a replacement apostle is needed.",                                                                                                                  "color": "#A0746A" },
    { "id": "theophilus",          "name": "Theophilus",                 "role": "Addressee",                 "summary": "The book is addressed to Theophilus — the same recipient as Luke's Gospel — framing Acts as a carefully researched sequel for an educated Greek-speaking audience.",                                                                     "color": "#9A8F80" }
  ],
  "locations": [
    { "id": "jerusalem",       "name": "Jerusalem",        "lat": 31.7683, "lng": 35.2137, "description": "The holy city — both the end-point of Jesus's earthly ministry and the starting point of the apostles' mission to the world." },
    { "id": "mount_of_olives", "name": "Mount of Olives",  "lat": 31.7781, "lng": 35.2458, "description": "A ridge east of Jerusalem across the Kidron Valley — the site of Jesus's Ascension into heaven." },
    { "id": "upper_room",      "name": "Upper Room",       "lat": 31.7717, "lng": 35.2288, "description": "A large upstairs room in Jerusalem where the disciples gathered to pray after the Ascension." }
  ],
  "events": [
    {
      "id": "prologue_to_theophilus",
      "sequence": 1,
      "verses": "1:1–2",
      "title": "Prologue: A Letter to Theophilus",
      "description": "The author opens by reminding Theophilus of the first volume — the Gospel of Luke — and establishes Acts as a deliberate continuation of a larger story about Jesus.",
      "location_id": null,
      "persons_present": ["theophilus"],
      "timeline_label": "Opening Dedication",
      "scroll_anchor": "prologue"
    },
    {
      "id": "forty_days_teaching",
      "sequence": 2,
      "verses": "1:3",
      "title": "Forty Days of Resurrection Appearances",
      "description": "After his death, Jesus appeared alive to his apostles many times over forty days, giving convincing proofs of his resurrection and teaching about the kingdom of God.",
      "location_id": "jerusalem",
      "persons_present": ["jesus", "the_eleven"],
      "timeline_label": "Days 1–40",
      "scroll_anchor": "forty-days"
    },
    {
      "id": "promise_of_the_spirit",
      "sequence": 3,
      "verses": "1:4–5",
      "title": "The Promise of the Holy Spirit",
      "description": "While eating with his disciples, Jesus commands them not to leave Jerusalem but to wait for the gift the Father promised — the Holy Spirit, who will come within days.",
      "location_id": "jerusalem",
      "persons_present": ["jesus", "the_eleven"],
      "timeline_label": "Day 40 — Final Meal",
      "scroll_anchor": "promise"
    },
    {
      "id": "question_about_the_kingdom",
      "sequence": 4,
      "verses": "1:6–8",
      "title": "\"Will You Restore the Kingdom?\"",
      "description": "The apostles ask if Jesus will restore Israel's kingdom. He redirects them: they will receive power when the Holy Spirit comes, and be his witnesses to Jerusalem, Judea, Samaria, and the ends of the earth.",
      "location_id": "jerusalem",
      "persons_present": ["jesus", "the_eleven"],
      "timeline_label": "Day 40 — Final Commission",
      "scroll_anchor": "kingdom"
    },
    {
      "id": "ascension",
      "sequence": 5,
      "verses": "1:9–11",
      "title": "The Ascension of Jesus",
      "description": "As the disciples watch, Jesus is taken up and a cloud hides him from sight. Two men in white appear and promise he will return in the same way he departed.",
      "location_id": "mount_of_olives",
      "persons_present": ["jesus", "the_eleven", "two_men_in_white"],
      "timeline_label": "Day 40 — Ascension",
      "scroll_anchor": "ascension"
    },
    {
      "id": "return_to_jerusalem",
      "sequence": 6,
      "verses": "1:12",
      "title": "The Walk Back to Jerusalem",
      "description": "The eleven apostles walk back from the Mount of Olives — a Sabbath day's walk of roughly 900 metres — obeying Jesus's instruction to stay in Jerusalem.",
      "location_id": "jerusalem",
      "persons_present": ["the_eleven"],
      "timeline_label": "Day 40 — Return",
      "scroll_anchor": "return"
    },
    {
      "id": "upper_room_prayer",
      "sequence": 7,
      "verses": "1:13–14",
      "title": "The Upper Room: United in Prayer",
      "description": "The eleven apostles devote themselves continuously to prayer in the upper room, joined by women who followed Jesus, Mary his mother, and his brothers — about 120 people in all.",
      "location_id": "upper_room",
      "persons_present": ["peter", "the_eleven", "the_women", "mary_mother_of_jesus", "brothers_of_jesus"],
      "timeline_label": "Days 40–50 — Prayer",
      "scroll_anchor": "upper-room"
    },
    {
      "id": "peter_addresses_the_community",
      "sequence": 8,
      "verses": "1:15–20",
      "title": "Peter Speaks: The Fate of Judas",
      "description": "Peter stands before the 120 believers and cites two psalms to argue that scripture predicted Judas's betrayal and the need for a replacement, recounting how Judas died and the field became 'Akeldama' — Field of Blood.",
      "location_id": "upper_room",
      "persons_present": ["peter", "the_eleven", "the_women", "mary_mother_of_jesus", "brothers_of_jesus"],
      "timeline_label": "Before Pentecost",
      "scroll_anchor": "peter-speaks"
    },
    {
      "id": "selection_of_matthias",
      "sequence": 9,
      "verses": "1:21–26",
      "title": "Matthias Chosen to Replace Judas",
      "description": "Two candidates emerge — Joseph Barsabbas and Matthias. After prayer, the community casts lots; the lot falls to Matthias, who is added to the eleven, restoring the Twelve.",
      "location_id": "upper_room",
      "persons_present": ["peter", "the_eleven", "the_women", "mary_mother_of_jesus", "brothers_of_jesus", "matthias", "joseph_barsabbas"],
      "timeline_label": "Before Pentecost",
      "scroll_anchor": "matthias"
    }
  ],
  "theological_themes": [
    "The promise and power of the Holy Spirit",
    "Continuity: Acts as the sequel to the Gospel of Luke",
    "Witness: being sent to the ends of the earth",
    "Scriptural fulfillment and the interpretation of the Old Testament",
    "Community, prayer, and shared waiting",
    "Restoration of the Twelve as a symbolic act"
  ],
  "discussion_questions": [
    "The disciples asked Jesus when he would restore the kingdom. In what ways do people today misunderstand what God's kingdom looks like? How does Jesus's answer redirect their expectations?",
    "The community spent ten days in prayer between the Ascension and Pentecost. What does this waiting period suggest about how God's purposes unfold, and how does it challenge our desire for immediate results?",
    "Peter quotes from the Psalms to make sense of Judas's death and the need for a replacement. What does this tell us about how the early church read their scriptures?",
    "Matthias was chosen by lot after prayer. What does this method of decision-making say about the community's trust in God?",
    "The 'ends of the earth' in Acts 1:8 was a phrase that meant Rome or beyond. What is your personal 'end of the earth' — the place or person farthest from your natural circle that the Spirit might be calling you toward?"
  ],
  "routes": [
    {
      "person_id": "jesus",
      "label": "Jesus",
      "path": [
        { "order": 1, "location_id": "jerusalem",       "event_id": "forty_days_teaching" },
        { "order": 2, "location_id": "jerusalem",       "event_id": "promise_of_the_spirit" },
        { "order": 3, "location_id": "mount_of_olives", "event_id": "ascension" }
      ]
    },
    {
      "person_id": "the_eleven",
      "label": "The Eleven",
      "path": [
        { "order": 1, "location_id": "jerusalem",       "event_id": "forty_days_teaching" },
        { "order": 2, "location_id": "mount_of_olives", "event_id": "ascension" },
        { "order": 3, "location_id": "jerusalem",       "event_id": "return_to_jerusalem" },
        { "order": 4, "location_id": "upper_room",      "event_id": "upper_room_prayer" }
      ]
    },
    {
      "person_id": "peter",
      "label": "Peter",
      "path": [
        { "order": 1, "location_id": "mount_of_olives", "event_id": "ascension" },
        { "order": 2, "location_id": "jerusalem",       "event_id": "return_to_jerusalem" },
        { "order": 3, "location_id": "upper_room",      "event_id": "upper_room_prayer" },
        { "order": 4, "location_id": "upper_room",      "event_id": "peter_addresses_the_community" },
        { "order": 5, "location_id": "upper_room",      "event_id": "selection_of_matthias" }
      ]
    },
    {
      "person_id": "two_men_in_white",
      "label": "Two Angels",
      "path": [
        { "order": 1, "location_id": "mount_of_olives", "event_id": "ascension" }
      ]
    },
    {
      "person_id": "the_women",
      "label": "The Women",
      "path": [
        { "order": 1, "location_id": "upper_room", "event_id": "upper_room_prayer" }
      ]
    },
    {
      "person_id": "mary_mother_of_jesus",
      "label": "Mary",
      "path": [
        { "order": 1, "location_id": "upper_room", "event_id": "upper_room_prayer" }
      ]
    },
    {
      "person_id": "brothers_of_jesus",
      "label": "Brothers",
      "path": [
        { "order": 1, "location_id": "upper_room", "event_id": "upper_room_prayer" }
      ]
    },
    {
      "person_id": "matthias",
      "label": "Matthias",
      "path": [
        { "order": 1, "location_id": "upper_room", "event_id": "selection_of_matthias" }
      ]
    },
    {
      "person_id": "joseph_barsabbas",
      "label": "J. Barsabbas",
      "path": [
        { "order": 1, "location_id": "upper_room", "event_id": "selection_of_matthias" }
      ]
    }
  ],
  "timeline": [
    { "event_id": "prologue_to_theophilus",       "position": 1, "label": "Dedication",    "relative_time": "Narrated retrospectively" },
    { "event_id": "forty_days_teaching",          "position": 2, "label": "40 Days",       "relative_time": "Days 1–40 post-resurrection" },
    { "event_id": "promise_of_the_spirit",        "position": 3, "label": "Final Meal",    "relative_time": "Day 40" },
    { "event_id": "question_about_the_kingdom",   "position": 4, "label": "Commission",    "relative_time": "Day 40" },
    { "event_id": "ascension",                    "position": 5, "label": "Ascension",     "relative_time": "Day 40 — Ascension Thursday" },
    { "event_id": "return_to_jerusalem",          "position": 6, "label": "Return",        "relative_time": "Day 40 — afternoon" },
    { "event_id": "upper_room_prayer",            "position": 7, "label": "Waiting",       "relative_time": "Days 40–50" },
    { "event_id": "peter_addresses_the_community","position": 8, "label": "Peter's Speech","relative_time": "During the wait" },
    { "event_id": "selection_of_matthias",        "position": 9, "label": "Matthias",      "relative_time": "Before Pentecost" }
  ]
};
