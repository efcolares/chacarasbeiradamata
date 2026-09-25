"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const basePath = "/chacarasbeiradamata";

export function LandscapeVideo({ index, className = "" }: { index: number; className?: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const number = index + 1;
  const src = `${basePath}/videos/paisagem-${number}.mp4`;
  const poster = `${basePath}/posters/paisagem-${number}.jpg`;
  const title = `Vídeo ${number} das Chácaras Beira da Mata`;

  function showVideo() {
    setOpen(true);
    dialogRef.current?.showModal();
  }

  return <div className={`video-frame ${className}`}>
    <button type="button" className="video-trigger" onClick={showVideo} aria-label={`Ampliar ${title}`}>
      <Image src={poster} alt="" fill sizes="(max-width: 700px) 100vw, 50vw" className="image-cover video-poster" />
      <video autoPlay loop muted playsInline preload="metadata" poster={poster} aria-hidden="true" tabIndex={-1}>
        <source src={src} type="video/mp4" />
      </video>
      <span className="video-play" aria-hidden="true">▶</span>
    </button>
    <dialog ref={dialogRef} className="video-dialog" aria-label={title} onClose={() => setOpen(false)} onClick={(event) => { if (event.target === dialogRef.current) dialogRef.current?.close(); }}>
      <div className="video-dialog-inner">
        <button type="button" className="video-close" onClick={() => dialogRef.current?.close()}>Fechar ×</button>
        {open && <video src={src} poster={poster} controls autoPlay playsInline aria-label={title} />}
      </div>
    </dialog>
  </div>;
}
