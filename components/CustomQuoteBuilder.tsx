"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const COVERAGE = ["4 Hours", "6 Hours", "8 Hours", "10 Hours", "Full Day"];
const PHOTOGRAPHY = ["1 Photographer", "2 Photographers", "Lead + Second Shooter"];
const CINEMATOGRAPHY = ["1 Cinematographer", "2 Cinematographers", "Documentary Film"];
const ADDONS = [
  "Engagement Session",
  "Bridal Portrait Session",
  "Rehearsal / Mehendi Coverage",
  "Same-Day Edit",
  "Drone Coverage",
  "35mm Film",
  "Wedding Album",
  "Extra Hours",
];

function PillGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="mb-8">
      <p className="font-serif text-lg text-ivory mb-3">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`px-4 py-2 text-xs font-light border transition-colors duration-200 ${
              value === opt
                ? "border-gold bg-gold text-ink"
                : "border-ivory/15 text-ivory-dim hover:border-gold/50 hover:text-ivory"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function CustomQuoteBuilder() {
  const [coverage, setCoverage] = useState(COVERAGE[2]);
  const [photography, setPhotography] = useState(PHOTOGRAPHY[0]);
  const [cinematography, setCinematography] = useState(CINEMATOGRAPHY[0]);
  const [addons, setAddons] = useState<string[]>([]);

  function toggleAddon(opt: string) {
    setAddons((prev) => (prev.includes(opt) ? prev.filter((a) => a !== opt) : [...prev, opt]));
  }

  const summary = useMemo(() => {
    const lines = [
      `Coverage: ${coverage}`,
      `Photography: ${photography}`,
      `Cinematography: ${cinematography}`,
      `Add-ons: ${addons.length > 0 ? addons.join(", ") : "None"}`,
    ];
    return lines.join("\n");
  }, [coverage, photography, cinematography, addons]);

  const href = `/contact?package=${encodeURIComponent("Custom Quote")}&details=${encodeURIComponent(summary)}`;

  return (
    <div className="border border-ivory/10 bg-ink-2 p-6 md:p-10">
      <PillGroup label="Coverage" options={COVERAGE} value={coverage} onChange={setCoverage} />
      <PillGroup label="Photography" options={PHOTOGRAPHY} value={photography} onChange={setPhotography} />
      <PillGroup label="Cinematography" options={CINEMATOGRAPHY} value={cinematography} onChange={setCinematography} />

      <div className="mb-8">
        <p className="font-serif text-lg text-ivory mb-3">Add-ons</p>
        <div className="flex flex-wrap gap-2">
          {ADDONS.map((opt) => {
            const checked = addons.includes(opt);
            return (
              <button
                key={opt}
                type="button"
                onClick={() => toggleAddon(opt)}
                className={`px-4 py-2 text-xs font-light border transition-colors duration-200 flex items-center gap-2 ${
                  checked
                    ? "border-gold bg-gold text-ink"
                    : "border-ivory/15 text-ivory-dim hover:border-gold/50 hover:text-ivory"
                }`}
              >
                <span
                  className={`w-3 h-3 border flex items-center justify-center ${checked ? "border-ink" : "border-ivory/40"}`}
                >
                  {checked && <span className="w-1.5 h-1.5 bg-ink" />}
                </span>
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      <div className="border-t border-ivory/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-ivory-dim font-light text-xs max-w-sm">
          Pricing depends on your exact combination send your selection and we&rsquo;ll reply with a
          clear quote, usually within a day.
        </p>
        <Link
          href={href}
          className="bg-gold text-ink font-normal text-sm px-7 py-3.5 hover:bg-gold-bright btn-gold text-center whitespace-nowrap"
        >
          Request Your Custom Quote
        </Link>
      </div>
    </div>
  );
}