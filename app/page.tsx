import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Calculadora from "@/components/sections/Calculadora";
import Paquetes from "@/components/sections/Paquetes";
import ComoFunciona from "@/components/sections/ComoFunciona";
import Beneficios from "@/components/sections/Beneficios";
import Testimonios from "@/components/sections/Testimonios";
import FAQ from "@/components/sections/FAQ";
import CTAForm from "@/components/sections/CTAForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Calculadora />
        <Paquetes />
        <ComoFunciona />
        <Beneficios />
        <Testimonios />
        <FAQ />
        <CTAForm />
      </main>
      <Footer />
    </>
  );
}
