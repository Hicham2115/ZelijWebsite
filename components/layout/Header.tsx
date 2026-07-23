"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { CREAM } from "@/lib/theme";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Philosophie", href: "/#philosophy" },
  { label: "Collections", href: "/collections" },
  { label: "Matière & Savoir-faire", href: "/#material-craft" },
  { label: "Contact", href: "/contact" },
];
const MOBILE_LINKS = [...NAV_LINKS, { label: "À Propos", href: "/about" }];
const SCROLL_THRESHOLD = 32;

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolledPastThreshold, setScrolledPastThreshold] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const onScroll = () =>
      setScrolledPastThreshold(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const scrolled = !isHome || scrolledPastThreshold;
  const isLight = !scrolled && !menuOpen;

  return (
    <header
      style={scrolled ? { backgroundColor: `${CREAM}E6` } : undefined}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-neutral-900/10 backdrop-blur-md" : "border-white/20"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-6 sm:px-10 lg:px-14">
        <Link href="/">
          <span
            className={`text-lg font-semibold tracking-[0.25em] transition-colors duration-300 ${isLight ? "text-white" : "text-neutral-900"}`}
          >
            ARTE PIEDRA
          </span>
        </Link>

        <nav
          className={`hidden items-center gap-9 text-xs font-medium tracking-[0.15em] transition-colors duration-300 lg:flex ${isLight ? "text-white/90" : "text-neutral-800"}`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`uppercase transition-colors ${isLight ? "hover:text-white/60" : "hover:text-neutral-500"}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* <a
            href="/about"
            className={`hidden border px-4 py-2 text-xs font-medium tracking-[0.15em] uppercase transition-colors lg:inline-flex ${
              isLight
                ? "border-white/40 text-white hover:bg-white/10"
                : "border-neutral-900/20 text-neutral-900 hover:bg-neutral-900/5"
            }`}
          >
            À Propos
          </a> */}
          <a
            href="/contact"
            className={`hidden border px-4 py-2 text-xs font-medium tracking-[0.15em] uppercase transition-colors lg:inline-flex ${
              isLight
                ? "border-white/40 text-white hover:bg-white/10"
                : "border-neutral-900/20 text-neutral-900 hover:bg-neutral-900/5"
            }`}
          >
            Nous Contacter
          </a>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className={`flex items-center gap-2 text-xs font-medium tracking-[0.15em] uppercase transition-colors lg:hidden ${
              isLight
                ? "text-white/90 hover:text-white/60"
                : "text-neutral-800 hover:text-neutral-500"
            }`}
          >
            <span className="hidden sm:inline">
              {menuOpen ? "Fermer" : "Menu"}
            </span>
            {menuOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ backgroundColor: CREAM }}
            className="overflow-hidden border-t border-neutral-900/10 lg:hidden"
          >
            <nav className="flex flex-col px-6 py-4 sm:px-10">
              {MOBILE_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-neutral-900/10 py-4 text-xs font-medium tracking-[0.15em] text-neutral-900 uppercase transition-colors last:border-b-0 hover:text-neutral-500"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 inline-flex w-fit items-center border border-neutral-900/20 px-4 py-2 text-xs font-medium tracking-[0.15em] text-neutral-900 uppercase transition-colors hover:bg-neutral-900/5"
              >
                Nous Contacter
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
