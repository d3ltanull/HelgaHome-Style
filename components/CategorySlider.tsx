"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion, useInView } from "framer-motion";
import type { Category } from "@/lib/categories";
import { getCategoryImages } from "@/lib/categories";
import SafeImage from "@/components/SafeImage";

import "swiper/css";
import "swiper/css/pagination";

interface CategorySliderProps {
  category: Category;
  index: number;
}

export default function CategorySlider({ category, index }: CategorySliderProps) {
  const ref = useRef<HTMLElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const images = getCategoryImages(category);

  return (
    <motion.article
      ref={ref}
      id={category.id}
      initial={{ opacity: 0, y: 48 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
      transition={{
        duration: 0.85,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="overflow-hidden rounded-3xl border border-cream-300/80 bg-cream-100/60 shadow-sm backdrop-blur-sm"
    >
      <div className="border-b border-cream-300/70 px-6 py-6 md:px-8 md:py-7">
        <h3 className="font-display text-2xl text-espresso-900 md:text-3xl">
          {category.title}
        </h3>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-espresso-600 md:text-base">
          {category.subtitle}
        </p>
      </div>

      <div className="relative px-3 py-4 md:px-6 md:py-6">
        <Swiper
          modules={[Pagination]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1}
          spaceBetween={12}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1280: { slidesPerView: 4, spaceBetween: 20 },
          }}
          className="category-swiper !pb-10"
        >
          {images.map((src, imageIndex) => (
            <SwiperSlide key={src}>
              <div className="overflow-hidden rounded-2xl bg-cream-200 shadow-md shadow-espresso-900/5">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <SafeImage
                    src={src}
                    alt={`${category.title} — ${imageIndex + 1}`}
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 25vw"
                    className="object-cover transition-transform duration-500 ease-out hover:scale-110"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          aria-label="Предыдущий слайд"
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-cream-300/80 bg-cream-50/95 text-espresso-700 shadow-md transition-colors hover:border-terracotta-400/50 hover:text-terracotta-600 md:left-3 md:h-11 md:w-11"
        >
          <span aria-hidden="true" className="text-lg leading-none">
            ‹
          </span>
        </button>
        <button
          type="button"
          aria-label="Следующий слайд"
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-cream-300/80 bg-cream-50/95 text-espresso-700 shadow-md transition-colors hover:border-terracotta-400/50 hover:text-terracotta-600 md:right-3 md:h-11 md:w-11"
        >
          <span aria-hidden="true" className="text-lg leading-none">
            ›
          </span>
        </button>
      </div>
    </motion.article>
  );
}
