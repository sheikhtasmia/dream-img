"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export type SlideImage = { src: string; alt: string };

export default function HeroSlideshow({
  slides,
  intervalMs = 3500, // স্লাইড স্পিড ৩.৫ সেকেন্ড করা হয়েছে
}: {
  slides: SlideImage[];
  intervalMs?: number;
}) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = (dir: 1 | -1) => {
    setDirection(dir === 1 ? "next" : "prev");
    setActive((i) => (i + dir + slides.length) % slides.length);
  };

  function restartAutoplay() {
    if (timerRef.current) clearInterval(timerRef.current);
    if (slides.length > 1) {
      timerRef.current = setInterval(() => go(1), intervalMs);
    }
  }

  useEffect(() => {
    restartAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides.length, intervalMs]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none">
      {/* Slides Container with Smooth Horizontal Motion */}
      {slides.map((slide, i) => {
        const isActive = i === active;
        return (
          <div
            key={slide.src}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
              isActive
                ? "opacity-100 translate-x-0 z-10 scale-100"
                : direction === "next"
                ? "opacity-0 translate-x-full z-0 scale-105"
                : "opacity-0 -translate-x-full z-0 scale-105"
            }`}
            aria-hidden={!isActive}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover w-full h-full transform transition-transform duration-[4000ms] ease-out scale-105"
            />
          </div>
        );
      })}

      {/* Dark Gradient Overlays for Cinematic Touch */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 z-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30 z-20 pointer-events-none" />

      {/* Left Arrow Button - Position Fixed & Safely Visible */}
      <button
        type="button"
        aria-label="Previous Slide"
        onClick={() => {
          go(-1);
          restartAutoplay();
        }}
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg"
      >
        <svg
          className="w-5 h-5 md:w-7 md:h-7 -translate-x-0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow Button */}
      <button
        type="button"
        aria-label="Next Slide"
        onClick={() => {
          go(1);
          restartAutoplay();
        }}
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg"
      >
        <svg
          className="w-5 h-5 md:w-7 md:h-7 translate-x-0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Bottom Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 md:gap-3 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            onClick={() => {
              setDirection(i > active ? "next" : "prev");
              setActive(i);
              restartAutoplay();
            }}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === active
                ? "w-8 bg-amber-400"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}