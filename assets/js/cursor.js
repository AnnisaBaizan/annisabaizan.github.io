/**
 * cursor.js — Astronaut / 🚀 cursor with sparkle trail
 * Galaxy + Harry Potter theme for annisabaizan.github.io
 *
 * Default: astronaut floating in space
 * On interactive hover: rocket launching
 */

(function initCursor() {
    // Skip on touch devices
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

    /* ── SVG definitions ── */
    const ASTRONAUT_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="36" height="40" viewBox="0 0 36 40" fill="none">
  <defs>
    <filter id="glow-astro">
      <feGaussianBlur stdDeviation="1.8" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <radialGradient id="helmetGrad" cx="38%" cy="32%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#ccc8ee"/>
    </radialGradient>
    <radialGradient id="visorGrad" cx="35%" cy="30%">
      <stop offset="0%" stop-color="#ffe97f"/>
      <stop offset="70%" stop-color="#d4a800"/>
      <stop offset="100%" stop-color="#7a5e00"/>
    </radialGradient>
    <radialGradient id="suitGrad" cx="38%" cy="25%">
      <stop offset="0%" stop-color="#f0eeff"/>
      <stop offset="100%" stop-color="#b8b0d8"/>
    </radialGradient>
  </defs>
  <!-- Left arm -->
  <ellipse cx="7" cy="29" rx="3" ry="6.5" fill="url(#suitGrad)" transform="rotate(-12 7 29)" filter="url(#glow-astro)"/>
  <!-- Right arm -->
  <ellipse cx="29" cy="29" rx="3" ry="6.5" fill="url(#suitGrad)" transform="rotate(12 29 29)" filter="url(#glow-astro)"/>
  <!-- Suit body -->
  <ellipse cx="18" cy="30" rx="9.5" ry="9" fill="url(#suitGrad)" filter="url(#glow-astro)"/>
  <!-- Suit collar -->
  <ellipse cx="18" cy="22.5" rx="7.5" ry="3" fill="#cec8e8"/>
  <!-- Control panel badge on chest -->
  <rect x="13.5" y="27" width="9" height="5" rx="1.5" fill="#7b2fff" opacity="0.7"/>
  <rect x="15" y="28.5" width="2" height="2" rx="0.5" fill="#f0c040" opacity="0.8"/>
  <rect x="18.5" y="28.5" width="2" height="2" rx="0.5" fill="#00d4ff" opacity="0.8"/>
  <!-- Helmet -->
  <circle cx="18" cy="13.5" r="11.5" fill="url(#helmetGrad)" stroke="#a89fc0" stroke-width="0.5" filter="url(#glow-astro)"/>
  <!-- Visor -->
  <ellipse cx="18" cy="14.5" rx="7.5" ry="6.5" fill="url(#visorGrad)"/>
  <!-- Visor shine highlight -->
  <ellipse cx="14.5" cy="11" rx="2.5" ry="1.8" fill="#ffffff" opacity="0.45"/>
  <!-- Tiny star reflection in visor -->
  <circle cx="21" cy="17" r="0.8" fill="#ffffff" opacity="0.3"/>
</svg>`;

    const ROCKET_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" style="transform: rotate(-45deg)">
  <defs>
    <filter id="glow-rocket">
      <feGaussianBlur stdDeviation="1.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <ellipse cx="16" cy="14" rx="6" ry="11" fill="#f5f0ff" stroke="#a89fc0" stroke-width="0.5" filter="url(#glow-rocket)"/>
  <polygon points="16,2 10,12 22,12" fill="#00d4ff" opacity="0.9"/>
  <path d="M10,22 Q6,26 8,30 Q10,26 16,24 Q22,26 24,30 Q26,26 22,22 Z" fill="#c41e3a" opacity="0.85"/>
  <circle cx="16" cy="16" r="3" fill="#f0c040" opacity="0.9"/>
  <ellipse cx="16" cy="27" rx="3" ry="5" fill="#f0c040" opacity="0.5" filter="url(#glow-rocket)"/>
</svg>`;

    /* ── Inject cursor elements ── */
    const cursorEl = document.createElement('div');
    cursorEl.id = 'custom-cursor';
    cursorEl.innerHTML = ASTRONAUT_SVG;   // default: astronaut
    document.body.appendChild(cursorEl);

    const dotEl = document.createElement('div');
    dotEl.className = 'cursor-dot';
    document.body.appendChild(dotEl);

    /* ── Mouse tracking ── */
    let mouseX = -100, mouseY = -100;
    let dotX = -100, dotY = -100;
    let isHoveringInteractive = false;

    document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth dot follow
    (function animateDot() {
        dotX += (mouseX - dotX) * 0.2;
        dotY += (mouseY - dotY) * 0.2;

        cursorEl.style.left = mouseX + 'px';
        cursorEl.style.top = mouseY + 'px';
        dotEl.style.left = dotX + 'px';
        dotEl.style.top = dotY + 'px';

        requestAnimationFrame(animateDot);
    })();

    /* ── Swap on interactive elements ── */
    const INTERACTIVE = 'a, button, [role="button"], .card-clickable, input, select, textarea, label, .mp-toggle, #mp-play, #mp-volume';

    function onEnterInteractive() {
        if (isHoveringInteractive) return;
        isHoveringInteractive = true;
        cursorEl.innerHTML = ROCKET_SVG;      // hover: rocket launching
        cursorEl.style.width = '32px';
        cursorEl.style.height = '32px';
    }

    function onLeaveInteractive() {
        isHoveringInteractive = false;
        cursorEl.innerHTML = ASTRONAUT_SVG;   // back to default: astronaut
        cursorEl.style.width = '36px';
        cursorEl.style.height = '40px';
    }

    document.addEventListener('mouseover', e => {
        if (e.target.closest(INTERACTIVE)) onEnterInteractive();
    });

    document.addEventListener('mouseout', e => {
        if (e.target.closest(INTERACTIVE) && !e.relatedTarget?.closest(INTERACTIVE)) {
            onLeaveInteractive();
        }
    });

    /* ── Sparkle trail on click ── */
    const COLORS = ['#f0c040', '#ffd700', '#00d4ff', '#a855f7', '#ffffff'];

    document.addEventListener('click', e => {
        for (let i = 0; i < 6; i++) {
            const spark = document.createElement('div');
            spark.className = 'wand-sparkle';
            const size = 4 + Math.random() * 6;
            const color = COLORS[Math.floor(Math.random() * COLORS.length)];
            spark.style.cssText = `
                left: ${e.clientX + (Math.random() - 0.5) * 30}px;
                top: ${e.clientY + (Math.random() - 0.5) * 30}px;
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                box-shadow: 0 0 ${size * 2}px ${color};
                animation-delay: ${Math.random() * 0.15}s;
            `;
            document.body.appendChild(spark);
            setTimeout(() => spark.remove(), 800);
        }
    });

    /* ── Mousemove sparkle (gentle, throttled) ── */
    let lastSparkle = 0;
    document.addEventListener('mousemove', e => {
        const now = Date.now();
        if (now - lastSparkle < 120) return;
        lastSparkle = now;

        const spark = document.createElement('div');
        spark.className = 'wand-sparkle';
        const size = 2 + Math.random() * 3;
        spark.style.cssText = `
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            width: ${size}px;
            height: ${size}px;
            background: #f0c040;
            box-shadow: 0 0 ${size * 3}px #f0c040;
            animation-duration: 0.5s;
        `;
        document.body.appendChild(spark);
        setTimeout(() => spark.remove(), 600);
    });

    /* ── Hide cursor when leaving window ── */
    document.addEventListener('mouseleave', () => {
        cursorEl.style.opacity = '0';
        dotEl.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        cursorEl.style.opacity = '1';
        dotEl.style.opacity = '1';
    });

})();
