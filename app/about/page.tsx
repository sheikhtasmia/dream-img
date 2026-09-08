import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the founder of Dream Images a wedding photography and cinematography studio based in Savar, Dhaka.",
  alternates: { canonical: "/about" },
};

// Placeholder — swap for the real founder's name, role, and photo.
const founder = {
  name: "Kayem Islam",
  role: "CEO & Chief photographer",
  photo: "/founder.jpeg",
  bio: "Started Dream Images over a decade ago shooting a friend's wedding on borrowed equipment. Still personally shoots most weddings the studio takes on.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 md:pt-40 pb-20 md:pb-28 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-2xl mb-16">
          <p className="text-gold font-light text-sm mb-4 tracking-wide">About Us</p>
          <h1 className="font-serif text-4xl md:text-5xl text-ivory mb-5">
            The person behind every frame
          </h1>
          <p className="text-ivory-dim font-light leading-relaxed">
            {siteConfig.name} is based in {siteConfig.address.locality}, {siteConfig.address.region},
            and has spent over a decade photographing and filming weddings across Bangladesh from
            intimate nikah ceremonies to full three-day celebrations.
          </p>
        </Reveal>

        {/* Founder spotlight */}
        <Reveal className="group grid md:grid-cols-2 gap-10 md:gap-14 mb-10 border border-ivory/10 p-6 md:p-10 bg-ink-2 transition-all duration-300 hover:border-gold/40 hover:shadow-2xl hover:shadow-black/40 items-center">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src={founder.photo}
              alt={founder.name}
              width={600}
              height={800}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-gold font-light text-sm mb-3 tracking-wide">Founder</p>
            <h2 className="font-serif text-3xl text-ivory mb-1">{founder.name}</h2>
            <p className="text-ivory-dim font-light text-sm mb-6">{founder.role}</p>
            <p className="text-ivory-dim font-light leading-relaxed">{founder.bio}</p>
          </div>
        </Reveal>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <Reveal
            delay={0.05}
            className="border border-ivory/10 bg-ink-2 p-8 md:p-10 transition-all duration-300 hover:border-gold/40 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/40"
          >
            <p className="text-gold font-light text-sm mb-3 tracking-wide">Vision</p>
            <h3 className="font-serif text-2xl text-ivory mb-4">Photographs worth returning to</h3>
            <p className="text-ivory-dim font-light leading-relaxed text-sm">
              To be the studio Bangladeshi families trust with their most important day known not
              just for beautiful images, but for galleries and films couples still open, years later.
            </p>
          </Reveal>
          <Reveal
            delay={0.15}
            className="border border-ivory/10 bg-ink-2 p-8 md:p-10 transition-all duration-300 hover:border-gold/40 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/40"
          >
            <p className="text-gold font-light text-sm mb-3 tracking-wide">Mission</p>
            <h3 className="font-serif text-2xl text-ivory mb-4">Present, not intrusive</h3>
            <p className="text-ivory-dim font-light leading-relaxed text-sm">
              To document every ceremony candidly and respectfully, stay out of the way of the
              families we shoot for, and deliver every gallery and film ourselves never outsourced.
            </p>
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