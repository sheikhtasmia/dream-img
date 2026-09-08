import { getAlbumBySlug } from "./albums";

export type Service = {
  name: string;
  description: string;
  image: string;
  /** Slug of a matching album in lib/albums.ts. Leave undefined to link to
   * the general Frames & Films gallery instead (until a dedicated album
   * for this service exists). */
  albumSlug?: string;
};

// Each card links to `/frames-films/{albumSlug}` when set, otherwise falls
// back to `/frames-films`. Once you shoot a dedicated album for a service
// that doesn't have one yet (Pre-Wedding, Reception, Birthday, University/
// College programs), just add its slug here — the image can also be swapped
// to that album's cover.
export const services: Service[] = [
  {
    name: "Wedding",
    description: "Full-day coverage across every ceremony, from arrival to the final dance.",
    image: "/rsfahim.jpg",
    albumSlug: "rs-fahim-manjia",
  },
  {
    name: "Holud",
    description: "Candid, colourful coverage of the holud evening dance, decor, and details.",
    image: "/sayma.jpg",
    albumSlug: "Sayma",
  },
  {
    name: "Akd & Nikah",
    description: "Intimate documentation of the signing and blessing, with close family.",
    image: "/sama.jpg",
    albumSlug: "sama-tonmoy",
  },
  {
    name: "Pre-Wedding",
    description: "A relaxed shoot before the big day, at a location that means something to you.",
    image: "/rajan.jpg",
    albumSlug: "rajan-mourita",
  },
  {
    name: "Reception",
    description: "Stage entrances, speeches, and the party captured without getting in the way.",
    image: "/omi.jpg",
    albumSlug: "omi-silvia",
  },
  {
    name: "Birthday",
    description: "Milestone birthdays and family celebrations, shot with the same care as a wedding.",
    image: "/fazrin.jpg",
    albumSlug: "fazrin",
  },
//   {
//     name: "University & College Programs",
//     description: "Farewell, orientation, and cultural programs group and candid coverage.",
//     image: "/rsfahim6.jpg",
//   },
];

export function serviceHref(service: Service): string {
  if (service.albumSlug && getAlbumBySlug(service.albumSlug)) {
    return `/frames-films/${service.albumSlug}`;
  }
  return "/frames-films";
}