export type ProjectStatus = "Live" | "MVP" | "In development" | "Case study";

export type Screenshot = {
  src: string;
  alt: string;
  width: number;
  height: number;
  kind: "desktop" | "mobile" | "portrait";
};

export type CaseStudy = {
  problem: string;
  approach: string;
  outcome: string;
  highlights: string[];
};

export type Project = {
  name: string;
  slug: string;
  description: string;
  stack: string[];
  status: ProjectStatus;
  featured: boolean;
  githubUrl: string;
  demoUrl?: string;
  accent: string;
  metric: string;
  image: Screenshot;
  gallery: Screenshot[];
  caseStudy: CaseStudy;
};

export const projects: Project[] = [
  {
    name: "Smart Queue System",
    slug: "pametni-sistem-cakalnice",
    description:
      "Queue-management system for clinics, reception desks and public service counters — with live status, a staff control panel and a public waiting-room display.",
    stack: ["React", "TypeScript", "Vite"],
    status: "MVP",
    featured: true,
    githubUrl: "https://github.com/flegartech-mvp/pametni-sistem-cakalnice",
    accent: "from-[#75b183] to-[#a775d1]",
    metric: "Queue system",
    image: {
      src: "/projects/pametni-sistem-cakalnice/hero-dashboard.webp",
      alt: "Smart Queue System operator dashboard showing live queue metrics",
      width: 1440,
      height: 900,
      kind: "desktop",
    },
    gallery: [
      {
        src: "/projects/pametni-sistem-cakalnice/queues.webp",
        alt: "Department queue control board for managing and calling waiting visitors",
        width: 1440,
        height: 1000,
        kind: "desktop",
      },
      {
        src: "/projects/pametni-sistem-cakalnice/patient-list.webp",
        alt: "Patient list with search, filters and status indicators",
        width: 1440,
        height: 1000,
        kind: "desktop",
      },
      {
        src: "/projects/pametni-sistem-cakalnice/reports.webp",
        alt: "Daily patient-flow reporting dashboard",
        width: 1440,
        height: 900,
        kind: "desktop",
      },
      {
        src: "/projects/pametni-sistem-cakalnice/public-display.webp",
        alt: "Public waiting-room display screen that shows queue status without patient names",
        width: 1440,
        height: 900,
        kind: "desktop",
      },
      {
        src: "/projects/pametni-sistem-cakalnice/mobile-dashboard.webp",
        alt: "Smart Queue System operator dashboard on a mobile screen",
        width: 390,
        height: 844,
        kind: "mobile",
      },
    ],
    caseStudy: {
      problem:
        "Waiting rooms run on paper lists and guesswork: visitors don't know how long they'll wait, and staff have no clean way to manage the queue or communicate delays.",
      approach:
        "A React/Vite web app with two faces — a public display that shows live queue status without exposing patient names, and a staff side for check-in, search, status updates, room assignment and a simple call-next flow. A reporting view summarises daily patient flow.",
      outcome:
        "A working MVP that demonstrates the full loop: visitors join the queue and see live status while staff control everything from a clear dashboard. Structured so booking or notifications can be added without rework.",
      highlights: [
        "Live queue status on a public display, no names shown",
        "Staff dashboard for check-in, search and call-next",
        "Room assignment and priority handling",
        "Daily flow reporting for clinics, offices and counters",
      ],
    },
  },
  {
    name: "AvtoNetGaraža",
    slug: "avtonet-garage",
    description:
      "Chrome extension for avto.net that saves vehicle listings, monitors price changes and rates listing quality with a built-in Smart Advisor risk score.",
    stack: ["Chrome Extension", "React", "Manifest V3", "Service Worker"],
    status: "MVP",
    featured: true,
    githubUrl: "https://github.com/flegartech-mvp/avtonet-garage",
    accent: "from-[#75b183] to-[#9eb0bd]",
    metric: "Vehicle tool",
    image: {
      src: "/projects/avtonet-garage/hero-garage.webp",
      alt: "AvtoNetGaraža Chrome extension popup listing saved vehicles in a personal garage",
      width: 760,
      height: 468,
      kind: "portrait",
    },
    gallery: [
      {
        src: "/projects/avtonet-garage/advisor-on-listing.webp",
        alt: "AvtoNetGaraža Smart Advisor and Save button injected into an avto.net car listing",
        width: 1440,
        height: 900,
        kind: "desktop",
      },
      {
        src: "/projects/avtonet-garage/notifications.webp",
        alt: "Extension notifications view for price-change and listing alerts",
        width: 760,
        height: 680,
        kind: "portrait",
      },
    ],
    caseStudy: {
      problem:
        "Shopping for a car on avto.net means juggling browser tabs, re-finding listings and never knowing whether a price dropped or a listing quietly disappeared.",
      approach:
        "A Manifest V3 Chrome extension that adds a personal garage on top of the marketplace: a save button injected on every detail page, a background service worker that polls saved listings for price changes, and a Smart Advisor that scores listing quality from 0–100 with red flags, positives and rough price sanity checks.",
      outcome:
        "A working MVP that turns marketplace browsing into a tracked, comparable shortlist — a good example of extending a platform users already live in instead of building a separate app.",
      highlights: [
        "Save and organise listings in colour-coded folders",
        "Background price monitoring with price history",
        "Smart Advisor 0–100 listing risk score",
        "Sold / removed detection with optional alerts",
      ],
    },
  },
  {
    name: "DriveWise",
    slug: "drivewise",
    description:
      "Open-source driving-telematics MVP that turns raw trip data into driver safety scores, risk maps and a fleet-ready dashboard.",
    stack: ["TypeScript", "NestJS", "React", "React Native", "Monorepo"],
    status: "MVP",
    featured: true,
    githubUrl: "https://github.com/flegartech-mvp/drivewise",
    accent: "from-[#75b183] to-[#5f95d8]",
    metric: "Telematics MVP",
    image: {
      src: "/projects/drivewise/hero-overview.webp",
      alt: "DriveWise telematics dashboard overview with seeded trips and safety scores",
      width: 1440,
      height: 900,
      kind: "desktop",
    },
    gallery: [
      {
        src: "/projects/drivewise/trips.webp",
        alt: "Trip table showing simulated driving data and per-trip scores",
        width: 1440,
        height: 900,
        kind: "desktop",
      },
      {
        src: "/projects/drivewise/risk-map.webp",
        alt: "Risk map and heatmap highlighting where driving risk accumulates",
        width: 1440,
        height: 900,
        kind: "desktop",
      },
      {
        src: "/projects/drivewise/simulation.webp",
        alt: "Simulation tools for generating demo driving data",
        width: 1440,
        height: 900,
        kind: "desktop",
      },
      {
        src: "/projects/drivewise/mobile-overview.webp",
        alt: "DriveWise dashboard overview on a mobile screen",
        width: 390,
        height: 844,
        kind: "mobile",
      },
    ],
    caseStudy: {
      problem:
        "Trip data from vehicles is abundant but unreadable — raw coordinates and speed logs don't tell a fleet manager which drivers are safe or where risk accumulates.",
      approach:
        "A TypeScript monorepo — a NestJS API, a React/Vite dashboard, an Expo React Native app and shared scoring, sensor and simulation packages. A transparent scoring engine turns trips into driver safety scores, and a risk map surfaces where harsh events cluster.",
      outcome:
        "An MVP that proves the core value: generate or upload trips, get explainable scores and a dashboard a fleet operator can act on. The data model is ready for live feeds from real telematics hardware.",
      highlights: [
        "Explainable driver scoring from raw trip data",
        "Fleet dashboard with per-trip drill-down",
        "Risk map and heatmap of harsh events",
        "Monorepo with a built-in simulation engine",
      ],
    },
  },
  {
    name: "Auto Life Logger",
    slug: "auto-life-logger",
    description:
      "Local-first Chrome extension that tracks browsing time, classifies sites as productive or distracting, and nudges you back to focus with interventions and a Strict Mode.",
    stack: ["Chrome Extension", "JavaScript", "Manifest V3"],
    status: "MVP",
    featured: true,
    githubUrl: "https://github.com/flegartech-mvp/auto-life-logger",
    accent: "from-[#75b183] to-[#82a8e8]",
    metric: "Focus tool",
    image: {
      src: "/projects/auto-life-logger/hero-dashboard.webp",
      alt: "Auto Life Logger dashboard summarising browsing sessions, focus trends and discipline score",
      width: 1440,
      height: 900,
      kind: "desktop",
    },
    gallery: [
      {
        src: "/projects/auto-life-logger/privacy-controls.webp",
        alt: "Extension options page with local-first privacy controls",
        width: 1200,
        height: 900,
        kind: "desktop",
      },
      {
        src: "/projects/auto-life-logger/popup-today.webp",
        alt: "Extension popup showing today's tracked time and top sites",
        width: 420,
        height: 720,
        kind: "portrait",
      },
    ],
    caseStudy: {
      problem:
        "Browsing time leaks away in small distraction loops, and by the end of the day there's no honest record of where it went.",
      approach:
        "A local-first Chrome extension that times active tabs, classifies domains as productive, distracting or neutral, and surfaces daily totals, weekly trends and a discipline score. Optional notifications, on-page interventions and a Strict Mode push back when distraction loops appear. Everything is stored in chrome.storage.local — no analytics, no remote service.",
      outcome:
        "A working extension you load unpacked: it tracks sessions, detects focus patterns like loops and overruns, and reports them, all without sending data anywhere.",
      highlights: [
        "Times active tabs locally, no account needed",
        "Classifies sites and scores daily discipline",
        "Detects distraction loops, overruns and rebounds",
        "Strict Mode can block repeat offenders",
      ],
    },
  },
  {
    name: "Študentski Denar",
    slug: "studentski-denar",
    description:
      "Browser-first budgeting app for Slovenian students: track income, expenses and recurring costs with a clear safe-to-spend view — stored locally, no account required.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    status: "MVP",
    featured: true,
    githubUrl: "https://github.com/flegartech-mvp/studentski-denar",
    accent: "from-[#75b183] to-[#d6b55e]",
    metric: "Finance tool",
    image: {
      src: "/projects/studentski-denar/hero-dashboard.webp",
      alt: "Študentski Denar budgeting dashboard with a clear safe-to-spend overview",
      width: 1440,
      height: 900,
      kind: "desktop",
    },
    gallery: [
      {
        src: "/projects/studentski-denar/expenses.webp",
        alt: "Expense tracker with realistic student spending categories",
        width: 1440,
        height: 900,
        kind: "desktop",
      },
      {
        src: "/projects/studentski-denar/insights.webp",
        alt: "Spending insights and budget limits view",
        width: 1440,
        height: 900,
        kind: "desktop",
      },
      {
        src: "/projects/studentski-denar/mobile-dashboard.webp",
        alt: "Študentski Denar budgeting dashboard on a mobile screen",
        width: 390,
        height: 844,
        kind: "mobile",
      },
    ],
    caseStudy: {
      problem:
        "Students live on irregular income — student work, allowances, seasonal jobs — and mainstream budgeting apps assume a salary. The result is usually no budget at all.",
      approach:
        "A browser-first budgeting app built in React and TypeScript: income, expenses and recurring costs feed one clear 'safe to spend' number, with insights and limits to keep spending in check. Data stays in the browser — no paid APIs, no accounts and no required backend.",
      outcome:
        "A working app with budgeting, income and expense tracking and a spending-insights view, aimed at the Slovenian student market first.",
      highlights: [
        "Designed for irregular student income",
        "One clear 'safe to spend' number",
        "Local-only data — no account or backend",
        "Fast, mobile-friendly entry",
      ],
    },
  },
  {
    name: "Pulse Fitness Tracker",
    slug: "pulse-fitness-tracker",
    description:
      "Private, local-first fitness tracker: plan and run workouts, browse a 70-movement exercise library, and track volume, body weight, consistency and personal records.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    status: "MVP",
    featured: true,
    githubUrl: "https://github.com/flegartech-mvp/pulse-fitness-tracker",
    accent: "from-[#75b183] to-[#d87c68]",
    metric: "Health app",
    image: {
      src: "/projects/pulse-fitness-tracker/hero-dashboard.webp",
      alt: "Pulse fitness dashboard with training summary and seeded workout data",
      width: 1440,
      height: 900,
      kind: "desktop",
    },
    gallery: [
      {
        src: "/projects/pulse-fitness-tracker/workout-history.webp",
        alt: "Workout history and planned training sessions",
        width: 1440,
        height: 1000,
        kind: "desktop",
      },
      {
        src: "/projects/pulse-fitness-tracker/exercise-library.webp",
        alt: "Exercise library with filters across movement types",
        width: 1440,
        height: 1000,
        kind: "desktop",
      },
      {
        src: "/projects/pulse-fitness-tracker/progress-analytics.webp",
        alt: "Progress charts and personal records over time",
        width: 1440,
        height: 1000,
        kind: "desktop",
      },
      {
        src: "/projects/pulse-fitness-tracker/mobile-goals.webp",
        alt: "Goals and progress rings on a mobile screen",
        width: 390,
        height: 844,
        kind: "mobile",
      },
      {
        src: "/projects/pulse-fitness-tracker/mobile-settings.webp",
        alt: "Settings and data-export controls on a mobile screen",
        width: 390,
        height: 844,
        kind: "mobile",
      },
    ],
    caseStudy: {
      problem:
        "Most fitness apps optimise for streaks and notifications, not for honestly reviewing whether you're actually progressing.",
      approach:
        "A dark-mode, mobile-first web app focused on fast workout entry and a clean progress view: a 70-movement exercise library, body-weight and volume tracking, personal records and measurable goals. Built with React 19, TypeScript and Vite, with everything stored locally in the browser — no account, no backend.",
      outcome:
        "A working app with the logging flow, exercise library, progress analytics and goals in place; the production build runs and was used to capture these screens.",
      highlights: [
        "70-movement exercise library with filters",
        "Volume, body-weight and personal-record tracking",
        "Goals with progress rings",
        "Local-first — no account or backend required",
      ],
    },
  },
  {
    name: "YouTube Focus Mode",
    slug: "youtube-focus",
    description:
      "Chrome extension that calms YouTube — one toggle hides the feed, Shorts, comments and related videos, with an optional Timed Lock for focus sessions. Local-only, no tracking.",
    stack: ["Chrome Extension", "JavaScript", "Manifest V3"],
    status: "MVP",
    featured: false,
    githubUrl: "https://github.com/flegartech-mvp/youtube-focus",
    accent: "from-[#75b183] to-[#d85f5f]",
    metric: "Focus extension",
    image: {
      src: "/projects/youtube-focus/hero-focus-on.webp",
      alt: "YouTube Focus Mode extension popup with Focus Mode enabled",
      width: 380,
      height: 596,
      kind: "portrait",
    },
    gallery: [
      {
        src: "/projects/youtube-focus/overlay-desktop.webp",
        alt: "YouTube home feed hidden by the extension while Focus Mode is on",
        width: 1440,
        height: 900,
        kind: "desktop",
      },
      {
        src: "/projects/youtube-focus/overlay-mobile.webp",
        alt: "YouTube with distractions hidden on a mobile screen",
        width: 390,
        height: 844,
        kind: "mobile",
      },
    ],
    caseStudy: {
      problem:
        "YouTube is a work tool and a distraction machine in the same tab — one tutorial can cost an hour of recommendations and Shorts.",
      approach:
        "A Chrome extension with a one-click Focus Mode that hides the feed, Shorts surfaces, comments, related videos, Explore and Trending, leaving a search-first YouTube. A Timed Lock supports 25, 50, 90-minute or custom sessions. Settings and themes are stored locally with chrome.storage.local; nothing is tracked.",
      outcome:
        "A working MVP. Because YouTube changes its markup often, it leans on a mix of route checks, CSS rules and DOM selectors and is smoke-tested against the live UI before each release.",
      highlights: [
        "One-click Focus Mode hides distractions",
        "Timed Lock for 25 / 50 / 90-minute or custom sessions",
        "Search-first blocked-page experience",
        "Local-only settings and themes, no analytics",
      ],
    },
  },
  {
    name: "AI E-commerce Bot",
    slug: "ai-automation-bot",
    description:
      "Configurable AI support bot for online stores: it answers product and order questions, collects order leads and gives the owner an admin dashboard. Runs in local demo mode without a key.",
    stack: ["Node.js", "Express", "OpenAI API", "JavaScript"],
    status: "MVP",
    featured: true,
    githubUrl: "https://github.com/flegartech-mvp/ai-automation-bot",
    accent: "from-[#75b183] to-[#c8d85f]",
    metric: "AI support bot",
    image: {
      src: "/projects/ai-automation-bot/hero-chat.webp",
      alt: "AI e-commerce support chat answering a customer question in a demo conversation",
      width: 1440,
      height: 900,
      kind: "desktop",
    },
    gallery: [
      {
        src: "/projects/ai-automation-bot/admin-dashboard.webp",
        alt: "Store-owner admin dashboard with demo leads and saved conversations",
        width: 1440,
        height: 900,
        kind: "desktop",
      },
      {
        src: "/projects/ai-automation-bot/mobile-chat.webp",
        alt: "AI support chat on a mobile screen in a demo conversation",
        width: 390,
        height: 844,
        kind: "mobile",
      },
    ],
    caseStudy: {
      problem:
        "Small online stores get the same product and order questions over and over, and lose leads when no one replies fast enough.",
      approach:
        "A configurable support bot: the store's products, hours and tone live in a single business-config file, and the bot answers customer questions, captures order leads and saves every conversation. A built-in admin dashboard lets the owner review leads and chats. It uses the OpenAI API when a key is set, and falls back to a local demo mode so the whole flow can be tested without one.",
      outcome:
        "A working app with a customer chat UI and an owner admin dashboard, shown here in demo mode with fictional conversations and leads.",
      highlights: [
        "Answers product and order questions",
        "Captures order leads automatically",
        "Owner admin dashboard for leads and chats",
        "Local demo mode — no API key required",
      ],
    },
  },
  {
    name: "FlegarTech Website",
    slug: "flegartech-site",
    description:
      "This site — the FlegarTech portfolio and project showcase. Next.js, TypeScript and Tailwind CSS, with per-project case studies, a blog and SEO metadata baked in.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    status: "MVP",
    featured: false,
    githubUrl: "https://github.com/flegartech-mvp/flegartech-site",
    accent: "from-[#75b183] to-[#68d4c5]",
    metric: "This site",
    image: {
      src: "/projects/flegartech-site/hero-home.webp",
      alt: "FlegarTech homepage hero with services and project positioning",
      width: 1440,
      height: 900,
      kind: "desktop",
    },
    gallery: [
      {
        src: "/projects/flegartech-site/projects-grid.webp",
        alt: "All-projects portfolio grid on the FlegarTech site",
        width: 1440,
        height: 1000,
        kind: "desktop",
      },
      {
        src: "/projects/flegartech-site/case-study.webp",
        alt: "DriveWise case-study page on the FlegarTech site",
        width: 1440,
        height: 1000,
        kind: "desktop",
      },
      {
        src: "/projects/flegartech-site/blog-index.webp",
        alt: "Blog index with editorial article cards",
        width: 1440,
        height: 900,
        kind: "desktop",
      },
      {
        src: "/projects/flegartech-site/mobile-home.webp",
        alt: "FlegarTech homepage on a mobile screen",
        width: 390,
        height: 844,
        kind: "mobile",
      },
    ],
    caseStudy: {
      problem:
        "FlegarTech needed a single, credible home for its work — somewhere each project is presented honestly with real screenshots, a clear status and the story behind it.",
      approach:
        "A statically-rendered Next.js site with per-project case studies, a blog, structured metadata and accessible, responsive layouts. Real product screenshots are optimised to WebP and lazy-loaded; the design is dark, fast and content-first.",
      outcome:
        "A complete, statically-rendered portfolio that showcases every FlegarTech project with case studies, screenshot galleries and a link to each repository — built and ready to deploy.",
      highlights: [
        "Per-project case studies with real screenshots",
        "Accessible, responsive, dark-mode design",
        "SEO metadata, sitemap and JSON-LD",
        "Statically rendered and deployed on Vercel",
      ],
    },
  },
  {
    name: "AI Trading Strategy Bot",
    slug: "ai-bot",
    description:
      "Open-source algorithmic-trading research tool in Python: a multi-timeframe strategy with walk-forward backtesting, paper-trading simulation and an optional ML confidence filter. Paper mode by default.",
    stack: ["Python", "ccxt", "scikit-learn", "Backtesting"],
    status: "MVP",
    featured: false,
    githubUrl: "https://github.com/flegartech-mvp/ai-bot",
    accent: "from-[#75b183] to-[#6d8cff]",
    metric: "Headless / Python",
    image: {
      src: "/projects/ai-bot/hero-technical-proof.webp",
      alt: "AI Trading Strategy Bot technical proof: CLI help, passing unit tests and a built Docker image",
      width: 1440,
      height: 1302,
      kind: "desktop",
    },
    gallery: [
      {
        src: "/projects/ai-bot/mobile-technical-proof.webp",
        alt: "Technical proof of the trading bot shown on a mobile-width terminal",
        width: 390,
        height: 844,
        kind: "mobile",
      },
    ],
    caseStudy: {
      problem:
        "Trading-strategy ideas are easy to imagine and expensive to validate — without disciplined backtesting it's impossible to tell an edge from luck.",
      approach:
        "A headless Python tool that backtests a rule-based, multi-timeframe strategy (1H bias, 15m liquidity sweep, 5m entry) against historical data, then paper-trades it on live market data via ccxt — no real orders unless explicitly opted in. An optional scikit-learn confidence filter scores signals, and everything — signals, trades, P&L, drawdown — is logged.",
      outcome:
        "A working command-line research tool. It has no GUI by design, so the screenshots here are honest technical proof: CLI help, passing unit tests and a built Docker image. It is a research and educational project — paper mode is the safe default.",
      highlights: [
        "Walk-forward backtesting engine",
        "Paper trading on live data, safe by default",
        "Optional ML confidence filter",
        "Full logging of signals, trades and P&L",
      ],
    },
  },
  {
    name: "Fullstack Template",
    slug: "fullstack-template",
    description:
      "Production-minded full-stack monorepo starter: Next.js, an Express API, PostgreSQL with Prisma, JWT auth and Docker Compose — typed end to end, ready to clone and ship.",
    stack: ["Next.js", "Express", "PostgreSQL", "Prisma", "Docker"],
    status: "MVP",
    featured: false,
    githubUrl: "https://github.com/flegartech-mvp/fullstack-template",
    accent: "from-[#75b183] to-[#68d4c5]",
    metric: "Build system",
    image: {
      src: "/projects/fullstack-template/hero-web.webp",
      alt: "Fullstack Template Next.js starter landing screen running locally",
      width: 1440,
      height: 900,
      kind: "desktop",
    },
    gallery: [
      {
        src: "/projects/fullstack-template/mobile-web.webp",
        alt: "Fullstack Template starter landing screen on a mobile screen",
        width: 390,
        height: 844,
        kind: "mobile",
      },
      {
        src: "/projects/fullstack-template/api-health.webp",
        alt: "Live Express API health-check JSON response",
        width: 900,
        height: 500,
        kind: "desktop",
      },
      {
        src: "/projects/fullstack-template/api-posts.webp",
        alt: "Live seeded posts JSON response from the template API",
        width: 1100,
        height: 700,
        kind: "desktop",
      },
    ],
    caseStudy: {
      problem:
        "Every new MVP used to start with the same two days of setup: project structure, linting, environment handling, auth, database and deployment config — the decisions that don't differentiate the product.",
      approach:
        "A reusable monorepo that encodes those decisions once: a Next.js frontend, an Express + Zod API with JWT auth, PostgreSQL via Prisma and Docker Compose for local infra — typed end to end and deliberately small.",
      outcome:
        "New projects start at the interesting part: the product itself. The template is the foundation under several of the other projects on this site.",
      highlights: [
        "Typed end-to-end: Next.js + Express + Prisma",
        "JWT auth and PostgreSQL out of the box",
        "Docker Compose for local infrastructure",
        "Clone, rename, ship",
      ],
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
