"use client";
import type { Dictionary, Locale } from "@/lib/i18n";

type Props = { dict: Dictionary; locale: Locale };

export default function TopBar({ dict, locale }: Props) {
  const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER || "";
  const wa = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const waMsg = encodeURIComponent(dict.whatsapp.prefilledMessage);
  const altLocale = locale === "es" ? "en" : "es";

  return (
    <div className="w-full bg-[#1C1917] text-[#A8A29E] text-xs py-2 px-4">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <span className="hidden sm:inline">{dict.topbar.message}</span>
        <div className="flex items-center gap-4 ml-auto">
          {phone && (
            <a
              href={`tel:${phone}`}
              onClick={() => trackEvent("PhoneClicked", { locale })}
              className="flex items-center gap-1.5 hover:text-[#D97706] transition-colors"
              aria-label={dict.topbar.phone}
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              {phone}
            </a>
          )}
          {wa && (
            <a
              href={`https://wa.me/${wa}?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("WhatsAppClicked", { locale, source: "topbar" })}
              className="flex items-center gap-1.5 text-[#25D366] hover:text-green-400 transition-colors"
              aria-label={dict.topbar.whatsapp}
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.118 1.528 5.85L.057 23.928a.5.5 0 0 0 .614.614l6.079-1.471A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.96 0-3.793-.537-5.357-1.471l-.384-.226-3.603.872.871-3.604-.226-.383A9.949 9.949 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              WhatsApp
            </a>
          )}
          <a
            href={`/${altLocale}`}
            className="border border-[#44403C] hover:border-[#D97706] hover:text-[#D97706] px-2 py-0.5 rounded text-xs transition-colors font-medium"
            aria-label={dict.nav.langLabel}
          >
            {dict.nav.langSwitch}
          </a>
        </div>
      </div>
    </div>
  );
}

function trackEvent(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  // GA4
  if ((window as unknown as Record<string, unknown>).gtag) {
    (window as unknown as Record<string, (...args: unknown[]) => void>).gtag("event", event, params);
  }
  // Meta Pixel
  if ((window as unknown as Record<string, unknown>).fbq) {
    (window as unknown as Record<string, (...args: unknown[]) => void>).fbq("trackCustom", event, params);
  }
}
