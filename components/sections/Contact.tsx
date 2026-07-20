"use client";

import Image from "next/image";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import contactImage from "@/app/assets/contact.png";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CREAM, FOREST, TERRACOTTA } from "@/lib/theme";
import { contactSchema } from "@/lib/schemas";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: EASE },
  }),
};

const CONTACT_DETAILS = [
  { icon: MapPin, value: "Marrakech, Morocco" },
  { icon: Mail, value: "hello@artepiedra-studio.com" },
  { icon: Phone, value: "+212 6 12 34 56 78" },
];

const STUDIO_HOURS = [
  { day: "Monday – Friday", hours: "9:00 AM – 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM – 2:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

const fieldLabel =
  "text-xs font-medium tracking-[0.15em] text-neutral-900/60 uppercase";
const fieldInput =
  "h-auto w-full rounded-lg border border-neutral-900/12 bg-white px-4 py-3.5 text-sm text-neutral-900 shadow-sm transition-all duration-200 placeholder:text-neutral-400 hover:border-neutral-900/25 focus-visible:border-neutral-900/40 focus-visible:shadow-md focus-visible:ring-0";

export function Contact() {
  const form = useForm({
    defaultValues: { name: "", email: "", subject: "", message: "" },
    onSubmit: async ({ value }) => {
      const parsed = contactSchema.safeParse(value);
      if (!parsed.success) {
        toast.error(
          parsed.error.issues[0]?.message ?? "Une erreur est survenue.",
        );
        return;
      }
      toast.success("Merci ! Votre message a bien été envoyé.");
      form.reset();
    },
  });

  return (
    <section
      style={{ backgroundColor: CREAM }}
      className="relative overflow-hidden mb-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-220 mt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="relative z-10 flex flex-col justify-center gap-8 px-6 py-20 sm:px-10 lg:px-14 lg:py-0"
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <p
                style={{ color: TERRACOTTA }}
                className="text-xs font-medium tracking-[0.3em] uppercase"
              >
                Contact Us
              </p>
              <span
                style={{ backgroundColor: TERRACOTTA }}
                className="h-px w-8"
              />
            </div>

            <h1 className="font-serif text-5xl leading-[1.1] text-neutral-900 sm:text-6xl">
              We&apos;d love to
              <br />
              hear from you.
            </h1>

            <p className="max-w-md text-base leading-relaxed text-neutral-500">
              Have a question, a project in mind, or simply want to say hello?
              Get in touch with us. We&apos;re here to help.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {CONTACT_DETAILS.map(({ icon: Icon, value }) => (
              <div
                key={value}
                className="flex items-center gap-3 text-sm text-neutral-700"
              >
                <Icon
                  className="h-4 w-4 shrink-0"
                  strokeWidth={1.5}
                  style={{ color: TERRACOTTA }}
                  aria-hidden="true"
                />
                <span>{value}</span>
              </div>
            ))}
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              form.handleSubmit();
            }}
            className="flex max-w-xl flex-col gap-5"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <form.Field name="name">
                {(field) => (
                  <label className="flex flex-col gap-2">
                    <span className={fieldLabel}>Name</span>
                    <Input
                      value={field.state.value}
                      onChange={(event) =>
                        field.handleChange(event.target.value)
                      }
                      placeholder="Your name"
                      className={fieldInput}
                    />
                  </label>
                )}
              </form.Field>

              <form.Field name="email">
                {(field) => (
                  <label className="flex flex-col gap-2">
                    <span className={fieldLabel}>Email</span>
                    <Input
                      type="email"
                      value={field.state.value}
                      onChange={(event) =>
                        field.handleChange(event.target.value)
                      }
                      placeholder="Your email"
                      className={fieldInput}
                    />
                  </label>
                )}
              </form.Field>
            </div>

            <form.Field name="subject">
              {(field) => (
                <label className="flex flex-col gap-2">
                  <span className={fieldLabel}>Subject</span>
                  <Input
                    value={field.state.value}
                    onChange={(event) => field.handleChange(event.target.value)}
                    placeholder="How can we help?"
                    className={fieldInput}
                  />
                </label>
              )}
            </form.Field>

            <form.Field name="message">
              {(field) => (
                <label className="flex flex-col gap-2">
                  <span className={fieldLabel}>Message</span>
                  <Textarea
                    value={field.state.value}
                    onChange={(event) => field.handleChange(event.target.value)}
                    placeholder="Your message"
                    className={`min-h-32 resize-none ${fieldInput}`}
                  />
                </label>
              )}
            </form.Field>

            <button
              type="submit"
              style={{ backgroundColor: FOREST }}
              className="mt-1 inline-flex w-fit items-center gap-3 rounded-lg px-8 py-4 text-xs font-medium tracking-[0.15em] text-white uppercase shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Send Message
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.15}
          variants={fadeUp}
          className="relative min-h-105 lg:min-h-0"
        >
          <Image
            src={contactImage}
            alt="Vasque en marbre veiné devant une niche de zellige vert et crème, avec un vase en marbre et un flacon en verre ambré"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 hidden lg:block"
            style={{
              background: `linear-gradient(to right, ${CREAM} 0%, ${CREAM}CC 8%, transparent 26%)`,
            }}
          />

          <div className="absolute right-6 bottom-6 max-w-64 rounded-2xl border border-neutral-900/10 bg-white/90 p-6 shadow-xl backdrop-blur-md sm:right-10 sm:bottom-10">
            <p
              style={{ color: TERRACOTTA }}
              className="text-xs font-medium tracking-[0.2em] uppercase"
            >
              Studio Hours
            </p>
            <span
              style={{ backgroundColor: TERRACOTTA }}
              className="mt-3 block h-px w-6"
            />
            <div className="mt-4 flex flex-col gap-3">
              {STUDIO_HOURS.map(({ day, hours }) => (
                <div key={day}>
                  <p className="text-sm text-neutral-900">{day}</p>
                  <p className="text-sm text-neutral-500">{hours}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
