"use client";

import { useEffect, useRef } from "react";

export default function StarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = () => window.innerWidth < 768;
    let W: number, H: number;
    interface Star { x:number; y:number; r:number; color:string; alpha:number; twinklePhase:number; twinkleSpeed:number; depth:number; }
    interface ShootingStar { x:number; y:number; vx:number; vy:number; life:number; decay:number; trail:{x:number;y:number;life:number}[]; color:string; len:number; }
    let layers: Star[][] = [];
    const shootingStars: ShootingStar[] = [];
    let nebulaPulse = 0;
    let animId: number;
    let scrollY = 0;

    const LAYER_CONFIGS = [
      { count: 130, radius: [0.2, 0.8],  speed: 0.003, colors: ["#ffffff","#f5f0ff","#a89fc0"], alpha: [0.15, 0.55] },
      { count: 80,  radius: [0.5, 1.5],  speed: 0.006, colors: ["#ffffff","#f0c040","#a89fc0"], alpha: [0.3,  0.75] },
      { count: 40,  radius: [1.0, 2.5],  speed: 0.012, colors: ["#f0c040","#00d4ff","#ffffff"], alpha: [0.5,  1.0]  },
    ];

    const rand = (a: number, b: number) => a + Math.random() * (b - a);
    const pick = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

    function resize() {
      W = canvas!.width  = window.innerWidth;
      H = canvas!.height = window.innerHeight;
    }

    function createLayer(cfg: typeof LAYER_CONFIGS[0]): Star[] {
      const count = isMobile() ? Math.floor(cfg.count * 0.5) : cfg.count;
      return Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: rand(cfg.radius[0], cfg.radius[1]),
        color: pick(cfg.colors),
        alpha: rand(cfg.alpha[0], cfg.alpha[1]),
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: rand(cfg.speed, cfg.speed * 3),
        depth: 0.3 + Math.random() * 0.7,
      }));
    }

    function initLayers() {
      layers = LAYER_CONFIGS.map(createLayer);
    }

    function spawnShootingStar() {
      const angle = Math.PI / 5 + (Math.random() - 0.5) * 0.5;
      const speed = 8 + Math.random() * 10;
      shootingStars.push({
        x: Math.random() * W * 0.8,
        y: Math.random() * H * 0.35,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1.0,
        decay: 0.016 + Math.random() * 0.014,
        trail: [] as {x:number;y:number;life:number}[],
        color: Math.random() > 0.5 ? "#f0c040" : "#ffffff",
        len: 0.6 + Math.random() * 0.4,
      });
    }

    let shootTimeout: ReturnType<typeof setTimeout>;
    function scheduleShootingStar() {
      spawnShootingStar();
      shootTimeout = setTimeout(scheduleShootingStar, 3500 + Math.random() * 6000);
    }

    function drawNebula() {
      nebulaPulse += 0.004;
      const p = (Math.sin(nebulaPulse) + 1) / 2;

      const g1 = ctx!.createRadialGradient(W * 0.18, H * 0.35, 0, W * 0.18, H * 0.35, W * 0.32);
      g1.addColorStop(0, `rgba(123,47,255,${0.045 + p * 0.025})`);
      g1.addColorStop(1, "transparent");
      ctx!.fillStyle = g1; ctx!.fillRect(0, 0, W, H);

      const g2 = ctx!.createRadialGradient(W * 0.82, H * 0.2, 0, W * 0.82, H * 0.2, W * 0.28);
      g2.addColorStop(0, `rgba(0,212,255,${0.03 + p * 0.018})`);
      g2.addColorStop(1, "transparent");
      ctx!.fillStyle = g2; ctx!.fillRect(0, 0, W, H);

      const g3 = ctx!.createRadialGradient(W * 0.5, H * 0.88, 0, W * 0.5, H * 0.88, W * 0.25);
      g3.addColorStop(0, `rgba(196,30,58,${0.025 + p * 0.01})`);
      g3.addColorStop(1, "transparent");
      ctx!.fillStyle = g3; ctx!.fillRect(0, 0, W, H);
    }

    function drawStars(sy: number) {
      layers.forEach((layer: Star[], li: number) => {
        layer.forEach((s: Star) => {
          s.twinklePhase += s.twinkleSpeed;
          const tAlpha = s.alpha * (0.6 + 0.4 * Math.sin(s.twinklePhase));
          const py = (sy * (li + 1) * 0.015) % H;
          let dy = s.y - py;
          if (dy < 0) dy += H;
          if (dy > H) dy -= H;

          ctx!.beginPath();
          ctx!.arc(s.x, dy, s.r, 0, Math.PI * 2);
          ctx!.fillStyle = s.color;
          ctx!.globalAlpha = tAlpha;
          ctx!.fill();

          if (s.r > 1.3) {
            const grd = ctx!.createRadialGradient(s.x, dy, 0, s.x, dy, s.r * 3.5);
            grd.addColorStop(0, s.color.startsWith("#f0") ? "rgba(240,192,64,0.3)" : "rgba(255,255,255,0.1)");
            grd.addColorStop(1, "transparent");
            ctx!.fillStyle = grd;
            ctx!.globalAlpha = tAlpha * 0.5;
            ctx!.beginPath();
            ctx!.arc(s.x, dy, s.r * 3.5, 0, Math.PI * 2);
            ctx!.fill();
          }
        });
      });
      ctx!.globalAlpha = 1;
    }

    function drawShootingStars() {
      shootingStars.forEach((ss: ShootingStar, i: number) => {
        ss.trail.push({ x: ss.x, y: ss.y, life: ss.life });
        ss.x += ss.vx; ss.y += ss.vy; ss.life -= ss.decay;

        const maxLen = Math.floor(ss.trail.length * ss.len);
        ss.trail.slice(-maxLen).forEach((pt: {x:number;y:number;life:number}, j: number, arr: {x:number;y:number;life:number}[]) => {
          const frac = (j + 1) / arr.length;
          const alpha = frac * frac * ss.life * 0.85;
          const r = frac * 2.2;
          ctx!.beginPath();
          ctx!.arc(pt.x, pt.y, Math.max(0.1, r), 0, Math.PI * 2);
          ctx!.fillStyle = ss.color === "#f0c040"
            ? `rgba(240,210,80,${alpha})`
            : `rgba(220,220,255,${alpha})`;
          ctx!.fill();
        });

        if (ss.trail.length > 50) ss.trail.shift();
        if (ss.life <= 0) shootingStars.splice(i, 1);
      });
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H);
      drawNebula();
      drawStars(scrollY);
      drawShootingStars();
      animId = requestAnimationFrame(draw);
    }

    const onScroll = () => { scrollY = window.pageYOffset; };
    window.addEventListener("scroll", onScroll, { passive: true });

    const onResize = () => { resize(); initLayers(); };
    window.addEventListener("resize", onResize);

    resize();
    initLayers();
    draw();
    const firstShot = setTimeout(scheduleShootingStar, 1500);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(firstShot);
      clearTimeout(shootTimeout);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="star-canvas"
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
    />
  );
}
