import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Tilt from "@/components/Tilt";
import Marquee from "@/components/Marquee";
import PageHero from "@/components/PageHero";
import StatCounter from "@/components/StatCounter";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the founder of Dream Images — a wedding photography and cinematography studio based in Savar, Dhaka.",
  alternates: { canonical: "/about" },
};

// Placeholder — swap for the real founder's name, role, and photo.
const founder = {
  name: "Kayem Islam",
  role: "CEO & Chief photographer",
  photo: "/founder.jpg",
  bio: "Started Dream Images over a decade ago shooting a friend's wedding on borrowed equipment. Still personally shoots most weddings the studio takes on.",
};

export default function AboutPage() {
  return (
    <div className="pb-20 md:pb-28">
      <PageHero
        image="/cover2.jpg"
        alt="Dream Images at work on a wedding day"
        eyebrow="About Us"
        title="The person behind every frame"
        subtitle={`${siteConfig.name} is based in ${siteConfig.address.locality}, ${siteConfig.address.region}, and has spent over a decade photographing and filming weddings across Bangladesh.`}
      />

      <Reveal as="div">
        <Marquee items={["Wedding Photography", "Cinematography", "Holud & Nikah", "Since 2013"]} />
      </Reveal>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* By the numbers */}
        <div className="grid grid-cols-3 py-14 md:py-16 border-b border-ivory/10">
          <Reveal className="pr-4">
            <p className="font-serif text-3xl md:text-4xl text-ivory">
              <StatCounter target={104} suffix="K+" />
            </p>
            <p className="text-ivory-dim font-light text-xs md:text-sm mt-1">Followers across Bangladesh</p>
          </Reveal>
          <Reveal className="px-4 border-l border-ivory/10" delay={0.1}>
            <p className="font-serif text-3xl md:text-4xl text-ivory">
              <StatCounter target={12} suffix="+" /> yrs
            </p>
            <p className="text-ivory-dim font-light text-xs md:text-sm mt-1">Behind the lens</p>
          </Reveal>
          <Reveal className="pl-4 border-l border-ivory/10" delay={0.2}>
            <p className="font-serif text-3xl md:text-4xl text-ivory">Savar</p>
            <p className="text-ivory-dim font-light text-xs md:text-sm mt-1">Studio based in Dhaka division</p>
          </Reveal>
        </div>

        {/* Founder spotlight */}
        <Reveal className="mt-14 md:mt-20 mb-10">
          <Tilt max={4} scale={1.01}>
            <div className="group grid md:grid-cols-2 gap-10 md:gap-14 border border-ivory/10 p-6 md:p-10 bg-ink-2">
              <div className="frame h-72 md:h-full min-h-[320px] relative overflow-hidden">
                <Image
                  src={founder.photo}
                  alt={founder.name}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-gold font-light text-sm mb-3 tracking-wide">Founder</p>
                <h2 className="font-serif text-3xl text-ivory mb-1">{founder.name}</h2>
                <p className="text-ivory-dim font-light text-sm mb-6">{founder.role}</p>
                <p className="text-ivory-dim font-light leading-relaxed">{founder.bio}</p>
              </div>
            </div>
          </Tilt>
        </Reveal>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <Reveal delay={0.05}>
            <Tilt max={6}>
              <div className="border border-ivory/10 bg-ink-2 p-8 md:p-10 h-full">
                <p className="text-gold font-light text-sm mb-3 tracking-wide">Vision</p>
                <h3 className="font-serif text-2xl text-ivory mb-4">Photographs worth returning to</h3>
                <p className="text-ivory-dim font-light leading-relaxed text-sm">
                  To be the studio Bangladeshi families trust with their most important day known not
                  just for beautiful images, but for galleries and films couples still open, years later.
                </p>
              </div>
            </Tilt>
          </Reveal>
          <Reveal delay={0.15}>
            <Tilt max={6}>
              <div className="border border-ivory/10 bg-ink-2 p-8 md:p-10 h-full">
                <p className="text-gold font-light text-sm mb-3 tracking-wide">Mission</p>
                <h3 className="font-serif text-2xl text-ivory mb-4">Present, not intrusive</h3>
                <p className="text-ivory-dim font-light leading-relaxed text-sm">
                  To document every ceremony candidly and respectfully, stay out of the way of the
                  families we shoot for, and deliver every gallery and film ourselves never outsourced.
                </p>
              </div>
            </Tilt>
          </Reveal>
        </div>

        <Reveal className="border-t border-ivory/10 pt-10 text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl text-ivory mb-4">Let&rsquo;s meet before your wedding day</h2>
          <p className="text-ivory-dim font-light leading-relaxed mb-6">
            A short call or in-person meeting helps us understand your ceremonies, families, and
            venues before we ever pick up a camera.
          </p>
          <Link href="/contact" className="bg-gold text-ink font-normal text-sm px-7 py-3.5 hover:bg-gold-bright btn-gold inline-block">
            Book a consultation
          </Link>
        </Reveal>
      </div>
    </div>
  );
}