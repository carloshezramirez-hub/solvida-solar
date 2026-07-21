import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://solvida.mx";

const routes: Array<{ path: string; freq: MetadataRoute.Sitemap[0]["changeFrequency"]; priority: number }> = [
  { path: "", freq: "weekly", priority: 1 },
  { path: "/paneles-solares-san-miguel-de-allende", freq: "monthly", priority: 0.9 },
  { path: "/solar-panels-san-miguel-de-allende", freq: "monthly", priority: 0.9 },
  { path: "/analizar-recibo-cfe", freq: "monthly", priority: 0.8 },
  { path: "/cfe-bill-solar-assessment", freq: "monthly", priority: 0.8 },
  { path: "/aviso-privacidad", freq: "yearly", priority: 0.3 },
  { path: "/terminos-de-uso", freq: "yearly", priority: 0.3 },
  { path: "/privacy-policy", freq: "yearly", priority: 0.3 },
  { path: "/terms-of-use", freq: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of ["es", "en"]) {
    for (const { path, freq, priority } of routes) {
      entries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: freq,
        priority,
      });
    }
  }
  return entries;
}
