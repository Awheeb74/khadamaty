import type { Stat, Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "أحمد عبد الله",
    role: "موظف",
    city: "القاهرة",
    rating: 5,
    content:
      "قدمت على الإسكان الاجتماعي من خلالهم وكانت التجربة سهلة جداً ومتابعة ممتازة حتى تم الحجز. أنصح بهم بشدة.",
  },
  {
    id: "t2",
    name: "منى السيد",
    role: "خريجة جديدة",
    city: "الإسكندرية",
    rating: 5,
    content:
      "عملوا لي سيرة ذاتية احترافية ساعدتني في الحصول على وظيفة بسرعة. شكراً لفريق خدماتي على الاحترافية.",
  },
  {
    id: "t3",
    name: "محمد رمضان",
    role: "صاحب نشاط تجاري",
    city: "الجيزة",
    rating: 5,
    content:
      "استخرجت السجل التجاري والبطاقة الضريبية بدون ما أتحرك من مكاني. خدمة سريعة وأسعار محترمة.",
  },
  {
    id: "t4",
    name: "فاطمة علي",
    role: "ربة منزل",
    city: "المنصورة",
    rating: 5,
    content:
      "ساعدوني في حجز موعد الشهر العقاري في وقت قياسي بعد ما تعبت كتير. تعامل راقٍ ومتعاون.",
  },
  {
    id: "t5",
    name: "كريم حسن",
    role: "صاحب متجر إلكتروني",
    city: "طنطا",
    rating: 5,
    content:
      "أداروا حملات الإعلانات الممولة لمتجري وزادت المبيعات بشكل واضح. فريق محترف يفهم في التسويق.",
  },
  {
    id: "t6",
    name: "سارة إبراهيم",
    role: "طالبة دراسات عليا",
    city: "أسيوط",
    rating: 5,
    content:
      "ساعدوني في تنسيق رسالة الماجستير والتوثيق العلمي. دقة عالية والتزام بالمواعيد.",
  },
];

export const stats: Stat[] = [
  { id: "s1", value: 5000, suffix: "+", label: "عميل", icon: "Users" },
  {
    id: "s2",
    value: 12000,
    suffix: "+",
    label: "خدمة منفذة",
    icon: "CheckCircle2",
  },
  { id: "s3", value: 27, suffix: "", label: "محافظة", icon: "MapPin" },
  { id: "s4", value: 10, suffix: "+", label: "سنوات خبرة", icon: "Award" },
];

export interface WhyChooseItem {
  title: string;
  description: string;
  icon: string;
}

export const whyChooseUs: WhyChooseItem[] = [
  {
    title: "خبرة طويلة",
    description: "سنوات من الخبرة في إنهاء الخدمات الحكومية والإلكترونية بكفاءة.",
    icon: "Award",
  },
  {
    title: "سرعة التنفيذ",
    description: "نلتزم بإنجاز طلبك في أسرع وقت ممكن دون تعقيد أو تأخير.",
    icon: "Rocket",
  },
  {
    title: "خدمة جميع المحافظات",
    description: "نخدم كل محافظات مصر إلكترونياً دون حاجة لحضورك.",
    icon: "MapPin",
  },
  {
    title: "دعم مباشر",
    description: "فريق دعم متاح للرد على استفساراتك ومتابعة طلبك عبر واتساب.",
    icon: "Headset",
  },
  {
    title: "أسعار مناسبة",
    description: "أسعار واضحة وتنافسية تناسب الجميع دون رسوم مخفية.",
    icon: "BadgePercent",
  },
  {
    title: "متابعة مستمرة",
    description: "نتابع طلبك خطوة بخطوة ونبلغك بكل جديد حتى الانتهاء.",
    icon: "RefreshCw",
  },
];
