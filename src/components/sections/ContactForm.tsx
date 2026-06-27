"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { buildWhatsappLink } from "@/lib/whatsapp";

const services = [
  "خدمات حكومية",
  "خدمات تعليمية",
  "خدمات توظيف",
  "خدمات إسكان وعقارات",
  "خدمات أعمال وشركات",
  "خدمات تسويقية",
  "خدمات تصميم وطباعة",
  "أخرى",
];

const inputClass =
  "w-full rounded-2xl border border-navy-100 bg-white px-4 py-3 text-sm font-medium text-navy-900 outline-none transition-all placeholder:text-navy-400 focus:border-navy-300 focus:ring-4 focus:ring-navy-50";

/**
 * Frontend-only contact form. On submit it composes a WhatsApp message from the
 * fields and opens the chat — no backend required.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string) || "";
    const phone = (data.get("phone") as string) || "";
    const city = (data.get("city") as string) || "";
    const service = (data.get("service") as string) || "";
    const message = (data.get("message") as string) || "";

    const body = [
      "السلام عليكم",
      "",
      "أرغب في التواصل بخصوص خدماتكم:",
      "",
      `الاسم: ${name}`,
      `رقم الهاتف: ${phone}`,
      `المحافظة: ${city}`,
      `الخدمة المطلوبة: ${service}`,
      "",
      `الرسالة: ${message}`,
    ].join("\n");

    setSent(true);
    window.open(buildWhatsappLink(body), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-bold text-navy-700">
            الاسم بالكامل
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="اكتب اسمك"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-bold text-navy-700">
            رقم الهاتف
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="01xxxxxxxxx"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="city" className="mb-1.5 block text-sm font-bold text-navy-700">
            المحافظة
          </label>
          <input
            id="city"
            name="city"
            type="text"
            required
            placeholder="مثال: القاهرة"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-bold text-navy-700">
            الخدمة المطلوبة
          </label>
          <select id="service" name="service" required className={inputClass}>
            <option value="">اختر الخدمة</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-bold text-navy-700">
          رسالتك
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="اكتب تفاصيل طلبك..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-whatsapp-dark"
      >
        <Send className="h-5 w-5" />
        إرسال عبر واتساب
      </button>

      {sent && (
        <p className="flex items-center justify-center gap-2 rounded-2xl bg-whatsapp/10 px-4 py-3 text-sm font-semibold text-whatsapp-dark">
          <CheckCircle2 className="h-5 w-5" />
          تم فتح واتساب! أكمل إرسال رسالتك للتواصل معنا.
        </p>
      )}
    </form>
  );
}
