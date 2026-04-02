/**
 * effects.js — 3D card tilt, parallax, floating runes, mobile nav
 * annisabaizan.github.io
 */

/* ══════════════════════════════════════
   MOBILE NAV
   ══════════════════════════════════════ */
function initMobileNav() {
    const hamburger = document.getElementById('nav-hamburger');
    const overlay   = document.getElementById('nav-mobile-overlay');
    if (!hamburger || !overlay) return;

    function openMenu() {
        hamburger.classList.add('open');
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        hamburger.classList.remove('open');
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', () => {
        hamburger.classList.contains('open') ? closeMenu() : openMenu();
    });

    // Close on link click
    overlay.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

    // Close on backdrop click (outside links)
    overlay.addEventListener('click', e => {
        if (e.target === overlay) closeMenu();
    });

    // Close on Escape
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeMenu();
    });
}

/* ══════════════════════════════════════
   3D CARD TILT
   ══════════════════════════════════════ */
function initCardTilt() {
    // Skip on touch devices
    if (window.matchMedia('(hover: none)').matches) return;

    const cards = document.querySelectorAll('.card, .project-card, .intro-card, .feat-card');
    const MAX_TILT = 14;
    const GLOW_MAX = 30;

    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const r = card.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width  - 0.5; // -0.5 to 0.5
            const y = (e.clientY - r.top)  / r.height - 0.5;

            const tiltX = -y * MAX_TILT;
            const tiltY =  x * MAX_TILT;

            // Parallax inner elements
            const inner = card.querySelector('.card-title, .project-title, h3');
            if (inner) {
                inner.style.transform = `translate(${x * 6}px, ${y * 6}px)`;
            }
            const icon = card.querySelector('.card-icon, .card-image, .card-icon-wrap, .project-thumb');
            if (icon) {
                icon.style.transform = `translate(${x * 10}px, ${y * 10}px) scale(1.05)`;
            }

            // Shine gradient
            const shineAlpha = (Math.sqrt(x*x + y*y) * 0.4).toFixed(2);

            card.style.transition = 'box-shadow 0.1s, border-color 0.1s';
            card.style.transform = `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.025) translateZ(8px)`;
            card.style.boxShadow = `
                0 ${GLOW_MAX * Math.abs(y)}px ${GLOW_MAX * 2}px rgba(0,0,0,0.5),
                0 0 ${GLOW_MAX}px rgba(240,192,64,${shineAlpha})
            `;

            // Dynamic edge glow based on tilt direction
            card.style.borderColor = tiltY > 0 ? 'rgba(240,192,64,0.5)' : 'rgba(0,212,255,0.4)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transition = 'transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.55s, border-color 0.35s';
            card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1) translateZ(0)';
            card.style.boxShadow = '';
            card.style.borderColor = '';

            const inner = card.querySelector('.card-title, .project-title, h3');
            if (inner) { inner.style.transform = ''; inner.style.transition = 'transform 0.4s'; }
            const icon = card.querySelector('.card-icon, .card-image, .card-icon-wrap, .project-thumb');
            if (icon)  { icon.style.transform  = ''; icon.style.transition  = 'transform 0.4s'; }
        });
    });
}

/* ══════════════════════════════════════
   PARALLAX ON SCROLL
   ══════════════════════════════════════ */
function initParallax() {
    const els = document.querySelectorAll('[data-parallax]');
    if (!els.length) return;

    function update() {
        els.forEach(el => {
            const speed = parseFloat(el.dataset.parallax) || 0.2;
            const rect  = el.getBoundingClientRect();
            const mid   = rect.top + rect.height / 2;
            const offset = (mid - window.innerHeight / 2) * speed;
            el.style.transform = `translateY(${offset}px)`;
        });
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
}

/* ══════════════════════════════════════
   FLOATING RUNES
   ══════════════════════════════════════ */
function initFloatingRunes() {
    const RUNES = ['✦', '⚡', '◈', '✧', '⟡', '☽', '✴', '◇', '⋆', '✵'];
    const COUNT = window.innerWidth < 768 ? 5 : 12;

    for (let i = 0; i < COUNT; i++) {
        const rune = document.createElement('div');
        rune.className = 'floating-rune';
        rune.textContent = RUNES[Math.floor(Math.random() * RUNES.length)];

        const size = 0.7 + Math.random() * 0.8;
        const left = Math.random() * 100;
        const delay = Math.random() * 10;
        const dur   = 10 + Math.random() * 14;

        Object.assign(rune.style, {
            left:            `${left}%`,
            fontSize:        `${size}rem`,
            color:           Math.random() > 0.5 ? 'rgba(240,192,64,0.25)' : 'rgba(0,212,255,0.18)',
            animationDelay:  `${delay}s`,
            animationDuration:`${dur}s`,
        });

        document.body.appendChild(rune);
    }
}

/* ══════════════════════════════════════
   SCROLL REVEAL (enhanced)
   ══════════════════════════════════════ */
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
}

/* ══════════════════════════════════════
   HERO SPHERE MOUSE INTERACTION
   ══════════════════════════════════════ */
function initSphereInteraction() {
    const wrap   = document.querySelector('.magic-sphere-wrap');
    const sphere = document.querySelector('.magic-sphere');
    const core   = document.querySelector('.sphere-core');
    if (!sphere || !wrap) return;

    // Hand off float + tilt to JS — disable CSS sphereFloat animation
    sphere.style.animation = 'none';

    // Inject dynamic light highlight onto the core
    const light = document.createElement('div');
    light.id = 'sphere-light';
    core.appendChild(light);

    // State
    let targetRX = 0, targetRY = 0;
    let curRX = 0,    curRY = 0;
    let nudgeX = 0,   nudgeY = 0;
    let tNudgeX = 0,  tNudgeY = 0;

    const RING_BASE_DURS = [9, 13, 17];

    // RAF loop — smooth lerp, float, nudge
    function tick(t) {
        const lerpSpeed = 0.07;
        curRX += (targetRX - curRX) * lerpSpeed;
        curRY += (targetRY - curRY) * lerpSpeed;
        nudgeX += (tNudgeX - nudgeX) * 0.05;
        nudgeY += (tNudgeY - nudgeY) * 0.05;

        const floatY = Math.sin(t / 1800) * 14;

        sphere.style.transform =
            `translateY(${floatY}px) rotateX(${curRX}deg) rotateY(${curRY}deg)`;
        wrap.style.transform =
            `translate(${nudgeX}px, ${nudgeY}px)`;

        requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);

    // Mouse tracking
    document.addEventListener('mousemove', e => {
        const rect = wrap.getBoundingClientRect();
        const cx = rect.left + rect.width  / 2;
        const cy = rect.top  + rect.height / 2;

        // Normalized offset: -1 to 1 relative to sphere size
        const dx = Math.max(-1, Math.min(1, (e.clientX - cx) / (rect.width  * 0.8)));
        const dy = Math.max(-1, Math.min(1, (e.clientY - cy) / (rect.height * 0.8)));

        targetRY =  dx * 38;
        targetRX = -dy * 28;

        // Light source moves to face the cursor
        const lx = 50 + dx * 38;
        const ly = 50 + dy * 38;
        light.style.background =
            `radial-gradient(circle at ${lx}% ${ly}%, rgba(255,255,255,0.2) 0%, transparent 65%)`;

        // Ring spin speed — cursor near sphere = rings accelerate
        const distSq = dx * dx + dy * dy;
        const speedMul = 1 + Math.max(0, 1.8 - distSq * 2.5);
        sphere.querySelectorAll('.sphere-ring').forEach((ring, i) => {
            ring.style.animationDuration = `${(RING_BASE_DURS[i] / speedMul).toFixed(2)}s`;
        });

        // Magnetic nudge: wrap drifts subtly toward cursor
        tNudgeX = dx * 12;
        tNudgeY = dy * 12;
    });

    // Reset when cursor leaves viewport
    document.addEventListener('mouseleave', () => {
        targetRX = 0;
        targetRY = 0;
        tNudgeX  = 0;
        tNudgeY  = 0;
        light.style.background = '';
        sphere.querySelectorAll('.sphere-ring').forEach((ring, i) => {
            ring.style.animationDuration = `${RING_BASE_DURS[i]}s`;
        });
    });

    // Click burst
    wrap.addEventListener('click', () => {
        // Core pulse
        core.style.transition = 'box-shadow 0.15s, transform 0.15s';
        core.style.transform = 'scale(1.18)';
        core.style.boxShadow =
            '0 0 80px rgba(240,192,64,0.95), 0 0 160px rgba(123,47,255,0.55), inset 0 0 40px rgba(240,192,64,0.5)';
        setTimeout(() => {
            core.style.transform = '';
            core.style.boxShadow = '';
        }, 320);

        // Burst sparkles radially outward from sphere center
        const rect = wrap.getBoundingClientRect();
        const ox = rect.left + rect.width  / 2;
        const oy = rect.top  + rect.height / 2;
        const GLYPHS = ['✦', '⚡', '✧', '◈', '★', '✴', '☽', '⋆'];
        const COLORS = ['#f0c040', '#00d4ff', '#a855f7', '#f0c040'];

        for (let i = 0; i < 10; i++) {
            const el = document.createElement('div');
            el.textContent = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            const color = COLORS[Math.floor(Math.random() * COLORS.length)];
            el.style.cssText = `
                position:fixed;left:${ox}px;top:${oy}px;
                color:${color};font-size:${0.7 + Math.random() * 0.9}rem;
                pointer-events:none;z-index:9999;
                filter:drop-shadow(0 0 5px ${color});
                transform:translate(-50%,-50%);
                transition:transform 0.65s cubic-bezier(.2,.8,.4,1),opacity 0.65s ease-out;
            `;
            document.body.appendChild(el);
            const angle  = (i / 10) * Math.PI * 2 + Math.random() * 0.3;
            const radius = 70 + Math.random() * 70;
            requestAnimationFrame(() => {
                el.style.transform =
                    `translate(calc(-50% + ${Math.cos(angle)*radius}px), calc(-50% + ${Math.sin(angle)*radius}px)) scale(0)`;
                el.style.opacity = '0';
            });
            setTimeout(() => el.remove(), 700);
        }
    });
}

/* ══════════════════════════════════════
   3D CANVAS ORBITAL SYSTEM
   ══════════════════════════════════════ */
function initOrbit3D() {
    const orbital    = document.querySelector('.orbital-system');
    const heroVisual = document.querySelector('.hero-visual');
    if (!orbital || !heroVisual) return;

    // Hide CSS rings — canvas takes over
    orbital.style.opacity = '0';

    const canvas = document.createElement('canvas');
    canvas.id = 'orbit-canvas';
    canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:2;';
    heroVisual.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    /* Orbit definitions — r is ratio of BASE (half shortest side)
       inc  = inclination angle from horizontal (deg)
       axisY = extra rotation around Y for a unique plane (deg)    */
    const ORBITS = [
        { r:0.42, inc:72, axisY:  0, color:'#f0c040', gr:240,gg:192,gb: 64, period:22000, pSize:7,  moon:0, dir: 1 },
        { r:0.54, inc:52, axisY: 22, color:'#00d4ff', gr:  0,gg:212,gb:255, period:36000, pSize:6,  moon:3, dir:-1 },
        { r:0.67, inc:62, axisY:-18, color:'#a855f7', gr:168,gg: 85,gb:247, period:52000, pSize:10, moon:0, dir: 1 },
    ];

    const angles = ORBITS.map(() => Math.random() * Math.PI * 2);
    let lastTs = 0, W = 0, H = 0, CX = 0, CY = 0, BASE = 0;

    function resize() {
        W = canvas.width  = heroVisual.offsetWidth  || 500;
        H = canvas.height = heroVisual.offsetHeight || 500;
        CX = W / 2; CY = H / 2;
        BASE = Math.min(W, H) * 0.5;
    }
    resize();
    window.addEventListener('resize', resize);

    function toRad(d) { return d * Math.PI / 180; }

    /* Get a planet's 3-D position in camera space for angle θ */
    function pos3D(orb, θ) {
        const r   = orb.r * BASE;
        const inc = toRad(orb.inc);
        const aY  = toRad(orb.axisY);
        const x0  = r * Math.cos(θ);
        const z0  = r * Math.sin(θ);
        // Tilt around X (inclination)
        const y1  =  z0 * Math.sin(inc);
        const z1  =  z0 * Math.cos(inc);
        // Rotate around Y (unique plane)
        const x2  =  x0 * Math.cos(aY) + z1 * Math.sin(aY);
        const z2  = -x0 * Math.sin(aY) + z1 * Math.cos(aY);
        return { x: x2, y: y1, z: z2 };
    }

    /* Perspective projection */
    function proj(x, y, z) {
        const fov = BASE * 2.8;
        const s   = fov / (fov + z * 0.35);
        return { sx: CX + x * s, sy: CY + y * s, s };
    }

    /* Draw the elliptical orbit ring */
    function drawRing(orb) {
        const STEPS = 180;
        ctx.beginPath();
        for (let i = 0; i <= STEPS; i++) {
            const p = pos3D(orb, (i / STEPS) * Math.PI * 2);
            const { sx, sy } = proj(p.x, p.y, p.z);
            i === 0 ? ctx.moveTo(sx, sy) : ctx.lineTo(sx, sy);
        }
        ctx.closePath();
        ctx.strokeStyle = orb.color;
        ctx.globalAlpha = 0.2;
        ctx.lineWidth   = 0.8;
        ctx.stroke();
        ctx.globalAlpha = 1;
    }

    /* Draw a 3-D-shaded sphere at screen position */
    function drawPlanet(sx, sy, r, orb) {
        const g = ctx.createRadialGradient(sx - r*0.35, sy - r*0.32, r*0.05, sx, sy, r);
        g.addColorStop(0,   '#ffffff');
        g.addColorStop(0.3, orb.color);
        g.addColorStop(1,   'rgba(0,0,0,0.85)');
        ctx.save();
        ctx.shadowColor = `rgba(${orb.gr},${orb.gg},${orb.gb},0.85)`;
        ctx.shadowBlur  = r * 3.5;
        ctx.beginPath();
        ctx.arc(sx, sy, r, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
        ctx.restore();
    }

    function tick(ts) {
        const dt = lastTs ? ts - lastTs : 16;
        lastTs = ts;
        ctx.clearRect(0, 0, W, H);

        // Advance orbit angles
        ORBITS.forEach((orb, i) => {
            angles[i] += orb.dir * (Math.PI * 2) * (dt / orb.period);
        });

        // Draw rings (always behind planets)
        ORBITS.forEach(drawRing);

        // Compute planet screen positions
        const sphereR = BASE * 0.30; // sphere visual radius for occlusion
        const items = ORBITS.map((orb, i) => {
            const p = pos3D(orb, angles[i]);
            const { sx, sy, s } = proj(p.x, p.y, p.z);
            return { orb, p, sx, sy, s, r: Math.max(3, orb.pSize * s) };
        });

        // Back-to-front z-sort (painter's algorithm)
        items.sort((a, b) => a.p.z - b.p.z);

        items.forEach(({ orb, p, sx, sy, s, r }) => {
            // Occlude when behind sphere center
            if (p.z < 0) {
                const dx = sx - CX, dy = sy - CY;
                if (dx*dx + dy*dy < sphereR * sphereR) return;
            }
            // Smooth fade as planet dips behind sphere
            const alpha = p.z < -sphereR * 0.15
                ? Math.max(0, 1 + p.z / (sphereR * 0.5))
                : 1;
            if (alpha <= 0) return;

            ctx.globalAlpha = alpha;
            drawPlanet(sx, sy, r, orb);

            // Trailing moon for orbit 2 (cyan)
            if (orb.moon > 0) {
                const ma = angles[1] * 5;
                drawPlanet(sx + Math.cos(ma) * r * 2.2, sy + Math.sin(ma) * r * 0.9,
                           orb.moon * s, orb);
            }
            ctx.globalAlpha = 1;
        });

        requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
}

/* ══════════════════════════════════════
   ANIMATED COUNTERS
   ══════════════════════════════════════ */
function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el  = entry.target;
            const end = parseInt(el.dataset.count, 10);
            const dur = 1600;
            const step = 16;
            const inc = end / (dur / step);
            let cur = 0;
            const timer = setInterval(() => {
                cur = Math.min(cur + inc, end);
                el.textContent = (el.dataset.suffix ? Math.floor(cur) + el.dataset.suffix : Math.floor(cur));
                if (cur >= end) clearInterval(timer);
            }, step);
            observer.unobserve(el);
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
}

/* ══════════════════════════════════════
   INIT ALL
   ══════════════════════════════════════ */
(function init() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', run);
    } else {
        run();
    }

    function run() {
        initMobileNav();
        initCardTilt();
        initParallax();
        initFloatingRunes();
        initScrollReveal();
        initSphereInteraction();
        initCounters();
        initOrbit3D();
    }
})();
