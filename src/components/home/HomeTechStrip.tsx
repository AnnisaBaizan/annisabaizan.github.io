import { TECH_STACK } from "@/data/home";

export default function HomeTechStrip() {
  const techTrack = [...TECH_STACK, ...TECH_STACK];

  return (
    <div className="tech-strip">
      <div className="tech-strip-track">
        {techTrack.map((t, i) => (
          <span key={`${t}-${i}`}>
            <span className="ts-item">{t}</span>
            <span className="ts-sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
