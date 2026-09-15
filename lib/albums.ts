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
    cover: { src: "/rsfahim.webp", alt: "RS Fahim and Manjia, wedding cover photo" },
    images: [
      { src: "/rsfahim.webp", alt: "RS Fahim and Manjia, wedding portrait" },
      { src: "/rsfahim1.webp", alt: "RS Fahim and Manjia, ceremony moment" },
      { src: "/rsfahim2.webp", alt: "RS Fahim and Manjia, candid portrait" },
      { src: "/rsfahim3.webp", alt: "RS Fahim and Manjia, detail shot" },
      { src: "/rsfahim4.webp", alt: "RS Fahim and Manjia, family moment" },
      { src: "/rsfahim5.webp", alt: "RS Fahim and Manjia, reception" },
      { src: "/rsfahim6.webp", alt: "RS Fahim and Manjia, candid moment" },
      { src: "/rsfahim7.webp", alt: "RS Fahim and Manjia, portrait" },
      { src: "/rsfahim8.webp", alt: "RS Fahim and Manjia, guests" },
      { src: "/rsfahim9.webp", alt: "RS Fahim and Manjia, closing moment" },
      { src: "/rsfahim10.webp", alt: "RS Fahim and Manjia, final portrait" },
      { src: "/rsfahim11.webp", alt: "RS Fahim and Manjia, wedding portrait" },
      { src: "/rsfahim12.webp", alt: "RS Fahim and Manjia, ceremony moment" },
      { src: "/rsfahim13.webp", alt: "RS Fahim and Manjia, candid portrait" },
      { src: "/rsfahim14.webp", alt: "RS Fahim and Manjia, detail shot" },
      { src: "/rsfahim15.webp", alt: "RS Fahim and Manjia, family moment" },
      { src: "/rsfahim16.webp", alt: "RS Fahim and Manjia, candid moment" },
      { src: "/rsfahim17.webp", alt: "RS Fahim and Manjia, portrait" },
      { src: "/rsfahim18.webp", alt: "RS Fahim and Manjia, guests" },
      { src: "/rsfahim19.webp", alt: "RS Fahim and Manjia, closing moment" },
      { src: "/rsfahim20.webp", alt: "RS Fahim and Manjia, final portrait" },
    ],
  },
  {
    slug: "jabin-emran",
    title: "Jabin & Emran",
    event: "Wedding",
    date: "2026-05-20",
    location: "Dhaka",
    excerpt: "",
    cover: { src: "/jebin.webp", alt: "Jabin and Emran, wedding cover photo" },
    images: [
      { src: "/jebin.webp", alt: "Jabin and Emran, wedding portrait" },
      { src: "/jebin1.webp", alt: "Jabin and Emran, ceremony moment" },
      { src: "/jebin2.webp", alt: "Jabin and Emran, candid portrait" },
      { src: "/jebin3.webp", alt: "Jabin and Emran, detail shot" },
      { src: "/jebin4.webp", alt: "Jabin and Emran, family moment" },
      { src: "/jebin5.webp", alt: "Jabin and Emran, reception" },
      { src: "/jebin6.webp", alt: "Jabin and Emran, candid moment" },
      { src: "/jebin7.webp", alt: "Jabin and Emran, portrait" },
      { src: "/jebin8.webp", alt: "Jabin and Emran, closing moment" },
      { src: "/jebin9.webp", alt: "Jabin and Emran, final portrait" },
      { src: "/jebin10.webp", alt: "Jabin and Emran, detail shot" },
      { src: "/jebin11.webp", alt: "Jabin and Emran, family moment" },    
    ],
  },
  {
    slug: "50th",
    title: "50th anniversary",
    event: "Anniversary",
    date: "2026-2-21",
    location: "Dhaka",
    excerpt: "A golden anniversary celebration, with a family portrait session.",
    cover: { src: "/50th.webp", alt: "Sayma, holud cover photo" },
    images: [
      { src: "/50th.webp", alt: "Sayma, holud portrait" },
      { src: "/50th1.webp", alt: "Sayma, ceremony moment" },
      { src: "/50th2.webp", alt: "Sayma, candid portrait" },
      { src: "/50th3.webp", alt: "Sayma, detail shot" },
      { src: "/50th4.webp", alt: "Sayma, family moment" },
      { src: "/50th5.webp", alt: "Sayma, reception" },
      { src: "/50th6.webp", alt: "Sayma, candid moment" },
      { src: "/50th7.webp", alt: "Sayma, portrait" },
      { src: "/50th8.webp", alt: "Sayma, family moment" },
      { src: "/50th9.webp", alt: "Sayma, reception" },
      { src: "/50th10.webp", alt: "Sayma, candid moment" },
      { src: "/50th11.webp", alt: "Sayma, portrait" },
      { src: "/50th14.webp", alt: "Sayma, family moment" },
      { src: "/50th12.webp", alt: "Sayma, reception" },
      { src: "/50th16.webp", alt: "Sayma, candid moment" },
      { src: "/50th13.webp", alt: "Sayma, portrait" },


    ],
  },
  {
    slug: "juthy-sharan",
    title: "Juthy & Sharan",
    event: "",
    date: "2024-08-09",
    location: "Dhaka",
    excerpt: "An intimate nikah ceremony, shot in soft light.",
    cover: { src: "/juthy.webp", alt: "Juthy and Sharan, wedding cover photo" },
    images: [
      { src: "/juthy.webp", alt: "Juthy and Sharan, wedding portrait" },
      { src: "/juthy1.webp", alt: "Juthy and Sharan, ceremony moment" },
      { src: "/juthy2.webp", alt: "Juthy and Sharan, candid portrait" },
      { src: "/juthy3.webp", alt: "Juthy and Sharan, detail shot" },
      { src: "/juthy4.webp", alt: "Juthy and Sharan, family moment" },
      { src: "/juthy5.webp", alt: "Juthy and Sharan, reception" },
      { src: "/juthy6.webp", alt: "Juthy and Sharan, candid moment" },
      { src: "/juthy7.webp", alt: "Juthy and Sharan, portrait" },
      { src: "/juthy8.webp", alt: "Juthy and Sharan, guests" },
      { src: "/juthy9.webp", alt: "Juthy and Sharan, closing moment" },
      { src: "/juthy10.webp", alt: "Juthy and Sharan, final portrait" },
      {src: "/juthy11.webp", alt: "Juthy and Sharan, wedding portrait" },
      {src: "/juthy12.webp", alt: "Juthy and Sharan, wedding portrait" },
    ],
  },
  {
    slug: "rajan-mourita",
    title: "Rajan & Mourita",
    event: "Pre-wedding",
    date: "2025-10-09",
    location: "Dhaka",
    excerpt: "A destination-style resort wedding with lake-side portraits at sunset.",
    cover: { src: "/rajan.webp", alt: "Rajan and Mourita, wedding cover photo" },
    images: [
      { src: "/rajan.webp", alt: "Rajan and Mourita, wedding portrait" },
      { src: "/rajan1.webp", alt: "Rajan and Mourita, ceremony moment" },
      { src: "/rajan2.webp", alt: "Rajan and Mourita, candid portrait" },
      { src: "/rajan3.webp", alt: "Rajan and Mourita, detail shot" },
      { src: "/rajan4.webp", alt: "Rajan and Mourita, family moment" },
      { src: "/rajan5.webp", alt: "Rajan and Mourita, reception" },
      { src: "/rajan6.webp", alt: "Rajan and Mourita, candid moment" },
      { src: "/rajan7.webp", alt: "Rajan and Mourita, portrait" },
      { src: "/rajan8.webp", alt: "Rajan and Mourita, guests" },
      { src: "/rajan9.webp", alt: "Rajan and Mourita, closing moment" },
      { src: "/rajan10.webp", alt: "Rajan and Mourita, final portrait" },
      { src: "/rajan11.webp", alt: "Rajan and Mourita, wedding portrait" },
      { src: "/rajan12.webp", alt: "Rajan and Mourita, candid portrait" },
      { src: "/rajan13.webp", alt: "Rajan and Mourita, detail shot" },
      { src: "/rajan14.webp", alt: "Rajan and Mourita, family moment" },
      { src: "/rajan15.webp", alt: "Rajan and Mourita, reception" },
      { src: "/rajan16.webp", alt: "Rajan and Mourita, candid moment" },
      { src: "/rajan17.webp", alt: "Rajan and Mourita, portrait" },
      { src: "/rajan18.webp", alt: "Rajan and Mourita, guests" },
      { src: "/rajan19.webp", alt: "Rajan and Mourita, closing moment" },
      { src: "/rajan20.webp", alt: "Rajan and Mourita, final portrait" },
     { src: "/rajan21.webp", alt: "Rajan and Mourita, reception" },
      { src: "/rajan22.webp", alt: "Rajan and Mourita, portrait" },
      { src: "/rajan23.webp", alt: "Rajan and Mourita, guests" },
      { src: "/rajan24.webp", alt: "Rajan and Mourita, closing moment" },
      { src: "/rajan25.webp", alt: "Rajan and Mourita, final portrait" },
    ],
  },
  {
    slug: "oishi-sabbir",
    title: "Oishi & Sabbir",
    event: "Photoshoot cox-bazar",
    date: "2025-12-14",
    location: "Dhaka",
    excerpt: "",
    cover: { src: "/sabbir.webp", alt: "Oishi and Sabbir, wedding cover photo" },
    images: [
      { src: "/sabbir.webp", alt: "Oishi and Sabbir, wedding portrait" },
      { src: "/sabbir1.webp", alt: "Oishi and Sabbir, ceremony moment" },
      { src: "/sabbir2.webp", alt: "Oishi and Sabbir, candid portrait" },
      { src: "/sabbir3.webp", alt: "Oishi and Sabbir, detail shot" },
      { src: "/sabbir4.webp", alt: "Oishi and Sabbir, family moment" },
      { src: "/sabbir5.webp", alt: "Oishi and Sabbir, reception" },
      { src: "/sabbir6.webp", alt: "Oishi and Sabbir, candid moment" },
      { src: "/sabbir7.webp", alt: "Oishi and Sabbir, portrait" },
      { src: "/sabbir8.webp", alt: "Oishi and Sabbir, wedding portrait" },
      { src: "/sabbir9.webp", alt: "Oishi and Sabbir, ceremony moment" },
      { src: "/sabbir10.webp", alt: "Oishi and Sabbir, candid portrait" },
      { src: "/sabbir11.webp", alt: "Oishi and Sabbir, detail shot" },
      { src: "/sabbir14.webp", alt: "Oishi and Sabbir, family moment" },
      { src: "/sabbir15.webp", alt: "Oishi and Sabbir, reception" },
      { src: "/sabbir16.webp", alt: "Oishi and Sabbir, candid moment" },
      { src: "/sabbir17.webp", alt: "Oishi and Sabbir, portrait" },
      { src: "/sabbir18.webp", alt: "Oishi and Sabbir, wedding portrait" },
      { src: "/sabbir19.webp", alt: "Oishi and Sabbir, ceremony moment" },
      { src: "/sabbir20.webp", alt: "Oishi and Sabbir, candid portrait" },
      { src: "/sabbir23.webp", alt: "Oishi and Sabbir, detail shot" },
      { src: "/sabbir24.webp", alt: "Oishi and Sabbir, family moment" },
      { src: "/sabbir21.webp", alt: "Oishi and Sabbir, reception" },
      { src: "/sabbir22.webp", alt: "Oishi and Sabbir, candid moment" },
      { src: "/sabbir23.webp", alt: "Oishi and Sabbir, portrait" },

    ],
  },
    {
    slug: "lamha-fuad",
    title: "Lamha & Fuad",
    event: "",
    date: "2025-11-08",
    location: "Dhaka",
    excerpt: "",
    cover: { src: "/fuad.webp", alt: "Fazrin, birthday cover photo" },
    images: [
      { src: "/fuad.webp", alt: "Fazrin, birthday portrait" },
      { src: "/fuad1.webp", alt: "Fazrin, ceremony moment" },
      { src: "/fuad2.webp", alt: "Fazrin, candid portrait" },
      { src: "/fuad3.webp", alt: "Fazrin, detail shot" },
      { src: "/fuad4.webp", alt: "Fazrin, family moment" },
      { src: "/fuad5.webp", alt: "Fazrin, reception" },
      { src: "/fuad6.webp", alt: "Fazrin, birthday portrait" },
      { src: "/fuad7.webp", alt: "Fazrin, ceremony moment" },
      { src: "/fuad8.webp", alt: "Fazrin, candid portrait" },
      { src: "/fuad9.webp", alt: "Fazrin, detail shot" },
      { src: "/fuad10.webp", alt: "Fazrin, family moment" },
      { src: "/fuad11.webp", alt: "Fazrin, reception" },
      { src: "/fuad12.webp", alt: "Fazrin, birthday moment" },
    ],
  },

   {
    slug: "fazrin",
    title: "Fazrin",
    event: "Birthday",
    date: "2025-11-08",
    location: "Dhaka",
    excerpt: "",
    cover: { src: "/fazrin.webp", alt: "Fazrin, birthday cover photo" },
    images: [
      { src: "/fazrin.webp", alt: "Fazrin, birthday portrait" },
      { src: "/fazrin1.webp", alt: "Fazrin, ceremony moment" },
      { src: "/fazrin2.webp", alt: "Fazrin, candid portrait" },
      { src: "/fazrin3.webp", alt: "Fazrin, detail shot" },
      { src: "/fazrin4.webp", alt: "Fazrin, family moment" },
      { src: "/fazrin5.webp", alt: "Fazrin, reception" },
      { src: "/fazrin6.webp", alt: "Fazrin, birthday portrait" },
      { src: "/fazrin7.webp", alt: "Fazrin, ceremony moment" },
      { src: "/fazrin8.webp", alt: "Fazrin, candid portrait" },
      { src: "/fazrin9.webp", alt: "Fazrin, detail shot" },
      { src: "/fazrin10.webp", alt: "Fazrin, family moment" },
      { src: "/fazrin11.webp", alt: "Fazrin, reception" },
      { src: "/fazrin12.webp", alt: "Fazrin, birthday moment" },
    ],
  },

];


export function getAlbumBySlug(slug: string) {
  return albums.find((a) => a.slug === slug);
}