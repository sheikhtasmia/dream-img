export type AlbumImage = {
  src: string;
  alt: string;
};

export type Album = {
  slug: string;
  title: string;
  event: string;
  date: string;
  location: string;
  excerpt: string;
  cover: AlbumImage;
  images: AlbumImage[];
};

// Placeholder gallery data. Replace `cover.src` and each `images[].src`
// with real photos once the client provides them — the seed values below
// only exist so every card/album shows a distinct placeholder photo.
function ph(seed: string, w: number, h: number) {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
}

export const albums: Album[] = [
  {
    // Real photos: swap the placeholder question marks below for this couple's
    // actual ceremony/location once you have them — everything else is real.
    slug: "rs-fahim-manjia",
    title: "RS Fahim & Manjia",
    event: "Wedding",
    date: "2024-02-14",
    location: "Dhaka",
    excerpt: "A wedding covered end to end one of our most-followed galleries.",
    cover: { src: "/rsfahim.jpg", alt: "RS Fahim and Manjia, wedding cover photo" },
    images: [
      { src: "/rsfahim.jpg", alt: "RS Fahim and Manjia, wedding portrait" },
      { src: "/rsfahim1.jpg", alt: "RS Fahim and Manjia, ceremony moment" },
      { src: "/rsfahim2.jpg", alt: "RS Fahim and Manjia, candid portrait" },
      { src: "/rsfahim3.jpg", alt: "RS Fahim and Manjia, detail shot" },
      { src: "/rsfahim4.jpg", alt: "RS Fahim and Manjia, family moment" },
      { src: "/rsfahim5.jpg", alt: "RS Fahim and Manjia, reception" },
      { src: "/rsfahim6.jpg", alt: "RS Fahim and Manjia, candid moment" },
      { src: "/rsfahim7.jpg", alt: "RS Fahim and Manjia, portrait" },
      { src: "/rsfahim8.jpg", alt: "RS Fahim and Manjia, guests" },
      { src: "/rsfahim9.jpg", alt: "RS Fahim and Manjia, closing moment" },
      { src: "/rsfahim10.jpg", alt: "RS Fahim and Manjia, final portrait" },
    ],
  },
  {
    slug: "nafisa-masum",
    title: "Nafisa & Masum",
    event: "Wedding",
    date: "2026-05-20",
    location: "Dhaka",
    excerpt: "",
    cover: { src: "/nafisa.jpg", alt: "RS Fahim and Manjia, wedding cover photo" },
    images: [
      { src: "/nafisa1.jpg", alt: "Nafisa and Masum, wedding portrait" },
      { src: "/nafisa2.jpg", alt: "Nafisa and Masum, ceremony moment" },
      { src: "/nafisa3.jpg", alt: "Nafisa and Masum, candid portrait" },
      { src: "/nafisa4.jpg", alt: "Nafisa and Masum, detail shot" },
      { src: "/nafisa5.jpg", alt: "Nafisa and Masum, family moment" },
      { src: "/nafisa6.jpg", alt: "Nafisa and Masum, reception" },
      { src: "/nafisa7.jpg", alt: "Nafisa and Masum, candid moment" },
      { src: "/nafisa8.jpg", alt: "Nafisa and Masum, portrait" },
      { src: "/nafisa9.jpg", alt: "Nafisa and Masum, closing moment" },
      { src: "/nafisa10.jpg", alt: "Nafisa and Masum, final portrait" },
      { src: "/nafisa11.jpg", alt: "Nafisa and Masum, detail shot" },
      { src: "/nafisa12.jpg", alt: "Nafisa and Masum, family moment" },
      { src: "/nafisa13.jpg", alt: "Nafisa and Masum, reception" },
      { src: "/nafisa14.jpg", alt: "Nafisa and Masum, candid moment" },
      { src: "/nafisa15.jpg", alt: "Nafisa and Masum, portrait" },
      { src: "/nafisa16.jpg", alt: "Nafisa and Masum, closing moment" },
    ],
  },
  {
    slug: "Sayma",
    title: "Sayma",
    event: "Holud",
    date: "2026-2-21",
    location: "Dhaka",
    excerpt: "A yellow-and-marigold holud evening, full of dance and candid laughter.",
    cover: { src: "/sayma.jpg", alt: "Sayma, holud cover photo" },
    images: [
      { src: "/sayma1.jpg", alt: "Sayma, holud portrait" },
      { src: "/sayma2.jpg", alt: "Sayma, ceremony moment" },
      { src: "/sayma3.jpg", alt: "Sayma, candid portrait" },
      { src: "/sayma4.jpg", alt: "Sayma, detail shot" },
      { src: "/sayma5.jpg", alt: "Sayma, family moment" },
      { src: "/sayma6.jpg", alt: "Sayma, reception" },
      { src: "/sayma7.jpg", alt: "Sayma, candid moment" },
      { src: "/sayma8.jpg", alt: "Sayma, portrait" },
    ],
  },
  {
    slug: "sama-tonmoy",
    title: "Sama & Tonmoy",
    event: "Akdh",
    date: "2024-08-09",
    location: "Dhaka",
    excerpt: "An intimate nikah ceremony, shot in soft light.",
    cover: { src: "/sama.jpg", alt: "Sama and Tonmoy, wedding cover photo" },
    images: [
      { src: "/sama.jpg", alt: "Sama and Tonmoy, wedding portrait" },
      { src: "/sama1.jpg", alt: "Sama and Tonmoy, ceremony moment" },
      { src: "/sama2.jpg", alt: "Sama and Tonmoy, candid portrait" },
      { src: "/sama3.jpg", alt: "Sama and Tonmoy, detail shot" },
      { src: "/sama4.jpg", alt: "Sama and Tonmoy, family moment" },
      { src: "/sama5.jpg", alt: "Sama and Tonmoy, reception" },
      { src: "/sama6.jpg", alt: "Sama and Tonmoy, candid moment" },
      { src: "/sama7.jpg", alt: "Sama and Tonmoy, portrait" },
    ],
  },
  {
    slug: "rajan-mourita",
    title: "Rajan & Mourita",
    event: "Pre-wedding",
    date: "2025-10-09",
    location: "Dhaka",
    excerpt: "A destination-style resort wedding with lake-side portraits at sunset.",
    cover: { src: "/rajan.jpg", alt: "Rajan and Mourita, wedding cover photo" },
    images: [
      { src: "/rajan.jpg", alt: "Rajan and Mourita, wedding portrait" },
      { src: "/rajan1.jpg", alt: "Rajan and Mourita, ceremony moment" },
      { src: "/rajan2.jpg", alt: "Rajan and Mourita, candid portrait" },
      { src: "/rajan3.jpg", alt: "Rajan and Mourita, detail shot" },
      { src: "/rajan4.jpg", alt: "Rajan and Mourita, family moment" },
      { src: "/rajan5.jpg", alt: "Rajan and Mourita, reception" },
      { src: "/rajan6.jpg", alt: "Rajan and Mourita, candid moment" },
      { src: "/rajan7.jpg", alt: "Rajan and Mourita, portrait" },
      { src: "/rajan8.jpg", alt: "Rajan and Mourita, guests" },
      { src: "/rajan9.jpg", alt: "Rajan and Mourita, closing moment" },
      { src: "/rajan10.jpg", alt: "Rajan and Mourita, final portrait" },
    ],
  },
  {
    slug: "omi-silvia",
    title: "Omi & Silvia",
    event: "Reception",
    date: "2025-12-14",
    location: "Dhaka",
    excerpt: "A reception, styled in ivory and gold.",
    cover: { src: "/omi.jpg", alt: "Omi and Silvia, wedding cover photo" },
    images: [
      { src: "/omi.jpg", alt: "Omi and Silvia, wedding portrait" },
      { src: "/omi1.jpg", alt: "Omi and Silvia, ceremony moment" },
      { src: "/omi2.jpg", alt: "Omi and Silvia, candid portrait" },
      { src: "/omi3.jpg", alt: "Omi and Silvia, detail shot" },
      { src: "/omi4.jpg", alt: "Omi and Silvia, family moment" },
      { src: "/omi5.jpg", alt: "Omi and Silvia, reception" },
      { src: "/omi6.jpg", alt: "Omi and Silvia, candid moment" },
      { src: "/omi7.jpg", alt: "Omi and Silvia, portrait" },
      { src: "/omi8.jpg", alt: "Omi and Silvia, guests" },
      { src: "/omi9.jpg", alt: "Omi and Silvia, closing moment" },
      { src: "/omi10.jpg", alt: "Omi and Silvia, final portrait" },
    ],
  },
    {
    slug: "fazrin",
    title: "Fazrin",
    event: "Birthday",
    date: "2025-11-08",
    location: "Dhaka",
    excerpt: "",
    cover: { src: "/fazrin.jpg", alt: "Fazrin, birthday cover photo" },
    images: [
      { src: "/fazrin.jpg", alt: "Fazrin, birthday portrait" },
      { src: "/fazrin1.jpg", alt: "Fazrin, ceremony moment" },
      { src: "/fazrin2.jpg", alt: "Fazrin, candid portrait" },
      { src: "/fazrin3.jpg", alt: "Fazrin, detail shot" },
      { src: "/fazrin4.jpg", alt: "Fazrin, family moment" },
      { src: "/fazrin5.jpg", alt: "Fazrin, reception" },
    ],
  },
];

export function getAlbumBySlug(slug: string) {
  return albums.find((a) => a.slug === slug);
}