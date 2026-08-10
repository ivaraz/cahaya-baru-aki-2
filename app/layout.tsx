import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cahayabaruaki2.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Toko Aki Mobil & Motor di Cianjur | Cahaya Baru Aki 2',
  description:
    'Toko aki mobil dan motor terpercaya di Cianjur. Melayani penjualan aki GS Astra, Yuasa, Amaron, Motobatt, dan jasa antar-pasang aki 24 jam nonstop di Jln Arwinda No.49 Tajurhalang Cianjur.',
  keywords: [
    'toko aki terdekat',
    'toko aki Cianjur',
    'toko aki mobil Cianjur',
    'toko aki motor Cianjur',
    'jual aki Cianjur',
    'ganti aki 24 jam Cianjur',
    'Cahaya Baru Aki 2',
  ],
  authors: [{ name: 'Cahaya Baru Aki 2' }],
  creator: 'Cahaya Baru Aki 2',
  publisher: 'Cahaya Baru Aki 2',
  formatDetection: {
    telephone: true,
    address: true,
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: 'Toko Aki Mobil & Motor di Cianjur | Cahaya Baru Aki 2',
    description:
      'Pusat aki mobil dan motor 24 jam di Cianjur. Menyediakan aki berkualitas original dengan layanan antar dan pasang cepat.',
    url: baseUrl,
    siteName: 'Cahaya Baru Aki 2',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
        alt: 'Cahaya Baru Aki 2 - Toko Aki Mobil & Motor 24 Jam Cianjur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Toko Aki Mobil & Motor di Cianjur | Cahaya Baru Aki 2',
    description:
      'Toko aki mobil & motor 24 jam di Cianjur. Jln Arwinda No.49, Tajurhalang, Cianjur.',
    images: ['/images/hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoPartsStore',
    name: 'Cahaya Baru Aki 2',
    description:
      'Toko aki mobil dan motor terpercaya di Cianjur. Melayani penjualan, pemeriksaan kelistrikan, dan antar pasang aki 24 jam nonstop.',
    url: baseUrl,
    telephone: '+6281809833193',
    priceRange: '$$',
    image: `${baseUrl}/images/hero.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jln Arwinda No.49, Tajurhalang',
      addressLocality: 'Cianjur',
      addressRegion: 'Jawa Barat',
      postalCode: '43281',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -6.826,
      longitude: 107.135,
    },
    hasMap: 'https://maps.app.goo.gl/JC8FtAcz8pGqFZzN6',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    areaServed: {
      '@type': 'City',
      name: 'Cianjur',
    },
  };

  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
