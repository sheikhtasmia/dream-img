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
    "Wedding photography and cinematography packages from Dream Images — Basic, Standard, and Premium Combo coverage for every ceremony.",
  alternates: { canonical: "/packages" },
};

const packages: Package[] = [
  {
    name: "Basic Package",
    price: "৳14,999",
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
    price: "৳24,999",
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
    price: "৳34,999",
    featured: true,
    tagline: "Our most-booked package two photographers, two cinematographers.",
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
    name: "Premium Combo 2",
    price: "৳49,999",
    tagline: "Every ceremony, fully documented with a drone shoot included.",
    inclusions: [
      "3 top photographers",
      "2 top cinematographers",
      "Drone shoot",
      "Single day package · 5 hours",
      "All pictures colour corrected",
      "2–3 min trailer",
      "30–40 min full video",
      "Google Drive / pendrive delivery",
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

        {/* PACKAGES — no images here on purpose: title, price, one-line
            tagline, and an expandable "View details" for the full list. */}
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

        {/* CUSTOM QUOTE BUILDER — for couples who'd rather pick their own
            mix than take a fixed tier. No live price shown; submitting
            sends the selection through to request a real quote. */}
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