import Link from "next/link";
import Image from "next/image";
import type { Album } from "@/lib/albums";
import Tilt from "./Tilt";

export default function AlbumCard({
  album,
  priority = false,
  size = "regular",
}: {
  album: Album;
  priority?: boolean;
  size?: "large" | "regular" | "small";
}) {
  const heightClass =
    size === "large" ? "h-[440px] md:h-[560px]" : size === "small" ? "h-56 md:h-72" : "h-80 md:h-96";
  const titleClass = size === "large" ? "text-2xl md:text-3xl" : "text-lg";

  return (
    <Tilt className={heightClass} max={6}>
      <Link href={`/frames-films/${album.slug}`} className="frame block h-full w-full group shadow-lg shadow-ivory/5">
        <Image
          src={album.cover.src}
          alt={album.cover.alt}
          fill
          priority={priority}
          sizes={size === "large" ? "100vw" : "(min-width: 768px) 33vw, 50vw"}
          className="object-cover"
        />
        <div className="caption always-visible">
          <span className={`font-serif text-caption block ${titleClass}`}>{album.title}</span>
          <span className="font-sans font-light text-xs text-caption-dim">
            {album.event} &middot; {album.location}
          </span>
        </div>
      </Link>
    </Tilt>
  );
}