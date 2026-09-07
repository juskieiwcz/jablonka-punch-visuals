import { createFileRoute } from "@tanstack/react-router";
import { dni, harmonogram, images } from "@/data/klub";
import { PageHero, Section, ZapiszSie } from "@/components/site/ui";

export const Route = createFileRoute("/harmonogram")({
  head: () => ({
    meta: [
      { title: "Harmonogram zajęć — Aligancki Boks" },
      {
        name: "description",
        content: "Tygodniowy grafik treningów klubu Aligancki Boks: godziny, grupy i trenerzy.",
      },
      { property: "og:title", content: "Harmonogram zajęć — Aligancki Boks" },
      { property: "og:description", content: "Treningi od poniedziałku do soboty w Jabłonnie." },
    ],
  }),
  component: Harmonogram,
});

function Harmonogram() {
  return (
    <>
      <PageHero
        tytul="Harmonogram zajęć"
        opis="Trenujemy od poniedziałku do soboty. Grafik obowiązuje w sezonie 2026/2027."
        zdjecie={images.gal3}
      />

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dni.map((dzien) => (
            <div key={dzien} className="rounded-sm bg-card p-6">
              <h2 className="text-xl text-primary">{dzien}</h2>
              <ul className="mt-4 space-y-4">
                {harmonogram[dzien].map((z) => (
                  <li key={z.godzina} className="border-t border-border pt-4">
                    <p className="font-display text-sm text-accent">{z.godzina}</p>
                    <p className="text-base">{z.grupa}</p>
                    <p className="text-sm text-muted-foreground">trener: {z.trener}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-sm text-muted-foreground">
          Tekst przykładowy. Godziny mogą się zmieniać w okresie turniejów i ferii — aktualne
          informacje podajemy na Instagramie klubu.
        </p>
        <div className="mt-8">
          <ZapiszSie size="lg" />
        </div>
      </Section>
    </>
  );
}
