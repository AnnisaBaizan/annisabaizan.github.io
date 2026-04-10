import Link from "next/link";
import ScrambleText from "@/components/ui/ScrambleText";
import { HOME_CTA } from "@/data/home";

export default function HomeCtaSection() {
  return (
    <section className="page-section">
      <div className="cta-aurora-wrap reveal">
        <div className="cta-box">
          <ScrambleText as="h2" speed={22} cycles={6}>
            {HOME_CTA.title}
          </ScrambleText>
          <p>{HOME_CTA.body}</p>
          <div className="hero-cta">
            <Link href="/links" className="btn btn-primary btn-glow">
              ✉ Get in Touch
            </Link>
            <Link href="/blog" className="btn btn-secondary">
              📖 Read Blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
