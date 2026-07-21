import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "Googlebot", allow: "/", crawlDelay: 1 },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || "https://solvida.mx"}/sitemap.xml`,
    host: process.env.NEXT_PUBLIC_SITE_URL || "https://solvida.mx",
  };
}
