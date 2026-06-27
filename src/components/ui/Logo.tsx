import Image from "next/image";
import logo from "@/lib/logo.png";
import { cn } from "@/lib/utils";

interface LogoProps {
  /** Pixel size of the round logo mark. */
  size?: number;
  className?: string;
}

/** The خدماتي brand mark (round logo image). */
export function Logo({ size = 40, className }: LogoProps) {
  return (
    <Image
      src={logo}
      alt="شعار خدماتي"
      width={size}
      height={size}
      priority
      className={cn("rounded-full object-cover", className)}
    />
  );
}
