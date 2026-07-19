"use client";

import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import heroImage from "@/app/assets/hero.png";
import { Header } from "@/components/layout/Header";
import { CREAM, FOREST } from "@/lib/theme";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: EASE },
  }),
};

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image
        src={heroImage}
        alt="Freestanding stone bathtub beside a window overlooking the sea"
        fill
        sizes="100vw"
        preload
        className="object-cover object-[68%_50%]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 sm:hidden"
        style={{
          background: `linear-gradient(to right, ${CREAM} 0%, ${CREAM} 55%, rgba(244,239,231,0.9) 72%, rgba(244,239,231,0.45) 88%, rgba(244,239,231,0) 100%)`,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden sm:block"
        style={{
          background: `linear-gradient(to right, ${CREAM} 0%, ${CREAM} 36%, rgba(244,239,231,0.85) 46%, rgba(244,239,231,0.3) 58%, rgba(244,239,231,0) 68%)`,
        }}
      />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />

        <div className="flex flex-1 flex-col justify-center gap-8 px-6 py-16 sm:px-10 lg:px-14 lg:py-0">
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="max-w-xl font-serif text-6xl leading-[1.05] text-neutral-900 sm:text-7xl"
          >
            Water Deserves
            <br />
            More Than
            <br />
            Utility.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.15}
            variants={fadeUp}
            className="max-w-sm text-base leading-relaxed text-neutral-500"
          >
            MAREA designs bath fixtures and rituals for people who treat
            water as something to slow down for, not just use.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              type="button"
              style={{ backgroundColor: FOREST }}
              className="inline-flex items-center gap-3 px-6 py-4 text-xs font-medium tracking-[0.15em] text-white uppercase transition-colors hover:opacity-90"
            >
              Explore Collection
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="border border-neutral-900/20 px-6 py-4 text-xs font-medium tracking-[0.15em] text-neutral-900 uppercase transition-colors hover:border-neutral-900/40"
            >
              Our Story
            </button>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.5}
          variants={fadeUp}
          className="px-6 pb-10 sm:px-10 lg:px-14 lg:pb-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-start gap-3 text-neutral-400"
          >
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
            <span className="text-[10px] font-medium tracking-[0.25em] uppercase">
              Scroll
            </span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
        className="absolute right-6 bottom-6 z-10 rounded-2xl border border-white/25 bg-black/25 px-6 py-5 text-white backdrop-blur-md sm:right-10 sm:bottom-10"
      >
        <p className="text-[10px] font-medium tracking-[0.2em] text-white/80 uppercase">
          Established
        </p>
        <p className="font-serif text-3xl">2014</p>
        <p className="text-[10px] font-medium tracking-[0.2em] text-white/80 uppercase">
          Espagne
        </p>
      </motion.div>
    </section>
  );
}
