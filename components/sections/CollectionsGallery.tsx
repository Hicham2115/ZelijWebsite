"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { CREAM, TERRACOTTA } from "@/lib/theme";

// Placeholder photography until dedicated collection shots are supplied —
// same caveat as the ChatGPT-generated imagery in Collections.tsx.
import img01 from "@/app/assets/collections/1.png";
import img02 from "@/app/assets/collections/2.png";
import img03 from "@/app/assets/collections/3.png";
import img04 from "@/app/assets/collections/4.png";
import img05 from "@/app/assets/collections/5.png";
import img06 from "@/app/assets/collections/6.png";
import img07 from "@/app/assets/collections/7.png";
import img08 from "@/app/assets/collections/8.png";
import img09 from "@/app/assets/collections/9.png";
import img10 from "@/app/assets/collections/Screenshot 2026-07-23 at 12.25.12.png";
import img11 from "@/app/assets/collections/Screenshot 2026-07-23 at 13.32.20.png";
import img12 from "@/app/assets/collections/Screenshot 2026-07-23 at 13.32.38.png";
import img13 from "@/app/assets/collections/Screenshot 2026-07-23 at 13.32.57.png";
import img14 from "@/app/assets/collections/Screenshot 2026-07-23 at 13.33.04.png";
import img15 from "@/app/assets/collections/Screenshot 2026-07-23 at 13.33.10.png";
import img16 from "@/app/assets/collections/Screenshot 2026-07-23 at 13.33.16.png";
import img17 from "@/app/assets/collections/Screenshot 2026-07-23 at 13.33.21.png";
import img18 from "@/app/assets/collections/Screenshot 2026-07-23 at 13.33.27.png";
import img19 from "@/app/assets/collections/Screenshot 2026-07-23 at 13.33.30.png";
import img20 from "@/app/assets/collections/Screenshot 2026-07-23 at 13.33.49.png";
import img21 from "@/app/assets/collections/Screenshot 2026-07-23 at 13.33.53.png";
import img22 from "@/app/assets/collections/Screenshot 2026-07-23 at 13.33.58.png";
import img23 from "@/app/assets/collections/Screenshot 2026-07-23 at 13.34.03.png";
import img24 from "@/app/assets/collections/Screenshot 2026-07-23 at 13.34.07.png";
import img25 from "@/app/assets/collections/Screenshot 2026-07-23 at 13.34.10.png";
import img26 from "@/app/assets/collections/Screenshot 2026-07-23 at 13.34.14.png";
import img27 from "@/app/assets/collections/Screenshot 2026-07-23 at 13.34.19.png";
import img28 from "@/app/assets/collections/Screenshot 2026-07-23 at 13.34.23.png";
import img29 from "@/app/assets/collections/Screenshot 2026-07-23 at 13.34.27.png";
import img30 from "@/app/assets/collections/Screenshot 2026-07-23 at 13.34.33.png";
import img31 from "@/app/assets/collections/Screenshot 2026-07-23 at 13.36.08.png";
import img32 from "@/app/assets/collections/Screenshot 2026-07-23 at 13.36.14.png";
import img33 from "@/app/assets/collections/Screenshot 2026-07-23 at 13.36.17.png";
import img34 from "@/app/assets/collections/Screenshot 2026-07-23 at 13.36.21.png";
import img35 from "@/app/assets/collections/Screenshot 2026-07-23 at 13.36.26.png";
import img36 from "@/app/assets/collections/Screenshot 2026-07-23 at 13.36.30.png";
import img37 from "@/app/assets/collections/Screenshot 2026-07-23 at 13.36.37.png";
import img38 from "@/app/assets/collections/Screenshot 2026-07-23 at 13.36.40.png";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: EASE },
  }),
};

const GALLERY_IMAGES = [
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
  img07,
  img08,
  img09,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
  img37,
  img38,
].map((src, index) => ({
  src,
  alt: `Photographie de la collection Arte Piedra, pièce ${String(index + 1).padStart(2, "0")}`,
}));

export function CollectionsGallery() {
  return (
    <>
      <section
        style={{ backgroundColor: CREAM }}
        className="relative overflow-hidden"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="mx-auto mt-20 max-w-2xl px-6 pt-16 pb-12 text-center sm:px-10 sm:pt-20 lg:px-14"
        >
          <div className="flex items-center justify-center gap-3">
            <span
              style={{ backgroundColor: TERRACOTTA }}
              className="h-px w-8"
            />
            <p
              style={{ color: TERRACOTTA }}
              className="text-xs font-medium tracking-[0.3em] uppercase"
            >
              Collections
            </p>
            <span
              style={{ backgroundColor: TERRACOTTA }}
              className="h-px w-8"
            />
          </div>

          <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-neutral-900 sm:text-6xl">
            Toutes nos collections
          </h1>

          <p className="mt-6 text-base leading-relaxed text-neutral-500">
            Un aper&ccedil;u de notre univers&nbsp;: marbre naturel et zellige
            fa&ccedil;onn&eacute; &agrave; la main, s&eacute;lectionn&eacute;s
            pour sublimer chaque espace.
          </p>
        </motion.div>
      </section>

      <section className="px-6 pb-24 sm:px-10 sm:pb-32 lg:px-14">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
          {GALLERY_IMAGES.map((item, index) => (
            <motion.div
              key={item.alt}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={0.05 * (index % 4)}
              variants={fadeUp}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
