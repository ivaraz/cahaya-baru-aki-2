import { ShoppingBag, Wrench, MessageCircleQuestion } from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/whatsapp';

export default function Services() {
  const services = [
    {
      icon: ShoppingBag,
      title: 'Penjualan Aki',
      description: 'Menyediakan aki mobil dan motor berbagai tipe & ukuran dari merk-merk terpercaya dengan kondisi baru, original, dan bergaransi.',
      waMessage: 'Halo Cahaya Baru Aki 2, saya ingin bertanya tentang penjualan aki mobil / motor.',
    },
    {
      icon: Wrench,
      title: 'Pemasangan Aki',
      description: 'Layanan bongkar pasang aki secara profesional oleh teknisi berpengalaman. Bebas ribet dan aman untuk kelistrikan kendaraan Anda.',
      waMessage: 'Halo Cahaya Baru Aki 2, saya ingin minta bantuan pemasangan aki di Cianjur.',
    },
    {
      icon: MessageCircleQuestion,
      title: 'Konsultasi Aki',
      description: 'Konsultasikan gejala aki lemah, rekomendasi kapasitas amper aki yang tepat, serta kecocokan tipe aki sebelum membeli.',
      waMessage: 'Halo Cahaya Baru Aki 2, saya ingin konsultasi mengenai kondisi aki kendaraan saya.',
    },
  ];

  return (
    <section id="layanan" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-xs uppercase tracking-widest text-brand-600 font-bold mb-2">
            Layanan Kami
          </h2>
          <p className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            Solusi Lengkap Aki Kendaraan Anda
          </p>
          <p className="text-slate-500 text-sm mt-3">
            Cahaya Baru Aki 2 siap melayani kebutuhan aki mobil dan motor Anda secara profesional di kawasan Cianjur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const waUrl = generateWhatsAppLink(service.waMessage);

            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-brand-600/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center mb-6 shadow-lg shadow-brand-600/10 group-hover:scale-105 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-brand-600 hover:text-brand-700 group-hover:translate-x-1 transition-all"
                >
                  <span>Tanyakan Layanan Ini &rarr;</span>
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
