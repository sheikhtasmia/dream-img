export const siteConfig = {
  name: "Dream Images",
  shortName: "Dream Images",
  tagline: "Exclusive Wedding Photography & Cinematography",
  description:
    "Dream Images is an exclusive wedding photography and cinematography studio based in Savar, Dhaka, trusted by families across Bangladesh for over a decade.",
  url: "https://www.dreamimagesbd.com",
  phone: "+8801880719315",
  phoneDisplay: "01880-719315",
  whatsapp: "https://wa.me/8801880719315",
  email: "dreamimages47@gmail.com",
  // Create a form at https://formspree.io (free tier works), then replace
  // this with your real endpoint, e.g. "https://formspree.io/f/abcdwxyz".
  formspreeEndpoint: "https://formspree.io/f/REPLACE_ME",
  address: {
    locality: "Savar",
    region: "Dhaka Division",
    country: "Bangladesh",
    full: "Savar, Dhaka, Bangladesh",
  },
  social: {
    instagram: "https://instagram.com/dream_images.bd",
    facebook: "https://www.facebook.com/bddreamimages",
    youtube: "https://www.youtube.com/channel/UCDCLzPlB-VMUosf6FGl0aeA",
  },
  founded: 2013,
  nav: [
    { label: "Frames & Films", href: "/frames-films" },
    { label: "Packages", href: "/packages" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;