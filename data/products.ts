export interface Product {
  id: string;
  name: string;
  category: 'mobil' | 'motor';
  badge?: string;
  capacity: string;
  suitableFor: string;
  description: string;
  image: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'gs-astra-ns60',
    name: 'GS Astra Hybrid NS60 / 46B24L',
    category: 'mobil',
    badge: 'Terpopuler',
    capacity: '12V 45Ah',
    suitableFor: 'Avanza, Xenia, Rush, Terios, Grand Livina, Yaris',
    description: 'Aki mobil Hybrid dengan penguapan air aki rendah, awet, dan memiliki daya ststarter tinggi.',
    image: '/images/products/car-battery-1.png',
  },
  {
    id: 'gs-astra-ns40zl-mf',
    name: 'GS Astra MF NS40ZL',
    category: 'mobil',
    badge: 'Bebas Perawatan',
    capacity: '12V 35Ah',
    suitableFor: 'Calya, Sigra, Agya, Ayla, Honda Brio, Jazz, Mobilio',
    description: 'Aki Maintenance Free (MF) tanpa perlu isi ulang air aki. Sangat cocok untuk mobil city car modern.',
    image: '/images/products/car-battery-1.png',
  },
  {
    id: 'amaron-hilife-55d23l',
    name: 'Amaron Hi-Life 55D23L',
    category: 'mobil',
    badge: 'Garansi & Awet',
    capacity: '12V 60Ah',
    suitableFor: 'Innova Bensin, Honda HR-V, Mazda CX-5, Nissan Serena',
    description: 'Aki teknologi Silver Alloy dengan daya tahan panas tinggi dan performa kelistrikan optimal.',
    image: '/images/products/car-battery-1.png',
  },
  {
    id: 'yuasa-din-55201',
    name: 'Yuasa MF DIN 55201',
    category: 'mobil',
    badge: 'Standar Eropa',
    capacity: '12V 55Ah',
    suitableFor: 'Ford Fiesta, Chevrolet Spin, VW Polo, Mobil Eropa & Amerika',
    description: 'Aki tipe DIN kepala tenggelam standar pabrikan mobil Eropa dengan arus kelistrikan sangat stabil.',
    image: '/images/products/car-battery-1.png',
  },
  {
    id: 'yuasa-ytz5s',
    name: 'Yuasa YTZ5S / YTZ6V',
    category: 'motor',
    badge: 'Terlaris Motor',
    capacity: '12V 3.5Ah - 5Ah',
    suitableFor: 'Honda Beat, Vario 110/125, Scoopy, Yamaha Mio, Supra X 125',
    description: 'Aki kering motor kualitas OEM pabrikan Jepang dengan arus CCA mantap untuk starter responsif.',
    image: '/images/products/motorcycle-battery-1.png',
  },
  {
    id: 'motobatt-mtz5s',
    name: 'Motobatt Gel MTZ5S',
    category: 'motor',
    badge: 'Teknologi Gel',
    capacity: '12V 4.2Ah',
    suitableFor: 'Honda Beat FI, Vario, Yamaha Jupiter, Mio M3, Suzuki Satria',
    description: 'Aki motor Gel anti banting dan anti bocor. Memiliki masa pakai lebih panjang dibanding aki biasa.',
    image: '/images/products/motorcycle-battery-1.png',
  },
  {
    id: 'gs-gtz7v',
    name: 'GS Astra GTZ7V MF',
    category: 'motor',
    badge: 'Khusus Matic Besar',
    capacity: '12V 6Ah',
    suitableFor: 'Yamaha NMAX, Aerox 155, Lexi, Honda CBR 150, KLX 150',
    description: 'Aki motor kering berkapasitas besar khusus untuk matic bongsor dan motor sport injeksi.',
    image: '/images/products/motorcycle-battery-1.png',
  },
  {
    id: 'rocket-n50z',
    name: 'Rocket Battery 55D26R / N50Z',
    category: 'mobil',
    badge: 'Tugas Berat',
    capacity: '12V 60Ah',
    suitableFor: 'Isuzu Panther, Toyota Kijang LGX, Mitsubishi L300, Pick Up',
    description: 'Aki kendaraan komersial dan diesel dengan daya kruk engkol (cranking power) sangat kuat.',
    image: '/images/products/car-battery-1.png',
  },
];
