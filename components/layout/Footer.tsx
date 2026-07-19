"use client";

import Image from "next/image";
import { ArrowRight, ArrowUp, Briefcase, Camera, Droplet, Gem, Globe, Hand, Mail, Waves } from "lucide-react";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import footerImage from "@/app/assets/imgs1/ChatGPT Image Jul 19, 2026, 08_18_26 PM.png";
import { Input } from "@/components/ui/input";
import { CREAM, INK, TERRACOTTA } from "@/lib/theme";
import { emailSchema } from "@/lib/schemas";

const TAGLINES = ["Water.", "Material.", "Atmosphere.", "Intention."];

const LINK_COLUMNS = [
  {
    heading: "Explore",
    links: ["Collections", "Material & Craft", "Journal", "Projects", "About MAREA"],
  },
  {
    heading: "Information",
    links: ["Care & Maintenance", "FAQs", "Delivery & Returns", "Sustainability", "Warranty"],
  },
  {
    heading: "Company",
    links: ["Our Story", "Careers", "Press", "Trade Program", "Contact"],
  },
];

const SOCIALS = [
  { icon: Camera, label: "Instagram" },
  { icon: Globe, label: "Pinterest" },
  { icon: Briefcase, label: "LinkedIn" },
  { icon: Mail, label: "Email" },
];

const VALUES = [
  {
    icon: Gem,
    label: "Natural Materials",
    description: "Sourced with respect. Made to last.",
  },
  {
    icon: Droplet,
    label: "Water Conscious",
    description: "Designing for a more sustainable future.",
  },
  {
    icon: Hand,
    label: "Crafted with Care",
    description: "Expert craftsmanship. Timeless quality.",
  },
  {
    icon: Waves,
    label: "Spaces That Restore",
    description: "Creating calm in the everyday.",
  },
];

const LEGAL_LINKS = ["Privacy Policy", "Terms & Conditions", "Cookies"];

function FooterLinkColumn({ heading, links }: { heading: string; links: string[] }) {
  return (
    <div>
      <p
        style={{ color: `${CREAM}99` }}
        className="text-xs font-medium tracking-[0.2em] uppercase"
      >
        {heading}
      </p>
      <ul className="mt-6 flex flex-col gap-4">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-sm text-white/80 transition-colors hover:text-white"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const form = useForm({
    defaultValues: { email: "" },
    onSubmit: async ({ value }) => {
      const parsed = emailSchema.safeParse(value.email);
      if (!parsed.success) {
        toast.error(parsed.error.issues[0]?.message ?? "Une erreur est survenue.");
        return;
      }
      toast.success("Merci ! Vous êtes inscrit(e) à notre newsletter.");
      form.reset();
    },
  });

  return (
    <footer style={{ backgroundColor: INK }} className="relative overflow-hidden">
      <svg width="0" height="0" aria-hidden="true">
        <defs>
          <clipPath id="footer-blob-left" clipPathUnits="objectBoundingBox">
            <path d="M0,0 L0.62,0 C0.78,0.08 0.68,0.22 0.8,0.34 C0.9,0.46 0.66,0.55 0.75,0.68 C0.82,0.78 0.62,0.85 0.68,0.95 C0.7,1 0.6,1 0.5,1 L0,1 Z" />
          </clipPath>
          <clipPath id="footer-blob-right" clipPathUnits="objectBoundingBox">
            <path d="M1,0 L0.4,0 C0.25,0.1 0.35,0.25 0.22,0.4 C0.1,0.55 0.3,0.7 0.18,0.85 C0.12,0.95 0.25,1 0.4,1 L1,1 Z" />
          </clipPath>
          <path id="footer-circle-path" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
        </defs>
      </svg>

      <div className="relative grid grid-cols-1 gap-16 px-6 py-20 sm:px-10 lg:grid-cols-[1fr_1.6fr] lg:gap-10 lg:px-14 lg:py-24">
        <div className="relative flex min-h-[420px] flex-col justify-between overflow-hidden lg:min-h-0">
          <div
            className="absolute inset-y-0 left-0 -mx-6 w-[calc(100%+3rem)] sm:-mx-10 sm:w-[calc(100%+5rem)] lg:mx-0 lg:-my-24 lg:h-[calc(100%+12rem)] lg:w-full"
            style={{ clipPath: "url(#footer-blob-left)" }}
          >
            <Image
              src={footerImage}
              alt="Gros plan sur une dalle de marbre noir veiné de blanc"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="relative z-10 flex flex-col gap-6">
            <span className="font-serif text-4xl tracking-[0.3em] text-white">
              MAREA
            </span>
            <span className="h-px w-10 bg-white/40" />
            <p
              style={{ color: TERRACOTTA }}
              className="flex flex-col gap-1 text-xs font-medium tracking-[0.25em] uppercase"
            >
              {TAGLINES.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
            <p className="max-w-64 text-sm leading-relaxed text-white/70">
              MAREA creates timeless bathroom environments where natural
              materials and thoughtful design cultivate calm and clarity.
            </p>
          </div>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group relative z-10 inline-flex w-fit items-center gap-3 text-xs font-medium tracking-[0.15em] text-white uppercase transition-colors hover:text-white/70"
          >
            Scroll to top
            <ArrowUp
              className="h-4 w-4 transition-transform group-hover:-translate-y-1"
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
          {LINK_COLUMNS.map((column) => (
            <div key={column.heading} className="lg:pl-8 lg:first:pl-0">
              <FooterLinkColumn heading={column.heading} links={column.links} />
            </div>
          ))}

          <div className="lg:pl-8">
            <p
              style={{ color: `${CREAM}99` }}
              className="text-xs font-medium tracking-[0.2em] uppercase"
            >
              Connect
            </p>
            <p className="mt-6 max-w-52 text-sm leading-relaxed text-white/70">
              Thoughtful updates. New collections. Design inspiration. No
              noise.
            </p>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                form.handleSubmit();
              }}
              className="mt-6 flex items-center gap-2 border-b border-white/20 pb-2"
            >
              <form.Field name="email">
                {(field) => (
                  <Input
                    type="email"
                    value={field.state.value}
                    onChange={(event) => field.handleChange(event.target.value)}
                    placeholder="Your email"
                    aria-label="Adresse e-mail"
                    className="h-auto flex-1 rounded-none border-0 bg-transparent p-0 text-sm text-white placeholder:text-white/40 focus-visible:ring-0"
                  />
                )}
              </form.Field>
              <button
                type="submit"
                aria-label="S'inscrire à la newsletter"
                className="shrink-0 text-white transition-transform hover:translate-x-1"
              >
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>

            <div className="mt-6 flex items-center gap-4">
              {SOCIALS.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white/50 hover:text-white"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 px-6 py-10 sm:px-10 lg:px-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {VALUES.map(({ icon: Icon, label, description }) => (
            <div key={label} className="flex flex-col gap-3">
              <Icon
                className="h-6 w-6"
                strokeWidth={1.25}
                style={{ color: TERRACOTTA }}
                aria-hidden="true"
              />
              <p className="text-xs font-medium tracking-[0.15em] text-white uppercase">
                {label}
              </p>
              <p className="text-sm leading-relaxed text-white/60">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden border-t border-white/10">
        <div
          className="absolute inset-y-0 right-0 w-3/5"
          style={{ clipPath: "url(#footer-blob-right)", backgroundColor: CREAM }}
        />

        <div className="relative flex flex-col gap-8 px-6 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14">
          <div className="flex items-center gap-6">
            <div className="relative flex h-24 w-24 shrink-0 items-center justify-center">
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke={`${TERRACOTTA}66`}
                  strokeWidth="0.5"
                />
                <text
                  fill={TERRACOTTA}
                  fontSize="6.4"
                  letterSpacing="0.15em"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  <textPath href="#footer-circle-path">
                    TIMELESS BY NATURE &middot; DESIGNED TO ENDURE &middot;
                  </textPath>
                </text>
              </svg>
              <span className="font-serif text-lg text-white">M</span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-medium tracking-[0.2em] text-white/70 uppercase">
                41.3874&deg; N, 2.1686&deg; E
              </span>
              <span className="h-px w-6 bg-white/30" />
              <span className="font-serif text-base text-white/90 italic">
                Inspired by nature. Designed for life.
              </span>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 text-xs text-white/60 lg:items-end">
            <span>&copy; MAREA 2024. All rights reserved.</span>
            <div className="flex flex-wrap items-center gap-x-4">
              {LEGAL_LINKS.map((link) => (
                <a key={link} href="#" className="transition-colors hover:text-white">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
