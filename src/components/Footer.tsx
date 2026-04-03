import Link from "next/link";
import ScrambleText from "@/components/ui/ScrambleText";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link href="/about"><ScrambleText>About</ScrambleText></Link>
          <Link href="/projects"><ScrambleText>Projects</ScrambleText></Link>
          <Link href="/blog"><ScrambleText>Blog</ScrambleText></Link>
          <Link href="/links"><ScrambleText>Links</ScrambleText></Link>
          <Link href="/labs"><ScrambleText>Labs</ScrambleText></Link>
        </div>
        <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "1rem" }}>
          © {new Date().getFullYear()} Annisa Baizan · Built with Next.js · Deployed on GitHub Pages
        </p>
      </div>
    </footer>
  );
}
