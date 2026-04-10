type CosmosDividerProps = {
  /** Show dot clusters on both outer edges */
  edgeDots?: boolean;
  centerGlyph?: string;
  className?: string;
};

export default function CosmosDivider({
  edgeDots = false,
  centerGlyph = "✦",
  className = "",
}: CosmosDividerProps) {
  return (
    <div className={`cosmos-divider ${className}`.trim()} style={{ padding: "2rem 4rem" }}>
      {edgeDots ? (
        <div className="cosmos-divider-dots">
          {[0, 1, 2].map(i => (
            <div key={i} className="cosmos-divider-dot" />
          ))}
        </div>
      ) : null}
      <div className="cosmos-divider-line" />
      <div className="cosmos-divider-center">
        <span className="cosmos-divider-glyph">{centerGlyph}</span>
      </div>
      <div className="cosmos-divider-line" />
      {edgeDots ? (
        <div className="cosmos-divider-dots">
          {[0, 1, 2].map(i => (
            <div key={i} className="cosmos-divider-dot" />
          ))}
        </div>
      ) : null}
    </div>
  );
}
