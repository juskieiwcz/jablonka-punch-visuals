import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { images, kontakt } from "@/data/klub";
import { PageHero, Section, ZapiszSie } from "@/components/site/ui";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Aligancki Boks, Zegrzyńska 13, Jabłonna" },
      {
        name: "description",
        content:
          "Adres, telefon, e-mail i mapa dojazdu do klubu bokserskiego Aligancki Boks w Jabłonnie.",
      },
      { property: "og:title", content: "Kontakt — Aligancki Boks" },
      { property: "og:description", content: "ul. Zegrzyńska 13, Jabłonna. Zapraszamy na salę." },
    ],
  }),
  component: Kontakt,
});

function Kontakt() {
  return (
    <>
      <PageHero
        tytul="Kontakt"
        opis="Najprościej wpaść na salę w godzinach treningów albo napisać do nas na Instagramie."
        zdjecie={images.gal2}
      />

      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl text-primary">Aligancki Boks</h2>
            <p className="mt-1 text-sm text-muted-foreground">Stowarzyszenie sportowe</p>

            <ul className="mt-7 space-y-4 text-base">
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

            <div className="mt-7 flex gap-4">
              <a
                href={kontakt.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-11 w-11 place-items-center rounded-sm border border-primary/40 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram size={18} />
              </a>
              <a
                href={kontakt.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid h-11 w-11 place-items-center rounded-sm border border-primary/40 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook size={18} />
              </a>
            </div>

            <div className="mt-9">
              <ZapiszSie size="lg" />
            </div>
          </div>

          <iframe
            title="Mapa dojazdu — Zegrzyńska 13, Jabłonna"
            src={kontakt.mapa}
            loading="lazy"
            className="h-96 w-full rounded-sm border border-border md:h-full"
          />
        </div>
      </Section>
    </>
  );
}
