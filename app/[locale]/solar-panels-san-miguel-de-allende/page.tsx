import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n";
import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import SeccionExpatriados from "@/components/sections/SeccionExpatriados";
import Formulario from "@/components/sections/Formulario";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Locale } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://solvida.mx";
  return {
    title: "Solar Panels San Miguel de Allende | Free Assessment — SOLVIDA",
    description:
      "Residential solar panels in San Miguel de Allende. Free home assessment, bilingual service in English and Spanish.",
    alternates: {
      canonical: `${baseUrl}/en/solar-panels-san-miguel-de-allende`,
    },
  };
}

export default async function CampaignENPage({ params }: Props) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const l = locale as Locale;

  return (
    <>
      <TopBar dict={dict} locale={l} />
      <Nav dict={dict} locale={l} />
      <main>
        <Hero dict={dict} locale={l} />
        <SeccionExpatriados dict={dict} locale={l} />
        <Formulario dict={dict} locale={l} />
        <FAQ dict={dict} locale={l} />
      </main>
      <Footer dict={dict} locale={l} />
      <WhatsAppButton dict={dict} locale={l} />
    </>
  );
}
