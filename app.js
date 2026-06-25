const topicCatalog = [
  { name: "Strom", icon: "⚡", keywords: ["Stromnetz", "Energie", "Versorgung"] },
  { name: "Gas", icon: "◉", keywords: ["Wärme", "Gasversorgung", "Energie"] },
  { name: "Elektromobilität", icon: "▰", keywords: ["EAuto", "Laden", "Mobilitätswende"] },
  { name: "Abwasser", icon: "≈", keywords: ["Abwasser", "Kläranlage", "Umwelt"] },
  { name: "Photovoltaik", icon: "☀", keywords: ["Solarenergie", "PV", "Energiewende"] },
  { name: "Windkraft", icon: "↻", keywords: ["Windenergie", "Erneuerbare", "Energiewende"] },
  { name: "Trinkwasser", icon: "●", keywords: ["Trinkwasser", "Wasser", "Qualität"] },
  { name: "Fernwärme", icon: "♨", keywords: ["Fernwärme", "Heizen", "Wärmewende"] },
  { name: "Netze & Infrastruktur", icon: "⌁", keywords: ["Netze", "Infrastruktur", "Versorgungssicherheit"] },
  { name: "Energiesparen", icon: "↓", keywords: ["Energiesparen", "Tipps", "Nachhaltigkeit"] },
  { name: "Smart Home", icon: "⌂", keywords: ["SmartHome", "Digitalisierung", "Energie"] },
  { name: "Nachhaltigkeit", icon: "♧", keywords: ["Nachhaltigkeit", "Klimaschutz", "Zukunft"] },
  { name: "Region & Engagement", icon: "♡", keywords: ["Chemnitz", "Sachsen", "UnsereRegion"] },
  { name: "Berufe & Ausbildung", icon: "✦", keywords: ["Karriere", "Ausbildung", "TeamEINS"] },
  { name: "Service & Sicherheit", icon: "✓", keywords: ["Service", "Sicherheit", "GutZuWissen"] },
  { name: "Wärmepumpen", icon: "♨", keywords: ["Wärmepumpe", "Heizen", "Wärmewende"] },
  { name: "Batteriespeicher", icon: "▣", keywords: ["Speicher", "Batterie", "Energiewende"] },
  { name: "Wasserstoff", icon: "H₂", keywords: ["Wasserstoff", "Innovation", "Energiewende"] },
  { name: "Glasfaser", icon: "◎", keywords: ["Glasfaser", "Internet", "Digitalisierung"] },
  { name: "Baustellen & Projekte", icon: "▲", keywords: ["Baustelle", "Projekt", "Infrastruktur"] },
  { name: "Zähler & Messwesen", icon: "◴", keywords: ["Zähler", "SmartMeter", "Verbrauch"] },
  { name: "Energiepreise & Markt", icon: "€", keywords: ["Energiepreis", "Energiemarkt", "Erklärt"] },
  { name: "Klimaanpassung", icon: "☂", keywords: ["Klima", "Resilienz", "UnsereRegion"] },
  { name: "Kommunale Wärmeplanung", icon: "⌘", keywords: ["Wärmeplanung", "Kommune", "Wärmewende"] },
  { name: "Großkunden & Gewerbe", icon: "▥", keywords: ["Gewerbe", "Industrie", "Energieeffizienz"] },
  { name: "Events & Führungen", icon: "◉", keywords: ["Events", "Führung", "Chemnitz"] },
  { name: "Sport & Sponsoring", icon: "★", keywords: ["Sport", "Sponsoring", "UnsereRegion"] },
  { name: "Kultur & Bildung", icon: "◇", keywords: ["Kultur", "Bildung", "Engagement"] },
  { name: "Kundenservice", icon: "☎", keywords: ["Kundenservice", "Hilfe", "EINSEnergie"] },
  { name: "Digitalisierung", icon: "⌘", keywords: ["Digitalisierung", "Innovation", "SmartCity"] },
  { name: "Netzleitstelle", icon: "⌁", keywords: ["Leitstelle", "Stromnetz", "Versorgung"] },
  { name: "Straßenbeleuchtung", icon: "◐", keywords: ["Licht", "SmartCity", "Kommune"] },
  { name: "Ladeinfrastruktur", icon: "⚡", keywords: ["Ladepark", "Ladesäule", "EMobilität"] },
  { name: "Solarthermie", icon: "☼", keywords: ["Solarthermie", "Wärme", "Erneuerbare"] },
  { name: "Kraft-Wärme-Kopplung", icon: "⚙", keywords: ["KWK", "Wärme", "Effizienz"] },
  { name: "Biogas & Biomasse", icon: "♻", keywords: ["Biogas", "Biomasse", "Erneuerbare"] },
  { name: "Gewässerschutz", icon: "≈", keywords: ["Gewässerschutz", "Wasser", "Umwelt"] },
  { name: "Starkregen & Hochwasser", icon: "☔", keywords: ["Starkregen", "Hochwasser", "Vorsorge"] },
  { name: "Versorgungssicherheit", icon: "⬡", keywords: ["Versorgungssicherheit", "Krisenvorsorge", "Netze"] },
  { name: "Entstörung & Bereitschaft", icon: "!", keywords: ["Entstörung", "Bereitschaft", "Service"] },
  { name: "Rechnung verstehen", icon: "▤", keywords: ["Rechnung", "Energiepreis", "Service"] },
  { name: "Umzug & Anmeldung", icon: "⌂", keywords: ["Umzug", "Anmeldung", "Kundenservice"] },
  { name: "Tarife & Produkte", icon: "✓", keywords: ["Tarif", "Produkt", "Energie"] },
  { name: "Betrugsprävention", icon: "⌾", keywords: ["Sicherheit", "Betrug", "Kundenservice"] },
  { name: "Forschung & Innovation", icon: "✧", keywords: ["Forschung", "Innovation", "Zukunft"] },
  { name: "Frauen in Technik", icon: "♀", keywords: ["FrauenInTechnik", "Karriere", "TeamEINS"] },
  { name: "Quereinstieg & Karriere", icon: "↗", keywords: ["Quereinstieg", "Karriere", "Jobs"] },
  { name: "Ehrenamt", icon: "♡", keywords: ["Ehrenamt", "Engagement", "Region"] },
  { name: "Schulen & Nachwuchs", icon: "◫", keywords: ["Schule", "Nachwuchs", "EnergieWissen"] },
  { name: "Industriekultur", icon: "▦", keywords: ["Industriekultur", "Chemnitz", "Geschichte"] },
];

const topicMedia = {
  Strom: "assets/photos/stromnetz.png",
  Gas: "assets/photos/waerme.png",
  Elektromobilität: "assets/photos/elektromobilitaet.png",
  Abwasser: "assets/photos/abwasser.png",
  Photovoltaik: "assets/photos/photovoltaik.png",
  Windkraft: "assets/photos/windkraft.png",
  Trinkwasser: "assets/photos/trinkwasser.png",
  Fernwärme: "assets/photos/waerme.png",
  "Netze & Infrastruktur": "assets/photos/stromnetz.png",
  Energiesparen: "assets/photos/smart-home.png",
  "Smart Home": "assets/photos/smart-home.png",
  Nachhaltigkeit: "assets/photos/windkraft.png",
  "Region & Engagement": "assets/photos/region.png",
  "Berufe & Ausbildung": "assets/photos/karriere.png",
  "Service & Sicherheit": "assets/photos/stromnetz.png",
  Wärmepumpen: "assets/photos/waerme.png",
  Batteriespeicher: "assets/photos/photovoltaik.png",
  Wasserstoff: "assets/photos/stromnetz.png",
  Glasfaser: "assets/photos/stromnetz.png",
  "Baustellen & Projekte": "assets/photos/stromnetz.png",
  "Zähler & Messwesen": "assets/photos/smart-home.png",
  "Energiepreise & Markt": "assets/photos/smart-home.png",
  Klimaanpassung: "assets/photos/region.png",
  "Kommunale Wärmeplanung": "assets/photos/waerme.png",
  "Großkunden & Gewerbe": "assets/photos/stromnetz.png",
  "Events & Führungen": "assets/photos/region.png",
  "Sport & Sponsoring": "assets/photos/region.png",
  "Kultur & Bildung": "assets/photos/region.png",
  Kundenservice: "assets/photos/karriere.png",
  Digitalisierung: "assets/photos/smart-home.png",
  Netzleitstelle: "assets/photos/stromnetz.png",
  Straßenbeleuchtung: "assets/photos/region.png",
  Ladeinfrastruktur: "assets/photos/elektromobilitaet.png",
  Solarthermie: "assets/photos/photovoltaik.png",
  "Kraft-Wärme-Kopplung": "assets/photos/waerme.png",
  "Biogas & Biomasse": "assets/photos/windkraft.png",
  Gewässerschutz: "assets/photos/abwasser.png",
  "Starkregen & Hochwasser": "assets/photos/abwasser.png",
  Versorgungssicherheit: "assets/photos/stromnetz.png",
  "Entstörung & Bereitschaft": "assets/photos/stromnetz.png",
  "Rechnung verstehen": "assets/photos/smart-home.png",
  "Umzug & Anmeldung": "assets/photos/region.png",
  "Tarife & Produkte": "assets/photos/smart-home.png",
  Betrugsprävention: "assets/photos/karriere.png",
  "Forschung & Innovation": "assets/photos/stromnetz.png",
  "Frauen in Technik": "assets/photos/karriere.png",
  "Quereinstieg & Karriere": "assets/photos/karriere.png",
  Ehrenamt: "assets/photos/region.png",
  "Schulen & Nachwuchs": "assets/photos/region.png",
  Industriekultur: "assets/photos/region.png",
};

const mediaGroups = {
  solar: [
    "assets/photos/photovoltaik.png",
    "assets/photos/photovoltaik-montage.png",
    "assets/photos/windkraft.png",
    "assets/photos/smart-home.png",
    "assets/photos/waerme-beratung.png",
    "assets/photos/region.png",
  ],
  grid: [
    "assets/photos/stromnetz.png",
    "assets/photos/netzleitstelle.png",
    "assets/photos/baustelle-dialog.png",
    "assets/photos/windkraft.png",
    "assets/photos/karriere.png",
    "assets/photos/region.png",
  ],
  mobility: [
    "assets/photos/elektromobilitaet.png",
    "assets/photos/emobilitaet-regen.png",
    "assets/photos/photovoltaik.png",
    "assets/photos/baustelle-dialog.png",
    "assets/photos/region.png",
    "assets/photos/smart-home.png",
  ],
  water: [
    "assets/photos/trinkwasser.png",
    "assets/photos/wasser-reservoir.png",
    "assets/photos/abwasser.png",
    "assets/photos/region.png",
    "assets/photos/baustelle-dialog.png",
    "assets/photos/karriere.png",
  ],
  heat: [
    "assets/photos/waerme.png",
    "assets/photos/waerme-beratung.png",
    "assets/photos/smart-home.png",
    "assets/photos/baustelle-dialog.png",
    "assets/photos/photovoltaik.png",
    "assets/photos/karriere.png",
  ],
  people: [
    "assets/photos/karriere.png",
    "assets/photos/region.png",
    "assets/photos/baustelle-dialog.png",
    "assets/photos/netzleitstelle.png",
    "assets/photos/waerme-beratung.png",
    "assets/photos/photovoltaik.png",
  ],
  region: [
    "assets/photos/region.png",
    "assets/photos/baustelle-dialog.png",
    "assets/photos/karriere.png",
    "assets/photos/windkraft.png",
    "assets/photos/wasser-reservoir.png",
    "assets/photos/emobilitaet-regen.png",
  ],
};

const topicMediaGroup = {
  Strom: "grid", Gas: "heat", Elektromobilität: "mobility", Ladeinfrastruktur: "mobility",
  Abwasser: "water", Trinkwasser: "water", Gewässerschutz: "water",
  "Starkregen & Hochwasser": "water", Photovoltaik: "solar", Solarthermie: "solar",
  Batteriespeicher: "solar", Windkraft: "solar", Fernwärme: "heat", Wärmepumpen: "heat",
  "Kraft-Wärme-Kopplung": "heat", "Kommunale Wärmeplanung": "heat",
  "Netze & Infrastruktur": "grid", Netzleitstelle: "grid", Versorgungssicherheit: "grid",
  "Entstörung & Bereitschaft": "grid", "Baustellen & Projekte": "grid",
  Glasfaser: "grid", Straßenbeleuchtung: "grid", "Zähler & Messwesen": "grid",
  "Berufe & Ausbildung": "people", "Frauen in Technik": "people",
  "Quereinstieg & Karriere": "people", Kundenservice: "people", Betrugsprävention: "people",
  "Region & Engagement": "region", "Sport & Sponsoring": "region", "Kultur & Bildung": "region",
  Ehrenamt: "region", "Schulen & Nachwuchs": "region", Industriekultur: "region",
  "Events & Führungen": "region",
};

function getMediaOptions(topic) {
  const group = topicMediaGroup[topic] || "region";
  const primary = topicMedia[topic];
  return [...new Set([primary, ...mediaGroups[group], ...mediaGroups.region])].filter(Boolean).slice(0, 8);
}

const loadedMedia = new Map();
const mediaPromises = new Map();

function loadMedia(path) {
  if (mediaPromises.has(path)) return mediaPromises.get(path);
  const image = new Image();
  const promise = new Promise((resolve) => {
    image.onload = () => {
      loadedMedia.set(path, image);
      resolve(image);
    };
    image.onerror = () => resolve(null);
  });
  image.src = path;
  mediaPromises.set(path, promise);
  return promise;
}

[...new Set([...Object.values(topicMedia), ...Object.values(mediaGroups).flat()])].forEach(loadMedia);

const angles = {
  Strom: [
    "Was passiert eigentlich zwischen Steckdose und Umspannwerk?",
    "Der stille Sekundenbruchteil, in dem das Netz auf Verbrauch reagiert",
    "Drei Strommythen aus dem Alltag im Faktencheck",
  ],
  Gas: [
    "Wie eine sichere Gasversorgung rund um die Uhr überwacht wird",
    "Was Kund:innen über ihren Gasverbrauch wirklich wissen sollten",
    "Vom Zähler bis zur Wärme: der Weg der Energie",
  ],
  Elektromobilität: [
    "Laden ohne Rätselraten: Was die Symbole an der Säule bedeuten",
    "Ein ehrlicher Reichweiten-Check im sächsischen Alltag",
    "Die fünf häufigsten Fragen an einer öffentlichen Ladesäule",
  ],
  Abwasser: [
    "Die überraschende Reise eines Wassertropfens durch die Kläranlage",
    "Was niemals in die Toilette gehört – und trotzdem täglich ankommt",
    "Unsichtbare Arbeit, die unsere Gewässer schützt",
  ],
  Photovoltaik: [
    "Wie viel Energie liefert ein Dach an einem typischen Tag?",
    "PV-Irrtümer: Was stimmt bei Wolken, Winter und Ausrichtung?",
    "Vom Sonnenstrahl zum eigenen Haushaltsstrom",
  ],
  Windkraft: [
    "Was ein Windrad an einem einzigen guten Tag leisten kann",
    "Windkraft-Geräusche, Schatten und Leistung verständlich erklärt",
    "Ein Arbeitstag hoch oben in der Windenergie",
  ],
  Trinkwasser: [
    "Warum Leitungswasser eines der am besten kontrollierten Lebensmittel ist",
    "Vom Wasserwerk bis zum Glas: die regionale Reise",
    "So viel Technik steckt in einem ganz normalen Schluck Wasser",
  ],
  Fernwärme: [
    "Fernwärme in 45 Sekunden: Woher sie kommt und wie sie ankommt",
    "Was unter unseren Straßen für warme Wohnungen sorgt",
    "Die Wärmewende direkt vor der Haustür erklärt",
  ],
  "Netze & Infrastruktur": [
    "Die verborgene Infrastruktur unter einer einzigen Straße",
    "Warum Baustellen manchmal echte Zukunftsprojekte sind",
    "So wird Versorgungssicherheit geplant, bevor sie gebraucht wird",
  ],
  Energiesparen: [
    "Ein 7-Tage-Experiment mit kleinen Sparmaßnahmen",
    "Die drei größten Energiefresser – einer davon überrascht",
    "Was zehn Minuten weniger Verbrauch im Alltag wirklich bringen",
  ],
  "Smart Home": [
    "Welche smarte Funktion wirklich Energie spart – und welche nur nett ist",
    "Ein Zuhause denkt mit: drei einfache Automationen",
    "Smart Meter und Smart Home ohne Fachbegriffe erklärt",
  ],
  Nachhaltigkeit: [
    "Eine lokale Klimaschutzmaßnahme mit messbarem Ergebnis",
    "Was Nachhaltigkeit bei einem Energieversorger konkret bedeutet",
    "Kleine Entscheidung, große Wirkung: ein Blick hinter die Kennzahlen",
  ],
  "Region & Engagement": [
    "Ein Ort in der Region, den Energie und Gemeinschaft verbinden",
    "Menschen, die Chemnitz und Südsachsen jeden Tag mitgestalten",
    "Was regionale Verantwortung jenseits der Energieversorgung bedeutet",
  ],
  "Berufe & Ausbildung": [
    "Ein Beruf, den fast niemand kennt – aber alle täglich brauchen",
    "Schichtbeginn: 60 Sekunden im Arbeitsalltag eines EINS-Teams",
    "Drei überraschende Fähigkeiten, die in der Energiebranche zählen",
  ],
  "Service & Sicherheit": [
    "Was tun, wenn plötzlich Strom oder Wasser ausfällt?",
    "Eine Servicefrage, die oft komplizierter klingt, als sie ist",
    "Die richtige Reaktion in einer Störung – kurz und speicherbar",
  ],
  Wärmepumpen: [
    "Was eine Wärmepumpe im sächsischen Winter wirklich leistet",
    "Lautstärke, Aufstellort und Verbrauch ehrlich erklärt",
    "Der Weg von der Erstberatung bis zur warmen Wohnung",
  ],
  Batteriespeicher: [
    "Was nachts mit dem Solarstrom vom Tag passiert",
    "Welche Speichergröße zu welchem Haushalt passt",
    "Ein Ladezyklus vom Sonnenaufgang bis zum Frühstück",
  ],
  Wasserstoff: [
    "Wo Wasserstoff sinnvoll ist – und wo eher nicht",
    "Wie aus Strom ein speicherbares Gas entsteht",
    "Ein Zukunftsprojekt ohne Zukunftsfloskeln erklärt",
  ],
  Glasfaser: [
    "Vom Tiefbau bis zum Lichtsignal im Wohnzimmer",
    "Warum Glasfaser nicht einfach schnelleres Kupfer ist",
    "Ein Kabelquerschnitt, der eine ganze Straße verbindet",
  ],
  "Baustellen & Projekte": [
    "Was unter der geöffneten Straße tatsächlich gebaut wird",
    "Ein Projektupdate mit Fortschritt, Belastung und Nutzen",
    "Warum manche Arbeiten gleichzeitig koordiniert werden müssen",
  ],
  "Zähler & Messwesen": [
    "Was die Zahlen auf dem Zähler wirklich bedeuten",
    "Vom Ablesetermin zum digitalen Messsystem",
    "Drei Verbrauchssignale, die einen zweiten Blick verdienen",
  ],
  "Energiepreise & Markt": [
    "Wie sich ein Energiepreis zusammensetzt",
    "Was Börsenpreis, Netzentgelt und Steuer miteinander zu tun haben",
    "Warum sinkende Marktpreise nicht sofort auf jeder Rechnung ankommen",
  ],
  Klimaanpassung: [
    "Wie Infrastruktur mit Hitze und Starkregen umgeht",
    "Was trockene Sommer für Wasser und Energie bedeuten",
    "Drei Maßnahmen, die unsere Region widerstandsfähiger machen",
  ],
  "Kommunale Wärmeplanung": [
    "Was Wärmeplanung für eine einzelne Straße bedeutet",
    "Welche Daten Kommunen für ihre Wärme-Zukunft brauchen",
    "Fernwärme, Wärmepumpe oder anderes: warum es keine Einheitslösung gibt",
  ],
  "Großkunden & Gewerbe": [
    "Wie ein Betrieb Lastspitzen erkennt und reduziert",
    "Energieeffizienz, die sich im Arbeitsalltag messen lässt",
    "Ein Praxisbeispiel zwischen Produktion und Versorgungssicherheit",
  ],
  "Events & Führungen": [
    "Ein Ort, den die Öffentlichkeit sonst selten sieht",
    "Die drei häufigsten Fragen bei einer Anlagenführung",
    "Was Besucher:innen hinter den Kulissen überrascht",
  ],
  "Sport & Sponsoring": [
    "Wie regionale Energie und Vereinsleben zusammenkommen",
    "Ein Ehrenamtsmoment abseits des Spielfelds",
    "Was Sponsoring in der Region konkret möglich macht",
  ],
  "Kultur & Bildung": [
    "Ein Bildungsprojekt, das Energie begreifbar macht",
    "Was Industriekultur mit unserer heutigen Versorgung verbindet",
    "Junge Perspektiven auf die Energiezukunft der Region",
  ],
  Kundenservice: [
    "Eine komplizierte Kundenfrage in drei einfachen Schritten",
    "Was vor einem Anruf bereits vorbereitet werden kann",
    "Die Menschen hinter Chat, Telefon und Beratung",
  ],
  Digitalisierung: [
    "Wie Daten helfen, Netze verlässlicher zu betreiben",
    "Eine digitale Lösung, die im Hintergrund Zeit spart",
    "Smart City ohne Buzzwords: ein konkretes regionales Beispiel",
  ],
};

const templates = [
  {
    format: "Reel",
    mechanic: "Behind the Scenes",
    title: "{topic} in 30 Sekunden: Was fast niemand sieht",
    hook: "„Das passiert, bevor bei dir überhaupt etwas ankommt.“",
    concept:
      "Schneller Blick hinter die Kulissen: {angle}. Mit drei kurzen Szenen, klaren Texteinblendungen und einer überraschenden Zahl zum Schluss.",
    cta: "Was sollen wir als Nächstes hinter den Kulissen zeigen?",
    strength: "Neugier + exklusive Einblicke erhöhen Wiedergabedauer und Kommentare.",
  },
  {
    format: "Carousel",
    mechanic: "Listicle",
    title: "5 Dinge, die du über {topic} noch nicht wusstest",
    hook: "Folie 1: „Nummer 4 klingt erfunden – stimmt aber.“",
    concept:
      "Ein speicherbarer Fakten-Swipe zu „{angle}“. Pro Folie nur eine Kernaussage, dazu regionale Zahlen und ein klares Fazit.",
    cta: "Speichern und an jemanden schicken, der das wissen sollte.",
    strength: "Listenformat, Wissenslücke und Speicherwert funktionieren gemeinsam.",
  },
  {
    format: "Story",
    mechanic: "Quiz",
    title: "Du entscheidest: Das große {topic}-Quiz",
    hook: "„Was glaubst du: A, B oder C?“",
    concept:
      "Interaktive Story in vier Frames zu „{angle}“: Abstimmung, Auflösung, kurze Erklärung und offene Fragerunde mit dem Fachteam.",
    cta: "Stimme ab und schick uns deine Frage für die Auflösung.",
    strength: "Niedrige Interaktionshürde und sofortiges Feedback aktivieren die Community.",
  },
  {
    format: "Post",
    mechanic: "Zahlenstory",
    title: "Ein Bild, eine Zahl, eine starke Geschichte zu {topic}",
    hook: "„Diese Zahl steht für einen ganz normalen Tag in unserer Region.“",
    concept:
      "Ein starkes Motiv aus dem Arbeitsalltag kombiniert mit einer aussagekräftigen Kennzahl zu „{angle}“ und einer menschlichen Mini-Geschichte.",
    cta: "Welche Zahl aus der Energie- und Wasserwelt sollen wir erklären?",
    strength: "Konkrete Zahlen machen abstrakte Infrastruktur verständlich und teilbar.",
  },
  {
    format: "Reel",
    mechanic: "Mythos/Fakt",
    title: "Mythos oder Wahrheit? {topic}-Edition",
    hook: "„Stopp – stimmt das wirklich?“",
    concept:
      "Drei verbreitete Behauptungen rund um „{angle}“ werden durch eine Fachperson mit Rot-Grün-Karten, kurzen Belegen und Humor eingeordnet.",
    cta: "Schreib den nächsten Mythos in die Kommentare.",
    strength: "Bekannte Irrtümer erzeugen Aufmerksamkeit, Diskussion und fachliches Vertrauen.",
  },
  {
    format: "Carousel",
    mechanic: "Prozessreise",
    title: "Der Weg von {topic} – Schritt für Schritt",
    hook: "„Du nutzt es jeden Tag. Aber kennst du diesen Weg?“",
    concept:
      "Eine visuelle Reise zu „{angle}“ mit einfachen Karten, Pfeilen und echten Orten aus Chemnitz und Südsachsen.",
    cta: "Welchen Schritt möchtest du einmal live sehen?",
    strength: "Prozesswissen wird greifbar; der regionale Bezug stärkt Identifikation.",
  },
  {
    format: "Reel",
    mechanic: "Day in the Life",
    title: "POV: Du arbeitest einen Tag mit unserem {topic}-Team",
    hook: "„07:14 Uhr – der erste Einsatz beginnt.“",
    concept:
      "Authentischer Day-in-the-Life-Clip rund um „{angle}“: Ankommen, Handgriff, unerwarteter Moment, Ergebnis. Wenig Hochglanz, viel Nähe.",
    cta: "Würdest du diesen Job einen Tag lang ausprobieren?",
    strength: "Menschen und echte Arbeit geben einer technischen Marke ein Gesicht.",
  },
  {
    format: "Post",
    mechanic: "Gedankenexperiment",
    title: "Was wäre, wenn es {topic} einen Tag lang nicht gäbe?",
    hook: "„Man bemerkt Infrastruktur oft erst, wenn sie fehlt.“",
    concept:
      "Gedankenexperiment mit Alltagsbezug, das „{angle}“ verständlich macht und anschließend zeigt, welche Teams Versorgung im Hintergrund sichern.",
    cta: "Was ist für dich im Alltag selbstverständlich geworden?",
    strength: "Kontrast erzeugt Relevanz und lenkt Wertschätzung auf unsichtbare Leistungen.",
  },
];

const researchedTemplates = [
  ["Reel", "60 Sekunden im Einsatz: {topic} ganz nah", "„Komm mit – wir zeigen dir, was heute wirklich passiert.“", "Mini-Doku mit Ankunft, echtem Arbeitsschritt, O-Ton und sichtbarem Ergebnis rund um „{angle}“.", "Welchen Einsatz sollen wir als Nächstes begleiten?", "Mini-Doku"],
  ["Reel", "ASMR aus der Welt von {topic}", "„Ton an: So klingt Versorgungssicherheit.“", "Nahaufnahmen echter Geräusche, Materialien und Handgriffe zu „{angle}“, ohne Musik und mit kurzen Fakten im Bild.", "Welches Geräusch hast du erkannt?", "ASMR"],
  ["Reel", "Vorher / Nachher: {topic}, das man sehen kann", "„Dazwischen liegen Arbeit, Technik und ein starkes Team.“", "Derselbe Ort vor und nach einer Maßnahme zu „{angle}“, ergänzt um Zeitraffer und eine verständliche Kennzahl.", "Soll es mehr Vorher-Nachher-Einblicke geben?", "Vorher/Nachher"],
  ["Reel", "3 Fehler bei {topic}, die leicht vermeidbar sind", "„Fehler Nummer 2 passiert besonders oft.“", "Fachperson demonstriert drei typische Fehler zu „{angle}“ und zeigt jeweils unmittelbar die bessere Lösung.", "Welcher Fehler war dir neu?", "Fehleranalyse"],
  ["Reel", "{topic}: Fachperson reagiert auf Community-Kommentare", "„Diese Frage lesen wir immer wieder.“", "Echte häufige Frage zu „{angle}“ wird eingeblendet und spontan, verständlich und transparent beantwortet.", "Welche Frage soll ins nächste Reaktionsvideo?", "Kommentar-Reaktion"],
  ["Reel", "Ein Detail, drei Perspektiven: {topic}", "„Gleiches Thema – völlig anderer Blick.“", "Ein technisches Detail zu „{angle}“ aus Sicht von Kundschaft, Fachteam und Region inszenieren.", "Welche Perspektive fehlt noch?", "Perspektivwechsel"],
  ["Reel", "{topic}-Challenge: Schafft unser Team das?", "„Die Uhr läuft.“", "Eine sichere, fachlich sinnvolle Zeit- oder Schätzchallenge rund um „{angle}“ mit Auflösung und Lernmoment.", "Wie hättest du geschätzt?", "Challenge"],
  ["Reel", "Ein Tag, eine Zahl: {topic}", "„Bis Feierabend kommt hier einiges zusammen.“", "Eine reale Tageskennzahl zu „{angle}“ wächst im Bild mit und wird durch drei echte Szenen erklärt.", "Welche Zahl sollen wir als Nächstes zählen?", "Datenstory"],
  ["Carousel", "{topic}: Die Entscheidungshilfe in 6 Karten", "„Passt das zu dir? Finde es in 30 Sekunden heraus.“", "Entscheidungsbaum zu „{angle}“ mit Ja-Nein-Fragen, klaren Optionen und einem neutralen Fazit.", "Speichere die Entscheidungshilfe für später.", "Entscheidungsbaum"],
  ["Carousel", "A oder B? Der ehrliche {topic}-Vergleich", "„Beides kann richtig sein – aber nicht für alle.“", "Zwei Lösungswege zu „{angle}“ anhand Nutzen, Aufwand, Kostenlogik und Einsatzfall fair vergleichen.", "Welche Vergleichsfrage fehlt dir?", "Vergleich"],
  ["Carousel", "{topic} von 1990 bis morgen", "„So stark hat sich unser Alltag verändert.“", "Visuelle Zeitleiste zu „{angle}“ mit Vergangenheit, Gegenwart, nächstem Schritt und Zukunftsbild.", "Welcher Entwicklungsschritt überrascht dich?", "Zeitleiste"],
  ["Carousel", "Das {topic}-Lexikon ohne Fachchinesisch", "„Sechs Begriffe, die plötzlich Sinn ergeben.“", "Komplexe Begriffe rund um „{angle}“ mit Alltagsvergleichen und konkreten Bildmotiven erklären.", "Welcher Begriff braucht Teil zwei?", "Glossar"],
  ["Carousel", "Eine Rechnung zu {topic}, die jede:r versteht", "„Keine Angst – wir rechnen nur mit Alltagssituationen.“", "Eine relevante Beispielrechnung zu „{angle}“ in kleinen, nachvollziehbaren Schritten visualisieren.", "Speichern, wenn du später nachrechnen möchtest.", "Rechenbeispiel"],
  ["Carousel", "Was passiert bei einer Störung von {topic}?", "„Ruhe bewahren: So läuft es hinter den Kulissen.“", "Ablauf vom ersten Signal bis zur Lösung bei „{angle}“, inklusive Zuständigkeiten und Verhaltenstipps.", "Teile den Beitrag mit deinem Haushalt.", "Serviceablauf"],
  ["Carousel", "{topic}: 5 Behauptungen aus den Kommentaren", "„Wir haben nachgesehen – das ist dran.“", "Community-Aussagen zu „{angle}“ transparent mit stimmt, teilweise und stimmt nicht einordnen.", "Welche Behauptung sollen wir prüfen?", "Community-Faktencheck"],
  ["Carousel", "Die Landkarte hinter {topic}", "„Diese Orte verbindet mehr, als man auf den ersten Blick sieht.“", "Regionale Karte oder Routenlogik zu „{angle}“ mit Standorten, Wegen und Nutzen erklären.", "Welchen Ort sollen wir näher vorstellen?", "Kartenstory"],
  ["Story", "{topic}-Sprechstunde: Frag das Fachteam", "„Heute gibt es keine dumme Frage.“", "Fragen-Sticker, drei schnelle Antworten und abschließende Themenabstimmung zu „{angle}“.", "Schick uns deine Frage anonym über den Sticker.", "Sprechstunde"],
  ["Story", "Schätzen, wischen, staunen: {topic}", "„Wie groß, wie lang oder wie viel?“", "Drei visuelle Schätzfragen zu „{angle}“ mit Slider, Auflösung und regionalem Vergleich.", "Teile dein Ergebnis in deiner Story.", "Schätzspiel"],
  ["Story", "Wähle unseren nächsten {topic}-Dreh", "„Tor A oder Tor B?“", "Die Community stimmt über Ort, Person oder Detail für einen kommenden Beitrag zu „{angle}“ ab.", "Entscheide mit – wir setzen das Gewinner-Thema um.", "Community-Regie"],
  ["Story", "Richtig reagieren bei {topic}", "„Was würdest du jetzt tun?“", "Situatives Multiple-Choice-Szenario zu „{angle}“ mit sicherer Auflösung und speicherbarem Merksatz.", "Teste eine zweite Person und vergleicht eure Antwort.", "Sicherheitsszenario"],
  ["Post", "Gesicht hinter {topic}: Drei Fragen an unser Team", "„Ohne diesen Menschen würde heute etwas fehlen.“", "Authentisches Porträt mit drei kurzen Antworten zu Arbeit, Motivation und einem überraschenden Moment bei „{angle}“.", "Sag unserem Team ein Hallo in den Kommentaren.", "Mitarbeitendenporträt"],
  ["Post", "{topic} in einem einzigen starken Bild", "„Schau genauer hin – dieses Detail erzählt die ganze Geschichte.“", "Dokumentarisches Foto zu „{angle}“ mit knapper Bildlegende und einem erklärenden Fakt.", "Was entdeckst du zuerst im Bild?", "Fotoessay"],
  ["Post", "Die Frage der Woche zu {topic}", "„Kurze Frage, ehrliche Antwort.“", "Eine konkrete Publikumsfrage zu „{angle}“ in einer klaren, zitierfähigen Antwort auflösen.", "Stell die Frage für nächste Woche.", "FAQ"],
  ["Post", "Danke an die Menschen hinter {topic}", "„Versorgung ist Teamarbeit.“", "Momentaufnahme eines Teams oder Partners rund um „{angle}“ mit konkreter Anerkennung statt allgemeiner Floskel.", "Wem möchtest du heute Danke sagen?", "Wertschätzung"],
  ["Post", "Unser Standpunkt zu {topic}", "„Nicht alles ist einfach – aber Wegsehen ist keine Option.“", "Sachliche Haltung zu einer kontroversen Frage rund um „{angle}“ mit Fakten, Zielkonflikten und nächstem Schritt.", "Welche Perspektive sollten wir mitdenken?", "Haltungsbeitrag"],
  ["Post", "{topic}-Moment des Monats", "„Klein im Bild, groß für die Region.“", "Ein konkreter Fortschritt, Fund oder Begegnungsmoment zu „{angle}“ wird mit Kontext und Ausblick erzählt.", "Welcher regionale Moment gehört hierher?", "Monatsmoment"],
  ["Post", "Offene Baustelle: Update zu {topic}", "„Das ist erledigt – und das kommt als Nächstes.“", "Transparentes Projektupdate zu „{angle}“ mit Status, Nutzen, möglicher Belastung und Zeitplan.", "Welche Information ist für dich bei Baustellen wichtig?", "Projektupdate"],
  ["Carousel", "7 Tage, 7 kleine Schritte für {topic}", "„Nicht perfekt anfangen. Einfach anfangen.“", "Realistische Wochen-Challenge zu „{angle}“ mit täglich einer kleinen Aufgabe und messbarem Abschluss.", "Markiere jemanden für die gemeinsame Challenge.", "Wochenchallenge"],
].map(([format, title, hook, concept, cta, mechanic]) => ({
  format, title, hook, concept, cta, mechanic,
  strength: `${mechanic} schafft einen klaren Erwartungsrahmen und verbindet Nutzwert mit visueller Abwechslung.`,
}));

templates.push(...researchedTemplates);

const modeMechanics = {
  surprising: ["ASMR", "Challenge", "Experiment", "Vorher/Nachher", "Perspektivwechsel", "Mythos/Fakt", "Schätzspiel", "Gedankenexperiment"],
  editorial: ["Mini-Doku", "Mitarbeitendenporträt", "Fotoessay", "Zeitleiste", "Projektupdate", "Day in the Life", "Ortsgeschichte"],
  campaign: ["Wochenchallenge", "Datenstory", "Testimonials", "Awareness", "Community-Regie", "Vorher/Nachher", "Haltungsbeitrag"],
  service: ["FAQ", "Serviceablauf", "Entscheidungsbaum", "Rechenbeispiel", "Sicherheitsszenario", "Fehleranalyse", "Glossar", "Vergleich"],
  community: ["Community-Faktencheck", "Kommentar-Reaktion", "Sprechstunde", "Quiz", "Schätzspiel", "Community-Regie", "Challenge"],
};

const universalAngles = [
  "ein konkreter Alltagsmoment, den fast alle kennen",
  "eine häufige Frage aus dem Kundenservice",
  "ein überraschendes technisches Detail",
  "eine regionale Kennzahl mit verständlichem Vergleich",
  "ein echter Arbeitsschritt eines Fachteams",
  "ein saisonaler Anlass und seine praktische Bedeutung",
  "ein typischer Irrtum und seine faire Einordnung",
  "ein Blick auf Kosten, Nutzen und Grenzen",
  "eine Veränderung, die in den nächsten fünf Jahren relevant wird",
  "ein lokaler Ort und die Infrastruktur dahinter",
  "eine Sicherheitsregel, die man im richtigen Moment kennen sollte",
  "eine Entscheidung aus Sicht unterschiedlicher Zielgruppen",
  "eine kleine Maßnahme mit messbarer Wirkung",
  "eine Community-Frage mit unerwarteter Antwort",
  "ein Vergleich zwischen früher, heute und morgen",
];

const contentPillars = {
  balanced: ["Wissen", "Menschen", "Service", "Region", "Innovation", "Dialog", "Transparenz", "Unterhaltung"],
  surprising: ["Experiment", "Kontrast", "Mythos", "Challenge", "Unbekannter Ort", "Unbequeme Frage", "Kurioses Detail"],
  editorial: ["Reportage", "Porträt", "Erklärstück", "Ortsgeschichte", "Interview", "Tagebuch", "Fotostrecke"],
  campaign: ["Awareness", "Aktivierung", "Serie", "Hero-Story", "Proof Point", "Testimonials", "Countdown"],
  service: ["Anleitung", "Checkliste", "Warnhinweis", "FAQ", "Entscheidungshilfe", "Fristen", "Kontaktweg"],
  community: ["Abstimmung", "Fragenrunde", "User Story", "Quiz", "Kommentar-Reaktion", "Mitmachaktion", "Lokaler Stolz"],
};

const occasionPools = {
  evergreen: [
    "ein zeitloser Erkläranlass",
    "eine häufige Alltagssituation",
    "eine wiederkehrende Kundenfrage",
    "ein Blick hinter die Kulissen ohne Termindruck",
  ],
  season: [
    "der erste heiße Tag des Jahres",
    "eine längere Trockenperiode",
    "der Beginn der Heizsaison",
    "ein stürmisches Wochenende",
    "Ferienzeit und leerere Wohnungen",
    "die dunkle Jahreszeit",
    "Frühjahrsputz und Neustart",
    "ein außergewöhnlich kalter Morgen",
  ],
  local: [
    "ein Stadtfest oder regionales Wochenende",
    "ein Heimspiel oder Vereinsereignis",
    "eine Schul- oder Ausbildungsmesse",
    "eine Veranstaltung in Chemnitz oder Südsachsen",
    "eine lokale Umweltaktion",
    "ein Tag der offenen Tür",
  ],
  project: [
    "der Baustart eines regionalen Vorhabens",
    "die Halbzeit eines laufenden Projekts",
    "die Inbetriebnahme einer Anlage",
    "ein sichtbarer Baufortschritt",
    "ein erfolgreich abgeschlossener Test",
    "ein Jahr nach Projektabschluss",
  ],
  question: [
    "eine Frage aus den Kommentaren",
    "ein Missverständnis aus dem Kundenservice",
    "eine skeptische Nachfrage",
    "eine Entscheidung vor dem Kauf",
    "eine Frage von Kindern oder Jugendlichen",
    "eine Frage, die sich viele nicht zu stellen trauen",
  ],
};

const protagonists = [
  "eine erfahrene Fachkraft im echten Arbeitsmoment",
  "eine Auszubildende mit ihrem ersten eigenen Auftrag",
  "eine Familie aus der Region",
  "ein Hausbesitzer mit einer konkreten Entscheidung",
  "eine Mitarbeiterin aus dem Kundenservice",
  "ein Bereitschaftsteam kurz vor dem Einsatz",
  "eine kommunale Ansprechpartnerin",
  "ein lokaler Verein oder Ehrenamtsteam",
  "ein Schulkind mit einer ehrlichen Frage",
  "ein Gewerbekunde mit messbarem Ergebnis",
  "ein Projektleiter mit offenem Baustellen-Update",
  "ein langjähriger Mitarbeiter mit historischem Vergleich",
];

const regionalSettings = [
  "an einem konkreten Ort in Chemnitz",
  "in einer Wohnstraße in Südsachsen",
  "direkt in einer technischen Anlage",
  "in einer Leitstelle oder Werkstatt",
  "bei einer Baustelle im laufenden Betrieb",
  "in einem normalen Familienhaushalt",
  "auf einem Vereins- oder Veranstaltungsgelände",
  "in einem regionalen Unternehmen",
  "an einem Ort, den die Öffentlichkeit selten sieht",
  "unterwegs zwischen zwei Einsatzorten",
];

const proofPoints = [
  "eine belastbare regionale Kennzahl",
  "ein sichtbares Vorher-Nachher-Ergebnis",
  "ein Originalton einer Fachperson",
  "ein praktischer Test vor der Kamera",
  "eine verständliche Beispielrechnung",
  "ein Vergleich mit einem Alltagsgegenstand",
  "eine Karte oder ein konkreter Streckenverlauf",
  "ein Zeitraffer des tatsächlichen Ablaufs",
  "eine Messung mit vorher angekündigtem Ergebnis",
  "drei echte Community-Antworten",
];

const visualApproaches = [
  "dokumentarische Handkamera mit echten Arbeitsgeräuschen",
  "ruhige, hochwertige Fotoreportage",
  "Split-Screen mit zwei Perspektiven",
  "Makroaufnahmen technischer Details",
  "Luftaufnahme plus menschliche Nahaufnahme",
  "POV-Aufnahmen aus Sicht des Teams",
  "Karte, Weg und reale Aufnahmen im Wechsel",
  "ein durchgehender One-Take",
  "Stop-Motion mit echten Gegenständen",
  "Interview und B-Roll im Wechsel",
  "Zeitraffer mit eingeblendeten Meilensteinen",
  "vier Jahreszeiten am selben Ort",
];

const topicSubthemes = {
  Strom: ["Netzfrequenz", "Umspannwerke", "Strommix", "Spitzenlast", "Hausanschluss", "Netzausbau", "Stromausfall", "Erneuerbare Einspeisung"],
  Gas: ["Gasnetzprüfung", "Hausanschluss", "Speicherung", "Geruchsstoff", "Versorgung im Winter", "Heizverhalten", "Sicherheitskontrolle"],
  Elektromobilität: ["öffentliches Laden", "Laden zu Hause", "Reichweite", "Ladezeit", "Tarife", "Urlaubsfahrt", "Batteriepflege", "Mehrfamilienhaus"],
  Photovoltaik: ["Dachcheck", "Verschattung", "Winterertrag", "Eigenverbrauch", "Wechselrichter", "Montage", "Förderung", "Recycling"],
  Abwasser: ["Rechenanlage", "biologische Reinigung", "Fremdstoffe", "Kanalnetz", "Labor", "Klärschlamm", "Starkregen", "Gewässerschutz"],
  Trinkwasser: ["Wasserqualität", "Rohrnetz", "Wasserwerk", "Hausinstallation", "Härtegrad", "Trinkwasseranalyse", "Sommerverbrauch", "Rohrbruch"],
  Fernwärme: ["Hausstation", "Netztemperatur", "Leitungsbau", "Erzeugung", "Wärmeverluste", "Anschluss", "Wärmewende", "Leitwarte"],
  Windkraft: ["Windmessung", "Wartung", "Artenschutz", "Ertrag", "Bürgerfragen", "Anlagenhöhe", "Rückbau", "Netzanschluss"],
  Wärmepumpen: ["Aufstellort", "Lautstärke", "Vorlauftemperatur", "Altbau", "Stromverbrauch", "Förderung", "Wartung", "Hybridlösung"],
  Glasfaser: ["Tiefbau", "Hausanschluss", "Spleißen", "Lichtsignal", "Router", "Ausbauplanung", "Mehrfamilienhaus", "Störung"],
  "Energiepreise & Markt": ["Beschaffung", "Netzentgelte", "Steuern", "Abschlag", "Preisgarantie", "Börsenpreis", "Verbrauchsprognose", "Jahresabrechnung"],
  "Berufe & Ausbildung": ["Bewerbung", "Berufsschule", "Praxisauftrag", "Schichtdienst", "Teamkultur", "Prüfung", "Weiterbildung", "Sinn der Arbeit"],
  Digitalisierung: ["Sensorik", "Datenanalyse", "Smart Meter", "Prozessautomatisierung", "Cybersecurity", "digitale Baustelle", "Kundenportal", "Smart City"],
};

const genericSubthemes = [
  "Planung und Vorbereitung",
  "Technik im Hintergrund",
  "Menschen und Berufe",
  "Sicherheit und Qualität",
  "Kosten und Nutzen",
  "regionale Wirkung",
  "häufige Missverständnisse",
  "Zukunft und nächste Schritte",
];

const goalTweaks = {
  Reichweite: "Beginne visuell sofort mit dem stärksten Kontrast und halte die Aussage maximal klar.",
  "Wissen vermitteln": "Nutze eine verständliche Analogie und belege die wichtigste Aussage mit einer Quelle.",
  "Vertrauen stärken": "Zeige eine echte Fachperson, einen realen Ort und benenne auch Grenzen transparent.",
  Interaktion: "Baue eine einfache Entweder-oder-Frage ein, die ohne Vorwissen beantwortet werden kann.",
  "Service & Hilfe": "Formuliere die Information so, dass sie gespeichert und im richtigen Moment wiedergefunden wird.",
  Recruiting: "Stelle die Menschen, den Sinn der Tätigkeit und einen konkreten Arbeitsmoment in den Mittelpunkt.",
  "Produkt erklären": "Führe vom Alltagsproblem über die Lösung zu einem klaren nächsten Schritt.",
  "Image & Marke": "Zeige Haltung und regionale Verantwortung durch eine konkrete Handlung statt durch Werbefloskeln.",
  "Transparenz schaffen": "Benenne Zahlen, offene Fragen, Zielkonflikte und den nächsten überprüfbaren Schritt.",
  "Verhalten ändern": "Formuliere eine kleine, realistische Handlung und mache ihren direkten Nutzen sichtbar.",
  "Projekt begleiten": "Zeige Status, nächste Etappe, Nutzen, Einschränkungen und einen ehrlichen Zeitrahmen.",
};

const audienceTweaks = {
  "Alle in der Region": "Verwende einen Ort oder Alltagspunkt aus Chemnitz beziehungsweise Südsachsen.",
  "Junge Erwachsene": "Sprich direkt, schnell und ohne Fachsprache; ein augenzwinkernder Moment ist willkommen.",
  Familien: "Knüpfe an Routinen zu Hause an und liefere einen direkt nutzbaren Tipp.",
  Hausbesitzende: "Zeige Kosten, Nutzen und Entscheidungsfragen besonders konkret.",
  Unternehmen: "Betone Planbarkeit, Effizienz und praktische Auswirkungen auf den Betrieb.",
  Kommunen: "Ordne Nutzen, Infrastruktur und langfristige regionale Wirkung ein.",
  "Bewerber:innen": "Zeige Teamkultur, Entwicklungsmöglichkeiten und die Wirkung der Aufgabe.",
  "Mieter:innen": "Knüpfe an Nebenkosten, Alltag, Hausgemeinschaft und leicht umsetzbare Schritte an.",
  "Senior:innen": "Erkläre ruhig, eindeutig und serviceorientiert; vermeide unnötige Anglizismen.",
  "Eigentümergemeinschaften": "Zeige Entscheidungsweg, Zuständigkeiten und Nutzen für mehrere Parteien.",
  "Schüler:innen": "Arbeite mit Experiment, überraschender Frage und einem konkreten Berufseinblick.",
  "Medien & Öffentlichkeit": "Liefere überprüfbare Fakten, regionale Relevanz und eine zitierfähige Kernaussage.",
};

let topics = [...topicCatalog];
let selectedTopics = new Set(["Strom", "Photovoltaik", "Elektromobilität"]);
let currentIdeas = [];
let favorites = JSON.parse(localStorage.getItem("eins-ideen-favorites") || "[]");
let generationRound = 0;
let generationSalt = 0;
let recentIdeaSignatures = [];
let recentIdeaTitles = [];
let activeStudioIdea = null;
let activeStudioSlide = 0;
let studioVariant = 0;
let studioAnimationId = null;
let studioAnimationStarted = 0;
let selectedStudioLayer = "title";
let studioDesigns = new Map();
let studioDesignInitials = new Map();
let studioUndoStack = [];
let studioRedoStack = [];
let studioHitboxes = [];
let studioDrag = null;
let topicSearchTerm = "";

const topicChips = document.querySelector("#topicChips");
const ideaList = document.querySelector("#ideaList");
const emptyState = document.querySelector("#emptyState");
const resultsSummary = document.querySelector("#resultsSummary");
const toast = document.querySelector("#toast");

function renderTopics() {
  const visibleTopics = topics.filter((topic) =>
    topic.name.toLowerCase().includes(topicSearchTerm.toLowerCase()),
  );
  topicChips.innerHTML = visibleTopics
    .map(
      (topic) => `
        <button
          type="button"
          class="topic-chip ${selectedTopics.has(topic.name) ? "active" : ""}"
          data-topic="${escapeHtml(topic.name)}"
          aria-pressed="${selectedTopics.has(topic.name)}"
        >
          <span class="topic-icon">${topic.icon}</span>${escapeHtml(topic.name)}
        </button>
      `,
    )
    .join("");

  if (!visibleTopics.length) {
    topicChips.innerHTML = `<p class="no-topic-result">Kein Thema gefunden. Du kannst es unten selbst ergänzen.</p>`;
  }

  topicChips.querySelectorAll(".topic-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const topic = chip.dataset.topic;
      if (selectedTopics.has(topic)) selectedTopics.delete(topic);
      else selectedTopics.add(topic);
      renderTopics();
    });
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function pick(list, index) {
  return list[Math.abs(index) % list.length];
}

function hash(text) {
  let value = 0;
  for (let i = 0; i < text.length; i += 1) {
    value = (value << 5) - value + text.charCodeAt(i);
    value |= 0;
  }
  return Math.abs(value);
}

function selectedFormats() {
  const values = [...document.querySelectorAll(".format-option.active")].map(
    (button) => button.dataset.format,
  );
  return values.length ? values : ["Reel", "Carousel", "Story", "Post"];
}

function getSettings() {
  return {
    platform: document.querySelector("#platform").value,
    goal: document.querySelector("#goal").value,
    audience: document.querySelector("#audience").value,
    ideaMode: document.querySelector("#ideaMode").value,
    occasion: document.querySelector("#occasion").value,
    formats: selectedFormats(),
    virality: Number(document.querySelector("#virality").value),
    regionality: Number(document.querySelector("#regionality").value),
    expertise: Number(document.querySelector("#expertise").value),
    emotion: Number(document.querySelector("#emotion").value),
    count: Number(document.querySelector("#ideaCount").value),
  };
}

function buildIdea(topic, index, settings) {
  const seed = hash(
    `${topic.name}-${index}-${generationRound}-${generationSalt}-${settings.platform}-${settings.goal}-${settings.virality}`,
  );
  const preferredTemplates = templates.filter((template) =>
    settings.formats.includes(template.format),
  );
  const modePool = modeMechanics[settings.ideaMode]
    ? preferredTemplates.filter((template) => modeMechanics[settings.ideaMode].includes(template.mechanic))
    : preferredTemplates;
  const templatePool = modePool.length
    ? modePool
    : preferredTemplates.length
      ? preferredTemplates
      : templates;
  let templateIndex =
    (generationRound * 13 + generationSalt + index * 7 + hash(`${topic.name}-${settings.goal}`)) %
    templatePool.length;
  let template = templatePool[templateIndex];
  for (let attempt = 0; attempt < templatePool.length; attempt += 1) {
    const signature = `${topic.name}|${template.mechanic || template.title}`;
    if (!recentIdeaSignatures.includes(signature)) break;
    templateIndex = (templateIndex + 11) % templatePool.length;
    template = templatePool[templateIndex];
  }
  const specificAngles = angles[topic.name] || [
    `Warum ${topic.name} für unsere Region wichtig ist`,
    `${topic.name} verständlich erklärt`,
    `Ein Blick hinter die Kulissen von ${topic.name}`,
  ];
  const topicAngles = [
    ...specificAngles,
    ...universalAngles.map((angle) => `${angle} – übertragen auf ${topic.name}`),
  ];
  const subthemes = topicSubthemes[topic.name] || genericSubthemes;
  const subtheme = subthemes[
    (generationRound * 7 + generationSalt + index * 5 + hash(topic.name)) % subthemes.length
  ];
  const pillarPool = contentPillars[settings.ideaMode] || contentPillars.balanced;
  const pillar = pillarPool[
    (generationRound * 3 + generationSalt + index * 5 + hash(`${topic.name}-${settings.goal}`)) %
    pillarPool.length
  ];
  const occasionKey = settings.occasion === "auto"
    ? Object.keys(occasionPools)[
        (generationRound + generationSalt + index) % Object.keys(occasionPools).length
      ]
    : settings.occasion;
  const occasionPool = occasionPools[occasionKey] || occasionPools.evergreen;
  const occasion = occasionPool[
    (generationRound * 5 + generationSalt + index * 3) % occasionPool.length
  ];
  const protagonist = protagonists[
    (generationRound * 7 + generationSalt + index * 11 + hash(settings.audience)) % protagonists.length
  ];
  const setting = regionalSettings[
    (generationRound * 11 + generationSalt + index * 7 + hash(topic.name)) % regionalSettings.length
  ];
  const proof = proofPoints[
    (generationRound * 13 + generationSalt + index * 5 + hash(settings.goal)) % proofPoints.length
  ];
  const visualApproach = visualApproaches[
    (generationRound * 17 + generationSalt + index * 7) % visualApproaches.length
  ];
  const angle = topicAngles[
    (generationRound * 5 + generationSalt + index * 3 + hash(`${settings.audience}-${topic.name}`)) %
    topicAngles.length
  ];
  const regionalCue =
    settings.regionality >= 7
      ? " Nutze dafür echte Aufnahmen und eine konkrete Zahl aus Chemnitz oder Südsachsen."
      : settings.regionality >= 4
        ? " Ergänze einen dezenten Bezug zur Region."
        : "";
  const expertiseCue =
    settings.expertise >= 8
      ? " Ergänze eine technische Detailfolie oder eine Fachstimme mit belastbarer Kennzahl."
      : settings.expertise <= 3
        ? " Verzichte konsequent auf Fachbegriffe und erkläre alles über einen Alltagsvergleich."
        : "";
  const emotionCue =
    settings.emotion >= 8
      ? " Erzähle den Inhalt über einen Menschen, dessen Alltag davon unmittelbar berührt wird."
      : settings.emotion <= 3
        ? " Halte Bildsprache und Text klar, ruhig und faktenorientiert."
        : "";
  const viralCue =
    settings.virality >= 8
      ? " Schneide schnell, starte mit dem überraschendsten Moment und löse die Kernfrage erst am Ende auf."
      : settings.virality <= 3
        ? " Setze auf ruhige, seriöse Vermittlung und eine eindeutige Kernaussage."
        : "";

  const score = Math.min(
    98,
    62 +
      settings.virality * 2 +
      Math.round((settings.regionality + settings.emotion) / 2) +
      (template.format === "Reel" ? 4 : 0) +
      (seed % 6),
  );
  const baseTitle = template.title.replaceAll("{topic}", topic.name);
  const titleVariants = [
    `${baseTitle} · ${subtheme}`,
    `${subtheme}: ${baseTitle}`,
    `${baseTitle} – am Beispiel ${subtheme}`,
    baseTitle,
  ];
  const title = titleVariants[(generationRound + index + generationSalt) % titleVariants.length];
  const concept = template.concept
    .replaceAll("{topic}", topic.name)
    .replaceAll("{angle}", `${angle}; Schwerpunkt: ${subtheme}`);
  const keywords = topic.keywords || [topic.name.replaceAll(" ", "")];

  return {
    id: `${Date.now()}-${index}-${seed}`,
    topic: topic.name,
    format: template.format,
    mechanic: template.mechanic || "Storytelling",
    pillar,
    subtheme,
    occasion,
    protagonist,
    setting,
    proof,
    visualApproach,
    mediaIndex: (seed + generationRound + index * 3) % getMediaOptions(topic.name).length,
    platform: settings.platform,
    title,
    hook: template.hook,
    concept: `${concept}${regionalCue}${expertiseCue}${emotionCue}${viralCue}`,
    cta: template.cta,
    strength: `${template.strength} ${goalTweaks[settings.goal]} ${audienceTweaks[settings.audience]}`,
    hashtags: [
      "#EINSEnergie",
      ...keywords.slice(0, 2).map((keyword) => `#${keyword.replaceAll(" ", "")}`),
      settings.regionality >= 6 ? "#Südsachsen" : "#EnergieWissen",
    ],
    score,
  };
}

function generateIdeas() {
  if (!selectedTopics.size) {
    showToast("Bitte wähle mindestens ein Thema aus.");
    topicChips.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(-5px)" },
        { transform: "translateX(5px)" },
        { transform: "translateX(0)" },
      ],
      { duration: 260 },
    );
    return;
  }

  generationRound += 1;
  generationSalt = Math.floor(Math.random() * 1000000);
  const settings = getSettings();
  const activeTopics = topics
    .filter((topic) => selectedTopics.has(topic.name))
    .sort(() => Math.random() - 0.5);
  const usedThisRound = new Set();
  currentIdeas = [];
  for (let index = 0; index < settings.count; index += 1) {
    let selectedIdea = null;
    for (let attempt = 0; attempt < 24; attempt += 1) {
      const topic = activeTopics[(index + attempt) % activeTopics.length];
      const candidate = buildIdea(topic, index + attempt * 17, settings);
      const signature = `${candidate.topic}|${candidate.subtheme}|${candidate.mechanic}|${candidate.occasion}|${candidate.visualApproach}`;
      if (!usedThisRound.has(signature) && !recentIdeaTitles.includes(candidate.title)) {
        selectedIdea = candidate;
        usedThisRound.add(signature);
        break;
      }
    }
    currentIdeas.push(selectedIdea || buildIdea(activeTopics[index % activeTopics.length], index, settings));
  }
  const usedMediaThisRound = new Set();
  currentIdeas.forEach((idea) => {
    const options = getMediaOptions(idea.topic);
    let mediaIndex = idea.mediaIndex % options.length;
    for (let attempt = 0; attempt < options.length; attempt += 1) {
      const candidateIndex = (mediaIndex + attempt) % options.length;
      if (!usedMediaThisRound.has(options[candidateIndex])) {
        mediaIndex = candidateIndex;
        break;
      }
    }
    idea.mediaIndex = mediaIndex;
    usedMediaThisRound.add(options[mediaIndex]);
  });
  const currentSignatures = currentIdeas.flatMap((idea) => [
    `${idea.topic}|${idea.mechanic}`,
    `${idea.topic}|${idea.subtheme}|${idea.pillar}`,
    `${idea.mechanic}|${idea.visualApproach}`,
  ]);
  recentIdeaSignatures = [...currentSignatures, ...recentIdeaSignatures].slice(0, 144);
  recentIdeaTitles = [...currentIdeas.map((idea) => idea.title), ...recentIdeaTitles].slice(0, 120);
  renderIdeas();
  resultsSummary.innerHTML = `
    <span class="pulse"></span>
    ${settings.count} Ideen für ${escapeHtml(settings.platform)} · ${escapeHtml(settings.goal)} ·
    ${activeTopics.length} ${activeTopics.length === 1 ? "Thema" : "Themen"} ·
    ${escapeHtml(document.querySelector("#ideaMode").selectedOptions[0].text)}
  `;

  if (window.innerWidth < 1050) {
    document.querySelector(".results-panel").scrollIntoView({ behavior: "smooth" });
  }
}

function renderIdeas() {
  emptyState.hidden = currentIdeas.length > 0;
  ideaList.innerHTML = currentIdeas
    .map((idea, index) => {
      const isFavorite = favorites.some((favorite) => favorite.title === idea.title);
      const mediaOptions = getMediaOptions(idea.topic);
      const previewMedia = mediaOptions[idea.mediaIndex % mediaOptions.length];
      return `
        <article class="idea-card" style="animation-delay:${index * 60}ms">
          <span class="card-number">${String(index + 1).padStart(2, "0")}</span>
          <div class="card-meta">
            <div class="meta-tags">
              <span class="meta-tag primary">${escapeHtml(idea.topic)}</span>
              <span class="meta-tag">${escapeHtml(idea.format)}</span>
              <span class="meta-tag">${escapeHtml(idea.mechanic)}</span>
              <span class="meta-tag">${escapeHtml(idea.pillar)}</span>
              <span class="meta-tag">${escapeHtml(idea.platform)}</span>
            </div>
            <span class="score">${idea.score}% Potenzial</span>
          </div>
          <div class="idea-media">
            <img src="${previewMedia}" alt="${escapeHtml(idea.topic)} – vorgeschlagenes Fotomotiv" loading="lazy" />
            <span>${escapeHtml(idea.visualApproach)}</span>
          </div>
          <h3>${escapeHtml(idea.title)}</h3>
          <p class="hook">${escapeHtml(idea.hook)}</p>
          <p class="concept">${escapeHtml(idea.concept)}</p>
          <div class="idea-brief">
            <div><span>Fokus</span><strong>${escapeHtml(idea.subtheme)}</strong></div>
            <div><span>Aufhänger</span><strong>${escapeHtml(idea.occasion)}</strong></div>
            <div><span>Perspektive</span><strong>${escapeHtml(idea.protagonist)}</strong></div>
            <div><span>Bildidee</span><strong>${escapeHtml(idea.visualApproach)}</strong></div>
          </div>
          <div class="idea-details">
            <div>
              <span class="detail-label">Call to Action</span>
              <p>${escapeHtml(idea.cta)}</p>
            </div>
            <div>
              <span class="detail-label">Warum es funktioniert</span>
              <p>${escapeHtml(idea.strength)}</p>
            </div>
          </div>
          <p class="hashtags">${idea.hashtags.map(escapeHtml).join(" ")}</p>
          <div class="card-actions">
            <button class="card-action create-post-action" data-index="${index}" type="button">✦ Fertigen Post erstellen</button>
            <button class="card-action copy-action" data-index="${index}" type="button">□ Idee kopieren</button>
            <button class="card-action favorite-action ${isFavorite ? "active" : ""}" data-index="${index}" type="button">
              ${isFavorite ? "♥ Gespeichert" : "♡ Favorisieren"}
            </button>
          </div>
        </article>
      `;
    })
    .join("");

  document.querySelectorAll(".copy-action").forEach((button) => {
    button.addEventListener("click", () => copyIdea(currentIdeas[Number(button.dataset.index)]));
  });
  document.querySelectorAll(".create-post-action").forEach((button) => {
    button.addEventListener("click", () =>
      openPostStudio(currentIdeas[Number(button.dataset.index)]),
    );
  });
  document.querySelectorAll(".favorite-action").forEach((button) => {
    button.addEventListener("click", () =>
      toggleFavorite(currentIdeas[Number(button.dataset.index)]),
    );
  });
}

function ideaAsText(idea) {
  return `${idea.title}

Hook: ${idea.hook}

Konzept: ${idea.concept}

Fokus: ${idea.subtheme}
Aufhänger: ${idea.occasion}
Perspektive: ${idea.protagonist}
Schauplatz: ${idea.setting}
Beleg: ${idea.proof}
Bildidee: ${idea.visualApproach}

Format: ${idea.format} für ${idea.platform}
CTA: ${idea.cta}
Warum es funktioniert: ${idea.strength}

${idea.hashtags.join(" ")}`;
}

function createCaption(idea, tone = "nahbar") {
  const intros = {
    nahbar: [
      "Manches nutzen wir jeden Tag – ohne zu sehen, wie viel dahintersteckt.",
      "Schon mal darüber nachgedacht, was hinter unserem Alltag eigentlich passiert?",
      "Energie und Infrastruktur klingen technisch. Dabei erzählen sie Geschichten über uns alle.",
    ],
    sachlich: [
      "Gut versorgt zu sein, beginnt mit verlässlicher Infrastruktur und klarem Wissen.",
      "Ein kompakter Blick auf ein Thema, das unseren Alltag jeden Tag begleitet:",
      "Zahlen, Technik und regionale Verantwortung – verständlich zusammengefasst.",
    ],
    aktivierend: [
      "Stopp kurz: Hättest du das gewusst?",
      "Zeit für einen schnellen Faktencheck.",
      "Teste dein Wissen – die Auflösung überrascht.",
    ],
  };
  const seed = hash(`${idea.title}-${tone}-${studioVariant}`);
  const intro = pick(intros[tone] || intros.nahbar, seed);
  const cleanHook = idea.hook.replace(/^„|“$/g, "");
  return `${intro}

${cleanHook}

${idea.concept}

${idea.cta}

${idea.hashtags.join(" ")}`;
}

function studioSlideCount(idea) {
  if (idea.format === "Carousel") return 4;
  if (idea.format === "Reel" || idea.format === "Story") return 3;
  return 1;
}

function visualDimensions(idea) {
  return idea.format === "Reel" || idea.format === "Story"
    ? { width: 1080, height: 1920 }
    : { width: 1080, height: 1350 };
}

function slideContent(idea, slideIndex) {
  const content = [
    {
      kicker: idea.topic,
      title: idea.title,
      body: idea.hook.replace(/^„|“$/g, ""),
      marker: "01",
    },
    {
      kicker: "GUT ZU WISSEN",
      title: idea.concept.split(".")[0],
      body: "Ein Blick hinter die Kulissen unserer regionalen Energie- und Infrastrukturwelt.",
      marker: "02",
    },
    {
      kicker: "REGIONAL GEDACHT",
      title: "Was das für unsere Region bedeutet",
      body: idea.strength.split(".")[0] + ".",
      marker: "03",
    },
    {
      kicker: "DEINE MEINUNG",
      title: idea.cta,
      body: idea.hashtags.join("  "),
      marker: "04",
    },
  ];
  return content[slideIndex] || content[0];
}

function getVisualPalette(topic, style) {
  if (style === "bold") return ["#e95e0f", "#101010", "#ffffff"];
  if (style === "natural") return ["#be3b4a", "#101010", "#f5f5f5"];
  return ["#0090d4", "#101010", "#ffffff"];
}

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.roundRect(x, y, width, height, radius);
  ctx.fill();
}

function wrapCanvasText(ctx, text, maxWidth, maxLines = 5) {
  const words = String(text).split(/\s+/);
  const lines = [];
  let line = "";
  words.forEach((word) => {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  });
  if (line) lines.push(line);
  if (lines.length > maxLines) {
    const trimmed = lines.slice(0, maxLines);
    trimmed[maxLines - 1] = `${trimmed[maxLines - 1].replace(/[.,;:]?$/, "")} …`;
    return trimmed;
  }
  return lines;
}

function designKey(idea, slideIndex) {
  return `${idea.id}:${slideIndex}`;
}

function createDefaultDesign(idea, slideIndex) {
  const { width, height } = visualDimensions(idea);
  const content = slideContent(idea, slideIndex);
  const panelY = height > 1500 ? height * 0.55 : height * 0.52;
  const accent = getVisualPalette(idea.topic, document.querySelector("#visualStyle").value)[0];
  return {
    image: {
      zoom: 1,
      offsetX: 0,
      offsetY: 0,
      brightness: 1,
      visible: true,
      customSrc: null,
      mediaIndex: ((idea.mediaIndex || 0) + slideIndex) % getMediaOptions(idea.topic).length,
    },
    logo: {
      x: 76, y: 104, text: "eins", size: 58, color: "#ffffff",
      font: "Urbanist", spacing: 0, weight: 900, opacity: 1, visible: true, align: "left", maxWidth: 300,
    },
    kicker: {
      x: 76, y: panelY, text: content.kicker.toUpperCase(), size: 24,
      color: "#ffffff", background: accent, font: "Urbanist", spacing: 1, weight: 700, opacity: 1, visible: true,
      align: "left", maxWidth: 430,
    },
    title: {
      x: 76, y: panelY + 135, text: content.title,
      size: height > 1500 ? 82 : 70, color: "#ffffff", font: "Urbanist", spacing: 0, weight: 900, opacity: 1,
      visible: true, align: "left", maxWidth: width - 152,
    },
    body: {
      x: 78, y: panelY + (height > 1500 ? 570 : 420), text: content.body,
      size: height > 1500 ? 38 : 31, color: "#ffffff", font: "Urbanist", spacing: 0, weight: 600, opacity: 0.82,
      visible: true, align: "left", maxWidth: width - 156,
    },
    footer: {
      x: 76, y: height - 72,
      text: "#einsvoraus  ·  Energie für Chemnitz und Südsachsen",
      size: 24, color: "#ffffff", font: "Urbanist", spacing: 0, weight: 700, opacity: 1, visible: true,
      align: "left", maxWidth: width - 152,
    },
  };
}

function getStudioDesign(idea = activeStudioIdea, slideIndex = activeStudioSlide) {
  if (!idea) return null;
  const key = designKey(idea, slideIndex);
  if (!studioDesigns.has(key)) {
    const design = createDefaultDesign(idea, slideIndex);
    studioDesigns.set(key, design);
    studioDesignInitials.set(key, JSON.parse(JSON.stringify(design)));
  }
  return studioDesigns.get(key);
}

function cloneCurrentDesign() {
  return JSON.parse(JSON.stringify(getStudioDesign()));
}

function restoreCurrentDesign(snapshot) {
  studioDesigns.set(designKey(activeStudioIdea, activeStudioSlide), JSON.parse(JSON.stringify(snapshot)));
  renderStudioVisual(false);
  syncEditorControls();
}

function pushStudioHistory() {
  if (!activeStudioIdea) return;
  studioUndoStack.push(cloneCurrentDesign());
  if (studioUndoStack.length > 40) studioUndoStack.shift();
  studioRedoStack = [];
  updateHistoryButtons();
}

function updateHistoryButtons() {
  document.querySelector("#undoDesign").disabled = studioUndoStack.length === 0;
  document.querySelector("#redoDesign").disabled = studioRedoStack.length === 0;
}

function layerLabel(layer) {
  return {
    image: "Foto",
    logo: "Logo",
    kicker: "Themenlabel",
    title: "Titel",
    body: "Unterzeile",
    footer: "Fußzeile",
  }[layer] || layer;
}

function selectStudioLayer(layer) {
  stopStudioAnimation();
  selectedStudioLayer = layer;
  document.querySelector("#selectedLayerName").textContent = layerLabel(layer);
  document.querySelectorAll("#layerList button").forEach((button) => {
    button.classList.toggle("active", button.dataset.layer === layer);
  });
  syncEditorControls();
  drawStudioSlide(document.querySelector("#postCanvas"), activeStudioIdea, activeStudioSlide);
}

function syncEditorControls() {
  if (!activeStudioIdea) return;
  const design = getStudioDesign();
  const imageMode = selectedStudioLayer === "image";
  document.querySelector("#textElementControls").hidden = imageMode;
  document.querySelector("#imageElementControls").hidden = !imageMode;
  if (imageMode) {
    document.querySelector("#imageZoom").value = Math.round(design.image.zoom * 100);
    document.querySelector("#imageZoomValue").textContent = `${Math.round(design.image.zoom * 100)}%`;
    document.querySelector("#imageBrightness").value = Math.round(design.image.brightness * 100);
    document.querySelector("#imageBrightnessValue").textContent = `${Math.round(design.image.brightness * 100)}%`;
    renderMediaBrowser();
  } else {
    const layer = design[selectedStudioLayer];
    if (!layer) return;
    document.querySelector("#elementText").value = layer.text;
    document.querySelector("#elementColor").value = layer.color;
    document.querySelector("#elementColorHex").textContent = layer.color.toUpperCase();
    document.querySelectorAll("#colorSwatches button").forEach((button) => {
      button.classList.toggle("active", button.dataset.color.toLowerCase() === layer.color.toLowerCase());
    });
    document.querySelector("#elementAlign").value = layer.align;
    document.querySelector("#elementFont").value = layer.font || "Urbanist";
    document.querySelector("#elementWeight").value = String(layer.weight || 700);
    document.querySelector("#elementSize").value = layer.size;
    document.querySelector("#elementSizeValue").textContent = layer.size;
    document.querySelector("#elementOpacity").value = Math.round(layer.opacity * 100);
    document.querySelector("#elementOpacityValue").textContent = `${Math.round(layer.opacity * 100)}%`;
    document.querySelector("#elementSpacing").value = layer.spacing || 0;
    document.querySelector("#elementSpacingValue").textContent = layer.spacing || 0;
    const hasBackground = selectedStudioLayer === "kicker";
    document.querySelector("#backgroundColorControl").hidden = !hasBackground;
    if (hasBackground) {
      document.querySelector("#elementBackground").value = layer.background;
      document.querySelector("#elementBackgroundHex").textContent = layer.background.toUpperCase();
    }
    document.querySelector("#toggleLayerVisibility").textContent =
      layer.visible ? "◉ Ebene ausblenden" : "○ Ebene einblenden";
  }
  updateHistoryButtons();
}

function selectedMediaPath() {
  if (!activeStudioIdea) return "";
  const design = getStudioDesign();
  if (design.image.customSrc) return design.image.customSrc;
  const options = getMediaOptions(activeStudioIdea.topic);
  return options[((design.image.mediaIndex % options.length) + options.length) % options.length];
}

function renderMediaBrowser() {
  if (!activeStudioIdea) return;
  const design = getStudioDesign();
  const options = getMediaOptions(activeStudioIdea.topic);
  const currentIndex = ((design.image.mediaIndex % options.length) + options.length) % options.length;
  document.querySelector("#mediaCounter").textContent =
    design.image.customSrc ? "Eigenes Foto" : `${currentIndex + 1} von ${options.length}`;
  document.querySelector("#mediaThumbnails").innerHTML = options
    .map(
      (path, index) => `
        <button
          type="button"
          class="media-thumbnail ${!design.image.customSrc && index === currentIndex ? "active" : ""}"
          data-media-index="${index}"
          aria-label="Motiv ${index + 1} auswählen"
        >
          <img src="${path}" alt="" loading="lazy" />
        </button>
      `,
    )
    .join("");
  document.querySelectorAll(".media-thumbnail").forEach((button) => {
    button.addEventListener("click", () => chooseMedia(Number(button.dataset.mediaIndex)));
  });
}

function chooseMedia(index) {
  if (!activeStudioIdea) return;
  pushStudioHistory();
  const design = getStudioDesign();
  design.image.mediaIndex = index;
  design.image.customSrc = null;
  design.image.offsetX = 0;
  design.image.offsetY = 0;
  design.image.zoom = 1;
  renderStudioVisual(false);
  selectStudioLayer("image");
}

function stepMedia(direction) {
  if (!activeStudioIdea) return;
  const options = getMediaOptions(activeStudioIdea.topic);
  const design = getStudioDesign();
  const currentIndex = design.image.customSrc ? 0 : design.image.mediaIndex;
  chooseMedia((currentIndex + direction + options.length) % options.length);
}

function drawImageCover(ctx, image, width, height, slideIndex, progress, imageState) {
  const baseScale = Math.max(width / image.width, height / image.height);
  const zoom = imageState.zoom + slideIndex * 0.018 + progress * 0.012;
  const drawWidth = image.width * baseScale * zoom;
  const drawHeight = image.height * baseScale * zoom;
  const travelX = Math.max(0, drawWidth - width);
  const travelY = Math.max(0, drawHeight - height);
  const x = -travelX * Math.min(0.82, 0.16 + slideIndex * 0.2) + imageState.offsetX;
  const y = -travelY * Math.min(0.75, 0.2 + slideIndex * 0.08) + imageState.offsetY;
  ctx.save();
  ctx.filter = `brightness(${imageState.brightness})`;
  ctx.drawImage(image, x, y, drawWidth, drawHeight);
  ctx.restore();
}

function drawStudioSlide(canvas, idea, slideIndex, progress = 1) {
  const ctx = canvas.getContext("2d");
  const { width, height } = visualDimensions(idea);
  canvas.width = width;
  canvas.height = height;
  const style = document.querySelector("#visualStyle").value;
  const [accent] = getVisualPalette(idea.topic, style);
  const reveal = Math.max(0, Math.min(1, progress));
  const design = getStudioDesign(idea, slideIndex);
  const isMainCanvas = canvas.id === "postCanvas";
  if (isMainCanvas) studioHitboxes = [];

  ctx.fillStyle = "#d7d7d7";
  ctx.fillRect(0, 0, width, height);
  const options = getMediaOptions(idea.topic);
  const mediaPath =
    design.image.customSrc ||
    options[((design.image.mediaIndex % options.length) + options.length) % options.length] ||
    topicMedia["Region & Engagement"];
  const media = loadedMedia.get(mediaPath);
  if (media && design.image.visible) {
    drawImageCover(ctx, media, width, height, slideIndex, reveal, design.image);
  } else {
    loadMedia(mediaPath).then((image) => {
      if (image && canvas.isConnected && activeStudioIdea?.id === idea.id) {
        drawStudioSlide(canvas, idea, slideIndex, progress);
      }
    });
  }

  const shade = ctx.createLinearGradient(0, 0, 0, height);
  shade.addColorStop(0, "rgba(0,0,0,.14)");
  shade.addColorStop(0.42, "rgba(0,0,0,.03)");
  shade.addColorStop(1, "rgba(0,0,0,.88)");
  ctx.fillStyle = shade;
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = accent;
  ctx.fillRect(0, 0, 18, height);

  if (design.logo.visible) {
    const layer = design.logo;
    ctx.save();
    ctx.globalAlpha = layer.opacity;
    ctx.fillStyle = layer.color;
    ctx.textAlign = layer.align;
    ctx.font = `${layer.weight || 900} ${layer.size}px "${layer.font || "Urbanist"}", Arial`;
    ctx.letterSpacing = `${layer.spacing || 0}px`;
    ctx.fillText(layer.text, layer.x, layer.y);
    ctx.fillStyle = "#e95e0f";
    ctx.beginPath();
    ctx.arc(layer.x + layer.size * 0.69, layer.y - layer.size * 0.91, layer.size * 0.14, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = `600 ${Math.max(14, layer.size * 0.38)}px Urbanist, Arial`;
    ctx.fillStyle = layer.color;
    ctx.fillText("energie in sachsen", layer.x + 2, layer.y + layer.size * 0.55);
    ctx.restore();
    if (isMainCanvas) studioHitboxes.push({ layer: "logo", x: layer.x - 8, y: layer.y - layer.size, width: 270, height: layer.size * 1.8 });
  }

  if (design.kicker.visible) {
    const layer = design.kicker;
    ctx.save();
    ctx.globalAlpha = layer.opacity * reveal;
    ctx.font = `${layer.weight || 700} ${layer.size}px "${layer.font || "Urbanist"}", Arial`;
    ctx.letterSpacing = `${layer.spacing || 0}px`;
    const kickerWidth = Math.min(layer.maxWidth, Math.max(210, ctx.measureText(layer.text).width + 52));
    ctx.fillStyle = layer.background || accent;
    roundedRect(ctx, layer.x, layer.y, kickerWidth, layer.size * 2.4, layer.size * 1.2);
    ctx.fillStyle = layer.color;
    ctx.textAlign = layer.align;
    const textX = layer.align === "center" ? layer.x + kickerWidth / 2 : layer.align === "right" ? layer.x + kickerWidth - 26 : layer.x + 26;
    ctx.fillText(layer.text, textX, layer.y + layer.size * 1.6);
    ctx.restore();
    if (isMainCanvas) studioHitboxes.push({ layer: "kicker", x: layer.x, y: layer.y, width: kickerWidth, height: layer.size * 2.4 });
  }

  ["title", "body"].forEach((layerName) => {
    const layer = design[layerName];
    if (!layer.visible) return;
    ctx.save();
    ctx.globalAlpha = layer.opacity * reveal;
    ctx.translate(0, (1 - reveal) * 40);
    ctx.fillStyle = layer.color;
    ctx.textAlign = layer.align;
    ctx.font = `${layer.weight || (layerName === "title" ? 900 : 600)} ${layer.size}px "${layer.font || "Urbanist"}", Arial`;
    ctx.letterSpacing = `${layer.spacing || 0}px`;
    const lines = wrapCanvasText(ctx, layer.text, layer.maxWidth, layerName === "title" ? 6 : 5);
    const lineHeight = layer.size * (layerName === "title" ? 1.12 : 1.42);
    const textX = layer.align === "center" ? layer.x + layer.maxWidth / 2 : layer.align === "right" ? layer.x + layer.maxWidth : layer.x;
    lines.forEach((line, index) => ctx.fillText(line, textX, layer.y + index * lineHeight));
    ctx.restore();
    if (isMainCanvas) studioHitboxes.push({
      layer: layerName,
      x: layer.x,
      y: layer.y - layer.size,
      width: layer.maxWidth,
      height: Math.max(layer.size * 1.25, lines.length * lineHeight),
    });
  });

  ctx.fillStyle = "#ffffff";
  ctx.globalAlpha = 0.15;
  ctx.font = `900 ${height > 1500 ? 250 : 200}px Urbanist, Arial`;
  ctx.fillText(String(slideIndex + 1).padStart(2, "0"), width - 350, height - 92);
  ctx.globalAlpha = 1;

  if (design.footer.visible) {
    const layer = design.footer;
    ctx.save();
    ctx.globalAlpha = layer.opacity;
    ctx.fillStyle = layer.color;
    roundedRect(ctx, layer.x, layer.y - 54, layer.maxWidth, 3, 2);
    ctx.font = `${layer.weight || 700} ${layer.size}px "${layer.font || "Urbanist"}", Arial`;
    ctx.letterSpacing = `${layer.spacing || 0}px`;
    ctx.textAlign = layer.align;
    const textX = layer.align === "center" ? layer.x + layer.maxWidth / 2 : layer.align === "right" ? layer.x + layer.maxWidth : layer.x;
    ctx.fillText(layer.text, textX, layer.y);
    ctx.restore();
    if (isMainCanvas) studioHitboxes.push({ layer: "footer", x: layer.x, y: layer.y - 62, width: layer.maxWidth, height: 75 });
  }

  if (isMainCanvas && selectedStudioLayer !== "image") {
    const selectedBox = studioHitboxes.find((box) => box.layer === selectedStudioLayer);
    if (selectedBox) {
      ctx.save();
      ctx.strokeStyle = "#00a6ef";
      ctx.lineWidth = 4;
      ctx.setLineDash([14, 9]);
      ctx.strokeRect(selectedBox.x - 10, selectedBox.y - 10, selectedBox.width + 20, selectedBox.height + 20);
      ctx.fillStyle = "#00a6ef";
      [[selectedBox.x - 10, selectedBox.y - 10], [selectedBox.x + selectedBox.width + 10, selectedBox.y + selectedBox.height + 10]].forEach(([x, y]) => {
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();
    }
  }
}

function renderSlideStrip() {
  const strip = document.querySelector("#slideStrip");
  const count = studioSlideCount(activeStudioIdea);
  strip.innerHTML = "";
  for (let index = 0; index < count; index += 1) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `slide-thumbnail ${index === activeStudioSlide ? "active" : ""}`;
    button.setAttribute("aria-label", `Motiv ${index + 1}`);
    const thumb = document.createElement("canvas");
    drawStudioSlide(thumb, activeStudioIdea, index);
    button.appendChild(thumb);
    button.addEventListener("click", () => {
      activeStudioSlide = index;
      stopStudioAnimation();
      studioUndoStack = [];
      studioRedoStack = [];
      selectedStudioLayer = "title";
      renderStudioVisual();
    });
    strip.appendChild(button);
  }
}

function stopStudioAnimation() {
  if (studioAnimationId) cancelAnimationFrame(studioAnimationId);
  studioAnimationId = null;
}

function startStudioAnimation() {
  stopStudioAnimation();
  studioAnimationStarted = performance.now();
  const canvas = document.querySelector("#postCanvas");
  const frame = (now) => {
    if (!activeStudioIdea || !document.querySelector("#postStudioDialog").open) return;
    const elapsed = (now - studioAnimationStarted) % 7500;
    const slide = Math.floor(elapsed / 2500);
    const localProgress = Math.min(1, (elapsed % 2500) / 650);
    activeStudioSlide = slide;
    drawStudioSlide(canvas, activeStudioIdea, slide, localProgress);
    document.querySelector("#studioSlideLabel").textContent = `Szene ${slide + 1} von 3`;
    studioAnimationId = requestAnimationFrame(frame);
  };
  studioAnimationId = requestAnimationFrame(frame);
}

function renderStudioVisual(animate = true) {
  if (!activeStudioIdea) return;
  const isVideo = activeStudioIdea.format === "Reel" || activeStudioIdea.format === "Story";
  const count = studioSlideCount(activeStudioIdea);
  const canvas = document.querySelector("#postCanvas");
  document.querySelector("#studioFormatBadge").textContent = activeStudioIdea.format;
  document.querySelector("#videoIndicator").hidden = !isVideo;
  document.querySelector("#studioSlideLabel").textContent =
    `${isVideo ? "Szene" : "Motiv"} ${activeStudioSlide + 1} von ${count}`;
  document.querySelector("#studioNote").textContent = isVideo
    ? "Die Vorschau nutzt ein echtes Themenmotiv. Der Drehplan darunter beschreibt drei reale Aufnahmen für das finale Reel."
    : count > 1
      ? "Alle Carousel-Slides können einzeln oder gemeinsam als PNG-Dateien heruntergeladen werden."
      : "Das Motiv wird lokal erstellt und kann direkt als PNG heruntergeladen werden.";
  document.querySelector("#downloadAssetButton").textContent = isVideo
    ? "↓ Video herunterladen"
    : count > 1
      ? "↓ Alle Bilder herunterladen"
      : "↓ Bild herunterladen";
  document.querySelector("#productionTitle").textContent = isVideo
    ? "Videoansatz mit 3 realen Szenen"
    : count > 1
      ? `${count} fertige Carousel-Slides`
      : "Veröffentlichungsfertiges Motiv";
  const shotlistPanel = document.querySelector("#shotlistPanel");
  shotlistPanel.hidden = !isVideo;
  if (isVideo) {
    const subject = {
      Photovoltaik: "PV-Anlage, Techniker:in und Hausbesitzende",
      Elektromobilität: "Ladesäule, Ladekabel und Fahrzeug",
      Windkraft: "Windanlage, Landschaft und Serviceeinsatz",
      Abwasser: "Klärbecken, Wasserprobe und Anlagenrundgang",
      Trinkwasser: "Wasserhahn, Qualitätskontrolle und Wasserwerk",
      Fernwärme: "Wärmeleitungen, Leitwarte und Technikteam",
      Gas: "Heizanlage, Servicekontrolle und warmes Zuhause",
      Strom: "Netzanlage, Schalthandlung und Techniker:in",
      "Berufe & Ausbildung": "Auszubildende, Anleitung und echter Arbeitsschritt",
    }[activeStudioIdea.topic] || "Menschen, Technik und regionaler Alltagsnutzen";
    document.querySelector("#shotlist").innerHTML = `
      <li><strong>0–2,5 s:</strong> Starker Establishing Shot – ${subject}.</li>
      <li><strong>2,5–5 s:</strong> Nahaufnahme eines echten Handgriffs oder technischen Details.</li>
      <li><strong>5–7,5 s:</strong> Menschlicher Nutzen und Abschlussfrage: „${escapeHtml(activeStudioIdea.cta)}“</li>
    `;
  }
  drawStudioSlide(canvas, activeStudioIdea, activeStudioSlide);
  renderSlideStrip();
  syncEditorControls();
  if (isVideo && animate) startStudioAnimation();
}

function openPostStudio(idea) {
  activeStudioIdea = idea;
  activeStudioSlide = 0;
  studioVariant = 0;
  const dialog = document.querySelector("#postStudioDialog");
  const tone = document.querySelector("#captionTone").value;
  const caption = document.querySelector("#captionText");
  caption.value = createCaption(idea, tone);
  studioUndoStack = [];
  studioRedoStack = [];
  selectedStudioLayer = "title";
  document.querySelector("#captionPlatform").textContent = `für ${idea.platform}`;
  updateCaptionLength();
  renderStudioVisual();
  dialog.showModal();
}

function updateCaptionLength() {
  const length = document.querySelector("#captionText").value.length;
  document.querySelector("#captionLength").textContent = `${length} Zeichen`;
}

function downloadCanvas(canvas, filename) {
  const link = document.createElement("a");
  link.download = filename;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

async function downloadStudioAssets() {
  if (!activeStudioIdea) return;
  const button = document.querySelector("#downloadAssetButton");
  const isVideo = activeStudioIdea.format === "Reel" || activeStudioIdea.format === "Story";
  const slug = activeStudioIdea.topic.toLowerCase().replace(/[^a-z0-9äöüß]+/gi, "-");
  const mediaPath = selectedMediaPath();
  await loadMedia(mediaPath);
  if (!isVideo) {
    stopStudioAnimation();
    const count = studioSlideCount(activeStudioIdea);
    for (let index = 0; index < count; index += 1) {
      const canvas = document.createElement("canvas");
      drawStudioSlide(canvas, activeStudioIdea, index);
      downloadCanvas(canvas, `eins-${slug}-${index + 1}.png`);
      if (count > 1) await new Promise((resolve) => setTimeout(resolve, 180));
    }
    showToast(count > 1 ? `${count} Bilder wurden erstellt.` : "Bild wurde erstellt.");
    return;
  }

  if (!window.MediaRecorder || !HTMLCanvasElement.prototype.captureStream) {
    showToast("Video-Export wird von diesem Browser nicht unterstützt.");
    return;
  }
  button.disabled = true;
  button.textContent = "Video wird erstellt …";
  stopStudioAnimation();
  const exportCanvas = document.createElement("canvas");
  const stream = exportCanvas.captureStream(30);
  const mimeType = MediaRecorder.isTypeSupported("video/webm;codecs=vp9")
    ? "video/webm;codecs=vp9"
    : "video/webm";
  const recorder = new MediaRecorder(stream, { mimeType, videoBitsPerSecond: 7000000 });
  const chunks = [];
  recorder.ondataavailable = (event) => {
    if (event.data.size) chunks.push(event.data);
  };
  const completed = new Promise((resolve) => {
    recorder.onstop = resolve;
  });
  recorder.start();
  const duration = 7500;
  const started = performance.now();
  await new Promise((resolve) => {
    const drawFrame = (now) => {
      const elapsed = now - started;
      const slide = Math.min(2, Math.floor(elapsed / 2500));
      const progress = Math.min(1, (elapsed % 2500) / 650);
      drawStudioSlide(exportCanvas, activeStudioIdea, slide, progress);
      if (elapsed < duration) requestAnimationFrame(drawFrame);
      else resolve();
    };
    requestAnimationFrame(drawFrame);
  });
  recorder.stop();
  await completed;
  const blob = new Blob(chunks, { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `eins-${slug}-video.webm`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  button.disabled = false;
  button.textContent = "↓ Video herunterladen";
  startStudioAnimation();
  showToast("Video wurde erstellt.");
}

async function copyIdea(idea) {
  try {
    await navigator.clipboard.writeText(ideaAsText(idea));
    showToast("Idee in die Zwischenablage kopiert.");
  } catch {
    showToast("Kopieren war im Browser nicht möglich.");
  }
}

function toggleFavorite(idea) {
  const index = favorites.findIndex((favorite) => favorite.title === idea.title);
  if (index >= 0) {
    favorites.splice(index, 1);
    showToast("Aus Favoriten entfernt.");
  } else {
    favorites.unshift(idea);
    showToast("Idee gespeichert.");
  }
  persistFavorites();
  renderIdeas();
}

function persistFavorites() {
  localStorage.setItem("eins-ideen-favorites", JSON.stringify(favorites));
  document.querySelector("#favoriteCount").textContent = favorites.length;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove("show"), 2200);
}

function renderFavorites() {
  const list = document.querySelector("#favoritesList");
  if (!favorites.length) {
    list.innerHTML = `<div class="no-favorites">Noch keine Favoriten – speichere gute Ideen mit dem Herz.</div>`;
    return;
  }
  list.innerHTML = favorites
    .map(
      (favorite, index) => `
        <div class="favorite-item">
          <strong>${escapeHtml(favorite.title)}</strong>
          <p>${escapeHtml(favorite.hook)} · ${escapeHtml(favorite.format)}</p>
          <button type="button" data-favorite-index="${index}">Entfernen</button>
        </div>
      `,
    )
    .join("");
  list.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      favorites.splice(Number(button.dataset.favoriteIndex), 1);
      persistFavorites();
      renderFavorites();
      renderIdeas();
    });
  });
}

function exportIdeas() {
  const exportData = currentIdeas.length ? currentIdeas : favorites;
  if (!exportData.length) {
    showToast("Erst Ideen generieren oder favorisieren.");
    return;
  }
  const headers = [
    "Thema", "Unterthema", "Content-Säule", "Mechanik", "Anlass", "Perspektive",
    "Schauplatz", "Beleg", "Bildidee", "Format", "Plattform", "Titel", "Hook",
    "Konzept", "CTA", "Hashtags",
  ];
  const rows = exportData.map((idea) => [
    idea.topic,
    idea.subtheme,
    idea.pillar,
    idea.mechanic,
    idea.occasion,
    idea.protagonist,
    idea.setting,
    idea.proof,
    idea.visualApproach,
    idea.format,
    idea.platform,
    idea.title,
    idea.hook,
    idea.concept,
    idea.cta,
    idea.hashtags.join(" "),
  ]);
  const csv = [headers, ...rows]
    .map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(";"))
    .join("\n");
  const blob = new Blob([`\ufeff${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `eins-content-ideen-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
  showToast("CSV-Export wurde erstellt.");
}

document.querySelector("#customTopicForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#customTopicInput");
  const name = input.value.trim();
  if (!name) return;
  if (topics.some((topic) => topic.name.toLowerCase() === name.toLowerCase())) {
    showToast("Dieses Thema gibt es bereits.");
    return;
  }
  topics.push({ name, icon: "＋", keywords: [name.replaceAll(" ", ""), "EINSEnergie"] });
  selectedTopics.add(name);
  input.value = "";
  renderTopics();
  showToast(`„${name}“ wurde ergänzt.`);
});

document.querySelector("#selectAllTopics").addEventListener("click", () => {
  const allSelected = selectedTopics.size === topics.length;
  selectedTopics = allSelected ? new Set() : new Set(topics.map((topic) => topic.name));
  document.querySelector("#selectAllTopics").textContent = allSelected ? "Alle wählen" : "Auswahl leeren";
  renderTopics();
});

document.querySelector("#topicSearchInput").addEventListener("input", (event) => {
  topicSearchTerm = event.target.value.trim();
  renderTopics();
});

document.querySelector("#surpriseTopics").addEventListener("click", () => {
  const shuffled = [...topics].sort(() => Math.random() - 0.5);
  selectedTopics = new Set(shuffled.slice(0, 8).map((topic) => topic.name));
  topicSearchTerm = "";
  document.querySelector("#topicSearchInput").value = "";
  renderTopics();
  showToast("8 abwechslungsreiche Themen wurden ausgewählt.");
});

document.querySelectorAll(".format-option").forEach((button) => {
  button.addEventListener("click", () => button.classList.toggle("active"));
});

["virality", "regionality", "expertise", "emotion"].forEach((id) => {
  const slider = document.querySelector(`#${id}`);
  const output = document.querySelector(`#${id}Value`);
  slider.addEventListener("input", () => {
    output.textContent = slider.value;
  });
});

document.querySelector("#generateButton").addEventListener("click", generateIdeas);
document.querySelector("#refreshButton").addEventListener("click", generateIdeas);
document.querySelector("#demoButton").addEventListener("click", generateIdeas);
document.querySelector("#exportButton").addEventListener("click", exportIdeas);

const favoritesDialog = document.querySelector("#favoritesDialog");
document.querySelector("#favoritesButton").addEventListener("click", () => {
  renderFavorites();
  favoritesDialog.showModal();
});
document.querySelector("#closeFavorites").addEventListener("click", () => favoritesDialog.close());
favoritesDialog.addEventListener("click", (event) => {
  if (event.target === favoritesDialog) favoritesDialog.close();
});

const postStudioDialog = document.querySelector("#postStudioDialog");
document.querySelector("#closePostStudio").addEventListener("click", () => postStudioDialog.close());
postStudioDialog.addEventListener("close", stopStudioAnimation);
postStudioDialog.addEventListener("click", (event) => {
  if (event.target === postStudioDialog) postStudioDialog.close();
});
document.querySelector("#captionText").addEventListener("input", updateCaptionLength);
document.querySelector("#captionTone").addEventListener("change", () => {
  if (!activeStudioIdea) return;
  document.querySelector("#captionText").value = createCaption(
    activeStudioIdea,
    document.querySelector("#captionTone").value,
  );
  updateCaptionLength();
});
document.querySelector("#visualStyle").addEventListener("change", renderStudioVisual);
document.querySelector("#regenerateVisual").addEventListener("click", () => {
  studioVariant += 1;
  document.querySelector("#captionText").value = createCaption(
    activeStudioIdea,
    document.querySelector("#captionTone").value,
  );
  updateCaptionLength();
  renderStudioVisual();
});
document.querySelector("#copyCaptionButton").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(document.querySelector("#captionText").value);
    showToast("Caption wurde kopiert.");
  } catch {
    showToast("Kopieren war im Browser nicht möglich.");
  }
});
document.querySelector("#downloadAssetButton").addEventListener("click", downloadStudioAssets);

document.querySelectorAll("#layerList button").forEach((button) => {
  button.addEventListener("click", () => selectStudioLayer(button.dataset.layer));
});

document.querySelector("#undoDesign").addEventListener("click", () => {
  if (!studioUndoStack.length) return;
  studioRedoStack.push(cloneCurrentDesign());
  restoreCurrentDesign(studioUndoStack.pop());
});

document.querySelector("#redoDesign").addEventListener("click", () => {
  if (!studioRedoStack.length) return;
  studioUndoStack.push(cloneCurrentDesign());
  restoreCurrentDesign(studioRedoStack.pop());
});

document.querySelector("#resetDesign").addEventListener("click", () => {
  if (!activeStudioIdea) return;
  pushStudioHistory();
  const key = designKey(activeStudioIdea, activeStudioSlide);
  restoreCurrentDesign(studioDesignInitials.get(key));
  showToast("Design wurde zurückgesetzt.");
});

function changeSelectedLayer(mutator) {
  if (!activeStudioIdea) return;
  pushStudioHistory();
  updateSelectedLayer(mutator, true);
}

function updateSelectedLayer(mutator, refreshStrip = false) {
  if (!activeStudioIdea) return;
  const design = getStudioDesign();
  mutator(selectedStudioLayer === "image" ? design.image : design[selectedStudioLayer]);
  drawStudioSlide(document.querySelector("#postCanvas"), activeStudioIdea, activeStudioSlide);
  if (refreshStrip) renderSlideStrip();
  syncEditorControls();
}

document.querySelector("#elementText").addEventListener("focus", pushStudioHistory);
document.querySelector("#elementText").addEventListener("input", (event) => {
  updateSelectedLayer((layer) => { layer.text = event.target.value; });
});
document.querySelector("#elementText").addEventListener("blur", renderSlideStrip);
document.querySelector("#elementColor").addEventListener("pointerdown", pushStudioHistory);
document.querySelector("#elementColor").addEventListener("input", (event) => {
  document.querySelector("#elementColorHex").textContent = event.target.value.toUpperCase();
  updateSelectedLayer((layer) => { layer.color = event.target.value; });
});
document.querySelectorAll("#colorSwatches button").forEach((button) => {
  button.addEventListener("click", () => {
    const color = button.dataset.color;
    changeSelectedLayer((layer) => { layer.color = color; });
  });
});
document.querySelector("#elementAlign").addEventListener("change", (event) => {
  changeSelectedLayer((layer) => { layer.align = event.target.value; });
});
document.querySelector("#elementFont").addEventListener("change", (event) => {
  changeSelectedLayer((layer) => { layer.font = event.target.value; });
});
document.querySelector("#elementWeight").addEventListener("change", (event) => {
  changeSelectedLayer((layer) => { layer.weight = Number(event.target.value); });
});
document.querySelector("#elementBackground").addEventListener("input", (event) => {
  document.querySelector("#elementBackgroundHex").textContent = event.target.value.toUpperCase();
  updateSelectedLayer((layer) => { layer.background = event.target.value; });
});
document.querySelector("#elementSize").addEventListener("pointerdown", pushStudioHistory);
document.querySelector("#elementSize").addEventListener("input", (event) => {
  document.querySelector("#elementSizeValue").textContent = event.target.value;
  updateSelectedLayer((layer) => { layer.size = Number(event.target.value); });
});
document.querySelector("#elementSize").addEventListener("change", renderSlideStrip);
document.querySelector("#elementOpacity").addEventListener("pointerdown", pushStudioHistory);
document.querySelector("#elementOpacity").addEventListener("input", (event) => {
  document.querySelector("#elementOpacityValue").textContent = `${event.target.value}%`;
  updateSelectedLayer((layer) => { layer.opacity = Number(event.target.value) / 100; });
});
document.querySelector("#elementOpacity").addEventListener("change", renderSlideStrip);
document.querySelector("#elementSpacing").addEventListener("pointerdown", pushStudioHistory);
document.querySelector("#elementSpacing").addEventListener("input", (event) => {
  document.querySelector("#elementSpacingValue").textContent = event.target.value;
  updateSelectedLayer((layer) => { layer.spacing = Number(event.target.value); });
});
document.querySelector("#elementSpacing").addEventListener("change", renderSlideStrip);
document.querySelector("#toggleLayerVisibility").addEventListener("click", () => {
  changeSelectedLayer((layer) => { layer.visible = !layer.visible; });
});
document.querySelector("#imageZoom").addEventListener("pointerdown", pushStudioHistory);
document.querySelector("#imageZoom").addEventListener("input", (event) => {
  document.querySelector("#imageZoomValue").textContent = `${event.target.value}%`;
  updateSelectedLayer((layer) => { layer.zoom = Number(event.target.value) / 100; });
});
document.querySelector("#imageZoom").addEventListener("change", renderSlideStrip);
document.querySelector("#imageBrightness").addEventListener("pointerdown", pushStudioHistory);
document.querySelector("#imageBrightness").addEventListener("input", (event) => {
  document.querySelector("#imageBrightnessValue").textContent = `${event.target.value}%`;
  updateSelectedLayer((layer) => { layer.brightness = Number(event.target.value) / 100; });
});
document.querySelector("#imageBrightness").addEventListener("change", renderSlideStrip);
document.querySelector("#previousMedia").addEventListener("click", () => stepMedia(-1));
document.querySelector("#nextMedia").addEventListener("click", () => stepMedia(1));
document.querySelector("#canvasPreviousMedia").addEventListener("click", () => stepMedia(-1));
document.querySelector("#canvasNextMedia").addEventListener("click", () => stepMedia(1));

document.querySelector("#customImageInput").addEventListener("change", (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const image = new Image();
    image.onload = () => {
      pushStudioHistory();
      loadedMedia.set(reader.result, image);
      const design = getStudioDesign();
      design.image.customSrc = reader.result;
      design.image.zoom = 1;
      design.image.offsetX = 0;
      design.image.offsetY = 0;
      renderStudioVisual(false);
      renderMediaBrowser();
      showToast("Eigenes Foto wurde eingesetzt.");
    };
    image.src = reader.result;
  };
  reader.readAsDataURL(file);
  event.target.value = "";
});

function canvasPoint(event) {
  const canvas = document.querySelector("#postCanvas");
  const rect = canvas.getBoundingClientRect();
  return {
    x: (event.clientX - rect.left) * (canvas.width / rect.width),
    y: (event.clientY - rect.top) * (canvas.height / rect.height),
  };
}

const postCanvas = document.querySelector("#postCanvas");
postCanvas.addEventListener("pointerdown", (event) => {
  if (!activeStudioIdea) return;
  stopStudioAnimation();
  const point = canvasPoint(event);
  const hit = [...studioHitboxes].reverse().find((box) =>
    point.x >= box.x && point.x <= box.x + box.width &&
    point.y >= box.y && point.y <= box.y + box.height,
  );
  const layerName = hit?.layer || "image";
  selectStudioLayer(layerName);
  pushStudioHistory();
  const design = getStudioDesign();
  const layer = layerName === "image" ? design.image : design[layerName];
  studioDrag = {
    layer: layerName,
    startX: point.x,
    startY: point.y,
    originalX: layerName === "image" ? layer.offsetX : layer.x,
    originalY: layerName === "image" ? layer.offsetY : layer.y,
  };
  postCanvas.setPointerCapture(event.pointerId);
});

postCanvas.addEventListener("pointermove", (event) => {
  if (!studioDrag) return;
  const point = canvasPoint(event);
  const design = getStudioDesign();
  const layer = studioDrag.layer === "image" ? design.image : design[studioDrag.layer];
  const dx = point.x - studioDrag.startX;
  const dy = point.y - studioDrag.startY;
  if (studioDrag.layer === "image") {
    layer.offsetX = studioDrag.originalX + dx;
    layer.offsetY = studioDrag.originalY + dy;
  } else {
    layer.x = studioDrag.originalX + dx;
    layer.y = studioDrag.originalY + dy;
  }
  drawStudioSlide(postCanvas, activeStudioIdea, activeStudioSlide);
});

function finishCanvasDrag() {
  if (!studioDrag) return;
  studioDrag = null;
  renderSlideStrip();
  syncEditorControls();
}

postCanvas.addEventListener("pointerup", finishCanvasDrag);
postCanvas.addEventListener("pointercancel", finishCanvasDrag);
postCanvas.addEventListener("dblclick", (event) => {
  if (!activeStudioIdea) return;
  const point = canvasPoint(event);
  const hit = [...studioHitboxes].reverse().find((box) =>
    point.x >= box.x && point.x <= box.x + box.width &&
    point.y >= box.y && point.y <= box.y + box.height,
  );
  if (!hit || hit.layer === "image") return;
  selectStudioLayer(hit.layer);
  const textField = document.querySelector("#elementText");
  textField.focus();
  textField.select();
});

renderTopics();
persistFavorites();
