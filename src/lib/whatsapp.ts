import { siteConfig } from "@/data/site";
import type { Service } from "@/types";

/**
 * Build a WhatsApp deep link (wa.me) with a pre-filled, URL-encoded message.
 * Used everywhere the user requests a service or contacts the team.
 */
export function buildWhatsappLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

/**
 * Standard service-request message. Falls back to a generic template when the
 * service does not define its own `whatsappMessage`.
 */
export function serviceRequestMessage(service: Service): string {
  if (service.whatsappMessage) return service.whatsappMessage;
  return [
    "السلام عليكم",
    "",
    `أرغب في طلب خدمة ${service.title}`,
  ].join("\n");
}

/** Convenience: direct link for a given service. */
export function serviceWhatsappLink(service: Service): string {
  return buildWhatsappLink(serviceRequestMessage(service));
}

/** Generic contact message used by the navbar / hero / contact CTAs. */
export const generalContactMessage = [
  "السلام عليكم",
  "",
  "أرغب في الاستفسار عن خدمات منصة خدماتي.",
].join("\n");
