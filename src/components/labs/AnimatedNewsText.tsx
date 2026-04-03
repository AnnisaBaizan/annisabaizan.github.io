"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  text: string;
  width: number;
  font?: string;
  lineHeight?: number;
  color?: string;
  dropCap?: boolean;
}

interface Line {
  text: string;
  y: number;
}

// Per-character scramble state
interface CharState {
  // current render offset (animated toward target)
  dx: number;
  dy: number;
  // target offset set by mouse disturb
  tdx: number;
  tdy: number;
  // scramble char (null = original)
  scramble: string | null;
  scrambleDecay: number; // 0–1, counts down to 0 = restored
}

const MAGIC_CHARS = "✦⚡🌙★✧⚗☽⋆ΨΩΦ∆∞℃⊕◈⬡⬢◆◇☿♄♃♂♀⊗⊘⊙".split("");

function randomMagicChar() {
  return MAGIC_CHARS[Math.floor(Math.random() * MAGIC_CHARS.length)];
}

function hexAlpha(col: string, alpha: number): string {
  if (col.startsWith("#")) {
    const r = parseInt(col.slice(1, 3), 16);
    const g = parseInt(col.slice(3, 5), 16);
    const b = parseInt(col.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha.toFixed(3)})`;
  }
  return col;
}

export default function AnimatedNewsText({
  text,
  width,
  font = "15px 'IM Fell English', Georgia, serif",
  lineHeight = 22,
  color = "#1a0e00",
  dropCap = false,
}: Props) {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const [height, setHeight] = useState(200);

  // shared mutable refs (no re-render needed)
  const linesRef      = useRef<Line[]>([]);
  const charStatesRef = useRef<CharState[][]>([]); // [lineIdx][charIdx]
  const mouseRef      = useRef<{ x: number; y: number } | null>(null);

  // ── LAYOUT ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      try {
        await document.fonts.ready;
        const { prepareWithSegments, layoutWithLines } = await import("@chenglou/pretext");

        let textToMeasure = text;
        let dropCharWidth = 0;
        if (dropCap && text.length > 0) {
          dropCharWidth = 44;
          textToMeasure = text.slice(1);
        }

        const effectiveWidth = dropCap ? width - dropCharWidth - 4 : width;
        const prepared = prepareWithSegments(textToMeasure, font);
        const result   = layoutWithLines(prepared, effectiveWidth, lineHeight);
        if (cancelled) return;

        setHeight(result.height + (dropCap ? 10 : 0));

        const lines: Line[] = result.lines.map((line, i) => ({
          text: line.text,
          y: dropCap ? Math.max(52, i * lineHeight + lineHeight) : i * lineHeight + lineHeight,
        }));
        linesRef.current = lines;
        charStatesRef.current = lines.map(l =>
          Array.from(l.text).map(() => ({ dx:0, dy:0, tdx:0, tdy:0, scramble:null, scrambleDecay:0 }))
        );
      } catch {
        // fallback: canvas measureText
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.font = font;
        const words = text.split(" ");
        const lines: Line[] = [];
        let current = "", y = lineHeight;
        for (const word of words) {
          const test = current ? `${current} ${word}` : word;
          if (ctx.measureText(test).width > width && current) {
            lines.push({ text: current, y });
            current = word;
            y += lineHeight;
          } else {
            current = test;
          }
        }
        if (current) lines.push({ text: current, y });
        if (cancelled) return;
        linesRef.current = lines;
        charStatesRef.current = lines.map(l =>
          Array.from(l.text).map(() => ({ dx:0, dy:0, tdx:0, tdy:0, scramble:null, scrambleDecay:0 }))
        );
        setHeight(y + 10);
      }
    };
    run();
    return () => { cancelled = true; };
  }, [text, width, font, lineHeight, dropCap]);

  // ── MOUSE TRACKING ─────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const RADIUS   = 38;  // px — disturb radius
    const STRENGTH = 18;  // max px displacement

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width  / rect.width;
      const scaleY = canvas.height / rect.height;
      const mx = (e.clientX - rect.left)  * scaleX;
      const my = (e.clientY - rect.top)   * scaleY;
      mouseRef.current = { x: mx, y: my };

      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.font = font;

      const lines  = linesRef.current;
      const states = charStatesRef.current;

      lines.forEach((line, li) => {
        let cx = 0; // running x position
        Array.from(line.text).forEach((ch, ci) => {
          const cw = ctx.measureText(ch).width;
          const charX = cx + cw / 2;
          const charY = line.y - lineHeight * 0.3;

          const dist  = Math.hypot(mx - charX, my - charY);
          if (dist < RADIUS) {
            const force = (1 - dist / RADIUS) * STRENGTH;
            const angle = Math.atan2(charY - my, charX - mx);
            const s = states[li]?.[ci];
            if (s) {
              s.tdx = Math.cos(angle) * force;
              s.tdy = Math.sin(angle) * force;
              // set scramble
              s.scramble = randomMagicChar();
              s.scrambleDecay = 1.0;
            }
          }
          cx += cw;
        });
      });
    };

    const onLeave = () => { mouseRef.current = null; };

    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);
    return () => {
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, [font, lineHeight, height]);

  // ── RENDER LOOP ────────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let start: number | null = null;
    const EASE = 0.22; // spring ease-back speed

    const loop = (ts: number) => {
      if (!start) start = ts;
      const t = ts - start;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.textBaseline = "alphabetic";

      const lines  = linesRef.current;
      const states = charStatesRef.current;

      lines.forEach((line, li) => {
        const lineStates = states[li];
        if (!lineStates) return;

        // ambient wave per line (idle animation)
        const waveY  = Math.sin(t * 0.00045 + li * 0.42) * 0.55;
        const alpha  = Math.max(0.78, Math.min(1, 0.92 + Math.sin(t * 0.0006 + li * 0.35) * 0.07));

        ctx.font = font;
        let cx = 0;

        Array.from(line.text).forEach((ch, ci) => {
          const s = lineStates[ci];
          if (!s) { cx += ctx.measureText(ch).width; return; }

          // spring toward target, then target toward 0
          s.dx += (s.tdx - s.dx) * EASE;
          s.dy += (s.tdy - s.dy) * EASE;
          s.tdx *= 0.72; // decay target back to 0
          s.tdy *= 0.72;

          // scramble decay
          if (s.scrambleDecay > 0) {
            s.scrambleDecay -= 0.06;
            if (s.scrambleDecay <= 0) {
              s.scramble = null;
              s.scrambleDecay = 0;
            }
          }

          const renderChar = (s.scramble && s.scrambleDecay > 0.3) ? s.scramble : ch;
          const cw = ctx.measureText(ch).width;
          const renderX = cx + s.dx;
          const renderY = line.y + waveY + s.dy;

          if (s.scramble && s.scrambleDecay > 0) {
            // scrambled: gold magic color
            const sc = s.scrambleDecay;
            ctx.fillStyle = `rgba(180,120,8,${(sc * 0.9).toFixed(3)})`;
            ctx.font = font.replace(/^\d+px/, `${Math.round(15 + sc * 4)}px`);
          } else {
            ctx.font = font;
            ctx.fillStyle = hexAlpha(color, alpha);
          }

          ctx.fillText(renderChar, renderX, renderY);
          cx += cw;
        });
      });

      // drop cap
      if (dropCap && text.length > 0) {
        const dcFont  = font.replace(/^\d+px/, "48px");
        ctx.font      = dcFont;
        const dcAlpha = 0.9 + Math.sin(t * 0.0004) * 0.08;
        ctx.fillStyle = hexAlpha("#8b1a1a", dcAlpha);
        ctx.fillText(text[0], Math.sin(t * 0.00035) * 0.3, 44);
      }

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [font, color, dropCap, text, height, lineHeight]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{ display:"block", width:"100%", height:`${height}px`, cursor:"default" }}
    />
  );
}
