export default function Marquee({ items }: { items: string[] }) {
  const track = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-ivory/10 py-6">
      <div className="marquee-track flex whitespace-nowrap">
        {track.map((item, i) => (
          <span
            key={i}
            className="font-serif italic text-2xl md:text-3xl text-ivory-dim mx-6 flex items-center gap-6"
          >
            {item}
            <span className="text-gold text-base not-italic">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}