"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const phoneNumber = "+79967684957";
const phoneDisplay = "+7-996-768-49-57";

const contactLinks = [
  {
    label: "ВКонтакте",
    description: "Следите за нашими новинками",
    href: "https://vk.com/helgahomestyle",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.714-1.033-1.033-1.49-1.173-1.744-1.173-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.49-.085.744-.576.744z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    description: "Для быстрой связи",
    href: `https://wa.me/79967684957`,
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "Telegram",
    description: "Задать вопрос по заказу",
    href: `https://t.me/+79967684957`,
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative px-6 py-20 md:px-10 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-sage-100/30 to-transparent" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center md:mb-16"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-sage-600">
            Связаться с нами
          </p>
          <h2 className="font-display text-4xl text-espresso-900 md:text-5xl">
            Будем рады вашему сообщению
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-espresso-600 md:text-lg">
            Хотите заказать изделие или задать вопрос о коллекции? Напишите нам
            удобным для вас способом.
          </p>
          <a
            href={`tel:${phoneNumber}`}
            className="mt-6 inline-block font-display text-2xl tracking-wide text-terracotta-700 transition-opacity hover:opacity-80"
          >
            {phoneDisplay}
          </a>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 32 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }
              }
              transition={{
                duration: 0.75,
                delay: 0.15 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex flex-col items-center rounded-3xl border border-cream-300/80 bg-cream-50/80 px-6 py-10 text-center shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-terracotta-400/40 hover:shadow-lg hover:shadow-espresso-900/5"
            >
              <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-terracotta-600/10 text-terracotta-700 transition-colors group-hover:bg-terracotta-600 group-hover:text-cream-50">
                {link.icon}
              </span>
              <span className="font-display text-xl text-espresso-900">
                {link.label}
              </span>
              <span className="mt-2 text-sm text-espresso-600">
                {link.description}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
