"use client";

import { useState } from "react";
import Link from "next/link";
<<<<<<< HEAD
import Tilt from "./Tilt";
=======
>>>>>>> f4d8eab25006e4e2b248506d546d84685c571b7b

export type Package = {
  name: string;
  price: string;
  tagline: string;
  featured?: boolean;
  inclusions: string[];
};

export default function PackageCard({ pkg }: { pkg: Package }) {
  const [open, setOpen] = useState(true);

  return (
<<<<<<< HEAD
    <Tilt max={5} scale={1.015}>
      <div
        className={`group relative overflow-hidden border transition-colors duration-300 hover:shadow-xl hover:shadow-ivory/10 ${
          pkg.featured ? "border-gold bg-ink-2" : "border-ivory/10 hover:border-gold/50"
        }`}
      >
        {/* Animated gold accent bar — grows in on hover for a bit of "card
            vibe" instead of just a flat border. */}
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 bottom-0 w-1 bg-gold origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"
        />

        <div className="p-6 md:p-8">
          {pkg.featured && <span className="text-gold text-xs font-light tracking-wide mb-3 block">Most booked</span>}
          <h2 className="font-serif text-2xl text-ivory mb-1">{pkg.name}</h2>
          <p className="font-serif text-2xl text-gold mb-4">{pkg.price}</p>
          <p className="text-ivory-dim font-light text-sm mb-6">{pkg.tagline}</p>

          <Link
            href={`/contact?package=${encodeURIComponent(pkg.name)}`}
            className={`block text-center text-sm font-normal px-6 py-3 btn-gold ${
              pkg.featured ? "bg-gold text-ink hover:bg-gold-bright" : "border border-gold text-gold hover:bg-gold hover:text-ink"
            }`}
          >
            Book this package
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="w-full flex items-center justify-between px-6 md:px-8 py-4 border-t border-ivory/10 text-left"
        >
          <span className="text-xs font-light tracking-wide text-ivory">View details</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className={`text-gold transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

        <div
          className="grid transition-[grid-template-rows] duration-300 ease-out"
          style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <ul className="px-6 md:px-8 pb-6 md:pb-8 space-y-2">
              {pkg.inclusions.map((item) => (
                <li key={item} className="text-ivory-dim font-light text-xs flex gap-2">
                  <span className="text-gold">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Tilt>
=======
    <div
      className={`group relative overflow-hidden border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-ivory/10 ${
        pkg.featured ? "border-gold bg-ink-2" : "border-ivory/10 hover:border-gold/50"
      }`}
    >
      {/* Animated gold accent bar — grows in on hover for a bit of "card
          vibe" instead of just a flat border. */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 bottom-0 w-1 bg-gold origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"
      />

      <div className="p-6 md:p-8">
        {pkg.featured && <span className="text-gold text-xs font-light tracking-wide mb-3 block">Most booked</span>}
        <h2 className="font-serif text-2xl text-ivory mb-1">{pkg.name}</h2>
        <p className="font-serif text-2xl text-gold mb-4">{pkg.price}</p>
        <p className="text-ivory-dim font-light text-sm mb-6">{pkg.tagline}</p>

        <Link
          href={`/contact?package=${encodeURIComponent(pkg.name)}`}
          className={`block text-center text-sm font-normal px-6 py-3 btn-gold ${
            pkg.featured ? "bg-gold text-ink hover:bg-gold-bright" : "border border-gold text-gold hover:bg-gold hover:text-ink"
          }`}
        >
          Book this package
        </Link>
      </div>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-6 md:px-8 py-4 border-t border-ivory/10 text-left"
      >
        <span className="text-xs font-light tracking-wide text-ivory">View details</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          className={`text-gold transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <ul className="px-6 md:px-8 pb-6 md:pb-8 space-y-2">
            {pkg.inclusions.map((item) => (
              <li key={item} className="text-ivory-dim font-light text-xs flex gap-2">
                <span className="text-gold">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
>>>>>>> f4d8eab25006e4e2b248506d546d84685c571b7b
  );
}