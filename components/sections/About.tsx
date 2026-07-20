"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import aboutImage from "@/app/assets/about.png";
import aboutNicheImage from "@/app/assets/about1.png";
import { CREAM, FOREST, TERRACOTTA } from "@/lib/theme";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: EASE },
  }),
};

const VALUES = [
  {
    title: "Natural Materials",
    description:
      "We use carefully selected marble and authentic zellij, chosen for their beauty and durability.",
  },
  {
    title: "Crafted with Care",
    description:
      "Every piece is designed and crafted with attention to detail and respect for tradition.",
  },
  {
    title: "Made to Last",
    description:
      "Timeless design and quality materials that stand the test of time.",
  },
];

export function About() {
  return (
    <>
      <section
        style={{ backgroundColor: CREAM }}
        className="relative overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-175 mt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="flex flex-col justify-center gap-8 px-6 py-20 sm:px-10 lg:px-14 lg:py-0"
          >
            <div className="flex items-center gap-3">
              <p
                style={{ color: TERRACOTTA }}
                className="text-xs font-medium tracking-[0.3em] uppercase"
              >
                About Us
              </p>
              <span
                style={{ backgroundColor: TERRACOTTA }}
                className="h-px w-8"
              />
            </div>

            <h1 className="font-serif text-5xl leading-[1.1] text-neutral-900 sm:text-6xl">
              Timeless materials.
              <br />
              Meaningful spaces.
            </h1>

            <p className="max-w-md text-base leading-relaxed text-neutral-500">
              We create bathroom environments that celebrate the natural beauty
              of marble and the artistry of zellij. Rooted in Moroccan heritage
              and crafted with care, our designs bring balance, calm, and
              authenticity to everyday life.
            </p>

            <a
              href="#"
              style={{ backgroundColor: FOREST }}
              className="inline-flex w-fit items-center gap-3 rounded-lg px-8 py-4 text-xs font-medium tracking-[0.15em] text-white uppercase shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Our Story
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.15}
            variants={fadeUp}
            className="relative min-h-105 lg:min-h-0"
          >
            <Image
              src={aboutNicheImage}
              alt="Niche en zellige vert et crème avec un vase en marbre et un olivier"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section
        style={{ backgroundColor: CREAM }}
        className="border-t border-neutral-900/10 px-6 py-16 sm:px-10 sm:py-24 lg:px-14"
      >
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            variants={fadeUp}
            className="relative h-96 overflow-hidden rounded-2xl sm:h-125 lg:h-60"
          >
            <Image
              src={aboutImage}
              alt="Vasque ronde en marbre veiné sous une robinetterie laiton, avec un vase en marbre et un olivier"
              fill
              sizes="(min-width: 1024px) 30vw, 100vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.15}
            variants={fadeUp}
            className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8 lg:divide-x lg:divide-neutral-900/10"
          >
            {VALUES.map(({ title, description }) => (
              <div
                key={title}
                className="flex flex-col gap-3 lg:pl-8 lg:first:pl-0"
              >
                <p className="text-xs font-medium tracking-[0.2em] text-neutral-900 uppercase">
                  {title}
                </p>
                <span className="h-px w-6 bg-neutral-900/20" />
                <p className="text-sm leading-relaxed text-neutral-500">
                  {description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
