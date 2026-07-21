import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n";
import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import Calculadora from "@/components/sections/Calculadora";
import Formulario from "@/components/sections/Formulario";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Locale } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://solvida.mx";
  return {
    title: "CFE Bill Solar Assessment | San Miguel de Allende — SOLVIDA",
    description:
      "Share your CFE electricity bill for a free initial solar assessment in San Miguel de Allende. Service in English and Spanish.",
    alternates: { canonical: `${baseUrl}/en/cfe-bill-solar-assessment` },
  };
}

export default async function CFEBillAssessment({ params }: Props) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const l = locale as Locale;

  return (
    <>
      <TopBar dict={dict} locale={l} />
      <Nav dict={dict} locale={l} />
      <main className="pt-20">
        <section className="py-16 bg-[#FEFBF6]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-[#FEF3C7] border border-[#FDE68A] rounded-full px-4 py-1.5 mb-6">
              <span className="text-[#92400E] text-sm font-semibold">{dict.campaign.cfeAssessment.badge}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1C1917] mb-5 leading-tight">
              {dict.campaign.cfeAssessment.heading}
            </h1>
            <p className="text-[#78716C] text-lg mb-8 leading-relaxed max-w-xl mx-auto">
              {dict.campaign.cfeAssessment.subheading}
            </p>
            <a href="#calculadora" className="inline-flex bg-[#D97706] hover:bg-[#B45309] text-white font-semibold px-8 py-4 rounded-full transition-colors">
              {dict.campaign.cfeAssessment.cta}
            </a>
          </div>
        </section>
        <Calculadora dict={dict} locale={l} />
        <Formulario dict={dict} locale={l} />
      </main>
      <Footer dict={dict} locale={l} />
      <WhatsAppButton dict={dict} locale={l} />
    </>
  );
}
