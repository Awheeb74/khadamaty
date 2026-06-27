// Shared domain types for the Khadamaty platform.

/** Identifier for a service category. */
export type CategoryId =
  | "educational"
  | "government"
  | "employment"
  | "housing"
  | "utilities"
  | "business"
  | "marketing"
  | "design"
  | "booking";

export interface Category {
  id: CategoryId;
  /** URL-friendly slug used in filters and links. */
  slug: string;
  title: string;
  description: string;
  /** Emoji used as a lightweight visual marker. */
  emoji: string;
  /** Lucide icon name (resolved in the UI layer). */
  icon: string;
  /** Tailwind gradient classes used for the category accent. */
  gradient: string;
}

export interface ServiceStep {
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: CategoryId;
  featured: boolean;
  /** Pre-filled WhatsApp message body for this specific service. */
  whatsappMessage: string;
  /** Optional richer content used on the dynamic detail page. */
  benefits?: string[];
  steps?: ServiceStep[];
  faqs?: ServiceFaq[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  city: string;
  rating: number;
  content: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: string;
}
