import Link from 'next/link';
import { BatteryCharging, MapPin, Phone, MessageSquare, Clock, Navigation } from 'lucide-react';
import { generateWhatsAppLink, getDefaultInquiryMessage } from '@/lib/whatsapp';

export default function Footer() {
  const waUrl = generateWhatsAppLink(getDefaultInquiryMessage());
  const mapLink = 'https://maps.app.goo.gl/JC8FtAcz8pGqFZzN6';

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Summary */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="#beranda" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 p-2 flex items-center justify-center">
                <BatteryCharging className="w-6 h-6 text-white" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                CAHAYA BARU <span className="text-brand-500">AKI 2</span>
              </span>
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              Toko spesialis aki mobil dan motor terpercaya di Cianjur. Melayani penjualan, konsultasi, serta layanan darurat antar dan pasang aki 24 jam nonstop.
            </p>

            <div className="pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-xs font-semibold shadow-md transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>WhatsApp: 0818-0983-3193</span>
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#beranda" className="hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="#keunggulan" className="hover:text-white transition-colors">
                  Keunggulan Usaha
                </Link>
              </li>
              <li>
                <Link href="#produk" className="hover:text-white transition-colors">
                  Katalog Produk Aki
                </Link>
              </li>
              <li>
                <Link href="#layanan" className="hover:text-white transition-colors">
                  Layanan &amp; Jasa
                </Link>
              </li>
              <li>
                <Link href="#tentang" className="hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#lokasi" className="hover:text-white transition-colors">
                  Lokasi Toko
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Kontak &amp; Alamat
            </h4>
            
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  Jln Arwinda No.49, Tajurhalang, Kec. Cianjur, Kabupaten Cianjur, Jawa Barat 43281
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-emerald-400 font-semibold">
                  Operasional: 24 Jam / 7 Hari
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:081809833193" className="text-slate-300 hover:text-white">
                  0818-0983-3193
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-brand-400 hover:text-brand-300 text-xs font-semibold"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Petunjuk Arah Google Maps &rarr;</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Cahaya Baru Aki 2. All rights reserved.</p>
          <p>Toko Aki Mobil &amp; Motor Cianjur 24 Jam</p>
        </div>
      </div>
    </footer>
  );
}
