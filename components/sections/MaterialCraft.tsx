"use client";

import Image from "next/image";
import { Amphora, ArrowRight, Flower2, Gem, Sparkle } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { CREAM, TERRACOTTA } from "@/lib/theme";

import heroCraftImg from "@/app/assets/imgs2/ChatGPT Image Jul 19, 2026, 08_52_05 PM.png";
import marbleCardImg from "@/app/assets/imgs2/ChatGPT Image Jul 19, 2026, 08_52_46 PM.png";
import zelijCardImg from "@/app/assets/imgs2/ChatGPT Image Jul 19, 2026, 08_54_21 PM.png";
import marbleCard2Img from "@/app/assets/imgs2/ChatGPT Image Jul 19, 2026, 08_55_03 PM.png";
import zelijCard2Img from "@/app/assets/imgs2/ChatGPT Image Jul 19, 2026, 09_27_34 PM.png";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: EASE },
  }),
};

const CRAFT_CARDS = [
  {
    index: "01",
    label: "Marble",
    description:
      "Sourced for its purity and strength. Every piece is unique, just like nature.",
    icon: Gem,
    image: marbleCardImg,
    alt: "Gros plan sur l'arête d'une dalle de marbre beige veinée d'or",
  },
  {
    index: "02",
    label: "Zelij",
    description:
      "Handcrafted by Moroccan artisans. Timeless patterns, shaped by tradition.",
    icon: Sparkle,
    image: zelijCardImg,
    alt: "Mosaïque de zellige en étoile, verte et crème, vue de près",
  },
  {
    index: "03",
    label: "Marble",
    description:
      "Smooth to touch, easy to live with. Engineered for everyday rituals.",
    icon: Amphora,
    image: marbleCard2Img,
    alt: "Boîte ronde en marbre avec couvercle et poignée en laiton",
  },
  {
    index: "04",
    label: "Zelij",
    description:
      "Selected for warmth and character. Designed to complement water, not compete.",
    icon: Flower2,
    image: zelijCard2Img,
    alt: "Plateau en marbre incrusté d'un motif de zellige en étoile, vert et crème",
  },
];

function CraftCard({
  card,
  delay,
}: {
  card: (typeof CRAFT_CARDS)[number];
  delay: number;
}) {
  const Icon = card.icon;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={delay}
      variants={fadeUp}
      style={{ backgroundColor: CREAM }}
      className="group flex flex-col"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={card.image}
          alt={card.alt}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center gap-3">
          <span
            style={{ color: TERRACOTTA }}
            className="text-xs font-medium tracking-[0.15em]"
          >
            {card.index}
          </span>
          <span
            style={{ backgroundColor: `${TERRACOTTA}40` }}
            className="h-px flex-1"
          />
          <div
            style={{ borderColor: `${TERRACOTTA}4D` }}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border"
          >
            <Icon
              className="h-4 w-4"
              strokeWidth={1.25}
              style={{ color: TERRACOTTA }}
              aria-hidden="true"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-[0.15em] text-neutral-900 uppercase">
            {card.label}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-neutral-500">
            {card.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function MaterialCraft() {
  return (
    <section
      id="material-craft"
      style={{ backgroundColor: CREAM }}
      className="scroll-mt-24 px-6 py-16 sm:px-10 sm:py-24 lg:px-14"
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
          variants={fadeUp}
          className="flex flex-col justify-center gap-8 py-8 lg:py-0"
        >
          <div>
            <p
              style={{ color: TERRACOTTA }}
              className="text-xs font-medium tracking-[0.3em] uppercase"
            >
              04 &mdash; Material &amp; Craft
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-[1.05] text-neutral-900 sm:text-6xl">
              Made from
              <br />
              honest materials.
              <br />
              <span className="italic">Crafted with care.</span>
            </h2>

            <span
              style={{ backgroundColor: TERRACOTTA }}
              className="mt-6 block h-px w-10"
            />

            <p className="mt-6 max-w-xs text-base leading-relaxed text-neutral-500">
              We believe beauty starts with what&apos;s real. Natural
              materials, traditional techniques, and a slower way of making
              &mdash; that&apos;s the MAREA way.
            </p>
          </div>

          <a
            href="#"
            className="group inline-flex w-fit items-center gap-3 border-b border-neutral-900/30 pb-1 text-xs font-medium tracking-[0.15em] text-neutral-900 uppercase transition-colors hover:border-neutral-900/60"
          >
            Our Craft Process
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.15}
          variants={fadeUp}
          className="relative h-80 overflow-hidden rounded-2xl sm:h-[420px] lg:h-[560px]"
        >
          <Image
            src={heroCraftImg}
            alt="Vasque ronde en marbre veiné sous une robinetterie laiton, avec un vase en marbre et un olivier"
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover"
          />

          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/45 to-transparent"
          />

          <p className="absolute right-6 bottom-6 max-w-56 text-right text-xs leading-relaxed text-white/90 sm:right-10 sm:bottom-10">
            Real materials age beautifully. They develop character over
            time, just like the spaces they live in.
          </p>
        </motion.div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-neutral-900/10 bg-neutral-900/10 sm:grid-cols-2 lg:grid-cols-4">
        {CRAFT_CARDS.map((card, index) => (
          <CraftCard key={card.index} card={card} delay={0.1 + index * 0.08} />
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        custom={0.3}
        variants={fadeUp}
        className="mt-8 flex flex-col items-center gap-6 border-t border-neutral-900/10 pt-8 sm:flex-row sm:justify-between"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-900/20 font-serif text-sm text-neutral-900">
          M
        </div>

        <p
          style={{ color: TERRACOTTA }}
          className="flex flex-wrap items-center justify-center gap-x-3 text-center text-[11px] font-medium tracking-[0.2em] uppercase"
        >
          <span>Quiet Materials.</span>
          <span>Intentional Design.</span>
          <span>Lasting Beauty.</span>
        </p>

        <span className="font-serif text-lg tracking-[0.3em] text-neutral-900">
          MAREA
        </span>
      </motion.div>
    </section>
  );
}
