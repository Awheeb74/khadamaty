import type { Metadata } from "next";
import {
  Target,
  Eye,
  Flag,
  Building2,
  CheckCircle2,
  ImageIcon,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { StatsSection } from "@/components/sections/StatsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "من نحن",
  description:
    "تعرّف على منصة خدماتي: قصتنا ورؤيتنا ورسالتنا وأهدافنا في تقديم الخدمات الإلكترونية لكل محافظات مصر.",
  alternates: { canonical: "/about" },
};

const pillars = [
  {
    icon: Eye,
    title: "رؤيتنا",
    text: "أن نكون المنصة الأولى في مصر لإنجاز جميع الخدمات الإلكترونية والحكومية بسهولة وثقة من أي مكان.",
  },
  {
    icon: Target,
    title: "رسالتنا",
    text: "تبسيط المعاملات وتوفير وقت ومجهود عملائنا عبر فريق متخصص يقدم خدمة سريعة وموثوقة وبأسعار عادلة.",
  },
  {
    icon: Flag,
    title: "أهدافنا",
    text: "الوصول إلى كل محافظات مصر، وتوسيع قائمة خدماتنا باستمرار، وبناء علاقة ثقة دائمة مع كل عميل.",
  },
];

const goals = [
  "خدمة جميع محافظات مصر الـ 27 إلكترونياً.",
  "تنفيذ الطلبات بأعلى جودة وفي أسرع وقت.",
  "توفير دعم مباشر ومتابعة مستمرة لكل عميل.",
  "التوسع في الخدمات الرقمية والحكومية باستمرار.",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="من نحن"
        title={`تعرّف على ${siteConfig.name}`}
        description="منصة مصرية متخصصة في إنجاز خدماتك الإلكترونية والحكومية والتعليمية والتجارية بكل احترافية."
        breadcrumbs={[
          { label: "الرئيسية", href: "/" },
          { label: "من نحن" },
        ]}
      />

      {/* Story */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal direction="right">
              <span className="mb-3 inline-block rounded-full bg-navy-50 px-4 py-1.5 text-sm font-bold text-navy-600">
                قصتنا
              </span>
              <h2 className="text-3xl font-extrabold text-navy-900 sm:text-4xl">
                بدأنا بفكرة بسيطة: تسهيل حياة المصريين
              </h2>
              <div className="mt-5 space-y-4 text-base leading-8 text-navy-500">
                <p>
                  انطلقت منصة {siteConfig.name} من إيماننا بأن إنجاز المعاملات
                  الحكومية والإلكترونية يجب أن يكون سهلاً وسريعاً، دون عناء
                  الطوابير والتنقل بين الجهات المختلفة.
                </p>
                <p>
                  على مدار سنوات من الخبرة، ساعدنا آلاف العملاء في إنهاء خدماتهم
                  التعليمية والحكومية وخدمات الشركات والتوظيف والإسكان، وأصبحنا
                  وجهة موثوقة لكل من يبحث عن إنجاز سريع واحترافي.
                </p>
                <p>
                  اليوم نخدم جميع محافظات مصر إلكترونياً، ونواصل توسيع خدماتنا
                  لنكون دائماً الخيار الأول لعملائنا.
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                {goals.map((goal) => (
                  <li key={goal} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-whatsapp" />
                    <span className="text-sm font-medium text-navy-600">
                      {goal}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Office images placeholder */}
            <Reveal direction="left">
              <div className="grid grid-cols-2 gap-4">
                {[
                  "from-navy-700 to-navy-900",
                  "from-whatsapp to-whatsapp-dark",
                  "from-navy-500 to-navy-700",
                  "from-navy-800 to-navy-950",
                ].map((gradient, i) => (
                  <div
                    key={i}
                    className={`flex aspect-square items-center justify-center rounded-3xl bg-gradient-to-br ${gradient} ${
                      i % 2 === 1 ? "translate-y-6" : ""
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2 text-white/80">
                      <ImageIcon className="h-10 w-10" />
                      <span className="text-xs font-semibold">صورة المكتب</span>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Vision / Mission / Goals */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="مبادئنا"
            title="ما الذي يحركنا كل يوم"
          />
          <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.title} className="h-full">
                <div className="flex h-full flex-col rounded-3xl border border-navy-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-card">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-800 text-white">
                    <pillar.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-navy-900">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-8 text-navy-500">
                    {pillar.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <StatsSection />

      {/* Branches */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="فروعنا" title="أينما كنت، نحن بالقرب منك" />
          <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
            {siteConfig.branches.map((branch) => (
              <Reveal key={branch.name}>
                <div className="rounded-3xl border border-navy-100 bg-white p-7 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-50 text-navy-800">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900">
                    {branch.name}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-navy-500">
                    {branch.address}
                  </p>
                  <p dir="ltr" className="mt-2 text-sm font-semibold text-navy-700">
                    {branch.phone}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
