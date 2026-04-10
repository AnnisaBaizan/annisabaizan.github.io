export interface QuickLink {
  href: string;
  icon: string;
  title: string;
  desc: string;
}

export interface SocialLink {
  href: string;
  icon: string;
  name: string;
}

export const QUICK_LINKS: QuickLink[] = [
  { href: "/projects", icon: "💼", title: "Projects Portfolio", desc: "Explore my professional work & case studies" },
  { href: "/about", icon: "👤", title: "About Me", desc: "Learn about my thinking process & approach" },
  { href: "/blog", icon: "✍️", title: "Blog", desc: "Reflections on technology, systems & the human experience" },
  { href: "/docs/cv.pdf", icon: "📄", title: "Download CV", desc: "Professional resume & credentials" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { href: "https://github.com/annisabaizan", icon: "💻", name: "GitHub" },
  { href: "https://linkedin.com/in/annisabaizan", icon: "💼", name: "LinkedIn" },
  { href: "mailto:annisa.baizan@example.com", icon: "✉️", name: "Email" },
  { href: "https://twitter.com/annisabaizan", icon: "🐦", name: "Twitter" },
];
