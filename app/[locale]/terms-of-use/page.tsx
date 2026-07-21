import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | SOLVIDA Solar",
  robots: { index: true, follow: false },
};

const BUSINESS = process.env.NEXT_PUBLIC_LEGAL_BUSINESS_NAME || "[BUSINESS NAME — TO BE CONFIGURED]";

export default function TermsOfUse() {
  return (
    <main className="min-h-screen bg-[#FEFBF6] py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/en" className="text-[#D97706] text-sm hover:underline mb-8 block">← Home</Link>

        <h1 className="text-3xl font-extrabold text-[#1C1917] mb-2">Terms of Use</h1>
        <p className="text-[#78716C] text-sm mb-8">Last updated: July 2026</p>

        <div className="space-y-6 text-[#44403C] text-sm leading-relaxed">
          <p className="bg-[#FEF3C7] border border-[#FDE68A] rounded-lg p-3 text-[#92400E]">
            <strong>Notice:</strong> Information in brackets requires configuration by the business owner.
          </p>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-3">1. Acceptance</h2>
            <p>By accessing and using this website operated by <strong>{BUSINESS}</strong> (&ldquo;SOLVIDA&rdquo;),
            you agree to these terms of use. If you do not agree, please do not use the site.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-3">2. Use of the site</h2>
            <p>This site is designed to provide information about residential solar panel services in San Miguel de Allende
            and to receive assessment requests. Use of the site for unlawful purposes or actions that harm third parties is prohibited.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-3">3. Estimates and assessments</h2>
            <p>Estimates presented on this site are indicative and do not constitute a formal quote or contract.
            Final system design depends on the technical site assessment, CFE bill analysis and actual property conditions.
            See our{" "}
            <Link href="/en/solar-estimates" className="text-[#D97706] hover:underline">
              Solar Estimate Policy
            </Link>{" "}
            for more information.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-3">4. Intellectual property</h2>
            <p>Site content (text, logos, design) is the property of SOLVIDA or its content suppliers.
            Reproduction without written authorization is not permitted.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-3">5. Limitation of liability</h2>
            <p>SOLVIDA is not liable for direct, indirect or consequential damages arising from the use of this site
            or the information it contains.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-3">6. Modifications</h2>
            <p>SOLVIDA may modify these terms at any time. The updated version will be available at this URL.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-3">7. Governing law</h2>
            <p>These terms are governed by the laws applicable in San Miguel de Allende, Guanajuato, Mexico.
            Any dispute shall be submitted to the competent courts of [JURISDICTION — TO BE CONFIRMED].</p>
          </section>
        </div>
      </div>
    </main>
  );
}
