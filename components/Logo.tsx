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
        public/logo.png is currently black line art, which already reads
        fine on the light cream theme — no filter needed. (If the file ever
        goes back to white/light artwork, add `invert` back to this
        className so it stays visible.)
      */}
      <Image
        src="/logo.png"
        alt="Dream Images logo"
        width={markSize}
        height={markSize}
        priority
        quality={100}
        className="object-contain w-7 h-7 sm:w-11 sm:h-11"
      />
      {showWordmark && (
        <span className="font-serif uppercase tracking-[0.15em] sm:tracking-[0.2em] text-sm sm:text-lg md:text-xl text-ivory leading-none whitespace-nowrap">
          Dream Images
        </span>
      )}
    </Link>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> f4d8eab25006e4e2b248506d546d84685c571b7b
