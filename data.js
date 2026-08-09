// =========================================================================
// SITE DATA — Mrs. Nield's Math Classes
// This is the ONLY file that needs to change for day-to-day updates:
// progress status, bellringers, board work photos, videos, practice.
// index.html reads everything from SITE_DATA below.
// =========================================================================

const SITE_DATA = {

  // ---- Top-level course toggle ----
  courses: [
    { id: "honors", label: "Honors Precalculus", ready: true },
    { id: "precalc", label: "Precalculus", ready: false },
    { id: "apcalc", label: "AP Calculus AB", ready: false }
  ],

  honors: {
    units: [
      {
        id: "unit1",
        name: "Unit 1: Parent Functions",
        objectives: [
          {
            id: "1-1", target: "Identify parent functions", teks: "P.2.F",
            status: "not-started", dates: "",
            basic: "Identify the parent function family (match equation to graph) for the Algebra II functions: exponential, logarithmic, rational, polynomial, and power.",
            intermediate: "Identify and sketch, from its equation, every parent function required in Precalculus, including trigonometric, inverse trigonometric, and piecewise-defined functions (including step functions).",
            advanced: ""
          },
          {
            id: "1-2", target: "Determine and analyze key features", teks: "P.2.I",
            status: "not-started", dates: "",
            basic: "Identify at least 5 of the 7 key features (domain, range, symmetry, relative maximum, relative minimum, zeros, asymptotes) from a graph.",
            intermediate: "Identify all 7 key features from a graph, table, or equation for exponential, logarithmic, rational, polynomial, power, trigonometric, inverse trigonometric, and piecewise-defined functions.",
            advanced: "Identify all 7 key features and express domain, range, and other features using proper interval, set, and inequality notation; justify zeros and asymptotes algebraically from the equation."
          },
          {
            id: "1-3", target: "Identify increasing / decreasing intervals", teks: "P.2.I",
            status: "not-started", dates: "",
            basic: "Given a graph, state where the function is increasing or decreasing using informal, verbal language (e.g., “goes up,” “goes down”).",
            intermediate: "Given a graph or equation, determine and state the intervals where the function is increasing or decreasing.",
            advanced: "State increasing/decreasing intervals using proper interval notation (e.g., (–1, 3]) and set notation (e.g., {x | x ∈ ℜ, –1 < x ≤ 3}) directly from the equation, without graphing technology."
          },
          {
            id: "1-4", target: "Describe end behavior", teks: "P.2.J",
            status: "not-started", dates: "",
            basic: "Using a table or graph, describe the end behavior of a function in words (e.g., “as x gets larger, y gets larger”).",
            intermediate: "Describe the end behavior of exponential, logarithmic, rational, polynomial, and power functions from a graph or table using infinity notation (x → ∞, f(x) → ∞).",
            advanced: ""
          },
          {
            id: "1-5", target: "Classify even and odd functions", teks: "P.2.D",
            status: "not-started", dates: "",
            basic: "Visually identify the symmetry of a graph (y-axis, origin, or neither).",
            intermediate: "Classify a function as even, odd, or neither from its graph, and explain the classification using the definitions f(–x) = f(x) (even) or f(–x) = –f(x) (odd).",
            advanced: "Algebraically test f(–x) to prove whether a function given in equation form is even, odd, or neither, and connect the algebraic result to the graph’s symmetry."
          },
          {
            id: "1-6", target: "Analyze discontinuities", teks: "P.2.L, P.2.M",
            status: "not-started", dates: "",
            basic: "Determine whether a graph is continuous or discontinuous and identify the x-value(s) where a discontinuity occurs.",
            intermediate: "Classify each discontinuity as removable (hole), jump, or infinite (vertical asymptote) from a graph or table.",
            advanced: "Describe the left-sided and right-sided behavior of a function around a discontinuity using proper notation (x → c⁻, x → c⁺) and determine the type of discontinuity algebraically from a rational or piecewise equation."
          },
          {
            id: "1-7", target: "Graph function transformations", teks: "P.2.G",
            status: "not-started", dates: "",
            basic: "Identify 2 of the 4 transformation parameters (a, b, c, or d) applied to a parent function — af(x), f(x) + d, f(x – c), f(bx) — from its equation or graph.",
            intermediate: "Identify all 4 transformation parameters and describe their effect on the graph (vertical/horizontal stretch, compression, reflection, or shift).",
            advanced: "Identify all 4 transformation parameters using proper function notation and graph combined transformations of a parent function without technology."
          }
        ]
      }
    ],

    // Downloadable rubric file (see files/ folder)
    rubricFile: "files/Unit1_Parent_Functions_Rubric.pdf",

    // ---- Board work photos. Add new entries at the TOP of the array. ----
    // { date: "2026-08-12", objective: "1-1", caption: "Round 1 boards", image: "images/board/filename.jpg" }
    boardWork: [],

    // ---- Daily bellringers, for students who were absent. Add new entries at the TOP. ----
    // { date: "2026-08-12", objective: "1-1", prompt: "text of the bellringer", image: "images/bellringers/filename.jpg" (optional) }
    bellringers: [],

    // ---- Practice problems per objective (with answers, for self-checking) ----
    practice: {
      "1-1": [
        { prompt: "Without graphing yet, predict in one sentence each what shape you'd expect for f(x) = x³, f(x) = √x, and f(x) = cos(x). Then sketch each to check your prediction.", answer: "x³: S-shaped through the origin, increasing everywhere. √x: starts at the origin, only defined for x ≥ 0, increasing and curving downward. cos(x): a wave like sin(x), but starting at its maximum value (1) at x = 0." },
        { prompt: "Sketch f(x) = |x| and f(x) = ⌊x⌋ side by side from memory. Which one is smooth everywhere, and which one has sudden jumps?", answer: "|x| is smooth/continuous everywhere (just a sharp corner at the origin, no gaps). ⌊x⌋ has sudden jumps at every integer value of x." },
        { prompt: "Sketch f(x) = x² and f(x) = 1/x on the same set of axes, from memory. Which one has an asymptote, and which doesn't?", answer: "1/x has asymptotes (vertical at x = 0, horizontal at y = 0); x² has no asymptotes and is defined everywhere." },
        { prompt: "Sketch f(x) = x² and f(x) = x³ from memory on the same axes. At which x-values do they intersect?", answer: "They intersect at x = 0 and x = 1 (since x² = x³ → x²(x – 1) = 0), where y = 0 and y = 1." },
        { prompt: "Sketch f(x) = tan(x) from –π/2 to π/2 (skip the exact undefined endpoints for now). What's different about this graph compared to sin(x) and cos(x)?", answer: "tan(x) has vertical asymptotes (at x = ±π/2 in this window) instead of being bounded like sin/cos — it shoots toward +∞ and –∞ repeatedly." },
        { prompt: "Sketch a piecewise function: f(x) = –x for x < 0, and f(x) = x² for x ≥ 0. Is this graph continuous (no jumps or holes) at x = 0?", answer: "Yes, continuous — both pieces meet at (0,0)." },
        { prompt: "Sketch a horizontal line, f(x) = 3. Is this a function? Is it even, odd, or neither?", answer: "Yes, it's a function (every x gives exactly one y). It's even, since f(–x) = 3 = f(x) for all x." },
        { prompt: "Sketch f(x) = –x² (the negative of the parent quadratic). How does the negative sign change the graph compared to f(x) = x²?", answer: "The graph flips upside down (reflects over the x-axis) — it opens downward with a maximum at the origin instead of a minimum." },
      ],
      "1-2": [
        { prompt: "Without a picture, determine the zeros of f(x) = (x – 1)(x + 5) and the y-intercept of g(x) = x² – 4. Show your reasoning on the board.", answer: "Zeros of f(x): x = 1 and x = –5. y-intercept of g(x): g(0) = –4, so (0, –4)." },
        { prompt: "For h(x) = 1/(x + 3), determine its domain and identify its vertical asymptote without graphing.", answer: "Domain: all reals except x = –3. Vertical asymptote: x = –3." },
        { prompt: "Without graphing, state the range of f(x) = 4 sin(x) and the range of g(x) = cos(x) – 2.", answer: "Range of f(x) = 4 sin(x): [–4, 4]. Range of g(x) = cos(x) – 2: [–3, –1]." },
        { prompt: "Without graphing, state the domain and the horizontal asymptote of f(x) = 5(0.3)ˣ – 4.", answer: "Domain: all real numbers. Horizontal asymptote: y = –4 (since 5(0.3)ˣ approaches 0 as x → ∞)." },
        { prompt: "Determine the domain of f(x) = 1/(x² – 9) algebraically, then write it in interval notation.", answer: "Domain: all reals except x = 3 and x = –3, i.e., (–∞,–3) ∪ (–3,3) ∪ (3,∞)." },
        { prompt: "Determine the zeros of f(x) = x³ – 4x algebraically.", answer: "Zeros: x = 0, x = 2, x = –2." },
      ],
      "1-3": [
        { prompt: "A ball is thrown in the air; its height is modeled by h(t) = –16t² + 64t. Without graphing, do you expect the height to be increasing or decreasing right after t = 0? What about right before it lands?", answer: "Increasing right after t = 0 (the ball is rising); decreasing right before it lands (the ball is falling)." },
        { prompt: "For f(x) = x² – 6x + 5, find the vertex algebraically, then state the increasing/decreasing intervals without graphing.", answer: "Vertex at x = 3 (since –b/2a = 6/2 = 3). Decreasing on (–∞, 3); increasing on (3, ∞)." },
        { prompt: "State the increasing/decreasing intervals of f(x) = |x| using interval notation.", answer: "Decreasing on (–∞, 0); increasing on (0, ∞)." },
        { prompt: "Without graphing, predict the increasing/decreasing behavior of f(x) = 2ˣ across its whole domain.", answer: "Increasing on its entire domain (–∞, ∞) — exponential growth functions never decrease." },
      ],
      "1-4": [
        { prompt: "Here's a mini table for g(x) = –2x + 5: x=–10→25, x=–1→7, x=0→5, x=1→3, x=10→–15. Describe the end behavior of g(x) in words, then using infinity notation.", answer: "As x increases, g(x) decreases without bound; as x decreases (very negative), g(x) increases without bound." },
        { prompt: "Using Graph 4 from Objective 1-2 (f(x) = 3(0.5)ˣ + 1), describe its end behavior using infinity notation.", answer: "As x→∞, f(x)→1 (approaches its horizontal asymptote). As x→–∞, f(x)→∞ (grows without bound, since (0.5)ˣ grows huge for very negative x)." },
        { prompt: "Determine the end behavior of f(x) = 4x⁵ – 3x² + 1 algebraically.", answer: "Degree 5 (odd), positive leading coefficient → as x→∞, f(x)→∞; as x→–∞, f(x)→–∞." },
        { prompt: "Determine the end behavior of f(x) = (3x + 1)/(2x – 5) algebraically.", answer: "Degrees are equal, so end behavior is a horizontal asymptote at y = (leading coeff. of numerator)/(leading coeff. of denominator) = 3/2. As x→±∞, f(x)→3/2." },
      ],
      "1-5": [
        { prompt: "Without graphing, classify f(x) = x⁶ – 2x² + 1 as even, odd, or neither based on its equation alone.", answer: "Even — every term has an even exponent (6, 2, and the constant term), so f(–x) = f(x)." },
        { prompt: "Classify h(x) = x² + 5 as even, odd, or neither using the graph-shift reasoning from today (not the algebraic test).", answer: "Even — it's x² shifted up 5 units, and vertical shifts never break even symmetry." },
        { prompt: "Test f(x) = |x| algebraically for even/odd/neither.", answer: "f(–x) = |–x| = |x| = f(x), so f is even." },
        { prompt: "Test f(x) = 1/x algebraically for even/odd/neither.", answer: "f(–x) = 1/(–x) = –1/x = –f(x), so f is odd (matches the origin-symmetric graph from Objective 1-1)." },
      ],
      "1-6": [
        { prompt: "Look back at Graph 2 from the Objective 1-2 Key Features Graph Pack (f(x) = 1/(x – 2) + 1). Is this graph continuous or discontinuous? If discontinuous, classify the type and location.", answer: "Discontinuous — infinite discontinuity (vertical asymptote) at x = 2." },
        { prompt: "For f(x) = (x + 1)/(x + 1), what happens at x = –1? Is this a discontinuity, and if so, what kind?", answer: "f(x) simplifies to 1 for all x ≠ –1 — there's a removable discontinuity (hole) at x = –1, where the function would otherwise equal 1." },
        { prompt: "For f(x) = (x² – 16)/(x – 4), determine algebraically whether the discontinuity at x = 4 is removable or infinite.", answer: "Removable — (x–4) cancels from top and bottom, leaving f(x) = x + 4 with a hole at x = 4." },
        { prompt: "For g(x) = 1/(x – 5)², describe the left-sided and right-sided behavior around x = 5 using proper notation.", answer: "As x → 5⁻, g(x) → +∞. As x → 5⁺, g(x) → +∞ (both sides go to positive infinity since squaring removes the sign)." },
      ],
      "1-7": [
        { prompt: "Using the parent graph f(x) = x³, sketch g(x) = x³ – 2 and h(x) = (x + 1)³.", answer: "g(x) = x³ – 2: shifted down 2, inflection point moves from (0,0) to (0,–2). h(x) = (x + 1)³: shifted left 1, inflection point moves to (–1, 0)." },
        { prompt: "Using the parent graph f(x) = √x, sketch g(x) = √x + 2 and h(x) = √(x – 3).", answer: "g(x) = √x + 2: starting point moves to (0, 2). h(x) = √(x – 3): starting point moves to (3, 0)." },
        { prompt: "Using the parent graph f(x) = cos(x), sketch g(x) = cos(x) – 1 and h(x) = cos(3x).", answer: "g(x) = cos(x) – 1: shifted down 1 — midline moves from y=0 to y=–1. h(x) = cos(3x): same amplitude, period shrinks to 2π/3 (repeats 3 times as fast)." },
        { prompt: "Using the parent graph f(x) = x², sketch g(x) = (0.5x)² and h(x) = (–x)².", answer: "g(x) = (0.5x)²: horizontal stretch (graph gets wider, since 0 < |b| < 1). h(x) = (–x)²: no visible change, since squaring a negative b just gives x² again — reflections over the y-axis don't show up on symmetric (even) graphs." },
      ],
    },

    // ---- Video links per objective. Empty until Mrs. Nield sends links. ----
    videos: {
      "1-1": [], "1-2": [], "1-3": [], "1-4": [], "1-5": [], "1-6": [], "1-7": []
    }
  },

  precalc: {
    message: "This course hasn't been planned yet — check back soon!"
  },

  apcalc: {
    message: "This course hasn't been planned yet — check back soon!"
  }
};
