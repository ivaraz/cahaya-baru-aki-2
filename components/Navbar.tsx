'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BatteryCharging, Menu, X, Phone, MessageSquare, Clock } from 'lucide-react';
import { generateWhatsAppLink, getDefaultInquiryMessage } from '@/lib/whatsapp';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const waUrl = generateWhatsAppLink(getDefaultInquiryMessage());

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Keunggulan', href: '#keunggulan' },
    { name: 'Produk', href: '#produk' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Lokasi', href: '#lokasi' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 transition-all">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-brand-700 via-brand-600 to-amber-600 text-white text-xs py-1.5 px-4 font-medium">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Buka 24 Jam Nonstop di Cianjur &mdash; Siap Antar & Pasang Aki Direct</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-slate-100">
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              <span>24 Jam / 7 Hari</span>
            </div>
            <a 
              href="tel:081809833193" 
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>0818-0983-3193</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="#beranda" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 p-2 shadow-lg shadow-brand-900/40 flex items-center justify-center group-hover:scale-105 transition-transform">
              <BatteryCharging className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-extrabold text-lg sm:text-xl text-white tracking-tight block leading-none">
                CAHAYA BARU <span className="text-brand-500">AKI 2</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">
                Toko Aki Mobil & Motor Cianjur
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-brand-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg shadow-emerald-900/30 transition-all hover:scale-105 active:scale-95"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Chat WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden p-2 rounded-lg bg-emerald-600 text-white"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-lg font-semibold text-center shadow-lg"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>Hubungi WhatsApp (24 Jam)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
