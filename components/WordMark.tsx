import Link from "next/link";

export default function WordMark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex flex-col items-start leading-none group ${className}`}
      aria-label="Dream Images — home"
    >
      <span className="font-serif uppercase tracking-[0.28em] text-xl md:text-2xl text-ivory">
        Dream Images
      </span>
      <span className="mt-1.5 h-px w-full bg-gold/70 group-hover:bg-gold transition-colors" />
    </Link>
  );
}