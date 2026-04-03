import ScrambleText from "@/components/ui/ScrambleText";

interface PageHeroProps {
  badge: string;
  title: string;
  description: string;
}

/**
 * Shared page hero: eyebrow badge + gradient h1 + description paragraph.
 * Used on Blog, Labs, Projects, and Links pages.
 */
export default function PageHero({ badge, title, description }: PageHeroProps) {
  return (
    <>
      <section style={{padding:"120px 40px 80px",maxWidth:"900px",margin:"0 auto",textAlign:"center"}}>
        <div style={{
          display:"inline-flex",alignItems:"center",gap:"8px",
          padding:"6px 18px",border:"1px solid rgba(240,192,64,0.3)",
          borderRadius:"100px",fontFamily:"'Fira Code',monospace",
          fontSize:"0.72rem",color:"#f0c040",letterSpacing:"0.12em",
          textTransform:"uppercase",marginBottom:"28px",
          background:"rgba(240,192,64,0.07)",
        }}>
          <ScrambleText>{badge}</ScrambleText>
        </div>

        <h1 style={{
          fontFamily:"'Cinzel',serif",fontSize:"clamp(2.8rem,7vw,5rem)",
          fontWeight:900,lineHeight:1.05,
          background:"linear-gradient(135deg,#f0c040 0%,#00d4ff 60%,#7b2fff 100%)",
          WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",
          marginBottom:"24px",
        }}>
          <ScrambleText>{title}</ScrambleText>
        </h1>

        <p style={{
          fontFamily:"'Crimson Text',serif",fontSize:"1.25rem",
          color:"#a89fc0",lineHeight:1.75,maxWidth:"640px",margin:"0 auto",
        }}>
          {description}
        </p>
      </section>

      <div style={{width:"100%",height:"1px",background:"linear-gradient(90deg,transparent,rgba(240,192,64,0.2),transparent)"}} />
    </>
  );
}
