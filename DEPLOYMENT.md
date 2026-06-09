# 🚀 Panduan Deployment ke Vercel

Website ulang tahun ini siap untuk di-deploy ke Vercel dengan mudah. Ikuti langkah-langkah berikut:

## ✅ Pre-Deployment Checklist

- [ ] Sudah menambahkan foto di `public/images/` (optional, bisa ditambah nanti)
- [ ] Sudah mengubah teks sesuai keinginan di `app/page.tsx`
- [ ] Sudah test di local dengan `npm run dev`
- [ ] Semua file sudah ter-commit di git

## 📝 Cara 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Setup Git Repository

Jika belum punya git repo:

```bash
# Di folder project
git init
git add .
git commit -m "Initial commit: Birthday website"
```

### Step 2: Push ke GitHub

1. Buka [github.com](https://github.com) dan login
2. Click **New Repository**
3. Beri nama: `ultah-web` (atau nama lain)
4. Pilih **Public** untuk free tier (atau Private jika punya GitHub Pro)
5. Jangan initialize dengan README (sudah ada)
6. Click **Create repository**

Kemudian di terminal:

```bash
git remote add origin https://github.com/YOUR_USERNAME/ultah-web.git
git branch -M main
git push -u origin main
```

### Step 3: Connect ke Vercel

1. Buka [vercel.com](https://vercel.com)
2. Click **Sign Up** dan pilih "Continue with GitHub"
3. Authorize Vercel untuk GitHub
4. Di dashboard Vercel, click **Add New Project**
5. Click **Import** di sebelah `ultah-web` repository
6. Vercel akan auto-detect Next.js settings
7. Click **Deploy**

✅ Selesai! Website Anda sudah live!

## 🖥️ Cara 2: Deploy via Vercel CLI

Jika prefer command line:

```bash
# Install Vercel CLI global
npm i -g vercel

# Di folder project
vercel

# Ikuti instruksi:
# - Login dengan GitHub/GitLab/Bitbucket
# - Link project ke akun Vercel
# - Deploy!
```

## 📱 Cara 3: Deploy dengan One-Click Button

Buat file `vercel.json` di root project:

```json
{
  "buildCommand": "next build",
  "devCommand": "next dev",
  "outputDirectory": ".next"
}
```

Kemudian share link ini:

```
https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/ultah-web
```

## 🎯 Custom Domain

Setelah deployed ke Vercel:

1. Di dashboard Vercel, buka project Anda
2. Pergi ke tab **Domains**
3. Click **Add Domain**
4. Masukkan domain Anda (misal: `ulahthayangkita.com`)
5. Ikuti instruksi DNS setup sesuai provider domain Anda

## 🔄 Continuous Deployment (Auto Deploy)

Vercel akan **otomatis deploy** setiap kali push ke GitHub:

```bash
# Edit file lokal
# Commit dan push
git add .
git commit -m "Update birthday message"
git push origin main

# Vercel akan auto-build dan deploy!
```

## 🔧 Environment Variables (Optional)

Jika perlu environment variables:

1. Di dashboard Vercel, buka project
2. Pergi ke **Settings → Environment Variables**
3. Click **Add New**
4. Masukkan key dan value
5. Vercel akan auto-redeploy

Contoh:

```
NEXT_PUBLIC_SITE_NAME=Happy Birthday Website
```

## 📊 Monitoring & Logs

### Cek Build Status

- Di dashboard Vercel → **Deployments**
- Lihat history semua deployment
- Click deployment untuk lihat logs

### Cek Live Performance

- Dashboard Vercel → **Analytics**
- Lihat page views, response time, dll

## 🛠️ Troubleshooting

### Error: "Build failed"

Biasanya karena:

1. TypeScript error - perbaiki di `app/page.tsx`
2. Missing dependency - pastikan semua di `package.json`

Check logs di Vercel dashboard untuk detail error.

### Error: "Cannot find module"

```bash
# Reinstall dependencies
npm install

# Push ke GitHub lagi
git add .
git commit -m "Fix: reinstall dependencies"
git push origin main
```

### Website lambat

1. Check Vercel Analytics untuk bottleneck
2. Optimize image size jika punya foto
3. Check Lighthouse score di Chrome DevTools

## 🌍 Domain Options

Gratis:

- `*.vercel.app` (default)

Berbayar:

- Custom domain (beli dari Namecheap, GoDaddy, dll)
- Terkoneksi otomatis dengan Vercel

## 📈 Next Steps

Setelah deployment:

1. **Share website** ke orang terkasih! 💕
2. **Monitor traffic** di Vercel Analytics
3. **Update foto** kapan saja - just commit & push
4. **Customize design** jika diinginkan
5. **Setup custom domain** untuk profesional

## 🎉 Selesai!

Website ulang tahun romantis Anda sudah live!

Sharing tips:

- Bagikan URL ke Instagram, WhatsApp, email, dll
- Buat QR code dari URL untuk physical card
- Share melalui Telegram, Discord, atau media sosial lain

---

**Butuh bantuan?**

- Check [Vercel Docs](https://vercel.com/docs)
- Check [Next.js Deployment Guide](https://nextjs.org/docs/app/building-your-application/deploying)
- Tanya di StackOverflow atau Google untuk error spesifik

**Happy Birthday! 🎉❤️✨**
