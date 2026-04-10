import ScrambleText from "@/components/ui/ScrambleText";
import { HOME_STATS } from "@/data/home";

export default function HomeStatsSection() {
  return (
    <div className="section-strip">
      <div className="stats-grid">
        {HOME_STATS.map((s, i) => (
          <div key={s.label} className={`stat-card reveal${i > 0 ? ` reveal-delay-${i}` : ""}`}>
            <ScrambleText as="span" className="stat-number" speed={20} cycles={4}>
              {s.count}
            </ScrambleText>
            <ScrambleText as="span" className="stat-label" speed={30} cycles={3}>
              {s.label}
            </ScrambleText>
          </div>
        ))}
      </div>
    </div>
  );
}
