# Aligancki Boks — prototyp strony klubu

Klikalny, wielostronicowy prototyp wizualny (bez backendu, bez formularzy). Treści i zdjęcia jako placeholdery do późniejszej podmiany.

## Wygląd

- Tło całej strony: ciepły beż #DABFAA, dużo światła i przestrzeni.
- Oliwkowa zieleń #41412B: nagłówki sekcji, logo, stopka, drobne elementy.
- Czerwień #B11218: wyłącznie przycisk „Zapisz się" i pojedyncze akcenty.
- Nagłówki: mocna, kanciasta, sportowa czcionka bezszeryfowa (nawiązanie do liternictwa logo). Tekst: neutralna, czytelna bezszeryfowa. Obie z pełną obsługą polskich znaków.
- Zdjęcia generowane jako realistyczne placeholdery (ring, sparingi, grupy treningowe, trenerzy, medaliści), duże i pełnoszerokościowe.

## Nagłówek i stopka (na każdej podstronie)

- Logo w lewym górnym rogu (miejsce na poziomą zieloną wersję).
- Menu: Strona główna, O nas, Trenerzy, Harmonogram, Aktualności, Galeria, Galeria sław, Składki, Kontakt.
- Czerwony przycisk „Zapisz się" (link zewnętrzny — placeholder), także w wersji mobilnej.
- Stopka: adres, telefon, e-mail, ikony Instagram i Facebook.

## Strona główna

1. Hero — pełnoszerokościowe zdjęcie z walki, hasło „Każdy może zacząć boksować" + przycisk „Zapisz się".
2. Pozioma karuzela grup (przewijana strzałkami i gestem): Dzieci 6–9, Młodzież 10–14, Kobiety, Mężczyźni 35+, Grupa zawodnicza, Grupa rodzinna/rekreacyjna — zdjęcie + podpis.
3. Skrót „O klubie" + link „Czytaj więcej".
4. Zajawka harmonogramu — najbliższe zajęcia.
5. Galeria sław — karuzela wyróżnionych zawodników.
6. Aktualności — kafelki najnowszych wpisów + wydzielone miejsce na siatkę miniatur z Instagrama.
7. Kontakt — skrót adresu i mapa Google.

## Podstrony

- **O nas** — historia (3 lata działalności), wartości, opis grup, sekcje ze zdjęciami.
- **Trenerzy** — 5 kart: S. Brząkała, J. Gawczyński, M. Myszorek, A. Witkowski, A. Kado.
- **Harmonogram** — tygodniowa siatka pon–sob: godzina, grupa, trener; na telefonie lista dzienna.
- **Aktualności** — siatka artykułów z datami + miejsce na Instagram.
- **Galeria** — siatka zdjęć z treningów, obozów i walk, powiększanie po kliknięciu.
- **Galeria sław** — karty medalistów ze zdjęciem i osiągnięciem.
- **Składki / Wsparcie klubu** — ton informacyjny: 220 zł/mies. (większość grup), 250 zł/mies. (grupa rodzinna: rodzic + dziecko), wyjaśnienie celów statutowych.
- **Kontakt** — Zegrzyńska 13, Jabłonna, telefon, e-mail, social media, osadzona mapa Google. Bez formularza.

## Uwagi techniczne

- TanStack Router: osobna podstrona = osobny adres, z własnym tytułem i opisem dla wyszukiwarek.
- Kolory i czcionki jako tokeny w `src/styles.css`; czcionki ładowane w `__root.tsx` z podzbiorem `latin-ext`.
- Mapa jako zwykłe osadzenie Google Maps (iframe), bez klucza API.
- Zdjęcia generowane i zapisane w `src/assets`; teksty to placeholdery do zastąpienia realnymi treściami klubu.
- Bez sklepu, płatności, ciemnego motywu i formularza kontaktowego.

## Czego potrzebuję od klienta później

Plik logo (pozioma zielona wersja bez tła), prawdziwe zdjęcia, realne treści opisów, numer telefonu i e-mail, link do systemu zapisów oraz profili social media. Do czasu ich dostarczenia w prototypie będą dane przykładowe.
