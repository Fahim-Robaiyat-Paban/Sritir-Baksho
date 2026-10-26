export const navLinks = [
  { id: "home", label: "হোম", href: "/" },
  { id: "games", label: "খেলা", href: "/games" },
  { id: "stories", label: "গল্প", href: "/stories" },
  { id: "gallery", label: "গ্যালারি", href: "/gallery" },
  { id: "quiz", label: "কুইজ", href: "/quiz" },
];

export const footerLinks = [
  { id: "about", label: "আমাদের কথা", href: "/about" },
  { id: "contact", label: "যোগাযোগ", href: "/about#contact" },
  { id: "privacy", label: "গোপনীয়তা", href: "/privacy" },
  { id: "terms", label: "শর্তাবলী", href: "/privacy#terms" },
];

// TODO: replace with the real social profile URLs
export const socialLinks = [
  { id: "facebook", label: "Facebook", href: "https://facebook.com" },
  { id: "youtube", label: "YouTube", href: "https://youtube.com" },
  { id: "instagram", label: "Instagram", href: "https://instagram.com" },
];

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://smritirbaksho.com";
