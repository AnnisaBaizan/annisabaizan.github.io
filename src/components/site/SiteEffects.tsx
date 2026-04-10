"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

/**
 * Heavy visuals load after first paint (requestIdleCallback + timeout cap)
 * so navigation and text feel instant; chunks still code-split via dynamic().
 */
const StarCanvas = dynamic(() => import("@/components/StarCanvas"), {
  ssr: false,
  loading: () => null,
});

const Cursor = dynamic(() => import("@/components/Cursor"), {
  ssr: false,
  loading: () => null,
});

const FloatingRunes = dynamic(() => import("@/components/FloatingRunes"), {
  ssr: false,
  loading: () => null,
});

const MusicPlayer = dynamic(() => import("@/components/MusicPlayer"), {
  ssr: false,
  loading: () => null,
});

export default function SiteEffects() {
  const [boot, setBoot] = useState(false);

  useEffect(() => {
    const run = () => setBoot(true);
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(run, { timeout: 500 });
      return () => window.cancelIdleCallback(id);
    }
    const t = window.setTimeout(run, 120);
    return () => window.clearTimeout(t);
  }, []);

  if (!boot) return null;

  return (
    <>
      <StarCanvas />
      <Cursor />
      <FloatingRunes />
      <MusicPlayer />
    </>
  );
}
