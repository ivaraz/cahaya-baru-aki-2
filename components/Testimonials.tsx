'use client';

import { Star, MessageSquare, ExternalLink } from 'lucide-react';

export default function Testimonials() {
  const mapLink = 'https://maps.app.goo.gl/JC8FtAcz8pGqFZzN6';

  const reviews = [
    {
      name: 'asep darmawan',
      role: 'Pelanggan Terverifikasi',
      text: 'Toko Cahaya baru, tersedia berbagai merek, dapat penjelasan sangat memuaskan, dibantu untuk pasang dirumah juga dan dibantu pengecekan system pengisian pada kendaraan, serta di cek apabila ada kebocoran arus... Muantap pokonamah, yang punya toko juga standby 24 jam bisa home service, dan kalau misal mogok dijalan gara2 aki, bisa dibantu diantar ke tempat kejadian, tentunya dengan ongkos sewajarnya... Terus ditingkatkan pelayanan ke customernya... Sukses terus...',
      rating: 5,
      date: '3 tahun yang lalu',
    },
    {
      name: 'Silvy Silvy',
      role: 'Pelanggan Terverifikasi',
      text: 'Aki bagus penjual jujur mantap',
      rating: 5,
      date: 'setahun yang lalu',
    },
    {
      name: 'lutfi rohmah',
      role: 'Pelanggan Terverifikasi',
      text: 'Pelayanan yang ramah komplit type nya',
      rating: 5,
      date: '2 tahun yang lalu',
    },
    {
      name: 'Rahmat Hidayat',
      role: 'Pelanggan Terverifikasi',
      text: 'Bagus pisan',
      rating: 5,
      date: '3 tahun yang lalu',
    },
    {
      name: 'Mbah To',
      role: 'Pelanggan Terverifikasi',
      text: '',
      rating: 5,
      date: '4 bulan yang lalu',
    },
    {
      name: 'Adam Indonesia Official',
      role: 'Pelanggan Terverifikasi',
      text: '',
      rating: 5,
      date: '8 bulan yang lalu',
    },
  ];

  return (
    <section id="ulasan" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-brand-600 font-bold mb-2">
            Ulasan Pelanggan
          </h2>
          <p className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            Apa Kata Mereka di Google Maps?
          </p>
          <div className="flex items-center justify-center gap-1.5 mt-4">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <span className="text-sm font-bold text-slate-800">5.0 dari 5 Bintang</span>
            <span className="text-sm text-slate-500">(Berdasarkan Ulasan Maps Asli)</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between hover:shadow-md hover:bg-white hover:border-brand-600/20 transition-all duration-300"
            >
              <div>
                {/* Stars and Date */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400">{review.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Author Profile */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-600 to-amber-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                  <p className="text-xs text-slate-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Write / Read more on Google Maps */}
        <div className="mt-14 text-center">
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 border border-slate-350 text-slate-700 px-6 py-3 rounded-xl font-bold text-sm shadow-sm transition-all"
          >
            <MessageSquare className="w-4 h-4 text-slate-600" />
            <span>Lihat Semua Ulasan di Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>

      </div>
    </section>
  );
}
