# Nederlands hoofdstuk 4 — bronnen, negen deuren en controle

Sanne, 6 november 2026 (Asia/Colombo). Nieuw hubhoofdstuk op dezelfde main-basis `87ea16d`, na de afzonderlijke ch.3-correctie `ef4d80749276a037fa3c96c15577e1094c70269c`. Geen wijziging aan andere desks, taalregistratie of gedeelde nummering.

## Canonieke plaats

Gelezen: `_editorial/chapter-map.md`, `_editorial/chapter-map.json`, `content/posts/04-what-is-this-thing.md` en de negen bijbehorende Engelse take-pagina’s. De hub is **`04-what-is-this-thing.md`**, niet het daarnaast bestaande draft-bestand `04-mechanical-electromechanical-computing.md`. Alle negen takes horen bij hetzelfde publieke hoofdstuk 4; het zijn geen negen nieuwe publieke hoofdstuknummers.

NL volgt EN in bestandsnaam, `weight: 4`, `date: 2026-01-01`, `series_index: 3`, `draft: false`, `bookHidden: false`, `arm: hub`, `tags: []` en de twee aliassen `/posts/01-what-is-this-thing/`, `/posts/02-what-is-this-thing/`. De datum is overgenomen canonieke metadata, niet een bewering over de schrijfdatum. Titel, fase, samenvatting en tekst zijn Nederlands. Vorige: NL 3; volgende: EN 5. Het slot van NL 3 wordt nu naar de bestaande nieuwe NL hub omgezet.

## Amira’s conventie: gelezen referentie, niets daar gewijzigd

Exact gebruikte referentie:
`/workspace/freebook/forks/ar/content.ar/posts/04-what-is-this-thing.md`

De READ-ONLY `base-main` bevatte bij deze controle geen Arabische hub; `rg --files` vond deze in Amira’s fork en ook in `/workspace/freebook/wt-new-locales/content.ar/posts/04-what-is-this-thing.md`. Alleen het bestand in haar fork is als inhoudelijke template gelezen; geen bestand buiten de NL fork aangepast.

Amira’s regels 21–32: uitleg vooraf dat de negen deuren voorlopig naar EN gaan; iedere kaart gebruikt `{{< relref path="04-take-….md" lang="en" >}}` en een zichtbare Arabische equivalent van '(voorlopig Engels)'. NL spiegelt precies die expliciete doeltaal, hetzelfde negenkaartengrid en een zichtbare marker **(Engels · EN)** bij elke kaart. Extra: `hreflang="en"`. Geen ongekwalificeerde relref die per ongeluk naar een ongeschreven Nederlandse take moet wijzen. De vervolglink naar Babbage gebruikt eveneens expliciet `lang="en"`; de vorige naar de bestaande NL 3 blijft lokaal.

De takes zelf zijn EN en ongewijzigd; hun eigen teruglink kan dus naar de Engelse hub leiden. De NL introductie noemt daarom de terugknop als route terug naar de Nederlandse hub. Geen Nederlandse deurpagina’s gefingeerd, geen cross-desk wijzigingen.

| Deur | Exact EN doelbestand | Zichtbaar Nederlands label |
|---|---|---|
| clerk | `04-take-clerk.md` | De klerk (Engels · EN) |
| pebbles | `04-take-pebbles.md` | Bakjes met stenen (Engels · EN) |
| water-wheel | `04-take-water-wheel.md` | Het waterrad (Engels · EN) |
| feast-scoop | `04-take-feast-scoop.md` | De scheplepel (Engels · EN) |
| barrel-organ | `04-take-barrel-organ.md` | Het cilinderorgel (Engels · EN) |
| player-piano | `04-take-player-piano.md` | De pianola (Engels · EN) |
| caravan | `04-take-caravan.md` | De karavaan (Engels · EN) |
| stubborn-helper | `04-take-stubborn-helper.md` | De koppige helper (Engels · EN) |
| silk-cards | `04-take-silk-cards.md` | Patroonkaarten voor zijde (Engels · EN) |

## Eigen oefening tegenover historische uitspraken

De bakjesproef, het kaartje, de gewijzigde opdracht en de kaartteksten zijn nieuw geschreven instructies/vragen, geen historische reconstructie. De rol van een letterlijk uitvoerende proefpersoon is een afspraak voor de oefening, geen universele uitspraak dat machines geen fouten maken of geen menselijke bediening vergen. De drie leesvragen zijn een didactische keuze, niet een formele definitie van computer of algoritme.

Geen feiten uit de Engelse take-beelden als ongecontroleerde geschiedenis overgenomen: geen kleitablet- of kamelencultuur geclaimd, geen 'de eerste computer', geen uitvindersprimeur, geen absolute herhaalbaarheid of foutloosheid van echte mechaniek. De negen kaarten zijn gelijkwaardige ingangen, geen negen opeenvolgende uitvindingen. Historische/technische beweringen in de lopende tekst hebben ieder een direct aansluitende geopende museumbron.

## Geopende bronnen en exacte bewijsdekking

Alle vier onderstaande pagina’s geopend met WebFetch op 6 november 2026 (Asia/Colombo). De hoofdtekst parafraseert; geen historische citaten vertaald of verzonnen.

### 1. Museum Speelklok — draaiorgels

https://www.museumspeelklok.nl/draaiorgels/

Geopend: volledige collectie-uitleg. Gebruikt uit de inleiding: muziekprogramma regelt wanneer orgelpijpen wind uit blaasbalgen krijgen; draaibeweging pompt lucht én beweegt muziekprogramma. In de tekst toegeschreven aan het museum. Nederlands institutioneel bronmateriaal, geen eigen inspectie van een orgel.

Niet gebruikt: brede cultuurclaims over typisch Nederlands straatorgel, precieze patentdatum Gavioli, oudere textielsystemen, aantallen registers, bouwjaren of verhuurders. De term 'cilinderorgel' bij de deur benoemt het bestaande Engelse zijpad; de mechaniekparagraaf is breder en maakt niet alle draaiorgels tot cilinderorgels.

### 2. Museum Speelklok — snaarinstrumenten

https://www.museumspeelklok.nl/snaarinstrumenten/

Geopend: volledige pagina, vooral 'Trappianola' en slotalinea onder 'Voorzetter'. Bewijs: geperforeerde papieren rol plus pneumatisch klavier; gaatje maakt luchtstroming en toon mogelijk; de bespeler kan met hendeltjes en harder/zachter trappen muzikale accenten aanbrengen.

Juist de tweede passage begrenst de analogie: NL zegt **niet** dat dezelfde rol iedere keer een identieke uitvoering oplevert of dat de menselijke bedienaar geen rol heeft. Geen absolute uitspraak over alle reproductiepiano’s, geen claim dat een gewone pianola haar rol mechanisch aftast met toetsen. De museumtekst maakt het verschil tussen pneumatisch lezen en zo’n mechanische aftasting zelf expliciet.

### 3. Science and Industry Museum — Jacquard en de Analytical Engine

https://www.scienceandindustrymuseum.org.uk/objects-and-stories/jacquard-loom

Geopend: *Programming patterns: the story of the Jacquard loom*, gepubliceerd 25 juni 2019. Gebruikt:
- 'Punch cards weaving patterns': verwisselbare geperforeerde kaarten sturen welke kettingdraden opgetild worden.
- 'Inspiring early computing': Babbages ontwerp van de Analytical Engine voorzag ponskaarten voor getallen en voor opdrachten over wat er met die getallen moest gebeuren.

Niet overgenomen: 'ieder patroon', algemene uitspraken over massaproductie/prijzen, jaartal/primeur van Jacquards uitvinding, geciteerde Lovelace-zin of 'binaire code' als volledige gelijkstelling aan moderne computers. De vergelijking van kaartje en weefmechanisme is uitdrukkelijk een vergelijking.

### 4. Science Museum — ontwerp versus gebouwde machine

https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum

Geopend: *Charles Babbage’s Difference Engines and the Science Museum*, gepubliceerd 18 juli 2023. Gebruikt uit 'The Analytical Engine': alleen een deel als proefstuk voltooid vóór Babbages dood; onderscheid tussen ontwerp en bewaard proefstuk. Hoofdtekst formuleert daarom dat de **volledige** Analytical Engine tijdens zijn leven niet gebouwd werd, niet dat er nooit onderdelen waren.

Niet beweerd: dat een volledig werkende Analytical Engine ooit in zijn leven bestond; dat alle Difference Engines dezelfde ponskaartbesturing hadden; een rangorde als 'eerste computer'; onbeperkte rekenmogelijkheden; algehele voltooiing van latere projecten. De volledige uitleg van de verschillende engines blijft voor hoofdstuk 5.

## Lucas: eerst controleren

1. **Pianola en menselijke inbreng.** Museum Speelklok, secties 'Trappianola'/'Voorzetter'; NL maakt 'vaste rol' niet gelijk aan 'identieke uitvoering'. Controleer of deze nuance duidelijk genoeg naast de Engelse player-piano-take blijft staan.
2. **Drager tegenover aandrijving.** Draaiorgelparagraaf houdt windvoorziening en muziekprogramma uit elkaar, terwijl de draaibeweging beide bedient. Het bakjesexperiment is geen functionele reconstructie van het orgel of een CPU.
3. **Jacquard → Analytical Engine.** Exacte museumdekking: kaarten selecteren kettingdraden; bij Babbage kaarten voor getallen en opdrachten in een ontwerp. Geen verklaring dat ieder weefgetouw een algemene computer is.
4. **Ontwerp, proefstuk, voltooiing.** Volledige Analytical Engine niet gebouwd tijdens Babbages leven; proefstukken bestaan wel. Geen eigenschappen van de Analytical Engine aan alle Difference Engines toegekend.
5. **Negen EN deuren.** Alle labels en doelen volgen de huidige canonieke bestanden, met expliciete EN-resolutie zoals Amira. De EN take-pagina’s zelf zijn niet hier opnieuw als historische bronnen gecertificeerd of aangepast.

## Verificatie

- Defaultbuild: `hugo --minify --destination .nl-build/base-config --cacheDir "$PWD/.nl-build/base-cache"` — PASS, zeven bestaande talen, geen buildwaarschuwingen.
- Genegeerde NL-overlay: `hugo --minify --config hugo.toml,.nl-build/scaffold.toml --destination .nl-build/public --cacheDir "$PWD/.nl-build/cache"` — PASS, acht talen inclusief nl; 16 NL pagina’s en 11 aliassen. De zes hoofdstukpagina’s zijn iets anders dan alle gegenereerde sectie-/taxonomie-/overige pagina’s.
- `python3 scripts/renumber.py --check` — `check: 0 problem(s)`. Het script kent nl nog niet; daarom alle hierboven genoemde NL-hubmetadata ook apart programmatisch met EN vergeleken en publiek nummer, gewicht, index, draft en aliasgeschiedenis met canonical JSON — PASS.
- Negen shortcode-doelen en volgorde exact vergeleken met het gelezen bestand van Amira — PASS.
- Gerenderde hub: `lang="nl"`, juiste titel, precies negen kaarten met ieder zichtbare EN-marker en `hreflang="en"`; alle negen doelen bestaan als Engelse HTML (`lang="en-us"`) — PASS.
- Alle interne body-links in NL 3 en 4 wijzen naar bestaande output. NL 3 ↔ NL 4 en verder EN 5, plus exacte EN→NL hoofdstukschakelaars — PASS.
- Beide historische hubaliassen wijzen via hun gegenereerde canonical-redirect naar de huidige NL hub — PASS. Geen niet-verwerkte shortcodes in beide nieuwe/bijgewerkte hoofdstukpagina’s.
- Ch.3 HTML heeft de nieuwe Arcadia-kabelbron en geen `atlantic-cable.com`-transcriptiecitaat meer — PASS.
- De eerste renderassertion verwachtte ten onrechte exact `lang="en"`; de site gebruikt voor Engels `en-us`. Na vergelijking op de primaire taal `en` slaagden alle controles; geen sitewijziging hiervoor nodig.
- `git diff --check` — PASS. Getest met Hugo 0.165.0 extended; CI-versie 0.158 niet apart getest. Geen browser-screenshotreview.
- Locale-scaffold blijft buiten commits; bestaande patch: `/workspace/freebook/forks/nl-scaffold.patch`, testoverlay `.nl-build/scaffold.toml`. Geen wijzigingen aan `hugo.toml`, i18n, gedeelde maps, theme of andere desks. Lokale commits, geen push.
