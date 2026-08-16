"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BatteryCharging,
  Menu,
  X,
  Phone,
  MessageSquare,
  Clock,
} from "lucide-react";
import { generateWhatsAppLink, getDefaultInquiryMessage } from "@/lib/whatsapp";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const waUrl = generateWhatsAppLink(getDefaultInquiryMessage());

  const navLinks = [
    { name: "Beranda", href: "#beranda" },
    // { name: "Keunggulan", href: "#keunggulan" },
    // { name: 'Produk', href: '#produk' },
    { name: "Layanan", href: "#layanan" },
    // { name: "Tentang", href: "#tentang" },
    { name: "Lokasi", href: "#lokasi" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-brand-700 via-brand-600 to-amber-600 text-white text-xs py-1.5 px-4 font-medium">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>
              Buka 24 Jam Nonstop di Cianjur &mdash; Siap Antar & Pasang Aki
              Direct
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-white/90">
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
          <Link href="#beranda" className="flex items-center gap-0 group">
            <div className="flex flex-col justify-center">
              <span className="font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight block leading-none">
                CAHAYA BARU <span className="text-brand-600">AKI 2</span>
              </span>
              <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase leading-none ">
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
                className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
