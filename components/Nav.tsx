"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { siteConfig } from "@/lib/site-config";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="site-nav"
      className={`fixed top-0 inset-x-0 z-50 border-b border-ivory/10 bg-ink/70 backdrop-blur-md ${scrolled ? "scrolled" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between gap-4">
        <Logo markSize={44} />

        {/* Full nav only from lg (1024px) up — tablet widths were cramped/overflowing here. */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-light text-ivory-dim shrink-0">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link hover:text-ivory whitespace-nowrap ${pathname === item.href ? "active text-ivory" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="btn-gold hidden lg:inline-block border border-gold text-gold text-sm font-light px-5 py-2.5 hover:bg-gold hover:text-ink whitespace-nowrap shrink-0"
        >
          Book a consultation
        </Link>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden text-ivory shrink-0"
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-ivory/10 bg-ink px-6 py-6 flex flex-col gap-5 text-ivory-dim font-light">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ivory" onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-gold border border-gold text-gold text-sm font-light px-5 py-2.5 hover:bg-gold hover:text-ink text-center w-fit"
            onClick={() => setMenuOpen(false)}
          >
            Book a consultation
          </Link>
        </div>
      )}
    </header>
  );
}