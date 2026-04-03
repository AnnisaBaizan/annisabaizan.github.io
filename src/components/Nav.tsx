"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import ScrambleText from "@/components/ui/ScrambleText";

const NAV_LINKS = [
  { href: "/",         label: "Home" },
  { href: "/about",    label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog",     label: "Blog" },
  { href: "/links",    label: "Links" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.pageYOffset > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close overlay on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <nav className="nav" style={scrolled ? { boxShadow: "0 4px 6px -1px rgba(0,0,0,0.3)" } : {}}>
        <div className="nav-container">
          <Link href="/" className="nav-brand">
            <ScrambleText speed={25} cycles={3}>AB</ScrambleText>
          </Link>

          <ul className="nav-links">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={isActive(href) ? "active" : ""}>
                  <ScrambleText speed={28} cycles={4}>{label}</ScrambleText>
                </Link>
              </li>
            ))}
          </ul>

          <button
            className={`nav-hamburger${open ? " open" : ""}`}
            aria-label="Toggle menu"
            onClick={() => setOpen(v => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`nav-mobile-overlay${open ? " open" : ""}`} id="nav-mobile-overlay">
        <div className="overlay-divider" />
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={isActive(href) ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            <ScrambleText speed={28} cycles={4}>{label}</ScrambleText>
          </Link>
        ))}
        <div className="overlay-divider" />
      </div>
    </>
  );
}
