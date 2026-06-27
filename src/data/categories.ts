import type { Category, CategoryId } from "@/types";

export const categories: Category[] = [
  {
    id: "educational",
    slug: "educational",
    title: "الخدمات التعليمية",
    description: "سير ذاتية، أبحاث، مشاريع تخرج، تقديم كليات ومنح دراسية.",
    emoji: "🎓",
    icon: "GraduationCap",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: "government",
    slug: "government",
    title: "الخدمات الحكومية",
    description: "مصر الرقمية، الشهر العقاري، السجل التجاري والتأمينات.",
    emoji: "🏛️",
    icon: "Landmark",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "employment",
    slug: "employment",
    title: "خدمات التوظيف",
    description: "التقديم على الوظائف الحكومية والبنوك والشركات ومتابعتها.",
    emoji: "💼",
    icon: "Briefcase",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    id: "housing",
    slug: "housing",
    title: "خدمات الإسكان والعقارات",
    description: "الإسكان الاجتماعي والمتوسط والمتميز وملفات التصالح.",
    emoji: "🏠",
    icon: "Home",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    id: "utilities",
    slug: "utilities",
    title: "خدمات المرافق",
    description: "عدادات الكهرباء والمياه ومتابعة طلبات المرافق.",
    emoji: "⚡",
    icon: "Zap",
    gradient: "from-yellow-500 to-amber-600",
  },
  {
    id: "business",
    slug: "business",
    title: "خدمات الأعمال والشركات",
    description: "تأسيس الشركات، السجل التجاري، البطاقة الضريبية والتأمينات.",
    emoji: "🏢",
    icon: "Building2",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "marketing",
    slug: "marketing",
    title: "الخدمات التسويقية",
    description: "إدارة السوشيال ميديا، الإعلانات الممولة وتحسين محركات البحث.",
    emoji: "📢",
    icon: "Megaphone",
    gradient: "from-fuchsia-500 to-purple-600",
  },
  {
    id: "design",
    slug: "design",
    title: "خدمات التصميم والطباعة",
    description: "كروت الأفراح والمناسبات، الشهادات والدعوات الإلكترونية.",
    emoji: "🎨",
    icon: "Palette",
    gradient: "from-violet-500 to-indigo-600",
  },
  {
    id: "booking",
    slug: "booking",
    title: "خدمات الحجز والمواعيد",
    description: "حجز مواعيد البنوك والشهر العقاري والجهات الحكومية.",
    emoji: "📅",
    icon: "CalendarCheck",
    gradient: "from-teal-500 to-emerald-600",
  },
];

export const categoryMap: Record<CategoryId, Category> = categories.reduce(
  (acc, category) => {
    acc[category.id] = category;
    return acc;
  },
  {} as Record<CategoryId, Category>,
);

export function getCategory(id: CategoryId): Category {
  return categoryMap[id];
}
