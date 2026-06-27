import { createElement } from "react";
import type { LucideProps } from "lucide-react";
import { getIcon } from "@/lib/icons";

type DynamicIconProps = LucideProps & { name: string };

/**
 * Renders a Lucide icon by its string name (as stored in the data layer).
 *
 * Using `createElement` with a looked-up component avoids deriving a JSX
 * component during render, which keeps the React Compiler lint rules happy
 * while staying server-component safe (no hooks).
 */
export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  return createElement(getIcon(name), props);
}
