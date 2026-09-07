import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ZapiszSie } from "./ui";

const nav = [
  { to: "/", label: "Start" },
  { to: "/o-nas", label: "O nas" },
  { to: "/trenerzy", label: "Trenerzy" },
  { to: "/harmonogram", label: "Harmonogram" },
  { to: "/aktualnosci", label: "Aktualności" },
  { to: "/galeria", label: "Galeria" },
  { to: "/galeria-slaw", label: "Galeria sław" },
  { to: "/skladki", label: "Składki" },
  { to: "/kontakt", label: "Kontakt" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span
            aria-hidden
            className="grid h-10 w-10 place-items-center rounded-sm bg-primary font-display text-sm text-primary-foreground"
          >
            AB
          </span>
          <span className="font-display text-lg leading-none text-primary sm:text-xl">
            Aligancki Boks
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-accent" }}
              className="text-sm font-medium uppercase tracking-wide text-primary transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ZapiszSie size="sm" className="hidden sm:inline-flex" />
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-sm border border-border text-primary xl:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-sand xl:hidden">
          <nav className="mx-auto grid w-full max-w-6xl gap-1 px-5 py-4 sm:px-8">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-accent" }}
                className="py-2 font-display text-base uppercase text-primary"
              >
                {item.label}
              </Link>
            ))}
            <ZapiszSie className="mt-3 w-full sm:hidden" />
          </nav>
        </div>
      ) : null}
    </header>
  );
}
