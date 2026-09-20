import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Tilt from "@/components/Tilt";
import PageHero from "@/components/PageHero";
import PackageCard, { type Package } from "@/components/PackageCard";
import CustomQuoteBuilder from "@/components/CustomQuoteBuilder";
import { siteConfig } from "@/lib/site-config";
import { services, serviceHref } from "@/lib/services";

export const metadata: Metadata = {
  title: "Packages & Services",
  description:
    "Wedding photography and cinematography packages from Dream Images Basic, Standard, Premium, and traditional Hindu Wedding coverage.",
  alternates: { canonical: "/packages" },
};

const packages: Package[] = [
  {
    name: "Basic Package",
    price: "৳17,999",
    tagline: "For a single ceremony, done properly.",
    inclusions: [
      "1 photographer",
      "1 cinematographer",
      "Single day package · 5 hours",
      "All pictures colour corrected",
      "2–3 min trailer",
      "20–30 min full video",
      "Google Drive / pendrive delivery",
    ],
  },
  {
    name: "Standard Package",
    price: "৳27,999",
    tagline: "A step up in coverage for your full wedding day.",
    inclusions: [
      "2 photographers",
      "1 cinematographer",
      "Single day package · 5 hours",
      "All pictures colour corrected",
      "2–3 min trailer",
      "20–30 min full video",
      "Google Drive / pendrive delivery",
    ],
  },
  {
    name: "Premium Combo 1",
    price: "৳39,999",
    tagline: "Two photographers, two cinematographers, one full day.",
    inclusions: [
      "2 top photographers",
      "2 top cinematographers",
      "Single day package · 5 hours",
      "All pictures colour corrected",
      "2–3 min trailer",
      "30–40 min full video",
      "Google Drive / pendrive delivery",
    ],
  },
  {
    name: "Platinum",
    price: "৳59,999",
    tagline: "3 photographers + 2 cinematographers, with an expanded team.",
    inclusions: [
      "Lead: Kayem Islam",
      "3 photographers",
      "2 cinematographers",
      "Expanded photography team",
      "5 hours",
      "Cinematic trailer",
      "Full movie",
      "Unlimited clicks",
      "All photos edited",
      "100 × 4R prints",
      "Drone coverage",
    ],
  },
  {
  name: "Platinum Plus",
  price: "৳89,999",
  tagline: "1 chief, 1 core, 1 senior photographer + 2 cinematographers, for a longer day.",
  inclusions: [
    "1 Chief Photographer (Kayem Islam)",
    "1 Core Photographer",
    "1 Senior Photographer",
    "2 Cinematographers",
    "7 hours coverage",
    "Cinematic trailer",
    "Full movie",
    "All photos edited",
    "150 × 4R prints",
    "Outdoor shoot",
    "Drone coverage",
  ],
  note: "Best for couples who want coverage beyond the main event.",
},
  
  {
    name: "Infinite",
    price: "৳130,000",
    featured: true,
    tagline: "5–6 photographers + 4 cinematographers every moment, before and after.",
    inclusions: [
      "Lead: Kayem Islam",
      "5–6 photographers",
      "2 core + 2 senior photographers",
      "4 cinematographers",
      "7 hours coverage",
      "Cinematic trailer",
      "Full movie",
      "All photos edited",
      "200 × 4R prints",
      "Social media reel",
      "Outdoor shoot",
      "Drone coverage",
      "Pre-wedding shoot",
      "Post-wedding shoot",
    ],
  },

  /* ---------------- HINDU WEDDING SPECIAL PACKAGES ---------------- */
  {
    name: "Saat Pheras (Hindu Wedding Basic)",
    price: "৳59,999",
    tagline: "Complete coverage for all rituals: Adhibash, HoludSnan, Biye, Bashibiye & Biday.",
    inclusions: [
      "1 Top Photographer",
      "1 Top Cinematographer",
      "Coverage for: Adhibash, HoludSnan, Biye, Bashibiye & Biday",
      "Short Trailer & Full Video (entire event)",
      "1 Social Media Reel",
      "50 × 4R Prints",
      "Google Drive / Pendrive Delivery",
    ],
  },
  {
    name: "Subho Dristi (Hindu Wedding Standard)",
    price: "৳79,999",
    tagline: "Enhanced dual-photographer coverage for every ritual.",
    inclusions: [
      "2 Top Photographers",
      "1 Top Cinematographer",
      "Coverage for: Adhibash, HoludSnan, Biye, Bashibiye & Biday",
      "Short Trailer & Full Video",
      "1 Social Media Reel",
      "100 × 4R Prints",
      "Google Drive / Pendrive Delivery",
    ],
  },
  {
    name: "Eternal Lagna (Hindu Wedding Premium)",
    price: "৳1,30,000",
    tagline: "Full-scale cinematic coverage with drone and outdoor shoot included.",
    inclusions: [
      "2 Top Photographers",
      "2 Top Cinematographers",
      "Coverage for: Adhibash, HoludSnan, Biye, Bashibiye & Biday",
      "Cinematic Trailer & Extended Full Movie",
      "2 Social Media Reels",
      "150 × 4R Prints",
      "Drone Shoot included",
      "Outdoor Shoot included",
      "Google Drive / Pendrive Delivery",
    ],
  },
];

export default function PackagesPage() {
  return (
    <div className="pb-20 md:pb-28">
      <PageHero
        image="/rsfahim.webp"
        alt="Dream Images, wedding coverage in progress"
        eyebrow="Packages & Services"
        title="Coverage built around your ceremonies"
        subtitle="Every wedding is different, so every quote is put together around your dates, venues, and the ceremonies you want covered."
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-20">
        {/* SERVICES */}
        <Reveal className="mb-10">
          <h2 className="font-serif text-2xl md:text-3xl text-ivory">What we cover</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {services.map((service, i) => (
            <Reveal key={service.name} delay={(i % 6) * 0.06}>
              <Tilt max={5}>
                <Link
                  href={serviceHref(service)}
                  className="group block border border-ivory/10 bg-ink-2 hover:border-gold/50 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300"
                >
                  <div className="frame h-48 relative">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg text-ivory mb-1.5 group-hover:text-gold transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-ivory-dim font-light text-xs leading-relaxed">{service.description}</p>
                  </div>
                </Link>
              </Tilt>
            </Reveal>
          ))}
        </div>

        {/* PACKAGES */}
        <Reveal className="mb-10">
          <h2 className="font-serif text-2xl md:text-3xl text-ivory">Packages</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 0.08}>
              <PackageCard pkg={pkg} />
            </Reveal>
          ))}
        </div>

        {/* CUSTOM QUOTE BUILDER */}
        <Reveal className="mt-20 mb-10">
          <h2 className="font-serif text-2xl md:text-3xl text-ivory mb-2">Or build your own</h2>
          <p className="text-ivory-dim font-light text-sm max-w-xl">
            Pick exactly what your day needs and request a custom quote no fixed package required.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <CustomQuoteBuilder />
        </Reveal>

        <Reveal className="mt-16 border-t border-ivory/10 pt-10 max-w-2xl">
          <h2 className="font-serif text-2xl text-ivory mb-4">Not sure what you need?</h2>
          <p className="text-ivory-dim font-light leading-relaxed mb-6">
            Message us on WhatsApp with your wedding date, venue, and the ceremonies you&rsquo;re
            planning we&rsquo;ll recommend coverage and send a clear quote within a day.
          </p>
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener"
            className="text-gold text-sm font-light border-b border-gold/40 pb-0.5 hover:border-gold"
          >
            Message us on WhatsApp
          </a>
        </Reveal>
      </div>
    </div>
  );
}