import hero from "@/assets/hero-sparring.jpg";
import zespol from "@/assets/klub-zespol.jpg";
import gDzieci from "@/assets/group-dzieci.jpg";
import gMlodziez from "@/assets/group-mlodziez.jpg";
import gKobiety from "@/assets/group-kobiety.jpg";
import gMezczyzni from "@/assets/group-mezczyzni.jpg";
import gZawodnicza from "@/assets/group-zawodnicza.jpg";
import gRodzinna from "@/assets/group-rodzinna.jpg";
import t1 from "@/assets/trener-1.jpg";
import t2 from "@/assets/trener-2.jpg";
import t3 from "@/assets/trener-3.jpg";
import t5 from "@/assets/trener-5.jpg";
import s1 from "@/assets/slawa-1.jpg";
import s2 from "@/assets/slawa-2.jpg";
import s3 from "@/assets/slawa-3.jpg";
import gal1 from "@/assets/galeria-oboz.jpg";
import gal2 from "@/assets/galeria-bandaze.jpg";
import gal3 from "@/assets/galeria-narozniku.jpg";

export const images = {
  hero,
  zespol,
  gal1,
  gal2,
  gal3,
};

export const ZAPISY_URL = "https://example.com/zapisy";

export const kontakt = {
  adres: "ul. Zegrzyńska 13, 05-110 Jabłonna",
  telefon: "+48 000 000 000",
  email: "kontakt@aliganckiboks.pl",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  mapa:
    "https://www.google.com/maps?q=Zegrzy%C5%84ska%2013%2C%20Jab%C5%82onna&output=embed",
};

export const grupy = [
  {
    nazwa: "Dzieci 6–9 lat",
    opis: "Zabawa, koordynacja i pierwsze kroki w bokserskiej technice.",
    zdjecie: gDzieci,
  },
  {
    nazwa: "Młodzież 10–14 lat",
    opis: "Technika, kondycja i praca w parach pod okiem trenera.",
    zdjecie: gMlodziez,
  },
  {
    nazwa: "Kobiety",
    opis: "Trening dla każdej — od zera do pewności siebie na ringu.",
    zdjecie: gKobiety,
  },
  {
    nazwa: "Mężczyźni 35+",
    opis: "Spokojne tempo, dużo techniki, zero presji.",
    zdjecie: gMezczyzni,
  },
  {
    nazwa: "Grupa zawodnicza",
    opis: "Przygotowanie do walk i turniejów w kraju.",
    zdjecie: gZawodnicza,
  },
  {
    nazwa: "Grupa rodzinna / rekreacyjna",
    opis: "Rodzic i dziecko trenują razem, w jednej sali.",
    zdjecie: gRodzinna,
  },
];

export const trenerzy = [
  {
    imie: "S. Brząkała",
    rola: "Trener główny",
    zdjecie: t1,
    opis:
      "Tekst przykładowy. Prowadzi grupę zawodniczą i odpowiada za przygotowanie do turniejów.",
  },
  {
    imie: "J. Gawczyński",
    rola: "Trener",
    zdjecie: t2,
    opis:
      "Tekst przykładowy. Pracuje z młodzieżą i grupami rekreacyjnymi, kładzie nacisk na technikę.",
  },
  {
    imie: "M. Myszorek",
    rola: "Trener",
    zdjecie: t3,
    opis:
      "Tekst przykładowy. Wieloletnie doświadczenie w boksie amatorskim i pracy z dorosłymi.",
  },
  {
    imie: "A. Kado",
    rola: "Trenerka",
    zdjecie: t5,
    opis:
      "Tekst przykładowy. Odpowiada za grupę kobiet i zajęcia ogólnorozwojowe.",
  },
];

export const dni = [
  "Poniedziałek",
  "Wtorek",
  "Środa",
  "Czwartek",
  "Piątek",
  "Sobota",
] as const;

export type Zajecia = {
  godzina: string;
  grupa: string;
  trener: string;
};

export const harmonogram: Record<string, Zajecia[]> = {
  Poniedziałek: [
    { godzina: "16:30–17:30", grupa: "Dzieci 6–9 lat", trener: "A. Witkowski" },
    { godzina: "17:45–19:00", grupa: "Młodzież 10–14 lat", trener: "J. Gawczyński" },
    { godzina: "19:15–20:45", grupa: "Grupa zawodnicza", trener: "S. Brząkała" },
  ],
  Wtorek: [
    { godzina: "18:00–19:15", grupa: "Kobiety", trener: "A. Kado" },
    { godzina: "19:30–21:00", grupa: "Mężczyźni 35+", trener: "M. Myszorek" },
  ],
  Środa: [
    { godzina: "16:30–17:30", grupa: "Dzieci 6–9 lat", trener: "A. Witkowski" },
    { godzina: "17:45–19:00", grupa: "Młodzież 10–14 lat", trener: "J. Gawczyński" },
    { godzina: "19:15–20:45", grupa: "Grupa zawodnicza", trener: "S. Brząkała" },
  ],
  Czwartek: [
    { godzina: "18:00–19:15", grupa: "Kobiety", trener: "A. Kado" },
    { godzina: "19:30–21:00", grupa: "Mężczyźni 35+", trener: "M. Myszorek" },
  ],
  Piątek: [
    { godzina: "17:00–18:15", grupa: "Grupa rodzinna / rekreacyjna", trener: "A. Kado" },
    { godzina: "18:30–20:00", grupa: "Grupa zawodnicza", trener: "S. Brząkała" },
  ],
  Sobota: [
    { godzina: "10:00–11:15", grupa: "Dzieci 6–9 lat", trener: "A. Witkowski" },
    { godzina: "11:30–13:00", grupa: "Grupa rodzinna / rekreacyjna", trener: "J. Gawczyński" },
  ],
};

export const slawy = [
  {
    imie: "Zawodnik przykładowy",
    osiagniecie: "Brązowy medal Mistrzostw Polski Juniorów",
    rok: "2025",
    zdjecie: s1,
  },
  {
    imie: "Zawodniczka przykładowa",
    osiagniecie: "Mistrzostwo Mazowsza",
    rok: "2024",
    zdjecie: s2,
  },
  {
    imie: "Zawodnik przykładowy",
    osiagniecie: "Puchar Polski Kadetów — 1. miejsce",
    rok: "2024",
    zdjecie: s3,
  },
];

export const aktualnosci = [
  {
    tytul: "Medale na Mistrzostwach Mazowsza",
    data: "12 sierpnia 2026",
    zajawka:
      "Tekst przykładowy. Nasi zawodnicy wrócili z turnieju z kompletem medali — relacja i zdjęcia z zawodów.",
    zdjecie: s2,
  },
  {
    tytul: "Nabór do grupy dzieci 6–9 lat",
    data: "28 lipca 2026",
    zajawka:
      "Tekst przykładowy. Ruszają zapisy na jesienny sezon. Liczba miejsc ograniczona.",
    zdjecie: gDzieci,
  },
  {
    tytul: "Obóz letni — podsumowanie",
    data: "3 lipca 2026",
    zajawka:
      "Tekst przykładowy. Tydzień treningów, biegów i sparingów. Zobaczcie, jak było.",
    zdjecie: gal1,
  },
  {
    tytul: "Nowa grupa rodzinna w piątki",
    data: "18 czerwca 2026",
    zajawka:
      "Tekst przykładowy. Rodzic i dziecko na jednej sali — startujemy z nowym terminem.",
    zdjecie: gRodzinna,
  },
];

export const galeria = [
  { src: gal3, alt: "Trener w narożniku podczas turnieju" },
  { src: gDzieci, alt: "Grupa dzieci na treningu" },
  { src: gal1, alt: "Obóz treningowy" },
  { src: gKobiety, alt: "Trening grupy kobiet" },
  { src: gal2, alt: "Bandażowanie dłoni przed treningiem" },
  { src: gZawodnicza, alt: "Sparing grupy zawodniczej" },
  { src: zespol, alt: "Zdjęcie zespołu klubu" },
  { src: gMlodziez, alt: "Młodzież podczas pracy w parach" },
  { src: gRodzinna, alt: "Trening rodzinny" },
];
