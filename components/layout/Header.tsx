"use client";

import { useEffect, useState } from "react";
import { Menu, Search } from "lucide-react";
import { CREAM } from "@/lib/theme";

const NAV_LINKS = ["Collections", "Story", "Journal", "About", "Contact"];
const SCROLL_THRESHOLD = 32;

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLight = !scrolled;

  return (
    <header
      style={scrolled ? { backgroundColor: `${CREAM}E6` } : undefined}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-neutral-900/10 backdrop-blur-md" : "border-white/20"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-6 sm:px-10 lg:px-14">
        <span
          className={`text-lg font-semibold tracking-[0.25em] transition-colors duration-300 ${isLight ? "text-white" : "text-neutral-900"}`}
        >
          MAREA
        </span>

        <nav
          className={`hidden items-center gap-9 text-xs font-medium tracking-[0.15em] transition-colors duration-300 lg:flex ${isLight ? "text-white/90" : "text-neutral-800"}`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className={`uppercase transition-colors ${isLight ? "hover:text-white/60" : "hover:text-neutral-500"}`}
            >
              {link}
            </a>
          ))}
        </nav>

        <div
          className={`flex items-center gap-6 text-xs font-medium tracking-[0.15em] transition-colors duration-300 ${isLight ? "text-white/90" : "text-neutral-800"}`}
        >
          <button
            type="button"
            className={`flex items-center gap-2 uppercase transition-colors ${isLight ? "hover:text-white/60" : "hover:text-neutral-500"}`}
          >
            <span className="hidden sm:inline">Menu</span>
            <Menu className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
