import type { Metadata } from "next";
import projects, { cmsSites, tools } from "@/data/projects";
import ProjectsClient from "@/components/ProjectsClient";
import ScrollReveal from "@/components/ScrollReveal";
import ScrambleText from "@/components/ui/ScrambleText";

export const metadata: Metadata = {
  title: "Projects — Annisa Baizan",
  description: "Full-stack systems built for health institutions, government, and enterprise.",
};

export default function ProjectsPage() {
  const totalTools = tools.length + cmsSites.length;

  return (
    <>
      {/* ── HERO ── */}
      <section style={{padding:"120px 40px 80px",maxWidth:"900px",margin:"0 auto",textAlign:"center",position:"relative"}}>
        <div style={{
          display:"inline-flex",alignItems:"center",gap:"8px",
          padding:"6px 18px",border:"1px solid rgba(240,192,64,0.3)",
          borderRadius:"100px",fontFamily:"'Fira Code',monospace",
          fontSize:"0.72rem",color:"#f0c040",letterSpacing:"0.12em",
          textTransform:"uppercase",marginBottom:"28px",
          background:"rgba(240,192,64,0.07)",
        }}>
          ⚗️ portfolio.projects
        </div>

        <h1 style={{
          fontFamily:"'Cinzel',serif",fontSize:"clamp(2.8rem,7vw,5rem)",
          fontWeight:900,lineHeight:1.05,letterSpacing:"0.04em",
          background:"linear-gradient(135deg,#f0c040 0%,#00d4ff 60%,#7b2fff 100%)",
          WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",
          marginBottom:"24px",
        }}>
          <ScrambleText speed={22} cycles={6}>My Projects</ScrambleText>
        </h1>

        <p style={{fontFamily:"'Crimson Text',serif",fontSize:"1.25rem",color:"#a89fc0",lineHeight:1.75,maxWidth:"640px",margin:"0 auto 40px"}}>
          Full-stack web applications, clinical decision support systems, and automation
          tools — built across health informatics, government, and institutional software.
        </p>

        <div style={{display:"flex",justifyContent:"center",gap:"48px",flexWrap:"wrap"}}>
          {[
            { num:`${projects.length}+`, label:"Full-Stack Systems" },
            { num:`${totalTools}+`,      label:"Tools & Scripts" },
            { num:"3+",                  label:"Years Building" },
          ].map(s => (
            <div key={s.label} style={{textAlign:"center"}}>
              <ScrambleText as="span" style={{display:"block",fontFamily:"'Cinzel',serif",fontSize:"2rem",fontWeight:700,color:"#f0c040"}} speed={20} cycles={4}>{s.num}</ScrambleText>
              <ScrambleText as="span" style={{display:"block",fontFamily:"'Fira Code',monospace",fontSize:"0.7rem",color:"#a89fc0",letterSpacing:"0.08em",textTransform:"uppercase",marginTop:"4px"}} speed={30} cycles={3}>{s.label}</ScrambleText>
            </div>
          ))}
        </div>
      </section>

      <div style={{width:"100%",height:"1px",background:"linear-gradient(90deg,transparent,rgba(240,192,64,0.2),transparent)",marginBottom:"60px"}} />

      <ProjectsClient projects={projects} cmsSites={cmsSites} tools={tools} />

      <ScrollReveal />
    </>
  );
}
