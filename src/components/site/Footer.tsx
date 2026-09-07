import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { kontakt } from "@/data/klub";
import { ZapiszSie } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-border bg-sand-deep px-5 py-14 sm:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-primary">Aligancki Boks</p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Stowarzyszenie sportowe z Jabłonny. Każdy może zacząć boksować.
          </p>
          <ZapiszSie className="mt-5" size="sm" />
        </div>

        <div className="space-y-3 text-sm">
          <p className="flex items-start gap-2">
            <MapPin size={16} className="mt-0.5 text-accent" />
            {kontakt.adres}
          </p>
          <p className="flex items-center gap-2">
            <Phone size={16} className="text-accent" />
            <a href={`tel:${kontakt.telefon.replace(/\s/g, "")}`}>{kontakt.telefon}</a>
          </p>
          <p className="flex items-center gap-2">
            <Mail size={16} className="text-accent" />
            <a href={`mailto:${kontakt.email}`}>{kontakt.email}</a>
          </p>
          <div className="flex gap-3 pt-2">
            <a href={kontakt.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={20} className="text-primary transition-colors hover:text-accent" />
            </a>
            <a href={kontakt.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook size={20} className="text-primary transition-colors hover:text-accent" />
            </a>
          </div>
        </div>

        <nav className="grid grid-cols-2 gap-2 text-sm uppercase">
          <Link to="/o-nas" className="hover:text-accent">O nas</Link>
          <Link to="/trenerzy" className="hover:text-accent">Trenerzy</Link>
          <Link to="/harmonogram" className="hover:text-accent">Harmonogram</Link>
          <Link to="/aktualnosci" className="hover:text-accent">Aktualności</Link>
          <Link to="/galeria" className="hover:text-accent">Galeria</Link>
          <Link to="/galeria-slaw" className="hover:text-accent">Galeria sław</Link>
          <Link to="/skladki" className="hover:text-accent">Składki</Link>
          <Link to="/kontakt" className="hover:text-accent">Kontakt</Link>
        </nav>
      </div>

      <p className="mx-auto mt-10 w-full max-w-6xl text-xs text-muted-foreground">
        © {new Date().getFullYear()} Aligancki Boks — stowarzyszenie sportowe. Prototyp wizualny.
      </p>
    </footer>
  );
}
