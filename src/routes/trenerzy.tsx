import { createFileRoute } from "@tanstack/react-router";
import { trenerzy } from "@/data/klub";
import { PageHero, Section, ZapiszSie } from "@/components/site/ui";

export const Route = createFileRoute("/trenerzy")({
  head: () => ({
    meta: [
      { title: "Trenerzy — Aligancki Boks" },
      {
        name: "description",
        content: "Poznaj trenerów klubu Aligancki Boks w Jabłonnie: pięcioro trenerów, sześć grup.",
      },
      { property: "og:title", content: "Trenerzy — Aligancki Boks" },
      { property: "og:description", content: "Ludzie, którzy prowadzą treningi w naszym klubie." },
    ],
  }),
  component: Trenerzy,
});

function Trenerzy() {
  return (
    <>
      <PageHero
        tytul="Trenerzy"
        opis="Pięcioro trenerów, którzy prowadzą wszystkie grupy — od pierwszej rozgrzewki po narożnik na turnieju."
        zdjecie={trenerzy[0]?.zdjecie}
      />

      <Section>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trenerzy.map((t) => (
            <article key={t.imie} className="rounded-sm bg-card">
              <img
                src={t.zdjecie}
                alt={t.imie}
                width={800}
                height={1000}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-t-sm object-cover"
              />
              <div className="p-5">
                <p className="text-xs uppercase tracking-widest text-accent">{t.rola}</p>
                <h2 className="mt-1 text-xl text-primary">{t.imie}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{t.opis}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12">
          <ZapiszSie size="lg" />
        </div>
      </Section>
    </>
  );
}
