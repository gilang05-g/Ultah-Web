"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
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

/* ─── Floating Hearts Background ──────────────────────────────────────────── */
function FloatingHearts() {
  const hearts = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 12,
        duration: 10 + Math.random() * 14,
        size: 0.7 + Math.random() * 1.2,
        opacity: 0.15 + Math.random() * 0.35,
      })),
    []
  );
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
  const dots = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        duration: 2 + Math.random() * 3,
        size: 2 + Math.random() * 4,
      })),
    []
  );
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
  const particles = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 800,
        y: -(200 + Math.random() * 400),
        rotate: Math.random() * 720,
        color: ["#f43f5e", "#a855f7", "#fbbf24", "#ec4899", "#e9d5ff", "#fda4af"][
          Math.floor(Math.random() * 6)
        ],
        size: 6 + Math.random() * 8,
        delay: Math.random() * 0.4,
      })),
    []
  );
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
                borderRadius: Math.random() > 0.5 ? "50%" : "2px",
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
      {/* Global layers */}
      <AuroraBackground />
      <SparkleDots />
      <FloatingHearts />
      <ConfettiBurst show={showConfetti} />

      {/* ─── HERO ──────────────────────────────────────────────────────── */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 pt-24 pb-20 z-10"
      >
        {/* Subtle radial glow behind title */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-transparent blur-[120px] pointer-events-none" />

        <motion.div
          className="relative z-10 text-center max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Cake icon */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center backdrop-blur-sm">
              <Cake className="w-10 h-10 text-pink-300" />
            </div>
          </motion.div>

          {/* Title */}
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

          {/* Subtitle */}
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

          {/* Divider */}
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

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <span className="text-xs text-gray-500 tracking-widest uppercase">
            Scroll
          </span>
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

      {/* ─── LETTER ────────────────────────────────────────────────────── */}
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
              {/* Corner decorations */}
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

      {/* ─── PRAISES ───────────────────────────────────────────────────── */}
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

      {/* ─── PRAYER ────────────────────────────────────────────────────── */}
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

      {/* ─── GALLERY ───────────────────────────────────────────────────── */}
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

      {/* ─── CLOSING ───────────────────────────────────────────────────── */}
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
