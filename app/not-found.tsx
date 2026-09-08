import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-40 pb-28 px-6 md:px-10 text-center min-h-[70vh] flex flex-col items-center justify-center">
      <p className="text-gold font-light text-sm mb-4 tracking-wide">404</p>
      <h1 className="font-serif text-3xl md:text-4xl text-ivory mb-6">This frame doesn&rsquo;t exist</h1>
      <Link href="/" className="text-gold text-sm font-light border-b border-gold/40 pb-0.5 hover:border-gold">
        Back to home
      </Link>
    </div>
  );
}