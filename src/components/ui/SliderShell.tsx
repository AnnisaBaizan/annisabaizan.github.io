"use client";

import { useState, useRef, useCallback } from "react";

interface SliderShellProps {
  total: number;
  emptyLabel?: string;
  children: React.ReactNode;
}

/**
 * Generic horizontal scroll-snap slider.
 * Wrap each item in <div className="slider-card"> before passing as children.
 * Reusable anywhere in the app — not coupled to any data type.
 */
export default function SliderShell({
  total,
  emptyLabel = "No items yet.",
  children,
}: SliderShellProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);

  const visibleCount = useCallback(() => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth <= 640)  return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }, []);

  const scrollTo = (dir: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".slider-card") as HTMLElement | null;
    if (!card) return;
    el.scrollBy({
      left: dir === "next" ? card.offsetWidth + 24 : -(card.offsetWidth + 24),
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".slider-card") as HTMLElement | null;
    if (!card) return;
    setIdx(Math.round(el.scrollLeft / (card.offsetWidth + 24)));
  };

  const vc      = visibleCount();
  const isFirst = idx === 0;
  const isLast  = idx >= total - vc;
  const from    = total === 0 ? 0 : idx + 1;
  const to      = Math.min(idx + vc, total);

  return (
    <div className="slider-wrap">
      <div className="slider-controls">
        <span className="slider-counter">
          {total === 0 ? emptyLabel : `${from}–${to} of ${total}`}
        </span>
        <div className="slider-arrows">
          <button
            className="slider-btn"
            onClick={() => scrollTo("prev")}
            disabled={isFirst}
            aria-label="Previous"
          >
            ←
          </button>
          <button
            className="slider-btn"
            onClick={() => scrollTo("next")}
            disabled={isLast}
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>

      {total === 0 ? (
        <div className="empty-state">{emptyLabel}</div>
      ) : (
        <div className="slider-track" ref={trackRef} onScroll={handleScroll}>
          {children}
        </div>
      )}
    </div>
  );
}
