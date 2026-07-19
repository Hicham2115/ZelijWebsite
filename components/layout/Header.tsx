import { Menu, Search } from "lucide-react";

const NAV_LINKS = ["Collections", "Story", "Journal", "About", "Contact"];

type HeaderProps = {
  variant?: "dark" | "light";
};

export function Header({ variant = "dark" }: HeaderProps) {
  const isLight = variant === "light";

  return (
    <header
      className={`relative z-20 border-b ${isLight ? "border-white/20" : "border-neutral-900/10"}`}
    >
      <div className="flex items-center justify-between px-6 py-6 sm:px-10 lg:px-14">
        <span
          className={`text-lg font-semibold tracking-[0.25em] ${isLight ? "text-white" : "text-neutral-900"}`}
        >
          MAREA
        </span>

        <nav
          className={`hidden items-center gap-9 text-xs font-medium tracking-[0.15em] lg:flex ${isLight ? "text-white/90" : "text-neutral-800"}`}
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
          className={`flex items-center gap-6 text-xs font-medium tracking-[0.15em] ${isLight ? "text-white/90" : "text-neutral-800"}`}
        >
          <button
            type="button"
            className={`hidden items-center gap-2 uppercase transition-colors sm:flex ${isLight ? "hover:text-white/60" : "hover:text-neutral-500"}`}
          >
            Search
            <Search className="h-4 w-4" aria-hidden="true" />
          </button>
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
