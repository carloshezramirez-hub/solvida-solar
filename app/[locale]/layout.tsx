import type { Metadata } from "next";
import { getDictionary, isValidLocale, type Locale } from "@/lib/i18n";
import "../globals.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://solvida.mx";
  const altLocale = locale === "es" ? "en" : "es";

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${baseUrl}/#business`,
    name: "SOLVIDA Solar",
    description: dict.meta.description,
    url: baseUrl,
    telephone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "[PHONE_PLACEHOLDER]",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "[EMAIL_PLACEHOLDER]",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Miguel de Allende",
      addressRegion: "Guanajuato",
      addressCountry: "MX",
    },
    areaServed: [
      { "@type": "City", name: "San Miguel de Allende" },
      { "@type": "State", name: "Guanajuato" },
    ],
    knowsLanguage: ["es", "en"],
    priceRange: "$$",
    currenciesAccepted: "MXN",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    },
  };

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: dict.meta.title,
      template: dict.meta.titleTemplate,
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_US" : "es_MX",
      alternateLocale: altLocale === "en" ? "en_US" : "es_MX",
      url: `${baseUrl}/${locale}`,
      siteName: "SOLVIDA Solar",
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: locale === "en"
            ? "SOLVIDA Solar — San Miguel de Allende"
            : "SOLVIDA Solar — San Miguel de Allende",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        "es-MX": `${baseUrl}/es`,
        "en-US": `${baseUrl}/en`,
        "x-default": `${baseUrl}/es`,
      },
    },
    other: {
      "application/ld+json": JSON.stringify(localBusiness),
    },
  };
}

export async function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }];
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const validLocale: Locale = isValidLocale(locale) ? locale : "es";

  return (
    <html lang={validLocale} suppressHydrationWarning>
      <head>
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_SITE_URL || "https://solvida.mx"}/${validLocale}`} />
        <link rel="alternate" hrefLang="es-MX" href={`${process.env.NEXT_PUBLIC_SITE_URL || "https://solvida.mx"}/es`} />
        <link rel="alternate" hrefLang="en-US" href={`${process.env.NEXT_PUBLIC_SITE_URL || "https://solvida.mx"}/en`} />
        <link rel="alternate" hrefLang="x-default" href={`${process.env.NEXT_PUBLIC_SITE_URL || "https://solvida.mx"}/es`} />
        <meta name="geo.region" content="MX-GUA" />
        <meta name="geo.placename" content="San Miguel de Allende, Guanajuato, Mexico" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FEFBF6] text-[#1C1917]">
        {children}
      </body>
    </html>
  );
}
