import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://solvida.mx"),
  title: {
    default: "SOLVIDA | Paneles Solares en México — Ahorra hasta 95% en tu CFE",
    template: "%s | SOLVIDA Solar",
  },
  description:
    "Instala paneles solares con SOLVIDA y elimina tu recibo de CFE. Financiamiento sin enganche, instalación en 3 días, garantía 25 años. Cotización gratis en México.",
  keywords: [
    "paneles solares México",
    "energía solar México",
    "instalar paneles solares",
    "reducir CFE",
    "energía solar casa",
    "financiamiento solar",
    "solar fotovoltaico",
    "sistema solar residencial",
    "cotización paneles solares",
    "paneles solares costo",
    "energía limpia México",
    "SOLVIDA solar",
  ],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://solvida.mx",
    siteName: "SOLVIDA Solar",
    title: "SOLVIDA | Paneles Solares — Ahorra hasta 95% en tu CFE",
    description:
      "Instala paneles solares con SOLVIDA y elimina tu recibo de CFE. Financiamiento sin enganche, garantía 25 años.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SOLVIDA Solar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOLVIDA | Paneles Solares en México",
    description: "Elimina tu CFE con paneles solares. Cotiza gratis ahora.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "https://solvida.mx" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://solvida.mx/#business",
      name: "SOLVIDA Solar",
      description:
        "Empresa mexicana especializada en instalación de paneles solares residenciales y comerciales.",
      url: "https://solvida.mx",
      telephone: "+52-800-SOLVIDA",
      email: "contacto@solvida.mx",
      priceRange: "$$",
      currenciesAccepted: "MXN",
      paymentAccepted: "Cash, Credit Card, Financing",
      areaServed: { "@type": "Country", name: "México" },
      address: {
        "@type": "PostalAddress",
        addressCountry: "MX",
        addressLocality: "Ciudad de México",
      },
      sameAs: [
        "https://facebook.com/solvidamx",
        "https://instagram.com/solvidamx",
        "https://youtube.com/@solvidamx",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Sistemas de Energía Solar",
        itemListElement: [
          { "@type": "Offer", name: "Sistema Solar Básico 3kW" },
          { "@type": "Offer", name: "Sistema Solar Familiar 5kW" },
          { "@type": "Offer", name: "Sistema Solar Premium 10kW" },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://solvida.mx/#website",
      url: "https://solvida.mx",
      name: "SOLVIDA Solar",
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: "https://solvida.mx/?q={search_term_string}" },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
