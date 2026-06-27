import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "whatsapp" | "outline" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-navy-500 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy-800 text-white hover:bg-navy-700 shadow-card hover:-translate-y-0.5",
  whatsapp:
    "bg-whatsapp text-white hover:bg-whatsapp-dark shadow-[0_8px_30px_-8px_rgba(37,211,102,0.6)] hover:-translate-y-0.5",
  outline:
    "border-2 border-navy-200 text-navy-800 hover:border-navy-800 hover:bg-navy-50",
  ghost: "text-navy-700 hover:bg-navy-50",
  light:
    "bg-white text-navy-800 hover:bg-navy-50 shadow-card hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
    external?: boolean;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  if (props.href !== undefined) {
    const {
      variant = "primary",
      size = "md",
      className,
      children,
      href,
      external,
      ...rest
    } = props;
    const classes = cn(base, variants[variant], sizes[size], className);
    // External links (WhatsApp / tel / social) use a plain anchor.
    if (external || /^(https?:|tel:|mailto:)/.test(href)) {
      return (
        <a
          href={href}
          className={classes}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const {
    variant = "primary",
    size = "md",
    className,
    children,
    ...rest
  } = props;
  const classes = cn(base, variants[variant], sizes[size], className);
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
