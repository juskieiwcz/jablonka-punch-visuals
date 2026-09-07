import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { galeria, images } from "@/data/klub";
import { PageHero, Section } from "@/components/site/ui";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria — Aligancki Boks" },
      {
        name: "description",
        content: "Zdjęcia z treningów, obozów i walk klubu bokserskiego Aligancki Boks.",
      },
      { property: "og:title", content: "Galeria — Aligancki Boks" },
      { property: "og:description", content: "Treningi, obozy i turnieje w obiektywie." },
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
        opis="Treningi, obozy i turnieje. Zdjęcia przykładowe — docelowo materiały klubu."
        zdjecie={images.gal2}
      />

      <Section>
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
