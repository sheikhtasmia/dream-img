"use client";

import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import AlbumCard from "./AlbumCard";
import type { Album } from "@/lib/albums";

export default function FramesFilmsGrid({ albums }: { albums: Album[] }) {
  const eventTypes = useMemo(() => {
    const unique = Array.from(new Set(albums.map((a) => a.event).filter(Boolean)));
    return ["All", ...unique];
  }, [albums]);

  const [active, setActive] = useState("All");

  const filtered = active === "All" ? albums : albums.filter((a) => a.event === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        {eventTypes.map((type) => (
          <button
            key={type}
            onClick={() => setActive(type)}
            className={`px-4 py-2 text-xs font-light tracking-wide border transition-colors duration-200 ${
              active === type
                ? "border-gold bg-gold text-ink"
                : "border-ivory/15 text-ivory-dim hover:border-gold/50 hover:text-ivory"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map((album, i) => (
          <Reveal key={album.slug} delay={(i % 3) * 0.08}>
            <AlbumCard album={album} priority={i < 3} />
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-ivory-dim font-light text-sm py-10 text-center">
          No albums under &ldquo;{active}&rdquo; yet — check back soon.
        </p>
      )}
    </div>
  );
}