"use client";

import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 pb-16 md:px-10"
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_rgba(196,165,116,0.18)_0%,_transparent_55%)]" />
      <div className="pointer-events-none absolute -right-24 top-20 z-0 h-72 w-72 rounded-full bg-sage-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-16 z-0 h-64 w-64 rounded-full bg-terracotta-200/20 blur-3xl" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute left-[12%] top-[18%] h-56 w-56 rounded-full bg-gold-400/10 blur-3xl" />
        <div className="absolute bottom-[12%] right-[18%] h-64 w-64 rounded-full bg-sage-200/20 blur-3xl" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.14]"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle cx="160" cy="180" r="110" stroke="#c4a574" strokeWidth="1" />
          <circle cx="160" cy="180" r="68" stroke="#c4a574" strokeWidth="0.6" />
          <circle cx="1040" cy="560" r="140" stroke="#8b4a3a" strokeWidth="0.8" />
          <circle cx="980" cy="140" r="72" stroke="#6b7b6e" strokeWidth="0.7" />
          <path
            d="M40 520 C 260 440, 420 640, 640 520 S 980 420, 1160 540"
            stroke="#c4a574"
            strokeWidth="0.8"
          />
          <path
            d="M80 280 C 280 220, 500 360, 720 280 S 1000 180, 1160 260"
            stroke="#6b7b6e"
            strokeWidth="0.6"
          />
        </svg>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <motion.p
          variants={itemVariants}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-terracotta-600 md:text-sm"
        >
          Авторские вязаные изделия и декор для дома
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl leading-tight text-espresso-900 md:text-7xl lg:text-8xl"
        >
          HelgaHome&amp;Style
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="mx-auto my-8 h-px w-24 bg-gradient-to-r from-transparent via-gold-400 to-transparent"
        />

        <motion.p
          variants={itemVariants}
          className="mx-auto max-w-2xl text-lg leading-relaxed text-espresso-700 md:text-xl"
        >
          Добро пожаловать в мир уютных handmade изделий — каждая петля
          хранит тепло дома и изящество настоящего ремесла.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-10">
          <a
            href="#categories"
            className="inline-flex items-center gap-2 rounded-full border border-terracotta-500/30 bg-terracotta-600 px-8 py-3.5 text-sm font-medium tracking-wide text-cream-50 shadow-lg shadow-terracotta-900/10 transition-all hover:-translate-y-0.5 hover:bg-terracotta-700 hover:shadow-xl"
          >
            Смотреть коллекции
            <span aria-hidden="true">↓</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
