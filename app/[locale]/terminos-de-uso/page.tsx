import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos de Uso | SOLVIDA Solar",
  robots: { index: true, follow: false },
};

const BUSINESS = process.env.NEXT_PUBLIC_LEGAL_BUSINESS_NAME || "[RAZÓN SOCIAL — POR CONFIGURAR]";

export default function TerminosDeUso() {
  return (
    <main className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/es" className="text-[#16a34a] text-sm hover:underline mb-8 block">← Inicio</Link>

        <h1 className="text-3xl font-extrabold text-[#1C1917] mb-2">Términos de Uso</h1>
        <p className="text-[#78716C] text-sm mb-8">Última actualización: julio 2026</p>

        <div className="space-y-6 text-[#44403C] text-sm leading-relaxed">
          <p className="bg-[#FEF3C7] border border-[#FDE68A] rounded-lg p-3 text-[#92400E]">
            <strong>Aviso:</strong> Los datos entre corchetes requieren configuración por el titular de la empresa.
          </p>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-3">1. Aceptación</h2>
            <p>Al acceder y usar este sitio web operado por <strong>{BUSINESS}</strong> (&ldquo;SOLVIDA&rdquo;), aceptas estos términos de uso.
            Si no estás de acuerdo, no uses el sitio.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-3">2. Uso del sitio</h2>
            <p>Este sitio está diseñado para informar sobre servicios de paneles solares residenciales en San Miguel de Allende
            y para recibir solicitudes de evaluación. Está prohibido usar el sitio para fines ilegales o que dañen a terceros.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-3">3. Estimaciones y evaluaciones</h2>
            <p>Las estimaciones presentadas en este sitio son orientativas y no constituyen una cotización formal.
            El diseño final de cualquier sistema solar depende de la evaluación técnica del sitio, el análisis del recibo de CFE
            y las condiciones reales de la propiedad. Consulta nuestra{" "}
            <Link href="/es/estimaciones-solares" className="text-[#16a34a] hover:underline">
              Política de Estimaciones Solares
            </Link>{" "}
            para más información.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-3">4. Propiedad intelectual</h2>
            <p>El contenido de este sitio (textos, logotipos, diseño) es propiedad de SOLVIDA o de sus proveedores de contenido.
            No puedes reproducirlo sin autorización escrita.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-3">5. Limitación de responsabilidad</h2>
            <p>SOLVIDA no es responsable por daños directos, indirectos o consecuentes derivados del uso de este sitio
            o de la información aquí contenida.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-3">6. Modificaciones</h2>
            <p>SOLVIDA puede modificar estos términos en cualquier momento. La versión actualizada estará disponible en este URL.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-3">7. Jurisdicción</h2>
            <p>Estos términos se rigen por las leyes aplicables en San Miguel de Allende, Guanajuato, México.
            Cualquier disputa se someterá a los tribunales competentes de [JURISDICCIÓN — POR CONFIRMAR].</p>
          </section>
        </div>
      </div>
    </main>
  );
}
