import Image from 'next/image';
import Link from 'next/link';
import { MessageSquare, ArrowRight, ShieldCheck, Clock, Truck, Wrench } from 'lucide-react';
import { generateWhatsAppLink, getDefaultInquiryMessage } from '@/lib/whatsapp';

export default function Hero() {
  const waUrl = generateWhatsAppLink(getDefaultInquiryMessage());

  return (
    <section id="beranda" className="relative bg-slate-950 pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
      {/* Background Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-900/20 via-slate-950 to-slate-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-brand-400">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-ping"></span>
              <span>Layanan Darurat Aki 24 Jam Cianjur</span>
            </div>

            {/* Main Headline H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight sm:leading-tight">
              Toko Aki Mobil & Motor Terpercaya di <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-amber-500">Cianjur</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Cahaya Baru Aki 2 menyediakan aki mobil dan motor berkualitas tinggi dari berbagai merk ternama. Kami melayani penjualan, pengecekan, dan antar-pasang aki langsung ke lokasi Anda di wilayah Cianjur selama 24 jam nonstop.
            </p>

            {/* Action Buttons (CTAs) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-3.5 rounded-xl shadow-xl shadow-emerald-950/50 transition-all hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>Tanya Harga via WhatsApp</span>
              </a>

              <Link
                href="#produk"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold px-6 py-3.5 rounded-xl transition-all"
              >
                <span>Lihat Produk</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* Quick Feature Highlights */}
            <div className="pt-6 border-t border-slate-900 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-medium text-slate-400">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <ShieldCheck className="w-4 h-4 text-brand-500 shrink-0" />
                <span>100% Produk Original</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Truck className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Layanan Pesan Antar</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start col-span-2 sm:col-span-1">
                <Wrench className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Bantu Pasang di Tempat</span>
              </div>
            </div>

          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-slate-950 bg-slate-900">
              <Image
                src="/images/hero.png"
                alt="Toko Cahaya Baru Aki 2 Cianjur - Aki Mobil dan Motor 24 Jam"
                width={700}
                height={500}
                priority
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-800 text-xs">
                <p className="font-semibold text-white">Cahaya Baru Aki 2 - Tajurhalang Cianjur</p>
                <p className="text-slate-400 mt-0.5">Jl. Arwinda No.49, Tajurhalang, Kec. Cianjur</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
