/**
 * stars.js v2 — 3D layered star field with nebula & comets
 * annisabaizan.github.io
 */
(function initStars() {
    const canvas = document.getElementById('star-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const isMobile = () => window.innerWidth < 768;
    let W, H;
    let layers = [];
    let shootingStars = [];
    let nebulaPulse = 0;

    /* ── Resize ── */
    function resize() {
        W = canvas.width  = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }

    /* ── Star layers (3 depths: far, mid, near) ── */
    const LAYER_CONFIGS = [
        { count: 130, radius: [0.2, 0.8],  speed: 0.003, colors: ['#ffffff','#f5f0ff','#a89fc0'], alpha: [0.15, 0.55] },
        { count: 80,  radius: [0.5, 1.5],  speed: 0.006, colors: ['#ffffff','#f0c040','#a89fc0'], alpha: [0.3,  0.75] },
        { count: 40,  radius: [1.0, 2.5],  speed: 0.012, colors: ['#f0c040','#00d4ff','#ffffff'], alpha: [0.5,  1.0]  }
    ];

    function randBetween(a, b) { return a + Math.random() * (b - a); }

    function randomColor(colors) { return colors[Math.floor(Math.random() * colors.length)]; }

    function createLayer(cfg) {
        const count = isMobile() ? Math.floor(cfg.count * 0.5) : cfg.count;
        return Array.from({ length: count }, () => ({
            x: Math.random() * W,
            y: Math.random() * H,
            r: randBetween(cfg.radius[0], cfg.radius[1]),
            color: randomColor(cfg.colors),
            alpha: randBetween(cfg.alpha[0], cfg.alpha[1]),
            twinklePhase: Math.random() * Math.PI * 2,
            twinkleSpeed: randBetween(cfg.speed, cfg.speed * 3),
            // for parallax on scroll
            depth: 0.3 + Math.random() * 0.7
        }));
    }

    function initLayers() {
        layers = LAYER_CONFIGS.map(createLayer);
    }

    /* ── Shooting star / comet ── */
    function spawnShootingStar() {
        const angle = Math.PI / 5 + (Math.random() - 0.5) * 0.5;
        const speed = 8 + Math.random() * 10;
        const startX = Math.random() * W * 0.8;
        const startY = Math.random() * H * 0.35;
        shootingStars.push({
            x: startX, y: startY,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            life: 1.0,
            decay: 0.016 + Math.random() * 0.014,
            trail: [],
            color: Math.random() > 0.5 ? '#f0c040' : '#ffffff',
            len: 0.6 + Math.random() * 0.4
        });
    }

    function scheduleShootingStar() {
        spawnShootingStar();
        setTimeout(scheduleShootingStar, 3500 + Math.random() * 6000);
    }

    /* ── Nebula circles ── */
    function drawNebula() {
        nebulaPulse += 0.004;
        const p = (Math.sin(nebulaPulse) + 1) / 2;

        // Purple nebula blob top-left
        const g1 = ctx.createRadialGradient(W * 0.18, H * 0.35, 0, W * 0.18, H * 0.35, W * 0.32);
        g1.addColorStop(0, `rgba(123,47,255,${0.045 + p * 0.025})`);
        g1.addColorStop(1, 'transparent');
        ctx.fillStyle = g1;
        ctx.fillRect(0, 0, W, H);

        // Cyan nebula blob right
        const g2 = ctx.createRadialGradient(W * 0.82, H * 0.2, 0, W * 0.82, H * 0.2, W * 0.28);
        g2.addColorStop(0, `rgba(0,212,255,${0.03 + p * 0.018})`);
        g2.addColorStop(1, 'transparent');
        ctx.fillStyle = g2;
        ctx.fillRect(0, 0, W, H);

        // Crimson hint bottom
        const g3 = ctx.createRadialGradient(W * 0.5, H * 0.88, 0, W * 0.5, H * 0.88, W * 0.25);
        g3.addColorStop(0, `rgba(196,30,58,${0.025 + p * 0.01})`);
        g3.addColorStop(1, 'transparent');
        ctx.fillStyle = g3;
        ctx.fillRect(0, 0, W, H);
    }

    /* ── Draw stars ── */
    function drawStars(scrollY) {
        layers.forEach((layer, li) => {
            layer.forEach(s => {
                s.twinklePhase += s.twinkleSpeed;
                const tAlpha = s.alpha * (0.6 + 0.4 * Math.sin(s.twinklePhase));

                // Subtle parallax offset
                const py = (scrollY * (li + 1) * 0.015) % H;
                let dy = s.y - py;
                if (dy < 0) dy += H;
                if (dy > H) dy -= H;

                ctx.beginPath();
                ctx.arc(s.x, dy, s.r, 0, Math.PI * 2);
                ctx.fillStyle = s.color;
                ctx.globalAlpha = tAlpha;
                ctx.fill();

                // Glow for larger stars
                if (s.r > 1.3) {
                    const grd = ctx.createRadialGradient(s.x, dy, 0, s.x, dy, s.r * 3.5);
                    grd.addColorStop(0, s.color.startsWith('#f0') ? 'rgba(240,192,64,0.3)' : 'rgba(255,255,255,0.1)');
                    grd.addColorStop(1, 'transparent');
                    ctx.fillStyle = grd;
                    ctx.globalAlpha = tAlpha * 0.5;
                    ctx.beginPath();
                    ctx.arc(s.x, dy, s.r * 3.5, 0, Math.PI * 2);
                    ctx.fill();
                }
            });
        });
        ctx.globalAlpha = 1;
    }

    /* ── Draw shooting stars ── */
    function drawShootingStars() {
        shootingStars.forEach((ss, i) => {
            ss.trail.push({ x: ss.x, y: ss.y, life: ss.life });
            ss.x += ss.vx;
            ss.y += ss.vy;
            ss.life -= ss.decay;

            // Trail
            const maxLen = Math.floor(ss.trail.length * ss.len);
            ss.trail.slice(-maxLen).forEach((pt, j, arr) => {
                const frac = (j + 1) / arr.length;
                const alpha = frac * frac * ss.life * 0.85;
                const r = frac * 2.2;
                ctx.beginPath();
                ctx.arc(pt.x, pt.y, Math.max(0.1, r), 0, Math.PI * 2);
                ctx.fillStyle = ss.color === '#f0c040' ? `rgba(240,210,80,${alpha})` : `rgba(220,220,255,${alpha})`;
                ctx.fill();
            });

            if (ss.trail.length > 50) ss.trail.shift();
            if (ss.life <= 0) shootingStars.splice(i, 1);
        });
    }

    /* ── Animation loop ── */
    let scrollY = 0;
    window.addEventListener('scroll', () => { scrollY = window.pageYOffset; }, { passive: true });

    function draw() {
        ctx.clearRect(0, 0, W, H);
        drawNebula();
        drawStars(scrollY);
        drawShootingStars();
        requestAnimationFrame(draw);
    }

    /* ── Init ── */
    resize();
    initLayers();
    draw();
    setTimeout(scheduleShootingStar, 1500);

    window.addEventListener('resize', () => {
        resize();
        initLayers();
    });

})();
