"use client";

import { useEffect } from "react";

const RUNES = ["✦","✧","◈","⚡","✵","⋆","☽","◉","⊕","✺"];

export default function FloatingRunes() {
  useEffect(() => {
    const runes: HTMLElement[] = [];

    for (let i = 0; i < 8; i++) {
      const el = document.createElement("span");
      el.className = "floating-rune";
      el.textContent = RUNES[Math.floor(Math.random() * RUNES.length)];
      el.style.cssText = `
        left: ${5 + Math.random() * 90}%;
        animation-delay: ${Math.random() * 12}s;
        animation-duration: ${10 + Math.random() * 8}s;
        font-size: ${0.6 + Math.random() * 0.6}rem;
        opacity: 0;
        filter: drop-shadow(0 0 4px rgba(240,192,64,0.5));
      `;
      document.body.appendChild(el);
      runes.push(el);
    }

    return () => { runes.forEach(r => r.remove()); };
  }, []);

  return null;
}
