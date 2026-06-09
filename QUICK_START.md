# 🎉 Quick Start Guide - Website Ulang Tahun Romantis

Selamat! Anda sudah memiliki website ulang tahun yang cantik. Berikut cara cepat untuk memulai:

## ⚡ 30 Detik Setup

```bash
# 1. Masuk folder project
cd ultah-web

# 2. Jalankan development server
npm run dev

# 3. Buka browser
# Buka http://localhost:3000
```

Selesai! Website sudah berjalan. 🚀

## 🎨 Customization (5 Menit)

### Ubah Judul & Pesan Utama

Buka `app/page.tsx`:

```jsx
// Ubah ini:
<h1>Happy Birthday, Sayangku</h1>

// Jadi:
<h1>Happy Birthday, Nama Kamu!</h1>

// Ubah subtitle:
<p>Hari istimewa untuk wanita yang paling istimewa dalam hidupku</p>

// Jadi:
<p>Selamat ulang tahun untuk gadis tercanggih se-Indonesia</p>
```

### Ubah Warna

Cari di `app/page.tsx` dan ganti warna:

```jsx
// Dari:
className = "bg-gradient-to-b from-purple-900 via-pink-900 to-black";

// Ke (misal blue-red):
className = "bg-gradient-to-b from-blue-900 via-red-900 to-black";
```

Warna Tailwind tersedia: `purple`, `pink`, `red`, `blue`, `green`, `orange`, dll.

### Ubah Ucapan & Pujian

Di `app/page.tsx`, cari bagian ini:

```jsx
const praises = [
  "Kamu adalah alasan aku tersenyum",
  "Kamu kuat, cantik, dan luar biasa",
  "Hadirmu membuat hari-hariku lebih indah",
];

// Ubah jadi:
const praises = [
  "Ucapan pertama Anda",
  "Ucapan kedua Anda",
  "Ucapan ketiga Anda",
];
```

Setiap kali save, website auto-refresh di browser!

## 📸 Tambah Foto (10 Menit)

### Langkah 1: Siapkan Foto

1. Pilih 4 foto terbaik
2. Resize ke ukuran square (misal 400x400px)
3. Nama file: `foto-1.jpg`, `foto-2.jpg`, `foto-3.jpg`, `foto-4.jpg`

### Langkah 2: Upload ke Folder

1. Buka folder: `public/images/`
2. Copy paste 4 foto ke sana
3. Refresh browser

Foto akan langsung muncul di gallery! ✨

## 🌐 Deploy Gratis ke Vercel (10 Menit)

### Cara Termudah:

1. Buka [github.com](https://github.com) dan login
2. Create repository baru bernama `ultah-web`
3. Push project Anda:

```bash
git init
git add .
git commit -m "Birthday website"
git remote add origin https://github.com/YOURUSERNAME/ultah-web.git
git branch -M main
git push -u origin main
```

4. Buka [vercel.com](https://vercel.com)
5. Click "New Project" → "Import" → Pilih `ultah-web`
6. Click "Deploy"

**Done!** 🎉 Website sudah live dengan link seperti: `https://ultah-web.vercel.app`

Lihat file `DEPLOYMENT.md` untuk panduan lengkap.

## 💬 Ubah Pesan Birthday Wishes

Cari bagian ini di `app/page.tsx`:

```jsx
<p className="...">
  Selamat ulang tahun untuk cinta terindahku. Di hari istimewa ini...
</p>
```

Ubah dengan pesan romantis Anda sendiri. Bisa panjang atau pendek, sesuai mau!

## 🎬 Ubah Pesan Prayer

Cari bagian "🙏 Doa Terbaikku Untukmu" dan ubah pesannya.

## 💕 Ubah Pesan Closing

Cari:

```jsx
<p>
  Semoga hari ini seindah senyummu, dan semoga aku selalu bisa menjadi bagian
  dari bahagiamu.
</p>
```

Ubah dengan pesan penutup romantis Anda.

## 🔧 Common Customizations

### Ubah Font

Di `app/layout.tsx`:

```jsx
import { Playfair_Display, YourFont } from "next/font/google";

const yourFont = YourFont({
  variable: "--font-custom",
  subsets: ["latin"],
});
```

Font Google yang bagus: Lora, Merriweather, Raleway, Montserrat

### Ubah Ukuran Font

Di `app/page.tsx`, ubah `text-5xl` jadi `text-4xl` atau `text-6xl`:

```jsx
<h1 className="text-5xl">Judul</h1> // Default
<h1 className="text-4xl">Judul</h1> // Lebih kecil
<h1 className="text-6xl">Judul</h1> // Lebih besar
```

Tailwind sizes: `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, ... `text-9xl`

### Ubah Spacing

`py-20` = padding vertikal
`px-8` = padding horizontal
`gap-6` = jarak antar item

Ubah angka untuk adjust spacing.

## 🎥 Tambah Musik/Audio (Advanced)

Di closing section, tambahkan:

```jsx
<audio controls>
  <source src="/music.mp3" type="audio/mpeg" />
</audio>
```

Upload `music.mp3` ke folder `public/`.

## 📱 Test di Mobile

Buka di browser mobile dengan mengetik di address bar:

```
http://[IP-ADDRESS]:3000
```

IP address bisa dapat dari terminal output saat `npm run dev`.

## ✨ Tips Styling

- **Shadow**: `shadow`, `shadow-md`, `shadow-lg`, `shadow-2xl`
- **Blur**: `blur`, `blur-md`, `blur-lg`, `blur-3xl`
- **Rounded**: `rounded`, `rounded-lg`, `rounded-xl`, `rounded-full`
- **Opacity**: `opacity-20`, `opacity-50`, `opacity-100`

## 🐛 Troubleshooting

**Page tidak reload saat save?**

- Check terminal, ada error?
- Close `npm run dev` dan jalankan lagi

**Foto tidak muncul?**

- Check nama file: `foto-1.jpg` (case-sensitive)
- Pastikan di folder `public/images/`

**Build error TypeScript?**

- Check syntax, ada typo?
- Check console di browser (F12)

## 🚀 Next Steps

1. ✅ Customize semua text
2. ✅ Tambah foto
3. ✅ Test di mobile
4. ✅ Deploy ke Vercel
5. ✅ Share link ke orang terkasih!

## 📚 Resources

- Tailwind colors: https://tailwindcss.com/docs/customizing-colors
- Framer Motion: https://www.framer.com/motion/
- Next.js docs: https://nextjs.org/docs

## 💡 Ide Creative

- Tambah countdown timer untuk birthday
- Embed playlist Spotify
- Add particles effect dengan motion
- Buat gallery dengan lightbox effect
- Tambah form untuk kirim pesan

## 🎉 Go Live!

Setelah semuanya siap:

1. Deploy ke Vercel
2. Copy link hasil deployment
3. Share ke Instagram, WhatsApp, email, telegram
4. Request dia open linknya dan surprise! 🎊

---

**Semoga website ini membuat ulang tahunnya unforgettable! 💕✨**

Butuh bantuan? Cek file `README.md` dan `DEPLOYMENT.md`.
