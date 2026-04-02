/**
 * music-player.js v2 — Playlist music player
 * annisabaizan.github.io
 *
 * ── HOW TO ADD SONGS ──
 * Place MP3 files in /assets/music/ then add them to the PLAYLIST array below.
 * Example: { title: 'My Song', file: 'my-song.mp3' }
 */

(function initMusicPlayer() {

    /* ════════════════════════════════
       PLAYLIST — edit this to add songs
       ════════════════════════════════ */
    const PLAYLIST = [
        { title: 'Ambient Cosmos',    file: 'background.mp3'  },
        { title: 'Stellar Drift',     file: 'stellar.mp3'     },
        { title: 'Midnight Garden',   file: 'midnight.mp3'    },
        { title: 'Celestial Winds',   file: 'celestial.mp3'   },
        { title: 'Arcane Whispers',   file: 'arcane.mp3'      },
    ];

    /* ── Resolve base path based on page depth ── */
    function getBase() {
        const parts = window.location.pathname
            .split('/').filter(p => p && !p.endsWith('.html'));
        const depth = parts.length;
        return depth > 0 ? '../'.repeat(depth) : '';
    }

    const BASE = getBase();

    /* ── Inject HTML ── */
    const playerHTML = `
<div class="music-player" id="music-player" role="region" aria-label="Music Player">

    <div class="mp-panel" id="mp-panel">
        <!-- Track info -->
        <div class="mp-track-info">
            <span class="mp-track-title" id="mp-track-title">Select a track</span>
            <span class="mp-track-num" id="mp-track-num">— / —</span>
        </div>

        <!-- Progress -->
        <div class="mp-progress-wrap" id="mp-progress-wrap">
            <div class="mp-progress-bar" id="mp-progress-bar"></div>
        </div>

        <!-- Controls -->
        <div class="mp-controls">
            <button class="mp-btn" id="mp-prev" title="Previous" aria-label="Previous">⏮</button>
            <button id="mp-play" aria-label="Play / Pause" title="Play">▶</button>
            <button class="mp-btn" id="mp-next" title="Next" aria-label="Next">⏭</button>
            <button class="mp-btn" id="mp-shuffle" title="Shuffle" aria-label="Shuffle">⇄</button>
        </div>

        <!-- Volume -->
        <div class="mp-volume-row">
            <span class="mp-vol-icon" id="mp-vol-icon">🔊</span>
            <input id="mp-volume" type="range" min="0" max="1" step="0.05" value="0.45" aria-label="Volume">
        </div>

        <!-- Playlist -->
        <div class="mp-playlist" id="mp-playlist"></div>
    </div>

    <button class="mp-toggle" id="mp-toggle" aria-label="Toggle music player" title="Music Player">🎵</button>
    <audio id="mp-audio" preload="none"></audio>
</div>`;

    document.body.insertAdjacentHTML('beforeend', playerHTML);

    /* ── Elements ── */
    const audio     = document.getElementById('mp-audio');
    const panel     = document.getElementById('mp-panel');
    const toggle    = document.getElementById('mp-toggle');
    const playBtn   = document.getElementById('mp-play');
    const prevBtn   = document.getElementById('mp-prev');
    const nextBtn   = document.getElementById('mp-next');
    const shuffleBtn= document.getElementById('mp-shuffle');
    const volSlider = document.getElementById('mp-volume');
    const volIcon   = document.getElementById('mp-vol-icon');
    const titleEl   = document.getElementById('mp-track-title');
    const numEl     = document.getElementById('mp-track-num');
    const progressBar = document.getElementById('mp-progress-bar');
    const progressWrap= document.getElementById('mp-progress-wrap');
    const playlistEl  = document.getElementById('mp-playlist');

    /* ── State ── */
    let currentIdx = 0;
    let playing    = false;
    let shuffled   = false;
    let shuffleOrder = [];

    audio.volume = 0.45;

    /* ── Build playlist UI ── */
    function buildPlaylistUI() {
        playlistEl.innerHTML = '';
        PLAYLIST.forEach((track, i) => {
            const item = document.createElement('div');
            item.className = 'mp-playlist-item';
            item.textContent = track.title;
            item.dataset.idx = i;
            item.addEventListener('click', () => {
                loadTrack(i);
                resumePlay();
            });
            playlistEl.appendChild(item);
        });
    }

    /* ── Load track ── */
    function loadTrack(idx) {
        currentIdx = ((idx % PLAYLIST.length) + PLAYLIST.length) % PLAYLIST.length;
        const track = PLAYLIST[currentIdx];
        audio.src = `${BASE}assets/music/${track.file}`;
        titleEl.textContent = track.title;
        numEl.textContent   = `${currentIdx + 1} / ${PLAYLIST.length}`;
        progressBar.style.width = '0%';

        // Update playlist highlight
        playlistEl.querySelectorAll('.mp-playlist-item').forEach((el, i) => {
            el.classList.toggle('active', i === currentIdx);
        });
        // Scroll active item into view
        const active = playlistEl.querySelector('.active');
        if (active) active.scrollIntoView({ block: 'nearest' });
    }

    /* ── Play / Pause ── */
    function resumePlay() {
        audio.play().then(() => {
            playing = true;
            playBtn.textContent = '⏸';
            playBtn.title = 'Pause';
            toggle.classList.add('playing');
        }).catch(() => {
            // Autoplay blocked — user must interact first
        });
    }

    function pausePlay() {
        audio.pause();
        playing = false;
        playBtn.textContent = '▶';
        playBtn.title = 'Play';
        toggle.classList.remove('playing');
    }

    /* ── Next / Prev ── */
    function getNextIdx() {
        if (shuffled) {
            if (!shuffleOrder.length) {
                shuffleOrder = [...Array(PLAYLIST.length).keys()].filter(i => i !== currentIdx);
                // Fisher-Yates
                for (let i = shuffleOrder.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [shuffleOrder[i], shuffleOrder[j]] = [shuffleOrder[j], shuffleOrder[i]];
                }
            }
            return shuffleOrder.shift();
        }
        return (currentIdx + 1) % PLAYLIST.length;
    }

    function getPrevIdx() {
        return ((currentIdx - 1) + PLAYLIST.length) % PLAYLIST.length;
    }

    /* ── Events ── */
    toggle.addEventListener('click', () => {
        panel.classList.toggle('open');
    });

    playBtn.addEventListener('click', () => {
        if (!audio.src || audio.src === window.location.href) {
            loadTrack(0);
        }
        playing ? pausePlay() : resumePlay();
    });

    prevBtn.addEventListener('click', () => {
        // Restart if past 3s, else go to previous
        if (audio.currentTime > 3) {
            audio.currentTime = 0;
        } else {
            loadTrack(getPrevIdx());
        }
        if (playing) resumePlay();
    });

    nextBtn.addEventListener('click', () => {
        loadTrack(getNextIdx());
        if (playing) resumePlay();
    });

    shuffleBtn.addEventListener('click', () => {
        shuffled = !shuffled;
        shuffleOrder = [];
        shuffleBtn.style.color = shuffled ? '#f0c040' : '';
        shuffleBtn.style.textShadow = shuffled ? '0 0 8px rgba(240,192,64,0.6)' : '';
    });

    audio.addEventListener('ended', () => {
        loadTrack(getNextIdx());
        resumePlay();
    });

    /* ── Progress ── */
    audio.addEventListener('timeupdate', () => {
        if (!audio.duration) return;
        const pct = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${pct}%`;
    });

    progressWrap.addEventListener('click', e => {
        const r = progressWrap.getBoundingClientRect();
        const pct = (e.clientX - r.left) / r.width;
        if (audio.duration) audio.currentTime = pct * audio.duration;
    });

    /* ── Volume ── */
    volSlider.addEventListener('input', () => {
        const v = parseFloat(volSlider.value);
        audio.volume = v;
        volIcon.textContent = v === 0 ? '🔇' : v < 0.4 ? '🔉' : '🔊';
    });

    /* ── Close panel on outside click ── */
    document.addEventListener('click', e => {
        const player = document.getElementById('music-player');
        if (player && !player.contains(e.target)) {
            panel.classList.remove('open');
        }
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') panel.classList.remove('open');
    });

    /* ── Init ── */
    buildPlaylistUI();
    loadTrack(0); // Pre-load first track info (but don't play)

})();
