import type { Metadata } from "next";
import Link from "next/link";

// Placeholder — when MDX is set up, this will load from src/content/blog/[slug].mdx
export async function generateStaticParams() {
  return [
    { slug: "thinking-in-systems" },
    { slug: "attachment-and-code" },
    { slug: "health-informatics-reality" },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return { title: `Blog Post — Annisa Baizan`, description: slug };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // TODO: Load from MDX files in src/content/blog/
  // For now, show a placeholder
  void slug;

  return (
    <>
      <div style={{padding:"120px 2rem 6rem",maxWidth:"720px",margin:"0 auto"}}>
        {/* Breadcrumb */}
        <div style={{display:"flex",gap:"0.5rem",alignItems:"center",fontFamily:"'Fira Code',monospace",fontSize:"0.72rem",color:"#5a5070",marginBottom:"2rem"}}>
          <Link href="/" style={{color:"#5a5070",textDecoration:"none"}}>Home</Link>
          <span>/</span>
          <Link href="/blog" style={{color:"#5a5070",textDecoration:"none"}}>Blog</Link>
          <span>/</span>
          <span style={{color:"#f0c040"}}>{slug}</span>
        </div>

        <div style={{textAlign:"center",padding:"4rem 2rem"}}>
          <div style={{fontSize:"3rem",marginBottom:"1rem"}}>✍️</div>
          <h1 style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(1.5rem,3vw,2.5rem)",color:"#f5f0ff",marginBottom:"1rem"}}>Post Loading Soon</h1>
          <p style={{fontFamily:"'Crimson Text',serif",color:"#a89fc0",fontSize:"1rem",lineHeight:1.75,marginBottom:"2rem"}}>
            This blog post will be loaded from an MDX file.<br />
            Add <code>src/content/blog/{slug}.mdx</code> to see your content here.
          </p>
          <Link href="/blog" className="btn btn-secondary">← Back to Blog</Link>
        </div>
      </div>
    </>
  );
}
