import { Shield, Zap, Wrench, Clock } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Shield,
      title: 'Produk Berkualitas',
      description: 'Menyediakan aki asli & terjamin kualitasnya dari merk terpercaya seperti GS Astra, Yuasa, Amaron, dan Motobatt.',
      iconColor: 'text-brand-500',
      bgColor: 'bg-brand-950/50 border-brand-900/50',
    },
    {
      icon: Zap,
      title: 'Layanan Cepat',
      description: 'Respon cepat untuk kebutuhan aki darurat. Bebas khawatir saat kendaraan mogok atau aki soak mendadak.',
      iconColor: 'text-amber-500',
      bgColor: 'bg-amber-950/50 border-amber-900/50',
    },
    {
      icon: Wrench,
      title: 'Pemasangan Aki',
      description: 'Didukung pemasangan rapi, aman, dan pengecekan tegangan pengisian kelistrikan kendaraan Anda.',
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-950/50 border-blue-900/50',
    },
    {
      icon: Clock,
      title: 'Buka 24 Jam',
      description: 'Siap melayani 24 jam sehari, 7 hari seminggu. Toko aki Cianjur yang siap kapan saja Anda butuhkan.',
      iconColor: 'text-emerald-500',
      bgColor: 'bg-emerald-950/50 border-emerald-900/50',
    },
  ];

  return (
    <section id="keunggulan" className="py-16 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs uppercase tracking-widest text-brand-500 font-bold mb-2">
            Mengapa Memilih Kami
          </h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-white">
            Keunggulan Cahaya Baru Aki 2
          </p>
          <p className="text-slate-400 text-sm mt-2">
            Solusi terbaik dan terpercaya untuk seluruh kebutuhan aki kendaraan Anda di Cianjur.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${item.bgColor}`}>
                  <Icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
