"use client";

import { useEffect, useRef, useState } from "react";

const PLAYLIST = [
  { title: "Ambient Cosmos",  file: "background.mp3"  },
  { title: "Stellar Drift",   file: "stellar.mp3"     },
  { title: "Midnight Garden", file: "midnight.mp3"    },
  { title: "Celestial Winds", file: "celestial.mp3"   },
  { title: "Arcane Whispers", file: "arcane.mp3"      },
];

export default function MusicPlayer() {
  const audioRef  = useRef<HTMLAudioElement>(null);
  const [open,    setOpen]    = useState(false);
  const [playing, setPlaying] = useState(false);
  const [track,   setTrack]   = useState(0);
  const [shuffle, setShuffle] = useState(false);
  const [vol,     setVol]     = useState(0.45);
  const [progress, setProgress] = useState(0);

  // Keep audio volume in sync
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = vol;
  }, [vol]);

  // Update source when track changes
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.src = `/assets/music/${PLAYLIST[track].file}`;
    audioRef.current.load();
    if (playing) audioRef.current.play().catch(() => {});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [track]);

  // Progress bar
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => {
      if (audio.duration) setProgress((audio.currentTime / audio.duration) * 100);
    };
    const onEnded = () => {
      const next = shuffle
        ? Math.floor(Math.random() * PLAYLIST.length)
        : (track + 1) % PLAYLIST.length;
      setTrack(next);
    };
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnded);
    };
  }, [track, shuffle]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      if (!audio.src) audio.src = `/assets/music/${PLAYLIST[track].file}`;
      audio.play().catch(() => {});
      setPlaying(true);
    }
  };

  const prev = () => setTrack(t => (t - 1 + PLAYLIST.length) % PLAYLIST.length);
  const next = () => setTrack(t => shuffle ? Math.floor(Math.random() * PLAYLIST.length) : (t + 1) % PLAYLIST.length);
  const pickTrack = (i: number) => { setTrack(i); setPlaying(true); };

  const volIcon = vol === 0 ? "🔇" : vol < 0.4 ? "🔉" : "🔊";

  return (
    <div className="music-player">
      <div className={`mp-panel${open ? " open" : ""}`}>
        <div className="mp-track-info">
          <span className="mp-track-title">{PLAYLIST[track].title}</span>
          <span className="mp-track-num">{track + 1} / {PLAYLIST.length}</span>
        </div>

        <div className="mp-progress-wrap">
          <div className="mp-progress-bar" style={{ width: `${progress}%` }} />
        </div>

        <div className="mp-controls">
          <button className="mp-btn" onClick={prev} title="Previous">⏮</button>
          <button id="mp-play" onClick={togglePlay} title={playing ? "Pause" : "Play"}>
            {playing ? "⏸" : "▶"}
          </button>
          <button className="mp-btn" onClick={next} title="Next">⏭</button>
          <button
            className={`mp-btn${shuffle ? " mp-shuffle active" : " mp-shuffle"}`}
            onClick={() => setShuffle(s => !s)}
            title="Shuffle"
          >⇄</button>
        </div>

        <div className="mp-volume-row">
          <span className="mp-vol-icon">{volIcon}</span>
          <input
            id="mp-volume"
            type="range" min={0} max={1} step={0.05}
            value={vol}
            onChange={e => setVol(Number(e.target.value))}
            aria-label="Volume"
          />
        </div>

        <div className="mp-playlist">
          {PLAYLIST.map((song, i) => (
            <div
              key={i}
              className={`mp-playlist-item${i === track ? " active" : ""}`}
              onClick={() => pickTrack(i)}
            >
              {i === track && playing ? "▶ " : ""}{song.title}
            </div>
          ))}
        </div>
      </div>

      <button
        className={`mp-toggle${playing ? " playing" : ""}`}
        onClick={() => setOpen(v => !v)}
        aria-label="Toggle music player"
        title="Music Player"
      >
        🎵
      </button>

      <audio ref={audioRef} preload="none" />
    </div>
  );
}
