import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import AlbumCard from "@/components/AlbumCard";
import { albums } from "@/lib/albums";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Frames & Films — Real Bengali Weddings",
  description:
    "Browse full wedding albums shot by Dream Images across Dhaka and Bangladesh — holud, mehndi, nikah, and reception galleries from real couples.",
  alternates: { canonical: "/frames-films" },
};

export default function FramesFilmsPage() {
  return (
    <div className="pt-32 md:pt-40 pb-20 md:pb-28 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-2xl mb-14">
          <p className="text-gold font-light text-sm mb-4 tracking-wide">Frames &amp; Films</p>
          <h1 className="font-serif text-4xl md:text-5xl text-ivory mb-5">
            Every album, one real wedding at a time
          </h1>
          <p className="text-ivory-dim font-light leading-relaxed">
            {siteConfig.name} has covered holud evenings, nikah ceremonies, and receptions across
            Bangladesh. Open an album below to see the full story from that day.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {albums.map((album, i) => (
            <Reveal key={album.slug} delay={(i % 3) * 0.08}>
              <AlbumCard album={album} priority={i < 3} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}