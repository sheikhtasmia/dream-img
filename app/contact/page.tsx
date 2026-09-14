import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact — Book Us",
  description:
    "Get in touch with Dream Images to book wedding photography and cinematography coverage in Dhaka and across Bangladesh.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ package?: string }>;
}) {
  const { package: initialPackage } = await searchParams;

  return (
    <div className="pt-32 md:pt-40 pb-20 md:pb-28 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14">
        <Reveal>
          <p className="text-gold font-light text-sm mb-4 tracking-wide">Contact</p>
          <h1 className="font-serif text-4xl md:text-5xl text-ivory mb-6">Let&rsquo;s talk about your date</h1>
          <p className="text-ivory-dim font-light leading-relaxed max-w-sm mb-10">
            Send us your wedding date and venue on WhatsApp or call directly we reply personally,
            not through a bot.
          </p>

          <div className="space-y-5 text-sm font-light">
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-ivory hover:text-gold transition-colors">
              <span className="w-8 h-8 border border-ivory/10 flex items-center justify-center text-gold">☎</span>
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-3 text-ivory hover:text-gold transition-colors"
            >
              <span className="w-8 h-8 border border-ivory/10 flex items-center justify-center text-gold">◎</span>
              @dream_images.bd on Instagram
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-3 text-ivory hover:text-gold transition-colors"
            >
              <span className="w-8 h-8 border border-ivory/10 flex items-center justify-center text-gold">f</span>
              Dream Images on Facebook
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-3 text-ivory hover:text-gold transition-colors"
            >
              <span className="w-8 h-8 border border-ivory/10 flex items-center justify-center text-gold">▷</span>
              Wedding films on YouTube
            </a>
            <p className="flex items-center gap-3 text-ivory pt-2">
              <span className="w-8 h-8 border border-ivory/10 flex items-center justify-center text-gold">⌂</span>
              {siteConfig.address.full}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="border border-ivory/10 p-8 md:p-10 bg-ink-2">
          <ContactForm initialPackage={initialPackage} />
        </Reveal>
      </div>
    </div>
  );
}