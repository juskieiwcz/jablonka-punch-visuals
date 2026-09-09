import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { galeria, images, slawy } from "@/data/klub";
import { PageHero, Section, SectionTitle, ZapiszSie } from "@/components/site/ui";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria i galeria sław — Aligancki Boks" },
      {
        name: "description",
        content:
          "Medaliści klubu Aligancki Boks oraz zdjęcia z treningów, obozów i walk w Jabłonnie.",
      },
      { property: "og:title", content: "Galeria — Aligancki Boks" },
      {
        property: "og:description",
        content: "Galeria sław i zdjęcia z treningów, obozów i turniejów.",
      },
    ],
  }),
  component: Galeria,
});

function Galeria() {
  const [podglad, setPodglad] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <PageHero
        tytul="Galeria"
        opis="Nasi medaliści i zdjęcia z sali. Materiały przykładowe — docelowo fotografie klubu."
        zdjecie={images.gal2}
      />

      <Section>
        <SectionTitle nadtytul="Sukcesy">Galeria sław</SectionTitle>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {slawy.map((s, i) => (
            <article key={i} className="rounded-sm bg-card">
              <img
                src={s.zdjecie}
                alt={s.imie}
                width={800}
                height={1000}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-t-sm object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl text-primary">{s.imie}</h3>
                <p className="mt-1 text-sm font-semibold text-accent">{s.osiagniecie}</p>
                <p className="text-sm text-muted-foreground">{s.rok}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
          Tekst przykładowy. Lista będzie uzupełniana po każdym sezonie startowym.
        </p>
      </Section>

      <Section tone="sand">
        <SectionTitle nadtytul="Zdjęcia">Treningi, obozy, turnieje</SectionTitle>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {galeria.map((foto, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPodglad(foto)}
              className="group overflow-hidden rounded-sm"
            >
              <img
                src={foto.src}
                alt={foto.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
        <div className="mt-10">
          <ZapiszSie size="lg" />
        </div>
      </Section>

      {podglad ? (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-[#41412B]/90 p-5"
          onClick={() => setPodglad(null)}
        >
          <button
            type="button"
            aria-label="Zamknij"
            className="absolute right-5 top-5 text-[#DABFAA]"
            onClick={() => setPodglad(null)}
          >
            <X size={28} />
          </button>
          <img
            src={podglad.src}
            alt={podglad.alt}
            className="max-h-[85vh] w-auto max-w-full rounded-sm object-contain"
          />
        </div>
      ) : null}
    </>
  );
}
