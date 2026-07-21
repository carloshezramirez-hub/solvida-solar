import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";

type Props = { dict: Dictionary; locale: Locale };

export default function Footer({ dict, locale }: Props) {
  const { footer } = dict;
  const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER || "";
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1917] border-t border-[#292524] py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-extrabold mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              <span className="text-[#D97706]">SOL</span>
              <span className="text-white">VIDA</span>
            </div>
            <p className="text-[#78716C] text-sm leading-relaxed mb-4 max-w-xs">
              {footer.tagline}
            </p>
            <p className="text-[#78716C] text-xs">{footer.serviceArea}</p>
            <p className="text-[#78716C] text-xs mt-1">{footer.bilingual}</p>
            {phone && (
              <a href={`tel:${phone}`} className="block text-[#78716C] hover:text-[#D97706] text-xs mt-2 transition-colors">
                {phone}
              </a>
            )}
            {email && (
              <a href={`mailto:${email}`} className="block text-[#78716C] hover:text-[#D97706] text-xs mt-1 transition-colors">
                {email}
              </a>
            )}
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">{footer.navTitle}</h4>
            <ul className="space-y-2.5">
              {footer.navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[#78716C] hover:text-[#D97706] text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">{footer.legalTitle}</h4>
            <ul className="space-y-2.5">
              {footer.legalLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[#78716C] hover:text-[#D97706] text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-[#292524]">
              <Link
                href={locale === "en" ? "/es" : "/en"}
                className="text-[#78716C] hover:text-[#D97706] text-xs transition-colors"
              >
                {locale === "en" ? "Español" : "English"}
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[#292524] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#44403C] text-xs">
            © {year} SOLVIDA Solar. {footer.rightsReserved}
          </p>
          <p className="text-[#44403C] text-xs">
            {locale === "en"
              ? "Residential solar · San Miguel de Allende"
              : "Solar residencial · San Miguel de Allende"}
          </p>
        </div>
      </div>
    </footer>
  );
}
