import { createFileRoute } from "@tanstack/react-router";
import { grupy, images } from "@/data/klub";
import { PageHero, Section, SectionTitle, ZapiszSie } from "@/components/site/ui";

export const Route = createFileRoute("/o-nas")({
  head: () => ({
    meta: [
      { title: "O klubie — Aligancki Boks, Jabłonna" },
      {
        name: "description",
        content:
          "Historia stowarzyszenia Aligancki Boks, wartości klubu i opis grup treningowych w Jabłonnie.",
      },
      { property: "og:title", content: "O klubie — Aligancki Boks" },
      {
        property: "og:description",
        content: "Trzy lata pracy na sali, grupy dla każdego wieku i poziomu.",
      },
    ],
  }),
  component: ONas,
});

const wartosci = [
  {
    tytul: "Otwartość",
    opis: "Tekst przykładowy. Nie robimy selekcji na wejściu — pierwszy trening jest dla każdego.",
  },
  {
    tytul: "Szacunek",
    opis: "Tekst przykładowy. Na sali liczy się kultura, pomoc młodszym i uczciwa praca w parach.",
  },
  {
    tytul: "Sport",
    opis: "Tekst przykładowy. Kto chce startować, dostaje pełne przygotowanie do turniejów.",
  },
];

function ONas() {
  return (
    <>
      <PageHero
        tytul="Klub, w którym każdy znajdzie swoje miejsce"
        opis="Aligancki Boks to stowarzyszenie sportowe z Jabłonny koło Warszawy. Działamy od trzech lat."
        zdjecie={images.zespol}
      />

      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionTitle nadtytul="Historia">Od jednej grupy do sześciu</SectionTitle>
            <p className="text-base leading-relaxed text-muted-foreground">
              Tekst przykładowy. Klub powstał trzy lata temu z inicjatywy grupy trenerów i
              rodziców, którzy chcieli, żeby w Jabłonnie było miejsce do trenowania boksu bez
              wielkomiejskiej atmosfery wyścigu.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Tekst przykładowy. Dziś prowadzimy sześć grup treningowych, jeździmy na obozy i
              turnieje, a nasi zawodnicy wracają z medali mistrzostw Mazowsza i Polski.
            </p>
          </div>
          <img
            src={images.gal1}
            alt="Obóz treningowy klubu"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-sm object-cover"
          />
        </div>
      </Section>

      <Section tone="sand">
        <SectionTitle nadtytul="Wartości">Na czym nam zależy</SectionTitle>
        <div className="grid gap-6 md:grid-cols-3">
          {wartosci.map((w) => (
            <div key={w.tytul} className="rounded-sm bg-card p-6">
              <h3 className="text-xl text-primary">{w.tytul}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.opis}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle nadtytul="Oferta">Nasze grupy</SectionTitle>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {grupy.map((g) => (
            <article key={g.nazwa}>
              <img
                src={g.zdjecie}
                alt={g.nazwa}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-sm object-cover"
              />
              <h3 className="mt-4 text-lg text-primary">{g.nazwa}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{g.opis}</p>
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
