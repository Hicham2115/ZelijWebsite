"use client";

import { Hammer, Leaf, Waves } from "lucide-react";
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
      "We craft in small runs with care and intention. Every curve, every detail, made to last.",
  },
  {
    icon: Waves,
    title: "Material Honesty",
    description:
      "We use real materials, chosen for their beauty and their integrity.",
  },
  {
    icon: Leaf,
    title: "Calm by Design",
    description:
      "We design for spaces that quiet the mind and restore the body.",
  },
];

export function Philosophy() {
  return (
    <section
      style={{ backgroundColor: CREAM }}
      className="px-6 py-24 sm:px-10 sm:py-32 lg:px-14"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        custom={0}
        variants={fadeUp}
        className="mx-auto max-w-2xl text-center"
      >
        <p
          style={{ color: TERRACOTTA }}
          className="text-xs font-medium tracking-[0.3em] uppercase"
        >
          02 &mdash; Philosophy
        </p>

        <h2 className="mt-6 font-serif text-6xl leading-[1.05] text-neutral-900 sm:text-7xl">
          Ritual
          <br />
          over Routine.
        </h2>

        <p className="mt-8 text-base leading-relaxed text-neutral-500">
          We believe the everyday can be extraordinary.
          <br />
          Water is not just for use, it&apos;s for presence.
          <br />
          Our pieces are designed to turn ordinary moments
          <br />
          into quiet rituals you look forward to.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        custom={0.15}
        variants={fadeUp}
        className="mx-auto mt-20 grid max-w-5xl grid-cols-1 divide-y divide-neutral-900/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
      >
        {FEATURES.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex flex-col items-center gap-4 px-6 py-10 text-center first:pt-0 last:pb-0 sm:py-0"
          >
            <Icon
              className="h-8 w-8"
              strokeWidth={1.25}
              style={{ color: TERRACOTTA }}
              aria-hidden="true"
            />

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

            <p className="max-w-[220px] text-sm leading-relaxed text-neutral-500">
              {description}
            </p>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        custom={0.3}
        variants={fadeUp}
        className="mt-20 flex flex-col items-center gap-2"
      >
        <span className="font-serif text-2xl tracking-[0.3em] text-neutral-900">
          MAREA
        </span>
        <span
          style={{ color: TERRACOTTA }}
          className="text-[10px] font-medium tracking-[0.3em] uppercase"
        >
          Water, Unhurried.
        </span>
      </motion.div>
    </section>
  );
}
