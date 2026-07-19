"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import heroImage from "@/app/assets/hero.png";
import { Header } from "@/components/layout/Header";

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
        alt="Marble slabs and hand-glazed zellige tile leaning against a sunlit courtyard wall"
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
            "linear-gradient(to right, rgba(15,12,8,0.65) 0%, rgba(15,12,8,0.5) 32%, rgba(15,12,8,0.2) 50%, rgba(15,12,8,0) 68%)",
        }}
      />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Header variant="light" />

        <div className="flex flex-1 flex-col justify-center gap-7 px-6 py-16 sm:px-10 lg:px-14 lg:py-0">
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="font-serif text-6xl leading-[1.1] tracking-[0.08em] text-white uppercase sm:text-7xl"
          >
            Marbre.
            <br />
            Zelij.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.15}
            variants={fadeUp}
            className="max-w-sm text-xs leading-relaxed font-medium tracking-[0.15em] text-white/80 uppercase"
          >
            L&apos;art des mati&egrave;res naturelles
            <br />
            au service de vos espaces.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
            className="flex flex-col gap-6"
          >
            <span className="h-px w-10 bg-white/40" />
            <a
              href="#"
              className="group inline-flex items-center gap-4 text-xs font-medium tracking-[0.15em] text-white uppercase transition-colors hover:text-white/70"
            >
              D&eacute;couvrir nos collections
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
