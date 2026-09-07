import { createFileRoute } from "@tanstack/react-router";
import { slawy } from "@/data/klub";
import { PageHero, Section, ZapiszSie } from "@/components/site/ui";

export const Route = createFileRoute("/galeria-slaw")({
  head: () => ({
    meta: [
      { title: "Galeria sław — medaliści Alianckiego Boksu" },
      {
        name: "description",
        content:
          "Zawodnicy klubu Aligancki Boks i ich osiągnięcia: medale mistrzostw Polski i Mazowsza.",
      },
      { property: "og:title", content: "Galeria sław — Aligancki Boks" },
      { property: "og:description", content: "Medaliści i wyróżnieni zawodnicy klubu." },
    ],
  }),
  component: GaleriaSlaw,
});

function GaleriaSlaw() {
  return (
    <>
      <PageHero
        tytul="Galeria sław"
        opis="Zawodniczki i zawodnicy, którzy przywieźli do Jabłonny medale."
        zdjecie={slawy[0]?.zdjecie}
      />

      <Section>
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
                <h2 className="text-xl text-primary">{s.imie}</h2>
                <p className="mt-1 text-sm font-semibold text-accent">{s.osiagniecie}</p>
                <p className="text-sm text-muted-foreground">{s.rok}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-sm text-muted-foreground">
          Tekst przykładowy. Lista będzie uzupełniana po każdym sezonie startowym.
        </p>
        <div className="mt-8">
          <ZapiszSie size="lg" />
        </div>
      </Section>
    </>
  );
}
