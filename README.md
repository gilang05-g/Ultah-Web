# 🎉 Website Ulang Tahun Romantis

Sebuah website ulang tahun yang elegan dan romantis untuk orang yang Anda cintai. Dibuat dengan Next.js, Tailwind CSS, dan Framer Motion untuk animasi yang smooth.

## ✨ Fitur

- **Dark Romantic Aesthetic** - Tema gelap dengan warna ungu dan pink yang elegan
- **Smooth Animations** - Animasi masuk dan hover yang mulus menggunakan Framer Motion
- **Glassmorphism Design** - Desain modern dengan efek glass blur
- **Responsive Design** - Sempurna untuk mobile dan desktop
- **SEO Friendly** - Dioptimalkan untuk search engines
- **Production Ready** - Siap untuk deployment ke Vercel

## 📋 Sections

1. **Hero Section** - Judul utama dengan background gradient yang indah
2. **Birthday Wishes** - Ucapan selamat ulang tahun yang romantis
3. **Praise Cards** - Kartu pujian dengan animasi smooth
4. **Prayer Section** - Doa terbaik untuk ulang tahunnya
5. **Photo Gallery** - Galeri foto dengan hover effects
6. **Closing Section** - Penutup romantis dengan "I Love You" button

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ dan npm

### Installation

1. Masuk ke directory project:

```bash
cd ultah-web
```

2. Install dependencies (jika belum):

```bash
npm install framer-motion
```

3. Jalankan development server:

```bash
npm run dev
```

4. Buka browser dan akses: `http://localhost:3000`

## 📸 Menambahkan Foto

Untuk mengganti placeholder dengan foto asli:

1. Pastikan folder `public/images/` sudah ada (sudah di-create)
2. Tambahkan foto dengan nama:
   - `foto-1.jpg`
   - `foto-2.jpg`
   - `foto-3.jpg`
   - `foto-4.jpg`

3. Foto akan otomatis muncul di gallery section

**Tips:** Gunakan ukuran square (1:1 ratio) untuk hasil terbaik, misal 400x400px atau lebih besar.

## 🎨 Customization

### Mengubah Warna

Edit `app/page.tsx` dan ubah color classes (misal `purple-900`, `pink-600`):

```tsx
// Contoh: Ganti purple dengan blue
className = "bg-gradient-to-b from-blue-900 via-pink-900 to-black";
```

### Mengubah Teks

Semua teks bisa diubah langsung di `app/page.tsx`:

```tsx
<h1>Happy Birthday, Sayangku</h1> // Ubah judul
<p>Your custom message here</p> // Ubah pesan
```

### Mengubah Pujian (Praise)

Di dalam `app/page.tsx`, cari `const praises` dan edit arraynya:

```tsx
const praises = ["Your custom praise here", "Another praise", "More praise"];
```

## 📦 Build untuk Production

```bash
npm run build
```

Ini akan mengoptimalkan semua assets dan siap untuk deployment.

## 🌐 Deployment ke Vercel

### Opsi 1: Via Git (Recommended)

1. Inisialisasi git repo jika belum:

```bash
git init
git add .
git commit -m "Initial commit"
```

2. Push ke GitHub:

```bash
git remote add origin https://github.com/yourusername/ultah-web.git
git branch -M main
git push -u origin main
```

3. Buka [vercel.com](https://vercel.com)
4. Click "New Project"
5. Import repository Anda
6. Vercel akan otomatis detect Next.js dan deploy

### Opsi 2: Via Vercel CLI

```bash
npm i -g vercel
vercel
```

Ikuti instruksi di terminal untuk setup.

### Opsi 3: One-Click Deploy

Bisa buat button "Deploy to Vercel" dengan:

```markdown
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/ultah-web)
```

## 📱 Responsive Breakpoints

Website sudah dioptimalkan untuk:

- Mobile (sm): 640px
- Tablet (md): 768px
- Desktop (lg): 1024px dan lebih besar

## 🛠 Tech Stack

- **Framework**: Next.js 16.2.7 dengan App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Geist, Playfair Display (Google Fonts)
- **Language**: TypeScript
- **Deployment**: Vercel

## 📝 Struktur File

```
ultah-web/
├── app/
│   ├── page.tsx          # Main page dengan semua sections
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── public/
│   └── images/           # Folder untuk foto (tambahkan foto di sini)
├── package.json
├── tsconfig.json
└── README.md
```

## 💡 Tips & Tricks

1. **Tambah Background Music** - Bisa tambahkan audio element di closing section
2. **Custom Domain** - Dengan Vercel, setup custom domain gratis dan mudah
3. **Analytics** - Vercel punya built-in analytics di dashboard
4. **Environment Variables** - Bisa setup `.env.local` untuk config khusus
5. **Continuous Deployment** - Setiap push ke main branch, auto-deploy ke Vercel

## 🐛 Troubleshooting

**Error: "Cannot find module 'framer-motion'"**

```bash
npm install framer-motion
```

**Port 3000 sudah terpakai:**

```bash
npm run dev -- -p 3001  # Gunakan port 3001
```

**Build error:**

```bash
npm run build
```

**Foto tidak muncul di galeri:**

- Pastikan file ada di `public/images/`
- Pastikan nama file sesuai: `foto-1.jpg`, `foto-2.jpg`, dst
- Clear browser cache dan refresh page

## 📚 Environment Variables

Buat file `.env.local` di root project untuk config khusus (optional):

```
# .env.local
NEXT_PUBLIC_SITE_NAME=Happy Birthday Website
```

## 🚀 Performance Tips

- Website sudah optimized dengan Next.js Image Optimization
- CSS dicompress otomatis di production
- JavaScript diminify untuk performa terbaik
- Framer Motion animations dioptimalkan untuk smooth 60fps

## 📄 License

Bebas digunakan untuk tujuan personal. 💕

## 🤝 Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Vercel Deployment Docs](https://vercel.com/docs)

---

**Dibuat dengan ❤️ untuk orang spesial Anda**

Semoga website ini membuat ulang tahunnya lebih berkesan dan romantis! 🎉✨💕
