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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(196,165,116,0.18)_0%,_transparent_55%)]" />
      <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-sage-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-16 h-64 w-64 rounded-full bg-terracotta-200/20 blur-3xl" />

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
