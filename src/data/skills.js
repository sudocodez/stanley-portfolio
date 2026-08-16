// Skills grouped by area. "level" is a short, interview-defensible note —
// deliberately no percentage bars (per the PRD).

export const SKILL_GROUPS = [
  {
    title: "Frontend",
    description: "Building responsive, accessible interfaces.",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Vite", "React Router"],
    level: "confident",
  },
  {
    title: "Backend",
    description: "Designing and building REST APIs.",
    skills: ["Node.js", "Express", "REST / HTTP / JSON"],
    level: "confident",
  },
  {
    title: "Databases",
    description: "Schema design and data modelling.",
    skills: ["PostgreSQL", "SQLite"],
    level: "working knowledge",
  },
  {
    title: "Auth & security",
    description: "Authentication and API hardening.",
    skills: ["JWT", "bcrypt", "Rate limiting", "CORS"],
    level: "working knowledge",
  },
  {
    title: "Integrations",
    description: "Connecting services into an app.",
    skills: ["Nodemailer", "Multer", "S3-compatible storage", "SMTP"],
    level: "currently learning",
  },
  {
    title: "Tools & workflow",
    description: "The everyday toolkit.",
    skills: ["Git", "GitHub", "npm", "Vercel", "Netlify"],
    level: "confident",
  },
];
