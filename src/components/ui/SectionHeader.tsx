import ScrambleText from "@/components/ui/ScrambleText";

interface SectionHeaderProps {
  title: string;
  desc: string;
  count: number;
  accent?: string;
}

/**
 * Reusable section heading with title, item count, accent underline, and description.
 * accent defaults to --gold if not provided.
 */
export default function SectionHeader({ title, desc, count, accent }: SectionHeaderProps) {
  return (
    <div className="sec-head">
      <div className="sec-head__title">
        <ScrambleText>{title}</ScrambleText>
        <span className="sec-head__count">{count} items</span>
      </div>
      <div className="sec-head__line" style={{ background: accent ?? "var(--gold)" }} />
      <div className="sec-head__desc">{desc}</div>
    </div>
  );
}
