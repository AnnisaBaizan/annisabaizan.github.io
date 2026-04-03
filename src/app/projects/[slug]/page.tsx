import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import projects, { getProject } from "@/data/projects";
import ScrollReveal from "@/components/ScrollReveal";

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Annisa Baizan`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const docCount   = project.docs?.length ?? 0;
  const presCount  = project.presentations?.length ?? 0;
  const demoCount  = project.demos?.length ?? 0;
  const hasContent = docCount + presCount + demoCount > 0;

  return (
    <>
      {/* ── HERO ── */}
      <section style={{padding:"120px 40px 80px"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"60px",alignItems:"center"}}>
          {/* Left */}
          <div>
            <span style={{display:"inline-block",padding:"6px 16px",border:`1px solid ${project.accent}`,borderRadius:"100px",color:project.accent,fontFamily:"'Fira Code',monospace",fontSize:"0.72rem",letterSpacing:"0.1em",marginBottom:"20px",background:`color-mix(in srgb,${project.accent} 10%,transparent)`}}>
              projects.{project.slug}
            </span>

            <h1 style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(2.5rem,5vw,4rem)",fontWeight:700,color:"#f5f0ff",letterSpacing:"0.05em",marginBottom:"16px",lineHeight:1.1}}>
              <span style={{color:project.accent}}>{project.icon} </span>{project.title}
            </h1>

            <p style={{fontFamily:"'Crimson Text',serif",fontSize:"1.1rem",color:"#a89fc0",lineHeight:1.8,marginBottom:"28px",maxWidth:"480px"}}>
              {project.longDesc}
            </p>

            <div style={{display:"flex",flexWrap:"wrap",gap:"20px",marginBottom:"32px"}}>
              {project.tags.map(t => (
                <span key={t} style={{fontFamily:"'Fira Code',monospace",fontSize:"0.78rem",color:"#a89fc0"}}>
                  <span style={{color:project.accent,marginRight:"6px"}}>▸</span>{t}
                </span>
              ))}
            </div>

            <div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
              <Link href="/projects" style={{padding:"12px 28px",border:`1px solid ${project.accent}`,color:project.accent,borderRadius:"8px",fontFamily:"'Cinzel',serif",fontSize:"0.78rem",fontWeight:600,letterSpacing:"0.06em",textDecoration:"none",transition:"0.2s"}}>
                ← Back to Projects
              </Link>
            </div>
          </div>

          {/* Right — mockup box */}
          <div style={{background:"rgba(13,10,46,0.7)",border:`1px solid color-mix(in srgb,${project.accent} 30%,transparent)`,borderRadius:"20px",padding:"24px",backdropFilter:"blur(16px)",boxShadow:`0 0 60px color-mix(in srgb,${project.accent} 15%,transparent)`}}>
            <div style={{display:"flex",gap:"6px",marginBottom:"20px"}}>
              {["#c41e3a","#f0c040",project.accent].map((c,i) => (
                <span key={i} style={{width:"12px",height:"12px",borderRadius:"50%",background:c,display:"inline-block"}} />
              ))}
            </div>
            <div style={{minHeight:"200px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"16px"}}>
              <div style={{fontSize:"5rem"}}>{project.icon}</div>
              {project.stats && project.stats.length > 0 && (
                <div style={{display:"flex",gap:"32px",justifyContent:"center",flexWrap:"wrap"}}>
                  {project.stats.map(s => (
                    <div key={s.label} style={{textAlign:"center"}}>
                      <span style={{fontFamily:"'Fira Code',monospace",fontSize:"1.8rem",fontWeight:500,color:project.accent,display:"block"}}>{s.num}</span>
                      <span style={{fontFamily:"'Crimson Text',serif",fontSize:"0.85rem",color:"#a89fc0"}}>{s.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div style={{width:"100%",height:"1px",background:"linear-gradient(90deg,transparent,rgba(240,192,64,0.2),transparent)"}} />

      {/* ── FEATURES ── */}
      <section style={{padding:"80px 40px"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto"}}>
          <h2 style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(1.5rem,3vw,2.2rem)",fontWeight:700,color:"#f5f0ff",marginBottom:"12px",letterSpacing:"0.04em"}}>
            Key Features
            <span style={{display:"block",width:"60px",height:"3px",background:project.accent,borderRadius:"2px",marginTop:"10px"}} />
          </h2>
          <p style={{fontFamily:"'Crimson Text',serif",fontSize:"1.05rem",color:"#a89fc0",marginBottom:"48px",maxWidth:"600px"}}>{project.description}</p>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"24px"}}>
            {project.features.map(f => (
              <div key={f.title} style={{background:"rgba(13,10,46,0.6)",border:"1px solid rgba(240,192,64,0.1)",borderRadius:"16px",padding:"28px",backdropFilter:"blur(12px)"}}>
                <div style={{fontSize:"2rem",marginBottom:"12px"}}>{f.icon}</div>
                <div style={{fontFamily:"'Cinzel',serif",fontSize:"1rem",fontWeight:700,color:"#f5f0ff",marginBottom:"8px"}}>{f.title}</div>
                <div style={{fontFamily:"'Crimson Text',serif",fontSize:"0.95rem",color:"#a89fc0",lineHeight:1.7}}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section style={{padding:"80px 40px",background:"rgba(13,10,46,0.3)"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto"}}>
          <h2 style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(1.5rem,3vw,2.2rem)",fontWeight:700,color:"#f5f0ff",marginBottom:"48px",letterSpacing:"0.04em"}}>
            Tech Stack
            <span style={{display:"block",width:"60px",height:"3px",background:project.accent,borderRadius:"2px",marginTop:"10px"}} />
          </h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:"16px"}}>
            {Object.entries(project.stack).map(([layer, techs]) => techs && techs.length > 0 && (
              <div key={layer} style={{background:"rgba(13,10,46,0.5)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:"12px",padding:"20px"}}>
                <div style={{fontFamily:"'Fira Code',monospace",fontSize:"0.72rem",color:project.accent,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:"12px"}}>
                  {layer}
                </div>
                <ul style={{listStyle:"none"}}>
                  {techs.map((t: string) => (
                    <li key={t} style={{fontFamily:"'Crimson Text',serif",fontSize:"0.9rem",color:"#a89fc0",padding:"4px 0",borderBottom:"1px solid rgba(255,255,255,0.04)"}}>{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"24px"}}>
            {project.tags.map(t => (
              <span key={t} style={{padding:"4px 12px",background:`color-mix(in srgb,${project.accent} 12%,transparent)`,border:`1px solid color-mix(in srgb,${project.accent} 25%,transparent)`,borderRadius:"100px",fontFamily:"'Fira Code',monospace",fontSize:"0.68rem",color:project.accent,letterSpacing:"0.04em"}}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT MATERIALS ── */}
      <section style={{padding:"80px 40px"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto"}}>
          <h2 style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(1.5rem,3vw,2.2rem)",fontWeight:700,color:"#f5f0ff",marginBottom:"12px",letterSpacing:"0.04em"}}>
            Project Materials
            <span style={{display:"block",width:"60px",height:"3px",background:project.accent,borderRadius:"2px",marginTop:"10px"}} />
          </h2>
          <p style={{fontFamily:"'Crimson Text',serif",fontSize:"1rem",color:"#6a6080",marginBottom:"40px"}}>
            Documentation, presentations, and demos associated with this project.
          </p>

          {hasContent ? (
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:"16px"}}>
              {project.docs?.map(doc => (
                <a key={doc.file} href={`/projects/${project.slug}/docs/${doc.file}`} target="_blank" rel="noopener noreferrer"
                  style={{background:"rgba(13,10,46,0.5)",border:"1px solid rgba(240,192,64,0.12)",borderRadius:"12px",padding:"20px 24px",textDecoration:"none",display:"flex",alignItems:"center",gap:"16px",transition:"0.2s",color:"inherit"}}>
                  <span style={{fontSize:"1.5rem",flexShrink:0}}>📄</span>
                  <div>
                    <div style={{fontFamily:"'Cinzel',serif",fontSize:"0.85rem",fontWeight:600,color:"#f5f0ff",marginBottom:"4px"}}>{doc.label}</div>
                    <div style={{fontFamily:"'Crimson Text',serif",fontSize:"0.85rem",color:"#a89fc0"}}>PDF Document</div>
                  </div>
                  <span style={{marginLeft:"auto",color:project.accent}}>→</span>
                </a>
              ))}
              {project.presentations?.map(pres => (
                <a key={pres.id} href={`/projects/${project.slug}/presentations/${pres.id}`}
                  style={{background:"rgba(13,10,46,0.5)",border:"1px solid rgba(240,192,64,0.12)",borderRadius:"12px",padding:"20px 24px",textDecoration:"none",display:"flex",alignItems:"center",gap:"16px",transition:"0.2s",color:"inherit"}}>
                  <span style={{fontSize:"1.5rem",flexShrink:0}}>🎯</span>
                  <div>
                    <div style={{fontFamily:"'Cinzel',serif",fontSize:"0.85rem",fontWeight:600,color:"#f5f0ff",marginBottom:"4px"}}>{pres.label}</div>
                    <div style={{fontFamily:"'Crimson Text',serif",fontSize:"0.85rem",color:"#a89fc0"}}>Presentation</div>
                  </div>
                  <span style={{marginLeft:"auto",color:project.accent}}>→</span>
                </a>
              ))}
              {project.demos?.map(demo => (
                <a key={demo.id} href={`/projects/${project.slug}/demo/${demo.id}`}
                  style={{background:"rgba(13,10,46,0.5)",border:"1px solid rgba(240,192,64,0.12)",borderRadius:"12px",padding:"20px 24px",textDecoration:"none",display:"flex",alignItems:"center",gap:"16px",transition:"0.2s",color:"inherit"}}>
                  <span style={{fontSize:"1.5rem",flexShrink:0}}>⚡</span>
                  <div>
                    <div style={{fontFamily:"'Cinzel',serif",fontSize:"0.85rem",fontWeight:600,color:"#f5f0ff",marginBottom:"4px"}}>{demo.label}</div>
                    <div style={{fontFamily:"'Crimson Text',serif",fontSize:"0.85rem",color:"#a89fc0"}}>Demo / Interactive</div>
                  </div>
                  <span style={{marginLeft:"auto",color:project.accent}}>→</span>
                </a>
              ))}
            </div>
          ) : (
            /* ── PLACEHOLDER ── */
            <div style={{
              border:`1px dashed color-mix(in srgb,${project.accent} 25%,transparent)`,
              borderRadius:"16px",padding:"56px 40px",textAlign:"center",
              background:`color-mix(in srgb,${project.accent} 4%,transparent)`,
            }}>
              <div style={{fontSize:"3rem",marginBottom:"16px",opacity:0.4}}>📁</div>
              <div style={{fontFamily:"'Cinzel',serif",fontSize:"1rem",fontWeight:600,color:"#5a5070",marginBottom:"8px",letterSpacing:"0.05em"}}>
                Materials Coming Soon
              </div>
              <div style={{fontFamily:"'Crimson Text',serif",fontSize:"0.95rem",color:"#4a4060",lineHeight:1.7,maxWidth:"420px",margin:"0 auto"}}>
                Documentation, presentations, and demos for this project are being prepared.
                Check back later or reach out directly.
              </div>
              <div style={{display:"flex",justifyContent:"center",gap:"24px",marginTop:"28px",flexWrap:"wrap"}}>
                {[
                  { icon:"📄", label:"Docs", note:"0 files" },
                  { icon:"🎯", label:"Presentations", note:"0 slides" },
                  { icon:"⚡", label:"Demos", note:"0 demos" },
                ].map(item => (
                  <div key={item.label} style={{
                    padding:"12px 20px",borderRadius:"10px",
                    background:"rgba(255,255,255,0.02)",
                    border:"1px solid rgba(255,255,255,0.05)",
                    minWidth:"100px",
                  }}>
                    <div style={{fontSize:"1.3rem",marginBottom:"4px"}}>{item.icon}</div>
                    <div style={{fontFamily:"'Fira Code',monospace",fontSize:"0.68rem",color:"#5a5070",letterSpacing:"0.05em"}}>{item.label}</div>
                    <div style={{fontFamily:"'Fira Code',monospace",fontSize:"0.6rem",color:"#3a3050",marginTop:"2px"}}>{item.note}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <ScrollReveal />
    </>
  );
}
