import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Booking terms and conditions for ${siteConfig.name}.`,
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    title: "Booking & Deposit",
    body: "A booking is confirmed only once a non-refundable deposit has been received and acknowledged by " +
      `${siteConfig.name}. The remaining balance is due as agreed at the time of booking, and in full ` +
      "no later than the day of the event unless otherwise arranged in writing.",
  },
  {
    title: "Payment",
    body: "Payments can be made via bank transfer, mobile financial services (bKash/Nagad), or cash, as " +
      "agreed with our team. Prices quoted are specific to the package and date discussed and may not " +
      "be honoured for other dates without confirmation.",
  },
  {
    title: "Cancellation & Rescheduling",
    body: "Deposits are non-refundable in the event of cancellation. If you need to reschedule, we will " +
      "do our best to accommodate the new date subject to availability; rescheduling requests made less " +
      "than 14 days before the event may incur an additional fee.",
  },
  {
    title: "Coverage & Delivery Timeline",
    body: "Coverage hours, number of photographers/cinematographers, and deliverables (trailer, full " +
      "film, edited gallery, prints, album) follow the package confirmed at booking. Edited photos and " +
      "films are typically delivered within 4–8 weeks of the event, depending on the package and " +
      "season; we will communicate a specific estimate at booking.",
  },
  {
    title: "Copyright & Usage Rights",
    body: `${siteConfig.name} retains copyright over all photographs and films produced. Clients receive ` +
      "a license to use delivered images and films for personal, non-commercial purposes (printing, " +
      `sharing, social media). ${siteConfig.name} may use images from your event for its own portfolio, ` +
      "website, and marketing unless you request otherwise in writing before the event.",
  },
  {
    title: "Liability",
    body: "While every effort is made to guarantee coverage, " + siteConfig.name +
      " is not liable for circumstances beyond reasonable control including but not limited to " +
      "equipment failure, illness, accidents, or venue restrictions that limit or prevent coverage. " +
      "In such cases we will work with you on a fair resolution, which may include a partial refund or " +
      "a rescheduled session where applicable.",
  },
  {
    title: "Force Majeure",
    body: "Neither party is liable for failure to perform obligations due to events outside their " +
      "reasonable control, including natural disasters, government restrictions, or other emergencies.",
  },
  {
    title: "Changes to These Terms",
    body: "We may update these terms from time to time. The version in effect at the time of your " +
      "booking will apply to that booking.",
  },
];

export default function TermsPage() {
  return (
    <div className="pb-20 md:pb-28">
      <PageHero
        image="/rsfahim10.jpg"
        alt="Dream Images"
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="These terms apply when you book photography or cinematography coverage with us. Please read them before confirming a booking."
      />

      <div className="max-w-3xl mx-auto px-6 md:px-10 pt-14 md:pt-20">
        <Reveal className="mb-12 border border-gold/30 bg-ink-2 px-6 py-4">
            <p className="text-ivory-dim font-light text-sm leading-relaxed"></p>
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
              <h2 className="font-serif text-xl md:text-2xl text-ivory mb-3">Contact</h2>
              <p className="text-ivory-dim font-light text-sm leading-relaxed">
                Questions about these terms can be sent to{" "}
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