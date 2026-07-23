"use client";

import Image, { type StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { CREAM, TERRACOTTA } from "@/lib/theme";

// Placeholder photography until dedicated zellige / mosaic / texture shots are supplied —
// only the "Marbres" card image actually matches its label.
import marbresImg from "@/app/assets/imgs1/ChatGPT Image Jul 19, 2026, 08_16_51 PM.png";
import grandsFormatsImg from "@/app/assets/imgs1/ChatGPT Image Jul 19, 2026, 08_18_26 PM.png";
import zelijImg from "@/app/assets/imgs1/ChatGPT Image Jul 19, 2026, 08_19_07 PM.png";
import mosaiquesImg from "@/app/assets/imgs1/ChatGPT Image Jul 19, 2026, 08_23_01 PM.png";
import finitionsImg from "@/app/assets/imgs1/ChatGPT Image Jul 19, 2026, 08_24_06 PM.png";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: EASE },
  }),
};

type Card = {
  key: string;
  label: string;
  description: string;
  image: StaticImageData;
  alt: string;
  area: string;
};

const CARDS: Card[] = [
  {
    key: "marbres",
    label: "Marbres",
    description: "Des veines uniques. Une élégance intemporelle.",
    image: marbresImg,
    alt: "Trois dalles de marbre — blanc veiné d'or, vert foncé et beige rayé — appuyées contre un mur ensoleillé",
    area: "lg:col-start-2 lg:col-span-2 lg:row-start-1 lg:row-span-2",
  },
  {
    key: "grands-formats",
    label: "Grands Formats",
    description: "Moins de joints. Plus d’harmonie.",
    image: grandsFormatsImg,
    alt: "Dalle de marbre noir veiné de blanc, appuyée contre un mur, avec un vase en céramique",
    area: "lg:col-start-1 lg:row-start-3 lg:row-span-2",
  },
  {
    key: "zelij",
    label: "Zelij",
    description: "L’authenticité artisanale marocaine.",
    image: zelijImg,
    alt: "Dalle de marbre beige aux veines dorées diagonales, appuyée contre un mur",
    area: "lg:col-start-2 lg:row-start-3 lg:row-span-2",
  },
  {
    key: "mosaiques",
    label: "Mosaïques",
    description: "Des détails qui font la différence.",
    image: mosaiquesImg,
    alt: "Dalle de marbre beige aux veines dorées verticales, appuyée contre un mur",
    area: "lg:col-start-3 lg:row-start-3 lg:row-span-1",
  },
  {
    key: "finitions",
    label: "Finitions & Textures",
    description: "Des surfaces pour chaque ambiance.",
    image: finitionsImg,
    alt: "Dalle de marbre beige aux veines dorées, format paysage, appuyée contre un mur",
    area: "lg:col-start-3 lg:row-start-4 lg:row-span-1",
  },
];

function CollectionCard({ card, delay }: { card: Card; delay: number }) {
  return (
    <motion.a
      href="/collections"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={delay}
      variants={fadeUp}
      className={`group relative block h-64 overflow-hidden rounded-2xl sm:h-80 lg:h-auto ${card.area}`}
    >
      <Image
        src={card.image}
        alt={card.alt}
        fill
        sizes="(min-width: 1024px) 40vw, 100vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
      />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
        <div>
          <p className="text-sm font-semibold tracking-[0.1em] text-white uppercase">
            {card.label}
          </p>
          <p className="mt-1 text-xs leading-relaxed text-white/80">
            {card.description}
          </p>
        </div>
        <ArrowRight
          className="h-4 w-4 shrink-0 text-white transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </div>
    </motion.a>
  );
}

export function Collections() {
  const [marbres, ...rest] = CARDS;

  return (
    <section
      id="collections"
      style={{ backgroundColor: CREAM }}
      className="scroll-mt-24 px-6 py-24 sm:px-10 sm:py-32 lg:px-14"
    >
      <div className="grid grid-cols-1 gap-4 lg:h-220 lg:grid-cols-3 lg:grid-rows-4 lg:gap-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          variants={fadeUp}
          className="flex flex-col justify-start gap-6 lg:col-start-1 lg:row-start-1 lg:row-span-2"
        >
          <div>
            <p
              style={{ color: TERRACOTTA }}
              className="text-xs font-medium tracking-[0.3em] uppercase"
            >
              03 &mdash; Collections
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-[1.05] text-neutral-900 sm:text-6xl">
              Collections
              <br />
              S&eacute;lectionn&eacute;es
            </h2>

            <p className="mt-6 max-w-xs text-base leading-relaxed text-neutral-500">
              Des mat&eacute;riaux nobles, s&eacute;lectionn&eacute;s avec
              soin pour sublimer vos espaces.
            </p>
          </div>

          <a
            href="/collections"
            className="group inline-flex w-fit items-center gap-3 border-b border-neutral-900/30 pb-1 text-xs font-medium tracking-[0.15em] text-neutral-900 uppercase transition-colors hover:border-neutral-900/60"
          >
            Voir toutes les collections
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </motion.div>

        <CollectionCard card={marbres} delay={0.1} />
        {rest.map((card, index) => (
          <CollectionCard key={card.key} card={card} delay={0.15 + index * 0.1} />
        ))}
      </div>
    </section>
  );
}
