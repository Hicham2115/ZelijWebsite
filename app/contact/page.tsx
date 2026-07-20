import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";
import { CREAM } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez l'atelier MAREA pour vos projets de marbre et de zellige marocain taillé à la main.",
};

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: CREAM }} className="flex flex-1 flex-col">
      <Contact />
    </div>
  );
}
