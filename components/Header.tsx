"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-cream-300/60 bg-cream-50/85 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#hero"
          className="font-display text-xl tracking-wide text-espresso-900 transition-colors hover:text-terracotta-600 md:text-2xl"
        >
          HelgaHome&amp;Style
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {[
            { href: "#categories", label: "Коллекции" },
            { href: "#contact", label: "Контакты" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium tracking-wide text-espresso-700 transition-colors hover:text-terracotta-600"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
