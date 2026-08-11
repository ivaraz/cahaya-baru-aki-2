import Image from 'next/image';
import { MessageSquare, Car, Bike, CheckCircle2 } from 'lucide-react';
import { Product } from '@/data/products';
import { generateWhatsAppLink, getProductInquiryMessage } from '@/lib/whatsapp';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const waMessage = getProductInquiryMessage(product.name);
  const waUrl = generateWhatsAppLink(waMessage);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 hover:border-brand-600/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-md hover:shadow-lg">
      <div>
        {/* Product Image & Badges */}
        <div className="relative w-full h-48 bg-slate-50 flex items-center justify-center p-4 overflow-hidden border-b border-slate-200">
          <Image
            src={product.image}
            alt={`${product.name} - Toko Aki Cianjur`}
            width={300}
            height={200}
            className="object-contain max-h-40 group-hover:scale-105 transition-transform duration-300"
          />

          {/* Category Pill */}
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-200 text-xs font-semibold text-slate-700 flex items-center gap-1.5 shadow-sm">
            {product.category === 'mobil' ? (
              <>
                <Car className="w-3.5 h-3.5 text-brand-600" />
                <span>Aki Mobil</span>
              </>
            ) : (
              <>
                <Bike className="w-3.5 h-3.5 text-amber-600" />
                <span>Aki Motor</span>
              </>
            )}
          </div>

          {/* Product Special Badge */}
          {product.badge && (
            <div className="absolute top-3 right-3 bg-brand-600 text-white px-2.5 py-1 rounded-md text-xs font-bold shadow-md">
              {product.badge}
            </div>
          )}
        </div>

        {/* Content Details */}
        <div className="p-5 space-y-3">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors leading-snug">
            {product.name}
          </h3>

          <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 bg-amber-50 px-2.5 py-1 rounded border border-amber-200/50 w-fit">
            <span>Kapasitas: {product.capacity}</span>
          </div>

          <p className="text-slate-600 text-xs leading-relaxed">
            {product.description}
          </p>

          <div className="pt-2 border-t border-slate-100 text-xs text-slate-500 space-y-1">
            <div className="font-semibold text-slate-800 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Cocok untuk:</span>
            </div>
            <p className="text-slate-500 italic pl-4 text-[11px]">{product.suitableFor}</p>
          </div>
        </div>
      </div>

      {/* Button CTA */}
      <div className="p-5 pt-0">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-4 rounded-xl shadow-md text-sm transition-all active:scale-95"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span>Tanya Harga</span>
        </a>
      </div>
    </div>
  );
}
