import type { CmsSite } from "@/data/projects";
import ScrambleText from "@/components/ui/ScrambleText";

export default function CmsCard({ site }: { site: CmsSite }) {
  return (
    <a href={site.link} target="_blank" rel="noopener noreferrer" className="s-card">
      <div className="s-card__head">
        <span className="s-card__icon">{site.icon}</span>
        <div>
          <div className="s-card__name"><ScrambleText>{site.title}</ScrambleText></div>
          <div className="s-card__meta">{site.year} · {site.institution}</div>
        </div>
      </div>
      <div className="s-card__desc"><ScrambleText>{site.description}</ScrambleText></div>
      <div className="s-card__footer">
        {site.tags.map(t => (
          <span key={t} className="tag-pill tag-pill--sm">{t}</span>
        ))}
        <span className="s-card__visit"><ScrambleText>↗ Visit</ScrambleText></span>
      </div>
    </a>
  );
}
