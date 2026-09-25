"use client";

import { useEffect, useRef, useState } from "react";
import { Music2, Pause, Play, Volume2, VolumeX } from "lucide-react";

const tracks = [
  { name: "Brisa e pássaros", src: "/chacarasbeiradamata/audio/brisa-e-passaros.mp3" },
  { name: "Riacho sereno", src: "/chacarasbeiradamata/audio/riacho-sereno.mp3" },
  { name: "Noite na mata", src: "/chacarasbeiradamata/audio/noite-na-mata.mp3" },
];

export function AmbientSounds() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const resumeAfterVideo = useRef(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [track, setTrack] = useState(0);

  function play() {
    const audio = audioRef.current;
    if (!audio) return;
    void audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }

  function pause() {
    audioRef.current?.pause();
    setPlaying(false);
  }

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.22;
    // Alguns navegadores permitem início automático; os demais exigem um clique.
    void audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));

    const videoOpen = () => {
      resumeAfterVideo.current = !audio.paused;
      audio.pause();
      setPlaying(false);
    };
    const videoClose = () => {
      if (resumeAfterVideo.current) {
        void audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
      }
      resumeAfterVideo.current = false;
    };
    window.addEventListener("beira-video-open", videoOpen);
    window.addEventListener("beira-video-close", videoClose);
    return () => {
      audio.pause();
      window.removeEventListener("beira-video-open", videoOpen);
      window.removeEventListener("beira-video-close", videoClose);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const outside = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setMenuOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [menuOpen]);

  function selectTrack(index: number) {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = tracks[index].src;
    audio.load();
    setTrack(index);
    play();
  }

  return <div className="ambient-control" ref={wrapperRef}>
    <audio ref={audioRef} src={tracks[0].src} loop preload="none" aria-label="Sons ambientes da natureza" onPause={() => setPlaying(false)} onPlay={() => setPlaying(true)} />
    <button className="ambient-toggle" type="button" aria-label="Abrir playlist de sons da natureza" aria-expanded={menuOpen} aria-controls="ambient-playlist" onClick={() => { setMenuOpen(!menuOpen); if (!playing) play(); }}>
      {playing ? <Volume2 size={15} /> : <VolumeX size={15} />}<span>Sons</span>
    </button>
    {menuOpen && <div className="ambient-menu" id="ambient-playlist" role="group" aria-label="Playlist de sons da natureza">
      <div className="ambient-title"><Music2 size={16} /> Sons da natureza</div>
      <p>Escolha um ambiente para acompanhar sua visita.</p>
      <div className="ambient-list">{tracks.map((item, index) => <button type="button" key={item.src} aria-current={track === index ? "true" : undefined} onClick={() => selectTrack(index)}>{item.name}{track === index && playing && <span aria-hidden="true">♪</span>}</button>)}</div>
      <button className="ambient-playback" type="button" onClick={playing ? pause : play}>{playing ? <Pause size={15} /> : <Play size={15} />}{playing ? "Pausar som" : "Tocar som"}</button>
    </div>}
  </div>;
}
