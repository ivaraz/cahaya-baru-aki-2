# Panduan Pemasangan & Pengoperasian (README)

Panduan ini menjelaskan cara memasang dan menjalankan website **Cahaya Baru Aki 2** di laptop atau komputer lain dari awal.

---

## 📋 Prasyarat Sistem

Sebelum memasang aplikasi, pastikan laptop baru Anda sudah menginstal perangkat lunak berikut:

1. **Node.js** (Versi LTS direkomendasikan, minimal versi 18 atau lebih baru).
   - [Unduh Node.js di sini](https://nodejs.org/)
2. **Git** (Opsional, untuk clone repository).
   - [Unduh Git di sini](https://git-scm.com/)
3. **Text Editor** (Direkomendasikan menggunakan Visual Studio Code).
   - [Unduh VS Code di sini](https://code.visualstudio.com/)

---

## 🚀 Langkah Pemasangan

### Langkah 1: Menyalin Source Code
Anda dapat memindahkan folder proyek menggunakan USB Flashdisk, atau jika menggunakan Git, lakukan clone melalui terminal:
```bash
git clone <url-repository-anda>
```

### Langkah 2: Membuka Proyek
1. Buka aplikasi **Visual Studio Code**.
2. Klik **File > Open Folder...** lalu pilih folder **Cahaya Baru Aki 2**.
3. Buka Terminal di VS Code dengan menekan tombol kombinasi `Ctrl + ~` (atau klik menu **Terminal > New Terminal**).

### Langkah 3: Menginstal Dependensi
Di terminal VS Code, jalankan perintah berikut untuk menginstal semua pustaka pendukung (Next.js, React, Tailwind CSS, Lucide Icons, dll):
```bash
npm install
```
*Catatan: Pastikan laptop terhubung dengan koneksi internet yang stabil saat proses penginstalan berlangsung.*

---

## 💻 Cara Menjalankan Aplikasi

### 1. Menjalankan Server Pengembangan (Development Mode)
Untuk melihat website dan melakukan pengeditan secara lokal (real-time):
```bash
npm run dev
```
Setelah berjalan, buka browser Anda lalu kunjungi:
👉 **[http://localhost:3000](http://localhost:3000)**

### 2. Membuat Build Produksi (Production Mode)
Jika website siap diunggah ke server hosting atau ingin dites performa maksimalnya:
```bash
# 1. Compile proyek menjadi file statis yang dioptimalkan
npm run build

# 2. Jalankan server produksi lokal untuk melihat hasilnya
npm run start
```

---

## 🛠️ Informasi Penting & Cara Kustomisasi

- **Nomor WhatsApp**:
  Jika ingin mengubah nomor tujuan chat WhatsApp, silakan buka file [`lib/whatsapp.ts`](file:///c:/Users/Labkom-1/Documents/RIFA/Cahaya%20Baru%20Aki%202/lib/whatsapp.ts) dan ganti konstanta `PHONE_NUMBER` menggunakan format internasional tanpa simbol `+` (contoh: `6281809833193`).
- **Data Produk**:
  Katalog baterai mobil dan motor tersimpan di file [`data/products.ts`](file:///c:/Users/Labkom-1/Documents/RIFA/Cahaya%20Baru%20Aki%202/data/products.ts). Anda dapat menambah, menghapus, atau mengganti spesifikasi produk langsung di sana.
