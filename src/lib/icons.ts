import {
  GraduationCap,
  Landmark,
  Briefcase,
  Home,
  Zap,
  Building2,
  Megaphone,
  Palette,
  CalendarCheck,
  Users,
  CheckCircle2,
  MapPin,
  Award,
  Rocket,
  Headset,
  BadgePercent,
  RefreshCw,
  FileText,
  type LucideIcon,
} from "lucide-react";

/**
 * Maps the string icon names stored in the data layer to concrete Lucide
 * components. Keeping this in one place lets the data files stay serializable.
 */
const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Landmark,
  Briefcase,
  Home,
  Zap,
  Building2,
  Megaphone,
  Palette,
  CalendarCheck,
  Users,
  CheckCircle2,
  MapPin,
  Award,
  Rocket,
  Headset,
  BadgePercent,
  RefreshCw,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? FileText;
}
