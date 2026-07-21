import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | SOLVIDA Solar",
  robots: { index: true, follow: false },
};

const BUSINESS = process.env.NEXT_PUBLIC_LEGAL_BUSINESS_NAME || "[BUSINESS NAME — TO BE CONFIGURED]";
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "[EMAIL — TO BE CONFIGURED]";
const PHONE = process.env.NEXT_PUBLIC_PHONE_NUMBER || "[PHONE — TO BE CONFIGURED]";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#FEFBF6] py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/en" className="text-[#D97706] text-sm hover:underline mb-8 block">← Home</Link>

        <h1 className="text-3xl font-extrabold text-[#1C1917] mb-2">Privacy Policy</h1>
        <p className="text-[#78716C] text-sm mb-8">Last updated: July 2026</p>

        <div className="space-y-6 text-[#44403C] text-sm leading-relaxed">
          <p className="bg-[#FEF3C7] border border-[#FDE68A] rounded-lg p-3 text-[#92400E]">
            <strong>Notice:</strong> Information in brackets requires configuration by the business owner before publishing.
          </p>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-3">Data controller</h2>
            <p>
              <strong>{BUSINESS}</strong> (&ldquo;SOLVIDA&rdquo;), reachable at {CONTACT_EMAIL} and {PHONE},
              is responsible for processing the personal data you provide through this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-3">Data we collect</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Full name</li>
              <li>WhatsApp or phone number</li>
              <li>Email address</li>
              <li>Zip code and neighborhood or community</li>
              <li>Property information (type, approximate electricity usage, characteristics)</li>
              <li>CFE electricity bill, when voluntarily shared</li>
              <li>Preferred language and payment preference</li>
              <li>Technical browsing information (IP address, browser type, traffic source)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-3">How we use your data</h2>
            <p className="font-semibold">Primary purposes:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Preparing a personalized initial solar assessment</li>
              <li>Contacting you by WhatsApp, email or phone to follow up on your request</li>
              <li>Coordinating a technical site visit or assessment call</li>
              <li>Preparing and delivering a commercial proposal</li>
              <li>Managing the solar project if contracted</li>
            </ul>
            <p className="font-semibold mt-3">Secondary purposes:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Sending relevant information about solar energy in San Miguel de Allende (you can unsubscribe at any time)</li>
              <li>Internal statistical analysis to improve our service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-3">Data sharing</h2>
            <p>We do not sell or share your personal data with third parties for their own commercial purposes.
            We may share information with technology providers that support site operations, under confidentiality agreements.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-3">Your rights</h2>
            <p>You have the right to access, correct, delete or restrict the processing of your personal data.
            To exercise these rights, contact us at <strong>{CONTACT_EMAIL}</strong> with your name and the right you wish to exercise.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-3">CFE electricity bill</h2>
            <p>If you share your CFE bill, we use it exclusively to prepare your solar assessment.
            We do not publish or share bill contents with third parties without your authorization.
            Bill contents are not recorded in public-facing logs.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-3">Cookies and tracking</h2>
            <p>We use first-party and third-party cookies (Google Analytics, Meta Pixel) to analyze traffic
            and measure the effectiveness of our communications. You can configure your browser to reject cookies.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-3">Changes to this policy</h2>
            <p>We may update this policy. The current version will always be available at this URL.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-3">Contact</h2>
            <p>Questions about this policy? Contact us at: <strong>{CONTACT_EMAIL}</strong></p>
          </section>
        </div>
      </div>
    </main>
  );
}
