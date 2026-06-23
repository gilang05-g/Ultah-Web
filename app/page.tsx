"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo, useRef } from "react";
import {
  Heart,
  Sparkles,
  Camera,
  Gift,
  Music,
  Star,
  Cake,
  PartyPopper,
  Flower2,
} from "lucide-react";

/* ─── Fungsi Random Deterministik ──────────────────────────────────────── */
function seededRandom(seed: number) {
  let state = seed;
  return () => {
    state = (state * 16807) % 2147483647;
    return (state - 1) / 2147483646;
  };
}

/* ─── Fixed Background Images ──────────────────────────────────────────── */
function FixedBackgroundImages() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* Bunga kiri atas - Persegi besar */}
      <div className="absolute -top-8 -left-8 w-72 h-80 sm:w-96 sm:h-[28rem] opacity-20 sm:opacity-30">
        <img
          src="https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=500&q=80"
          alt=""
          className="w-full h-full object-cover blur-[2px] mix-blend-screen rounded-xl border border-white"
        />
      </div>

      {/* Bunga kanan bawah - Persegi besar */}
      <div className="absolute -bottom-12 -right-12 w-80 h-72 sm:w-[28rem] sm:h-96 opacity-15 sm:opacity-25">
        <img
          src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=500&q=80"
          alt=""
          className="w-full h-full object-cover blur-[2px] mix-blend-screen rounded-xl border border-white"
        />
      </div>

      {/* Bunga kiri tengah - Persegi kecil */}
      <div className="absolute top-1/3 -left-4 w-40 h-48 sm:w-52 sm:h-60 opacity-10 sm:opacity-20">
        <img
          src="https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=300&q=80"
          alt=""
          className="w-full h-full object-cover blur-[1px] mix-blend-screen rounded-xl border border-white"
        />
      </div>

      {/* Bunga kanan atas - Persegi sedang */}
      <div className="absolute top-[10%] -right-4 w-48 h-40 sm:w-64 sm:h-52 opacity-10 sm:opacity-20">
        <img
          src="https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=300&q=80"
          alt=""
          className="w-full h-full object-cover blur-[2px] mix-blend-screen rounded-xl border border-white"
        />
      </div>

      {/* Bunga bawah tengah kiri - Persegi kecil */}
      <div className="absolute bottom-[25%] left-[8%] w-32 h-32 sm:w-44 sm:h-44 opacity-10 sm:opacity-15">
        <img
          src="https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=300&q=80"
          alt=""
          className="w-full h-full object-cover blur-[1px] mix-blend-screen rounded-xl border border-white"
        />
      </div>

      {/* Mawar kanan tengah - Persegi kecil */}
      <div className="absolute top-[58%] -right-2 w-36 h-32 sm:w-48 sm:h-44 opacity-10 sm:opacity-18">
        <img
          src="https://images.unsplash.com/photo-1457089328109-e5d9bd499191?w=300&q=80"
          alt=""
          className="w-full h-full object-cover blur-[1px] mix-blend-screen rounded-xl border border-white"
        />
      </div>

      {/* Bunga kecil pojok kiri bawah */}
      <div className="absolute bottom-[5%] left-[2%] w-28 h-24 sm:w-36 sm:h-32 opacity-8 sm:opacity-12">
        <img
          src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=300&q=80"
          alt=""
          className="w-full h-full object-cover blur-[1px] mix-blend-screen rounded-xl border border-white"
        />
      </div>

      {/* Bunga kecil pojok kanan atas */}
      <div className="absolute top-[2%] right-[30%] w-24 h-28 sm:w-32 sm:h-36 opacity-8 sm:opacity-12">
        <img
          src="https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=300&q=80"
          alt=""
          className="w-full h-full object-cover blur-[1px] mix-blend-screen rounded-xl border border-white"
        />
      </div>

      {/* Bokeh pink atas kiri */}
      <div className="absolute top-[8%] left-[20%] w-3 h-3 rounded-full bg-pink-400/30 blur-[1px]" />
      <div className="absolute top-[12%] left-[25%] w-2 h-2 rounded-full bg-purple-400/25 blur-[1px]" />
      <div className="absolute top-[6%] left-[35%] w-4 h-4 rounded-full bg-pink-300/20 blur-[2px]" />

      {/* Bokeh pink kanan bawah */}
      <div className="absolute bottom-[15%] right-[25%] w-3 h-3 rounded-full bg-pink-400/25 blur-[1px]" />
      <div className="absolute bottom-[20%] right-[20%] w-2 h-2 rounded-full bg-purple-300/20 blur-[1px]" />
      <div className="absolute bottom-[10%] right-[30%] w-5 h-5 rounded-full bg-pink-300/15 blur-[2px]" />

      {/* Bokeh kuning tengah */}
      <div className="absolute top-[45%] left-[50%] w-2 h-2 rounded-full bg-yellow-400/20 blur-[1px]" />
      <div className="absolute top-[55%] right-[40%] w-3 h-3 rounded-full bg-yellow-300/15 blur-[2px]" />

      {/* Garis dekoratif tipis kiri */}
      <div className="absolute top-[20%] left-0 w-px h-32 bg-gradient-to-b from-transparent via-pink-500/20 to-transparent" />
      <div className="absolute top-[70%] left-0 w-px h-24 bg-gradient-to-b from-transparent via-purple-500/15 to-transparent" />

      {/* Garis dekoratif tipis kanan */}
      <div className="absolute top-[30%] right-0 w-px h-28 bg-gradient-to-b from-transparent via-pink-500/15 to-transparent" />
      <div className="absolute top-[75%] right-0 w-px h-20 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent" />

      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(5,5,8,0.6)_100%)]" />
    </div>
  );
}

/* ─── Floating Hearts Background ──────────────────────────────────────────── */
function FloatingHearts() {
  const hearts = useMemo(() => {
    const rand = seededRandom(42);
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: `${rand() * 100}%`,
      delay: rand() * 12,
      duration: 10 + rand() * 14,
      size: 0.7 + rand() * 1.2,
      opacity: 0.15 + rand() * 0.35,
    }));
  }, []);

  return (
    <div className="floating-hearts">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="floating-heart"
          style={{
            left: h.left,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            fontSize: `${h.size}rem`,
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
}

/* ─── Sparkle Dots Background ─────────────────────────────────────────────── */
function SparkleDots() {
  const dots = useMemo(() => {
    const rand = seededRandom(123);
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${rand() * 100}%`,
      top: `${rand() * 100}%`,
      delay: rand() * 5,
      duration: 2 + rand() * 3,
      size: 2 + rand() * 4,
    }));
  }, []);

  return (
    <div className="sparkle-container">
      {dots.map((d) => (
        <span
          key={d.id}
          className="sparkle-dot"
          style={{
            left: d.left,
            top: d.top,
            width: d.size,
            height: d.size,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Aurora Blobs ─────────────────────────────────────────────────────────── */
function AuroraBackground() {
  return (
    <div className="aurora-bg">
      <div
        className="aurora-blob"
        style={{
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)",
          top: "10%",
          left: "-10%",
        }}
      />
      <div
        className="aurora-blob"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(168,85,247,0.10) 0%, transparent 70%)",
          top: "50%",
          right: "-15%",
          animationDelay: "-7s",
        }}
      />
      <div
        className="aurora-blob"
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(251,191,36,0.07) 0%, transparent 70%)",
          bottom: "5%",
          left: "20%",
          animationDelay: "-14s",
        }}
      />
    </div>
  );
}

/* ─── Confetti Burst ──────────────────────────────────────────────────────── */
function ConfettiBurst({ show }: { show: boolean }) {
  const particles = useMemo(() => {
    const rand = seededRandom(999);
    const colors = ["#f43f5e", "#a855f7", "#fbbf24", "#ec4899", "#e9d5ff", "#fda4af"];
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: (rand() - 0.5) * 800,
      y: -(200 + rand() * 400),
      rotate: rand() * 720,
      color: colors[Math.floor(rand() * colors.length)],
      size: 6 + rand() * 8,
      delay: rand() * 0.4,
      borderRadius: rand() > 0.5 ? "50%" : "2px",
    }));
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ x: 0, y: 0, rotate: 0, opacity: 1, scale: 1 }}
              animate={{
                x: p.x,
                y: p.y,
                rotate: p.rotate,
                opacity: 0,
                scale: 0.2,
              }}
              transition={{
                duration: 2 + Math.random(),
                delay: p.delay,
                ease: "easeOut",
              }}
              style={{
                position: "absolute",
                width: p.size,
                height: p.size,
                borderRadius: p.borderRadius,
                background: p.color,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── Section Reveal Wrapper ──────────────────────────────────────────────── */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Video Kenangan Player ───────────────────────────────────────────── */
function VideoMemory() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <Reveal>
      <div className="relative w-full max-w-3xl mx-auto">
        {/* Container Video dengan Glass Card */}
        <div
          className="relative aspect-video rounded-3xl overflow-hidden glass-card cursor-pointer group"
          onClick={handlePlayClick}
        >
          {/* Video Element */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src="/video/kenangan.mp4" // ← Ganti dengan path video kamu
            onEnded={handleVideoEnd}
            playsInline
            preload="metadata"
          />

          {/* Overlay Gradient bawah */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

          {/* Tombol Play / Pause */}
          <AnimatePresence mode="wait">
            {!isPlaying ? (
              <motion.div
                key="play"
                className="absolute inset-0 flex flex-col items-center justify-center z-10"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                {/* Lingkaran tombol play */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg shadow-pink-500/10 group-hover:scale-110 group-hover:bg-white/15 transition-all duration-300">
                  {/* Ikon Play (SVG custom) */}
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                {/* Teks hint */}
                <span className="mt-4 text-sm text-white/60 tracking-wide">
                  Klik untuk memutar
                </span>
              </motion.div>
            ) : (
              <motion.div
                key="pause"
                className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0 }}
              >
                <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
                  </svg>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Label kecil di pojok */}
          <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none z-10">
            <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
              <span className="text-[10px] sm:text-xs text-white/70 tracking-wider uppercase">
                Video Kenangan
              </span>
            </div>
          </div>
        </div>

        {/* Keterangan di bawah video */}
        <p className="text-center text-gray-500 text-xs mt-6">
          Taruh file video di{" "}
          <code className="bg-white/5 px-2 py-0.5 rounded text-pink-400/70">
            public/video/kenangan.mp4
          </code>
        </p>
      </div>
    </Reveal>
  );
}

/* ─── Main Page ───────────────────────────────────────────────────────────── */
export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [loveCount, setLoveCount] = useState(0);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.92]);

  const praises = [
    {
      icon: <Flower2 className="w-6 h-6" />,
      text: "Kamu adalah alasan aku tersenyum setiap hari",
    },
    {
      icon: <Star className="w-6 h-6" />,
      text: "Kamu kuat, cantik, dan luar biasa",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      text: "Hadirmu membuat dunia ini lebih indah",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      text: "Setiap momen bersamamu adalah hadiah terindah",
    },
    {
      icon: <Music className="w-6 h-6" />,
      text: "Tawamu adalah melody favoritku",
    },
    {
      icon: <Gift className="w-6 h-6" />,
      text: "Kamu adalah mukjizat terbaik dalam hidupku",
    },
  ];

  const handleLoveButton = () => {
    setLoveCount((c) => c + 1);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2500);
  };

  return (
    <div className="w-full bg-[#050508] text-white overflow-hidden relative">
      {/* Fixed Background Images - Persegi, tetap saat scroll */}
      <FixedBackgroundImages />

      <AuroraBackground />
      <SparkleDots />
      <FloatingHearts />
      <ConfettiBurst show={showConfetti} />

      {/* ─── HERO ──────────────────────────────────────────────────────── */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 pt-24 pb-20 z-10"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-transparent blur-[120px] pointer-events-none" />

        <motion.div
          className="relative z-10 text-center max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-white flex items-center justify-center backdrop-blur-sm">
              <Cake className="w-10 h-10 text-pink-300" />
            </div>
          </motion.div>

          <motion.h1
            className="font-playfair text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 gradient-text leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Happy Birthday
            <br />
            <span className="text-4xl sm:text-5xl lg:text-6xl">Sayangku</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg lg:text-xl text-gray-400 font-light max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Hari istimewa untuk wanita paling istimewa dalam hidupku.
            <br className="hidden sm:block" />
            Hari ini semua tentang kamu.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-3 mt-10"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-pink-500/50" />
            <Heart className="w-4 h-4 text-pink-400" fill="currentColor" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-pink-500/50" />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ─── SURAT ─────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full py-24 sm:py-32 px-6">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <span className="inline-block text-xs tracking-[0.3em] uppercase text-pink-400/70 mb-4">
                Untukmu
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Surat Cinta
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden">
              <div className="absolute top-4 left-4 text-pink-500/20">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="absolute bottom-4 right-4 text-pink-500/20">
                <Heart className="w-6 h-6" fill="currentColor" />
              </div>

              <p className="text-base sm:text-lg text-gray-300 leading-[1.9] font-light text-center">
                Selamat ulang tahun untuk cinta terindahku.
                <br />
                <br />
                Di hari istimewa ini, aku ingin kamu tahu bahwa setiap detik
                bersama dirimu adalah karunia yang paling berharga. Terima kasih
                telah menjadi cahaya dalam hidupku, senyuman di hari-hariku, dan
                kasih sayang yang tak tergoyahkan.
                <br />
                <br />
                <span className="text-gray-400/80">
                  Semoga hari ini penuh kebahagiaan, dan semoga tahun ini
                  membawamu lebih dekat ke semua impianmu.
                </span>
                <br />
                <br />
                <span className="text-pink-300 font-medium">
                  Aku mencintaimu lebih dari yang bisa aku ungkapkan dengan
                  kata-kata.
                </span>
              </p>

              <div className="flex justify-center mt-8">
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Heart className="w-8 h-8 text-pink-400" fill="currentColor" />
                </motion.div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── PUJIAN ────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full py-24 sm:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="inline-block text-xs tracking-[0.3em] uppercase text-purple-400/70 mb-4">
                Dari Hatiku
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Pujian Untukmu
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {praises.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <motion.div
                  className="glass-card rounded-2xl p-7 h-full cursor-default group"
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                >
                  <div className="text-pink-400/60 group-hover:text-pink-400 transition-colors duration-300 mb-4">
                    {p.icon}
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                    {p.text}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DOA ───────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full py-24 sm:py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-yellow-400/70 mb-4">
              Doaku
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12">
              Harapanku Untukmu
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6">
              {[
                "Semoga senantiasa diberkahi kesehatan dan kebahagiaan",
                "Semoga setiap langkahmu dipenuhi keberkahan",
                "Semoga cinta kita selalu tumbuh dan bersinar",
                "Semoga semua impianmu menjadi kenyataan",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  className="glass-card rounded-2xl px-8 py-5 flex items-center gap-4"
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Sparkles className="w-5 h-5 text-yellow-400/60 flex-shrink-0" />
                  <p className="text-gray-300 text-sm sm:text-base font-light text-left">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── GALERI ────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full py-24 sm:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="inline-block text-xs tracking-[0.3em] uppercase text-blue-400/70 mb-4">
                Kenangan Indah
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Galeri Kenangan
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((n) => (
              <Reveal key={n} delay={n * 0.08}>
                <motion.div
                  className="group relative aspect-square rounded-2xl overflow-hidden glass-card cursor-pointer"
                  whileHover={{ scale: 1.04, transition: { duration: 0.3 } }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-purple-900/30 to-pink-900/30 flex items-center justify-center">
                    <Camera className="w-10 h-10 text-gray-600 group-hover:text-pink-400 transition-colors duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <span className="text-xs text-gray-300">foto-{n}.jpg</span>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <p className="text-center text-gray-500 text-xs mt-8">
              Tambahkan foto ke{" "}
              <code className="bg-white/5 px-2 py-0.5 rounded text-pink-400/70">
                public/images/
              </code>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── VIDEO KENANGAN ────────────────────────────────────────────── */}
      <section className="relative z-10 w-full py-24 sm:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <span className="inline-block text-xs tracking-[0.3em] uppercase text-pink-400/70 mb-4">
                Momen Berharga
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Video Kenangan
              </h2>
            </div>
          </Reveal>

          <VideoMemory />
        </div>
      </section>

      {/* ─── PENUTUP ───────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full py-24 sm:py-40 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <p className="font-playfair text-2xl sm:text-3xl lg:text-4xl text-gray-200 leading-relaxed mb-10">
              Semoga hari ini seindah senyummu,
              <br />
              dan semoga aku selalu bisa menjadi
              <br />
              bagian dari bahagiamu.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex items-center justify-center gap-3 mb-12">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-pink-500/40" />
              <Heart className="w-5 h-5 text-pink-400" fill="currentColor" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-pink-500/40" />
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <motion.button
              onClick={handleLoveButton}
              whileHover={{ scale: 1.08, boxShadow: "0 0 40px rgba(236,72,153,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="relative group px-10 py-4 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium text-base tracking-wide shadow-lg shadow-pink-500/20 transition-shadow duration-300"
            >
              <span className="flex items-center gap-2">
                I Love You
                <Heart className="w-4 h-4" fill="currentColor" />
              </span>
              {loveCount > 0 && (
                <motion.span
                  key={loveCount}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white text-pink-600 text-xs font-bold flex items-center justify-center shadow"
                >
                  {loveCount}
                </motion.span>
              )}
            </motion.button>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mt-12 text-gray-600 text-xs tracking-wide">
              Dengan sepenuh hati, dari orang yang mencintaimu ❤️
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}