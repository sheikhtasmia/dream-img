import Reveal from "@/components/Reveal";

export type FeaturedVideo = {
  /** The actual Facebook video/reel permalink, e.g. https://www.facebook.com/reel/1483358815844725/ */
  url: string;
  title: string;
  /** "reel" = tall 9:16 (Reels, Stories). "video" = wide 16:9 (regular uploaded videos). */
  aspect?: "reel" | "video";
};

// Paste real Facebook video/reel links here — the permalink URL itself,
// not an <iframe> tag. Example:
// { url: "https://www.facebook.com/reel/1483358815844725/", title: "RS Fahim & Manjia — Reel", aspect: "reel" }
export const featuredVideos: FeaturedVideo[] = [
  { url: "https://www.facebook.com/reel/1483358815844725/", title: "RS Fahim & Manjia", aspect: "reel" },
  
];

function fbEmbedSrc(url: string, aspect: "reel" | "video") {
  const width = aspect === "reel" ? 480 : 800;
  const height = aspect === "reel" ? Math.round((width * 16) / 9) : Math.round((width * 9) / 16);
  const params = new URLSearchParams({
    href: url,
    show_text: "false",
    width: String(width),
    height: String(height),
    t: "0",
  });
  return `https://www.facebook.com/plugins/video.php?${params.toString()}`;
}

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
              <Reveal key={video.url} delay={i * 0.08} className="border border-ivory/10 bg-ink-2 p-2">
                <div className={`relative overflow-hidden ${aspect === "reel" ? "aspect-[9/16]" : "aspect-video"}`}>
                  <iframe
                    src={fbEmbedSrc(video.url, aspect)}
                    title={video.title}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>
                <p className="font-serif text-base md:text-lg text-ivory px-2 py-3">{video.title}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}