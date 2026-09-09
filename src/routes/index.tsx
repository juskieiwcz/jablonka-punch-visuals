import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import {
  aktualnosci,
  dni,
  grupy,
  harmonogram,
  images,
  kontakt,
  slawy,
} from "@/data/klub";
import { Karuzela } from "@/components/site/Karuzela";
import { CzytajWiecej, Section, SectionTitle, ZapiszSie } from "@/components/site/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aligancki Boks — klub bokserski w Jabłonnie pod Warszawą" },
      {
        name: "description",
        content:
          "Każdy może zacząć boksować. Treningi dla dzieci, młodzieży, kobiet, dorosłych i zawodników w Jabłonnie.",
      },
      { property: "og:title", content: "Aligancki Boks — każdy może zacząć boksować" },
      {
        property: "og:description",
        content: "Klub bokserski z Jabłonny. Grupy dla dzieci, młodzieży, kobiet i dorosłych.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative isolate min-h-[80vh] overflow-hidden">
        <img
          src={images.hero}
          alt="Sparing dwóch zawodników na ringu"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#41412B]/85 via-[#41412B]/55 to-transparent" />
        <div className="mx-auto flex min-h-[80vh] w-full max-w-6xl flex-col justify-end px-5 py-20 sm:px-8">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#DABFAA]">
            Stowarzyszenie sportowe · Jabłonna
          </p>
          <h1 className="max-w-3xl text-4xl leading-[0.9] text-[#DABFAA] sm:text-6xl md:text-7xl">
            Każdy może zacząć boksować
          </h1>
          <p className="mt-5 max-w-xl text-base text-[#DABFAA]/90 md:text-lg">
            Dzieci, młodzież, kobiety, dorośli i zawodnicy. Przychodzisz taki, jaki jesteś —
            resztę zrobimy razem na sali.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ZapiszSie size="lg" />
          </div>
        </div>
      </section>

      <Section>
        <SectionTitle nadtytul="Grupy treningowe">Wybierz swoją grupę</SectionTitle>
        <Karuzela>
          {grupy.map((g) => (
            <article
              key={g.nazwa}
              className="w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[31%]"
            >
              <img
                src={g.zdjecie}
                alt={g.nazwa}
                width={1024}
                height={1280}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-sm object-cover"
              />
              <h3 className="mt-4 text-xl text-primary">{g.nazwa}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{g.opis}</p>
            </article>
          ))}
        </Karuzela>
      </Section>

      <Section tone="sand">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <img
            src={images.zespol}
            alt="Zespół klubu Aligancki Boks"
            width={1600}
            height={900}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-sm object-cover"
          />
          <div>
            <SectionTitle nadtytul="O klubie">Trzy lata na sali</SectionTitle>
            <p className="text-base leading-relaxed text-muted-foreground">
              Tekst przykładowy. Aligancki Boks działa od trzech lat jako stowarzyszenie
              sportowe w Jabłonnie. Zaczynaliśmy od jednej grupy, dziś trenuje u nas kilka
              pokoleń — od sześciolatków po zawodników walczących na turniejach w całej Polsce.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Wierzymy, że boks uczy spokoju, dyscypliny i szacunku. U nas nie ma selekcji na
              wejściu — jest miejsce dla każdego, kto chce spróbować.
            </p>
            <div className="mt-7">
              <CzytajWiecej to="/o-nas">Czytaj więcej</CzytajWiecej>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionTitle
          nadtytul="Harmonogram"
          akcja={<CzytajWiecej to="/harmonogram">Pełny grafik</CzytajWiecej>}
        >
          Najbliższe zajęcia
        </SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dni.slice(0, 3).map((dzien) => (
            <div key={dzien} className="rounded-sm bg-card p-5">
              <p className="font-display text-lg text-primary">{dzien}</p>
              <ul className="mt-3 space-y-3">
                {(harmonogram[dzien] ?? []).map((z) => (
                  <li key={z.godzina} className="border-t border-border pt-3 text-sm">
                    <span className="font-semibold text-accent">{z.godzina}</span>
                    <span className="block">{z.grupa}</span>
                    <span className="block text-muted-foreground">{z.trener}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <SectionTitle
          nadtytul="Kadra"
          akcja={<CzytajWiecej to="/trenerzy">Poznaj trenerów</CzytajWiecej>}
        >
          Trenerzy
        </SectionTitle>
        <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
          {trenerzy.map((t) => (
            <article key={t.imie}>
              <img
                src={t.zdjecie}
                alt={t.imie}
                width={800}
                height={1000}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-sm object-cover"
              />
              <h3 className="mt-4 text-lg text-primary">{t.imie}</h3>
              <p className="text-sm text-muted-foreground">{t.rola}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="deep">
        <SectionTitle
          nadtytul="Sukcesy"
          akcja={<CzytajWiecej to="/galeria">Wszyscy medaliści</CzytajWiecej>}
        >
          Galeria sław
        </SectionTitle>
        <Karuzela>
          {slawy.map((s) => (
            <article key={s.osiagniecie} className="w-[72%] shrink-0 snap-start sm:w-[45%] lg:w-[31%]">
              <img
                src={s.zdjecie}
                alt={s.imie}
                width={800}
                height={1000}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-sm object-cover"
              />
              <h3 className="mt-4 text-lg text-primary">{s.imie}</h3>
              <p className="text-sm text-accent">{s.osiagniecie}</p>
              <p className="text-sm text-muted-foreground">{s.rok}</p>
            </article>
          ))}
        </Karuzela>
      </Section>

      <Section>
        <SectionTitle
          nadtytul="Aktualności"
          akcja={<CzytajWiecej to="/aktualnosci">Wszystkie wpisy</CzytajWiecej>}
        >
          Co u nas słychać
        </SectionTitle>
        <div className="grid gap-6 md:grid-cols-3">
          {aktualnosci.slice(0, 3).map((a) => (
            <article key={a.tytul} className="rounded-sm bg-card">
              <img
                src={a.zdjecie}
                alt={a.tytul}
                loading="lazy"
                className="aspect-[3/2] w-full rounded-t-sm object-cover"
              />
              <div className="p-5">
                <p className="text-xs uppercase tracking-widest text-accent">{a.data}</p>
                <h3 className="mt-2 text-lg leading-tight text-primary">{a.tytul}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.zajawka}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-sm border border-dashed border-primary/40 p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="flex items-center gap-2 text-lg text-primary">
              <Instagram size={20} className="text-accent" /> Instagram klubu
            </h3>
            <a
              href={kontakt.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-sm uppercase tracking-wide text-accent"
            >
              @aliganckiboks
            </a>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Miejsce na siatkę ostatnich postów z Instagrama (opcjonalna integracja).
          </p>
          <div className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-sm bg-sand-deep" />
            ))}
          </div>
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionTitle nadtytul="Kontakt">Znajdź nas w Jabłonnie</SectionTitle>
            <ul className="space-y-3 text-base">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-accent" />
                {kontakt.adres}
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <a href={`tel:${kontakt.telefon.replace(/\s/g, "")}`}>{kontakt.telefon}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <a href={`mailto:${kontakt.email}`}>{kontakt.email}</a>
              </li>
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <ZapiszSie />
              <Link
                to="/kontakt"
                className="inline-flex items-center rounded-sm border border-primary px-6 py-3 font-display text-sm uppercase text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Dane kontaktowe
              </Link>
            </div>
          </div>
          <iframe
            title="Mapa dojazdu do klubu"
            src={kontakt.mapa}
            loading="lazy"
            className="h-80 w-full rounded-sm border border-border md:h-full"
          />
        </div>
      </Section>
    </>
  );
}
