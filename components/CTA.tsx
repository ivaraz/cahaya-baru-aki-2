import { MessageSquare, PhoneCall, Zap, Clock, MapPin } from "lucide-react";
import { generateWhatsAppLink, getImportantMessage } from "@/lib/whatsapp";

export default function CTA() {
  const waUrl = generateWhatsAppLink(getImportantMessage());

  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden border-y border-slate-200 bg-gradient-to-r from-brand-50 via-white to-brand-50 py-14 sm:py-16"
    >
      {/* Background Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/5 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-700 shadow-sm">
          <Zap
            aria-hidden="true"
            className="h-3.5 w-3.5 fill-brand-600 text-brand-600"
          />
          <span>Respon Cepat 24 Jam Nonstop</span>
        </div>

        {/* Main Heading */}
        <h1
          id="cta-heading"
          className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
        >
          Toko Aki Mobil & Motor 24 Jam di Cianjur
        </h1>

        {/* Supporting Text */}
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          <strong className="font-semibold text-slate-800">
            Butuh aki sekarang?
          </strong>{" "}
          Cahaya Baru Aki 2 siap membantu kebutuhan aki mobil dan motor Anda,
          termasuk layanan antar dan pemasangan di Cianjur dan sekitarnya.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          {/* WhatsApp */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat WhatsApp Cahaya Baru Aki 2"
            className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-emerald-600/15 transition-all duration-200 hover:bg-emerald-500 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 active:scale-[0.98] sm:w-auto"
          >
            <MessageSquare aria-hidden="true" className="h-5 w-5" />
            <span>Chat WhatsApp Sekarang</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+6281809833193"
            aria-label="Telepon Cahaya Baru Aki 2 di 0818-0983-3193"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 text-base font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-[0.98] sm:w-auto"
          >
            <PhoneCall aria-hidden="true" className="h-5 w-5 text-amber-600" />
            <span>Telepon Sekarang</span>
          </a>
        </div>

        {/* Business Information */}
        <div className="mt-7 flex flex-col items-center justify-center gap-3 text-xs text-slate-500 sm:flex-row sm:gap-5">
          <div className="flex items-center gap-2">
            <Clock aria-hidden="true" className="h-4 w-4 text-emerald-600" />
            <span>24 Jam / 7 Hari</span>
          </div>

          <span
            aria-hidden="true"
            className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block"
          />

          <div className="flex items-center gap-2">
            <MapPin aria-hidden="true" className="h-4 w-4 text-brand-600" />
            <span>Cianjur &amp; Sekitarnya</span>
          </div>
        </div>

        {/* Small reassurance */}
        <p className="mt-4 text-xs text-slate-400">
          Hubungi kami untuk informasi ketersediaan aki dan layanan pemasangan.
        </p>
      </div>
    </section>
  );
}
