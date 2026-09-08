import Link from "next/link";
import Image from "next/image";

export default function Logo({
  className = "",
  markSize = 52,
  showWordmark = true,
}: {
  className?: string;
  markSize?: number;
  showWordmark?: boolean;
}) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 group ${className}`} aria-label="Dream Images — home">
      {/*
        public/logo.png is now the white/light export of the logo, so it
        shows directly on the dark theme — no invert filter needed. (Only
        add `invert` back if this file ever reverts to black artwork.)
      */}
      <Image
        src="/logo.png"
        alt="Dream Images logo"
        width={markSize}
        height={markSize}
        priority
        quality={100}
        className="object-contain"
      />
      {showWordmark && (
        <span className="font-serif uppercase tracking-[0.2em] text-lg md:text-xl text-ivory leading-none whitespace-nowrap">
          Dream Images
        </span>
      )}
    </Link>
  );
}