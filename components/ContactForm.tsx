"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";

const PACKAGE_OPTIONS = [
  "Not sure yet",
  "Basic Package",
  "Standard Package",
  "Premium Combo 1",
  "Premium Combo 2",
];

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm({ initialPackage }: { initialPackage?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [selectedPackage, setSelectedPackage] = useState(
    initialPackage && PACKAGE_OPTIONS.includes(initialPackage) ? initialPackage : "Not sure yet"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Replace siteConfig.formspreeEndpoint with your real Formspree form
      // URL (from formspree.io) for this to actually deliver email.
      const res = await fetch(siteConfig.formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  const whatsappMessage = `Hi Dream Images, I'm ${name || "[your name]"} — I'd like to book the ${selectedPackage}.`;
  const whatsappHref = `${siteConfig.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  if (status === "sent" || status === "error") {
    return (
      <div className="text-center py-6">
        {status === "sent" ? (
          <>
            <p className="font-serif text-xl text-ivory mb-2">Request sent</p>
            <p className="text-ivory-dim font-light text-sm mb-6">
              We&rsquo;ll reply by email soon. If it&rsquo;s urgent, message us directly on WhatsApp
              we usually reply faster there.
            </p>
          </>
        ) : (
          <>
            <p className="font-serif text-xl text-ivory mb-2">Couldn&rsquo;t send that</p>
            <p className="text-ivory-dim font-light text-sm mb-6">
              Something went wrong on our end please message us directly on WhatsApp instead and
              we&rsquo;ll take it from there.
            </p>
          </>
        )}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 bg-[#25D366] text-ink font-normal text-sm px-7 py-3.5 hover:brightness-105 transition-all"
        >
          Message us on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label className="block text-xs font-light text-ivory-dim mb-2">Package</label>
        <select
          name="package"
          value={selectedPackage}
          onChange={(e) => setSelectedPackage(e.target.value)}
          className="w-full bg-transparent border-b border-ivory/10 focus:border-gold outline-none py-2 text-ivory [&>option]:bg-ink"
        >
          {PACKAGE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-light text-ivory-dim mb-2">Your name</label>
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-transparent border-b border-ivory/10 focus:border-gold outline-none py-2 text-ivory placeholder:text-ivory-dim/40"
          placeholder="Full name"
        />
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-light text-ivory-dim mb-2">Wedding date</label>
          <input
            type="date"
            name="weddingDate"
            className="w-full bg-transparent border-b border-ivory/10 focus:border-gold outline-none py-2 text-ivory"
          />
        </div>
        <div>
          <label className="block text-xs font-light text-ivory-dim mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full bg-transparent border-b border-ivory/10 focus:border-gold outline-none py-2 text-ivory placeholder:text-ivory-dim/40"
            placeholder="+8801XXXXXXXXX"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-light text-ivory-dim mb-2">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full bg-transparent border-b border-ivory/10 focus:border-gold outline-none py-2 text-ivory placeholder:text-ivory-dim/40"
          placeholder="you@email.com"
        />
      </div>

      <div>
        <label className="block text-xs font-light text-ivory-dim mb-2">Tell us about the wedding</label>
        <textarea
          name="message"
          rows={3}
          className="w-full bg-transparent border-b border-ivory/10 focus:border-gold outline-none py-2 text-ivory placeholder:text-ivory-dim/40"
          placeholder="Venue, ceremonies, anything we should know"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-gold w-full bg-gold text-ink font-normal text-sm px-7 py-3.5 hover:bg-gold-bright disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Request a consultation"}
      </button>
    </form>
  );
}