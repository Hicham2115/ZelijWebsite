import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { CREAM } from "@/lib/theme";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Découvrez l'atelier Arte Piedra : marbre et zellige marocain façonnés à la main pour des espaces intemporels.",
};

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: CREAM }} className="flex flex-1 flex-col">
      <About />
    </div>
  );
}
