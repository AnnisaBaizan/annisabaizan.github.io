import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ScrambleText from "@/components/ui/ScrambleText";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Blog — Annisa Baizan",
  description: "Reflections on technology, systems, psychology & the human experience.",
};

// Blog posts will be populated from MDX files
// For now, placeholder structure — add .mdx files to src/content/blog/
const posts = [
  {
    slug: "thinking-in-systems",
    title: "Thinking in Systems",
    date: "2025-01-15",
    tags: ["systems-thinking","engineering"],
    excerpt: "Why I approach every problem — code, people, institutions — as a system first.",
  },
  {
    slug: "attachment-and-code",
    title: "Attachment Theory & How I Write Code",
    date: "2024-12-10",
    tags: ["psychology","engineering","personal"],
    excerpt: "What attachment patterns teach us about dependency, ownership, and letting go of bad code.",
  },
  {
    slug: "health-informatics-reality",
    title: "Health Informatics: The Reality",
    date: "2024-11-05",
    tags: ["health-informatics","engineering"],
    excerpt: "Building software where errors have real consequences changes how you think about quality.",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        badge="✍️ blog.annisabaizan"
        title="Blog"
        description="Reflections on technology, systems thinking, psychology, and the human experience. Written when the thoughts are too full to stay inside."
      />

      {/* ── POSTS ── */}
      <section style={{padding:"80px 40px",maxWidth:"800px",margin:"0 auto"}}>
        {posts.length > 0 ? (
          <div style={{display:"flex",flexDirection:"column",gap:"2rem"}}>
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`reveal${i > 0 ? ` reveal-delay-${Math.min(i,3)}` : ""}`}
                style={{
                  background:"rgba(13,10,46,0.55)",
                  border:"1px solid rgba(240,192,64,0.1)",
                  borderRadius:"16px",padding:"2rem",
                  textDecoration:"none",color:"inherit",
                  display:"block",transition:"all 0.3s",
                  position:"relative",overflow:"hidden",
                }}
              >
                <div style={{display:"flex",gap:"0.5rem",flexWrap:"wrap",marginBottom:"0.75rem"}}>
                  {post.tags.map(t => (
                    <span key={t} style={{padding:"2px 10px",background:"rgba(240,192,64,0.07)",border:"1px solid rgba(240,192,64,0.25)",borderRadius:"999px",fontFamily:"'Fira Code',monospace",fontSize:"0.65rem",color:"#f0c040",letterSpacing:"0.05em"}}>{t}</span>
                  ))}
                </div>
                <h2 style={{fontFamily:"'Cinzel',serif",fontSize:"1.3rem",fontWeight:700,color:"#f5f0ff",marginBottom:"0.5rem",letterSpacing:"0.03em"}}><ScrambleText>{post.title}</ScrambleText></h2>
                <p style={{fontFamily:"'Crimson Text',serif",fontSize:"1rem",color:"#a89fc0",lineHeight:1.75,marginBottom:"0.75rem"}}>{post.excerpt}</p>
                <div style={{fontFamily:"'Fira Code',monospace",fontSize:"0.65rem",color:"#5a5070",letterSpacing:"0.1em"}}>
                  {new Date(post.date).toLocaleDateString("id-ID",{year:"numeric",month:"long",day:"numeric"})}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div style={{textAlign:"center",padding:"4rem 2rem"}}>
            <div style={{fontSize:"3rem",marginBottom:"1rem"}}>✍️</div>
            <h2 style={{fontFamily:"'Cinzel',serif",fontSize:"1.5rem",color:"#f5f0ff",marginBottom:"1rem"}}><ScrambleText>Posts Coming Soon</ScrambleText></h2>
            <p style={{fontFamily:"'Crimson Text',serif",color:"#a89fc0",fontSize:"1rem",lineHeight:1.75}}>
              Blog posts will appear here. Add <code>.mdx</code> files to <code>src/content/blog/</code> to get started.
            </p>
          </div>
        )}
      </section>

      <ScrollReveal />
    </>
  );
}
