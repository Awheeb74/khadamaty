type ClassValue =
  | string
  | number
  | null
  | undefined
  | false
  | ClassValue[];

/**
 * Minimal className combiner — joins truthy values with a space and flattens
 * arrays. Keeps the dependency surface small for this static frontend.
 */
export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  for (const input of inputs) {
    if (!input) continue;
    if (Array.isArray(input)) {
      const nested = cn(...input);
      if (nested) out.push(nested);
    } else {
      out.push(String(input));
    }
  }
  return out.join(" ");
}
