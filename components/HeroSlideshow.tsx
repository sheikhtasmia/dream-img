"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export type SlideImage = { src: string; alt: string };

export default function HeroSlideshow({
  slides,
  intervalMs = 4500,
}: {
  slides: SlideImage[];
  intervalMs?: number;
}) {
  const [active, setActive] = useState(0);
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

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((slide, i) => (
        <div key={slide.src} className={`slide ${i === active ? "active" : ""}`} aria-hidden={i !== active}>
          <Image src={slide.src} alt={slide.alt} fill priority={i === 0} sizes="100vw" className="object-cover" />
        </div>
      ))}

      {/* Always-visible nav arrows — work with tap on touch devices too,
          unlike a hover-only affordance. */}
      <button
        onClick={() => {
          go(-1);
          restartAutoplay();
        }}
        aria-label="Previous slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-14 md:h-14 rounded-full border border-ivory/50 bg-ink/30 backdrop-blur-sm flex items-center justify-center text-ivory hover:border-gold hover:text-gold hover:bg-ink/50 transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="M15 5l-7 7 7 7" />
        </svg>
      </button>
      <button
        onClick={() => {
          go(1);
          restartAutoplay();
        }}
        aria-label="Next slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-14 md:h-14 rounded-full border border-ivory/50 bg-ink/30 backdrop-blur-sm flex items-center justify-center text-ivory hover:border-gold hover:text-gold hover:bg-ink/50 transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.src}
            aria-label={`Show slide ${i + 1}`}
            onClick={() => {
              setActive(i);
              restartAutoplay();
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-7 bg-gold" : "w-1.5 bg-ivory/60 hover:bg-ivory/90"
            }`}
          />
        ))}
      </div>
    </div>
  );
}