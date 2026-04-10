/** Home page copy & structured data — edit here, not in the page shell. */

export const TECH_STACK = [
  "Laravel",
  "PHP",
  "Vue.js",
  "MySQL",
  "Python",
  "Flask",
  "FastAPI",
  "Bootstrap",
  "CodeIgniter",
  "React",
  "VB.NET",
  "Docker",
  "WordPress",
] as const;

export interface FeaturedProject {
  href: string;
  icon: string;
  title: string;
  desc: string;
  tags: string[];
  gradient: string;
}

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    href: "/projects/simkesgi",
    icon: "🦷",
    title: "SIMKESGI",
    desc: "Dental Health Information Management System for Poltekkes Kemenkes Palembang. Patient records, treatment data, role-based access, and automated dental health statistics reporting.",
    tags: ["Laravel", "PHP", "Vue.js", "MySQL"],
    gradient: "linear-gradient(135deg, rgba(123,47,255,.28), rgba(240,192,64,.12), rgba(0,212,255,.1))",
  },
  {
    href: "/projects/workplaceeval",
    icon: "📊",
    title: "WorkPlaceEval",
    desc: "Comprehensive HR evaluation system for multi-company management. Competency assessment, attendance tracking, and performance reporting with a dual-backend architecture.",
    tags: ["Laravel 10", "PHP 8.1", "Bootstrap 5", "MySQL"],
    gradient: "linear-gradient(135deg, rgba(0,212,255,.22), rgba(123,47,255,.18), rgba(240,192,64,.1))",
  },
  {
    href: "/projects/calriskdentistry",
    icon: "🔬",
    title: "CalRiskDentistry",
    desc: "Evidence-based Clinical Decision Support System for dental calculus and caries risk stratification. Clinical scoring algorithms, patient risk profiling, and a structured medical knowledge base.",
    tags: ["PHP", "JavaScript", "CDSS", "Clinical Scoring"],
    gradient: "linear-gradient(135deg, rgba(196,30,58,.18), rgba(240,192,64,.15), rgba(123,47,255,.15))",
  },
];

export interface HomeStat {
  count: string;
  label: string;
}

export const HOME_STATS: HomeStat[] = [
  { count: "12+", label: "Full-Stack Systems" },
  { count: "6+", label: "Tools & Scripts" },
  { count: "3+", label: "Years Building" },
  { count: "1∞", label: "Always Learning" },
];

export interface IntroCard {
  icon: string;
  title: string;
  desc: string;
}

export const INTRO_CARDS: IntroCard[] = [
  {
    icon: "🏥",
    title: "Health Informatics Focus",
    desc: "Half the portfolio is healthcare — dental records, clinical decision support, patient data, accessibility tools. Not accidental. Building for health means building where errors have real consequences.",
  },
  {
    icon: "🧩",
    title: "Systematic by Default",
    desc: "Separating known from inferred from unknown isn't a learned technique — it's a default mode. Framework thinking applied to every layer: architecture, debugging, and understanding why something actually breaks.",
  },
  {
    icon: "🔥",
    title: "Doesn't Stop Until It Works",
    desc: "If committed, it's all-in. Hours deep, edge cases accumulating, problem still unsolved — that's a starting condition, not a stopping one. Dedication shows in shipped systems, not motivation quotes.",
  },
];

export const HOME_HERO = {
  eyebrow: "✦ Full-Stack Developer & Systems Builder ✦",
  name: "Annisa Baizan",
  subtitle: "Health Informatics · Institutional Systems · Analytical Builder",
  description:
    "D3 Computer Engineering graduate, continuing S1 Computer Science at BINUS.\nCivil servant by day, full-stack developer by necessity —\nbuilding real systems for health informatics, clinical decision support,\nand institutional software. Systematic by default, not by effort.",
} as const;

export const HOME_INTRO_SECTION = {
  eyebrow: "✦ Introduction ✦",
  title: "Builder. Thinker. Both at Once.",
  lead: "Full-stack systems in the morning, philosophy and psychology at night. The same brain that designs database schemas reads about attachment theory.",
} as const;

export const HOME_QUOTE = {
  text: "“All models are wrong, but some are useful.”",
  attribution: "— George Box",
} as const;

export const HOME_FEATURED_SECTION = {
  eyebrow: "✦ Featured Work ✦",
  title: "Selected Projects",
  lead: "Full-stack systems built for health institutions, government, and enterprise — designed to be used, not just demonstrated.",
} as const;

export const HOME_CTA = {
  title: "Lets Build Something That Matters",
  body:
    "Open to collaboration on health informatics, institutional systems, or anything where analytical thinking meets real-world constraints. If you're building something with purpose — reach out.",
} as const;
