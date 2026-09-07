import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ZAPISY_URL } from "@/data/klub";
import { cn } from "@/lib/utils";

export function ZapiszSie({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <a
      href={ZAPISY_URL}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex items-center justify-center rounded-sm bg-accent font-display uppercase tracking-wide text-accent-foreground transition-transform hover:-translate-y-0.5",
        size === "sm" && "px-4 py-2 text-xs",
        size === "md" && "px-6 py-3 text-sm",
        size === "lg" && "px-8 py-4 text-base",
        className,
      )}
    >
      Zapisz się
    </a>
  );
}

export function Section({
  children,
  className,
  tone = "base",
}: {
  children: ReactNode;
  className?: string;
  tone?: "base" | "sand" | "deep";
}) {
  return (
    <section
      className={cn(
        "px-5 py-16 sm:px-8 md:py-24",
        tone === "sand" && "bg-sand",
        tone === "deep" && "bg-sand-deep",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionTitle({
  nadtytul,
  children,
  akcja,
}: {
  nadtytul?: string;
  children: ReactNode;
  akcja?: ReactNode;
}) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
      <div>
        {nadtytul ? (
          <p className="mb-2 text-xs uppercase tracking-[0.25em] text-accent">
            {nadtytul}
          </p>
        ) : null}
        <h2 className="text-3xl leading-none text-primary md:text-4xl">{children}</h2>
      </div>
      {akcja}
    </div>
  );
}

export function PageHero({
  tytul,
  opis,
  zdjecie,
}: {
  tytul: string;
  opis: string;
  zdjecie?: string;
}) {
  return (
    <header className="relative overflow-hidden border-b border-border bg-sand-deep">
      {zdjecie ? (
        <img
          src={zdjecie}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
      ) : null}
      <div className="relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <h1 className="max-w-3xl text-4xl leading-[0.95] text-primary md:text-6xl">
          {tytul}
        </h1>
        <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">{opis}</p>
      </div>
    </header>
  );
}

export function CzytajWiecej({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 border-b-2 border-accent pb-1 font-display text-sm uppercase tracking-wide text-primary transition-colors hover:text-accent"
    >
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}
