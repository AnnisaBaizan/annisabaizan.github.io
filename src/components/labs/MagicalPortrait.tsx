"use client";

import { useEffect, useRef } from "react";

type PortraitKind = "minister" | "wanted" | "quidditch";

interface Props {
  kind: PortraitKind;
  caption: string;
  width?: number;
  height?: number;
}

// ─── DRAWING HELPERS ─────────────────────────────────────────────────────────

function drawMinister(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const sway   = Math.sin(t * 0.0008) * 2.5;
  const blink  = Math.sin(t * 0.003) > 0.96;
  const cx     = w / 2 + sway;

  // dark background
  ctx.fillStyle = "#1a0e05";
  ctx.fillRect(0, 0, w, h);

  // subtle vignette
  const vig = ctx.createRadialGradient(cx, h * 0.4, h * 0.1, cx, h * 0.4, h * 0.8);
  vig.addColorStop(0, "transparent");
  vig.addColorStop(1, "rgba(10,5,0,0.7)");
  ctx.fillStyle = vig;
  ctx.fillRect(0, 0, w, h);

  // robe / torso
  ctx.fillStyle = "#2c1a10";
  ctx.beginPath();
  ctx.moveTo(cx - 38, h);
  ctx.lineTo(cx - 28, h * 0.62);
  ctx.lineTo(cx + 28, h * 0.62);
  ctx.lineTo(cx + 38, h);
  ctx.fill();

  // shirt & collar
  ctx.fillStyle = "#e8d9b4";
  ctx.fillRect(cx - 10, h * 0.58, 20, h * 0.1);

  // neck
  ctx.fillStyle = "#c8a07a";
  ctx.fillRect(cx - 7, h * 0.47, 14, h * 0.12);

  // head
  ctx.fillStyle = "#c8a07a";
  ctx.beginPath();
  ctx.ellipse(cx, h * 0.38, 22, 28, 0, 0, Math.PI * 2);
  ctx.fill();

  // hat (wizard)
  ctx.fillStyle = "#2c1a10";
  ctx.beginPath();
  ctx.moveTo(cx - 26, h * 0.16);
  ctx.lineTo(cx + 26, h * 0.16);
  ctx.lineTo(cx + 18, h * 0.08);
  ctx.lineTo(cx, h * 0.0);
  ctx.lineTo(cx - 18, h * 0.08);
  ctx.closePath();
  ctx.fill();
  ctx.fillRect(cx - 28, h * 0.14, 56, 7);

  // hat brim detail
  ctx.strokeStyle = "#c8960c";
  ctx.lineWidth = 1;
  ctx.strokeRect(cx - 28, h * 0.14, 56, 7);

  // eyes
  const eyeY = h * 0.36;
  if (blink) {
    ctx.strokeStyle = "#3a2010";
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(cx - 12, eyeY); ctx.lineTo(cx - 6, eyeY); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx + 6,  eyeY); ctx.lineTo(cx + 12, eyeY); ctx.stroke();
  } else {
    ctx.fillStyle = "#3a2010";
    ctx.beginPath(); ctx.ellipse(cx - 9, eyeY, 4, 3.5, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(cx + 9, eyeY, 4, 3.5, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#c8a07a";
    ctx.beginPath(); ctx.ellipse(cx - 8, eyeY - 1, 1.5, 1.5, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(cx + 10, eyeY - 1, 1.5, 1.5, 0, 0, Math.PI * 2); ctx.fill();
  }

  // glasses
  ctx.strokeStyle = "#8b6914";
  ctx.lineWidth = 1.2;
  ctx.beginPath(); ctx.ellipse(cx - 9, eyeY, 7, 6, 0, 0, Math.PI * 2); ctx.stroke();
  ctx.beginPath(); ctx.ellipse(cx + 9, eyeY, 7, 6, 0, 0, Math.PI * 2); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(cx - 2, eyeY); ctx.lineTo(cx + 2, eyeY); ctx.stroke();

  // nose
  ctx.strokeStyle = "#a07858";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(cx, h * 0.37);
  ctx.quadraticCurveTo(cx + 5, h * 0.41, cx + 2, h * 0.43);
  ctx.stroke();

  // mouth — slight smile
  ctx.strokeStyle = "#7a5040";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(cx, h * 0.45, 6, 0.1, Math.PI - 0.1);
  ctx.stroke();

  // ear
  ctx.fillStyle = "#c0906a";
  ctx.beginPath(); ctx.ellipse(cx - 21, h * 0.38, 5, 7, 0, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(cx + 21, h * 0.38, 5, 7, 0, 0, Math.PI * 2); ctx.fill();

  // golden shimmer particles floating up
  const shimmerCount = 5;
  for (let i = 0; i < shimmerCount; i++) {
    const px = cx - 30 + i * 14 + Math.sin(t * 0.001 + i * 1.3) * 5;
    const py = h * 0.8 - ((t * 0.04 + i * 18) % (h * 0.7));
    const alpha = Math.sin((t * 0.004 + i) * 1.5) * 0.4 + 0.2;
    ctx.fillStyle = `rgba(200,150,12,${alpha})`;
    ctx.beginPath();
    ctx.arc(px, py, 1.2, 0, Math.PI * 2);
    ctx.fill();
  }

  // subtle golden frame inner glow
  const glow = ctx.createLinearGradient(0, 0, 0, h);
  glow.addColorStop(0, "rgba(200,150,12,0.08)");
  glow.addColorStop(1, "rgba(200,150,12,0.0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, w, h);
}

function drawWanted(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const lookPhase = Math.floor(t / 2500) % 4; // look direction changes
  const lookX = [0, -8, 8, -4][lookPhase] * Math.min(1, ((t % 2500) / 300));
  const cx = w / 2 + lookX;

  // dark sepia bg
  ctx.fillStyle = "#120a02";
  ctx.fillRect(0, 0, w, h);

  // "WANTED" banner at top
  ctx.fillStyle = "#8b1a1a";
  ctx.fillRect(0, 0, w, 28);
  ctx.fillStyle = "#f2dfa8";
  ctx.font = "bold 14px 'Cinzel', serif";
  ctx.textAlign = "center";
  ctx.fillText("WANTED", w / 2, 19);

  // torso — dark robes
  ctx.fillStyle = "#0d0805";
  ctx.beginPath();
  ctx.moveTo(w / 2 - 40, h);
  ctx.lineTo(w / 2 - 25, h * 0.62);
  ctx.lineTo(w / 2 + 25, h * 0.62);
  ctx.lineTo(w / 2 + 40, h);
  ctx.fill();

  // chains hint
  ctx.strokeStyle = "#4a4030";
  ctx.lineWidth = 2;
  for (let i = 0; i < 3; i++) {
    const chainY = h * (0.68 + i * 0.05);
    ctx.beginPath();
    ctx.moveTo(w / 2 - 20, chainY);
    ctx.lineTo(w / 2 + 20, chainY);
    ctx.stroke();
  }

  // neck
  ctx.fillStyle = "#8a6040";
  ctx.fillRect(cx - 8, h * 0.47, 16, h * 0.14);

  // gaunt face
  ctx.fillStyle = "#8a6040";
  ctx.beginPath();
  ctx.ellipse(cx, h * 0.36, 18, 24, 0, 0, Math.PI * 2);
  ctx.fill();

  // sunken cheeks shading
  ctx.fillStyle = "rgba(0,0,0,0.35)";
  ctx.beginPath(); ctx.ellipse(cx - 12, h * 0.4, 7, 10, -0.3, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(cx + 12, h * 0.4, 7, 10,  0.3, 0, Math.PI * 2); ctx.fill();

  // wild hair
  ctx.fillStyle = "#1a0e04";
  ctx.beginPath();
  ctx.moveTo(cx - 20, h * 0.18);
  for (let i = 0; i < 12; i++) {
    const hx = cx - 20 + i * 4 + Math.sin(i * 0.9 + t * 0.0006) * 4;
    const hy = h * 0.1 + Math.sin(i * 1.2 + t * 0.0005) * 8;
    ctx.lineTo(hx, hy);
  }
  ctx.lineTo(cx + 20, h * 0.18);
  ctx.closePath();
  ctx.fill();

  // eyes — intense, darting
  const eyeY = h * 0.33;
  const blink2 = Math.sin(t * 0.0023) > 0.93;
  if (blink2) {
    ctx.strokeStyle = "#2a1408";
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(cx - 11, eyeY); ctx.lineTo(cx - 4, eyeY); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx + 4, eyeY);  ctx.lineTo(cx + 11, eyeY); ctx.stroke();
  } else {
    ctx.fillStyle = "#c0380a";
    ctx.beginPath(); ctx.ellipse(cx - 7.5, eyeY, 4, 4, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(cx + 7.5, eyeY, 4, 4, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#0d0505";
    ctx.beginPath(); ctx.ellipse(cx - 7.5, eyeY, 2, 2, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(cx + 7.5, eyeY, 2, 2, 0, 0, Math.PI * 2); ctx.fill();
  }

  // scar / wound line on cheek
  ctx.strokeStyle = "rgba(180,80,40,0.6)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(cx + 6, h * 0.35);
  ctx.lineTo(cx + 14, h * 0.44);
  ctx.stroke();

  // thin mouth
  ctx.strokeStyle = "#5a3020";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(cx - 8, h * 0.43);
  ctx.lineTo(cx + 8, h * 0.43);
  ctx.stroke();

  // ominous red particle trail
  for (let i = 0; i < 4; i++) {
    const px = cx + Math.cos(t * 0.001 + i * 1.57) * 25;
    const py = h * 0.5 + Math.sin(t * 0.0013 + i * 1.57) * 20;
    const a = (Math.sin(t * 0.003 + i) + 1) * 0.15;
    ctx.fillStyle = `rgba(180,30,10,${a})`;
    ctx.beginPath(); ctx.arc(px, py, 2, 0, Math.PI * 2); ctx.fill();
  }

  ctx.textAlign = "left"; // reset
}

function drawQuidditch(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const hover  = Math.sin(t * 0.0015) * 4;
  const lean   = Math.sin(t * 0.001) * 0.06;
  const cx     = w / 2;
  const cy     = h * 0.45 + hover;

  // sky gradient — stadium lights
  const sky = ctx.createLinearGradient(0, 0, 0, h);
  sky.addColorStop(0, "#1a1030");
  sky.addColorStop(1, "#0d0820");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, w, h);

  // stadium light beams
  for (let i = 0; i < 3; i++) {
    const bx = (i + 0.5) * (w / 3);
    const beam = ctx.createRadialGradient(bx, h, 0, bx, 0, h);
    beam.addColorStop(0, "rgba(240,200,80,0.1)");
    beam.addColorStop(1, "transparent");
    ctx.fillStyle = beam;
    ctx.fillRect(0, 0, w, h);
  }

  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(lean);

  // broom handle
  ctx.strokeStyle = "#8b5e2a";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(-w * 0.35, 12);
  ctx.lineTo(w * 0.35, 12);
  ctx.stroke();

  // broom twigs
  ctx.strokeStyle = "#6b4420";
  ctx.lineWidth = 1.5;
  for (let i = 0; i < 8; i++) {
    const tx = w * 0.22 + i * 6;
    ctx.beginPath();
    ctx.moveTo(tx, 10);
    ctx.lineTo(tx + 4, 22 + i * 1.5);
    ctx.stroke();
  }

  // player body (robes)
  ctx.fillStyle = "#c41e3a";
  ctx.beginPath();
  ctx.ellipse(0, 2, 14, 18, 0, 0, Math.PI * 2);
  ctx.fill();

  // helmet / head
  ctx.fillStyle = "#c8a07a";
  ctx.beginPath();
  ctx.ellipse(0, -18, 12, 14, 0, 0, Math.PI * 2);
  ctx.fill();

  // goggles
  ctx.strokeStyle = "#f0c040";
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.ellipse(-5, -20, 4, 3, 0, 0, Math.PI * 2); ctx.stroke();
  ctx.beginPath(); ctx.ellipse( 5, -20, 4, 3, 0, 0, Math.PI * 2); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(-1, -20); ctx.lineTo(1, -20); ctx.stroke();

  ctx.restore();

  // golden snitch — orbiting
  const sAngle = t * 0.002;
  const sx = cx + Math.cos(sAngle) * (w * 0.3);
  const sy = cy + Math.sin(sAngle * 0.7) * 20 - 30;

  // snitch glow
  const sg = ctx.createRadialGradient(sx, sy, 0, sx, sy, 14);
  sg.addColorStop(0, "rgba(240,192,64,0.4)");
  sg.addColorStop(1, "transparent");
  ctx.fillStyle = sg;
  ctx.beginPath(); ctx.arc(sx, sy, 14, 0, Math.PI * 2); ctx.fill();

  // snitch body
  ctx.fillStyle = "#f0c040";
  ctx.beginPath(); ctx.arc(sx, sy, 5, 0, Math.PI * 2); ctx.fill();

  // snitch wings
  const wingFlap = Math.sin(t * 0.015) * 0.4;
  ctx.fillStyle = "rgba(240,220,160,0.7)";
  ctx.beginPath();
  ctx.ellipse(sx - 9, sy, 8, 3 + wingFlap * 2, -wingFlap, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(sx + 9, sy, 8, 3 + wingFlap * 2, wingFlap, 0, Math.PI * 2);
  ctx.fill();
}

// ─── COMPONENT ───────────────────────────────────────────────────────────────

const DRAW_FN = {
  minister:  drawMinister,
  wanted:    drawWanted,
  quidditch: drawQuidditch,
};

export default function MagicalPortrait({ kind, caption, width = 160, height = 200 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawFn = DRAW_FN[kind];
    let raf: number;
    let start: number | null = null;

    const loop = (ts: number) => {
      if (!start) start = ts;
      const t = ts - start;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawFn(ctx, canvas.width, canvas.height, t);
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [kind]);

  return (
    <figure className="dp-portrait">
      <canvas ref={canvasRef} width={width} height={height} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
