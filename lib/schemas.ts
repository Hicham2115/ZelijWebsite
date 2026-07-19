import { z } from "zod";

export const emailSchema = z.email("Merci d'entrer une adresse e-mail valide.");
