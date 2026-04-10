import ScrambleText from "@/components/ui/ScrambleText";
import { HOME_INTRO_SECTION, INTRO_CARDS } from "@/data/home";

export default function HomeIntroSection() {
  return (
    <section className="page-section">
      <div className="section-hd reveal">
        <div className="eyebrow">
          <ScrambleText>{HOME_INTRO_SECTION.eyebrow}</ScrambleText>
        </div>
        <ScrambleText as="h2" speed={25} cycles={5}>
          {HOME_INTRO_SECTION.title}
        </ScrambleText>
        <p>{HOME_INTRO_SECTION.lead}</p>
      </div>
      <div className="intro-grid">
        {INTRO_CARDS.map((c, i) => (
          <div key={c.title} className={`intro-card reveal reveal-delay-${i + 1}`}>
            <div className="card-icon-wrap">{c.icon}</div>
            <ScrambleText as="h3" speed={28} cycles={4}>
              {c.title}
            </ScrambleText>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
