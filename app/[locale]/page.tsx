import { getDictionary, type Locale } from "@/lib/i18n";
import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import ProblemasYBeneficios from "@/components/sections/ProblemasYBeneficios";
import Calculadora from "@/components/sections/Calculadora";
import Escenarios from "@/components/sections/Escenarios";
import ComoFunciona from "@/components/sections/ComoFunciona";
import SeccionExpatriados from "@/components/sections/SeccionExpatriados";
import PorQueSolvida from "@/components/sections/PorQueSolvida";
import Compromiso from "@/components/sections/Compromiso";
import Formulario from "@/components/sections/Formulario";
import FAQ from "@/components/sections/FAQ";
import AreaServicio from "@/components/sections/AreaServicio";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const l = locale as Locale;

  return (
    <>
      <TopBar dict={dict} locale={l} />
      <Nav dict={dict} locale={l} />
      <main id="main-content">
        <Hero dict={dict} locale={l} />
        <ProblemasYBeneficios dict={dict} locale={l} />
        <Calculadora dict={dict} locale={l} />
        <Escenarios dict={dict} locale={l} />
        <ComoFunciona dict={dict} locale={l} />
        <SeccionExpatriados dict={dict} locale={l} />
        <PorQueSolvida dict={dict} locale={l} />
        <Compromiso dict={dict} locale={l} />
        <Formulario dict={dict} locale={l} />
        <FAQ dict={dict} locale={l} />
        <AreaServicio dict={dict} locale={l} />
      </main>
      <Footer dict={dict} locale={l} />
      <WhatsAppButton dict={dict} locale={l} />
    </>
  );
}
