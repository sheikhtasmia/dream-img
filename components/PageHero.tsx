import Image from "next/image";
import Reveal from "./Reveal";

export default function PageHero({
  image,
  alt,
  eyebrow,
  title,
  subtitle,
}: {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative h-[46svh] min-h-[360px] max-h-[560px] w-full overflow-hidden flex items-end">
      <Image src={image} alt={alt} fill priority sizes="100vw" className="object-cover" />

      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pb-10 md:pb-14">
        <Reveal>
          <p className="text-gold font-light text-sm mb-4 tracking-wide">{eyebrow}</p>
          <h1 className="font-serif text-4xl md:text-5xl text-ivory mb-4 max-w-2xl">{title}</h1>
          {subtitle && <p className="text-ivory-dim font-light leading-relaxed max-w-lg">{subtitle}</p>}
        </Reveal>
      </div>
    </section>
  );
}