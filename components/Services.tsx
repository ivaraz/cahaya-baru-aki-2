import {
  ShoppingBag,
  Wrench,
  MessageCircleQuestion,
  ArrowRight,
} from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";

const services = [
  {
    icon: ShoppingBag,
    title: "Penjualan Aki Mobil & Motor",
    description:
      "Menyediakan berbagai pilihan aki mobil dan motor dari merek terpercaya dengan kondisi baru, original, dan bergaransi.",
    waMessage:
      "Halo Cahaya Baru Aki 2, saya ingin bertanya tentang ketersediaan aki mobil / motor.",
  },
  {
    icon: Wrench,
    title: "Pemasangan Aki",
    description:
      "Layanan bongkar pasang aki secara profesional dan aman untuk membantu kendaraan Anda kembali siap digunakan.",
    waMessage:
      "Halo Cahaya Baru Aki 2, saya ingin meminta bantuan pemasangan aki di Cianjur.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Konsultasi Aki",
    description:
      "Bantu cek kebutuhan aki, kapasitas yang sesuai, serta kecocokan aki dengan mobil atau motor Anda sebelum membeli.",
    waMessage:
      "Halo Cahaya Baru Aki 2, saya ingin konsultasi mengenai aki kendaraan saya.",
  },
];

export default function Services() {
  return (
    <section
      id="layanan"
      aria-labelledby="services-heading"
      className="border-t border-slate-200 bg-slate-50 py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-600">
            Layanan Kami
          </p>

          <h2
            id="services-heading"
            className="text-2xl font-extrabold text-slate-900 sm:text-4xl"
          >
            Solusi Aki Mobil & Motor di Cianjur
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-base">
            Cahaya Baru Aki 2 membantu kebutuhan aki kendaraan Anda, mulai dari
            pembelian, pemasangan, hingga konsultasi.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            const waUrl = generateWhatsAppLink(service.waMessage);

            return (
              <article
                key={service.title}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-600/30 hover:shadow-lg sm:p-8"
              >
                <div>
                  {/* Icon */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 shadow-lg shadow-brand-600/10 transition-transform duration-300 group-hover:scale-105">
                    <Icon aria-hidden="true" className="h-7 w-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-brand-600">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </div>

                {/* CTA */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Tanyakan ${service.title} melalui WhatsApp`}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-all hover:text-brand-700"
                >
                  <span>Tanyakan Layanan</span>

                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
