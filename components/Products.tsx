'use client';

import { useState } from 'react';
import { PRODUCTS, Product } from '@/data/products';
import ProductCard from './ProductCard';
import { Car, Bike, LayoutGrid } from 'lucide-react';

export default function Products() {
  const [activeTab, setActiveTab] = useState<'semua' | 'mobil' | 'motor'>('semua');

  const filteredProducts = PRODUCTS.filter((product) => {
    if (activeTab === 'mobil') return product.category === 'mobil';
    if (activeTab === 'motor') return product.category === 'motor';
    return true;
  });

  return (
    <section id="produk" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-xs uppercase tracking-widest text-brand-600 font-bold mb-2">
            Katalog Produk
          </h2>
          <p className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            Pilihan Aki Mobil & Motor Terbaik
          </p>
          <p className="text-slate-500 text-sm mt-3">
            Pilih aki yang sesuai dengan jenis dan tipe kendaraan Anda. Klik tombol <strong>Tanya Harga</strong> untuk mengecek stok & harga promo hari ini via WhatsApp.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-xl bg-slate-100 border border-slate-200 gap-1 sm:gap-2">
            <button
              onClick={() => setActiveTab('semua')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'semua'
                  ? 'bg-brand-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-sm'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>Semua Produk</span>
            </button>

            <button
              onClick={() => setActiveTab('mobil')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'mobil'
                  ? 'bg-brand-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-sm'
              }`}
            >
              <Car className="w-4 h-4" />
              <span>Aki Mobil</span>
            </button>

            <button
              onClick={() => setActiveTab('motor')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'motor'
                  ? 'bg-brand-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-sm'
              }`}
            >
              <Bike className="w-4 h-4" />
              <span>Aki Motor</span>
            </button>
          </div>
        </div>

        {/* Grid Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center bg-slate-50 p-6 rounded-2xl border border-slate-200 max-w-3xl mx-auto">
          <p className="text-slate-600 text-sm">
            Tidak menemukan tipe aki yang Anda cari? Kami juga menyediakan berbagai tipe aki khusus lainnya.
          </p>
          <span className="inline-block mt-2 text-xs font-semibold text-brand-600">
            Hubungi kami via WhatsApp untuk cek ketersediaan merk & tipe langka lainnya!
          </span>
        </div>

      </div>
    </section>
  );
}
