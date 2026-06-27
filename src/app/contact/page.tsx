import type { Metadata } from "next";
import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/data/site";
import { buildWhatsappLink, generalContactMessage } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description:
    "تواصل مع منصة خدماتي عبر واتساب أو الهاتف أو البريد الإلكتروني، أو زر أحد فروعنا في محافظة المنوفية.",
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    icon: MessageCircle,
    title: "واتساب",
    value: "راسلنا الآن",
    href: buildWhatsappLink(generalContactMessage),
    external: true,
    accent: "bg-whatsapp",
  },
  {
    icon: Phone,
    title: "الهاتف",
    value: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phoneHref}`,
    accent: "bg-navy-800",
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    accent: "bg-navy-800",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="تواصل معنا"
        title="نسعد بتواصلك معنا"
        description="فريقنا جاهز للرد على استفساراتك ومساعدتك في إنجاز خدمتك. اختر وسيلة التواصل الأنسب لك."
        breadcrumbs={[
          { label: "الرئيسية", href: "/" },
          { label: "تواصل معنا" },
        ]}
      />

      {/* Contact channels */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {channels.map((c) => (
              <Reveal key={c.title} className="h-full">
                <a
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className="group flex h-full items-center gap-4 rounded-3xl border border-navy-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-card"
                >
                  <span
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white ${c.accent}`}
                  >
                    <c.icon className="h-7 w-7" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-navy-400">{c.title}</p>
                    <p
                      dir={c.title === "الهاتف" ? "ltr" : undefined}
                      className="text-lg font-bold text-navy-900"
                    >
                      {c.value}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Form + info */}
      <section className="pb-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal direction="right">
              <div className="rounded-3xl border border-navy-100 bg-white p-7 shadow-card sm:p-9">
                <h2 className="mb-1 text-2xl font-extrabold text-navy-900">
                  أرسل لنا رسالة
                </h2>
                <p className="mb-6 text-sm text-navy-500">
                  املأ النموذج وسيتم تحويلك إلى واتساب برسالتك جاهزة للإرسال.
                </p>
                <ContactForm />
              </div>
            </Reveal>

            <Reveal direction="left">
              <div className="space-y-6">
                {/* Branches */}
                {siteConfig.branches.map((branch) => (
                  <div
                    key={branch.name}
                    className="rounded-3xl border border-navy-100 bg-white p-7 shadow-sm"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy-50 text-navy-800">
                        <MapPin className="h-6 w-6" />
                      </span>
                      <h3 className="text-lg font-bold text-navy-900">
                        {branch.name}
                      </h3>
                    </div>
                    <p className="text-sm leading-7 text-navy-500">
                      {branch.address}
                    </p>
                    <p dir="ltr" className="mt-1 text-sm font-semibold text-navy-700">
                      {branch.phone}
                    </p>
                  </div>
                ))}

                {/* Working hours */}
                <div className="rounded-3xl bg-gradient-to-br from-navy-800 to-navy-950 p-7 text-white">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                      <Clock className="h-6 w-6" />
                    </span>
                    <h3 className="text-lg font-bold">مواعيد العمل</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-navy-200">
                    <li className="flex justify-between">
                      <span>السبت - الخميس</span>
                      <span className="font-semibold text-white">
                        9 ص - 9 م
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>الجمعة</span>
                      <span className="font-semibold text-white">
                        2 م - 9 م
                      </span>
                    </li>
                    <li className="flex justify-between border-t border-white/10 pt-2">
                      <span>واتساب</span>
                      <span className="font-semibold text-whatsapp-light">
                        متاح 24/7
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
