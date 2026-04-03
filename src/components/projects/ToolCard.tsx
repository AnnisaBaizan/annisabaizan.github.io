import type { Tool } from "@/data/projects";
import ScrambleText from "@/components/ui/ScrambleText";

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <a href={tool.link} target="_blank" rel="noopener noreferrer" className="s-card">
      <div
        className="s-card__accent"
        style={{ background: `linear-gradient(90deg,${tool.accent},transparent)` }}
      />
      <div className="s-card__head">
        <span className="s-card__icon s-card__icon--sm">{tool.icon}</span>
        <div>
          <div className="s-card__name"><ScrambleText>{tool.title}</ScrambleText></div>
          <div className="s-card__meta">{tool.year} · {tool.category}</div>
        </div>
      </div>
      <div className="s-card__desc"><ScrambleText>{tool.description}</ScrambleText></div>
      <div className="s-card__highlight" style={{ color: tool.accent }}>
        ✦ <ScrambleText>{tool.highlight}</ScrambleText>
      </div>
      <div className="s-card__footer">
        {tool.tags.map(t => (
          <span key={t} className="tag-pill tag-pill--sm">{t}</span>
        ))}
        <span className="s-card__visit"><ScrambleText>↗ GitHub</ScrambleText></span>
      </div>
    </a>
  );
}
