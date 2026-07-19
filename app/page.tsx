import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { CREAM } from "@/lib/theme";

export default function Home() {
  return (
    <div style={{ backgroundColor: CREAM }} className="flex flex-1 flex-col">
      <Hero />
      <Philosophy />
    </div>
  );
}
