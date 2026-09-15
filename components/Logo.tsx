import Link from "next/link";
import Image from "next/image";

export default function Logo({
  className = "",
  markSize = 44,
  showWordmark = true,
}: {
  className?: string;
  markSize?: number;
  showWordmark?: boolean;
}) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2 sm:gap-3 group ${className}`} aria-label="Dream Images — home">
      {/*
        public/logo.png is white artwork. On the light theme it needs to be
        inverted (white -> dark) to stay visible against the cream
        background. If a dark/black version of the logo file is used
        instead, drop this `invert` class.
      */}
      <Image
        src="/logo.png"
        alt="Dream Images logo"
        width={markSize}
        height={markSize}
        priority
        quality={100}
        className="invert object-contain w-7 h-7 sm:w-11 sm:h-11"
      />
      {showWordmark && (
        <span className="font-serif uppercase tracking-[0.15em] sm:tracking-[0.2em] text-sm sm:text-lg md:text-xl text-ivory leading-none whitespace-nowrap">
          Dream Images
        </span>
      )}
    </Link>
  );
}