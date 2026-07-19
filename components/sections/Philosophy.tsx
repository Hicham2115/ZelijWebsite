"use client";

import { Grid3x3, Hammer, Mountain } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { CREAM, TERRACOTTA } from "@/lib/theme";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: EASE },
  }),
};

const FEATURES = [
  {
    icon: Hammer,
    title: "Craft",
    description:
      "We craft in small runs with care and intention. Every slab, every tile, cut and finished by hand.",
  },
  {
    icon: Mountain,
    title: "Material Honesty",
    description:
      "We source real marble and clay, chosen for their beauty, weight, and origin.",
  },
  {
    icon: Grid3x3,
    title: "Timeless Pattern",
    description:
      "Each zellige piece is hand-cut and laid to form patterns that endure for generations.",
  },
];

export function Philosophy() {
  return (
    <section
      id="philosophy"
      style={{ backgroundColor: CREAM }}
      className="relative scroll-mt-24 overflow-hidden px-6 py-16 sm:px-10 sm:py-24 lg:px-14"
    >
      <span
        aria-hidden="true"
        style={{ color: TERRACOTTA }}
        className="pointer-events-none absolute top-4 left-1/2 -translate-x-1/2 font-serif text-[14rem] leading-none opacity-[0.06] select-none sm:text-[18rem]"
      >
        &ldquo;
      </span>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        custom={0}
        variants={fadeUp}
        className="relative mx-auto max-w-2xl text-center"
      >
        <p
          style={{ color: TERRACOTTA }}
          className="text-xs font-medium tracking-[0.3em] uppercase"
        >
          02 &mdash; Philosophy
        </p>

        <h2 className="mt-6 font-serif text-6xl leading-[1.05] text-neutral-900 sm:text-7xl lg:text-8xl">
          Heritage
          <br />
          <span className="italic">over Haste.</span>
        </h2>

        <p className="mt-8 text-base leading-relaxed text-neutral-500">
          We believe surfaces shape how a space feels.
          <br />
          Marble is not just for building, it&apos;s for belonging.
          <br />
          Our zellige is cut and glazed by hand,
          <br />
          each tile carrying the mark of its maker.
        </p>
      </motion.div>

      <div className="relative mx-auto mt-14 max-w-5xl">
        <div
          style={{ borderColor: `${TERRACOTTA}33` }}
          className="mx-auto mb-10 h-px w-16 border-t"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.15}
          variants={fadeUp}
          className="grid grid-cols-1 gap-14 sm:grid-cols-3 sm:gap-10"
        >
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group flex flex-col items-center gap-5 text-center"
            >
              <div
                style={{ borderColor: `${TERRACOTTA}4D` }}
                className="flex h-16 w-16 items-center justify-center rounded-full border transition-transform duration-300 group-hover:scale-110"
              >
                <Icon
                  className="h-6 w-6"
                  strokeWidth={1.25}
                  style={{ color: TERRACOTTA }}
                  aria-hidden="true"
                />
              </div>

              <div className="flex flex-col items-center gap-2">
                <p
                  style={{ color: TERRACOTTA }}
                  className="text-xs font-medium tracking-[0.2em] uppercase"
                >
                  {title}
                </p>
                <span
                  style={{ backgroundColor: TERRACOTTA }}
                  className="h-px w-6"
                />
              </div>

              <p className="max-w-60 text-sm leading-relaxed text-neutral-500">
                {description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        custom={0.3}
        variants={fadeUp}
        className="relative mx-auto mt-14 flex max-w-5xl flex-col items-center gap-4 border-t border-neutral-900/10 pt-10"
      >
        <span className="font-serif text-2xl tracking-[0.3em] text-neutral-900">
          MAREA
        </span>
        <span
          style={{ color: TERRACOTTA }}
          className="text-[10px] font-medium tracking-[0.3em] uppercase"
        >
          Stone, Unhurried.
        </span>
      </motion.div>
    </section>
  );
}
