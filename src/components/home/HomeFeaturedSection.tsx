import Link from "next/link";
import ScrambleText from "@/components/ui/ScrambleText";
import { FEATURED_PROJECTS, HOME_FEATURED_SECTION } from "@/data/home";

export default function HomeFeaturedSection() {
  return (
    <section className="page-section">
      <div className="section-hd reveal">
        <div className="eyebrow">
          <ScrambleText>{HOME_FEATURED_SECTION.eyebrow}</ScrambleText>
        </div>
        <ScrambleText as="h2" speed={25} cycles={5}>
          {HOME_FEATURED_SECTION.title}
        </ScrambleText>
        <p>{HOME_FEATURED_SECTION.lead}</p>
      </div>
      <div className="projects-grid">
        {FEATURED_PROJECTS.map((p, i) => (
          <Link key={p.href} href={p.href} className={`project-card reveal reveal-delay-${i + 1}`}>
            <div className="project-thumb" style={{ background: p.gradient, backgroundSize: "300% 300%" }}>
              <span className="project-thumb-icon">{p.icon}</span>
            </div>
            <div className="project-body">
              <ScrambleText as="h3" className="project-title" speed={25} cycles={4}>
                {p.title}
              </ScrambleText>
              <p className="project-desc">{p.desc}</p>
              <div className="tags">
                {p.tags.map(t => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
