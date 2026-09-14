import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { albums, getAlbumBySlug } from "@/lib/albums";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return albums.map((album) => ({ slug: album.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const album = getAlbumBySlug(slug);
  if (!album) return {};

  const title = `${album.title} — ${album.event}`;
  const description = `${album.excerpt} Photographed by ${siteConfig.name} in ${album.location}.`;

  return {
    title,
    description,
    alternates: { canonical: `/frames-films/${album.slug}` },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [{ url: album.cover.src }],
    },
  };
}

export default async function AlbumPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const album = getAlbumBySlug(slug);
  if (!album) notFound();

  const dateLabel = new Date(album.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* Cover image hero banner */}
      <section className="relative h-[64svh] min-h-[440px] max-h-[680px] w-full overflow-hidden flex items-end">
        <Image
          src={album.cover.src}
          alt={album.cover.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/35 via-transparent to-ink/10" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pb-10 md:pb-14">
          <Reveal className="mb-6">
            <Link href="/frames-films" className="text-ivory/80 text-xs font-light hover:text-gold transition-colors">
              &larr; Back to Frames &amp; Films
            </Link>
          </Reveal>
          <Reveal className="max-w-2xl" delay={0.1}>
            <p className="text-gold font-light text-sm mb-4 tracking-wide">
              {album.event} &middot; {dateLabel}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-ivory mb-4">{album.title}</h1>
            <p className="text-ivory-dim font-light leading-relaxed max-w-lg">{album.excerpt}</p>
            <p className="text-ivory-dim/70 font-light text-xs mt-3">{album.location}</p>
          </Reveal>
        </div>
      </section>

      {/* Gallery grid */}
      <div className="pt-16 md:pt-20 pb-20 md:pb-28 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 [column-fill:_balance]">
            {album.images.map((img, i) => (
              <Reveal key={img.src} className="frame mb-4 relative" delay={(i % 6) * 0.05}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1000}
                  height={1250}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="w-full h-auto object-cover"
                />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 border-t border-ivory/10 pt-10 text-center">
            <p className="font-serif text-2xl text-ivory mb-4">Planning a wedding of your own?</p>
            <Link href="/contact" className="bg-gold text-ink font-normal text-sm px-7 py-3.5 hover:bg-gold-bright btn-gold inline-block">
              Book a consultation
            </Link>
          </Reveal>
        </div>
      </div>
    </>
  );
}