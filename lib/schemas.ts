import { z } from "zod";

export const emailSchema = z.email("Merci d'entrer une adresse e-mail valide.");

export const contactSchema = z.object({
  name: z.string().min(2, "Merci d'entrer votre nom."),
  email: emailSchema,
  subject: z.string().min(2, "Merci d'entrer un sujet."),
  message: z
    .string()
    .min(10, "Votre message doit contenir au moins 10 caractères."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
