"use client";

import React, { useRef, useEffect } from "react";
import { registerTick, ensureMouseListener, mouse } from "./scrambleScheduler";

const MAGIC   = "✦⚡☽★✧⚗ΨΩΦ∆∞⊕◈⬡◆☿♄♃⊗⊘⋆❋⁂※℃⟐⌬".split("");
const RADIUS  = 36;   // px — disturb radius around cursor
const DECAY   = 12;   // frames a char stays scrambled after cursor leaves

interface Props {
  children: string;
  as?: string;
  className?: string;
  style?: React.CSSProperties;
  /** legacy props — accepted but unused (cursor-proximity mode ignores them) */
  speed?: number;
  cycles?: number;
}

/**
 * Char-level scramble: only characters physically near the cursor scramble.
 * Shares a single RAF loop + mousemove listener across all instances.
 *
 * Usage: <ScrambleText as="h1" className="hero-name">Annisa Baizan</ScrambleText>
 */
export default function ScrambleText({ children, as = "span", className, style }: Props) {
  const elRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    ensureMouseListener();

    const text  = children;
    const chars = Array.from(text);
    const n     = chars.length;

    // Build one <span> per character — direct DOM, no React re-render
    el.innerHTML = "";
    const spans = chars.map(ch => {
      const s = document.createElement("span");
      s.textContent = ch;
      s.style.display = "inline";
      el.appendChild(s);
      return s;
    });

    // Per-char decay counter (0 = at rest)
    const decay = new Int32Array(n);

    const unregister = registerTick(() => {
      for (let i = 0; i < n; i++) {
        if (chars[i] === " " || chars[i] === "\n") continue;

        const r    = spans[i].getBoundingClientRect();
        const cx   = r.left + r.width  / 2;
        const cy   = r.top  + r.height / 2;
        const dist = Math.hypot(mouse.x - cx, mouse.y - cy);

        if (dist < RADIUS) {
          // cursor is close — keep scrambling and reset decay
          decay[i] = DECAY;
          spans[i].textContent  = MAGIC[Math.floor(Math.random() * MAGIC.length)];
          spans[i].style.color  = "#f0c040";
        } else if (decay[i] > 0) {
          // cursor left — count down, keep scrambling until decay hits 0
          decay[i]--;
          if (decay[i] === 0) {
            spans[i].textContent = chars[i];
            spans[i].style.color = "";
          } else {
            spans[i].textContent = MAGIC[Math.floor(Math.random() * MAGIC.length)];
          }
        }
      }
    });

    return () => {
      unregister();
      el.textContent = text; // restore plain text on unmount
    };
  }, [children]);

  const El = as as "span";
  return (
    <El
      ref={elRef as React.RefObject<HTMLSpanElement>}
      className={className}
      style={style}
      suppressHydrationWarning
    >
      {children}
    </El>
  );
}
