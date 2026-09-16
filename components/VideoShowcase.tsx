import Image from "next/image";
import Reveal from "@/components/Reveal";

export type FeaturedVideo = {
  /** The Facebook video/reel permalink to open when the card is clicked. */
  url: string;
  title: string;
  /**
<<<<<<< HEAD
   * A still image representing the video — ideally an exported thumbnail
=======
   * A still image representing the video ideally an exported thumbnail
>>>>>>> f4d8eab25006e4e2b248506d546d84685c571b7b
   * frame from the actual reel. A real wedding photo works as a placeholder
   * until you export one.
   */
  thumbnail: string;
  /** "reel" = tall 9:16 (Reels, Stories). "video" = wide 16:9. */
  aspect?: "reel" | "video";
};

// Facebook blocks embedding for some videos (usually when licensed/copyrighted
// audio is detected), and there's no code fix for that — so instead of an
// <iframe> that can silently fail, each card here is a thumbnail that opens
// the real video on Facebook in a new tab. This always works.
export const featuredVideos: FeaturedVideo[] = [
  {
    url: "https://www.facebook.com/reel/1483358815844725/",
    title: "RS Fahim & Manjia — Reel",
<<<<<<< HEAD
    thumbnail: "/rsfahim.jpg",
=======
    thumbnail: "/rsfahim.webp",
>>>>>>> f4d8eab25006e4e2b248506d546d84685c571b7b
    aspect: "reel",
  },
];

export default function VideoShowcase() {
  if (featuredVideos.length === 0) return null;

  const allReels = featuredVideos.every((v) => (v.aspect ?? "reel") === "reel");

  return (
    <section className="px-6 md:px-10 py-20 md:py-28 border-t border-ivory/10">
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-2xl mb-14">
          <p className="text-gold font-light text-sm mb-4 tracking-wide">On film</p>
          <h2 className="font-serif text-3xl md:text-4xl text-ivory">Watch a few of our wedding films</h2>
        </Reveal>

        <div className={`grid gap-6 ${allReels ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" : "sm:grid-cols-2"}`}>
          {featuredVideos.map((video, i) => {
            const aspect = video.aspect ?? "reel";
            return (
              <Reveal key={video.url} delay={i * 0.08}>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener"
                  className={`frame group block relative overflow-hidden ${aspect === "reel" ? "aspect-[9/16]" : "aspect-video"}`}
                >
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    sizes={aspect === "reel" ? "(min-width: 1024px) 25vw, 50vw" : "(min-width: 640px) 50vw, 100vw"}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-ink/25 group-hover:bg-ink/40 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="w-14 h-14 rounded-full border border-ivory/70 bg-ink/40 backdrop-blur-sm flex items-center justify-center text-ivory group-hover:border-gold group-hover:text-gold group-hover:scale-110 transition-all">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </div>
                  <div className="caption">
                    <span className="font-sans font-light text-xs text-caption block">{video.title}</span>
                    <span className="font-sans font-light text-[0.65rem] text-caption-dim">Watch on Facebook ↗</span>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> f4d8eab25006e4e2b248506d546d84685c571b7b
