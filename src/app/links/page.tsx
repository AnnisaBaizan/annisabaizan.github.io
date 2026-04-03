import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ScrambleText from "@/components/ui/ScrambleText";

export const metadata: Metadata = {
  title: "Links — Annisa Baizan",
  description: "Connect with Annisa Baizan — Links & Contact",
};

const QUICK_LINKS = [
  { href: "/projects", icon: "💼", title: "Projects Portfolio",    desc: "Explore my professional work & case studies" },
  { href: "/about",    icon: "👤", title: "About Me",              desc: "Learn about my thinking process & approach" },
  { href: "/blog",     icon: "✍️", title: "Blog",                  desc: "Reflections on technology, systems & the human experience" },
  { href: "/docs/cv.pdf", icon: "📄", title: "Download CV",        desc: "Professional resume & credentials" },
];

const SOCIALS = [
  { href: "https://github.com/annisabaizan",   icon: "💻", name: "GitHub" },
  { href: "https://linkedin.com/in/annisabaizan", icon: "💼", name: "LinkedIn" },
  { href: "mailto:annisa.baizan@example.com",  icon: "✉️", name: "Email" },
  { href: "https://twitter.com/annisabaizan",  icon: "🐦", name: "Twitter" },
];

export default function LinksPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{paddingTop:"120px",paddingBottom:"60px",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div className="hero-nebula hero-nebula-1" />
        <div className="hero-nebula hero-nebula-2" />
        <div style={{position:"relative",zIndex:1,maxWidth:"600px",margin:"0 auto",padding:"0 2rem"}}>
          <div style={{
            width:"120px",height:"120px",margin:"0 auto 1.5rem",
            background:"var(--gradient-primary)",borderRadius:"50%",
            display:"flex",alignItems:"center",justifyContent:"center",
            fontSize:"3rem",border:"4px solid var(--bg-dark)",
            boxShadow:"var(--shadow-glow)",
            animation:"borderBreath 4s ease-in-out infinite",
          }}>✨</div>
          <h1 style={{
            fontFamily:"'Cinzel',serif",fontSize:"clamp(2.2rem,5vw,3.5rem)",
            fontWeight:700,marginBottom:"0.75rem",
            background:"linear-gradient(135deg,#f0c040 20%,#a855f7 60%,#00d4ff)",
            WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",
          }}><ScrambleText>Annisa Baizan</ScrambleText></h1>
          <p style={{fontFamily:"'Fira Code',monospace",fontSize:"0.72rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"#7a7095",marginBottom:"1.5rem"}}>
            System Thinker · Analytical Developer
          </p>
          <div className="tags" style={{justifyContent:"center"}}>
            <span className="tag tag-sm">Evidence-Based</span>
            <span className="tag tag-sm">Framework Thinking</span>
          </div>
        </div>
      </section>

      {/* ── COSMOS DIVIDER ── */}
      <div className="cosmos-divider" style={{padding:"1.5rem 4rem"}}>
        <div className="cosmos-divider-line" />
        <div className="cosmos-divider-center"><span className="cosmos-divider-glyph">✦</span></div>
        <div className="cosmos-divider-line" />
      </div>

      {/* ── QUICK LINKS ── */}
      <section style={{padding:"2rem 0"}}>
        <div style={{maxWidth:"600px",margin:"0 auto",padding:"0 2rem"}}>
          <div style={{display:"flex",alignItems:"center",margin:"0 0 2rem",gap:"1rem"}}>
            <div style={{flex:1,height:"1px",background:"var(--border-color)"}} />
            <span style={{color:"var(--text-secondary)",fontSize:"var(--text-sm)",textTransform:"uppercase",letterSpacing:"1px",fontWeight:"var(--font-semibold)"}}><ScrambleText>Quick Access</ScrambleText></span>
            <div style={{flex:1,height:"1px",background:"var(--border-color)"}} />
          </div>

          {QUICK_LINKS.map((l, i) => (
            <Link key={l.href} href={l.href} className={`reveal${i > 0 ? ` reveal-delay-${i}` : ""}`} style={{
              display:"block",background:"var(--bg-card)",border:"1px solid var(--border-color)",
              borderRadius:"var(--radius-lg)",padding:"1.5rem 2rem",marginBottom:"1rem",
              textDecoration:"none",transition:"all var(--transition-base)",position:"relative",overflow:"hidden",
            }}>
              <div style={{display:"flex",alignItems:"center",gap:"1rem"}}>
                <div style={{width:"48px",height:"48px",background:"rgba(123,47,255,0.1)",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.5rem",flexShrink:0}}>{l.icon}</div>
                <div style={{flex:1}}>
                  <div style={{fontSize:"var(--text-lg)",fontWeight:"var(--font-semibold)",color:"var(--text-primary)",marginBottom:"0.25rem"}}><ScrambleText>{l.title}</ScrambleText></div>
                  <div style={{fontSize:"var(--text-sm)",color:"var(--text-secondary)"}}>{l.desc}</div>
                </div>
                <div style={{color:"#f0c040",fontSize:"1.5rem",transition:"transform var(--transition-base)"}}>→</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── SOCIALS ── */}
      <section style={{padding:"2rem 0"}}>
        <div style={{maxWidth:"600px",margin:"0 auto",padding:"0 2rem"}}>
          <div style={{display:"flex",alignItems:"center",margin:"0 0 2rem",gap:"1rem"}}>
            <div style={{flex:1,height:"1px",background:"var(--border-color)"}} />
            <span style={{color:"var(--text-secondary)",fontSize:"var(--text-sm)",textTransform:"uppercase",letterSpacing:"1px",fontWeight:"var(--font-semibold)"}}><ScrambleText>Connect</ScrambleText></span>
            <div style={{flex:1,height:"1px",background:"var(--border-color)"}} />
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:"1rem",marginBottom:"2rem"}}>
            {SOCIALS.map(s => (
              <a key={s.name} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                style={{background:"var(--bg-card)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-lg)",padding:"1.5rem 1rem",textAlign:"center",textDecoration:"none",transition:"all var(--transition-base)",display:"block"}}>
                <div style={{fontSize:"2rem",marginBottom:"0.5rem"}}>{s.icon}</div>
                <div style={{fontSize:"var(--text-sm)",fontWeight:"var(--font-medium)",color:"var(--text-primary)"}}><ScrambleText>{s.name}</ScrambleText></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT INFO ── */}
      <section style={{padding:"2rem 0 4rem"}}>
        <div style={{maxWidth:"600px",margin:"0 auto",padding:"0 2rem"}}>
          <div style={{display:"flex",alignItems:"center",margin:"0 0 2rem",gap:"1rem"}}>
            <div style={{flex:1,height:"1px",background:"var(--border-color)"}} />
            <span style={{color:"var(--text-secondary)",fontSize:"var(--text-sm)",textTransform:"uppercase",letterSpacing:"1px",fontWeight:"var(--font-semibold)"}}><ScrambleText>Contact Info</ScrambleText></span>
            <div style={{flex:1,height:"1px",background:"var(--border-color)"}} />
          </div>
          <div style={{background:"var(--bg-card)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-lg)",padding:"2rem"}}>
            {[
              { icon:"✉️", label:"Email",    value:"annisa.baizan@example.com", href:"mailto:annisa.baizan@example.com" },
              { icon:"📍", label:"Location", value:"Palembang, South Sumatra, Indonesia", href:undefined },
            ].map(c => (
              <div key={c.label} style={{display:"flex",alignItems:"center",gap:"1rem",padding:"1rem 0",borderBottom:"1px solid var(--border-color)"}}>
                <div style={{width:"40px",height:"40px",background:"rgba(123,47,255,0.1)",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.25rem"}}>{c.icon}</div>
                <div>
                  <div style={{fontSize:"var(--text-sm)",color:"var(--text-secondary)",marginBottom:"0.25rem"}}>{c.label}</div>
                  {c.href
                    ? <a href={c.href} style={{fontSize:"var(--text-base)",color:"#f0c040",textDecoration:"none"}}>{c.value}</a>
                    : <p style={{fontSize:"var(--text-base)",color:"var(--text-primary)"}}>{c.value}</p>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ScrollReveal />
    </>
  );
}
