import Link from "next/link";
import Image from "next/image";
import type { Album } from "@/lib/albums";

export default function AlbumCard({ album, priority = false }: { album: Album; priority?: boolean }) {
  return (
    <Link href={`/frames-films/${album.slug}`} className="frame block h-80 md:h-96 group transition-transform duration-300 hover:-translate-y-1.5">
      <Image
        src={album.cover.src}
        alt={album.cover.alt}
        fill
        priority={priority}
        sizes="(min-width: 768px) 33vw, 100vw"
        className="object-cover"
      />
      <div className="caption always-visible">
        <span className="font-serif text-lg text-ivory block">{album.title}</span>
        <span className="font-sans font-light text-xs text-ivory-dim">
          {album.event} &middot; {album.location}
        </span>
      </div>
    </Link>
  );
} 
