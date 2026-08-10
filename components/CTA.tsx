import { MessageSquare, PhoneCall, Zap, Clock } from 'lucide-react';
import { generateWhatsAppLink, getDefaultInquiryMessage } from '@/lib/whatsapp';

export default function CTA() {
  const waUrl = generateWhatsAppLink(getDefaultInquiryMessage());

  return (
    <section className="py-16 bg-gradient-to-r from-brand-950 via-slate-950 to-brand-950 border-y border-slate-800 relative overflow-hidden">
      {/* Background Accent Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-950 border border-brand-800 text-xs font-semibold text-brand-400 mb-4">
          <Zap className="w-3.5 h-3.5 fill-brand-400" />
          <span>Respon Cepat 24 Jam Nonstop</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Butuh Aki Sekarang?
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
          Aki mobil atau motor Anda bermasalah, mogok, atau butuh ganti baru? Jangan ragu, tim <strong>Cahaya Baru Aki 2</strong> siap melayani Anda di wilayah Cianjur!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-emerald-950/60 transition-all hover:scale-105 active:scale-95 text-base"
          >
            <MessageSquare className="w-5 h-5 fill-white" />
            <span>Chat WhatsApp</span>
          </a>

          <a
            href="tel:081809833193"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold px-7 py-4 rounded-xl transition-all text-base"
          >
            <PhoneCall className="w-5 h-5 text-amber-400" />
            <span>Hubungi Telepon: 0818-0983-3193</span>
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-slate-400 mt-6">
          <Clock className="w-4 h-4 text-emerald-400" />
          <span>Buka 24 Jam Setiap Hari &bull; Cianjur &amp; Sekitarnya</span>
        </div>
      </div>
    </section>
  );
}
