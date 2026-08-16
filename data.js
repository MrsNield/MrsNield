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
            basic: "Given a graph, state where the function is increasing or decreasing using informal, verbal language (e.g., \"goes up,\" \"goes down\").",
            intermediate: "Given a graph or equation, determine and state the intervals where the function is increasing or decreasing.",
            advanced: "State increasing/decreasing intervals using proper interval notation (e.g., (–1, 3]) and set notation (e.g., {x | x ∈ ℜ, –1 < x ≤ 3}) directly from the equation, without graphing technology."
          },
          {
            id: "1-4", target: "Describe end behavior", teks: "P.2.J",
            status: "not-started", dates: "",
            basic: "Using a table or graph, describe the end behavior of a function in words (e.g., \"as x gets larger, y gets larger\").",
            intermediate: "Describe the end behavior of exponential, logarithmic, rational, polynomial, and power functions from a graph or table using infinity notation (x → ∞, f(x) → ∞).",
            advanced: ""
          },
          {
            id: "1-5", target: "Classify even and odd functions", teks: "P.2.D",
            status: "not-started", dates: "",
            basic: "Visually identify the symmetry of a graph (y-axis, origin, or neither).",
            intermediate: "Classify a function as even, odd, or neither from its graph, and explain the classification using the definitions f(–x) = f(x) (even) or f(–x) = –f(x) (odd).",
            advanced: "Algebraically test f(–x) to prove whether a function given in equation form is even, odd, or neither, and connect the algebraic result to the graph's symmetry."
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
      },
      {
        id: "unit2",
        name: "Unit 2: Composition of Functions",
        objectives: [
          {
            id: "2-1", target: "Compose functions to model and solve problems", teks: "P.2.A",
            status: "not-started", dates: "",
            basic: "Given two functions, substitute one into the other using proper composition notation: g(f(x)) or (g ∘ f)(x).",
            intermediate: "Represent the composition of two functions numerically, tabularly, graphically, and algebraically.",
            advanced: "Solve composition of functions and check for extraneous solutions."
          },
          {
            id: "2-2", target: "Determine whether function composition is commutative", teks: "P.2.B",
            status: "not-started", dates: "",
            basic: "Show that g(f(x)) ≠ f(g(x)) for a given pair of functions to demonstrate composition is not commutative.",
            intermediate: "",
            advanced: ""
          },
          {
            id: "2-3", target: "Determine and represent inverse functions", teks: "P.2.E",
            status: "not-started", dates: "",
            basic: "Determine the inverse of a linear function. For f(x) = ½x + 3, the inverse is f⁻¹(x) = 2x – 6.",
            intermediate: "Determine inverse functions for given trigonometric or exponential functions.",
            advanced: "Solve for an inverse function using proper notation and check for extraneous solutions."
          },
          {
            id: "2-4", target: "Decompose functions into component functions", teks: "P.2.C",
            status: "not-started", dates: "",
            basic: "Given a composite function, identify two functions f(x) and g(x) whose composition creates it (e.g., decompose h(x) = (x + 3)² into f(x) = x² and g(x) = x + 3).",
            intermediate: "Decompose a function in more than one valid way, including recognizing it as a sequence of transformations of a parent function, not just a sequence of arithmetic operations.",
            advanced: "Decompose a function algebraically and verify the decomposition by composing the pieces back together to confirm they produce the original function."
          }
        ]
      }
    ],

    // Downloadable rubric file (see files/ folder)
    rubricFile: "files/Unit1_Parent_Functions_Rubric.pdf",

    // ---- Rough year-at-a-glance outline, pulled from the district's TEKS RS
    // pacing guide. One placeholder row per unit for now — each will be broken
    // out into day-by-day lessons (like the Precalc calendar) as the year goes on. ----
    courseCalendar: [
      { id: "cal-unit1", name: "Unit 1: Graphs, Attributes, and Applications of Functions", schedule: [
        { date: "2026-08-14", type: "lesson", label: "Graphs, Attributes, and Applications of Functions — runs through Sep 3" }
      ]},
      { id: "cal-unit2", name: "Unit 2: Composition and Inverses of Functions", schedule: [
        { date: "2026-09-08", type: "lesson", label: "Composition and Inverses of Functions — runs through Sep 28" }
      ]},
      { id: "cal-unit3", name: "Unit 3: Polynomial and Power Functions, Equations, and Inequalities", schedule: [
        { date: "2026-09-29", type: "lesson", label: "Polynomial and Power Functions, Equations, and Inequalities — runs through Oct 30" }
      ]},
      { id: "cal-unit4", name: "Unit 4: Rational Functions, Equations, and Inequalities", schedule: [
        { date: "2026-11-02", type: "lesson", label: "Rational Functions, Equations, and Inequalities — runs through Nov 6 (start date approximate — TEKS RS doc didn't print it clearly, double check)" }
      ]},
      { id: "cal-unit5", name: "Unit 5: Exponential and Logarithmic Functions and Equations", schedule: [
        { date: "2026-11-11", type: "lesson", label: "Exponential and Logarithmic Functions and Equations — runs through Dec 3" }
      ]},
      { id: "cal-unit6", name: "Unit 6: Sequences, Series, and Binomial Expansion", schedule: [
        { date: "2026-12-07", type: "lesson", label: "Sequences, Series, and Binomial Expansion — runs through Dec 18" }
      ]},
      { id: "cal-unit7", name: "Unit 7: Problem Solving with Trigonometric Ratios", schedule: [
        { date: "2027-01-06", type: "lesson", label: "Problem Solving with Trigonometric Ratios — runs through Jan 21" }
      ]},
      { id: "cal-unit8", name: "Unit 8: Trigonometric Functions", schedule: [
        { date: "2027-01-25", type: "lesson", label: "Trigonometric Functions — runs through Feb 17" }
      ]},
      { id: "cal-unit9", name: "Unit 9: Trigonometric Equations and Identities", schedule: [
        { date: "2027-02-22", type: "lesson", label: "Trigonometric Equations and Identities — runs through Mar 8" }
      ]},
      { id: "cal-unit10", name: "Unit 10: Vectors", schedule: [
        { date: "2027-03-10", type: "lesson", label: "Vectors — runs through Mar 30" }
      ]},
      { id: "cal-unit11", name: "Unit 11: Parametric Equations", schedule: [
        { date: "2027-04-01", type: "lesson", label: "Parametric Equations — runs through Apr 13" }
      ]},
      { id: "cal-unit12", name: "Unit 12: Polar Equations", schedule: [
        { date: "2027-04-15", type: "lesson", label: "Polar Equations — runs through Apr 22" }
      ]},
      { id: "cal-unit13", name: "Unit 13: Conics", schedule: [
        { date: "2027-04-26", type: "lesson", label: "Conics — runs through May 19" }
      ]}
    ],

    // ---- Daily log: just tag each class day with the objective you covered.
    // Powers the "What Did I Miss?" tab (combined with that day's bellringer
    // and board work photos below). Add entries in any order. ----
    // { date: "2026-08-13", objective: "1-1" }
    dailyLog: [],

    // ---- Board work photos. Add entries in any order — the site groups them
    // automatically by day (newest first), then by objective within each day. ----
    // { date: "2026-08-12", objective: "1-1", caption: "Round 1 boards", image: "images/board/filename.jpg" }
    boardWork: [
      { date: "2026-08-14", caption: "Tax Collector — group work expectations (4th period)", image: "images/board/2026-08-14_tax-collector_4th.jpg" }
    ],

    // ---- Daily "function of the day" bellringers. Add entries in any order —
    // the site sorts them and auto-hides each one until 4:00 PM on its date
    // (see BELLRINGER_REVEAL_HOUR in script.js). Once that day's 4pm has passed,
    // it stays visible forever as part of the absent-student archive. ----
    // { date: "2026-08-12", objective: "1-1", prompt: "text of the bellringer", image: "images/bellringers/filename.jpg" (optional) }
    bellringers: [
      { date: "2026-08-13", prompt: "f(x) = x" },
      { date: "2026-08-17", prompt: "f(x) = -x" },
      { date: "2026-08-18", prompt: "f(x) = x - 2" },
      { date: "2026-08-19", prompt: "f(x) = -x + 3" },
      { date: "2026-08-20", prompt: "f(x) = 2/3 x + 4" },
      { date: "2026-08-24", prompt: "f(x) = -3/2 x - 6" },
      { date: "2026-08-25", prompt: "f(x) = x/2 - 1" },
      { date: "2026-08-26", prompt: "f(x) = -4" },
      { date: "2026-08-27", prompt: "2x + 4y = 8" },
      { date: "2026-08-31", prompt: "x - y = 6" },
      { date: "2026-09-01", prompt: "-3x - 6y = 12" },
      { date: "2026-09-02", prompt: "2x - 5y = 10" },
      { date: "2026-09-03", prompt: "y = x + 3 ; y = -x + 3" },
      { date: "2026-09-08", prompt: "y = -3/2 x + 6 ; y = x - 4" },
      { date: "2026-09-09", prompt: "y = 3/4 x + 6 ; 4y - 3x = -12" },
      { date: "2026-09-10", prompt: "x + 2y = -2 ; -2x + y = 4" },
      { date: "2026-09-14", prompt: "f(x) = x²" },
      { date: "2026-09-15", prompt: "f(x) = -x²" },
      { date: "2026-09-16", prompt: "f(x) = x² + 4" },
      { date: "2026-09-17", prompt: "f(x) = (x + 5)²" },
      { date: "2026-09-21", prompt: "f(x) = (x + 2)² - 4" },
      { date: "2026-09-22", prompt: "f(x) = -(x + 1)² + 4" },
      { date: "2026-09-23", prompt: "f(x) = -5(x - 1)² + 5" },
      { date: "2026-09-24", prompt: "f(x) = 1/2 x² - 8" },
      { date: "2026-09-28", prompt: "f(x) = -x(x - 8)" },
      { date: "2026-09-29", prompt: "f(x) = (x + 3)(x - 3)" },
      { date: "2026-09-30", prompt: "f(x) = x² + 8x + 16" },
      { date: "2026-10-01", prompt: "f(x) = x² - 6x + 8" },
      { date: "2026-10-05", prompt: "f(x) = |x|" },
      { date: "2026-10-06", prompt: "f(x) = |x - 3| - 2" },
      { date: "2026-10-07", prompt: "f(x) = |x + 4| - 3" },
      { date: "2026-10-08", prompt: "f(x) = -|x + 2| + 4" },
      { date: "2026-10-13", prompt: "f(x) = -|x - 2| - 3" },
      { date: "2026-10-14", prompt: "f(x) = -1/2 |x + 4|" },
      { date: "2026-10-15", prompt: "f(x) = 2|x - 3| - 4" },
      { date: "2026-10-19", prompt: "f(x) = -4|x - 2| + 4" },
      { date: "2026-10-20", prompt: "f(x) = √x" },
      { date: "2026-10-21", prompt: "f(x) = -√x" },
      { date: "2026-10-22", prompt: "f(x) = √(x - 3)" },
      { date: "2026-10-26", prompt: "f(x) = √x + 2" },
      { date: "2026-10-27", prompt: "f(x) = -√x - 5" },
      { date: "2026-10-28", prompt: "f(x) = √(x + 1) - 1" },
      { date: "2026-10-29", prompt: "f(x) = -√(x + 4) + 1" },
      { date: "2026-11-02", prompt: "f(x) = 4√x - 4" },
      { date: "2026-11-03", prompt: "f(x) = x³" },
      { date: "2026-11-04", prompt: "f(x) = -x³" },
      { date: "2026-11-05", prompt: "f(x) = -x³ + 8" },
      { date: "2026-11-09", prompt: "f(x) = 1/2 x³ - 4" },
      { date: "2026-11-10", prompt: "f(x) = 4(x - 2)³" },
      { date: "2026-11-11", prompt: "f(x) = x(x - 2)(x + 2)" },
      { date: "2026-11-12", prompt: "f(x) = -x(x - 2)(x - 4)" },
      { date: "2026-11-16", prompt: "f(x) = x²(x + 3)" },
      { date: "2026-11-17", prompt: "f(x) = x⁴" },
      { date: "2026-11-18", prompt: "f(x) = -(x + 3)⁴" },
      { date: "2026-11-19", prompt: "f(x) = x(x - 1)(x - 2)(x - 3)" },
      { date: "2026-11-30", prompt: "f(x) = -x(x + 1)(x + 2)(x + 3)" },
      { date: "2026-12-01", prompt: "f(x) = -x²(x + 3)(x - 3)" },
      { date: "2026-12-02", prompt: "f(x) = 1/x" },
      { date: "2026-12-03", prompt: "f(x) = -1/x" },
      { date: "2026-12-07", prompt: "f(x) = 1/(x+2)" },
      { date: "2026-12-08", prompt: "f(x) = 1/(x-2)" },
      { date: "2026-12-09", prompt: "f(x) = 1/x + 1" },
      { date: "2026-12-10", prompt: "f(x) = 1/x - 1" },
      { date: "2026-12-14", prompt: "f(x) = 1/(x+2) - 4" },
      { date: "2026-12-15", prompt: "f(x) = -1/(x-2) + 4" },
      { date: "2027-01-05", prompt: "f(x) = (x-1)/((x-1)(x-5))" },
      { date: "2027-01-06", prompt: "f(x) = (x-2)/(x²-4)" },
      { date: "2027-01-07", prompt: "f(x) = (x²-5x+6)/(x²-7x+1)" },
      { date: "2027-01-11", prompt: "f(x) = 2<sup>x</sup>" },
      { date: "2027-01-12", prompt: "f(x) = (1/2)<sup>x</sup>" },
      { date: "2027-01-13", prompt: "f(x) = 2<sup>x</sup> + 3" },
      { date: "2027-01-14", prompt: "f(x) = 0.01(2)<sup>x</sup>" },
      { date: "2027-01-19", prompt: "f(x) = -4(2)<sup>x</sup>" },
      { date: "2027-01-20", prompt: "f(x) = -(2)<sup>x</sup> - 4" },
      { date: "2027-01-21", prompt: "f(x) = 3<sup>x</sup> + 2" },
      { date: "2027-01-25", prompt: "f(x) = 3<sup>x-5</sup> - 1" },
      { date: "2027-01-26", prompt: "f(x) = 4<sup>-x</sup> + 4" },
      { date: "2027-01-27", prompt: "f(x) = -(5)<sup>x</sup> + 5" },
      { date: "2027-01-28", prompt: "f(x) = 10<sup>x</sup>" },
      { date: "2027-02-01", prompt: "f(x) = log x" },
      { date: "2027-02-02", prompt: "f(x) = log(x - 4)" },
      { date: "2027-02-03", prompt: "f(x) = log(x + 5)" },
      { date: "2027-02-04", prompt: "f(x) = log(x + 1) - 1" },
      { date: "2027-02-08", prompt: "f(x) = -log x" },
      { date: "2027-02-09", prompt: "f(x) = -log(x - 5)" },
      { date: "2027-02-10", prompt: "f(x) = -log(x + 6) + 1" },
      { date: "2027-02-11", prompt: "f(x) = -2log(x + 1)" },
      { date: "2027-02-16", prompt: "f(x) = e<sup>x</sup>" },
      { date: "2027-02-17", prompt: "f(x) = ln x" },
      { date: "2027-02-18", prompt: "f(x) = e<sup>x</sup> + 4" },
      { date: "2027-02-22", prompt: "f(x) = ln(x - 4)" },
      { date: "2027-02-23", prompt: "f(x) = e<sup>x</sup> - 3" },
      { date: "2027-02-24", prompt: "f(x) = ln(x + 3)" },
      { date: "2027-02-25", prompt: "f(x) = 5e<sup>x</sup>" },
      { date: "2027-03-01", prompt: "f(x) = -4e<sup>x</sup>" },
      { date: "2027-03-02", prompt: "f(x) = 6e<sup>-x</sup>" },
      { date: "2027-03-03", prompt: "f(x) = ∛x" },
      { date: "2027-03-04", prompt: "f(x) = ∛x + 2" },
      { date: "2027-03-08", prompt: "f(x) = |∛x| ; g(x) = -|2/x|" },
      { date: "2027-03-09", prompt: "f(x) = ∛(x - 8) + 2" },
      { date: "2027-03-10", prompt: "f(x) = -∛(x + 2) - 1" },
      { date: "2027-03-11", prompt: "f(x) = -2 ∛(x + 3)" },
      { date: "2027-03-22", prompt: "f(x) = 1/2 ∛(x + 4) - 1" },
      { date: "2027-03-23", prompt: "f(x) = cos(x)" },
      { date: "2027-03-24", prompt: "f(x) = -cos(x)" },
      { date: "2027-03-25", prompt: "f(x) = cos(x) - 1" },
      { date: "2027-03-29", prompt: "f(x) = 3cos(x)" },
      { date: "2027-03-30", prompt: "f(x) = -2cos(x)" },
      { date: "2027-03-31", prompt: "f(x) = sin(x)" },
      { date: "2027-04-01", prompt: "f(x) = sin(x) + 2" },
      { date: "2027-04-05", prompt: "f(x) = sin(x + π)" },
      { date: "2027-04-06", prompt: "f(x) = sin(x - π) - 2" },
      { date: "2027-04-07", prompt: "f(x) = 3sin(2x)" },
      { date: "2027-04-08", prompt: "f(x) = 4sin(x) ; g(x) = -4sin(x)" },
      { date: "2027-04-12", prompt: "f(x) = tan(x)" },
      { date: "2027-04-13", prompt: "f(x) = -tan(x)" },
      { date: "2027-04-14", prompt: "f(x) = tan(x/2)" },
      { date: "2027-04-15", prompt: "f(x) = tan(2x)" },
      { date: "2027-04-19", prompt: "f(x) = tan(x - π/2)" },
      { date: "2027-04-20", prompt: "y = √(25-(x+5)²) ; y = √(25-(x-5)²) ; y = x - 10, 0≥x≥10 ; y = -x - 10, -10≥x≥0" },
      { date: "2027-04-21", prompt: "f(r) = 2 · π · r, r > 0" },
      { date: "2027-04-22", prompt: "f(r) = π · r², r > 0" },
      { date: "2027-04-26", prompt: "f(r) = 4/3 · π · r³, r > 0" },
      { date: "2027-04-27", prompt: "y = 3/2 x + 6 ; y = 2 - x/2" },
      { date: "2027-04-28", prompt: "f(x) = 2x² + 3x - 5" },
      { date: "2027-04-29", prompt: "f(x) = x³ - 1" },
      { date: "2027-05-03", prompt: "f(x) = x(x - 1)(x + 2)(x - 3)" },
      { date: "2027-05-04", prompt: "f(x) = -8(1/2)<sup>x</sup>" },
      { date: "2027-05-05", prompt: "f(x) = 8(1/2)<sup>-x</sup>" },
    ],

    // ---- DeltaMath assignment links per objective. Each is DeltaMath's
    // "smart" assignment link (/app/assignment/<id>) — it routes automatically
    // based on who's logged in, so it's safe to post publicly: a logged-in
    // student goes straight to that assignment, and anyone not logged in is
    // sent to log in first. Grabbed directly from Mrs. Nield's DeltaMath
    // account on 2026-08-10 after she built the 7 Unit 1 assignments there
    // (see unit1-deltamath-assignment-mapping.md for the skills in each). ----
    deltamath: {
      "1-1": "https://www.deltamath.com/app/assignment/33378241",
      "1-2": "https://www.deltamath.com/app/assignment/33378261",
      "1-3": "https://www.deltamath.com/app/assignment/33378265",
      "1-4": "https://www.deltamath.com/app/assignment/33378269",
      "1-5": "https://www.deltamath.com/app/assignment/33378275",
      "1-6": "https://www.deltamath.com/app/assignment/33378594",
      "1-7": "https://www.deltamath.com/app/assignment/33378609"
    },

    // ---- Vocabulary flashcards per objective (term + definition, for
    // self-checking). Shown in the "Practice & Videos" tab. ----
    vocab: {
      "1-1": [
        { term: "Parent function", definition: "The simplest, most basic form of a family of functions (e.g., f(x) = x² is the parent of every quadratic)." },
        { term: "Piecewise-defined function", definition: "A function built from two or more sub-functions, each applying to a different part of the domain." },
        { term: "Step function", definition: "A piecewise function made of constant horizontal segments that jump to a new value at each break (e.g., the greatest integer/floor function)." }
      ],
      "1-2": [
        { term: "Domain", definition: "The set of all possible input (x) values of a function." },
        { term: "Range", definition: "The set of all possible output (y) values of a function." },
        { term: "Zero (of a function)", definition: "An x-value where f(x) = 0 — where the graph crosses or touches the x-axis. Also called a root, answer, or x-intercept." },
        { term: "Relative maximum", definition: "A point higher than all nearby points on the graph (a 'peak'), though not necessarily the highest point overall." },
        { term: "Relative minimum", definition: "A point lower than all nearby points on the graph (a 'valley'), though not necessarily the lowest point overall." },
        { term: "Asymptote", definition: "A line that a graph gets closer and closer to but never touches or crosses." },
        { term: "Symmetry", definition: "A graph's mirror-image balance — about the y-axis, about the origin, or neither." }
      ],
      "1-3": [
        { term: "Increasing interval", definition: "An interval of x-values over which the y-values go up as x increases (left to right)." },
        { term: "Decreasing interval", definition: "An interval of x-values over which the y-values go down as x increases (left to right)." }
      ],
      "1-4": [
        { term: "End behavior", definition: "What happens to f(x) as x approaches positive infinity or negative infinity." },
        { term: "Infinity notation", definition: "Shorthand for end behavior, e.g. \"as x → ∞, f(x) → ∞\" means as x grows without bound, so does f(x)." }
      ],
      "1-5": [
        { term: "Even function", definition: "A function symmetric about the y-axis; algebraically, f(–x) = f(x) for all x." },
        { term: "Odd function", definition: "A function symmetric about the origin; algebraically, f(–x) = –f(x) for all x." }
      ],
      "1-6": [
        { term: "Discontinuity", definition: "A point where a graph is not continuous — there's a break, hole, or jump." },
        { term: "Removable discontinuity", definition: "A single-point hole in a graph that could be 'fixed' by filling in one missing point." },
        { term: "Jump discontinuity", definition: "A break where the graph 'jumps' from one y-value to another at a given x-value." },
        { term: "Infinite discontinuity", definition: "A break caused by a vertical asymptote, where the graph shoots toward +∞ or –∞." }
      ],
      "1-7": [
        { term: "Transformation", definition: "A change applied to a parent function's graph — a stretch, compression, reflection, or shift." },
        { term: "Vertical shift", definition: "Moving a graph up or down, from f(x) + d." },
        { term: "Horizontal shift", definition: "Moving a graph left or right, from f(x – c)." },
        { term: "Reflection", definition: "Flipping a graph over an axis, from a negative sign like –f(x) (over the x-axis) or f(–x) (over the y-axis)." }
      ],
      "2-1": [
        { term: "Composition of functions", definition: "The process of substituting one function into another to create a new function, so the range of one function becomes the domain of the other." },
        { term: "Composition notation", definition: "Written as g(f(x)) or (g ∘ f)(x) — read as \"g of f of x.\"" }
      ],
      "2-2": [
        { term: "Commutative property", definition: "A property where switching the order of an operation's operands doesn't change the result — function composition does not have this property." }
      ],
      "2-3": [
        { term: "Inverse function", definition: "A function that undoes the original function; when composed, f(f⁻¹(x)) = x and f⁻¹(f(x)) = x." },
        { term: "Inverse function notation", definition: "Written as f⁻¹(x) — the inverse of f(x)." },
        { term: "Restricted domain", definition: "Limiting a function's domain so it passes the horizontal line test and has an inverse that is also a function." }
      ],
      "2-4": [
        { term: "Decomposition of a function", definition: "Breaking a function into two or more simpler functions that, when composed together, produce the original function." }
      ]
    },

    // ---- Graph identification practice per objective. Each entry shows an
    // image and asks students to identify something about it before revealing
    // the answer. "image" paths point to images/graphs/ (generated parent-
    // function graphs, unlabeled on purpose). Add more by dropping a new
    // image in that folder and adding an entry here. ----
    graphPractice: {
      "1-1": [
        { image: "images/graphs/linear.png", prompt: "Which parent function is this?", answer: "Linear parent function: f(x) = x" },
        { image: "images/graphs/quadratic.png", prompt: "Which parent function is this?", answer: "Quadratic parent function: f(x) = x²" },
        { image: "images/graphs/cubic.png", prompt: "Which parent function is this?", answer: "Cubic parent function: f(x) = x³" },
        { image: "images/graphs/absolute_value.png", prompt: "Which parent function is this?", answer: "Absolute value parent function: f(x) = |x|" },
        { image: "images/graphs/square_root.png", prompt: "Which parent function is this?", answer: "Square root parent function: f(x) = √x" },
        { image: "images/graphs/cube_root.png", prompt: "Which parent function is this?", answer: "Cube root parent function: f(x) = ∛x" },
        { image: "images/graphs/reciprocal.png", prompt: "Which parent function is this?", answer: "Reciprocal parent function: f(x) = 1/x" },
        { image: "images/graphs/exponential.png", prompt: "Which parent function is this?", answer: "Exponential parent function: f(x) = 2ˣ" },
        { image: "images/graphs/logarithmic.png", prompt: "Which parent function is this?", answer: "Logarithmic parent function: f(x) = log(x)" },
        { image: "images/graphs/sine.png", prompt: "Which parent function is this?", answer: "Sine parent function: f(x) = sin(x)" },
        { image: "images/graphs/cosine.png", prompt: "Which parent function is this?", answer: "Cosine parent function: f(x) = cos(x)" },
        { image: "images/graphs/step_function.png", prompt: "Which parent function is this?", answer: "Step (greatest integer) parent function: f(x) = ⌊x⌋" }
      ]
    },

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

    // ---- Video links per objective. Pulled from flippedmath.com's traditional
    // Precalculus course (https://precalculus.flippedmath.com/precalc-traditional.html)
    // on 2026-08-09 — see class-website-reference.md for the full matching notes
    // and which of these are exact-title matches vs. closest-available substitutes. ----
    videos: {
      "1-1": [
        { title: "Parent Functions", url: "https://youtu.be/NrmmR3-VxA8" },
        { title: "Function Introduction (flippedmath 2.1)", url: "https://precalculus.flippedmath.com/21-function-introduction.html" }
      ],
      "1-2": [
        { title: "Domain & Range Graphically (flippedmath 2.2)", url: "https://precalculus.flippedmath.com/22-domain--range-graphically.html" },
        { title: "Extrema and Function Analysis (flippedmath 3.2)", url: "https://precalculus.flippedmath.com/32-extrema.html" }
      ],
      "1-3": [
        { title: "Extrema and Function Analysis (flippedmath 3.2)", url: "https://precalculus.flippedmath.com/32-extrema.html" }
      ],
      "1-4": [
        { title: "Limits to Infinity / End Behavior (flippedmath 2.4)", url: "https://precalculus.flippedmath.com/24-limits-to-infinity.html" }
      ],
      "1-5": [
        { title: "Even and Odd Functions (flippedmath 4.2)", url: "https://precalculus.flippedmath.com/42-even-and-odd-functions.html" }
      ],
      "1-6": [
        { title: "Discontinuity and Domain: An Algebraic Approach (flippedmath 3.1)", url: "https://precalculus.flippedmath.com/31-discontinuity-and-domain-analytically.html" },
        { title: "Limits Graphically (flippedmath 2.3)", url: "https://precalculus.flippedmath.com/23-limits-graphically.html" }
      ],
      "1-7": [
        { title: "Transformations (flippedmath 4.1)", url: "https://precalculus.flippedmath.com/41-transformations.html" }
      ],
      "2-1": [
        { title: "Operations with Functions (flippedmath 4.3)", url: "https://precalculus.flippedmath.com/43-operations-with-functions.html" }
      ],
      "2-2": [
        { title: "Operations with Functions (flippedmath 4.3)", url: "https://precalculus.flippedmath.com/43-operations-with-functions.html" }
      ],
      "2-3": [
        { title: "Inverse Functions (flippedmath 4.4)", url: "https://precalculus.flippedmath.com/44-inverse-functions.html" }
      ],
      "2-4": [
        { title: "Operations with Functions (flippedmath 4.3)", url: "https://precalculus.flippedmath.com/43-operations-with-functions.html" }
      ]
    }
  },

  precalc: {
    message: "This class follows the Math Medic Precalculus curriculum. Check the Course Calendar below to see what's been covered (and what's coming up) — if you missed a day, just find the date.",

    // ---- Course calendar, planned out in advance unit by unit so students can
    // always see what happened on a day they missed without Mrs. Nield having
    // to log anything day-to-day. Add a new { id, name, schedule } block per
    // unit as it's planned. Each schedule entry:
    // { date: "2026-08-13", type: "lesson" | "homework" | "quiz" | "review" | "test", label: "0.1 — The Cartesian Plane" }
    units: [
      {
        id: "unit0",
        name: "Unit 0: Prerequisites",
        schedule: [
          { date: "2026-08-13", type: "lesson", label: "Lots of Dots" },
          { date: "2026-08-14", type: "lesson", label: "Rainbow Logic" },
          { date: "2026-08-17", type: "lesson", label: "0.1 — The Cartesian Plane" },
          { date: "2026-08-18", type: "lesson", label: "0.2 — Equations of Circles" },
          { date: "2026-08-19", type: "homework", label: "" },
          { date: "2026-08-20", type: "lesson", label: "0.3 — Solving Equations in Multiple Representations" },
          { date: "2026-08-21", type: "lesson", label: "0.4 — Reasoning with Formulas" },
          { date: "2026-08-24", type: "homework", label: "" },
          { date: "2026-08-25", type: "quiz", label: "0.1–0.4" },
          { date: "2026-08-26", type: "lesson", label: "0.5 — Linear Relationships" },
          { date: "2026-08-27", type: "lesson", label: "0.6 — Reasoning with Slope" },
          { date: "2026-08-28", type: "lesson", label: "0.7 — Set Notation" },
          { date: "2026-08-31", type: "homework", label: "" },
          { date: "2026-09-01", type: "review", label: "Unit 0" },
          { date: "2026-09-02", type: "test", label: "Unit 0 — Day 1" },
          { date: "2026-09-03", type: "test", label: "Unit 0 — Day 2" }
        ]
      },
      {
        id: "unit1",
        name: "Unit 1: Functions",
        schedule: [
          { date: "2026-09-04", type: "lesson", label: "1.1 — Functions and Function Notation" },
          { date: "2026-09-08", type: "lesson", label: "1.2 — Domain and Range" },
          { date: "2026-09-09", type: "lesson", label: "1.3 — Rates of Change and Graph Behavior" },
          { date: "2026-09-10", type: "homework", label: "" },
          { date: "2026-09-11", type: "lesson", label: "1.4 — Library of Parent Functions" },
          { date: "2026-09-14", type: "lesson", label: "1.5 — Transformations of Functions" },
          { date: "2026-09-15", type: "homework", label: "" },
          { date: "2026-09-16", type: "lesson", label: "1.5 Day 2 — Transformations of Functions" },
          { date: "2026-09-17", type: "lesson", label: "1.6 — Even and Odd Functions" },
          { date: "2026-09-18", type: "homework", label: "" },
          { date: "2026-09-21", type: "quiz", label: "1.1–1.6" },
          { date: "2026-09-22", type: "lesson", label: "1.7 — Building Functions" },
          { date: "2026-09-23", type: "lesson", label: "1.8 — Compositions of Functions" },
          { date: "2026-09-24", type: "lesson", label: "1.9 — Inverse Functions" },
          { date: "2026-09-28", type: "homework", label: "" },
          { date: "2026-09-29", type: "lesson", label: "1.10 — Graphs of Inverse Functions" },
          { date: "2026-09-30", type: "lesson", label: "1.11 — Piecewise Functions" },
          { date: "2026-10-01", type: "homework", label: "" },
          { date: "2026-10-05", type: "review", label: "Unit 1" },
          { date: "2026-10-06", type: "test", label: "Unit 1 — Day 1" },
          { date: "2026-10-07", type: "test", label: "Unit 1 — Day 2" },
        ]
      },
      {
        id: "unit2",
        name: "Unit 2: Polynomial and Rational Functions",
        schedule: [
          { date: "2026-10-08", type: "lesson", label: "2.1 — Connecting Quadratics" },
          { date: "2026-10-09", type: "lesson", label: "2.2 — Completing the Square" },
          { date: "2026-10-13", type: "homework", label: "" },
          { date: "2026-10-14", type: "lesson", label: "2.3 — Polynomials in the Short Run" },
          { date: "2026-10-15", type: "lesson", label: "2.4 — Polynomials in the Long Run" },
          { date: "2026-10-16", type: "homework", label: "" },
          { date: "2026-10-19", type: "quiz", label: "2.1–2.4" },
          { date: "2026-10-20", type: "lesson", label: "2.5 — Factor and Remainder Theorem" },
          { date: "2026-10-21", type: "lesson", label: "2.5 Day 2 — Factor and Remainder Theorem" },
          { date: "2026-10-22", type: "lesson", label: "2.6 — Complex Zeros" },
          { date: "2026-10-26", type: "homework", label: "" },
          { date: "2026-10-27", type: "lesson", label: "2.7 — Connecting Zeros Across Multiple Representations" },
          { date: "2026-10-28", type: "lesson", label: "2.8 — Intro to Rational Functions" },
          { date: "2026-10-29", type: "lesson", label: "2.9 — Graphing Rational Functions" },
          { date: "2026-11-02", type: "homework", label: "" },
          { date: "2026-11-03", type: "review", label: "Unit 2" },
          { date: "2026-11-04", type: "test", label: "Unit 2 — Day 1" },
          { date: "2026-11-05", type: "test", label: "Unit 2 — Day 2" },
        ]
      },
      {
        id: "unit3",
        name: "Unit 3: Exponential and Logarithmic Functions",
        schedule: [
          { date: "2026-11-06", type: "lesson", label: "3.1 — Exponential Functions" },
          { date: "2026-11-09", type: "lesson", label: "3.2 — Graphs of Exponential Functions" },
          { date: "2026-11-10", type: "lesson", label: "3.3 — Compound Interest and an Introduction to \"e\"" },
          { date: "2026-11-11", type: "homework", label: "" },
          { date: "2026-11-12", type: "quiz", label: "3.1–3.3" },
          { date: "2026-11-16", type: "lesson", label: "3.4 — Logarithmic Functions" },
          { date: "2026-11-17", type: "lesson", label: "3.5 — Graphs of Logarithmic Functions" },
          { date: "2026-11-18", type: "homework", label: "" },
          { date: "2026-11-19", type: "lesson", label: "3.6 — Logarithm Properties" },
          { date: "2026-11-20", type: "lesson", label: "3.7 — Solving Exponential and Logarithmic Equations" },
          { date: "2026-11-30", type: "homework", label: "" },
          { date: "2026-12-01", type: "lesson", label: "3.8 — Exponential and Logarithmic Modeling" },
          { date: "2026-12-02", type: "homework", label: "" },
          { date: "2026-12-03", type: "review", label: "Unit 3" },
          { date: "2026-12-07", type: "test", label: "Unit 3 — Day 1" },
          { date: "2026-12-08", type: "test", label: "Unit 3 — Day 2" },
        ]
      },
      {
        id: "sem1-review",
        name: "Semester 1 Review",
        schedule: [
          { date: "2026-12-09", type: "review", label: "Day 1" },
          { date: "2026-12-10", type: "review", label: "Day 2" },
          { date: "2026-12-11", type: "review", label: "Day 3" },
          { date: "2026-12-14", type: "review", label: "Day 4" },
          { date: "2026-12-15", type: "review", label: "Day 5" },
        ]
      },
      {
        id: "sem1-finals",
        name: "Semester 1 Finals",
        schedule: [
          { date: "2026-12-16", type: "final", label: "" },
          { date: "2026-12-17", type: "final", label: "" },
          { date: "2026-12-18", type: "final", label: "" },
        ]
      }
    ],

    // Same format and same 4pm auto-reveal rule as the Honors bellringers above.
    bellringers: [
      { date: "2026-08-13", prompt: "f(x) = x" },
      { date: "2026-08-17", prompt: "f(x) = -x" },
      { date: "2026-08-18", prompt: "f(x) = x - 2" },
      { date: "2026-08-19", prompt: "f(x) = -x + 3" },
      { date: "2026-08-20", prompt: "f(x) = 2/3 x + 4" },
      { date: "2026-08-24", prompt: "f(x) = -3/2 x - 6" },
      { date: "2026-08-25", prompt: "f(x) = x/2 - 1" },
      { date: "2026-08-26", prompt: "f(x) = -4" },
      { date: "2026-08-27", prompt: "2x + 4y = 8" },
      { date: "2026-08-31", prompt: "x - y = 6" },
      { date: "2026-09-01", prompt: "-3x - 6y = 12" },
      { date: "2026-09-02", prompt: "2x - 5y = 10" },
      { date: "2026-09-03", prompt: "y = x + 3 ; y = -x + 3" },
      { date: "2026-09-08", prompt: "y = -3/2 x + 6 ; y = x - 4" },
      { date: "2026-09-09", prompt: "y = 3/4 x + 6 ; 4y - 3x = -12" },
      { date: "2026-09-10", prompt: "x + 2y = -2 ; -2x + y = 4" },
      { date: "2026-09-14", prompt: "f(x) = x²" },
      { date: "2026-09-15", prompt: "f(x) = -x²" },
      { date: "2026-09-16", prompt: "f(x) = x² + 4" },
      { date: "2026-09-17", prompt: "f(x) = (x + 5)²" },
      { date: "2026-09-21", prompt: "f(x) = (x + 2)² - 4" },
      { date: "2026-09-22", prompt: "f(x) = -(x + 1)² + 4" },
      { date: "2026-09-23", prompt: "f(x) = -5(x - 1)² + 5" },
      { date: "2026-09-24", prompt: "f(x) = 1/2 x² - 8" },
      { date: "2026-09-28", prompt: "f(x) = -x(x - 8)" },
      { date: "2026-09-29", prompt: "f(x) = (x + 3)(x - 3)" },
      { date: "2026-09-30", prompt: "f(x) = x² + 8x + 16" },
      { date: "2026-10-01", prompt: "f(x) = x² - 6x + 8" },
      { date: "2026-10-05", prompt: "f(x) = |x|" },
      { date: "2026-10-06", prompt: "f(x) = |x - 3| - 2" },
      { date: "2026-10-07", prompt: "f(x) = |x + 4| - 3" },
      { date: "2026-10-08", prompt: "f(x) = -|x + 2| + 4" },
      { date: "2026-10-13", prompt: "f(x) = -|x - 2| - 3" },
      { date: "2026-10-14", prompt: "f(x) = -1/2 |x + 4|" },
      { date: "2026-10-15", prompt: "f(x) = 2|x - 3| - 4" },
      { date: "2026-10-19", prompt: "f(x) = -4|x - 2| + 4" },
      { date: "2026-10-20", prompt: "f(x) = √x" },
      { date: "2026-10-21", prompt: "f(x) = -√x" },
      { date: "2026-10-22", prompt: "f(x) = √(x - 3)" },
      { date: "2026-10-26", prompt: "f(x) = √x + 2" },
      { date: "2026-10-27", prompt: "f(x) = -√x - 5" },
      { date: "2026-10-28", prompt: "f(x) = √(x + 1) - 1" },
      { date: "2026-10-29", prompt: "f(x) = -√(x + 4) + 1" },
      { date: "2026-11-02", prompt: "f(x) = 4√x - 4" },
      { date: "2026-11-03", prompt: "f(x) = x³" },
      { date: "2026-11-04", prompt: "f(x) = -x³" },
      { date: "2026-11-05", prompt: "f(x) = -x³ + 8" },
      { date: "2026-11-09", prompt: "f(x) = 1/2 x³ - 4" },
      { date: "2026-11-10", prompt: "f(x) = 4(x - 2)³" },
      { date: "2026-11-11", prompt: "f(x) = x(x - 2)(x + 2)" },
      { date: "2026-11-12", prompt: "f(x) = -x(x - 2)(x - 4)" },
      { date: "2026-11-16", prompt: "f(x) = x²(x + 3)" },
      { date: "2026-11-17", prompt: "f(x) = x⁴" },
      { date: "2026-11-18", prompt: "f(x) = -(x + 3)⁴" },
      { date: "2026-11-19", prompt: "f(x) = x(x - 1)(x - 2)(x - 3)" },
      { date: "2026-11-30", prompt: "f(x) = -x(x + 1)(x + 2)(x + 3)" },
      { date: "2026-12-01", prompt: "f(x) = -x²(x + 3)(x - 3)" },
      { date: "2026-12-02", prompt: "f(x) = 1/x" },
      { date: "2026-12-03", prompt: "f(x) = -1/x" },
      { date: "2026-12-07", prompt: "f(x) = 1/(x+2)" },
      { date: "2026-12-08", prompt: "f(x) = 1/(x-2)" },
      { date: "2026-12-09", prompt: "f(x) = 1/x + 1" },
      { date: "2026-12-10", prompt: "f(x) = 1/x - 1" },
      { date: "2026-12-14", prompt: "f(x) = 1/(x+2) - 4" },
      { date: "2026-12-15", prompt: "f(x) = -1/(x-2) + 4" },
      { date: "2027-01-05", prompt: "f(x) = (x-1)/((x-1)(x-5))" },
      { date: "2027-01-06", prompt: "f(x) = (x-2)/(x²-4)" },
      { date: "2027-01-07", prompt: "f(x) = (x²-5x+6)/(x²-7x+1)" },
      { date: "2027-01-11", prompt: "f(x) = 2<sup>x</sup>" },
      { date: "2027-01-12", prompt: "f(x) = (1/2)<sup>x</sup>" },
      { date: "2027-01-13", prompt: "f(x) = 2<sup>x</sup> + 3" },
      { date: "2027-01-14", prompt: "f(x) = 0.01(2)<sup>x</sup>" },
      { date: "2027-01-19", prompt: "f(x) = -4(2)<sup>x</sup>" },
      { date: "2027-01-20", prompt: "f(x) = -(2)<sup>x</sup> - 4" },
      { date: "2027-01-21", prompt: "f(x) = 3<sup>x</sup> + 2" },
      { date: "2027-01-25", prompt: "f(x) = 3<sup>x-5</sup> - 1" },
      { date: "2027-01-26", prompt: "f(x) = 4<sup>-x</sup> + 4" },
      { date: "2027-01-27", prompt: "f(x) = -(5)<sup>x</sup> + 5" },
      { date: "2027-01-28", prompt: "f(x) = 10<sup>x</sup>" },
      { date: "2027-02-01", prompt: "f(x) = log x" },
      { date: "2027-02-02", prompt: "f(x) = log(x - 4)" },
      { date: "2027-02-03", prompt: "f(x) = log(x + 5)" },
      { date: "2027-02-04", prompt: "f(x) = log(x + 1) - 1" },
      { date: "2027-02-08", prompt: "f(x) = -log x" },
      { date: "2027-02-09", prompt: "f(x) = -log(x - 5)" },
      { date: "2027-02-10", prompt: "f(x) = -log(x + 6) + 1" },
      { date: "2027-02-11", prompt: "f(x) = -2log(x + 1)" },
      { date: "2027-02-16", prompt: "f(x) = e<sup>x</sup>" },
      { date: "2027-02-17", prompt: "f(x) = ln x" },
      { date: "2027-02-18", prompt: "f(x) = e<sup>x</sup> + 4" },
      { date: "2027-02-22", prompt: "f(x) = ln(x - 4)" },
      { date: "2027-02-23", prompt: "f(x) = e<sup>x</sup> - 3" },
      { date: "2027-02-24", prompt: "f(x) = ln(x + 3)" },
      { date: "2027-02-25", prompt: "f(x) = 5e<sup>x</sup>" },
      { date: "2027-03-01", prompt: "f(x) = -4e<sup>x</sup>" },
      { date: "2027-03-02", prompt: "f(x) = 6e<sup>-x</sup>" },
      { date: "2027-03-03", prompt: "f(x) = ∛x" },
      { date: "2027-03-04", prompt: "f(x) = ∛x + 2" },
      { date: "2027-03-08", prompt: "f(x) = |∛x| ; g(x) = -|2/x|" },
      { date: "2027-03-09", prompt: "f(x) = ∛(x - 8) + 2" },
      { date: "2027-03-10", prompt: "f(x) = -∛(x + 2) - 1" },
      { date: "2027-03-11", prompt: "f(x) = -2 ∛(x + 3)" },
      { date: "2027-03-22", prompt: "f(x) = 1/2 ∛(x + 4) - 1" },
      { date: "2027-03-23", prompt: "f(x) = cos(x)" },
      { date: "2027-03-24", prompt: "f(x) = -cos(x)" },
      { date: "2027-03-25", prompt: "f(x) = cos(x) - 1" },
      { date: "2027-03-29", prompt: "f(x) = 3cos(x)" },
      { date: "2027-03-30", prompt: "f(x) = -2cos(x)" },
      { date: "2027-03-31", prompt: "f(x) = sin(x)" },
      { date: "2027-04-01", prompt: "f(x) = sin(x) + 2" },
      { date: "2027-04-05", prompt: "f(x) = sin(x + π)" },
      { date: "2027-04-06", prompt: "f(x) = sin(x - π) - 2" },
      { date: "2027-04-07", prompt: "f(x) = 3sin(2x)" },
      { date: "2027-04-08", prompt: "f(x) = 4sin(x) ; g(x) = -4sin(x)" },
      { date: "2027-04-12", prompt: "f(x) = tan(x)" },
      { date: "2027-04-13", prompt: "f(x) = -tan(x)" },
      { date: "2027-04-14", prompt: "f(x) = tan(x/2)" },
      { date: "2027-04-15", prompt: "f(x) = tan(2x)" },
      { date: "2027-04-19", prompt: "f(x) = tan(x - π/2)" },
      { date: "2027-04-20", prompt: "y = √(25-(x+5)²) ; y = √(25-(x-5)²) ; y = x - 10, 0≥x≥10 ; y = -x - 10, -10≥x≥0" },
      { date: "2027-04-21", prompt: "f(r) = 2 · π · r, r > 0" },
      { date: "2027-04-22", prompt: "f(r) = π · r², r > 0" },
      { date: "2027-04-26", prompt: "f(r) = 4/3 · π · r³, r > 0" },
      { date: "2027-04-27", prompt: "y = 3/2 x + 6 ; y = 2 - x/2" },
      { date: "2027-04-28", prompt: "f(x) = 2x² + 3x - 5" },
      { date: "2027-04-29", prompt: "f(x) = x³ - 1" },
      { date: "2027-05-03", prompt: "f(x) = x(x - 1)(x + 2)(x - 3)" },
      { date: "2027-05-04", prompt: "f(x) = -8(1/2)<sup>x</sup>" },
      { date: "2027-05-05", prompt: "f(x) = 8(1/2)<sup>-x</sup>" },
    ]
  },

  apcalc: {
    message: "Unit resources are posted below as they're ready — more units coming as the year progresses.",

    // ---- Day-by-day course calendar, same idea as the Precalc tab: add a new
    // { date, type, label } entry as you go. AP Calc has no bellringers, so
    // "What Did I Miss?" below only combines dailyLog + boardWork. ----
    courseCalendar: [
      {
        id: "unit1", name: "Unit 1: Limits and Continuity",
        schedule: [
          { date: "2026-08-14", type: "lesson", label: "1.1 — Rates of Change (HW: Lesson 1.1)" },
          { date: "2026-08-17", type: "lesson", label: "1.2–1.4 — Limits, Notation, Graphs & Tables (HW: Lesson 1.2)" },
          { date: "2026-08-18", type: "lesson", label: "1.5–1.7 — Algebraic Limits & Indeterminate Forms (HW: Lesson 1.5)" },
          { date: "2026-08-19", type: "lesson", label: "1.8–1.9 — Squeeze Theorem & Special Trig Limits (HW: Lesson 1.6)" },
          { date: "2026-08-20", type: "lesson", label: "1.10–1.13, 1.16 — Discontinuity, Continuity & IVT, Day 1 (HW: Lessons 1.7 & 1.8)" },
          { date: "2026-08-21", type: "lesson", label: "1.10–1.13, 1.16 — Discontinuity, Continuity & IVT, Day 2 (HW: Lesson 1.9)" },
          { date: "2026-08-24", type: "lesson", label: "1.14–1.15 — Infinite Limits & Asymptotes (HW: Lessons 1.3 & 1.4)" }
        ]
      }
    ],

    // ---- Daily log: tag each class day with a short description of what was
    // covered. Powers "What Did I Miss?" below (combined with board work). ----
    // { date: "2026-08-14", label: "1.1 — Rates of Change" }
    // Add "period: '3rd'" or "period: '5th'" only on a day the two sections
    // diverge — omit it (as below) when both periods do the same thing.
    dailyLog: [
      { date: "2026-08-14", period: "5th", label: "1.1 — Rates of Change" },
      { date: "2026-08-14", period: "3rd", label: "Review — senior meeting ran long, had to pick up computers" }
    ],

    // ---- Board work photos, same format as the other courses. Add
    // "period: '3rd'" or "period: '5th'" the same way as dailyLog above when
    // needed. ----
    // { date: "2026-08-14", caption: "...", image: "images/board/filename.jpg" }
    boardWork: [],

    // ---- Unit 1 videos, from calculus.flippedmath.com (Version 1), grouped
    // to match the same day-by-day pacing as the Course Calendar above. ----
    unitVideos: [
      {
        unit: "Unit 1: Limits and Continuity",
        days: [
          {
            day: "Day 1 — Rates of Change (1.1)",
            videos: [
              { title: "1.1 — Can Change Occur at an Instant?", url: "https://calculus.flippedmath.com/11-can-change-occur-at-an-instant.html" }
            ]
          },
          {
            day: "Day 2 — Limits, Notation, Graphs & Tables (1.2–1.4)",
            videos: [
              { title: "1.2 — Defining Limits and Using Limit Notation", url: "https://calculus.flippedmath.com/12-defining-limits-and-using-limit-notation.html" },
              { title: "1.3 — Limit Values from Graphs", url: "https://calculus.flippedmath.com/13-limit-values-from-graphs.html" },
              { title: "1.4 — Limit Values from Tables", url: "https://calculus.flippedmath.com/14-limit-values-from-tables.html" }
            ]
          },
          {
            day: "Day 3 — Algebraic Limits & Indeterminate Forms (1.5–1.7)",
            videos: [
              { title: "1.5 — Determining Limits Using Algebraic Properties", url: "https://calculus.flippedmath.com/15-determining-limits-using-algebraic-properties.html" },
              { title: "1.6 — Determining Limits Using Algebraic Manipulation", url: "https://calculus.flippedmath.com/16-determining-limits-using-algebraic-manipulation.html" },
              { title: "1.7 — Selecting Procedures for Determining Limits", url: "https://calculus.flippedmath.com/17-selecting-procedures-for-determining-limits.html" }
            ]
          },
          {
            day: "Day 4 — Squeeze Theorem & Special Trig Limits (1.8–1.9)",
            videos: [
              { title: "1.8 — Determining Limits Using the Squeeze Theorem", url: "https://calculus.flippedmath.com/18-determining-limits-using-the-squeeze-theorem.html" },
              { title: "1.9 — Connecting Multiple Representations of Limits", url: "https://calculus.flippedmath.com/19-connecting-multiple-representations-of-limits.html" }
            ]
          },
          {
            day: "Days 5–6 — Discontinuity, Continuity & IVT (1.10–1.13, 1.16)",
            videos: [
              { title: "1.10 — Exploring Types of Discontinuities", url: "https://calculus.flippedmath.com/110-exploring-types-of-discontinuities.html" },
              { title: "1.11 — Defining Continuity at a Point", url: "https://calculus.flippedmath.com/111-defining-continuity-at-a-point.html" },
              { title: "1.12 — Confirming Continuity Over an Interval", url: "https://calculus.flippedmath.com/112-confirming-continuity-over-an-interval.html" },
              { title: "1.13 — Removing Discontinuities", url: "https://calculus.flippedmath.com/113-removing-discontinuities.html" },
              { title: "1.16 — Intermediate Value Theorem", url: "https://calculus.flippedmath.com/116-intermediate-value-theorem.html" }
            ]
          },
          {
            day: "Day 7 — Infinite Limits & Asymptotes (1.14–1.15)",
            videos: [
              { title: "1.14 — Infinite Limits and Vertical Asymptotes", url: "https://calculus.flippedmath.com/114-infinite-limits-and-vertical-asymptotes.html" },
              { title: "1.15 — Limits at Infinity and Horizontal Asymptotes", url: "https://calculus.flippedmath.com/115-limits-at-infinity-and-horizontal-asymptotes.html" }
            ]
          }
        ]
      }
    ],

    // ---- Per-day detail shown when a student clicks a date on "What Did I
    // Miss?" — notes/homework/answers link into specific pages of the combined
    // PDFs above (#page=N), so there's no need to keep separate per-day files.
    // deltamath is intentionally blank per day; fill in a URL once you have one
    // and it'll show a button instead of the "not posted yet" placeholder. ----
    dayDetails: {
      // 3rd period has no "3rd" key here at all — a review day has no unit
      // content to show, so it correctly falls back to "nothing posted yet."
      "2026-08-14": {
        "5th": {
          notes: { label: "Guided Notes: 1.1", file: "files/AP_Calc_Unit1_Guided_Notes_Filled_In.pdf#page=1" },
          homework: [
            { label: "Lesson 1.1 Homework (blank)", file: "files/AP_Calc_Unit1_Homework_Packet.pdf#page=1" }
          ],
          homeworkAnswers: [
            { label: "Lesson 1.1 Homework — Answer Key", file: "files/AP_Calc_Unit1_Homework_Answer_Key.pdf#page=1" }
          ],
          videos: [
            { title: "1.1 — Can Change Occur at an Instant?", url: "https://calculus.flippedmath.com/11-can-change-occur-at-an-instant.html" }
          ],
          practice: [
            { prompt: "A car's position is s(t) = t² + 2t (meters), t in seconds. Find its average velocity on [1, 4].", answer: "Average velocity = [s(4) - s(1)] / (4 - 1) = [(16+8) - (1+2)] / 3 = 21/3 = 7 m/s" },
            { prompt: "Using the same s(t), estimate the instantaneous velocity at t = 1 using the average rate of change over [1, 1.01].", answer: "[s(1.01) - s(1)] / 0.01 = [3.0401 - 3] / 0.01 ≈ 4.01 — close to the exact instantaneous velocity of 4." }
          ],
          deltamath: [
            { label: "1.1 Change at an Instant", url: "https://www.deltamath.com/app/assignment/33425146" }
          ]
        }
      },
      "2026-08-17": {
        notes: { label: "Guided Notes: 1.2–1.4", file: "files/AP_Calc_Unit1_Guided_Notes_Filled_In.pdf#page=3" },
        homework: [
          { label: "Lesson 1.2 Homework (blank)", file: "files/AP_Calc_Unit1_Homework_Packet.pdf#page=7" }
        ],
        homeworkAnswers: [
          { label: "Lesson 1.2 Homework — Answer Key", file: "files/AP_Calc_Unit1_Homework_Answer_Key.pdf#page=3" }
        ],
        videos: [
          { title: "1.2 — Defining Limits and Using Limit Notation", url: "https://calculus.flippedmath.com/12-defining-limits-and-using-limit-notation.html" },
          { title: "1.3 — Limit Values from Graphs", url: "https://calculus.flippedmath.com/13-limit-values-from-graphs.html" },
          { title: "1.4 — Limit Values from Tables", url: "https://calculus.flippedmath.com/14-limit-values-from-tables.html" }
        ],
        practice: [
          { prompt: "Use correct limit notation to express: as x approaches 3, f(x) approaches 7.", answer: "lim(x→3) f(x) = 7" },
          { prompt: "A table shows f(1.9)=3.8, f(1.99)=3.98, f(1.999)=3.998, f(2.001)=4.002, f(2.01)=4.02, f(2.1)=4.2. What does this suggest about lim(x→2) f(x)?", answer: "4 — the values approach 4 from both sides as x gets closer to 2." }
        ],
        deltamath: [
          { label: "1.2 Defining Limits", url: "https://www.deltamath.com/app/assignment/33425147" }
        ]
      },
      "2026-08-18": {
        notes: { label: "Guided Notes: 1.5–1.7", file: "files/AP_Calc_Unit1_Guided_Notes_Filled_In.pdf#page=8" },
        homework: [
          { label: "Lesson 1.5 Homework (blank)", file: "files/AP_Calc_Unit1_Homework_Packet.pdf#page=19" }
        ],
        homeworkAnswers: [
          { label: "Lesson 1.5 Homework — Answer Key", file: "files/AP_Calc_Unit1_Homework_Answer_Key.pdf#page=7" }
        ],
        videos: [
          { title: "1.5 — Determining Limits Using Algebraic Properties", url: "https://calculus.flippedmath.com/15-determining-limits-using-algebraic-properties.html" },
          { title: "1.6 — Determining Limits Using Algebraic Manipulation", url: "https://calculus.flippedmath.com/16-determining-limits-using-algebraic-manipulation.html" },
          { title: "1.7 — Selecting Procedures for Determining Limits", url: "https://calculus.flippedmath.com/17-selecting-procedures-for-determining-limits.html" }
        ],
        practice: [
          { prompt: "Evaluate: lim(x→2) (x² - 4)/(x - 2)", answer: "Factor: (x-2)(x+2)/(x-2) = x + 2 for x ≠ 2. Limit = 2 + 2 = 4." },
          { prompt: "Evaluate: lim(x→0) (√(x+4) - 2)/x", answer: "Rationalize by multiplying by (√(x+4)+2)/(√(x+4)+2): the numerator becomes x, giving 1/(√(x+4)+2). As x→0: 1/(2+2) = 1/4." }
        ],
        deltamath: [
          { label: "1.5 Tools for Evaluating Limits Analytically", url: "https://www.deltamath.com/app/assignment/33425152" }
        ]
      },
      "2026-08-19": {
        notes: { label: "Guided Notes: 1.8–1.9", file: "files/AP_Calc_Unit1_Guided_Notes_Filled_In.pdf#page=12" },
        homework: [
          { label: "Lesson 1.6 Homework (blank)", file: "files/AP_Calc_Unit1_Homework_Packet.pdf#page=22" }
        ],
        homeworkAnswers: [
          { label: "Lesson 1.6 Homework — Answer Key", file: "files/AP_Calc_Unit1_Homework_Answer_Key.pdf#page=8" }
        ],
        videos: [
          { title: "1.8 — Determining Limits Using the Squeeze Theorem", url: "https://calculus.flippedmath.com/18-determining-limits-using-the-squeeze-theorem.html" },
          { title: "1.9 — Connecting Multiple Representations of Limits", url: "https://calculus.flippedmath.com/19-connecting-multiple-representations-of-limits.html" }
        ],
        practice: [
          { prompt: "State the two special trig limits used alongside the Squeeze Theorem.", answer: "lim(x→0) sin(x)/x = 1, and lim(x→0) (1 - cos(x))/x = 0" },
          { prompt: "Evaluate: lim(x→0) sin(3x)/x", answer: "Rewrite as 3 · sin(3x)/(3x). As x→0, 3x→0 too, so sin(3x)/(3x) → 1. Limit = 3 · 1 = 3." }
        ],
        deltamath: [
          { label: "1.6 The Squeeze Theorem", url: "https://www.deltamath.com/app/assignment/33425153" }
        ]
      },
      "2026-08-20": {
        notes: { label: "Guided Notes: 1.10–1.13, 1.16", file: "files/AP_Calc_Unit1_Guided_Notes_Filled_In.pdf#page=15" },
        homework: [
          { label: "Lesson 1.7 Homework (blank)", file: "files/AP_Calc_Unit1_Homework_Packet.pdf#page=25" },
          { label: "Lesson 1.8 Homework (blank)", file: "files/AP_Calc_Unit1_Homework_Packet.pdf#page=29" }
        ],
        homeworkAnswers: [
          { label: "Lesson 1.7 Homework — Answer Key", file: "files/AP_Calc_Unit1_Homework_Answer_Key.pdf#page=9" },
          { label: "Lesson 1.8 Homework — Answer Key", file: "files/AP_Calc_Unit1_Homework_Answer_Key.pdf#page=11" }
        ],
        videos: [
          { title: "1.10 — Exploring Types of Discontinuities", url: "https://calculus.flippedmath.com/110-exploring-types-of-discontinuities.html" },
          { title: "1.11 — Defining Continuity at a Point", url: "https://calculus.flippedmath.com/111-defining-continuity-at-a-point.html" },
          { title: "1.12 — Confirming Continuity Over an Interval", url: "https://calculus.flippedmath.com/112-confirming-continuity-over-an-interval.html" },
          { title: "1.13 — Removing Discontinuities", url: "https://calculus.flippedmath.com/113-removing-discontinuities.html" },
          { title: "1.16 — Intermediate Value Theorem", url: "https://calculus.flippedmath.com/116-intermediate-value-theorem.html" }
        ],
        practice: [
          { prompt: "Classify the discontinuity of f(x) = (x² - 1)/(x - 1) at x = 1.", answer: "Factors to (x-1)(x+1)/(x-1) = x+1 for x≠1, so the limit exists (=2) but f(1) is undefined — a removable discontinuity (hole)." },
          { prompt: "f is continuous on [1, 4], with f(1) = -3 and f(4) = 5. Does f have a zero in (1, 4)? Why?", answer: "Yes, by the Intermediate Value Theorem — since f is continuous and 0 is between f(1) = -3 and f(4) = 5, there must be some c in (1, 4) with f(c) = 0." }
        ],
        deltamath: [
          { label: "1.7 Continuity and Discontinuity", url: "https://www.deltamath.com/app/assignment/33425154" },
          { label: "1.8 Removing Discontinuities", url: "https://www.deltamath.com/app/assignment/33425155" }
        ]
      },
      "2026-08-21": {
        notes: { label: "Guided Notes: 1.10–1.13, 1.16", file: "files/AP_Calc_Unit1_Guided_Notes_Filled_In.pdf#page=15" },
        homework: [
          { label: "Lesson 1.9 Homework (blank)", file: "files/AP_Calc_Unit1_Homework_Packet.pdf#page=33" }
        ],
        homeworkAnswers: [
          { label: "Lesson 1.9 Homework — Answer Key", file: "files/AP_Calc_Unit1_Homework_Answer_Key.pdf#page=12" }
        ],
        videos: [
          { title: "1.10 — Exploring Types of Discontinuities", url: "https://calculus.flippedmath.com/110-exploring-types-of-discontinuities.html" },
          { title: "1.11 — Defining Continuity at a Point", url: "https://calculus.flippedmath.com/111-defining-continuity-at-a-point.html" },
          { title: "1.12 — Confirming Continuity Over an Interval", url: "https://calculus.flippedmath.com/112-confirming-continuity-over-an-interval.html" },
          { title: "1.13 — Removing Discontinuities", url: "https://calculus.flippedmath.com/113-removing-discontinuities.html" },
          { title: "1.16 — Intermediate Value Theorem", url: "https://calculus.flippedmath.com/116-intermediate-value-theorem.html" }
        ],
        practice: [
          { prompt: "Is f(x) = (x² - 9)/(x + 3) continuous at x = -3? If not, can the discontinuity be removed?", answer: "f(-3) is undefined (0/0 form), so f is not continuous there. But (x²-9)/(x+3) = x - 3 for x ≠ -3, so the limit exists (= -6) — it's a removable discontinuity. Redefining f(-3) = -6 would make it continuous." },
          { prompt: "State the three conditions required for f to be continuous at x = c.", answer: "1) f(c) is defined, 2) lim(x→c) f(x) exists, and 3) lim(x→c) f(x) = f(c)." }
        ],
        deltamath: [
          { label: "1.9 the Intermediate Value Theorem", url: "https://www.deltamath.com/app/assignment/33425156" }
        ]
      },
      "2026-08-24": {
        notes: { label: "Guided Notes: 1.14–1.15", file: "files/AP_Calc_Unit1_Guided_Notes_Filled_In.pdf#page=19" },
        homework: [
          { label: "Lesson 1.3 Homework (blank)", file: "files/AP_Calc_Unit1_Homework_Packet.pdf#page=13" },
          { label: "Lesson 1.4 Homework (blank)", file: "files/AP_Calc_Unit1_Homework_Packet.pdf#page=15" }
        ],
        homeworkAnswers: [
          { label: "Lesson 1.3 Homework — Answer Key", file: "files/AP_Calc_Unit1_Homework_Answer_Key.pdf#page=5" },
          { label: "Lesson 1.4 Homework — Answer Key", file: "files/AP_Calc_Unit1_Homework_Answer_Key.pdf#page=6" }
        ],
        videos: [
          { title: "1.14 — Infinite Limits and Vertical Asymptotes", url: "https://calculus.flippedmath.com/114-infinite-limits-and-vertical-asymptotes.html" },
          { title: "1.15 — Limits at Infinity and Horizontal Asymptotes", url: "https://calculus.flippedmath.com/115-limits-at-infinity-and-horizontal-asymptotes.html" }
        ],
        practice: [
          { prompt: "Find the vertical asymptote of f(x) = 1/(x - 3) and describe the behavior of f(x) as x→3⁻ and x→3⁺.", answer: "Vertical asymptote at x = 3. As x→3⁻, f(x)→-∞. As x→3⁺, f(x)→+∞." },
          { prompt: "Find the horizontal asymptote of f(x) = (2x² + 1)/(x² - 4) as x→∞.", answer: "The numerator and denominator have the same degree, so the horizontal asymptote is the ratio of leading coefficients: y = 2/1 = 2." }
        ],
        deltamath: [
          { label: "1.4 Limits at Infinity", url: "https://www.deltamath.com/app/assignment/33425151" }
        ]
      }
    },

    units: [
      {
        id: "unit1",
        name: "Unit 1: Limits and Continuity",
        resources: [
          { label: "Homework Answer Key (Lessons 1.1–1.9)", file: "files/AP_Calc_Unit1_Homework_Answer_Key.pdf" },
          { label: "Guided Notes — Filled In (Lessons 1.1–1.16)", file: "files/AP_Calc_Unit1_Guided_Notes_Filled_In.pdf" }
        ]
      }
    ],

    // ---- Prerequisite skills review — not tied to a specific unit. Add more
    // skill categories or problems any time; each renders as its own
    // reveal-answer section on the AP Calc tab. ----
    prereqSkills: [
      {
        name: "Factoring",
        problems: [
          { prompt: "Factor completely: x² - 5x - 14", answer: "(x - 7)(x + 2)" },
          { prompt: "Factor completely: 4x² - 25", answer: "(2x - 5)(2x + 5) — difference of squares." },
          { prompt: "Factor completely: 2x³ - 16", answer: "2(x³ - 8) = 2(x - 2)(x² + 2x + 4) — factor out the GCF first, then use the difference of cubes." },
          { prompt: "Factor by grouping: x³ + 3x² - 4x - 12", answer: "x²(x + 3) - 4(x + 3) = (x + 3)(x² - 4) = (x + 3)(x - 2)(x + 2)" },
          { prompt: "Factor completely: 6x² + 7x - 3", answer: "(2x + 3)(3x - 1)" }
        ]
      },
      {
        name: "Unit Circle",
        problems: [
          { prompt: "Evaluate exactly: sin(π/3)", answer: "√3/2" },
          { prompt: "Evaluate exactly: cos(5π/6)", answer: "-√3/2" },
          { prompt: "Evaluate exactly: tan(π/4)", answer: "1" },
          { prompt: "Evaluate exactly: sin(3π/2)", answer: "-1" },
          { prompt: "Evaluate exactly: cos(7π/4)", answer: "√2/2" },
          { prompt: "Find all θ in [0, 2π) where sin(θ) = -1/2", answer: "θ = 7π/6 and θ = 11π/6" }
        ]
      },
      {
        name: "Log and Exponent Rules",
        problems: [
          { prompt: "Simplify: log₂(8) + log₂(4)", answer: "log₂(8) = 3 and log₂(4) = 2, so the sum is 5. (Equivalently, log₂(8·4) = log₂(32) = 5.)" },
          { prompt: "Simplify: 2³ · 2⁻⁵", answer: "2^(3 + (-5)) = 2⁻² = 1/4" },
          { prompt: "Solve for x: 3^(x+1) = 27", answer: "27 = 3³, so x + 1 = 3 → x = 2" },
          { prompt: "Simplify: ln(e⁴) - ln(e²)", answer: "4 - 2 = 2 (using ln(eᵏ) = k)" },
          { prompt: "Solve for x: log(x) + log(x - 3) = 1", answer: "log(x(x-3)) = 1 → x(x-3) = 10 → x² - 3x - 10 = 0 → (x-5)(x+2) = 0 → x = 5 or x = -2. Reject x = -2 (log of a negative number is undefined), so x = 5." },
          { prompt: "Simplify using exponent rules: (x³y⁻²)² / (x⁻¹y⁴)", answer: "x⁶y⁻⁴ / (x⁻¹y⁴) = x^(6-(-1)) · y^(-4-4) = x⁷y⁻⁸ = x⁷/y⁸" }
        ]
      },
      {
        name: "Rationalizing Radical Expressions",
        problems: [
          { prompt: "Rationalize the denominator: 5 / (√7 - 2)", answer: "Multiply by (√7 + 2)/(√7 + 2): 5(√7 + 2) / (7 - 4) = 5(√7 + 2)/3" },
          { prompt: "Rationalize the numerator and simplify: (√x - 3) / (x - 9)", answer: "x - 9 = (√x - 3)(√x + 3), so the expression simplifies to 1/(√x + 3), for x ≠ 9." },
          { prompt: "Rationalize the numerator and simplify: (√(x + 9) - 3) / x", answer: "Multiply by (√(x+9) + 3)/(√(x+9) + 3): numerator becomes (x+9) - 9 = x, giving x / [x(√(x+9) + 3)] = 1/(√(x+9) + 3)." },
          { prompt: "Rationalize the numerator and simplify: (√(x + h) - √x) / h — this is exactly the setup you'll use to find the derivative of √x.", answer: "Multiply by (√(x+h) + √x)/(√(x+h) + √x): numerator becomes (x+h) - x = h, giving h / [h(√(x+h) + √x)] = 1/(√(x+h) + √x)." }
        ]
      },
      {
        name: "Difference Quotients & Simplifying Rational Expressions",
        problems: [
          { prompt: "Simplify the difference quotient [f(x+h) - f(x)] / h for f(x) = x²", answer: "[(x+h)² - x²]/h = [2xh + h²]/h = 2x + h" },
          { prompt: "Simplify the difference quotient [f(x+h) - f(x)] / h for f(x) = 3x + 5", answer: "[3(x+h)+5 - (3x+5)]/h = 3h/h = 3" },
          { prompt: "Simplify the difference quotient [f(x+h) - f(x)] / h for f(x) = 1/x", answer: "[1/(x+h) - 1/x]/h = [(x - (x+h)) / (x(x+h))]/h = [-h / (x(x+h))]/h = -1 / (x(x+h))" },
          { prompt: "Simplify: (x² - 9) / (x² + x - 12)", answer: "(x-3)(x+3) / [(x+4)(x-3)] = (x+3)/(x+4), for x ≠ 3" }
        ]
      },
      {
        name: "Point-Slope Form & Equations of Lines",
        problems: [
          { prompt: "Write the equation of the line through (2, 5) with slope 3.", answer: "y - 5 = 3(x - 2), or y = 3x - 1" },
          { prompt: "A curve passes through (1, 4) with slope -2 at that point. Write the equation of the tangent line there.", answer: "y - 4 = -2(x - 1), or y = -2x + 6" },
          { prompt: "Find the slope of the line through (-1, 3) and (4, -7).", answer: "m = (-7 - 3)/(4 - (-1)) = -10/5 = -2" },
          { prompt: "Write the equation of the line through (0, -3) parallel to y = ½x + 7.", answer: "Parallel lines share a slope: y = ½x - 3" },
          { prompt: "Write the equation of the line through (3, 2) perpendicular to y = -¼x + 1.", answer: "Perpendicular slope is the negative reciprocal: 4. y - 2 = 4(x - 3), or y = 4x - 10" }
        ]
      },
      {
        name: "Piecewise Functions",
        problems: [
          { prompt: "For f(x) = { x² if x < 1 ; 2x + 1 if x ≥ 1 }, find f(1), f(-2), and f(3).", answer: "f(1) = 2(1)+1 = 3 (use the x ≥ 1 piece). f(-2) = (-2)² = 4. f(3) = 2(3)+1 = 7." },
          { prompt: "Is the function from the previous problem continuous at x = 1?", answer: "As x → 1⁻, x² → 1. But f(1) = 3 from the other piece. Since 1 ≠ 3, there's a jump discontinuity — not continuous at x = 1." },
          { prompt: "Describe f(x) = { -x if x < 0 ; x² if x ≥ 0 } at x = 0. Is it continuous there?", answer: "Both pieces approach 0 as x → 0, and f(0) = 0, so yes — continuous at x = 0. (The left piece is a line with negative slope; the right piece is the right half of an upward parabola.)" },
          { prompt: "Find the value of k that makes f(x) = { kx + 1 if x ≤ 2 ; x² - 3 if x > 2 } continuous at x = 2.", answer: "Left side: 2k + 1. Right side: (2)² - 3 = 1. Set them equal: 2k + 1 = 1 → k = 0." }
        ]
      },
      {
        name: "Solving Polynomial & Rational Inequalities",
        problems: [
          { prompt: "Solve: x² - x - 6 > 0", answer: "Factor: (x - 3)(x + 2) > 0. Critical points x = -2, 3. Testing intervals: x < -2 or x > 3." },
          { prompt: "Solve: (x - 1) / (x + 2) ≤ 0", answer: "Critical points: x = 1 (zero), x = -2 (undefined, excluded). Testing intervals: -2 < x ≤ 1." },
          { prompt: "Solve: x³ - 4x ≤ 0", answer: "Factor: x(x - 2)(x + 2) ≤ 0. Critical points -2, 0, 2. Testing intervals: x ≤ -2 or 0 ≤ x ≤ 2." },
          { prompt: "Solve: (x² - 9) / (x - 1) > 0", answer: "Critical points: x = -3, 1, 3. Testing intervals: -3 < x < 1 or x > 3." }
        ]
      },
      {
        name: "Trig Identities",
        problems: [
          { prompt: "Simplify using a Pythagorean identity: 1 - sin²(x)", answer: "cos²(x)" },
          { prompt: "Simplify: sin(x)/cos(x) + cos(x)/sin(x)", answer: "Combine over a common denominator: (sin²x + cos²x) / (sinx · cosx) = 1 / (sinx · cosx), using the Pythagorean identity in the numerator." },
          { prompt: "Use a double-angle identity to rewrite sin(2x).", answer: "2 sin(x) cos(x)" },
          { prompt: "Use a double-angle identity to rewrite cos(2x) in terms of cos(x) only.", answer: "2cos²(x) - 1" },
          { prompt: "Verify the identity: (1 - cos(2x)) / 2 = sin²(x)", answer: "Substitute cos(2x) = 1 - 2sin²(x): (1 - (1 - 2sin²x)) / 2 = (2sin²x)/2 = sin²(x). ✓" }
        ]
      }
    ],

    // ---- Parent function recognition — reuses the same reference graph images
    // as Honors Unit 1 (images/graphs/), just as a standalone quick-recall drill. ----
    parentFunctionPractice: [
      { image: "images/graphs/linear.png", prompt: "Which parent function is this?", answer: "Linear parent function: f(x) = x" },
      { image: "images/graphs/quadratic.png", prompt: "Which parent function is this?", answer: "Quadratic parent function: f(x) = x²" },
      { image: "images/graphs/cubic.png", prompt: "Which parent function is this?", answer: "Cubic parent function: f(x) = x³" },
      { image: "images/graphs/absolute_value.png", prompt: "Which parent function is this?", answer: "Absolute value parent function: f(x) = |x|" },
      { image: "images/graphs/square_root.png", prompt: "Which parent function is this?", answer: "Square root parent function: f(x) = √x" },
      { image: "images/graphs/cube_root.png", prompt: "Which parent function is this?", answer: "Cube root parent function: f(x) = ∛x" },
      { image: "images/graphs/reciprocal.png", prompt: "Which parent function is this?", answer: "Reciprocal parent function: f(x) = 1/x" },
      { image: "images/graphs/exponential.png", prompt: "Which parent function is this?", answer: "Exponential parent function: f(x) = 2ˣ" },
      { image: "images/graphs/logarithmic.png", prompt: "Which parent function is this?", answer: "Logarithmic parent function: f(x) = log(x)" },
      { image: "images/graphs/sine.png", prompt: "Which parent function is this?", answer: "Sine parent function: f(x) = sin(x)" },
      { image: "images/graphs/cosine.png", prompt: "Which parent function is this?", answer: "Cosine parent function: f(x) = cos(x)" },
      { image: "images/graphs/step_function.png", prompt: "Which parent function is this?", answer: "Step (greatest integer) parent function: f(x) = ⌊x⌋" },
      { image: "images/graphs/constant.svg", prompt: "Which parent function is this?", answer: "Constant function: f(x) = c (a horizontal line)" },
      { image: "images/graphs/reciprocal_squared.svg", prompt: "Which parent function is this?", answer: "Reciprocal of a square: f(x) = 1/x²" },
      { image: "images/graphs/semicircle.svg", prompt: "Which parent function is this?", answer: "Semicircle: f(x) = √(r² - x²)" },
      { image: "images/graphs/exponential_decay.svg", prompt: "Which parent function is this?", answer: "Exponential decay: f(x) = (1/2)ˣ" },
      { image: "images/graphs/arctan.svg", prompt: "Which parent function is this?", answer: "Arctangent: f(x) = arctan(x)" },
      { image: "images/graphs/abs_x_over_x.svg", prompt: "Which parent function is this?", answer: "Absolute value of x over x: f(x) = |x|/x (equals 1 for x > 0, -1 for x < 0, undefined at x = 0)" }
    ]
  }
};
