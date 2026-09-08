import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Curtain from "@/components/Curtain";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { siteConfig } from "@/lib/site-config";

// Loaded via <link> tags below rather than next/font/google so the build
// doesn't depend on reaching fonts.googleapis.com at build time — swap
// this for next/font/local + self-hosted woff2 files whenever convenient,
// which is the better long-term setup for performance.

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "wedding photography Bangladesh",
    "wedding photographer Dhaka",
    "wedding cinematography Bangladesh",
    "Bengali wedding photographer",
    "Savar wedding photography",
    "holud photography Dhaka",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Photographer",
    name: siteConfig.name,
    image: `${siteConfig.url}/opengraph-image.png`,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      addressCountry: "BD",
    },
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook, siteConfig.social.youtube],
    description: siteConfig.description,
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,500&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Curtain />
        <div className="grain" aria-hidden="true" />
        <CustomCursor />
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}