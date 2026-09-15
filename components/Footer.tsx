import Link from "next/link";
import Logo from "./Logo";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-ink px-6 md:px-10 py-10 border-t border-ivory/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Logo />

        <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-light text-ivory-dim">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-gold transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5 text-xs font-light text-ivory-dim">
          <a href={siteConfig.social.instagram} target="_blank" rel="noopener" className="hover:text-gold transition-colors">
            Instagram
          </a>
          <a href={siteConfig.social.facebook} target="_blank" rel="noopener" className="hover:text-gold transition-colors">
            Facebook
          </a>
          <a href={siteConfig.social.youtube} target="_blank" rel="noopener" className="hover:text-gold transition-colors">
            YouTube
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-ivory/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-light text-ivory-dim/60">
        <p>{siteConfig.address.full}</p>
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}