import Link from "next/link";
import ScrambleText from "@/components/ui/ScrambleText";

const TECHS = ["Laravel","PHP","Vue.js","MySQL","Python","Flask","FastAPI","Bootstrap","CodeIgniter","React","VB.NET","Docker","WordPress"];

const FEATURED_PROJECTS = [
  {
    href: "/projects/simkesgi",
    icon: "🦷",
    title: "SIMKESGI",
    desc: "Dental Health Information Management System for Poltekkes Kemenkes Palembang. Patient records, treatment data, role-based access, and automated dental health statistics reporting.",
    tags: ["Laravel","PHP","Vue.js","MySQL"],
    gradient: "linear-gradient(135deg, rgba(123,47,255,.28), rgba(240,192,64,.12), rgba(0,212,255,.1))",
  },
  {
    href: "/projects/workplaceeval",
    icon: "📊",
    title: "WorkPlaceEval",
    desc: "Comprehensive HR evaluation system for multi-company management. Competency assessment, attendance tracking, and performance reporting with a dual-backend architecture.",
    tags: ["Laravel 10","PHP 8.1","Bootstrap 5","MySQL"],
    gradient: "linear-gradient(135deg, rgba(0,212,255,.22), rgba(123,47,255,.18), rgba(240,192,64,.1))",
  },
  {
    href: "/projects/calriskdentistry",
    icon: "🔬",
    title: "CalRiskDentistry",
    desc: "Evidence-based Clinical Decision Support System for dental calculus and caries risk stratification. Clinical scoring algorithms, patient risk profiling, and a structured medical knowledge base.",
    tags: ["PHP","JavaScript","CDSS","Clinical Scoring"],
    gradient: "linear-gradient(135deg, rgba(196,30,58,.18), rgba(240,192,64,.15), rgba(123,47,255,.15))",
  },
];

const STATS = [
  { count: "12+", label: "Full-Stack Systems" },
  { count: "6+",  label: "Tools & Scripts" },
  { count: "3+",  label: "Years Building" },
  { count: "1∞",  label: "Always Learning" },
];

const INTRO_CARDS = [
  { icon: "🏥", title: "Health Informatics Focus", desc: "Half the portfolio is healthcare — dental records, clinical decision support, patient data, accessibility tools. Not accidental. Building for health means building where errors have real consequences." },
  { icon: "🧩", title: "Systematic by Default",    desc: "Separating known from inferred from unknown isn't a learned technique — it's a default mode. Framework thinking applied to every layer: architecture, debugging, and understanding why something actually breaks." },
  { icon: "🔥", title: "Doesn't Stop Until It Works", desc: "If committed, it's all-in. Hours deep, edge cases accumulating, problem still unsolved — that's a starting condition, not a stopping one. Dedication shows in shipped systems, not motivation quotes." },
];

export default function HomePage() {
  const techTrack = [...TECHS, ...TECHS];

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-background" />
        <div className="hero-nebula hero-nebula-1" />
        <div className="hero-nebula hero-nebula-2" />
        <div className="hero-nebula hero-nebula-3" />

        <div className="hero-text" data-animate>
          <div className="hero-eyebrow">✦ Full-Stack Developer &amp; Systems Builder ✦</div>
          <h1>
            Hi, I&apos;m<br />
            <ScrambleText as="span" className="hero-gradient-text" speed={22} cycles={6}>Annisa Baizan</ScrambleText>
          </h1>
          <p className="hero-subtitle">Health Informatics · Institutional Systems · Analytical Builder</p>
          <p className="hero-description" data-animate data-delay="2">
            D3 Computer Engineering graduate, continuing S1 Computer Science at BINUS.
            Civil servant by day, full-stack developer by necessity —
            building real systems for health informatics, clinical decision support,
            and institutional software. Systematic by default, not by effort.
          </p>
          <div className="hero-cta" data-animate data-delay="3">
            <Link href="/projects" className="btn btn-primary btn-glow">⚗️ View Projects</Link>
            <Link href="/about"    className="btn btn-secondary">📜 About Me</Link>
          </div>
        </div>

        <div className="hero-visual" data-animate data-delay="2">
          <div className="orbital-system">
            <div className="orbital-ring or-1"><span className="orbital-dot od-gold" /></div>
            <div className="orbital-ring or-2">
              <span className="orbital-dot od-cyan" />
              <span className="orbital-dot od-cyan-2" />
            </div>
            <div className="orbital-ring or-3"><span className="orbital-dot od-purple" /></div>
          </div>
          <div className="magic-sphere-wrap">
            <div className="magic-sphere">
              <div className="sphere-core">AB</div>
              <div className="sphere-ring r1" />
              <div className="sphere-ring r2" />
              <div className="sphere-ring r3" />
            </div>
          </div>
          <span className="sphere-rune" style={{top:"-10%",left:"50%",animationDelay:"0s"}}>⚡</span>
          <span className="sphere-rune" style={{top:"50%",right:"-8%",animationDelay:"1.5s"}}>✦</span>
          <span className="sphere-rune" style={{bottom:"-5%",left:"50%",animationDelay:"3s"}}>◈</span>
          <span className="sphere-rune" style={{top:"50%",left:"-8%",animationDelay:"2s"}}>✧</span>
        </div>

        <div className="scroll-indicator" />
      </section>

      {/* ── TECH STRIP ── */}
      <div className="tech-strip">
        <div className="tech-strip-track">
          {techTrack.map((t, i) => (
            <span key={i}>
              <span className="ts-item">{t}</span>
              <span className="ts-sep">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── STATS ── */}
      <div className="section-strip">
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <div key={i} className={`stat-card reveal${i > 0 ? ` reveal-delay-${i}` : ""}`}>
              <ScrambleText as="span" className="stat-number" speed={20} cycles={4}>{s.count}</ScrambleText>
              <ScrambleText as="span" className="stat-label"  speed={30} cycles={3}>{s.label}</ScrambleText>
            </div>
          ))}
        </div>
      </div>

      {/* ── COSMOS DIVIDER ── */}
      <div className="cosmos-divider" style={{padding:"2rem 4rem"}}>
        <div className="cosmos-divider-dots">
          {[0,1,2].map(i => <div key={i} className="cosmos-divider-dot" />)}
        </div>
        <div className="cosmos-divider-line" />
        <div className="cosmos-divider-center"><span className="cosmos-divider-glyph">✦</span></div>
        <div className="cosmos-divider-line" />
        <div className="cosmos-divider-dots">
          {[0,1,2].map(i => <div key={i} className="cosmos-divider-dot" />)}
        </div>
      </div>

      {/* ── INTRODUCTION ── */}
      <section className="page-section">
        <div className="section-hd reveal">
          <div className="eyebrow"><ScrambleText>✦ Introduction ✦</ScrambleText></div>
          <ScrambleText as="h2" speed={25} cycles={5}>Builder. Thinker. Both at Once.</ScrambleText>
          <p>Full-stack systems in the morning, philosophy and psychology at night. The same brain that designs database schemas reads about attachment theory.</p>
        </div>
        <div className="intro-grid">
          {INTRO_CARDS.map((c, i) => (
            <div key={i} className={`intro-card reveal reveal-delay-${i+1}`}>
              <div className="card-icon-wrap">{c.icon}</div>
              <ScrambleText as="h3" speed={28} cycles={4}>{c.title}</ScrambleText>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── QUOTE ── */}
      <div className="quote-section">
        <div className="quote-marks-wrap">
          <span className="quote-giant-open">&ldquo;</span>
          <div className="quote-text reveal">
            &ldquo;All models are wrong, but some are useful.&rdquo;
          </div>
          <div className="quote-attr reveal reveal-delay-1"><ScrambleText>— George Box</ScrambleText></div>
          <span className="quote-giant-close">&rdquo;</span>
        </div>
      </div>

      <div className="cosmos-divider" style={{padding:"2rem 4rem"}}>
        <div className="cosmos-divider-line" />
        <div className="cosmos-divider-center"><span className="cosmos-divider-glyph">◈</span></div>
        <div className="cosmos-divider-line" />
      </div>

      {/* ── FEATURED PROJECTS ── */}
      <section className="page-section">
        <div className="section-hd reveal">
          <div className="eyebrow"><ScrambleText>✦ Featured Work ✦</ScrambleText></div>
          <ScrambleText as="h2" speed={25} cycles={5}>Selected Projects</ScrambleText>
          <p>Full-stack systems built for health institutions, government, and enterprise — designed to be used, not just demonstrated.</p>
        </div>
        <div className="projects-grid">
          {FEATURED_PROJECTS.map((p, i) => (
            <Link key={i} href={p.href} className={`project-card reveal reveal-delay-${i+1}`}>
              <div className="project-thumb" style={{background: p.gradient, backgroundSize:"300% 300%"}}>
                <span className="project-thumb-icon">{p.icon}</span>
              </div>
              <div className="project-body">
                <ScrambleText as="h3" className="project-title" speed={25} cycles={4}>{p.title}</ScrambleText>
                <p className="project-desc"><ScrambleText>{p.desc}</ScrambleText></p>
                <div className="tags">
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="page-section">
        <div className="cta-aurora-wrap reveal">
          <div className="cta-box">
            <ScrambleText as="h2" speed={22} cycles={6}>Lets Build Something That Matters</ScrambleText>
            <p>
              Open to collaboration on health informatics, institutional systems, or anything
              where analytical thinking meets real-world constraints.
              If you&apos;re building something with purpose — reach out.
            </p>
            <div className="hero-cta">
              <Link href="/links" className="btn btn-primary btn-glow">✉ Get in Touch</Link>
              <Link href="/blog"  className="btn btn-secondary">📖 Read Blog</Link>
            </div>
          </div>
        </div>
      </section>

      <ScrollReveal />
    </>
  );
}

// Inline client component for scroll reveal
import ScrollReveal from "@/components/ScrollReveal";
