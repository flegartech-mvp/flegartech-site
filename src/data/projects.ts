export type ProjectStatus = "Live" | "MVP" | "In development" | "Case study";

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
  caseStudy: CaseStudy;
};

export const projects: Project[] = [
  {
    name: "Pametni Sistem Cakalnice",
    slug: "pametni-sistem-cakalnice",
    description:
      "Smart queue management system for waiting rooms, built around live status tracking, admin control and clearer customer flow.",
    stack: ["TypeScript", "React", "Tailwind CSS", "Admin UX"],
    status: "MVP",
    featured: true,
    githubUrl: "https://github.com/flegartech-mvp/pametni-sistem-cakalnice",
    accent: "from-[#75b183] to-[#a775d1]",
    metric: "Queue system",
    caseStudy: {
      problem:
        "Waiting rooms run on paper lists and guesswork: visitors don't know how long they'll wait, and staff have no clean way to manage the queue or communicate delays.",
      approach:
        "A web-based queue system with two faces — a public display that shows live queue status, and an admin panel where staff manage entries, call the next visitor and adjust the flow in real time. Built with React and TypeScript so the same codebase serves both views.",
      outcome:
        "A working MVP that demonstrates the full loop: visitors join the queue, see their live position, and staff control everything from a simple dashboard. Structured so a booking step or SMS notifications can be added without rework.",
      highlights: [
        "Live queue status visible to visitors",
        "Admin panel for managing and calling entries",
        "Single typed codebase for public and staff views",
        "Designed for clinics, offices and service counters",
      ],
    },
  },
  {
    name: "DriveWise",
    slug: "drivewise",
    description:
      "Driving telematics MVP for turning raw trip data into safety insights, driver scoring and practical fleet-ready dashboards.",
    stack: ["Telematics", "Dashboards", "Analytics", "MVP"],
    status: "MVP",
    featured: true,
    githubUrl: "https://github.com/flegartech-mvp/drivewise",
    accent: "from-[#75b183] to-[#5f95d8]",
    metric: "Telematics MVP",
    caseStudy: {
      problem:
        "Trip data from vehicles is abundant but unreadable — raw coordinates and speed logs don't tell a fleet manager which drivers are safe or where risk accumulates.",
      approach:
        "An analytics pipeline that turns trip data into driver safety scores, plus a dashboard that surfaces the trends that matter: harsh events, risky time windows and per-driver history. The scoring model is kept simple and explainable so the numbers can be trusted and discussed.",
      outcome:
        "An MVP that proves the core value: upload trips, get scores and a dashboard a fleet operator can act on. The data model is ready for live feeds from real telematics hardware.",
      highlights: [
        "Driver scoring from raw trip data",
        "Fleet dashboard with per-driver drill-down",
        "Explainable scoring instead of a black box",
        "Data model prepared for live telematics feeds",
      ],
    },
  },
  {
    name: "Fullstack Template",
    slug: "fullstack-template",
    description:
      "Production-minded starter architecture for fast MVP delivery with reusable structure, clean defaults and deployment-ready patterns.",
    stack: ["Next.js", "TypeScript", "Full-stack", "Vercel"],
    status: "MVP",
    featured: true,
    githubUrl: "https://github.com/flegartech-mvp/fullstack-template",
    accent: "from-[#75b183] to-[#68d4c5]",
    metric: "Build system",
    caseStudy: {
      problem:
        "Every new MVP used to start with the same two days of setup: project structure, linting, environment handling, deployment config and the small decisions that don't differentiate the product.",
      approach:
        "A reusable starter that encodes those decisions once — typed end to end, sensible folder structure, environment handling and Vercel-ready deployment. Kept deliberately small so it accelerates projects instead of imposing a framework on them.",
      outcome:
        "New client projects start at the interesting part: the product itself. The template is the foundation under several of the other projects on this site.",
      highlights: [
        "Typed end-to-end from data to UI",
        "Deployment-ready for Vercel out of the box",
        "Small surface — accelerates without dictating",
        "Battle-tested as the base of other FlegarTech builds",
      ],
    },
  },
  {
    name: "Fitness Tracker App",
    slug: "fitness-tracker-app",
    description:
      "Fitness tracking product concept for logging workouts, following progress and keeping personal health data easy to review.",
    stack: ["TypeScript", "React", "Product UI", "Tracking"],
    status: "In development",
    featured: false,
    githubUrl: "https://github.com/flegartech-mvp/pulse-fitness-tracker",
    accent: "from-[#75b183] to-[#d87c68]",
    metric: "Health app",
    caseStudy: {
      problem:
        "Most fitness apps optimize for streaks and notifications, not for honestly reviewing progress. Logging a workout should take seconds and reviewing a month should take one screen.",
      approach:
        "A web app focused on fast workout entry and a clean progress view — sets, weights and trends without gamification noise. The product decisions favor reviewing data over generating it.",
      outcome:
        "In active development. The logging flow and data model are in place; the progress visualizations are the current focus.",
      highlights: [
        "Seconds-fast workout logging flow",
        "Progress review designed as the primary screen",
        "Personal health data stays easy to export",
        "No gamification, no notification spam",
      ],
    },
  },
  {
    name: "Auto Life Logger",
    slug: "auto-life-logger",
    description:
      "Automation-focused logging tool for capturing recurring life or vehicle events and turning them into structured history.",
    stack: ["JavaScript", "Automation", "Data Logging", "UX"],
    status: "In development",
    featured: false,
    githubUrl: "https://github.com/flegartech-mvp/auto-life-logger",
    accent: "from-[#75b183] to-[#82a8e8]",
    metric: "Automation tool",
    caseStudy: {
      problem:
        "Recurring events — vehicle services, filter changes, renewals — live in people's heads or in scattered notes, and the history is gone exactly when it's needed: resale, warranty, diagnosis.",
      approach:
        "A logging tool where each event type is structured data, not free text: date, odometer, cost, notes. Automation handles the recurring part — the tool knows what's due and what the full history looks like.",
      outcome:
        "In development. The event model and capture flow work; reminders and history export are next.",
      highlights: [
        "Structured events instead of free-text notes",
        "Recurring schedules tracked automatically",
        "Full history export for resale or warranty",
        "Built for vehicles first, generic by design",
      ],
    },
  },
  {
    name: "YouTube Focus",
    slug: "youtube-focus",
    description:
      "Chrome extension that removes YouTube distractions with toggles for the feed, Shorts, comments, sidebar recommendations and Monk Mode.",
    stack: ["JavaScript", "Chrome Extension", "Browser APIs", "Product UX"],
    status: "MVP",
    featured: true,
    githubUrl: "https://github.com/flegartech-mvp/youtube-focus",
    accent: "from-[#75b183] to-[#d85f5f]",
    metric: "Focus extension",
    caseStudy: {
      problem:
        "YouTube is a work tool and a distraction machine in the same tab. Watching one tutorial shouldn't cost an hour of recommended videos and Shorts.",
      approach:
        "A Chrome extension with per-feature toggles: hide the home feed, Shorts, comments or sidebar recommendations independently — or flip on Monk Mode and remove everything at once. All filtering happens locally in the browser; nothing is tracked.",
      outcome:
        "A working MVP used daily. The toggle architecture makes each new distraction filter one small module.",
      highlights: [
        "Independent toggles per distraction source",
        "Monk Mode: one switch, zero noise",
        "Runs fully local — no data leaves the browser",
        "Modular filters, easy to extend",
      ],
    },
  },
  {
    name: "AI Automation Bot",
    slug: "ai-automation-bot",
    description:
      "Automation bot project for connecting AI-assisted workflows with repeatable tasks, scripts and practical business operations.",
    stack: ["JavaScript", "AI", "Automation", "Integrations"],
    status: "In development",
    featured: false,
    githubUrl: "https://github.com/flegartech-mvp/ai-automation-bot",
    accent: "from-[#75b183] to-[#c8d85f]",
    metric: "AI workflow",
    caseStudy: {
      problem:
        "Plenty of business tasks are too fuzzy for a plain script but too repetitive for a human: triaging messages, drafting routine replies, extracting data from documents.",
      approach:
        "A bot framework that pairs LLM steps with deterministic scripts — the AI handles the fuzzy part, the script handles the reliable part, and every run leaves an auditable trail.",
      outcome:
        "In development. The workflow runner and first integrations exist; the focus is on making runs predictable and reviewable rather than on impressive demos.",
      highlights: [
        "LLM steps combined with deterministic scripts",
        "Every run produces an auditable trail",
        "Built around real business tasks, not demos",
        "Integration-first design",
      ],
    },
  },
  {
    name: "AI Bot",
    slug: "ai-bot",
    description:
      "Python-based AI bot foundation for experimenting with assistants, task automation and scriptable intelligence workflows.",
    stack: ["Python", "AI", "Automation", "Bots"],
    status: "Case study",
    featured: false,
    githubUrl: "https://github.com/flegartech-mvp/ai-bot",
    accent: "from-[#75b183] to-[#6d8cff]",
    metric: "Python bot",
    caseStudy: {
      problem:
        "Assistant and automation ideas are cheap to imagine and expensive to validate without a foundation to experiment on.",
      approach:
        "A small Python foundation for scriptable AI workflows — prompt handling, task loops and tool calls — kept minimal so experiments stay readable.",
      outcome:
        "Serves as the experimentation ground that feeds validated patterns into the production-oriented AI Automation Bot project.",
      highlights: [
        "Minimal, readable experiment foundation",
        "Prompt and task-loop building blocks",
        "Feeds validated patterns into production work",
      ],
    },
  },
  {
    name: "Studentski Denar",
    slug: "studentski-denar",
    description:
      "A student finance product concept focused on cleaner budgeting flows, simple categorization and faster financial decisions.",
    stack: ["TypeScript", "Finance UX", "Dashboards", "MVP"],
    status: "In development",
    featured: true,
    githubUrl: "https://github.com/flegartech-mvp/studentski-denar",
    accent: "from-[#75b183] to-[#d6b55e]",
    metric: "Finance tool",
    caseStudy: {
      problem:
        "Students live on irregular income — student work, allowances, seasonal jobs — and mainstream budgeting apps assume a salary. The result is usually no budget at all.",
      approach:
        "A budgeting flow designed around irregular income: simple categorization, one clear 'safe to spend' number and entry fast enough to use on a phone between lectures. Built in TypeScript with a dashboard-first UI.",
      outcome:
        "In development, with the core budgeting model and categorization flow shaped. Aimed at the Slovenian student market first.",
      highlights: [
        "Designed for irregular student income",
        "One clear 'safe to spend' number",
        "Fast mobile-first entry",
        "Slovenian market focus",
      ],
    },
  },
  {
    name: "AvtoNet Garage",
    slug: "avtonet-garage",
    description:
      "Smart Chrome extension for avto.net that saves vehicles, tracks price changes and uses AI to review listing quality.",
    stack: ["JavaScript", "Chrome Extension", "AI Analysis", "Browser APIs"],
    status: "MVP",
    featured: true,
    githubUrl: "https://github.com/flegartech-mvp/avtonet-garage",
    accent: "from-[#75b183] to-[#9eb0bd]",
    metric: "Vehicle tool",
    caseStudy: {
      problem:
        "Shopping for a car on avto.net means juggling browser tabs, re-finding listings and never knowing whether a price dropped or a listing quietly changed.",
      approach:
        "A Chrome extension that adds a personal garage on top of the marketplace: save vehicles in place, track price changes over time and get an AI-assisted read on listing quality — directly where the browsing already happens.",
      outcome:
        "A working MVP that turns marketplace browsing into a tracked, comparable shortlist. A good example of extending a platform users already live in instead of building a separate app.",
      highlights: [
        "Save and organize listings in place",
        "Automatic price-change tracking",
        "AI-assisted listing quality review",
        "Zero workflow change for the user",
      ],
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
