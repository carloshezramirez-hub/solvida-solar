import { es, type Dictionary } from "./es";
import { en } from "./en";

export type Locale = "es" | "en";
export type { Dictionary };

export const locales: Locale[] = ["es", "en"];
export const defaultLocale: Locale = "es";

export function getDictionary(locale: string): Dictionary {
  return locale === "en" ? en : es;
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
