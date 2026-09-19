import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects and uses information from this website.`,
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "Information We Collect",
    body: "When you use the contact or booking form on this site, we collect the information you " +
      "provide your name, phone number, email address, wedding date, and any details you share " +
      "about your event. We don't collect payment information through this website.",
  },
  {
    title: "How We Use Your Information",
    body: "We use the information you submit only to respond to your enquiry, prepare a quote, and " +
      "coordinate a booking. We don't sell or rent your information to third parties.",
  },
  {
    title: "Photos & Portfolio Use",
    body: "Photographs and films from weddings we cover may be used in our portfolio, on this website, " +
      "and on our social media accounts, unless a client has requested otherwise in writing. See our " +
      "Terms & Conditions page for details on image usage rights.",
  },
  {
    title: "Third-Party Services",
    body: "Our contact form is processed through Formspree, a third-party form-handling service, and " +
      "messaging via WhatsApp is handled by Meta. Each of these services has its own privacy policy " +
      "governing how it handles data in transit.",
  },
  {
    title: "Data Retention",
    body: "We keep enquiry and booking details for as long as reasonably needed to fulfil your booking " +
      "and for our own business records, after which they may be deleted.",
  },
  {
    title: "Your Rights",
    body: "You can ask us to review, correct, or delete the personal information we hold about you by " +
      "contacting us using the details below.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this policy occasionally. Changes will be posted on this page.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="pb-20 md:pb-28">
      <PageHero
        image="/rsfahim.jpg"
        alt="Dream Images"
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="This explains what information we collect through this website and how it's used."
      />

      <div className="max-w-3xl mx-auto px-6 md:px-10 pt-14 md:pt-20">
        <Reveal className="mb-12 border border-gold/30 bg-ink-2 px-6 py-4">
          <p className="text-ivory-dim font-light text-xs leading-relaxed">
            This is a general draft review it before treating it as your final policy.
          </p>
        </Reveal>

        <div className="space-y-0">
          {sections.map((section, i) => (
            <Reveal key={section.title} delay={(i % 6) * 0.05} className="flex gap-5 md:gap-8 py-8 border-b border-ivory/10">
              <span className="shrink-0 w-9 h-9 rounded-full border border-gold/50 text-gold font-serif text-sm flex items-center justify-center">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="font-serif text-xl md:text-2xl text-ivory mb-3">{section.title}</h2>
                <p className="text-ivory-dim font-light text-sm leading-relaxed">{section.body}</p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.3} className="flex gap-5 md:gap-8 py-8">
            <span className="shrink-0 w-9 h-9 rounded-full border border-gold/50 text-gold font-serif text-sm flex items-center justify-center">
              {String(sections.length + 1).padStart(2, "0")}
            </span>
            <div>
              <h2 className="font-serif text-xl md:text-2xl text-ivory mb-3">Contact Us</h2>
              <p className="text-ivory-dim font-light text-sm leading-relaxed">
                Questions about this policy or your data can be sent to{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-gold hover:underline">
                  {siteConfig.email}
                </a>{" "}
                or {siteConfig.phoneDisplay}.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}