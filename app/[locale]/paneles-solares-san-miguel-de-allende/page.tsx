import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n";
import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Formulario from "@/components/sections/Formulario";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Locale } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://solvida.mx";
  const isEs = locale === "es";
  return {
    title: isEs
      ? "Paneles Solares San Miguel de Allende | Evaluación Gratuita — SOLVIDA"
      : "Solar Panels San Miguel de Allende | Free Assessment — SOLVIDA",
    description: isEs
      ? "Instalación de paneles solares para hogares en San Miguel de Allende. Sistema dimensionado según tu consumo. Atención en español e inglés."
      : "Residential solar panel installation in San Miguel de Allende. System sized to your usage. Service in English and Spanish.",
    alternates: {
      canonical: `${baseUrl}/${locale}/paneles-solares-san-miguel-de-allende`,
    },
  };
}

export default async function CampaignESPage({ params }: Props) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const l = locale as Locale;

  return (
    <>
      <TopBar dict={dict} locale={l} />
      <Nav dict={dict} locale={l} />
      <main>
        <Hero dict={dict} locale={l} />
        <Formulario dict={dict} locale={l} />
        <FAQ dict={dict} locale={l} />
      </main>
      <Footer dict={dict} locale={l} />
      <WhatsAppButton dict={dict} locale={l} />
    </>
  );
}
