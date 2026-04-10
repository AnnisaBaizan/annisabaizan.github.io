import ScrambleText from "@/components/ui/ScrambleText";
import { HOME_QUOTE } from "@/data/home";

export default function HomeQuoteSection() {
  return (
    <div className="quote-section">
      <div className="quote-marks-wrap">
        <span className="quote-giant-open">&ldquo;</span>
        <div className="quote-text reveal">{HOME_QUOTE.text}</div>
        <div className="quote-attr reveal reveal-delay-1">
          <ScrambleText>{HOME_QUOTE.attribution}</ScrambleText>
        </div>
        <span className="quote-giant-close">&rdquo;</span>
      </div>
    </div>
  );
}
