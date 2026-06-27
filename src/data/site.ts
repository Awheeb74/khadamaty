// Central site configuration. Contact details live here so they can be
// swapped in one place when the business information changes.

export const siteConfig = {
  name: "خدماتي",
  nameEn: "Khadamaty",
  shortDescription: "جميع خدماتك الإلكترونية في مكان واحد",
  description:
    "منصة خدماتي تقدم الخدمات الحكومية والتعليمية وخدمات الشركات والتوظيف والإسكان والتسويق لجميع محافظات مصر بسرعة واحترافية.",
  url: "https://khadamaty.eg",
  locale: "ar_EG",
  // Egyptian WhatsApp number in international format (digits only).
  whatsappNumber: "201068486449",
  phoneDisplay: "01068486449",
  phoneHref: "+201068486449",
  email: "ahmed.wheeb00@gmail.com",
  branches: [
    {
      name: "الفرع الأول",
      address: "المنوفية - سرس الليان - بجوار صيدلية شرشر",
      phone: "01068486449",
    },
    {
      name: "الفرع الثاني",
      address: "المنوفية - منوف - أمام بنزينة مصر للبترول",
      phone: "01068486449",
    },
  ],
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
    tiktok: "https://tiktok.com",
  },
} as const;

export const navLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "الخدمات", href: "/services" },
  { label: "من نحن", href: "/about" },
  { label: "الأسئلة الشائعة", href: "/faq" },
  { label: "تواصل معنا", href: "/contact" },
] as const;
