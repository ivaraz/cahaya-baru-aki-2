import {
  MapPin,
  Clock,
  Phone,
  ExternalLink,
  Navigation,
  MessageSquare,
} from "lucide-react";
import { generateWhatsAppLink, getImportantMessage } from "@/lib/whatsapp";

export default function Location() {
  const mapLink = "https://maps.app.goo.gl/JC8FtAcz8pGqFZzN6";
  const phoneNumber = "+6281809833193";
  const displayPhone = "0818-0983-3193";

  const waUrl = generateWhatsAppLink(getImportantMessage());

  return (
    <section
      id="lokasi"
      aria-labelledby="location-heading"
      className="border-t border-slate-200 bg-slate-50 py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-600">
            Lokasi Toko
          </p>

          <h2
            id="location-heading"
            className="text-2xl font-extrabold text-slate-900 sm:text-4xl"
          >
            Lokasi Cahaya Baru Aki 2 di Cianjur
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-base">
            Kunjungi toko kami atau hubungi tim Cahaya Baru Aki 2 untuk
            mendapatkan informasi aki dan layanan pemasangan.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Information */}
          <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-md sm:p-8 lg:col-span-5">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-brand-100 bg-brand-50">
                <MapPin aria-hidden="true" className="h-6 w-6 text-brand-600" />
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Alamat Toko
                </h3>

                <address className="mt-1 text-base font-bold not-italic leading-snug text-slate-800">
                  Jln Arwinda No.49, Tajurhalang,
                  <br />
                  Kec. Cianjur, Kabupaten Cianjur,
                  <br />
                  Jawa Barat 43281
                </address>
              </div>
            </div>

            {/* Operational Hours */}
            <div className="flex items-start gap-4 border-t border-slate-100 pt-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-amber-100 bg-amber-50">
                <Clock aria-hidden="true" className="h-6 w-6 text-amber-600" />
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Jam Operasional
                </h3>

                <p className="mt-0.5 text-lg font-extrabold text-emerald-600">
                  24 Jam / 7 Hari
                </p>

                <p className="text-xs text-slate-500">
                  Siap melayani kebutuhan aki kapan saja.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-start gap-4 border-t border-slate-100 pt-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50">
                <Phone
                  aria-hidden="true"
                  className="h-6 w-6 text-emerald-600"
                />
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Kontak
                </h3>

                <a
                  href={`tel:${phoneNumber}`}
                  className="mt-0.5 block text-lg font-bold text-slate-800 hover:text-brand-600"
                >
                  {displayPhone}
                </a>

                <p className="text-xs text-slate-500">
                  Telepon atau WhatsApp untuk bantuan.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-1 gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Buka lokasi Cahaya Baru Aki 2 di Google Maps"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/10 transition-all hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 active:scale-[0.98]"
              >
                <Navigation aria-hidden="true" className="h-5 w-5" />

                <span>Google Maps</span>

                <ExternalLink
                  aria-hidden="true"
                  className="h-4 w-4 opacity-70"
                />
              </a>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat WhatsApp Cahaya Baru Aki 2"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/10 transition-all hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 active:scale-[0.98]"
              >
                <MessageSquare aria-hidden="true" className="h-5 w-5" />

                <span>Chat WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Google Maps */}
          <div className="relative min-h-[380px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md lg:col-span-7">
            <iframe
              title="Lokasi Cahaya Baru Aki 2 di Cianjur"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.876439740129!2d107.1742646!3d-6.784887799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68532e566cedf9%3A0x9ef699d25f991581!2sCAHAYA%20BARU%20AKI%202!5e0!3m2!1sid!2sid!4v1786422264587!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{
                border: 0,
                minHeight: "380px",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="h-full min-h-[380px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
