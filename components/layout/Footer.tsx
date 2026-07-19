"use client";

import Image from "next/image";
import {
  ArrowRight,
  Briefcase,
  Camera,
  Globe,
  Hand,
  Leaf,
  Mail,
} from "lucide-react";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import footerImage from "@/app/assets/footer.png";
import { Input } from "@/components/ui/input";
import { CREAM, INK, TERRACOTTA } from "@/lib/theme";
import { emailSchema } from "@/lib/schemas";

const MOSAIC_GREEN = "#1F3B30";
const MOSAIC_CREAM = "#D9C7A1";

const TAGLINES = ["Marble.", "Zelij.", "Atmosphere.", "Intention."];

const LINK_COLUMNS = [
  {
    heading: "Explore",
    links: ["Collections", "Marble", "Zellij", "Projects", "About MAREA"],
  },
  // {
  //   heading: "Information",
  //   links: [
  //     "Care & Maintenance",
  //     "FAQs",
  //     "Delivery & Returns",
  //     "Sustainability",
  //     "Warranty",
  //   ],
  // },
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

const LEGAL_LINKS = ["Privacy Policy", "Terms & Conditions", "Cookies"];

function ZelligeStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <g stroke={TERRACOTTA} strokeWidth="0.6" strokeLinejoin="round">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <polygon
            key={angle}
            points="20,20 16,7 20,2 24,7"
            fill={i % 2 === 0 ? MOSAIC_GREEN : MOSAIC_CREAM}
            transform={`rotate(${angle} 20 20)`}
          />
        ))}
      </g>
      <circle cx="20" cy="20" r="1.4" fill={TERRACOTTA} />
    </svg>
  );
}

function ZelligeDiamond({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <g stroke={TERRACOTTA} strokeWidth="0.6">
        <rect
          x="14"
          y="3"
          width="11"
          height="11"
          fill={MOSAIC_GREEN}
          transform="rotate(45 19.5 8.5)"
        />
        <rect
          x="26"
          y="14.5"
          width="11"
          height="11"
          fill={MOSAIC_CREAM}
          transform="rotate(45 31.5 20)"
        />
        <rect
          x="14"
          y="26"
          width="11"
          height="11"
          fill={MOSAIC_GREEN}
          transform="rotate(45 19.5 31.5)"
        />
        <rect
          x="3"
          y="14.5"
          width="11"
          height="11"
          fill={MOSAIC_CREAM}
          transform="rotate(45 8.5 20)"
        />
      </g>
    </svg>
  );
}

const VALUES = [
  {
    icon: ZelligeStar,
    label: "Natural Materials",
    description:
      "Carefully selected marble and authentic zellij. Made to last.",
  },
  {
    icon: ZelligeDiamond,
    label: "Tradition & Craft",
    description: "Rooted in Moroccan craftsmanship and heritage.",
  },
  {
    icon: Leaf,
    label: "Sustainable Choice",
    description: "Responsible sourcing for a more beautiful future.",
  },
  {
    icon: Hand,
    label: "Made with Care",
    description: "Attention to detail in every piece and finishing.",
  },
  {
    icon: ZelligeStar,
    label: "Spaces That Inspire",
    description: "Timeless design for spaces that feel calm and meaningful.",
  },
];

function FooterLinkColumn({
  heading,
  links,
}: {
  heading: string;
  links: string[];
}) {
  return (
    <div>
      <p className="text-xs font-medium tracking-[0.2em] text-neutral-900/60 uppercase">
        {heading}
      </p>
      <ul className="mt-6 flex flex-col gap-4">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-sm text-neutral-700 transition-colors hover:text-neutral-900"
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
        toast.error(
          parsed.error.issues[0]?.message ?? "Une erreur est survenue.",
        );
        return;
      }
      toast.success("Merci ! Vous êtes inscrit(e) à notre newsletter.");
      form.reset();
    },
  });

  return (
    <footer className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr]">
        <div className="relative flex min-h-105 flex-col justify-between gap-8 overflow-hidden p-8 sm:p-10 lg:min-h-0 lg:p-14">
          <div className="absolute inset-0">
            <Image
              src={footerImage}
              alt="Marbre veiné avec ombre de feuillage et bordure de zellige vert et crème"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "left top" }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to right, transparent 0%, transparent 55%, ${CREAM}CC 78%, ${CREAM} 92%)`,
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col gap-6">
            <span className="font-serif text-4xl tracking-[0.3em] text-neutral-900">
              MAREA
            </span>
            <span className="h-px w-10 bg-neutral-900/30" />
            {/* <p className="flex flex-col gap-1 text-xs font-medium tracking-[0.25em] text-neutral-900/80 uppercase">
              {TAGLINES.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p> */}
            <p className=" text-sm leading-relaxed text-neutral-600">
              MAREA creates timeless spaces where natural marble and traditional
              zellij come together in perfect harmony.
            </p>
          </div>
        </div>

        <div
          style={{ backgroundColor: CREAM }}
          className="grid grid-cols-1 gap-10 p-8 sm:grid-cols-3 sm:gap-8 sm:p-10 lg:gap-0 lg:divide-x lg:divide-neutral-900/10 lg:p-14"
        >
          {LINK_COLUMNS.map((column) => (
            <div key={column.heading} className="lg:pl-8 lg:first:pl-0">
              <FooterLinkColumn heading={column.heading} links={column.links} />
            </div>
          ))}

          <div className="lg:pl-8">
            <p className="text-xs font-medium tracking-[0.2em] text-neutral-900/60 uppercase">
              Connect
            </p>
            <p className="mt-6 max-w-52 text-sm leading-relaxed text-neutral-600">
              Thoughtful updates. New collections. Design inspiration. No noise.
            </p>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                form.handleSubmit();
              }}
              className="mt-6 flex items-center gap-2 border-b border-neutral-900/20 pb-2"
            >
              <form.Field name="email">
                {(field) => (
                  <Input
                    type="email"
                    value={field.state.value}
                    onChange={(event) => field.handleChange(event.target.value)}
                    placeholder="Your email"
                    aria-label="Adresse e-mail"
                    className="h-auto flex-1 rounded-none border-0 bg-transparent p-0 text-sm text-neutral-900 placeholder:text-neutral-400 focus-visible:ring-0"
                  />
                )}
              </form.Field>
              <button
                type="submit"
                aria-label="S'inscrire à la newsletter"
                className="shrink-0 text-neutral-900 transition-transform hover:translate-x-1"
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
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-900/20 text-neutral-700 transition-colors hover:border-neutral-900/50 hover:text-neutral-900"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundColor: CREAM }}
        className="relative border-t border-neutral-900/10"
      >
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 px-6 py-16 sm:grid-cols-3 sm:px-10 lg:grid-cols-5 lg:divide-x lg:divide-neutral-900/10 lg:px-14">
          {VALUES.map(({ icon: Icon, label, description }, index) => (
            <div
              key={`${label}-${index}`}
              className="flex flex-col gap-3 lg:px-6 lg:first:pl-0"
            >
              <Icon
                className="h-9 w-9"
                strokeWidth={1.25}
                style={{ color: TERRACOTTA }}
                aria-hidden="true"
              />
              <p className="text-xs font-medium tracking-[0.15em] text-neutral-900 uppercase">
                {label}
              </p>
              <p className="text-sm leading-relaxed text-neutral-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
