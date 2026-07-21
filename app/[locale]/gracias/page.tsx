import Link from "next/link";
import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: dict.thankYou.heading,
    robots: { index: false },
  };
}

export default async function GraciasPage({ params }: Props) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const t = dict.thankYou;
  const wa = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const msg = encodeURIComponent(dict.whatsapp.prefilledMessage);

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-20 bg-[#FEFBF6]">
      <div className="max-w-lg w-full text-center">
        <div className="w-20 h-20 bg-[#FEF3C7] rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-[#D97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] mb-4">
          {t.heading}
        </h1>
        <p className="text-[#78716C] text-lg mb-3">{t.message}</p>

        <div className="bg-[#F5F0E8] border border-[#E7E1D5] rounded-2xl p-5 mb-8 text-left">
          <p className="text-[#44403C] font-semibold text-sm mb-1">{t.nextStep}</p>
          <p className="text-[#78716C] text-sm leading-relaxed">{t.nextStepText}</p>
        </div>

        <p className="text-[#A8A29E] text-sm mb-6">{t.note}</p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {wa && (
            <a
              href={`https://wa.me/${wa}?text=${msg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-green-500 text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-colors"
            >
              {t.ctaWhatsapp}
            </a>
          )}
          <Link
            href={`/${locale}`}
            className="inline-flex items-center justify-center border border-[#E7E1D5] hover:border-[#D97706] text-[#44403C] hover:text-[#D97706] font-semibold px-7 py-3.5 rounded-full text-sm transition-colors"
          >
            {t.ctaHome}
          </Link>
        </div>
      </div>
    </main>
  );
}
