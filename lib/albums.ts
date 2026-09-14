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
      { src: "/rsfahim11.jpg", alt: "RS Fahim and Manjia, wedding portrait" },
      { src: "/rsfahim12.jpg", alt: "RS Fahim and Manjia, ceremony moment" },
      { src: "/rsfahim13.jpg", alt: "RS Fahim and Manjia, candid portrait" },
      { src: "/rsfahim14.jpg", alt: "RS Fahim and Manjia, detail shot" },
      { src: "/rsfahim15.jpg", alt: "RS Fahim and Manjia, family moment" },
      { src: "/rsfahim16.jpg", alt: "RS Fahim and Manjia, candid moment" },
      { src: "/rsfahim17.jpg", alt: "RS Fahim and Manjia, portrait" },
      { src: "/rsfahim18.jpg", alt: "RS Fahim and Manjia, guests" },
      { src: "/rsfahim19.jpg", alt: "RS Fahim and Manjia, closing moment" },
      { src: "/rsfahim20.jpg", alt: "RS Fahim and Manjia, final portrait" },
    ],
  },
  {
    slug: "jabin-emran",
    title: "Jabin & Emran",
    event: "Wedding",
    date: "2026-05-20",
    location: "Dhaka",
    excerpt: "",
    cover: { src: "/jebin.jpg", alt: "Jabin and Emran, wedding cover photo" },
    images: [
      { src: "/jebin.jpg", alt: "Jabin and Emran, wedding portrait" },
      { src: "/jebin1.jpg", alt: "Jabin and Emran, ceremony moment" },
      { src: "/jebin2.jpg", alt: "Jabin and Emran, candid portrait" },
      { src: "/jebin3.jpg", alt: "Jabin and Emran, detail shot" },
      { src: "/jebin4.jpg", alt: "Jabin and Emran, family moment" },
      { src: "/jebin5.jpg", alt: "Jabin and Emran, reception" },
      { src: "/jebin6.jpg", alt: "Jabin and Emran, candid moment" },
      { src: "/jebin7.jpg", alt: "Jabin and Emran, portrait" },
      { src: "/jebin8.jpg", alt: "Jabin and Emran, closing moment" },
      { src: "/jebin9.jpg", alt: "Jabin and Emran, final portrait" },
      { src: "/jebin10.jpg", alt: "Jabin and Emran, detail shot" },
      { src: "/jebin11.jpg", alt: "Jabin and Emran, family moment" },    
    ],
  },
  {
    slug: "50th",
    title: "50th anniversary",
    event: "Anniversary",
    date: "2026-2-21",
    location: "Dhaka",
    excerpt: "A golden anniversary celebration, with a family portrait session.",
    cover: { src: "/50th.jpg", alt: "Sayma, holud cover photo" },
    images: [
      { src: "/50th.jpg", alt: "Sayma, holud portrait" },
      { src: "/50th1.jpg", alt: "Sayma, ceremony moment" },
      { src: "/50th2.jpg", alt: "Sayma, candid portrait" },
      { src: "/50th3.jpg", alt: "Sayma, detail shot" },
      { src: "/50th4.jpg", alt: "Sayma, family moment" },
      { src: "/50th5.jpg", alt: "Sayma, reception" },
      { src: "/50th6.jpg", alt: "Sayma, candid moment" },
      { src: "/50th7.jpg", alt: "Sayma, portrait" },
      { src: "/50th8.jpg", alt: "Sayma, family moment" },
      { src: "/50th9.jpg", alt: "Sayma, reception" },
      { src: "/50th10.jpg", alt: "Sayma, candid moment" },
      { src: "/50th11.jpg", alt: "Sayma, portrait" },
      { src: "/50th14.jpg", alt: "Sayma, family moment" },
      { src: "/50th12.jpg", alt: "Sayma, reception" },
      { src: "/50th16.jpg", alt: "Sayma, candid moment" },
      { src: "/50th13.jpg", alt: "Sayma, portrait" },


    ],
  },
  {
    slug: "juthy-sharan",
    title: "Juthy & Sharan",
    event: "",
    date: "2024-08-09",
    location: "Dhaka",
    excerpt: "An intimate nikah ceremony, shot in soft light.",
    cover: { src: "/juthy.jpg", alt: "Juthy and Sharan, wedding cover photo" },
    images: [
      { src: "/juthy.jpg", alt: "Juthy and Sharan, wedding portrait" },
      { src: "/juthy1.jpg", alt: "Juthy and Sharan, ceremony moment" },
      { src: "/juthy2.jpg", alt: "Juthy and Sharan, candid portrait" },
      { src: "/juthy3.jpg", alt: "Juthy and Sharan, detail shot" },
      { src: "/juthy4.jpg", alt: "Juthy and Sharan, family moment" },
      { src: "/juthy5.jpg", alt: "Juthy and Sharan, reception" },
      { src: "/juthy6.jpg", alt: "Juthy and Sharan, candid moment" },
      { src: "/juthy7.jpg", alt: "Juthy and Sharan, portrait" },
      { src: "/juthy8.jpg", alt: "Juthy and Sharan, guests" },
      { src: "/juthy9.jpg", alt: "Juthy and Sharan, closing moment" },
      { src: "/juthy10.jpg", alt: "Juthy and Sharan, final portrait" },
      {src: "/juthy11.jpg", alt: "Juthy and Sharan, wedding portrait" },
      {src: "/juthy12.jpg", alt: "Juthy and Sharan, wedding portrait" },
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
      { src: "/rajan11.jpg", alt: "Rajan and Mourita, wedding portrait" },
      { src: "/rajan12.jpg", alt: "Rajan and Mourita, candid portrait" },
      { src: "/rajan13.jpg", alt: "Rajan and Mourita, detail shot" },
      { src: "/rajan14.jpg", alt: "Rajan and Mourita, family moment" },
      { src: "/rajan15.jpg", alt: "Rajan and Mourita, reception" },
      { src: "/rajan16.jpg", alt: "Rajan and Mourita, candid moment" },
      { src: "/rajan17.jpg", alt: "Rajan and Mourita, portrait" },
      { src: "/rajan18.jpg", alt: "Rajan and Mourita, guests" },
      { src: "/rajan19.jpg", alt: "Rajan and Mourita, closing moment" },
      { src: "/rajan20.jpg", alt: "Rajan and Mourita, final portrait" },
     { src: "/rajan21.jpg", alt: "Rajan and Mourita, reception" },
      { src: "/rajan22.jpg", alt: "Rajan and Mourita, portrait" },
      { src: "/rajan23.jpg", alt: "Rajan and Mourita, guests" },
      { src: "/rajan24.jpg", alt: "Rajan and Mourita, closing moment" },
      { src: "/rajan25.jpg", alt: "Rajan and Mourita, final portrait" },
    ],
  },
  {
    slug: "oishi-sabbir",
    title: "Oishi & Sabbir",
    event: "Photoshoot cox-bazar",
    date: "2025-12-14",
    location: "Dhaka",
    excerpt: "",
    cover: { src: "/sabbir.jpg", alt: "Oishi and Sabbir, wedding cover photo" },
    images: [
      { src: "/sabbir.jpg", alt: "Oishi and Sabbir, wedding portrait" },
      { src: "/sabbir1.jpg", alt: "Oishi and Sabbir, ceremony moment" },
      { src: "/sabbir2.jpg", alt: "Oishi and Sabbir, candid portrait" },
      { src: "/sabbir3.jpg", alt: "Oishi and Sabbir, detail shot" },
      { src: "/sabbir4.jpg", alt: "Oishi and Sabbir, family moment" },
      { src: "/sabbir5.jpg", alt: "Oishi and Sabbir, reception" },
      { src: "/sabbir6.jpg", alt: "Oishi and Sabbir, candid moment" },
      { src: "/sabbir7.jpg", alt: "Oishi and Sabbir, portrait" },
      { src: "/sabbir8.jpg", alt: "Oishi and Sabbir, wedding portrait" },
      { src: "/sabbir9.jpg", alt: "Oishi and Sabbir, ceremony moment" },
      { src: "/sabbir10.jpg", alt: "Oishi and Sabbir, candid portrait" },
      { src: "/sabbir11.jpg", alt: "Oishi and Sabbir, detail shot" },
      { src: "/sabbir14.jpg", alt: "Oishi and Sabbir, family moment" },
      { src: "/sabbir15.jpg", alt: "Oishi and Sabbir, reception" },
      { src: "/sabbir16.jpg", alt: "Oishi and Sabbir, candid moment" },
      { src: "/sabbir17.jpg", alt: "Oishi and Sabbir, portrait" },
      { src: "/sabbir18.jpg", alt: "Oishi and Sabbir, wedding portrait" },
      { src: "/sabbir19.jpg", alt: "Oishi and Sabbir, ceremony moment" },
      { src: "/sabbir20.jpg", alt: "Oishi and Sabbir, candid portrait" },
      { src: "/sabbir23.jpg", alt: "Oishi and Sabbir, detail shot" },
      { src: "/sabbir24.jpg", alt: "Oishi and Sabbir, family moment" },
      { src: "/sabbir21.jpg", alt: "Oishi and Sabbir, reception" },
      { src: "/sabbir22.jpg", alt: "Oishi and Sabbir, candid moment" },
      { src: "/sabbir23.jpg", alt: "Oishi and Sabbir, portrait" },

    ],
  },
    {
    slug: "lamha-fuad",
    title: "Lamha & Fuad",
    event: "",
    date: "2025-11-08",
    location: "Dhaka",
    excerpt: "",
    cover: { src: "/fuad.jpg", alt: "Fazrin, birthday cover photo" },
    images: [
      { src: "/fuad.jpg", alt: "Fazrin, birthday portrait" },
      { src: "/fuad1.jpg", alt: "Fazrin, ceremony moment" },
      { src: "/fuad2.jpg", alt: "Fazrin, candid portrait" },
      { src: "/fuad3.jpg", alt: "Fazrin, detail shot" },
      { src: "/fuad4.jpg", alt: "Fazrin, family moment" },
      { src: "/fuad5.jpg", alt: "Fazrin, reception" },
      { src: "/fuad6.jpg", alt: "Fazrin, birthday portrait" },
      { src: "/fuad7.jpg", alt: "Fazrin, ceremony moment" },
      { src: "/fuad8.jpg", alt: "Fazrin, candid portrait" },
      { src: "/fuad9.jpg", alt: "Fazrin, detail shot" },
      { src: "/fuad10.jpg", alt: "Fazrin, family moment" },
      { src: "/fuad11.jpg", alt: "Fazrin, reception" },
      { src: "/fuad12.jpg", alt: "Fazrin, birthday moment" },
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
      { src: "/fazrin6.jpg", alt: "Fazrin, birthday portrait" },
      { src: "/fazrin7.jpg", alt: "Fazrin, ceremony moment" },
      { src: "/fazrin8.jpg", alt: "Fazrin, candid portrait" },
      { src: "/fazrin9.jpg", alt: "Fazrin, detail shot" },
      { src: "/fazrin10.jpg", alt: "Fazrin, family moment" },
      { src: "/fazrin11.jpg", alt: "Fazrin, reception" },
      { src: "/fazrin12.jpg", alt: "Fazrin, birthday moment" },
    ],
  },

];


export function getAlbumBySlug(slug: string) {
  return albums.find((a) => a.slug === slug);
}