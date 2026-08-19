"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { categories } from "@/lib/categories";
import CategorySlider from "@/components/CategorySlider";

export default function Categories() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section id="categories" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 28 }}
          animate={
            headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }
          }
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center md:mb-20"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-sage-600">
            Наши коллекции
          </p>
          <h2 className="font-display text-4xl text-espresso-900 md:text-5xl">
            Дари нежно
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-espresso-600 md:text-lg">
            Каждое изделие связано с любовью, чтобы
            принести в ваш дом уют, тепло и неповторимый стиль.
          </p>
        </motion.div>

        <div className="flex flex-col gap-10 md:gap-14">
          {categories.map((category, index) => (
            <CategorySlider
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
