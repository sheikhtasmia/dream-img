import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FramesFilmsGrid from "@/components/FramesFilmsGrid";
import { albums } from "@/lib/albums";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Frames & Films — Real Bengali Weddings",
  description:
    "Browse full wedding albums shot by Dream Images across Dhaka and Bangladesh holud, mehndi, nikah, and reception galleries from real couples.",
  alternates: { canonical: "/frames-films" },
};

export default function FramesFilmsPage() {
  return (
    <div className="pb-20 md:pb-28">
      <PageHero
        image="/cover1.png"
        alt="Dream Images, a recent wedding"
        eyebrow="Frames & Films"
        title="Every album, one real wedding at a time"
        subtitle={`${siteConfig.name} has covered holud evenings, nikah ceremonies, and receptions across Bangladesh. Open an album below to see the full story from that day.`}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-20">
        <FramesFilmsGrid albums={albums} />
      </div>
    </div>
  );
}