"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Heart, Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/");
      router.refresh();
    } else {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#050508] flex items-center justify-center px-4">
      {/* Aurora blob */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-transparent blur-[120px] pointer-events-none" />

      <motion.div
        className="relative z-10 w-full max-w-sm"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <motion.div
            className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center backdrop-blur-sm"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
          >
            <Lock className="w-7 h-7 text-pink-300" />
          </motion.div>
        </div>

        {/* Card */}
        <div className="rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl p-8 shadow-2xl shadow-black/40">
          <h1 className="text-center text-white font-semibold text-xl mb-1 tracking-wide">
            Halaman Pribadi
          </h1>
          <p className="text-center text-gray-500 text-sm mb-8">
            Masukkan password untuk melanjutkan
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                placeholder="Password"
                className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-gray-600 text-sm outline-none transition-all duration-300 focus:bg-white/8 focus:border-pink-500/40 ${
                  error
                    ? "border-red-500/50 focus:border-red-500/60"
                    : "border-white/10"
                }`}
                autoFocus
              />
            </div>

            {error && (
              <motion.p
                className="text-red-400/80 text-xs text-center"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Password salah. Coba lagi.
              </motion.p>
            )}

            <motion.button
              type="submit"
              disabled={loading || !password}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white text-sm font-medium tracking-wide shadow-lg shadow-pink-500/20 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity duration-200 flex items-center justify-center gap-2"
            >
              {loading ? (
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Masuk
                  <Heart className="w-3.5 h-3.5" fill="currentColor" />
                </>
              )}
            </motion.button>
          </form>
        </div>

        <p className="text-center text-gray-600 text-xs mt-6">
          Hanya untuk orang yang beruntung ❤️
        </p>
      </motion.div>
    </div>
  );
}