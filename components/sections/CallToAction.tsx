"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import { z } from "zod";
import ctaImage from "@/app/assets/calltoaction.png";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { CREAM } from "@/lib/theme";
import { emailSchema } from "@/lib/schemas";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: EASE },
  }),
};

const newsletterSchema = z.object({
  email: emailSchema,
  consent: z.boolean().refine((value) => value === true, {
    message: "Merci d'accepter la politique de confidentialité.",
  }),
});

export function CallToAction() {
  const form = useForm({
    defaultValues: { email: "", consent: false },
    onSubmit: async ({ value }) => {
      const parsed = newsletterSchema.safeParse(value);
      if (!parsed.success) {
        toast.error(parsed.error.issues[0]?.message ?? "Une erreur est survenue.");
        return;
      }
      toast.success("Merci ! Vous êtes inscrit(e) à notre newsletter.");
      form.reset();
    },
  });

  return (
    <>
      <section id="contact" className="relative min-h-[85vh] scroll-mt-24 overflow-hidden">
        <Image
          src={ctaImage}
          alt="Vasque en marbre veiné avec robinetterie laiton, devant une niche de zellige vert et crème et une vue sur la mer"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(15,12,8,0.68) 0%, rgba(15,12,8,0.5) 34%, rgba(15,12,8,0.2) 54%, rgba(15,12,8,0) 70%)",
          }}
        />

        <div className="relative z-10 flex min-h-[85vh] flex-col justify-center gap-8 px-6 py-24 sm:px-10 lg:px-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            variants={fadeUp}
            className="flex items-center gap-3 text-white"
          >
            <span className="text-xs font-medium tracking-[0.3em] uppercase">
              Arte Piedra
            </span>
            <span className="h-px w-8 bg-white/50" />
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.1}
            variants={fadeUp}
            className="font-serif text-6xl leading-[1.05] text-white sm:text-7xl"
          >
            Cr&eacute;ons
            <br />
            <span className="italic">votre sanctuaire.</span>
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.2}
            variants={fadeUp}
            className="flex max-w-md flex-col gap-4"
          >
            <span className="h-px w-10 bg-white/40" />
            <p className="text-base leading-relaxed text-white/80">
              Design intemporel. Mati&egrave;res naturelles.
              <br />
              Des espaces qui restaurent l&apos;essentiel.
            </p>
          </motion.div>

          <motion.a
            href="/contact"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.3}
            variants={fadeUp}
            className="group inline-flex w-fit items-center gap-3 border-b border-white/40 pb-1 text-xs font-medium tracking-[0.15em] text-white uppercase transition-colors hover:border-white/70"
          >
            Nous Contacter
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </motion.a>
        </div>
      </section>

      <section
        style={{ backgroundColor: CREAM }}
        className="px-6 py-16 sm:px-10 sm:py-20 lg:px-14"
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            variants={fadeUp}
            className="flex flex-col gap-4"
          >
            <h3 className="font-serif text-4xl leading-[1.1] text-neutral-900 sm:text-5xl">
              Restez inspir&eacute;(e).
              <br />
              Des histoires intemporelles, livr&eacute;es.
            </h3>
            <p className="max-w-sm text-sm leading-relaxed text-neutral-500">
              Abonnez-vous &agrave; notre newsletter pour des r&eacute;flexions
              sur le design, les mati&egrave;res et les rituels qui
              fa&ccedil;onnent notre mani&egrave;re de vivre.
            </p>
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.15}
            variants={fadeUp}
            onSubmit={(event) => {
              event.preventDefault();
              form.handleSubmit();
            }}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-3 sm:flex-row">
              <form.Field name="email">
                {(field) => (
                  <Input
                    type="email"
                    value={field.state.value}
                    onChange={(event) => field.handleChange(event.target.value)}
                    placeholder="Votre adresse e-mail"
                    aria-label="Adresse e-mail"
                    className="h-auto flex-1 rounded-none border-neutral-900/20 bg-transparent px-4 py-4 text-sm text-neutral-900 placeholder:text-neutral-400"
                  />
                )}
              </form.Field>

              <button
                type="submit"
                className="shrink-0 bg-neutral-900 px-8 py-4 text-xs font-medium tracking-[0.15em] text-white uppercase transition-colors hover:bg-neutral-800"
              >
                S&apos;abonner
              </button>
            </div>

            <form.Field name="consent">
              {(field) => (
                <label className="flex items-start gap-3 text-xs leading-relaxed text-neutral-500">
                  <Checkbox
                    checked={field.state.value}
                    onCheckedChange={(checked) =>
                      field.handleChange(checked === true)
                    }
                    className="mt-0.5 rounded-[3px] border-neutral-900/30"
                  />
                  <span>
                    J&apos;accepte de recevoir les actualit&eacute;s Arte Piedra et
                    j&apos;accepte la{" "}
                    <a href="#" className="underline underline-offset-2">
                      Politique de Confidentialit&eacute;
                    </a>
                    .
                  </span>
                </label>
              )}
            </form.Field>
          </motion.form>
        </div>
      </section>
    </>
  );
}
