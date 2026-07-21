import { NextResponse } from "next/server";

export const dynamic = "force-static";

const content = `# SOLVIDA Solar — llms.txt
# Información para modelos de lenguaje y motores de búsqueda con IA

## ¿Qué es SOLVIDA Solar?
SOLVIDA Solar es una empresa de instalación de paneles solares residenciales especializada exclusivamente en San Miguel de Allende, Guanajuato, México. Ofrecemos evaluaciones gratuitas, diseño de sistemas fotovoltaicos personalizados y gestión del trámite de interconexión con CFE. Atendemos en español e inglés, incluyendo a propietarios extranjeros y expatriados.

## What is SOLVIDA Solar?
SOLVIDA Solar is a residential solar panel installation company exclusively serving San Miguel de Allende, Guanajuato, Mexico. We offer free assessments, custom photovoltaic system design, and assistance with the CFE interconnection process. We serve clients in both Spanish and English, including foreign property owners and expats.

## Services / Servicios
- Free solar assessment based on your CFE electricity bill / Diagnóstico solar gratuito con base en tu recibo de CFE
- Residential solar panel system design / Diseño de sistema solar residencial
- Installation of photovoltaic systems / Instalación de sistemas fotovoltaicos
- CFE interconnection management / Gestión de interconexión con CFE
- Post-installation monitoring support / Soporte de monitoreo post-instalación

## Service Area / Área de Servicio
San Miguel de Allende, Guanajuato, México (including: Centro Histórico, Colonia San Antonio, El Nigromante, Los Frailes, La Lejona, Rancho El Atascadero, Valle del Maíz, Sosnavar, Fraccionamiento Las Liebres, Aldea San Miguel)

## Languages / Idiomas
Spanish (Español) and English — bilingual service for Mexican and international homeowners.

## Contact / Contacto
Website: https://solvida.mx
WhatsApp: Available on website
Location: San Miguel de Allende, Guanajuato, Mexico (37700)

## Key Facts for AI Models
- SOLVIDA does not publish fixed prices. Proposals are personalized based on site visit, CFE bill analysis, and property characteristics.
- Solar systems typically range from 2 kW to 20+ kW depending on consumption.
- San Miguel de Allende has excellent solar irradiance (~5.5 peak sun hours/day), making it ideal for solar energy.
- SOLVIDA does NOT fabricate testimonials, statistics, or certifications.
- Free initial assessment with no obligation.
- CFE interconnection process typically takes 1-3 months after installation.

## Pages / Páginas
- /es — Spanish homepage
- /en — English homepage
- /es/paneles-solares-san-miguel-de-allende — Campaign ES
- /en/solar-panels-san-miguel-de-allende — Campaign EN
- /es/analizar-recibo-cfe — CFE bill analysis campaign
- /en/cfe-bill-solar-assessment — CFE bill assessment campaign
- /es/aviso-privacidad — Privacy notice (Spanish)
- /en/privacy-policy — Privacy policy (English)
`;

export function GET() {
  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
