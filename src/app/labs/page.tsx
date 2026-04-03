import type { Metadata } from "next";
import Link from "next/link";
import ScrambleText from "@/components/ui/ScrambleText";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Labs — Annisa Baizan",
  description: "Code experiments, demos, and interactive explorations.",
};

const LAB_ITEMS = [
  { icon: "📰", title: "The Daily Prophet",   desc: "Moving newspaper from the wizarding world — 3 animated canvas portraits, multi-column layout, Pretext text measurement.", status: "live", href: "/labs/daily-prophet", tags:["canvas","pretext","harry-potter","animation"] },
  { icon: "⭐", title: "Star Field v2",       desc: "3D layered star field with nebula, shooting stars, and parallax scrolling. Pure canvas JS.", status: "live",        href: null, tags:["canvas","animation","JS"] },
  { icon: "🎨", title: "Galaxy CSS System",   desc: "Design system exploration for the galaxy theme — tokens, components, animations.", status: "live",        href: null, tags:["CSS","design-system"] },
  { icon: "🧩", title: "Risk Matrix",         desc: "Interactive ISO 31000 risk matrix with drag-and-drop positioning and heat map.", status: "planned",     href: null, tags:["interactive","data-viz"] },
];

const statusColor = { live:"#a5d6a7", "in-progress":"#f0c040", planned:"#a89fc0" } as const;

export default function LabsPage() {
  return (
    <>
      <PageHero
        badge="🧪 labs.annisabaizan"
        title="Labs"
        description="Experiments, demos, and code explorations. Where curiosity gets to run without needing a business case."
      />

      <section style={{padding:"80px 40px",maxWidth:"1000px",margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"24px"}}>
          {LAB_ITEMS.map((item) => {
            const sc = statusColor[item.status as keyof typeof statusColor] || "#a89fc0";
            const inner = (
              <>
                <div style={{position:"absolute",top:"16px",right:"16px",padding:"3px 10px",borderRadius:"999px",fontFamily:"'Fira Code',monospace",fontSize:"0.62rem",color:sc,border:`1px solid ${sc}50`,background:`${sc}15`}}>
                  {item.status}
                </div>
                <div style={{fontSize:"2rem",marginBottom:"12px"}}>{item.icon}</div>
                <div style={{fontFamily:"'Cinzel',serif",fontSize:"1rem",fontWeight:700,color:"#f5f0ff",marginBottom:"8px"}}><ScrambleText>{item.title}</ScrambleText></div>
                <p style={{fontFamily:"'Crimson Text',serif",fontSize:"0.9rem",color:"#a89fc0",lineHeight:1.7,marginBottom:"16px"}}>{item.desc}</p>
                <div style={{display:"flex",flexWrap:"wrap",gap:"6px"}}>
                  {item.tags.map(t => (
                    <span key={t} style={{padding:"2px 8px",background:"rgba(240,192,64,0.07)",border:"1px solid rgba(240,192,64,0.2)",borderRadius:"999px",fontFamily:"'Fira Code',monospace",fontSize:"0.62rem",color:"#f0c040"}}>{t}</span>
                  ))}
                </div>
                {item.href && (
                  <div style={{marginTop:"16px",fontFamily:"'Cinzel',serif",fontSize:"0.72rem",fontWeight:600,color:"#f0c040",letterSpacing:"0.08em"}}>
                    <ScrambleText>Open Experiment →</ScrambleText>
                  </div>
                )}
              </>
            );
            return item.href ? (
              <Link key={item.title} href={item.href} style={{background:"rgba(13,10,46,0.55)",border:"1px solid rgba(240,192,64,0.2)",borderRadius:"16px",padding:"28px",backdropFilter:"blur(12px)",position:"relative",display:"block",textDecoration:"none",color:"inherit",transition:"border-color 0.3s, transform 0.3s"}}>
                {inner}
              </Link>
            ) : (
              <div key={item.title} style={{background:"rgba(13,10,46,0.55)",border:"1px solid rgba(240,192,64,0.1)",borderRadius:"16px",padding:"28px",backdropFilter:"blur(12px)",position:"relative"}}>
                {inner}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
