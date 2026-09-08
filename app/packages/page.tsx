import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";
import { services, serviceHref } from "@/lib/services";

export const metadata: Metadata = {
  title: "Packages & Services",
  description:
    "Wedding photography and cinematography packages from Dream Images Basic, Standard, and Premium Combo coverage for every ceremony.",
  alternates: { canonical: "/packages" },
};

const packages = [
  {
    name: "Basic Package",
    price: "৳14,999",
    image: "/p.jpg",
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
    image: "/p1.jpg",
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
    image: "/p2.jpg",
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
    image: "/rsfahim1.jpg",
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
    <div className="pt-32 md:pt-40 pb-20 md:pb-28 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-2xl mb-16">
          <p className="text-gold font-light text-sm mb-4 tracking-wide">Packages &amp; Services</p>
          <h1 className="font-serif text-4xl md:text-5xl text-ivory mb-5">
            Coverage built around your ceremonies
          </h1>
          <p className="text-ivory-dim font-light leading-relaxed">
            Every wedding is different, so every quote is put together around your dates, venues,
            and the ceremonies you want covered. Pick a package below or get in touch and we&rsquo;ll
            tailor one to your day.
          </p>
        </Reveal>

        {/* SERVICES */}
        <Reveal className="mb-10">
          <h2 className="font-serif text-2xl md:text-3xl text-ivory">What we cover</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {services.map((service, i) => (
            <Reveal key={service.name} delay={(i % 6) * 0.06}>
              <Link
                href={serviceHref(service)}
                className="group block border border-ivory/10 bg-ink-2 hover:border-gold/50 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/40 transition-all duration-300"
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
            </Reveal>
          ))}
        </div>

        {/* PACKAGES */}
        <Reveal className="mb-10">
          <h2 className="font-serif text-2xl md:text-3xl text-ivory">Packages</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, i) => (
            <Reveal
              key={pkg.name}
              delay={i * 0.08}
              className={`group border flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/40 ${
                pkg.featured ? "border-gold bg-ink-2" : "border-ivory/10 hover:border-gold/50"
              }`}
            >
              <div className="frame h-40 relative overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={`${pkg.name} sample`}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                {pkg.featured && (
                  <span className="text-gold text-xs font-light tracking-wide mb-3">Most booked</span>
                )}
                <h2 className="font-serif text-xl text-ivory mb-1">{pkg.name}</h2>
                <p className="font-serif text-2xl text-gold mb-5">{pkg.price}</p>

                <ul className="space-y-2 mb-6 flex-1">
                  {pkg.inclusions.map((item) => (
                    <li key={item} className="text-ivory-dim font-light text-xs flex gap-2">
                      <span className="text-gold">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/contact?package=${encodeURIComponent(pkg.name)}`}
                  className={`text-center text-sm font-normal px-6 py-3 btn-gold ${
                    pkg.featured ? "bg-gold text-ink hover:bg-gold-bright" : "border border-gold text-gold hover:bg-gold hover:text-ink"
                  }`}
                >
                  Book this package
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

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