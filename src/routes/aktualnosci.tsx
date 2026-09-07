import { createFileRoute } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { aktualnosci, images, kontakt } from "@/data/klub";
import { PageHero, Section, SectionTitle } from "@/components/site/ui";

export const Route = createFileRoute("/aktualnosci")({
  head: () => ({
    meta: [
      { title: "Aktualności — Aligancki Boks" },
      {
        name: "description",
        content: "Wyniki turniejów, nabory i relacje z obozów klubu Aligancki Boks w Jabłonnie.",
      },
      { property: "og:title", content: "Aktualności — Aligancki Boks" },
      { property: "og:description", content: "Co słychać w klubie: turnieje, obozy, nabory." },
    ],
  }),
  component: Aktualnosci,
});

function Aktualnosci() {
  return (
    <>
      <PageHero
        tytul="Aktualności"
        opis="Relacje z turniejów, obozów i codziennego życia klubu."
        zdjecie={images.gal1}
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          {aktualnosci.map((a) => (
            <article key={a.tytul} className="rounded-sm bg-card">
              <img
                src={a.zdjecie}
                alt={a.tytul}
                loading="lazy"
                className="aspect-[3/2] w-full rounded-t-sm object-cover"
              />
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-accent">{a.data}</p>
                <h2 className="mt-2 text-2xl leading-tight text-primary">{a.tytul}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{a.zajawka}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <SectionTitle nadtytul="Opcjonalna integracja">Instagram klubu</SectionTitle>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Miejsce na siatkę ostatnich postów z profilu klubu — jako uzupełnienie lub alternatywa
          dla wpisów redagowanych ręcznie.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="grid aspect-square place-items-center rounded-sm bg-sand-deep text-primary/40"
            >
              <Instagram size={22} />
            </div>
          ))}
        </div>
        <a
          href={kontakt.instagram}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block border-b-2 border-accent pb-1 font-display text-sm uppercase text-primary"
        >
          Zobacz profil
        </a>
      </Section>
    </>
  );
}
