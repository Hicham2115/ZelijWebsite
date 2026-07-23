import type { Metadata } from "next";
import { CollectionsGallery } from "@/components/sections/CollectionsGallery";
import { CREAM } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Explorez toutes les collections Arte Piedra : marbre et zellige marocain façonnés à la main.",
};

export default function CollectionsPage() {
  return (
    <div style={{ backgroundColor: CREAM }} className="flex flex-1 flex-col">
      <CollectionsGallery />
    </div>
  );
}
