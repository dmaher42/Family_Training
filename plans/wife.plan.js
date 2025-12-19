export const WIFE_PLAN = {
  title: "Wife Fitness Plan",
  subtitle: "DB + bodyweight • 30–45 min • knee-friendly • 7 days/week",
  weeks: 12,
  phases: [
    { upToWeek: 4, name: "Base", note: "Build habit + form. Keep it comfortable." },
    { upToWeek: 8, name: "Build", note: "Add one extra set or a bit more pace." },
    { upToWeek: 12, name: "Shape", note: "Slightly tougher intervals + steadier strength." }
  ],
  repRanges: {
    light: "12–15 reps",
    mod: "10–12 reps",
    hard: "8–10 reps"
  },
  roundScaling: [
    { maxDuration: 30, rounds: 2 },
    { maxDuration: 35, rounds: 3 },
    { maxDuration: 40, rounds: 3 },
    { maxDuration: Infinity, rounds: 4 }
  ],
  strength: {
    lower: {
      title: "Strength (20–25 min)",
      intro: "Do {{rounds}} rounds, rest ~60s between moves.",
      squat: { on: "Chair goblet squat (pain-free depth)", off: "Goblet squat (controlled depth)" },
      moves: [
        "{{squat}}: {{reps}}",
        "DB Romanian deadlift: {{reps}}",
        "Glute bridge: 15 reps",
        "Standing calf raises: 15 reps"
      ]
    },
    upper: {
      title: "Strength (22–28 min)",
      intro: "Do {{rounds}} rounds, rest ~60s between moves.",
      moves: [
        "DB floor/bench press: {{reps}}",
        "One-arm DB row (chair/bench): {{reps}}/side",
        "Seated DB shoulder press (light): 10 reps",
        "Lateral raises: 12 reps",
        "Curl + triceps extension: 12 reps each"
      ]
    },
    full: {
      title: "Strength (22–28 min)",
      intro: "Do {{rounds}} rounds, rest ~60s between moves.",
      squat: { on: "Chair squat (goblet hold)", off: "Goblet squat" },
      moves: [
        "{{squat}}: {{reps}}",
        "DB Romanian deadlift: {{reps}}",
        "Incline push-ups: 8–10 reps",
        "Bent-over DB row: {{reps}}",
        "Farmer carry: 30–45 seconds"
      ]
    }
  },
  cardio: {
    steady: {
      headline: "Brisk walk / treadmill walk / marching: {{minutes}} minutes",
      effort: "Effort: “can talk, can’t sing”"
    },
    intervals: {
      rounds: { Base: 6, Build: 7, Shape: 8 },
      pattern: [
        "Repeat {{rounds}} rounds:",
        "1 min faster walk/march + 2 min easy",
        "No running. Keep it joint-friendly."
      ]
    },
    light: {
      headline: "Easy walk / easy march: {{minutes}} minutes",
      effort: "Keep it comfortable (recovery pace)"
    }
  },
  days: [
    {
      day: "Day 1",
      focus: "Lower + Core",
      tag: "Knee-friendly strength",
      blocks: [
        { title: "Warm-up (5 min)", items: ["March in place 2 min", "Hip circles + arm swings", "Sit-to-stand from chair × 10"] },
        { type: "strengthLower" },
        { title: "Core (5–8 min)", items: ["Dead bugs: 3×10/side", "Side plank (knees down ok): 2×20s/side", "Optional: glute bridge hold 2×20s"] },
        { title: "Cool down (2–5 min)", items: ["Easy walk around house + light stretching"] }
      ]
    },
    {
      day: "Day 2",
      focus: "Cardio",
      tag: "Low impact",
      blocks: [
        { title: "Warm-up (5 min)", items: ["Easy walk / march"] },
        { title: "Main (20–30 min)", type: "cardioSteady" },
        { title: "Cool down (3–5 min)", items: ["Slow walk + calf/hip stretch"] }
      ]
    },
    {
      day: "Day 3",
      focus: "Upper Body",
      tag: "Strength",
      blocks: [
        { title: "Warm-up (5 min)", items: ["Arm circles", "Band pull-aparts (optional)", "Wall push-ups × 10"] },
        { type: "strengthUpper" },
        { title: "Finisher (optional 3–5 min)", items: ["Farmer carry: 3×30–45s", "Or incline push-ups: 2×AMRAP (stop 2 reps before failure)"] }
      ]
    },
    {
      day: "Day 4",
      focus: "Intervals",
      tag: "Fat-loss friendly",
      blocks: [
        { title: "Warm-up (5 min)", items: ["Easy march / walk"] },
        { title: "Intervals (20–25 min)", type: "cardioIntervals" },
        { title: "Cool down (3–5 min)", items: ["Slow walk + breathing downshift"] }
      ]
    },
    {
      day: "Day 5",
      focus: "Full Body",
      tag: "Strength",
      blocks: [
        { title: "Warm-up (5 min)", items: ["March 2 min", "Hip hinge practice × 8", "Incline push-ups × 8"] },
        { type: "strengthFull" },
        { title: "Mobility (3–7 min)", items: ["Hamstrings", "Hips", "Upper back"] }
      ]
    },
    {
      day: "Day 6",
      focus: "Light Cardio + Mobility",
      tag: "Recovery",
      blocks: [
        { title: "Easy cardio (20–30 min)", type: "lightCardio" },
        { title: "Mobility (8–12 min)", items: ["Hip flexor stretch 60s/side", "Hamstring stretch 60s/side", "Calf stretch 60s/side", "Thoracic rotation 8/side"] }
      ]
    },
    {
      day: "Day 7",
      focus: "Active Recovery",
      tag: "Keep the habit",
      blocks: [
        { title: "Pick ONE (20–30 min)", items: ["Gentle walk", "Stretching / yoga", "Very easy full-body circuit (1–2 rounds)"] },
        { title: "Optional easy circuit (1–2 rounds)", items: ["Glute bridge × 12", "Incline push-ups × 8", "One-arm row × 10/side", "Dead bug × 8/side"] }
      ]
    }
  ]
};
