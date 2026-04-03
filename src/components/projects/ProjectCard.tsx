import Link from "next/link";
import type { Project } from "@/data/projects";
import ScrambleText from "@/components/ui/ScrambleText";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <Link href={`/projects/${p.slug}`} className="p-card">
      <div
        className="p-card__accent"
        style={{ background: `linear-gradient(90deg,${p.accent},transparent)` }}
      />

      <div className={`status-badge status-badge--${p.status} p-card__badge`}>
        <span className="status-badge__dot" />
        {p.statusLabel}
      </div>

      <div className="p-card__icon">{p.icon}</div>
      <div className="p-card__title"><ScrambleText>{p.title}</ScrambleText></div>
      <div className="p-card__desc"><ScrambleText>{p.description}</ScrambleText></div>

      <div className="p-card__tags">
        {p.tags.slice(0, 5).map(t => (
          <span key={t} className="tag-pill">{t}</span>
        ))}
      </div>

      <div className="p-card__footer">
        <span className="p-card__cta" style={{ color: p.accent }}><ScrambleText>View Project →</ScrambleText></span>
        <span className="p-card__year">{p.year}</span>
      </div>
    </Link>
  );
}
