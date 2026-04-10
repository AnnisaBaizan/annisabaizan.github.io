/** Blog index metadata — keep in sync with `generateStaticParams` in app/blog/[slug]/page.tsx until MDX wiring lands. */

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
}

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: "thinking-in-systems",
    title: "Thinking in Systems",
    date: "2025-01-15",
    tags: ["systems-thinking", "engineering"],
    excerpt: "Why I approach every problem — code, people, institutions — as a system first.",
  },
  {
    slug: "attachment-and-code",
    title: "Attachment Theory & How I Write Code",
    date: "2024-12-10",
    tags: ["psychology", "engineering", "personal"],
    excerpt: "What attachment patterns teach us about dependency, ownership, and letting go of bad code.",
  },
  {
    slug: "health-informatics-reality",
    title: "Health Informatics: The Reality",
    date: "2024-11-05",
    tags: ["health-informatics", "engineering"],
    excerpt: "Building software where errors have real consequences changes how you think about quality.",
  },
];
