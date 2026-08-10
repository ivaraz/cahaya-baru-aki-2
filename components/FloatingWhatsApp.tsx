'use client';

import { MessageSquare } from 'lucide-react';
import { generateWhatsAppLink, getDefaultInquiryMessage } from '@/lib/whatsapp';

export default function FloatingWhatsApp() {
  const waUrl = generateWhatsAppLink(getDefaultInquiryMessage());

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp 24 Jam"
      className="fixed bottom-5 right-5 z-50 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl shadow-emerald-950/80 flex items-center gap-2.5 group transition-all duration-300 hover:scale-110 active:scale-95 border border-emerald-400/40"
    >
      <div className="relative">
        <MessageSquare className="w-6 h-6 fill-white" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
      </div>
      <span className="hidden sm:inline-block text-xs font-extrabold tracking-wide">
        Chat WA 24 Jam
      </span>
    </a>
  );
}
