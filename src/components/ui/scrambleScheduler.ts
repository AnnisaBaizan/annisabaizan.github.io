/**
 * Module-level singleton scheduler.
 * All ScrambleText instances share ONE requestAnimationFrame loop
 * and ONE mousemove listener — no matter how many are on the page.
 */

type TickFn = () => void;

const instances = new Set<TickFn>();
let rafId: number | null = null;

function tick() {
  instances.forEach(fn => fn());
  rafId = requestAnimationFrame(tick);
}

export function registerTick(fn: TickFn): () => void {
  instances.add(fn);
  if (!rafId) rafId = requestAnimationFrame(tick);
  return () => {
    instances.delete(fn);
    if (instances.size === 0 && rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  };
}

// ── Global mouse position ─────────────────────────────────────────────────────
export const mouse = { x: -9999, y: -9999 };
let mouseListening = false;

export function ensureMouseListener() {
  if (mouseListening) return;
  mouseListening = true;
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });
}
