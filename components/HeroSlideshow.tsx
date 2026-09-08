"use client";

import { useEffect, useRef, useState, type MouseEvent, type CSSProperties } from "react";
import Image from "next/image";

export type SlideImage = { src: string; alt: string };

export default function HeroSlideshow({
  slides,
  intervalMs = 6500,
}: {
  slides: SlideImage[];
  intervalMs?: number;
}) {
  const [active, setActive] = useState(0);
  const [hoverSide, setHoverSide] = useState<"left" | "right" | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = (dir: 1 | -1) => {
    setActive((i) => (i + dir + slides.length) % slides.length);
  };

  function restartAutoplay() {
    if (timerRef.current) clearInterval(timerRef.current);
    if (slides.length > 1) timerRef.current = setInterval(() => go(1), intervalMs);
  }

  useEffect(() => {
    restartAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides.length, intervalMs]);

  function handleClick(e: MouseEvent<HTMLDivElement>) {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    const isLeft = e.clientX - rect.left < rect.width / 2;
    go(isLeft ? -1 : 1);
    restartAutoplay();
  }

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    setHoverSide(e.clientX - rect.left < rect.width / 2 ? "left" : "right");
  }

  return (
    <div
      ref={wrapRef}
      data-hide-cursor
      className="absolute inset-0 overflow-hidden cursor-none"
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoverSide(null)}
    >
      {slides.map((slide, i) => (
        <div key={slide.src} className={`slide ${i === active ? "active" : ""}`} aria-hidden={i !== active}>
          <Image src={slide.src} alt={slide.alt} fill priority={i === 0} sizes="100vw" className="object-cover" />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-ink/10" />

      {/* hover arrow indicator, follows cursor side */}
      {hoverSide && (
        <div
          className="pointer-events-none absolute top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-14 h-14 rounded-full border border-gold/60 bg-ink/40 backdrop-blur-sm text-gold transition-all duration-200"
          style={{ [hoverSide === "left" ? "left" : "right"]: "2.5rem" } as CSSProperties}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
            {hoverSide === "left" ? <path d="M15 5l-7 7 7 7" /> : <path d="M9 5l7 7-7 7" />}
          </svg>
        </div>
      )}

      {/* dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.src}
            aria-label={`Show slide ${i + 1}`}
            onClick={(e) => {
              e.stopPropagation();
              setActive(i);
              restartAutoplay();
            }}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === active ? "w-6 bg-gold" : "w-1.5 bg-ivory/40 hover:bg-ivory/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}