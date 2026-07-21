import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://solvida.mx";
const now = new Date();

const routes: Array<{
  path: string;
  freq: MetadataRoute.Sitemap[0]["changeFrequency"];
  priority: number;
  localizedOnly?: "es" | "en";
}> = [
  { path: "", freq: "weekly", priority: 1.0 },
  { path: "/paneles-solares-san-miguel-de-allende", freq: "monthly", priority: 0.9 },
  { path: "/solar-panels-san-miguel-de-allende", freq: "monthly", priority: 0.9 },
  { path: "/analizar-recibo-cfe", freq: "monthly", priority: 0.8 },
  { path: "/cfe-bill-solar-assessment", freq: "monthly", priority: 0.8 },
  { path: "/gracias", freq: "yearly", priority: 0.1 },
  { path: "/aviso-privacidad", freq: "yearly", priority: 0.2 },
  { path: "/terminos-de-uso", freq: "yearly", priority: 0.2 },
  { path: "/privacy-policy", freq: "yearly", priority: 0.2 },
  { path: "/terms-of-use", freq: "yearly", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of ["es", "en"]) {
    for (const { path, freq, priority, localizedOnly } of routes) {
      if (localizedOnly && localizedOnly !== locale) continue;
      entries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: now,
        changeFrequency: freq,
        priority,
        alternates: {
          languages: {
            "es-MX": `${baseUrl}/es${path}`,
            "en-US": `${baseUrl}/en${path}`,
          },
        },
      });
    }
  }
  return entries;
}
