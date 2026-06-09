"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, Sparkles, PartyPopper, Camera, Lightbulb } from "lucide-react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop" as const,
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop" as const,
      },
    },
  };

  const rotateVariants = {
    animate: {
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop" as const,
      },
    },
  };

  const praises = [
    "Kamu adalah alasan aku tersenyum",
    "Kamu kuat, cantik, dan luar biasa",
    "Hadirmu membuat hari-hariku lebih indah",
  ];

  const photoPlaceholders = [
    "/images/foto-1.jpg",
    "/images/foto-2.jpg",
    "/images/foto-3.jpg",
    "/images/foto-4.jpg",
  ];

  return (
    <div className="w-full bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20 pb-20">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-pink-900 to-black opacity-70"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

        {/* Content */}
        <motion.div
          className="relative z-10 text-center max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Happy Birthday, Sayangku
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hari istimewa untuk wanita yang paling istimewa dalam hidupku
          </motion.p>

          <motion.div
            className="flex justify-center gap-4 flex-wrap"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div variants={pulseVariants} animate="animate">
              <Heart className="w-8 h-8 text-pink-400" fill="currentColor" />
            </motion.div>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-8 h-8 text-yellow-300" />
            </motion.div>
            <motion.div variants={pulseVariants} animate="animate">
              <Heart className="w-8 h-8 text-pink-400" fill="currentColor" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <svg
            className="w-6 h-6 text-pink-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </section>

      {/* Birthday Wishes Section */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-purple-950/30">
        <div className="max-w-4xl mx-auto">
          <motion.div className="flex justify-center items-center gap-4 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <PartyPopper className="w-10 h-10 text-pink-400" />
            </motion.div>
            <motion.h2
              className="font-playfair text-4xl sm:text-5xl font-bold text-center text-white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ucapan Ulang Tahun
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <PartyPopper className="w-10 h-10 text-pink-400" />
            </motion.div>
          </motion.div>

          <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            {/* Glassmorphism card background blur effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-10 blur transition duration-500"
              whileHover={{ opacity: 0.15 }}
            ></motion.div>

            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 sm:p-12 shadow-2xl">
              <p className="text-lg sm:text-2xl text-gray-100 text-center leading-relaxed font-light">
                Selamat ulang tahun untuk cinta terindahku. Di hari istimewa
                ini, aku ingin kamu tahu bahwa setiap detik bersama dirimu
                adalah karunia yang paling berharga. Terima kasih telah menjadi
                cahaya dalam hidupku, senyuman di hari-hariku yang kelam, dan
                kasih sayang yang tak tergoyahkan. Semoga hari ini penuh dengan
                kebahagiaan, dan semoga tahun ini membawamu lebih dekat ke semua
                impianmu. Aku mencintaimu lebih dari yang bisa aku ungkapkan
                dengan kata-kata.
              </p>
              <div className="flex justify-center mt-6">
                <motion.div variants={pulseVariants} animate="animate">
                  <Heart
                    className="w-10 h-10 text-pink-400"
                    fill="currentColor"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Praise Section */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-950/30 to-black">
        <div className="max-w-4xl mx-auto">
          <motion.div className="flex justify-center items-center gap-4 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-10 h-10 text-yellow-300" />
            </motion.div>
            <motion.h2
              className="font-playfair text-4xl sm:text-5xl font-bold text-center text-white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Pujian Untukmu
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-10 h-10 text-yellow-300" />
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {praises.map((praise, index) => (
              <motion.div
                key={index}
                className="group relative cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-500"
                  whileHover={{ opacity: 0.3 }}
                ></motion.div>
                <div className="relative bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-md border border-white/10 rounded-xl p-8 hover:border-pink-400/30 transition duration-300 h-full flex items-center justify-center">
                  <p className="text-center text-lg text-gray-100 font-light">
                    {praise}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Prayer Section */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-purple-950/30">
        <div className="max-w-4xl mx-auto">
          <motion.div className="flex justify-center items-center gap-4 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Heart className="w-10 h-10 text-pink-400" fill="currentColor" />
            </motion.div>
            <motion.h2
              className="font-playfair text-4xl sm:text-5xl font-bold text-center text-white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Doa Terbaikku Untukmu
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Heart className="w-10 h-10 text-pink-400" fill="currentColor" />
            </motion.div>
          </motion.div>

          <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-5 blur transition duration-500"
              whileHover={{ opacity: 0.08 }}
            ></motion.div>

            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 sm:p-12 shadow-xl">
              <p className="text-lg sm:text-xl text-gray-100 text-center leading-relaxed font-light">
                Semoga Tuhan selalu memberkatimu dengan kesehatan yang sempurna
                dan kebahagiaan yang tak tergoyahkan. Semoga setiap langkahmu
                dipandu dengan kebijaksanaan dan keberanian untuk meraih semua
                impianmu. Semoga cinta dan kebaikan selalu mengelilingimu di
                setiap hari dalam tahun ini. Dan terutama, semoga aku selalu
                bisa menjadi orang yang memberikan kebahagiaan dan dukungan
                untukmu. Terima kasih telah menjadi bagian dari perjalanan
                hidupku yang indah ini.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-950/30 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div className="flex justify-center items-center gap-4 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Camera className="w-10 h-10 text-blue-400" />
            </motion.div>
            <motion.h2
              className="font-playfair text-4xl sm:text-5xl font-bold text-center text-white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Galeri Kenangan
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Camera className="w-10 h-10 text-blue-400" />
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {photoPlaceholders.map((photo, index) => (
              <motion.div
                key={index}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl"
                variants={itemVariants}
                whileHover={{ scale: 1.08, rotate: 2 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-pink-600 to-purple-600 opacity-0 group-hover:opacity-20 transition duration-300"
                  whileHover={{ opacity: 0.3 }}
                ></motion.div>
                <div className="w-full h-full bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-white/10 group-hover:border-pink-400/30 transition duration-300 flex items-center justify-center rounded-xl">
                  <motion.div
                    className="opacity-40 group-hover:opacity-60 transition duration-300"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <Camera className="w-16 h-16" />
                  </motion.div>
                </div>
                <motion.p
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition duration-300"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                >
                  Upload foto Anda di {photo}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center text-gray-300 mt-8 text-sm flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <Lightbulb className="w-4 h-4 text-yellow-300" />
            <span>
              Tip: Ganti gambar dummy dengan foto-foto indah kamu dengan
              menambahkan file di folder{" "}
              <code className="bg-white/10 px-2 py-1 rounded text-pink-300">
                public/images/
              </code>
            </span>
          </motion.div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-purple-950/40 to-black min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="font-playfair text-3xl sm:text-4xl lg:text-5xl mb-8 text-gray-100 leading-relaxed">
              Semoga hari ini seindah senyummu, dan semoga aku selalu bisa
              menjadi bagian dari bahagiamu.
            </p>

            <div className="flex justify-center gap-4 mb-12">
              <motion.div variants={pulseVariants} animate="animate">
                <Heart
                  className="w-12 h-12 text-pink-400"
                  fill="currentColor"
                />
              </motion.div>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-12 h-12 text-yellow-300" />
              </motion.div>
              <motion.div variants={pulseVariants} animate="animate">
                <Heart
                  className="w-12 h-12 text-pink-400"
                  fill="currentColor"
                />
              </motion.div>
            </div>

            <motion.button
              onClick={() => setIsPlaying(!isPlaying)}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 sm:px-12 py-4 rounded-full font-semibold text-lg"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-100 group-hover:opacity-75 transition duration-300"
                whileHover={{ boxShadow: "0 0 30px rgba(236, 72, 153, 0.6)" }}
              ></motion.div>
              <span className="relative block text-white flex items-center justify-center gap-2">
                I Love You <Heart className="w-5 h-5" fill="currentColor" />
              </span>
            </motion.button>

            <motion.p
              className="mt-8 text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Dengan sepenuh hati dari orang yang mencintaimu
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
