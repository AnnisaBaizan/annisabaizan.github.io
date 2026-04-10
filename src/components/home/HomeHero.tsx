import Link from "next/link";
import ScrambleText from "@/components/ui/ScrambleText";
import { HOME_HERO } from "@/data/home";

export default function HomeHero() {
  return (
    <section className="hero">
      <div className="hero-background" />
      <div className="hero-nebula hero-nebula-1" />
      <div className="hero-nebula hero-nebula-2" />
      <div className="hero-nebula hero-nebula-3" />

      <div className="hero-text" data-animate>
        <div className="hero-eyebrow">{HOME_HERO.eyebrow}</div>
        <h1>
          Hi, I&apos;m<br />
          <ScrambleText as="span" className="hero-gradient-text" speed={22} cycles={6}>
            {HOME_HERO.name}
          </ScrambleText>
        </h1>
        <p className="hero-subtitle">{HOME_HERO.subtitle}</p>
        <p className="hero-description" data-animate data-delay="2">
          {HOME_HERO.description.split("\n").map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 ? <br /> : null}
            </span>
          ))}
        </p>
        <div className="hero-cta" data-animate data-delay="3">
          <Link href="/projects" className="btn btn-primary btn-glow">
            ⚗️ View Projects
          </Link>
          <Link href="/about" className="btn btn-secondary">
            📜 About Me
          </Link>
        </div>
      </div>

      <div className="hero-visual" data-animate data-delay="2">
        <div className="orbital-system">
          <div className="orbital-ring or-1">
            <span className="orbital-dot od-gold" />
          </div>
          <div className="orbital-ring or-2">
            <span className="orbital-dot od-cyan" />
            <span className="orbital-dot od-cyan-2" />
          </div>
          <div className="orbital-ring or-3">
            <span className="orbital-dot od-purple" />
          </div>
        </div>
        <div className="magic-sphere-wrap">
          <div className="magic-sphere">
            <div className="sphere-core">AB</div>
            <div className="sphere-ring r1" />
            <div className="sphere-ring r2" />
            <div className="sphere-ring r3" />
          </div>
        </div>
        <span className="sphere-rune" style={{ top: "-10%", left: "50%", animationDelay: "0s" }}>
          ⚡
        </span>
        <span className="sphere-rune" style={{ top: "50%", right: "-8%", animationDelay: "1.5s" }}>
          ✦
        </span>
        <span className="sphere-rune" style={{ bottom: "-5%", left: "50%", animationDelay: "3s" }}>
          ◈
        </span>
        <span className="sphere-rune" style={{ top: "50%", left: "-8%", animationDelay: "2s" }}>
          ✧
        </span>
      </div>

      <div className="scroll-indicator" />
    </section>
  );
}
