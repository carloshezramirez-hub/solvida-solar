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

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: dict.meta.title,
      template: dict.meta.titleTemplate,
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    authors: [{ name: "SOLVIDA Solar" }],
    creator: "SOLVIDA Solar",
    publisher: "SOLVIDA Solar",
    category: locale === "en" ? "Solar Energy" : "Energía Solar",
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
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt:
            locale === "en"
              ? "SOLVIDA Solar — Residential Solar Panels in San Miguel de Allende"
              : "SOLVIDA Solar — Paneles Solares Residenciales en San Miguel de Allende",
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      images: [`${baseUrl}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
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
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  };
}

export async function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }];
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const validLocale: Locale = isValidLocale(locale) ? locale : "es";
  const dict = getDictionary(validLocale);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://solvida.mx";
  const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER || "";
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${baseUrl}/#business`,
    name: "SOLVIDA Solar",
    description: dict.meta.description,
    url: baseUrl,
    ...(phone && { telephone: phone }),
    ...(email && { email }),
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Miguel de Allende",
      addressRegion: "Guanajuato",
      addressCountry: "MX",
      postalCode: "37700",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 20.9144,
      longitude: -100.7452,
    },
    areaServed: [
      { "@type": "City", name: "San Miguel de Allende" },
      { "@type": "AdministrativeArea", name: "Guanajuato" },
    ],
    knowsLanguage: ["es", "en"],
    priceRange: "$$",
    currenciesAccepted: "MXN",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name:
        validLocale === "en"
          ? "Residential Solar Services"
          : "Servicios Solares Residenciales",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name:
              validLocale === "en"
                ? "Free Solar Assessment"
                : "Diagnóstico Solar Gratuito",
            description:
              validLocale === "en"
                ? "Free evaluation of your property's solar potential based on your CFE bill and location in San Miguel de Allende"
                : "Evaluación gratuita del potencial solar de tu propiedad con base en tu recibo de CFE y ubicación en San Miguel de Allende",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name:
              validLocale === "en"
                ? "Residential Solar Panel Installation"
                : "Instalación de Paneles Solares Residenciales",
            description:
              validLocale === "en"
                ? "Design and installation of photovoltaic solar systems for homes and properties in San Miguel de Allende and Guanajuato"
                : "Diseño e instalación de sistemas fotovoltaicos para casas y propiedades en San Miguel de Allende y Guanajuato",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name:
              validLocale === "en"
                ? "CFE Interconnection Assistance"
                : "Gestión de Interconexión CFE",
            description:
              validLocale === "en"
                ? "Assistance with the CFE interconnection process so your solar system can feed excess energy back to the grid"
                : "Gestión del trámite de interconexión con CFE para que tu sistema solar pueda inyectar energía excedente a la red",
          },
        },
      ],
    },
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "SOLVIDA Solar",
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/og-image.jpg`,
      width: 1200,
      height: 630,
    },
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType:
        validLocale === "en" ? "customer service" : "servicio al cliente",
      availableLanguage: ["Spanish", "English"],
      areaServed: "MX",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: "SOLVIDA Solar",
    url: baseUrl,
    description: dict.meta.description,
    inLanguage: ["es-MX", "en-US"],
    publisher: { "@id": `${baseUrl}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/es?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "SOLVIDA Solar",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name:
          validLocale === "en"
            ? "Solar Panels San Miguel de Allende"
            : "Paneles Solares San Miguel de Allende",
        item: `${baseUrl}/${validLocale}`,
      },
    ],
  };

  return (
    <html lang={validLocale} suppressHydrationWarning>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://images.unsplash.com" />

        {/* Canonical + hreflang */}
        <link
          rel="canonical"
          href={`${baseUrl}/${validLocale}`}
        />
        <link
          rel="alternate"
          hrefLang="es-MX"
          href={`${baseUrl}/es`}
        />
        <link
          rel="alternate"
          hrefLang="en-US"
          href={`${baseUrl}/en`}
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${baseUrl}/es`}
        />

        {/* Geo */}
        <meta name="geo.region" content="MX-GUA" />
        <meta
          name="geo.placename"
          content="San Miguel de Allende, Guanajuato, Mexico"
        />
        <meta name="geo.position" content="20.9144;-100.7452" />
        <meta name="ICBM" content="20.9144, -100.7452" />

        {/* Theme */}
        <meta name="theme-color" content="#052e16" />
        <meta name="msapplication-TileColor" content="#052e16" />
        <meta name="format-detection" content="telephone=no" />

        {/* Schema.org JSON-LD — four separate graphs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#052e16]">
        {children}
      </body>
    </html>
  );
}
