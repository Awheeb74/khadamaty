import type { CategoryId, Service, ServiceFaq, ServiceStep } from "@/types";

/** Default WhatsApp template required by the brief. */
function defaultMessage(title: string): string {
  return [
    "السلام عليكم",
    "",
    `أرغب في طلب خدمة ${title}`,
  ].join("\n");
}

function defaultBenefits(title: string): string[] {
  return [
    `إنجاز ${title} بدقة واحترافية وبأقل مجهود منك.`,
    "فريق متخصص يتابع طلبك خطوة بخطوة حتى الانتهاء.",
    "خدمة متاحة لجميع محافظات مصر بدون الحاجة للحضور.",
    "أسعار واضحة ومناسبة دون أي رسوم مخفية.",
  ];
}

function defaultSteps(title: string): ServiceStep[] {
  return [
    {
      title: "تواصل معنا",
      description: `راسلنا عبر واتساب وحدد رغبتك في ${title}.`,
    },
    {
      title: "إرسال البيانات",
      description: "نرسل لك قائمة بالمستندات والبيانات المطلوبة لإتمام الخدمة.",
    },
    {
      title: "تنفيذ الطلب",
      description: "يبدأ فريقنا في تنفيذ الطلب ومتابعته مع الجهات المختصة.",
    },
    {
      title: "التسليم",
      description: "نسلّمك النتيجة النهائية ونتابع معك أي ملاحظات.",
    },
  ];
}

function defaultFaqs(title: string): ServiceFaq[] {
  return [
    {
      question: `كم يستغرق تنفيذ خدمة ${title}؟`,
      answer:
        "تختلف المدة حسب طبيعة الطلب، ونوضح لك المدة المتوقعة بدقة فور التواصل معنا.",
    },
    {
      question: "هل الخدمة متاحة خارج القاهرة؟",
      answer: "نعم، نخدم جميع محافظات مصر إلكترونياً دون الحاجة للحضور.",
    },
    {
      question: "كيف يتم الدفع؟",
      answer:
        "نتفق على التفاصيل والتكلفة عبر واتساب قبل البدء، وطرق الدفع مرنة ومناسبة.",
    },
  ];
}

interface ServiceInput {
  slug: string;
  title: string;
  category: CategoryId;
  description: string;
  featured?: boolean;
  whatsappMessage?: string;
  benefits?: string[];
  steps?: ServiceStep[];
  faqs?: ServiceFaq[];
}

function svc(input: ServiceInput): Service {
  return {
    id: input.slug,
    slug: input.slug,
    title: input.title,
    description: input.description,
    category: input.category,
    featured: input.featured ?? false,
    whatsappMessage: input.whatsappMessage ?? defaultMessage(input.title),
    benefits: input.benefits ?? defaultBenefits(input.title),
    steps: input.steps ?? defaultSteps(input.title),
    faqs: input.faqs ?? defaultFaqs(input.title),
  };
}

export const services: Service[] = [
  // ── الخدمات التعليمية ────────────────────────────────────────────────
  svc({
    slug: "cv-writing",
    title: "عمل السيرة الذاتية CV",
    category: "educational",
    featured: true,
    description:
      "كتابة سيرة ذاتية احترافية تبرز مهاراتك وخبراتك وتزيد فرص قبولك في الوظائف.",
    benefits: [
      "سيرة ذاتية مصممة خصيصاً لمجالك الوظيفي.",
      "صياغة احترافية تبرز نقاط قوتك أمام أصحاب العمل.",
      "نسخة عربية وأخرى إنجليزية عند الحاجة.",
      "تنسيق حديث متوافق مع أنظمة فرز السير الذاتية ATS.",
    ],
  }),
  svc({
    slug: "professional-cv-design",
    title: "تصميم سيرة ذاتية احترافية",
    category: "educational",
    description:
      "تصميم جرافيكي عصري لسيرتك الذاتية بقوالب أنيقة تترك انطباعاً قوياً.",
  }),
  svc({
    slug: "scientific-research",
    title: "إعداد الأبحاث العلمية",
    category: "educational",
    description:
      "إعداد وتنسيق الأبحاث العلمية وفق المعايير الأكاديمية مع التوثيق السليم.",
  }),
  svc({
    slug: "graduation-projects",
    title: "مشاريع التخرج",
    category: "educational",
    description:
      "مساعدة متكاملة في إعداد مشاريع التخرج بحثياً وعملياً حتى التسليم.",
  }),
  svc({
    slug: "master-thesis",
    title: "رسائل الماجستير",
    category: "educational",
    description:
      "دعم إعداد رسائل الماجستير من الإطار النظري حتى التنسيق النهائي.",
  }),
  svc({
    slug: "phd-thesis",
    title: "رسائل الدكتوراه",
    category: "educational",
    description:
      "مساندة الباحثين في إعداد رسائل الدكتوراه بمنهجية علمية دقيقة.",
  }),
  svc({
    slug: "college-admission",
    title: "التقديم على الكليات والمعاهد",
    category: "educational",
    description:
      "تقديم إلكتروني دقيق على الكليات والمعاهد مع اختيار الرغبات بعناية.",
  }),
  svc({
    slug: "secondary-school-admission",
    title: "التقديم على المدارس بعد الإعدادية",
    category: "educational",
    description:
      "تقديم تنسيق المدارس الثانوية والفنية بعد الشهادة الإعدادية إلكترونياً.",
  }),
  svc({
    slug: "scholarships",
    title: "التقديم على المنح الدراسية",
    category: "educational",
    description:
      "البحث والتقديم على المنح الدراسية المحلية والدولية وتجهيز ملفاتها.",
  }),
  svc({
    slug: "educational-platforms",
    title: "التسجيل في المنصات التعليمية",
    category: "educational",
    description:
      "إنشاء وتفعيل حساباتك على المنصات التعليمية والدورات الإلكترونية.",
  }),

  // ── الخدمات الحكومية ─────────────────────────────────────────────────
  svc({
    slug: "digital-egypt",
    title: "خدمات مصر الرقمية",
    category: "government",
    featured: true,
    description:
      "إنهاء خدمات منصة مصر الرقمية إلكترونياً من توثيق وتصاريح ومستندات رسمية.",
    benefits: [
      "إنهاء طلبات مصر الرقمية دون الوقوف في الطوابير.",
      "متابعة حالة الطلب حتى استلام المستند.",
      "إرشادك للمستندات المطلوبة بدقة قبل البدء.",
      "خدمة متاحة لكل المحافظات على مدار الأسبوع.",
    ],
  }),
  svc({
    slug: "work-stub",
    title: "استخراج كعب العمل",
    category: "government",
    description:
      "استخراج كعب العمل (بيان الحالة الوظيفية) إلكترونياً وتسليمه إليك.",
  }),
  svc({
    slug: "government-appointments",
    title: "حجز المواعيد الحكومية",
    category: "government",
    description: "حجز مواعيد الجهات الحكومية المختلفة بسرعة وفي أقرب وقت متاح.",
  }),
  svc({
    slug: "registry-appointments-gov",
    title: "حجز مواعيد الشهر العقاري",
    category: "government",
    description:
      "حجز مواعيد مكاتب الشهر العقاري والتوثيق في الموعد الأنسب لك.",
  }),
  svc({
    slug: "commercial-register-apply",
    title: "التقديم على السجل التجاري",
    category: "government",
    description:
      "تجهيز وتقديم أوراق السجل التجاري ومتابعته مع الجهات المختصة.",
  }),
  svc({
    slug: "tax-card-apply",
    title: "التقديم على البطاقة الضريبية",
    category: "government",
    description:
      "تقديم طلب استخراج البطاقة الضريبية وتجهيز كافة مستنداتها.",
  }),
  svc({
    slug: "insurance-services",
    title: "خدمات التأمينات",
    category: "government",
    description:
      "إنهاء معاملات التأمينات الاجتماعية والاستعلام عن المدد التأمينية.",
  }),
  svc({
    slug: "tax-services",
    title: "خدمات الضرائب",
    category: "government",
    description:
      "إنهاء المعاملات الضريبية والإقرارات والاستفسارات مع مصلحة الضرائب.",
  }),
  svc({
    slug: "government-entities",
    title: "خدمات الجهات الحكومية",
    category: "government",
    description:
      "إنجاز معاملاتك مع مختلف الجهات الحكومية ومتابعتها نيابة عنك.",
  }),

  // ── خدمات التوظيف ────────────────────────────────────────────────────
  svc({
    slug: "government-jobs",
    title: "التقديم على الوظائف الحكومية",
    category: "employment",
    featured: true,
    description:
      "متابعة إعلانات الوظائف الحكومية والتقديم عليها بملف متكامل واحترافي.",
    benefits: [
      "متابعة دائمة لإعلانات الوظائف الحكومية الجديدة.",
      "تجهيز ملف تقديم متكامل يرفع فرص قبولك.",
      "تقديم دقيق في المواعيد المحددة دون تأخير.",
      "تنبيهك بالمواعيد والاختبارات أولاً بأول.",
    ],
  }),
  svc({
    slug: "bank-jobs",
    title: "التقديم على وظائف البنوك",
    category: "employment",
    description:
      "التقديم على وظائف البنوك وتجهيز السيرة الذاتية المناسبة لقطاع البنوك.",
  }),
  svc({
    slug: "company-jobs",
    title: "التقديم على وظائف الشركات",
    category: "employment",
    description:
      "التقديم على وظائف الشركات في مختلف المجالات ومتابعة ردود التوظيف.",
  }),
  svc({
    slug: "job-accounts",
    title: "إنشاء حسابات التوظيف",
    category: "employment",
    description:
      "إنشاء حسابات احترافية على منصات التوظيف مثل لينكدإن ووظائف.كوم.",
  }),
  svc({
    slug: "job-applications-followup",
    title: "متابعة طلبات التوظيف",
    category: "employment",
    description:
      "متابعة طلبات التوظيف المقدمة وتحديث حالتها والرد على الجهات.",
  }),
  svc({
    slug: "application-files",
    title: "تجهيز ملفات التقديم",
    category: "employment",
    description:
      "تجهيز ملفات التقديم الكاملة من سيرة ذاتية وخطاب تقديم ومستندات.",
  }),

  // ── خدمات الإسكان والعقارات ──────────────────────────────────────────
  svc({
    slug: "social-housing",
    title: "التقديم على شقق الإسكان الاجتماعي",
    category: "housing",
    featured: true,
    description:
      "التقديم على كراسات شروط الإسكان الاجتماعي ومتابعة الحجز والسداد.",
    benefits: [
      "تقديم دقيق على كراسة شروط الإسكان الاجتماعي.",
      "مساعدتك في اختيار المحافظة والمشروع المناسب.",
      "متابعة خطوات السداد والقرعة حتى التخصيص.",
      "تنبيهك بالمواعيد الرسمية للطرح والتقديم.",
    ],
  }),
  svc({
    slug: "middle-housing",
    title: "التقديم على الإسكان المتوسط",
    category: "housing",
    description:
      "التقديم على وحدات الإسكان المتوسط ومتابعة إجراءات الحجز والسداد.",
  }),
  svc({
    slug: "premium-housing",
    title: "التقديم على الإسكان المتميز",
    category: "housing",
    description:
      "التقديم على وحدات الإسكان المتميز وتجهيز مستندات الحجز المطلوبة.",
  }),
  svc({
    slug: "old-rent",
    title: "التقديم على شقق الإيجار القديم",
    category: "housing",
    description:
      "متابعة طلبات وإجراءات وحدات الإيجار القديم وفق القوانين المنظمة.",
  }),
  svc({
    slug: "rent-to-own",
    title: "التقديم على الإيجار التمليكي",
    category: "housing",
    description:
      "التقديم على وحدات الإيجار التمليكي ومتابعة شروط التعاقد والسداد.",
  }),
  svc({
    slug: "reconciliation-files",
    title: "ملفات التصالح",
    category: "housing",
    description:
      "تجهيز ملفات التصالح في مخالفات البناء وتقديمها للجهات المختصة.",
  }),
  svc({
    slug: "real-estate-licenses",
    title: "خدمات التراخيص العقارية",
    category: "housing",
    description:
      "استخراج ومتابعة التراخيص العقارية وتراخيص البناء والمرافق.",
  }),

  // ── خدمات المرافق ────────────────────────────────────────────────────
  svc({
    slug: "electricity-meters",
    title: "التقديم على عدادات الكهرباء",
    category: "utilities",
    description:
      "تقديم طلبات تركيب عدادات الكهرباء (كودية / مسبقة الدفع) ومتابعتها.",
  }),
  svc({
    slug: "electricity-company-services",
    title: "خدمات شركات الكهرباء",
    category: "utilities",
    description:
      "إنهاء خدمات شركات الكهرباء من فواتير وتظلمات وتعديل بيانات.",
  }),
  svc({
    slug: "water-meters",
    title: "التقديم على عدادات المياه",
    category: "utilities",
    description: "تقديم طلبات تركيب عدادات المياه ومتابعة الطلب حتى التركيب.",
  }),
  svc({
    slug: "utilities-followup",
    title: "متابعة طلبات المرافق",
    category: "utilities",
    description:
      "متابعة طلبات المرافق المختلفة (كهرباء، مياه، غاز) والرد عليها.",
  }),

  // ── خدمات الأعمال والشركات ──────────────────────────────────────────
  svc({
    slug: "company-formation",
    title: "تأسيس الشركات",
    category: "business",
    description:
      "تأسيس الشركات بكل أنواعها وإنهاء إجراءاتها القانونية من الألف للياء.",
  }),
  svc({
    slug: "commercial-register-extract",
    title: "استخراج السجل التجاري",
    category: "business",
    featured: true,
    description:
      "استخراج وتجديد السجل التجاري والبطاقة الضريبية لشركتك بسرعة واحترافية.",
    benefits: [
      "استخراج وتجديد السجل التجاري والبطاقة الضريبية.",
      "تجهيز كل المستندات والنماذج المطلوبة نيابة عنك.",
      "متابعة الإجراءات مع الجهات الرسمية حتى الاستلام.",
      "إرشادك للنشاط والكيان القانوني الأنسب لعملك.",
    ],
  }),
  svc({
    slug: "tax-card-extract",
    title: "استخراج البطاقة الضريبية",
    category: "business",
    description:
      "استخراج البطاقة الضريبية لنشاطك التجاري وتجهيز كافة المستندات.",
  }),
  svc({
    slug: "tax-file",
    title: "فتح ملف ضريبي",
    category: "business",
    description: "فتح ملف ضريبي لنشاطك وتسجيله لدى مصلحة الضرائب المصرية.",
  }),
  svc({
    slug: "insurance-file",
    title: "فتح ملف تأمينات",
    category: "business",
    description:
      "فتح ملف تأمينات للمنشأة وتسجيل العاملين لدى هيئة التأمينات.",
  }),
  svc({
    slug: "investor-services",
    title: "خدمات المستثمرين",
    category: "business",
    description:
      "خدمات هيئة الاستثمار وتأسيس الشركات للمستثمرين المحليين والأجانب.",
  }),

  // ── الخدمات التسويقية ────────────────────────────────────────────────
  svc({
    slug: "social-media-management",
    title: "إدارة صفحات السوشيال ميديا",
    category: "marketing",
    description:
      "إدارة احترافية لصفحاتك على فيسبوك وإنستجرام مع محتوى وتصاميم منتظمة.",
  }),
  svc({
    slug: "paid-ads",
    title: "الإعلانات الممولة",
    category: "marketing",
    featured: true,
    description:
      "حملات إعلانات ممولة على فيسبوك وإنستجرام وجوجل تستهدف عملاءك بدقة.",
    benefits: [
      "استهداف دقيق للجمهور الأنسب لنشاطك.",
      "تصميم إعلانات جذابة ترفع نسبة التفاعل.",
      "إدارة الميزانية لتحقيق أفضل عائد ممكن.",
      "تقارير دورية واضحة عن أداء الحملات.",
    ],
  }),
  svc({
    slug: "ad-design",
    title: "تصميم الإعلانات",
    category: "marketing",
    description:
      "تصميم إعلانات بصرية احترافية تناسب منصات التواصل والإعلانات الممولة.",
  }),
  svc({
    slug: "campaign-management",
    title: "إدارة الحملات التسويقية",
    category: "marketing",
    description:
      "تخطيط وإدارة حملات تسويقية متكاملة لتحقيق أهداف نشاطك التجاري.",
  }),
  svc({
    slug: "seo",
    title: "تحسين محركات البحث SEO",
    category: "marketing",
    description:
      "تحسين ظهور موقعك في نتائج بحث جوجل وزيادة الزيارات المجانية.",
  }),

  // ── خدمات التصميم والطباعة ──────────────────────────────────────────
  svc({
    slug: "wedding-cards",
    title: "تصميم كروت الأفراح",
    category: "design",
    description:
      "تصميم كروت أفراح أنيقة وعصرية مطبوعة وإلكترونية بأشكال مميزة.",
  }),
  svc({
    slug: "birthday-cards",
    title: "تصميم كروت أعياد الميلاد",
    category: "design",
    description: "تصميم كروت أعياد ميلاد مبهجة ومخصصة حسب طلبك ومناسبتك.",
  }),
  svc({
    slug: "occasion-cards",
    title: "تصميم كروت المناسبات",
    category: "design",
    description:
      "تصميم كروت لمختلف المناسبات والتهاني بأسلوب راقٍ يناسب الحدث.",
  }),
  svc({
    slug: "certificates-design",
    title: "تصميم الشهادات",
    category: "design",
    description:
      "تصميم شهادات تقدير ومشاركة احترافية للمؤسسات والفعاليات.",
  }),
  svc({
    slug: "digital-invitations",
    title: "تصميم الدعوات الإلكترونية",
    category: "design",
    description:
      "تصميم دعوات إلكترونية تفاعلية وأنيقة سهلة المشاركة عبر الواتساب.",
  }),
  svc({
    slug: "printing-services",
    title: "خدمات الطباعة",
    category: "design",
    description:
      "خدمات طباعة عالية الجودة للكروت والبروشورات والمطبوعات الدعائية.",
  }),

  // ── خدمات الحجز والمواعيد ───────────────────────────────────────────
  svc({
    slug: "bank-appointments",
    title: "حجز مواعيد البنوك",
    category: "booking",
    description: "حجز مواعيد البنوك لفتح الحسابات والخدمات المصرفية بسرعة.",
  }),
  svc({
    slug: "registry-appointments",
    title: "حجز مواعيد الشهر العقاري",
    category: "booking",
    description:
      "حجز مواعيد مكاتب الشهر العقاري للتوثيق والتسجيل في أقرب موعد.",
  }),
  svc({
    slug: "government-booking",
    title: "حجز مواعيد الجهات الحكومية",
    category: "booking",
    description:
      "حجز مواعيد مختلف الجهات الحكومية وإنهاء معاملاتك في وقتها.",
  }),
  svc({
    slug: "interviews-booking",
    title: "حجز المقابلات والخدمات الإلكترونية",
    category: "booking",
    description:
      "حجز مواعيد المقابلات والخدمات الإلكترونية المتنوعة نيابة عنك.",
  }),
];

// ── Lookup helpers ─────────────────────────────────────────────────────
const serviceBySlug = new Map(services.map((s) => [s.slug, s]));

export function getServiceBySlug(slug: string): Service | undefined {
  return serviceBySlug.get(slug);
}

export function getServicesByCategory(category: CategoryId): Service[] {
  return services.filter((s) => s.category === category);
}

export const featuredServices: Service[] = services.filter((s) => s.featured);

export const allServiceSlugs: string[] = services.map((s) => s.slug);
