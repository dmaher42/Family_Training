export const ISLA_PLAN = {
  totalWeeks: 12,
  phases: [
    {
      maxWeek: 4,
      name: "Base",
      note: "Build great habits + perfect form. Same moves, better quality each week.",
    },
    {
      maxWeek: 8,
      name: "Build",
      note: "Small progression: a little more volume/time, plus new variations.",
    },
    {
      maxWeek: 12,
      name: "Sharpen",
      note: "More variety: crisp speed, steady strength, and slightly longer aerobic.",
    },
  ],
  exercises: {
    "Box Squat": {
      img: "assets/img/box-squat.jpg",
      cues: ["Sit back to a chair/box", "Knees track over toes", "Stand tall at the top"],
      note: "If knees feel weird, make the box higher.",
    },
    "Incline Push-Up": {
      img: "assets/img/incline-pushup.jpg",
      cues: ["Body straight", "Hands on bench/sofa", "Chest to edge, then push"],
      note: "Harder = lower the hands.",
    },
    "Single-Leg Balance Reach": {
      img: "assets/img/single-leg-reach.jpg",
      cues: ["Soft knee", "Reach gently", "Keep hips level"],
      note: "Quality > distance.",
    },
    "Bear Crawl": {
      img: "assets/img/bear-crawl.jpg",
      cues: ["Knees hover", "Small steps", "Back flat"],
      note: "Stop before form breaks.",
    },
    "Plank Shoulder Taps": {
      img: "assets/img/plank-shoulder-taps.jpg",
      cues: ["Feet wider", "Hips still", "Tap gently"],
      note: "Knees down is OK.",
    },
    "A-Skips": {
      img: "assets/img/a-skips.jpg",
      cues: ["Tall posture", "Quick feet", "Arms like running"],
      note: "Stop while still snappy.",
    },
    "Side Shuffle": {
      img: "assets/img/side-shuffle.jpg",
      cues: ["Stay low", "Don’t cross feet", "Quick, light steps"],
      note: "Great for court sports.",
    },
    "Backpedal + Sprint": {
      img: "assets/img/backpedal-sprint.jpg",
      cues: ["Short back steps", "Turn, then go", "Fast but controlled"],
      note: "Only a few reps.",
    },
    "DB Romanian Deadlift": {
      img: "assets/img/db-rdl.jpg",
      cues: ["Hips back", "Flat back", "Feel hamstrings"],
      note: "Light weights. Perfect form only.",
    },
    "Band/DB Row": {
      img: "assets/img/row.jpg",
      cues: ["Shoulders down", "Pull to ribs", "Slow return"],
      note: "Great for posture and shoulder health.",
    },
    "Side Plank": {
      img: "assets/img/side-plank.jpg",
      cues: ["Straight line", "Hips up", "Breathe"],
      note: "Knees down variation is fine.",
    },
    "Dead Bug": {
      img: "assets/img/dead-bug.jpg",
      cues: ["Back flat", "Slow legs", "Breathe out"],
      note: "Control beats speed.",
    },
  },
  exerciseKeys: {
    squat: "Box Squat",
    push: "Incline Push-Up",
    balance: "Single-Leg Balance Reach",
    crawl: "Bear Crawl",
    core: "Plank Shoulder Taps",
    hinge: "DB Romanian Deadlift",
    row: "Band/DB Row",
    sidePlank: "Side Plank",
    deadBug: "Dead Bug",
  },
  variations: {
    squat: [
      "Box Squat — 8–10",
      "Tempo Box Squat (3 sec down) — 6–8",
      "Pause Box Squat (1 sec on box) — 6–8",
    ],
    push: [
      "Incline Push-Up — 8–12",
      "Incline Push-Up (slow down) — 6–10",
      "Incline Push-Up (narrow hands) — 6–10",
    ],
    balance: [
      "Single-Leg Balance Reach — 6/side",
      "Single-Leg Balance Reach (eyes forward) — 6/side",
      "Single-Leg Balance Reach (hold 2 sec) — 5/side",
    ],
    crawl: [
      "Bear Crawl — 15–20m",
      "Bear Crawl (backwards) — 10–15m",
      "Bear Crawl (slow + quiet feet) — 10–15m",
    ],
    core: [
      "Plank Shoulder Taps — 10 taps",
      "Plank Hold — 20–30s",
      "Plank Shoulder Taps — 12 taps",
    ],
    speedSets: [
      [
        { text: "A-Skips — {reps}×20m", exKey: "A-Skips" },
        { text: "Side Shuffle — {reps}×15m", exKey: "Side Shuffle" },
        { text: "Backpedal + Sprint — {reps} reps", exKey: "Backpedal + Sprint" },
      ],
      [
        { text: "A-Skips — {reps}×20m", exKey: "A-Skips" },
        { text: "Side Shuffle — {reps}×15m", exKey: "Side Shuffle" },
        { text: "Acceleration (10–15m) — {reps} reps", exKey: "" },
      ],
      [
        { text: "Fast feet (5 sec) + relax — {reps} reps", exKey: "" },
        { text: "Side Shuffle — {reps}×15m", exKey: "Side Shuffle" },
        { text: "Backpedal + Sprint — {reps} reps", exKey: "Backpedal + Sprint" },
      ],
    ],
    hinge: [
      "DB Romanian Deadlift (light) — 8–10",
      "DB Romanian Deadlift (slow down) — 6–8",
      "DB Romanian Deadlift (pause mid-shin) — 6–8",
    ],
    row: [
      "Band/DB Row — 10",
      "Band/DB Row (pause 1 sec) — 8–10",
      "Band/DB Row (slow return) — 8–10",
    ],
    finish: [
      "Footwork ladder / cone pattern",
      "Footwork ladder / cone pattern",
      "Cone zig-zag (easy)",
    ],
    splitSquat: [
      "Split Squat (short stance) — 6–8/side",
      "Split Squat (short stance, slow) — 6/side",
      "Split Squat (short stance) — 6–8/side",
    ],
    sidePlank: [
      "Side Plank — 20–30s/side",
      "Side Plank — 20–30s/side",
      "Side Plank — 25–35s/side",
    ],
    deadBug: [
      "Dead Bug — 8/side",
      "Dead Bug — 10/side",
      "Dead Bug — 10/side",
    ],
  },
  aerobic: {
    warmup: "Easy pace — 5 min",
    coolDown: "Easy pace — 3–5 min",
    steadyNote: "Pace: can talk in full sentences",
  },
  runWalk: {
    inSeason: "Keep it very easy (no hard intervals).",
    build: "3 min run / 2 min walk × 6–8",
    sharpen: "4 min run / 2 min walk × 6",
  },
  funConditioning: {
    titleInSeason: "Pick ONE (10–25 min)",
    titleOffSeason: "Pick ONE (20–30 min)",
    options: [
      "Small-sided game / backyard drills",
      "Bike ride",
      "Obstacle course",
      "Relays",
    ],
    inSeasonNoteTitle: "In-season note",
    inSeasonNote: "If you already have games/training, skip this day.",
    rule: "This should feel like play.",
  },
  days: {
    day1: {
      day: "Day 1",
      focus: "Strength + Coordination",
      tagTemplate: "Variation {variant} • {phase}",
      blocks: [
        {
          title: "Warm-up (5–7 min)",
          items: [
            { text: "March → jog in place" },
            { text: "Arm swings + trunk rotations" },
            { text: "Hip circles" },
            { text: "World’s greatest stretch" },
          ],
        },
        {
          title: "Main (Rounds: {strengthRounds})",
          items: [
            { ref: "squatVar" },
            { ref: "pushVar" },
            { ref: "balanceVar" },
            { ref: "crawlVar" },
            { ref: "coreVar" },
          ],
        },
        {
          title: "Finish (fun, 5 min)",
          items: [
            { text: "{finishDrill}" },
            { text: "Stop while still sharp" },
          ],
        },
      ],
    },
    day2: {
      day: "Day 2",
      focus: "Aerobic (Cross Trainer)",
      tagTemplate: "Steady • {phase}",
      blocks: [
        { title: "Warm-up", items: [{ text: "{aerobicWarmup}" }] },
        {
          title: "Main",
          items: [
            { text: "Steady aerobic — {aerobicMain} min" },
            { text: "{aerobicSteadyNote}" },
          ],
        },
        { title: "Cool-down", items: [{ text: "{aerobicCoolDown}" }] },
      ],
    },
    day3: {
      day: "Day 3",
      focus: "Speed + Movement Skills",
      tagTemplate: "Variation {variant} • {seasonTag}",
      blocks: [
        {
          title: "Warm-up (5–7 min)",
          items: [
            { text: "Easy jog or march" },
            { text: "Leg swings" },
            { text: "2 short relaxed accelerations" },
          ],
        },
        {
          title: "Skills (quality reps)",
          items: [
            { listRef: "speedSet" },
            { text: "Reaction game (clap/call) — 4–6 reps" },
          ],
        },
        { title: "Rule", items: [{ text: "Stop while she still looks fast" }] },
      ],
    },
    day4: {
      day: "Day 4",
      focus: "Strength + Core",
      tagTemplate: "Variation {variant} • Support running",
      blocks: [
        {
          title: "Warm-up",
          items: [
            { text: "March → light jog" },
            { text: "Hip hinge practice" },
          ],
        },
        {
          title: "Main (Rounds: {strengthRounds})",
          items: [
            { text: "{splitSquat}" },
            { ref: "hingeVar" },
            { ref: "rowVar" },
            { text: "{sidePlank}", exKey: "Side Plank" },
            { text: "{deadBug}", exKey: "Dead Bug" },
          ],
        },
        { title: "Rule", items: [{ text: "No grinding reps. Perfect form only." }] },
      ],
    },
    day5: {
      day: "Day 5",
      focus: "Aerobic Endurance",
      tagTemplate: "{aerobicTag}",
      blocks: [
        {
          title: "Option A: Cross trainer",
          items: [
            { text: "Easy–moderate — {crossTrainerTime} min" },
            { text: "Smooth, steady pace" },
          ],
        },
        {
          title: "Option B: Run/Walk (only if not too many team sessions)",
          items: [
            { text: "{runWalk}" },
            { text: "If anything hurts: switch to cross trainer." },
          ],
        },
      ],
    },
    day6: {
      day: "Day 6",
      focus: "Fun Conditioning (Optional)",
      tagTemplate: "Play",
      blocks: [
        {
          title: "{funBlockTitle}",
          items: [
            { text: "Small-sided game / backyard drills" },
            { text: "Bike ride" },
            { text: "Obstacle course" },
            { text: "Relays" },
          ],
        },
        { title: "Rule", items: [{ text: "{funRule}" }] },
      ],
    },
    day7: {
      day: "Day 7",
      focus: "Rest",
      tagTemplate: "Recover",
      blocks: [
        {
          title: "Rest day",
          items: [
            { text: "No structured training today." },
            { text: "If she wants: an easy walk + stretch is fine." },
          ],
        },
      ],
    },
  },
};
