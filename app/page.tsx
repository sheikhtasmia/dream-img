import Link from "next/link";
import Image from "next/image";
import HeroSlideshow from "@/components/HeroSlideshow";
import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";
import AlbumCard from "@/components/AlbumCard";
import VideoShowcase from "@/components/VideoShowcase";
import { albums } from "@/lib/albums";

const heroSlides = [
  { src: "/hero1.jpg", alt: "Bengali wedding couple, candid portrait" },
  { src: "/hero2.jpg", alt: "Bride getting ready, golden light" },
  { src: "/hero3.jpg", alt: "Nikah ceremony moment" },
  { src: "/hero4.jpg", alt: "Reception stage, night lights" },
  { src: "/hero5.jpg", alt: "Couples posing, natural light" },
  { src: "/rsfahim5.jpg", alt: "Couples posing, natural light" },
  { src: "/rajan7.jpg", alt: "Couples posing, natural light" },

];

const featured = albums.slice(0, 6);

export default function HomePage() {
  return (
    <>
      {/* Full-page blurred backdrop photo — shows through in the gaps between
          sections instead of a flat black background. Hero/Trust sections
          have their own sharp full-bleed photos layered on top of this. */}
      <div className="fixed inset-0">
        <Image
          src="/rsfahim2.jpg"
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover blur-2xl scale-110 opacity-40"
        />
        <div className="absolute inset-0 bg-ink/70" />
      </div>

      {/* HERO */}
      <section className="relative h-[78svh] min-h-[480px] max-h-[820px] sm:h-[85svh] lg:h-screen lg:max-h-none w-full overflow-hidden flex items-end">
        <HeroSlideshow slides={heroSlides} />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pb-14 sm:pb-20 lg:pb-28 pointer-events-none">
          <div className="pointer-events-auto w-fit">
            <p className="hero-reveal reveal-up text-gold font-light text-sm mb-5 tracking-wide" style={{ animationDelay: "1.05s" }}>
              Exclusive wedding photography &amp; cinematography — Savar, Dhaka
            </p>
            <h1
              className="hero-reveal reveal-up font-serif text-[2.4rem] leading-[1.1] sm:text-5xl md:text-6xl font-medium text-ivory max-w-2xl"
              style={{ animationDelay: "1.25s" }}
            >
              Every glance, every gold thread held.
            </h1>
            <div className="hero-reveal reveal-up mt-8" style={{ animationDelay: "1.45s" }}>
              <Link href="/frames-films" className="bg-gold text-ink font-normal text-sm px-7 py-3.5 hover:bg-gold-bright btn-gold inline-block">
                See our work
              </Link>
            </div>
          </div>
        </div>

        <Link
          href="/frames-films"
          className="scroll-cue absolute bottom-8 right-8 md:right-10 z-10 flex flex-col items-center gap-2 text-ivory-dim/70 hover:text-gold transition-colors"
          aria-label="Scroll to our work"
        >
          <span className="text-[0.65rem] font-light tracking-wide [writing-mode:vertical-rl]">Scroll</span>
          <span className="w-px h-10 bg-current" />
        </Link>
      </section>

      {/* FACTS STRIP */}
      <section className="px-6 md:px-10 border-t border-ivory/10">
        <div className="max-w-7xl mx-auto grid grid-cols-3 py-10 md:py-12">
          <Reveal className="pr-4">
            <p className="font-serif text-3xl md:text-4xl text-ivory">
              <StatCounter target={104} suffix="K+" />
            </p>
            <p className="text-ivory-dim font-light text-xs md:text-sm mt-1">Families following our work</p>
          </Reveal>
          <Reveal className="px-4 border-l border-ivory/10" delay={0.1}>
            <p className="font-serif text-3xl md:text-4xl text-ivory">
              <StatCounter target={12} suffix="+" /> yrs
            </p>
            <p className="text-ivory-dim font-light text-xs md:text-sm mt-1">Behind the lens, across Bangladesh</p>
          </Reveal>
          <Reveal className="pl-4 border-l border-ivory/10" delay={0.2}>
            <p className="font-serif text-3xl md:text-4xl text-ivory">Savar</p>
            <p className="text-ivory-dim font-light text-xs md:text-sm mt-1">Studio based in Dhaka division</p>
          </Reveal>
        </div>
      </section>

      {/* FEATURED ALBUMS */}
      <section className="px-6 md:px-10 py-20 md:py-28 border-t border-ivory/10">
        <div className="max-w-7xl mx-auto">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <h2 className="font-serif text-3xl md:text-4xl text-ivory max-w-md">Recent weddings we&rsquo;ve told</h2>
            <Link href="/frames-films" className="text-gold text-sm font-light border-b border-gold/40 pb-0.5 hover:border-gold w-fit">
              View all Frames &amp; Films
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {featured.map((album, i) => (
              <Reveal key={album.slug} delay={i * 0.05}>
                <AlbumCard album={album} priority={i < 3} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="px-6 md:px-10 py-20 md:py-28 border-t border-ivory/10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl text-ivory mb-16">Two crafts, one wedding day</h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-14 md:gap-10">
            <Reveal className="grid grid-cols-1 gap-6">
              <div className="frame h-64 md:h-80 relative">
                <Image
                  src="/rsfahim2.jpg"
                  alt="Wedding photography sample"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="caption">
                  <span className="font-sans font-light text-xs text-ivory">Photography</span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-ivory mb-3">Photography</h3>
                <p className="text-ivory-dim font-light leading-relaxed text-sm md:text-base">
                  Candid coverage across every ceremony, alongside directed portraits with the couple
                  and both families. Delivered as a curated, edited gallery.
                </p>
              </div>
            </Reveal>

            <Reveal className="grid grid-cols-1 gap-6" delay={0.15}>
              <div className="frame h-64 md:h-80 relative">
                <Image
                  src="/nafisa1.jpg"
                  alt="Wedding cinematography sample"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="caption">
                  <span className="font-sans font-light text-xs text-ivory">Cinematography</span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-ivory mb-3">Cinematography</h3>
                <p className="text-ivory-dim font-light leading-relaxed text-sm md:text-base">
                  A short wedding film built around the moments that actually happened vows, tears,
                  the walk to the stage scored and paced like something you&rsquo;d watch again next year.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-14" delay={0.1}>
            <Link href="/packages" className="text-gold text-sm font-light border-b border-gold/40 pb-0.5 hover:border-gold">
              See packages &amp; pricing
            </Link>
          </Reveal>
        </div>
      </section>

      {/* TRUST — cinematic quote break with a real photo behind it */}
      <section className="relative py-28 md:py-36 px-6 md:px-10 overflow-hidden border-t border-ivory/10">
        <Image
          src="/rsfahim5.jpg"
          alt="Dream Images, wedding coverage"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/70" />

        <Reveal className="relative z-10 max-w-3xl mx-auto text-center" as="div">
          <p className="font-serif text-2xl md:text-3xl text-ivory leading-snug">
            Photographs our couples still open, years later that&rsquo;s the only metric we&rsquo;ve ever cared about.
          </p>
          <p className="text-ivory-dim font-light text-sm mt-6">
            Followed by over 104,000 people across Bangladesh, trusted with some of the most closely
            watched weddings of the year.
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 py-20 md:py-28 border-t border-ivory/10">
        <Reveal className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-ivory mb-6">Let&rsquo;s talk about your date</h2>
          <p className="text-ivory-dim font-light mb-8 max-w-md mx-auto">
            Send us your wedding date and venue we reply personally, not through a bot.
          </p>
          <Link href="/contact" className="bg-gold text-ink font-normal text-sm px-7 py-3.5 hover:bg-gold-bright btn-gold inline-block">
            Book a consultation
          </Link>
        </Reveal>
      </section>

      {/* WEDDING FILMS — shows automatically once featuredVideos has real IDs */}
      <VideoShowcase />
    </>
  );
} 