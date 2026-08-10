import { CheckCircle, MapPin, Clock, ShieldAlert } from 'lucide-react';

export default function About() {
  return (
    <section id="tentang" className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-xs uppercase tracking-widest text-brand-500 font-bold mb-2">
                Tentang Kami
              </h2>
              <p className="text-2xl sm:text-4xl font-extrabold text-white">
                Cahaya Baru Aki 2 Cianjur
              </p>
            </div>

            <p className="text-slate-300 text-base leading-relaxed">
              <strong>Cahaya Baru Aki 2</strong> adalah toko spesialis penjualan dan pelayanan aki mobil serta motor yang berlokasi di Tajurhalang, Cianjur. Kami hadir untuk membantu pemilik kendaraan mendapatkan solusi aki yang tepat, tahan lama, dan terjangkau.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              Memahami betapa pentingnya keandalan aki bagi aktivitas harian maupun kondisi darurat, kami menyediakan layanan operasional 24 jam nonstop. Baik Anda membutuhkan penggantian aki di toko maupun bantuan langsung saat aki mogok di jalan kawasan Cianjur, tim kami siap merespon kebutuhan Anda dengan cepat dan ramah.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-slate-900 p-4 rounded-xl border border-slate-800">
                <MapPin className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Lokasi Strategis</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Mudah dijangkau di Jalan Arwinda No.49 Tajurhalang, Cianjur.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-900 p-4 rounded-xl border border-slate-800">
                <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Buka 24/7 Nonstop</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Selalu siap kapan saja Anda membutuhkan aki baru.</p>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Pilihan produk komplit untuk semua jenis kendaraan roda dua & roda empat</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Jaminan barang asli dan bergaransi resmi pabrikan</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Harga transparan & bersahabat tanpa biaya tersembunyi</span>
              </div>
            </div>
          </div>

          {/* Right Highlight Box */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-8 rounded-3xl border border-slate-800 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-600/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-600/20 border border-brand-500/30 flex items-center justify-center">
                  <ShieldAlert className="w-6 h-6 text-brand-400" />
                </div>
                <div>
                  <h3 className="font-extrabold text-white text-lg">Komitmen Pelayanan</h3>
                  <p className="text-xs text-slate-400">Kepercayaan & Kepuasan Pelanggan</p>
                </div>
              </div>

              <blockquote className="text-slate-300 text-sm italic leading-relaxed border-l-2 border-brand-500 pl-4 py-1">
                &ldquo;Kami percaya keberlanjutan usaha toko aki dibangun di atas kejujuran spesifikasi produk dan kecepatan respon saat konsumen membutuhkan pertolongan di jalan.&rdquo;
              </blockquote>

              <div className="mt-6 pt-6 border-t border-slate-800 flex items-center justify-between text-xs font-medium">
                <span className="text-slate-400">Toko Aki Cianjur</span>
                <span className="text-brand-400 font-bold">Cahaya Baru Aki 2</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
