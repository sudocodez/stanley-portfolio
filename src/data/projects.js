// Featured project data. The case study is written from the actual
// project source (frontend + backend repos) — no invented metrics.

export const FEATURED_PROJECT = {
  title: "The 200 CEOs Business Forum",
  type: "Full-stack web platform · real client project",
  description:
    "An invitation-only business forum in Dar es Salaam. I built the full web platform behind it: a multi-page React site, a public REST API, and an admin dashboard for managing the event's content.",
  stack: [
    "React",
    "Vite",
    "React Router",
    "Node.js",
    "Express",
    "PostgreSQL",
    "JWT",
    "bcrypt",
    "Nodemailer",
    "Multer / S3",
  ],
  image: "/images/ceo200-hero.png",
  alt: "Homepage of the 200 CEOs Business Forum website, a dark editorial design with a gold accent",
  liveUrl: "https://www.the200ceos.com/",
  highlights: [
    "8-page React frontend with a dark, gold-accent editorial design",
    "Node/Express REST API with public + authenticated endpoints",
    "Admin dashboard SPA with JWT authentication and bcrypt password hashing",
    "PostgreSQL database with 10 tables, schema and seed on first boot",
    "Email notifications (Nodemailer/SMTP) for interest-form submissions",
    "Image uploads via Multer to S3-compatible storage",
  ],
};

// Case study sections — context → role → architecture → implementation
// → challenges → outcome → lessons (structure per the PRD).
export const CASE_STUDY = {
  client: "Apexvago Enterprises Ltd.",
  event: "Fourth Edition · 29 July 2026 · Dar es Salaam, Tanzania",
  context: [
    "The 200 CEOs Business Forum is an invitation-only gathering of Tanzania's business leaders — CEOs, board chairs, government principals and investors — for one day of closed-door dialogue on the country's economic direction.",
    "The client needed an online presence that matched the gravity of the room: a polished marketing site, a way for invited guests to express interest, and a private space where organisers could manage content — speakers, agenda, partners, awards, FAQ and settings.",
    "I built the full platform for it: a React frontend, a Node/Express API, a PostgreSQL database, and an admin dashboard for the organisers.",
  ],
  role: [
    "I built the complete platform across the frontend, API and database, and I maintain it as it evolves.",
    "The parts I'm most confident in: the React frontend, the REST API design, authentication, and keeping the whole system secure and tidy.",
    "I'm still learning in some areas — deeper PostgreSQL query optimisation and scaling file uploads at volume — and I'm straightforward about that.",
  ],
  implementation: [
    {
      heading: "Frontend",
      body: "A multi-page React site (home, the forum, agenda, speakers, awards, CSR, partners and express-interest) with client-side navigation via React Router, a shared design system, and a data layer that fetches from the API with graceful fallback to defaults.",
    },
    {
      heading: "API",
      body: "A Node/Express REST API serving public endpoints (speakers, FAQ, editions, settings, submissions) and authenticated admin endpoints for managing every content type, plus an audit log of admin actions.",
    },
    {
      heading: "Database",
      body: "PostgreSQL with ten tables covering settings, admins, speakers, FAQ, editions, award categories, partners, submissions, grandees and activity logs. The schema is created and seeded automatically on first boot.",
    },
    {
      heading: "Admin & security",
      body: "A standalone admin dashboard SPA with JWT authentication, bcrypt password hashing, role guards, rate limiting, CORS configuration and input validation on all endpoints.",
    },
    {
      heading: "Integrations",
      body: "Email notifications via Nodemailer/SMTP when a guest submits an expression of interest, and image uploads via Multer to S3-compatible storage.",
    },
  ],
  challenges: [
    {
      heading: "SQLite → PostgreSQL migration",
      body: "The backend originally ran on SQLite. Moving to PostgreSQL meant reworking the schema, connection handling and boot sequence, and re-testing every endpoint against the new database. It taught me to treat a database migration as its own project: plan the schema first, then the code.",
    },
    {
      heading: "Refactoring a 2,400-line file",
      body: "The frontend started life as one monolithic JSX file (2,400+ lines) with inline styles. I split it into a modular structure — pages, shared components, configuration and styles — with no change to what users saw. That refactor made the codebase far easier to navigate and extend.",
    },
    {
      heading: "Keeping content accurate",
      body: "The forum's tone is deliberate and formal. Getting the copy, hierarchy and details right mattered as much as the code, so the site could be handed over with confidence.",
    },
  ],
  outcome: [
    "The site is live and deployed on Vercel, with the API and database in production.",
    "The client gets a site they can be proud of, an admin dashboard that lets non-developers update content, and a submissions pipeline that notifies them by email.",
  ],
  lessons: [
    "Structure beats shortcuts: the refactor paid for itself within weeks.",
    "A database migration is a project, not a chore — plan the schema before touching code.",
    "Be honest about what you're still learning; it makes the rest more credible.",
  ],
};

// Architecture flow shown in the case study section.
export const ARCH_FLOW = [
  {
    step: "01",
    title: "React/Vite frontend",
    desc: "8-page site + admin dashboard SPA",
  },
  {
    step: "02",
    title: "REST / HTTP / JSON",
    desc: "Public + authenticated endpoints",
  },
  {
    step: "03",
    title: "Node.js/Express API",
    desc: "JWT auth, rate limiting, validation",
  },
  {
    step: "04",
    title: "PostgreSQL",
    desc: "10 tables, schema + seed on boot",
  },
];
