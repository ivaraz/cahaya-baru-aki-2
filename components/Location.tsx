import { MapPin, Clock, Phone, ExternalLink, Navigation } from 'lucide-react';

export default function Location() {
  const mapLink = 'https://maps.app.goo.gl/JC8FtAcz8pGqFZzN6';

  return (
    <section id="lokasi" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs uppercase tracking-widest text-brand-600 font-bold mb-2">
            Lokasi Toko
          </h2>
          <p className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            Kunjungi Cahaya Baru Aki 2
          </p>
          <p className="text-slate-500 text-sm mt-3">
            Dapatkan aki berkualitas dan layanan pemasangan langsung di toko kami di Cianjur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Info Details Box */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-6 shadow-md">

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-brand-600" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                  Alamat Lengkap
                </h3>
                <p className="text-slate-800 font-bold text-base mt-1 leading-snug">
                  Jln Arwinda No.49, Tajurhalang, Kec. Cianjur, Kabupaten Cianjur, Jawa Barat 43281
                </p>
              </div>
            </div>

            {/* Operational Hours */}
            <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                  Jam Operasional
                </h3>
                <p className="text-emerald-600 font-extrabold text-lg mt-0.5">
                  24 Jam / 7 Hari Nonstop
                </p>
                <p className="text-xs text-slate-500">Siap melayani kebutuhan aki kapan saja.</p>
              </div>
            </div>

            {/* Phone & WhatsApp */}
            <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                  Kontak Telepon / WA
                </h3>
                <p className="text-slate-800 font-bold text-lg mt-0.5">
                  0818-0983-3193
                </p>
                <p className="text-xs text-slate-500">Hubungi langsung via telepon atau WhatsApp.</p>
              </div>
            </div>

            {/* Google Maps Button CTA */}
            <div className="pt-4">
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-brand-600 hover:bg-brand-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all hover:scale-[1.02]"
              >
                <Navigation className="w-5 h-5" />
                <span>Buka di Google Maps</span>
                <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
              </a>
            </div>

          </div>

          {/* Embedded Google Maps */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-md min-h-[380px] relative">
            <iframe
              title="Peta Lokasi Cahaya Baru Aki 2 Cianjur"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.876439740129!2d107.1742646!3d-6.784887799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68532e566cedf9%3A0x9ef699d25f991581!2sCAHAYA%20BARU%20AKI%202!5e0!3m2!1sid!2sid!4v1786422264587!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-full min-h-[380px] rounded-3xl"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
