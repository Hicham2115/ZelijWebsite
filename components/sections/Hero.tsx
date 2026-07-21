"use client";

import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import heroImage from "@/app/assets/hero.png";
import { FOREST } from "@/lib/theme";

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
        alt="Dalles de marbre et zellige émaillé à la main, appuyés contre un mur de patio ensoleillé"
        fill
        sizes="100vw"
        preload
        className="object-cover"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-48"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,12,8,0.45), rgba(15,12,8,0))",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(15,12,8,0.7) 0%, rgba(15,12,8,0.55) 36%, rgba(15,12,8,0.25) 56%, rgba(15,12,8,0) 72%)",
        }}
      />

      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="flex flex-1 flex-col justify-center gap-8 px-6 py-20 sm:gap-10 sm:px-10 sm:py-28 lg:px-14 lg:py-0">
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="font-serif mt-12 text-6xl leading-[1.05] tracking-[0.06em] text-white uppercase sm:mt-20 sm:text-8xl lg:mt-28 lg:text-8xl"
          >
            Marbre.
            <br />
            Zelij.
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.15}
            variants={fadeUp}
            className="flex max-w-lg flex-col gap-4"
          >
            <p className="text-xs font-medium tracking-[0.2em] text-white/80 uppercase">
              L&apos;art des mati&egrave;res naturelles au service de vos
              espaces.
            </p>
            <p className="max-w-md text-base leading-relaxed text-white/70">
              Depuis notre atelier en Espagne, nous s&eacute;lectionnons chaque
              bloc de marbre et fa&ccedil;onnons chaque zellige &agrave; la
              main, dans la plus pure tradition marocaine.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#"
              style={{ backgroundColor: FOREST }}
              className="inline-flex items-center gap-3 px-6 py-4 text-xs font-medium tracking-[0.15em] text-white uppercase transition-colors hover:opacity-90"
            >
              D&eacute;couvrir nos collections
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#"
              className="border border-white/30 px-6 py-4 text-xs font-medium tracking-[0.15em] text-white uppercase transition-colors hover:border-white/60"
            >
              Notre histoire
            </a>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.5}
          variants={fadeUp}
          className="hidden px-6 pb-10 sm:px-10 lg:block lg:px-14 lg:pb-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex items-start gap-3 text-white/60"
          >
            <span className="text-[10px] font-medium tracking-[0.25em] uppercase">
              Défiler
            </span>
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
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
          Depuis
        </p>
        <p className="font-serif text-3xl">2014</p>
        <p className="text-[10px] font-medium tracking-[0.2em] text-white/80 uppercase">
          Espagne &amp; Maroc
        </p>
      </motion.div>
    </section>
  );
}
