import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso de Privacidad | SOLVIDA Solar",
  robots: { index: true, follow: false },
};

const BUSINESS = process.env.NEXT_PUBLIC_LEGAL_BUSINESS_NAME || "[RAZÓN SOCIAL — POR CONFIGURAR]";
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "[CORREO — POR CONFIGURAR]";
const PHONE = process.env.NEXT_PUBLIC_PHONE_NUMBER || "[TELÉFONO — POR CONFIGURAR]";

export default function AvisoPrivacidad() {
  return (
    <main className="min-h-screen bg-[#FEFBF6] py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/es" className="text-[#D97706] text-sm hover:underline mb-8 block">← Inicio</Link>

        <h1 className="text-3xl font-extrabold text-[#1C1917] mb-2">Aviso de Privacidad</h1>
        <p className="text-[#78716C] text-sm mb-8">Última actualización: julio 2026</p>

        <div className="prose prose-stone max-w-none text-[#44403C] space-y-6">
          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-3">Responsable del tratamiento</h2>
            <p>
              <strong>{BUSINESS}</strong> (&ldquo;SOLVIDA&rdquo;), con correo electrónico {CONTACT_EMAIL} y teléfono {PHONE},
              es responsable del tratamiento de los datos personales que nos proporciones.
            </p>
            <p className="bg-[#FEF3C7] border border-[#FDE68A] rounded-lg p-3 text-sm text-[#92400E]">
              <strong>Aviso:</strong> La información entre corchetes requiere configuración por parte del titular de la empresa.
              No utilices este aviso con datos placeholder en un entorno de producción real.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-3">Datos que recopilamos</h2>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Nombre completo</li>
              <li>Número de WhatsApp o teléfono</li>
              <li>Correo electrónico</li>
              <li>Código postal y colonia o comunidad</li>
              <li>Información sobre la propiedad (tipo, consumo eléctrico aproximado, características)</li>
              <li>Recibo de CFE, cuando el titular decide compartirlo voluntariamente</li>
              <li>Idioma preferido y método de pago de preferencia</li>
              <li>Información técnica de navegación (dirección IP, tipo de navegador, fuente del tráfico)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-3">Finalidades del tratamiento</h2>
            <p className="font-semibold text-sm">Finalidades primarias:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Preparar una evaluación solar inicial personalizada</li>
              <li>Contactarte por WhatsApp, correo o teléfono para dar seguimiento a tu solicitud</li>
              <li>Coordinar una visita técnica o llamada de evaluación</li>
              <li>Preparar y enviarte una propuesta comercial</li>
              <li>Gestionar el proyecto solar en caso de contratación</li>
            </ul>
            <p className="font-semibold text-sm mt-3">Finalidades secundarias:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Envío de información relacionada con paneles solares en San Miguel de Allende (puedes cancelarlo en cualquier momento)</li>
              <li>Análisis estadístico interno para mejorar nuestro servicio</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-3">Transferencia de datos</h2>
            <p className="text-sm">
              No vendemos ni cedemos tus datos personales a terceros para fines comerciales propios.
              Podemos compartir información con proveedores de tecnología que nos apoyan en la operación del sitio,
              bajo acuerdos de confidencialidad.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-3">Derechos ARCO</h2>
            <p className="text-sm">
              Tienes derecho a Acceder, Rectificar, Cancelar u Oponerte al tratamiento de tus datos personales.
              Para ejercer estos derechos, envía un correo a <strong>{CONTACT_EMAIL}</strong> indicando tu nombre,
              el derecho que deseas ejercer y los datos a los que se refiere.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-3">Recibo de CFE</h2>
            <p className="text-sm">
              Cuando compartes tu recibo de CFE lo utilizamos exclusivamente para preparar tu evaluación solar.
              No publicamos ni compartimos el contenido del recibo con terceros sin tu autorización.
              No registramos el contenido del recibo en logs públicos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-3">Cookies y tecnologías de seguimiento</h2>
            <p className="text-sm">
              Utilizamos cookies propias y de terceros (Google Analytics, Meta Pixel) para analizar el tráfico
              y medir la efectividad de nuestras comunicaciones. Puedes configurar tu navegador para rechazar cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-3">Cambios a este aviso</h2>
            <p className="text-sm">
              Podemos actualizar este aviso. La versión vigente estará disponible en este mismo URL.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-3">Contacto</h2>
            <p className="text-sm">
              Si tienes preguntas sobre este aviso, contáctanos en: <strong>{CONTACT_EMAIL}</strong>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
