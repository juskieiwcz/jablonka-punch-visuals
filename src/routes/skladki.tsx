import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/data/klub";
import { PageHero, Section, SectionTitle, ZapiszSie } from "@/components/site/ui";

export const Route = createFileRoute("/skladki")({
  head: () => ({
    meta: [
      { title: "Składki i wsparcie klubu — Aligancki Boks" },
      {
        name: "description",
        content:
          "Składki członkowskie na cele statutowe stowarzyszenia Aligancki Boks: 220 zł oraz 250 zł miesięcznie.",
      },
      { property: "og:title", content: "Składki i wsparcie klubu — Aligancki Boks" },
      {
        property: "og:description",
        content: "Na co idą składki i jak wesprzeć działalność stowarzyszenia.",
      },
    ],
  }),
  component: Skladki,
});

const stawki = [
  {
    kwota: "220 zł",
    okres: "miesięcznie",
    tytul: "Składka podstawowa",
    opis: "Dotyczy większości grup treningowych — dzieci, młodzieży, kobiet, mężczyzn 35+ i grupy zawodniczej.",
  },
  {
    kwota: "250 zł",
    okres: "miesięcznie",
    tytul: "Składka rodzinna",
    opis: "Grupa rodzinna / rekreacyjna: obejmuje rodzica i dziecko trenujących razem.",
  },
];

function Skladki() {
  return (
    <>
      <PageHero
        tytul="Składki i wsparcie klubu"
        opis="Jesteśmy stowarzyszeniem. Składki członkowskie finansują cele statutowe klubu."
        zdjecie={images.zespol}
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {stawki.map((s) => (
            <div key={s.tytul} className="rounded-sm bg-card p-8">
              <p className="font-display text-4xl text-accent">{s.kwota}</p>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">{s.okres}</p>
              <h2 className="mt-5 text-xl text-primary">{s.tytul}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.opis}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <SectionTitle nadtytul="Informacja">Na co idą składki</SectionTitle>
        <div className="grid gap-8 md:grid-cols-2">
          <p className="text-base leading-relaxed text-muted-foreground">
            Tekst przykładowy. Składki członkowskie pokrywają wynajem sali, sprzęt treningowy,
            licencje zawodnicze, wyjazdy na turnieje oraz pracę trenerów. Stowarzyszenie nie
            prowadzi działalności zarobkowej — całość środków wraca na salę.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Tekst przykładowy. W trudnej sytuacji rodzinnej można wystąpić o obniżenie lub
            zawieszenie składki — decyduje zarząd klubu. Chętnych do wsparcia klubu darowizną
            prosimy o kontakt.
          </p>
        </div>
        <div className="mt-10">
          <ZapiszSie size="lg" />
        </div>
      </Section>
    </>
  );
}
