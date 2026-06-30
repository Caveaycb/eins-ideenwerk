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
  { name: "Nachhaltigkeit", icon: "♧", keywords: ["Nachhaltigkeit", "Klimaschutz", "Zukunft"] },
  { name: "Region & Engagement", icon: "♡", keywords: ["Chemnitz", "Sachsen", "UnsereRegion"] },
  { name: "Berufe & Ausbildung", icon: "✦", keywords: ["Karriere", "Ausbildung", "TeamEnergie"] },
  { name: "Service & Sicherheit", icon: "✓", keywords: ["Service", "Sicherheit", "GutZuWissen"] },
  { name: "Wärmepumpen", icon: "♨", keywords: ["Wärmepumpe", "Heizen", "Wärmewende"] },
  { name: "Batteriespeicher", icon: "▣", keywords: ["Speicher", "Batterie", "Energiewende"] },
  { name: "Baustellen & Projekte", icon: "▲", keywords: ["Baustelle", "Projekt", "Infrastruktur"] },
  { name: "Zähler & Messwesen", icon: "◴", keywords: ["Zähler", "SmartMeter", "Verbrauch"] },
  { name: "Energiepreise & Markt", icon: "€", keywords: ["Energiepreis", "Energiemarkt", "Erklärt"] },
  { name: "Kommunale Wärmeplanung", icon: "⌘", keywords: ["Wärmeplanung", "Kommune", "Wärmewende"] },
  { name: "Kundenservice", icon: "☎", keywords: ["Kundenservice", "Hilfe", "EnergieIdeenwerk"] },
  { name: "Digitalisierung", icon: "⌘", keywords: ["Digitalisierung", "Innovation", "SmartCity"] },
  { name: "Netzleitstelle", icon: "⌁", keywords: ["Leitstelle", "Stromnetz", "Versorgung"] },
  { name: "Straßenbeleuchtung", icon: "◐", keywords: ["Licht", "SmartCity", "Kommune"] },
  { name: "Ladeinfrastruktur", icon: "⚡", keywords: ["Ladepark", "Ladesäule", "EMobilität"] },
  { name: "Kraft-Wärme-Kopplung", icon: "⚙", keywords: ["KWK", "Wärme", "Effizienz"] },
  { name: "Starkregen & Hochwasser", icon: "☔", keywords: ["Starkregen", "Hochwasser", "Vorsorge"] },
  { name: "Versorgungssicherheit", icon: "⬡", keywords: ["Versorgungssicherheit", "Krisenvorsorge", "Netze"] },
  { name: "Entstörung & Bereitschaft", icon: "!", keywords: ["Entstörung", "Bereitschaft", "Service"] },
  { name: "Rechnung verstehen", icon: "▤", keywords: ["Rechnung", "Energiepreis", "Service"] },
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
    "Schichtbeginn: 60 Sekunden im Arbeitsalltag eines Energie-Teams",
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

templates.push(
  {
    format: "Reel",
    mechanic: "Mini-Experiment",
    title: "{topic}: Wir testen eine Behauptung live",
    hook: "„Wir behaupten nichts – wir probieren es aus.“",
    concept: "Ein kontrolliertes, sicheres Mini-Experiment zu „{angle}“ mit Aufbau, Messung, Überraschungsmoment und fachlicher Einordnung.",
    cta: "Welche Behauptung sollen wir als Nächstes testen?",
    strength: "Live-Tests wirken glaubwürdig, weil sie Beobachtung vor Behauptung stellen.",
  },
  {
    format: "Carousel",
    mechanic: "Entscheidungsfehler",
    title: "Der Denkfehler bei {topic}, der teuer werden kann",
    hook: "Folie 1: „Klingt logisch – ist aber oft falsch.“",
    concept: "Ein häufiger Denkfehler zu „{angle}“ wird zerlegt: Annahme, Realität, bessere Frage, konkreter nächster Schritt.",
    cta: "Speichern, bevor du die nächste Entscheidung triffst.",
    strength: "Denkfehler-Formate liefern Nutzwert ohne belehrend zu wirken.",
  },
  {
    format: "Post",
    mechanic: "Objektgeschichte",
    title: "Dieses eine Bauteil erklärt {topic}",
    hook: "„Sieht unscheinbar aus – ist aber entscheidend.“",
    concept: "Ein echtes Bauteil oder Werkzeug wird fotografisch stark inszeniert und erklärt „{angle}“ über Funktion, Risiko und Nutzen.",
    cta: "Welches Bauteil sollen wir als Nächstes erklären?",
    strength: "Ein konkretes Objekt macht abstrakte Energie-Infrastruktur sofort greifbar.",
  },
  {
    format: "Reel",
    mechanic: "Drei Rollen",
    title: "{topic} aus drei Blickwinkeln",
    hook: "„Kund:in, Fachteam, Region – alle sehen etwas anderes.“",
    concept: "Drei sehr kurze Perspektivwechsel zu „{angle}“: Alltagssorge, technische Lösung und regionaler Nutzen.",
    cta: "Welche Perspektive fehlt dir?",
    strength: "Perspektivwechsel erhöhen Relevanz für verschiedene Zielgruppen in einem Beitrag.",
  },
  {
    format: "Carousel",
    mechanic: "Fehlersuche",
    title: "Findest du den Fehler bei {topic}?",
    hook: "Folie 1: „Auf diesem Bild stimmt etwas nicht.“",
    concept: "Ein reales Szenario zu „{angle}“ wird als visuelle Fehlersuche aufgebaut, danach folgen Auflösung, Risiko und richtige Handlung.",
    cta: "Schreib in die Kommentare, was du zuerst entdeckt hast.",
    strength: "Fehlersuche bindet Aufmerksamkeit, ohne auf reinen Clickbait zu setzen.",
  },
  {
    format: "Story",
    mechanic: "Team-Abstimmung",
    title: "Das würde unser {topic}-Team wählen",
    hook: "„Option A oder B? Erst du, dann unser Fachteam.“",
    concept: "Die Community stimmt über eine Alltagssituation zu „{angle}“ ab; danach zeigt das Fachteam seine Wahl und begründet sie kurz.",
    cta: "Stimme ab – wir lösen morgen mit dem Team auf.",
    strength: "Abstimmungen schaffen Wiederkehr und machen Expertise zugänglich.",
  },
  {
    format: "Post",
    mechanic: "Unbequeme Wahrheit",
    title: "Die unbequeme Wahrheit über {topic}",
    hook: "„Die ehrliche Antwort ist: Es kommt darauf an.“",
    concept: "Ein Zielkonflikt zu „{angle}“ wird transparent erklärt: Was dafür spricht, was dagegen spricht und was das Energie-Ideenwerk konkret tut.",
    cta: "Welche Seite des Themas sollen wir ausführlicher erklären?",
    strength: "Ehrliche Zielkonflikte stärken Vertrauen stärker als glatte Werbeaussagen.",
  },
  {
    format: "Reel",
    mechanic: "Zeitreise",
    title: "{topic}: früher, heute, gleich morgen",
    hook: "„Drei Zeiten, ein Thema – und ein riesiger Unterschied.“",
    concept: "Eine schnelle Zeitreise zu „{angle}“ mit historischem Detail, heutigem Arbeitsmoment und nächstem Entwicklungsschritt.",
    cta: "Soll daraus eine kleine Serie werden?",
    strength: "Zeitreisen verbinden Nostalgie, Orientierung und Zukunftsbild.",
  },
);

const expertMechanicRows = [
  ["Reel", "Cold Open", "Der härteste Einstieg zu {topic}", "„Wenn du nur 3 Sekunden hast: Das hier zählt.“", "Startet ohne Intro direkt mit einem starken Bild zu „{angle}“, friert den Moment ein und erklärt erst danach, warum er relevant ist.", "Welcher Moment hätte dich gestoppt?"],
  ["Reel", "One-Take-Erklärung", "{topic} in einem einzigen Take", "„Kein Schnitt, keine Tricks – nur der echte Ablauf.“", "Eine Fachperson erklärt „{angle}“ während eines durchgehenden Wegs durch Anlage, Straße oder Haushalt.", "Soll das nächste Video wieder ungeschnitten sein?"],
  ["Reel", "Street-Test", "{topic}: Wir fragen auf der Straße", "„Was glaubst du, wie das wirklich funktioniert?“", "Passant:innen geben spontane Vermutungen zu „{angle}“ ab; danach löst das Fachteam kurz und freundlich auf.", "Was hättest du geantwortet?"],
  ["Reel", "Blind Ranking", "Ranke {topic}, ohne die Auflösung zu kennen", "„Platz 1 überrascht fast alle.“", "Mehrere Fakten oder Optionen zu „{angle}“ werden nacheinander bewertet, bevor die finale Rangfolge enthüllt wird.", "Welche Reihenfolge hättest du gewählt?"],
  ["Reel", "Mini-Tutorial", "{topic}: So machst du es richtig", "„Ein kleiner Handgriff, großer Unterschied.“", "Ein sicherer, alltagstauglicher Schritt zu „{angle}“ wird demonstriert, mit Fehlerbild und besserer Lösung.", "Speichern, wenn du es später brauchst."],
  ["Reel", "Reverse Story", "{topic} rückwärts erzählt", "„Wir starten beim Ergebnis – und gehen zurück zum Anfang.“", "Das fertige Ergebnis zu „{angle}“ wird zuerst gezeigt, danach wird rückwärts erklärt, welche Arbeit dahintersteckte.", "Sollten wir mehr Prozesse rückwärts erklären?"],
  ["Reel", "Expectation vs Reality", "{topic}: Erwartung vs. Realität", "„So stellen es sich viele vor – so ist es wirklich.“", "Zwei Szenen kontrastieren Klischee und Realität zu „{angle}“, abschließend ordnet ein:e Expert:in ein.", "Welche Erwartung hattest du?"],
  ["Reel", "Tool Hero", "Dieses Werkzeug verändert {topic}", "„Ohne dieses Teil geht heute fast nichts.“", "Ein Werkzeug, Messgerät oder Bauteil zu „{angle}“ wird als Held des Videos vorgestellt.", "Welches Werkzeug sollen wir als Nächstes zeigen?"],
  ["Reel", "Risk Check", "Der Risiko-Check bei {topic}", "„Hier wird nicht improvisiert.“", "Das Team zeigt, welche Sicherheitsprüfung vor „{angle}“ passiert und warum sie wichtig ist.", "Welche Sicherheitsfrage interessiert dich?"],
  ["Reel", "Sound Quiz", "Erkennst du {topic} am Geräusch?", "„Ton an – was hörst du?“", "Drei echte Geräusche aus dem Arbeitsalltag zu „{angle}“ werden als Quiz eingesetzt und aufgelöst.", "Wie viele hast du erkannt?"],
  ["Reel", "Speedrun", "{topic} im Speedrun erklärt", "„Alles Wichtige in 20 Sekunden.“", "Schnelle, aber klare Erklärung zu „{angle}“ mit Timer, drei Kernpunkten und einem Merksatz.", "War das zu schnell oder genau richtig?"],
  ["Reel", "Slow TV", "{topic} ohne Hektik", "„Manchmal ist das Spannende genau das Ruhige.“", "Ein ruhiger, atmosphärischer Arbeitsmoment zu „{angle}“ mit Originalton und sehr wenig Text.", "Mehr ruhige Einblicke oder lieber schnelle Reels?"],
  ["Reel", "Comment Rescue", "Wir retten einen Kommentar zu {topic}", "„Gute Frage – falsche Annahme.“", "Ein kritischer Kommentar zu „{angle}“ wird wertschätzend aufgegriffen, korrigiert und praktisch beantwortet.", "Welche Aussage sollen wir prüfen?"],
  ["Reel", "Kid Explains", "Ein Kind fragt, Energie-Ideenwerk erklärt {topic}", "„Warum ist das eigentlich so?“", "Eine Kinderfrage zu „{angle}“ wird ernst genommen und mit einfachem Bildvergleich beantwortet.", "Welche Kinderfrage nehmen wir als Nächstes?"],
  ["Reel", "Senior Friendly", "{topic} ohne Fachwörter", "„So würde ich es meiner Oma erklären.“", "Eine komplexe Frage zu „{angle}“ wird bewusst langsam, klar und serviceorientiert erklärt.", "War die Erklärung verständlich?"],
  ["Reel", "Data Reveal", "Die Zahl hinter {topic}", "„Rate mal, wie viel dahintersteckt.“", "Eine Zahl zu „{angle}“ wird erst als Schätzfrage gezeigt und danach mit realem Bildmaterial erklärt.", "Wie nah lagst du?"],
  ["Reel", "Before the Call", "Bevor du wegen {topic} anrufst", "„Diese drei Infos helfen sofort.“", "Service-Reel mit Vorbereitungsschritten zu „{angle}“, damit Kund:innen schneller Hilfe bekommen.", "Speichern für den richtigen Moment."],
  ["Reel", "Micro Documentary", "Die 90-Sekunden-Doku zu {topic}", "„Ein kleines Thema, eine echte Geschichte.“", "Mini-Doku zu „{angle}“ mit Person, Problem, Arbeitsschritt, Ergebnis und kurzer Reflexion.", "Wen sollen wir als Nächstes begleiten?"],
  ["Reel", "Debunk Lab", "{topic} im Faktenlabor", "„Wir testen den Satz, den alle wiederholen.“", "Ein verbreiteter Satz zu „{angle}“ wird mit Messung, Vergleich und Fachstatement geprüft.", "Welcher Satz gehört ins Faktenlabor?"],
  ["Reel", "3-Level-Erklärung", "{topic} auf 3 Wissensstufen", "„Einmal leicht, einmal genau, einmal Profi.“", "Dasselbe Thema „{angle}“ wird für Einsteiger:innen, Interessierte und Fachfans erklärt.", "Welche Stufe war für dich ideal?"],
  ["Carousel", "Swipe-Checkliste", "{topic}: Die Checkliste zum Speichern", "„Wenn du nur eine Sache speicherst, dann diese.“", "Eine klare Schritt-für-Schritt-Checkliste zu „{angle}“ mit Ja/Nein-Punkten und Kontaktweg.", "Speichern und teilen, wenn es jemand brauchen könnte."],
  ["Carousel", "Fehlerkarte", "Die häufigsten Fehler bei {topic}", "„Fehler 3 sieht harmlos aus.“", "Jede Folie zeigt einen Fehler zu „{angle}“, warum er passiert und wie man ihn vermeidet.", "Welchen Fehler sollen wir genauer erklären?"],
  ["Carousel", "Mythos-Matrix", "{topic}: Mythos, Halbwahrheit oder Fakt?", "„Nicht alles ist falsch – aber vieles unvollständig.“", "Mehrere Aussagen zu „{angle}“ werden in drei Kategorien eingeordnet und knapp begründet.", "Welche Aussage fehlt in der Matrix?"],
  ["Carousel", "Kostenklarheit", "{topic}: Wo entstehen eigentlich Kosten?", "„Es ist selten nur ein einzelner Preis.“", "Der Kostenaufbau zu „{angle}“ wird in verständlichen Bausteinen und ohne Werbesprache erklärt.", "Welche Kostenfrage sollen wir als Nächstes aufdröseln?"],
  ["Carousel", "Entscheidungsbaum 2.0", "{topic}: Welche Lösung passt zu dir?", "„Starte bei Frage 1 und finde deinen Weg.“", "Interaktiver Entscheidungsbaum zu „{angle}“ mit Zielgruppenpfaden und neutralem Fazit.", "Speichern für deine nächste Entscheidung."],
  ["Carousel", "Mini-Glossar", "7 Begriffe zu {topic}, die endlich Sinn ergeben", "„Kurz erklärt, ohne Fachchinesisch.“", "Sieben Begriffe zu „{angle}“ werden mit Alltagsvergleich, Bildidee und Mini-Beispiel erklärt.", "Welcher Begriff braucht eine eigene Folge?"],
  ["Carousel", "Anatomie", "Die Anatomie von {topic}", "„Einmal auseinandernehmen, bitte.“", "Ein Objekt, Prozess oder System zu „{angle}“ wird in seine Bestandteile zerlegt.", "Welches Detail überrascht dich?"],
  ["Carousel", "Davor-Danach-Dazwischen", "{topic}: Was zwischen vorher und nachher passiert", "„Das Ergebnis sieht man – den Weg selten.“", "Vorher, Zwischenschritte und Ergebnis zu „{angle}“ werden mit realistischem Aufwand gezeigt.", "Sollten wir öfter Zwischenschritte zeigen?"],
  ["Carousel", "FAQ Brutal Ehrlich", "{topic}: ehrliche Antworten auf echte Fragen", "„Kurze Antwort: Es kommt darauf an. Lange Antwort: hier.“", "Fünf echte Fragen zu „{angle}“ werden transparent, differenziert und nicht werblich beantwortet.", "Welche Frage sollen wir hinzufügen?"],
  ["Carousel", "Pro Contra Fair", "{topic}: Was dafür und dagegen spricht", "„Gute Entscheidungen brauchen beide Seiten.“", "Ein Zielkonflikt zu „{angle}“ wird fair mit Vorteilen, Grenzen und Empfehlungskriterien erklärt.", "Welche Perspektive fehlt?"],
  ["Carousel", "Regionale Karte", "{topic} auf der Karte", "„Diese Orte hängen zusammen.“", "Eine regionale Strecke, Anlage oder Zuständigkeit zu „{angle}“ wird kartografisch erzählt.", "Welchen Ort sollen wir markieren?"],
  ["Carousel", "Zeitstrahl", "{topic}: Von der Idee bis zur Umsetzung", "„So lange dauert Fortschritt wirklich.“", "Ein Zeitstrahl zu „{angle}“ zeigt Planung, Genehmigung, Bau, Prüfung und Betrieb.", "Wo hättest du den größten Aufwand erwartet?"],
  ["Carousel", "Wenn-Dann-Karten", "{topic}: Wenn das passiert, dann tu das", "„Speicherbar für den Ernstfall.“", "Situative Karten zu „{angle}“ erklären richtige Reaktion, Kontaktweg und Warnzeichen.", "Teile es mit deinem Haushalt."],
  ["Carousel", "Vergleich im Alltag", "{topic} verglichen mit Alltagsdingen", "„So wird die Größenordnung endlich greifbar.“", "Kennzahlen zu „{angle}“ werden mit Badewannen, Fahrrädern, Häusern oder Wegen verglichen.", "Welcher Vergleich hilft dir am meisten?"],
  ["Carousel", "Community-Auswertung", "Das fragt ihr zu {topic}", "„Wir haben eure Fragen sortiert.“", "Community-Fragen zu „{angle}“ werden geclustert: Sorge, Kosten, Technik, Alltag, Zukunft.", "Welche Kategorie fehlt?"],
  ["Carousel", "Ampel-Guide", "{topic}: Grün, Gelb oder Rot?", "„So erkennst du, was unkritisch ist – und was nicht.“", "Eine Ampel-Logik zu „{angle}“ erklärt sichere, prüfbedürftige und kritische Situationen.", "Speichern für später."],
  ["Carousel", "Behind the Number", "Was hinter dieser {topic}-Zahl steckt", "„Eine Zahl allein erzählt nie die ganze Geschichte.“", "Eine Kennzahl zu „{angle}“ wird in Ursprung, Bedeutung, Grenze und Alltag übersetzt.", "Welche Zahl sollen wir entpacken?"],
  ["Carousel", "Saisonkalender", "{topic}: Was wann wichtig wird", "„Der richtige Tipp zur richtigen Jahreszeit.“", "Monats- oder Saisonlogik zu „{angle}“ mit passenden Handlungen, Risiken und Chancen.", "Welcher Monat fehlt dir?"],
  ["Carousel", "Falsche Freunde", "{topic}: Begriffe, die ähnlich klingen", "„Klingt gleich, meint aber etwas anderes.“", "Verwechslungsbegriffe rund um „{angle}“ werden sauber getrennt und mit Beispielen erklärt.", "Welches Begriffspaar sollen wir ergänzen?"],
  ["Carousel", "Projekt-Tagebuch", "{topic}: Update von der Baustelle", "„Was sich seit dem letzten Mal getan hat.“", "Ein laufendes Projekt zu „{angle}“ bekommt Status, nächste Schritte, Einschränkungen und Nutzen.", "Welche Info wünschst du dir bei Updates?"],
  ["Story", "Quiz-Kette", "{topic}: 5 Fragen, 5 Auflösungen", "„Erst tippen, dann staunen.“", "Eine Story-Serie zu „{angle}“ mit Abstimmung, Auflösung und Mini-Lerneffekt pro Frame.", "Schick uns deine Punktzahl."],
  ["Story", "This or That", "{topic}: A oder B?", "„Was würdest du wählen?“", "Zwei Optionen zu „{angle}“ werden gegeneinander gestellt, danach folgt die fachliche Einordnung.", "Stimme ab und vergleiche mit dem Team."],
  ["Story", "Fragensticker Spezial", "{topic}: Frag die Leitstelle", "„Heute antwortet das Team direkt.“", "Fragensticker mit klarer thematischer Grenze zu „{angle}“ und späterer Antwortsammlung.", "Schick deine Frage anonym rein."],
  ["Story", "Schieberegler", "{topic}: Wie sicher bist du dir?", "„0 bis 100: Was glaubst du?“", "Ein Schätz-Slider zu „{angle}“ erzeugt Interaktion, danach wird die richtige Größenordnung erklärt.", "Wie nah war dein Bauchgefühl?"],
  ["Story", "Choose the Shoot", "Bestimme den nächsten Dreh zu {topic}", "„Du entscheidest, wo wir hingehen.“", "Die Community wählt Ort, Person oder Detail für einen kommenden Beitrag zu „{angle}“.", "Stimme ab – wir drehen die Gewinneridee."],
  ["Story", "Mini-Sprechstunde", "3 Antworten zu {topic}", "„Kurz gefragt, klar beantwortet.“", "Drei häufige Fragen zu „{angle}“ werden in Story-Frames beantwortet, mit Kontaktkarte am Ende.", "Welche Frage fehlt?"],
  ["Story", "Gerücht des Tages", "{topic}: Stimmt dieses Gerücht?", "„Wir lösen morgen auf.“", "Ein Gerücht zu „{angle}“ wird zur Abstimmung gestellt und später fachlich eingeordnet.", "Stimme ab und komm zur Auflösung zurück."],
  ["Story", "Blick hinter Tür", "Welche Tür zu {topic} sollen wir öffnen?", "„Tür 1, 2 oder 3?“", "Drei selten sichtbare Orte zu „{angle}“ werden als Abstimmung angeboten.", "Welche Tür gewinnt?"],
  ["Story", "Notfall-Entscheidung", "{topic}: Was würdest du tun?", "„Du hast 5 Sekunden.“", "Eine Alltagssituation zu „{angle}“ wird als Entscheidungsstory mit sicherer Auflösung gebaut.", "Teste eine zweite Person."],
  ["Story", "Emoji-Skala", "{topic}: Wie fühlt sich das an?", "„Welches Emoji passt?“", "Emotionale Wahrnehmung zu „{angle}“ wird abgefragt und anschließend sachlich aufgenommen.", "Welches Emoji fehlt?"],
  ["Story", "Vorher-Raten", "{topic}: Was passiert als Nächstes?", "„Rate den nächsten Schritt.“", "Ein Prozess zu „{angle}“ wird angehalten; die Community rät den nächsten Arbeitsschritt.", "Hättest du es gewusst?"],
  ["Story", "Team Takeover", "{topic}: Heute übernimmt das Team", "„Direkt aus dem Arbeitsalltag.“", "Ein Teammitglied begleitet den Tag zu „{angle}“ in kurzen Story-Häppchen.", "Welche Frage stellen wir dem Team?"],
  ["Story", "Slider vor Ort", "{topic}: Wie groß ist das wirklich?", "„Schätz mal.“", "Eine Anlage, Leitung oder Kennzahl zu „{angle}“ wird mit Slider und Größenvergleich aufgelöst.", "Warst du drüber oder drunter?"],
  ["Story", "Schnellumfrage", "{topic}: Was betrifft dich am meisten?", "„Eine Frage, vier Antworten.“", "Kurze Umfrage zu Bedürfnissen, Sorgen oder Interesse rund um „{angle}“.", "Deine Antwort hilft bei den nächsten Inhalten."],
  ["Story", "Mythos-Battle", "{topic}: Zwei Mythen, einer stimmt eher", "„Welcher ist näher an der Wahrheit?“", "Zwei Behauptungen zu „{angle}“ treten gegeneinander an, danach folgt eine differenzierte Auflösung.", "Welchen Mythos prüfen wir danach?"],
  ["Story", "Behind the Caption", "So entsteht unser Post zu {topic}", "„Vom Thema zur Veröffentlichung.“", "Die Entstehung eines Posts zu „{angle}“ wird als transparente Content-Werkstatt gezeigt.", "Sollten wir öfter zeigen, wie Inhalte entstehen?"],
  ["Post", "Hero Quote", "{topic}: Ein Satz aus dem Fachteam", "„Diesen Satz hört man nur, wenn man täglich damit arbeitet.“", "Ein starkes Zitat zu „{angle}“ wird mit Porträt, Kontext und fachlicher Einordnung veröffentlicht.", "Welcher Satz bleibt hängen?"],
  ["Post", "Foto mit Fußnote", "{topic}: Dieses Bild braucht eine Fußnote", "„Was man sieht – und was man nicht sieht.“", "Ein dokumentarisches Foto zu „{angle}“ bekommt eine präzise erklärende Bildunterschrift.", "Was hast du zuerst gesehen?"],
  ["Post", "Local Proof", "{topic}: Der regionale Beweis", "„Nicht irgendwo. Hier.“", "Ein konkreter Ort, Mensch oder Messpunkt zu „{angle}“ zeigt regionale Wirkung statt allgemeiner Aussage.", "Welchen Ort sollen wir zeigen?"],
  ["Post", "Mini-Kommentar", "Unser Standpunkt zu {topic}", "„Kurz, klar und ohne Ausweichen.“", "Ein redaktioneller Kommentar zu „{angle}“ benennt Haltung, Fakten und Zielkonflikt.", "Welche Frage soll unsere Haltung klären?"],
  ["Post", "Mitarbeitenden-Moment", "Der Mensch hinter {topic}", "„Heute zeigt uns jemand seinen wichtigsten Handgriff.“", "Ein:e Mitarbeiter:in steht mit einem realen Arbeitsschritt zu „{angle}“ im Mittelpunkt.", "Sag dem Team ein Hallo."],
  ["Post", "Objekt des Monats", "{topic}: Das Objekt des Monats", "„Klein im Bild, groß in der Wirkung.“", "Ein Bauteil, Gerät oder Dokument zu „{angle}“ wird hochwertig fotografiert und erklärt.", "Welches Objekt soll nächsten Monat dran sein?"],
  ["Post", "Danke-Post konkret", "{topic}: Danke für diesen Einsatz", "„Keine Floskel – ein konkreter Moment.“", "Ein echtes Team- oder Partner-Dankeschön zu „{angle}“ mit Anlass, Wirkung und Namen der Aufgabe.", "Wem möchtest du Danke sagen?"],
  ["Post", "Feierabend-Fakt", "{topic}: Ein Fakt zum Feierabend", "„Kurz bevor du weiter scrollst.“", "Ein einzelner starker Fakt zu „{angle}“ wird mit ruhigem Bild und minimaler Erklärung gepostet.", "Soll daraus eine Serie werden?"],
  ["Post", "Servicekarte", "{topic}: Diese Info gehört aufs Handy", "„Screenshot erlaubt.“", "Eine speicherbare Service-Information zu „{angle}“ mit klarer Nummer, Linklogik oder Handlung.", "Teile die Karte mit jemandem, der sie braucht."],
  ["Post", "Transparenznotiz", "{topic}: Was wir wissen und was noch offen ist", "„Transparenz heißt auch: Grenzen benennen.“", "Ein offenes Thema zu „{angle}“ wird mit Wissensstand, Unsicherheit und nächstem Schritt erklärt.", "Welche offene Frage sollen wir beantworten?"],
  ["Post", "Kundenfrage der Woche", "{topic}: Frage der Woche", "„Eine Frage, die viele betrifft.“", "Eine echte oder typische Kundenfrage zu „{angle}“ wird klar beantwortet und für Suchbarkeit formuliert.", "Stell uns die nächste Frage."],
  ["Post", "Mini-Case", "{topic}: Ein kleiner Fall aus der Praxis", "„So sah das Problem aus – so die Lösung.“", "Ein anonymisierter Praxisfall zu „{angle}“ zeigt Problem, Vorgehen, Ergebnis und Lernpunkt.", "Möchtest du mehr Praxisfälle?"],
  ["Post", "Wertschöpfung", "{topic}: Was in der Region bleibt", "„Versorgung ist auch regionale Wertschöpfung.“", "Der regionale Nutzen von „{angle}“ wird über Arbeitsplätze, Wege, Partner oder Investitionen erzählt.", "Was bedeutet regionale Nähe für dich?"],
  ["Post", "Historischer Vergleich", "{topic}: Damals und heute", "„So sah Versorgung früher aus.“", "Ein historisches Bild oder Vergleich zu „{angle}“ zeigt Entwicklung und heutige Anforderungen.", "Sollten wir mehr Archivmomente zeigen?"],
  ["Post", "Mini-Manifest", "{topic}: Wofür wir stehen", "„Nicht als Claim, sondern als konkrete Arbeit.“", "Ein markennaher Haltungsbeitrag zu „{angle}“ erklärt Prinzipien über Beispiele statt Werbesätze.", "Welcher Wert ist dir wichtig?"],
  ["Post", "Fact Card ohne Buzzwords", "{topic}: Ein Fakt, null Buzzwords", "„Einfach gesagt: …“", "Ein komplexer Zusammenhang zu „{angle}“ wird maximal schlicht als einzelne Karte erklärt.", "War das klar genug?"],
  ["Post", "Regionaler Moment", "{topic}: Moment der Woche", "„Ein kurzer Augenblick, der viel erklärt.“", "Ein kleines Ereignis zu „{angle}“ bekommt Kontext, Nutzen und menschliche Perspektive.", "Welchen Moment sollten wir festhalten?"],
  ["LinkedIn", "Expert:innen-These", "{topic}: Eine These für die Branche", "„Diskussionswürdig, aber begründet.“", "Eine fachliche These zu „{angle}“ wird mit Begründung, Konsequenz und Frage an Fachpublikum gepostet.", "Wie seht ihr das in euren Organisationen?"],
  ["LinkedIn", "Lessons Learned", "{topic}: Was wir aus einem Projekt gelernt haben", "„Drei Learnings, die wir wieder nutzen würden.“", "Ein Projekt zu „{angle}“ wird nicht gefeiert, sondern anhand konkreter Learnings reflektiert.", "Welches Learning ergänzt ihr?"],
  ["LinkedIn", "Fachkräfte-Fokus", "{topic}: Warum dieser Beruf Zukunft hat", "„Nicht jeder sieht die Aufgabe – aber alle spüren das Ergebnis.“", "Ein Berufsbild zu „{angle}“ wird über Sinn, Kompetenz und Entwicklungschance erzählt.", "Welche Kompetenz wird unterschätzt?"],
  ["LinkedIn", "Regulatorik verständlich", "{topic}: Was eine neue Regel praktisch bedeutet", "„Zwischen Gesetzestext und Alltag liegt Arbeit.“", "Eine Regel, Norm oder Rahmenbedingung zu „{angle}“ wird in praktische Auswirkungen übersetzt.", "Welche Regel sollen wir einordnen?"],
  ["LinkedIn", "Projekt-Retrospektive", "{topic}: Was wir beim nächsten Mal anders machen", "„Fortschritt entsteht nicht ohne Lernen.“", "Eine ehrliche Retrospektive zu „{angle}“ mit Herausforderung, Entscheidung und Verbesserung.", "Welche Retrospektive wünscht ihr euch?"],
  ["LinkedIn", "Partner-Spotlight", "{topic}: Gemeinsam geht es besser", "„Ein Projekt, mehrere Perspektiven.“", "Ein Partner, Kommune oder Dienstleister zu „{angle}“ wird mit gemeinsamer Wirkung vorgestellt.", "Welche Kooperation sollten wir zeigen?"],
  ["LinkedIn", "Zahl mit Einordnung", "{topic}: Diese Kennzahl braucht Kontext", "„Alle reden über Zahlen. Wir ordnen sie ein.“", "Eine fachliche Kennzahl zu „{angle}“ wird für Entscheider:innen verständlich interpretiert.", "Welche Kennzahl diskutiert ihr gerade?"],
  ["LinkedIn", "Entscheider:innen-Guide", "{topic}: Was Entscheider:innen fragen sollten", "„Die bessere Frage führt zur besseren Lösung.“", "Ein Leitfragen-Post zu „{angle}“ für Kommunen, Unternehmen oder Eigentümergemeinschaften.", "Welche Frage fehlt auf der Liste?"],
  ["LinkedIn", "Technik-Tiefgang", "{topic}: Ein technisches Detail mit großer Wirkung", "„Manchmal entscheidet ein Detail über das System.“", "Ein Detail zu „{angle}“ wird fachlich sauber, aber verständlich für Branchenpublikum erklärt.", "Wollen wir tiefer einsteigen?"],
  ["LinkedIn", "Strategie ohne Floskel", "{topic}: Was unsere Strategie konkret heißt", "„Strategie wird erst im Alltag glaubwürdig.“", "Ein strategisches Thema zu „{angle}“ wird anhand eines konkreten Vorhabens und messbaren Schritts erklärt.", "Welche strategische Frage beschäftigt euch?"],
  ["Reel", "POV Kund:in", "POV: Du begegnest {topic} im Alltag", "„Du merkst es erst, wenn du genauer hinschaust.“", "Die Kamera zeigt „{angle}“ konsequent aus Kund:innen-Sicht, danach folgt die Backstage-Auflösung.", "Wo begegnet dir das im Alltag?"],
  ["Reel", "POV Fachteam", "POV: Du bist heute im {topic}-Team", "„Das ist der Moment, den man von außen nie sieht.“", "Die Kamera bleibt dicht bei der Fachperson und zeigt Entscheidung, Handgriff und Ergebnis zu „{angle}“.", "Würdest du diesen Job ausprobieren?"],
  ["Carousel", "Mini-Serie Teil 1", "{topic}: Start einer Serie", "„Teil 1: die Frage, die alles öffnet.“", "Eine Serie zu „{angle}“ wird mit klarer Dramaturgie, Wiedererkennung und Ausblick auf Folge 2 gestartet.", "Folge uns für Teil 2."],
  ["Carousel", "Skeptiker:innen-Guide", "{topic}: Gute skeptische Fragen", "„Skepsis ist hilfreich, wenn sie konkret wird.“", "Skeptische Fragen zu „{angle}“ werden nicht abgewehrt, sondern sortiert und beantwortet.", "Welche skeptische Frage fehlt?"],
  ["Post", "Mini-Interview", "3 Fragen zu {topic}", "„Kurz gefragt, ehrlich beantwortet.“", "Eine Fachperson beantwortet drei präzise Fragen zu „{angle}“ ohne PR-Floskeln.", "Wen sollen wir interviewen?"],
  ["Post", "User Need", "{topic}: Was Kund:innen wirklich wissen wollen", "„Die eigentliche Frage steckt oft hinter der ersten Frage.“", "Ein Kundenbedürfnis zu „{angle}“ wird herausgearbeitet und serviceorientiert beantwortet.", "Trifft das deine Frage?"],
  ["Story", "Live-Entscheidung", "{topic}: Entscheide live mit", "„Wir nehmen euch in die Abwägung mit.“", "Eine ungefährliche, nachvollziehbare Abwägung zu „{angle}“ wird interaktiv begleitet.", "Wie hättest du entschieden?"],
  ["Reel", "Mini-Mythos Straßenumfrage", "{topic}: Was glaubt die Region?", "„Wir haben nachgefragt.“", "Straßenstimmen zu einem Mythos rund um „{angle}“ werden mit Fachauflösung kombiniert.", "Welche Frage stellen wir als Nächstes draußen?"],
  ["Carousel", "Red Flag Green Flag", "{topic}: Red Flag oder Green Flag?", "„Woran du gute Signale erkennst.“", "Typische Signale zu „{angle}“ werden in warnend, neutral und positiv eingeordnet.", "Welche Flag war neu für dich?"],
  ["Post", "Eine Sache anders", "{topic}: Eine Sache, die wir anders machen", "„Kleine Entscheidung, große Wirkung.“", "Ein konkreter Prozessunterschied zu „{angle}“ wird erklärt und mit Nutzen belegt.", "Welche Arbeitsweise sollen wir zeigen?"],
  ["Reel", "Real or Render", "{topic}: Echt oder KI?", "„Was ist echtes Foto, was wäre KI?“", "Ein Transparenzformat zu „{angle}“ erklärt Bildauswahl, KI-Grenzen und warum echte Aufnahmen Vertrauen schaffen.", "Hättest du den Unterschied erkannt?"],
  ["Carousel", "Content-Experiment", "{topic}: Wir testen zwei Erklärwege", "„Welche Version versteht man besser?“", "Zwei Darstellungen zu „{angle}“ werden gegeneinander getestet: technisch genau vs. alltagsnah.", "Welche Variante war klarer?"],
  ["Post", "Kommentar als Aufhänger", "{topic}: Dieser Kommentar verdient Antwort", "„Danke für die kritische Frage.“", "Ein einzelner Community-Kommentar zu „{angle}“ wird als Einstieg für eine respektvolle, tiefe Antwort genutzt.", "Welche Frage sollen wir als Nächstes beantworten?"],
  ["Reel", "Micro-Drama", "{topic}: Problem, Druck, Lösung", "„Ein kleiner Moment – aber mit Konsequenz.“", "Eine reale Arbeitssituation zu „{angle}“ wird als Mini-Dramaturgie mit Spannung, Entscheidung und Auflösung erzählt.", "Möchtest du mehr echte Einsatzmomente?"],
  ["Carousel", "Was niemand googelt", "{topic}: Die Frage, die kaum jemand googelt", "„Dabei wäre genau sie wichtig.“", "Eine unterschätzte Frage zu „{angle}“ wird sichtbar gemacht und fachlich beantwortet.", "Welche Frage traut man sich selten zu stellen?"],
  ["Story", "Du bist Einsatzleitung", "{topic}: Du entscheidest den nächsten Schritt", "„Welche Maßnahme wählst du?“", "Die Community übernimmt spielerisch die Rolle der Einsatzleitung zu „{angle}“ und bekommt danach die fachliche Auflösung.", "Hättest du wie das Team entschieden?"],
  ["Post", "Mini-Case mit Zahl", "{topic}: Ein Fall, eine Zahl, ein Learning", "„Diese eine Zahl macht den Unterschied.“", "Ein Praxisfall zu „{angle}“ wird über eine prägnante Kennzahl und ein klares Learning erzählt.", "Welche Zahl sollen wir erklären?"],
];

templates.push(...expertMechanicRows.map(([format, mechanic, title, hook, concept, cta]) => ({
  format: format === "LinkedIn" ? "Post" : format,
  mechanic,
  title,
  hook,
  concept,
  cta,
  strength: `${mechanic} gibt dem Beitrag eine eigene Dramaturgie und verhindert austauschbare Standardposts.`,
})));

const youtubeLongTemplates = [
  ["Deep Dive Doku", "{topic}: Die ganze Geschichte hinter {angle}", "„In diesem Video gehen wir einmal wirklich in die Tiefe.“", "12–18 Minuten Longform-Doku mit Kapitelstruktur: Problemaufriss, Ortstermin, Fachinterview, Daten-/Belegteil, kritische Fragen, Ausblick und klares Fazit.", "Abonniere den Kanal, wenn du mehr Einblicke hinter die Energieversorgung sehen willst."],
  ["Erklärfilm mit Kapiteln", "{topic} komplett erklärt – ohne Fachchinesisch", "„Nach diesem Video verstehst du das Thema wirklich.“", "8–12 Minuten Erklärvideo mit Intro-Hook, animierten Begriffen, realer B-Roll, Beispielrechnung, FAQ-Block und Zusammenfassung in drei Merksätzen.", "Welche Frage sollen wir im nächsten Erklärvideo beantworten?"],
  ["Vor-Ort-Reportage", "Wir waren vor Ort: So funktioniert {topic}", "„Wir nehmen dich dorthin mit, wo man sonst selten hinkommt.“", "10–16 Minuten Reportage mit Rundgang, mehreren Schauplätzen, O-Tönen, Nahaufnahmen und ehrlicher Einordnung von Nutzen, Grenzen und Aufwand.", "Schreib uns, welchen Ort wir als Nächstes besuchen sollen."],
  ["Expert:innen-Talk", "Fachgespräch: Was bei {topic} wirklich zählt", "„Wir stellen die Fragen, die sonst oft zu kurz kommen.“", "15–25 Minuten Gespräch mit zwei Perspektiven: Moderation, Fachperson, kritische Publikumsfragen, Mythenblock und konkrete Handlungsempfehlungen.", "Welche Frage würdest du der Fachperson stellen?"],
  ["Projektbegleitung", "{topic}: Vom Plan bis zur Umsetzung", "„So sieht ein Projekt aus, bevor es fertig wirkt.“", "Mehrteilig denkbares 12–20 Minuten Video: Ausgangslage, Planung, Bau/Umsetzung, Schwierigkeiten, aktueller Stand, nächster Meilenstein.", "Soll daraus eine Projektserie werden?"],
  ["Mythen-Spezial", "{topic}: Die größten Mythen im Faktencheck", "„Wir prüfen die Aussagen, die am häufigsten auftauchen.“", "10–15 Minuten Faktencheck mit 5–7 Mythen, jeweils Behauptung, Faktenlage, Mess-/Belegidee, Fazit und Quellenhinweis.", "Welchen Mythos nehmen wir in Teil 2?"],
  ["Service-Sprechstunde", "{topic}: Die große Fragestunde", "„Wir beantworten die Fragen, die wirklich im Alltag auftauchen.“", "12–18 Minuten Q&A mit thematischen Blöcken, Kapitelmarken, Einblendungen, Kontaktwegen und speicherbarer Schluss-Checkliste.", "Schreib deine Frage für die nächste Sprechstunde in die Kommentare."],
  ["Behind-the-System", "{topic}: Das System hinter dem Alltag", "„Was selbstverständlich wirkt, ist ein ganzes System.“", "Longform-Erzählung über die unsichtbare Infrastruktur: Einstieg mit Alltagsszene, Systemkarte, Team-Rollen, Technikdetails, Störungsszenario und Präventionslogik.", "Welche Infrastruktur sollen wir als Nächstes sichtbar machen?"],
  ["Kontroverse fair erklärt", "{topic}: Was dafür spricht – und was dagegen", "„Wir machen es uns heute nicht zu einfach.“", "15–22 Minuten ausgewogene Einordnung mit Pro, Contra, Zielkonflikten, regionalem Bezug, Fachstimme, Community-Fragen und transparentem Fazit.", "Welche Perspektive fehlt dir in der Debatte?"],
  ["Experiment Langformat", "{topic}: Wir testen es einen Tag lang", "„Statt nur zu erklären, probieren wir es aus.“", "10–18 Minuten Testformat mit Ausgangsfrage, Versuchsaufbau, Tagesverlauf, Messpunkten, Überraschungen, Auswertung und Learnings.", "Welches Experiment sollen wir als Nächstes machen?"],
].map(([mechanic, title, hook, concept, cta]) => ({
  format: "YouTube Long",
  mechanic,
  title,
  hook,
  concept,
  cta,
  strength: `${mechanic} nutzt längere Watchtime für Tiefe, Vertrauen und klare Kapitel statt schneller Social-Hooks.`,
}));

templates.push(...youtubeLongTemplates);

const modeMechanics = {
  surprising: ["ASMR", "Challenge", "Experiment", "Vorher/Nachher", "Perspektivwechsel", "Mythos/Fakt", "Schätzspiel", "Gedankenexperiment", "Cold Open", "Blind Ranking", "Expectation vs Reality", "Sound Quiz", "Data Reveal", "Debunk Lab", "Fehlersuche", "Real or Render", "Micro-Drama", "Red Flag Green Flag", "Experiment Langformat", "Mythen-Spezial"],
  editorial: ["Mini-Doku", "Mitarbeitendenporträt", "Fotoessay", "Zeitleiste", "Projektupdate", "Day in the Life", "Ortsgeschichte", "One-Take-Erklärung", "Micro Documentary", "Slow TV", "Hero Quote", "Foto mit Fußnote", "Mitarbeitenden-Moment", "Historischer Vergleich", "Projekt-Retrospektive", "Lessons Learned", "Deep Dive Doku", "Vor-Ort-Reportage", "Behind-the-System"],
  campaign: ["Wochenchallenge", "Datenstory", "Testimonials", "Awareness", "Community-Regie", "Vorher/Nachher", "Haltungsbeitrag", "Mini-Serie Teil 1", "Mini-Manifest", "Local Proof", "Wertschöpfung", "Partner-Spotlight", "Strategie ohne Floskel", "Choose the Shoot", "Content-Experiment", "Projektbegleitung", "Kontroverse fair erklärt"],
  service: ["FAQ", "Serviceablauf", "Entscheidungsbaum", "Rechenbeispiel", "Sicherheitsszenario", "Fehleranalyse", "Glossar", "Vergleich", "Mini-Tutorial", "Before the Call", "Swipe-Checkliste", "Kostenklarheit", "Ampel-Guide", "Wenn-Dann-Karten", "Servicekarte", "Regulatorik verständlich", "Entscheider:innen-Guide", "Erklärfilm mit Kapiteln", "Service-Sprechstunde"],
  community: ["Community-Faktencheck", "Kommentar-Reaktion", "Sprechstunde", "Quiz", "Schätzspiel", "Community-Regie", "Challenge", "Street-Test", "Comment Rescue", "Community-Auswertung", "This or That", "Fragensticker Spezial", "Team Takeover", "Schnellumfrage", "Kommentar als Aufhänger", "Du bist Einsatzleitung", "Expert:innen-Talk", "Service-Sprechstunde"],
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

const topicPlaybooks = {
  Strom: {
    tensions: ["Blackout-Angst vs. reale Netzroutine", "unsichtbare Schaltarbeit vs. sichtbarer Alltag", "Spitzenlast am Abend vs. ruhige Leitstelle"],
    proof: ["Live-Anzeige aus der Netzleitstelle", "Thermografie an einer Anlage", "Vor-Ort-O-Ton Netzmeister:in"],
    visuals: ["Schalthand im Umspannwerk, Close-up auf Schutzkleidung", "Nachtaufnahme einer Leitstelle mit echten Monitoren", "Kabelmuffe im Anschnitt neben einem Alltagsgerät"],
    hooks: ["„Diese Sekunde entscheidet, ob alles stabil bleibt.“", "„Deine Steckdose hat mehr Backstage als ein Konzert.“", "„Warum das Netz abends nicht einfach Feierabend macht.“"],
  },
  Gas: {
    tensions: ["Sicherheit vs. Gewohnheit", "Gasgeruch als Warnsignal vs. unsichtbares Gas", "Winterbedarf vs. vorausschauende Planung"],
    proof: ["Geruchsstoff-Test als Demonstration", "Druckprüfung im Serviceeinsatz", "Checkliste mit echten Sicherheitsregeln"],
    visuals: ["Monteuer:in prüft Gasleitung im Keller", "warme Wohnung als Nutzenszene plus technische Nahaufnahme", "gelbe Leitungsmarkierung im Straßenraum"],
    hooks: ["„Wenn Gas riecht, ist das Absicht – und wichtig.“", "„Drei Minuten, die im Ernstfall zählen.“", "„So wird Wärme sicher, bevor sie gemütlich wird.“"],
  },
  Elektromobilität: {
    tensions: ["Ladefrust vs. Lade-Routine", "Reichweitenangst vs. echte Alltagsstrecke", "Schnellladen vs. batterieschonendes Laden"],
    proof: ["Ladevorgang mit Timer und Kilowatt-Anzeige", "Streckencheck durch Chemnitz und Umland", "Erklärung der Steckertypen an echter Säule"],
    visuals: ["regennasse Ladesäule mit Lichtreflexen", "Hand am Ladekabel plus Display", "E-Auto vor PV-Dach und Ladepunkt"],
    hooks: ["„Diese Anzeige an der Ladesäule verstehen viele falsch.“", "„Wir testen eine ganz normale Strecke – ohne Schönrechnen.“", "„Laden ist nicht gleich Laden.“"],
  },
  Abwasser: {
    tensions: ["Ekelmoment vs. Umweltleistung", "Toilette als Mülleimer vs. Kläranlage als Schutzsystem", "unsichtbares Kanalnetz vs. saubere Gewässer"],
    proof: ["Rechenanlage mit Fundstücken", "Laborprobe vor und nach der Reinigung", "Mikroskopbild aus der biologischen Stufe"],
    visuals: ["Klärbecken aus Drohnenperspektive", "Laborhandschuhe mit Wasserprobe", "Fundstücke aus dem Rechen sachlich inszeniert"],
    hooks: ["„Das landet wirklich jeden Tag bei uns.“", "„Eine Kläranlage ist kein Zaubertrick – sondern Biologie.“", "„Was dein Waschbecken mit dem Fluss zu tun hat.“"],
  },
  Photovoltaik: {
    tensions: ["Sommer-Erwartung vs. Winter-Realität", "Dachgefühl vs. echter Dachcheck", "Eigenverbrauch vs. Einspeisung"],
    proof: ["Wechselrichterdaten eines Beispieltags", "Verschattungscheck mit Sonnenlauf", "Vorher-Nachher einer Montage"],
    visuals: ["Techniker:in auf sicherem PV-Dach", "Close-up auf Modulstruktur mit Sonnenreflex", "Hausbesitzer:in schaut auf App-Verbrauchskurve"],
    hooks: ["„PV scheitert selten an der Sonne – eher an diesem Detail.“", "„Was dein Dach kann, sieht man nicht vom Gehweg.“", "„Der spannendste Moment kommt nach Sonnenuntergang.“"],
  },
  Windkraft: {
    tensions: ["Landschaftsbild vs. Stromertrag", "Geräuschdebatte vs. Messwert", "Artenschutz vs. Energiewende"],
    proof: ["Geräuschmessung am Anlagenstandort", "Wartungscheck im Maschinenhaus", "Ertragsvergleich mit verständlicher Alltagsgröße"],
    visuals: ["Serviceteam vor Windanlage im Morgenlicht", "Blick aus der Gondel auf die Region", "Rotorblatt-Detail mit Person als Größenvergleich"],
    hooks: ["„So groß ist ein Rotorblatt erst, wenn man danebensteht.“", "„Wir messen nach: Wie laut ist Windkraft wirklich?“", "„Ein guter Windtag erzählt mehr als jede Grafik.“"],
  },
  Trinkwasser: {
    tensions: ["selbstverständlich aus dem Hahn vs. kontrolliertes Lebensmittel", "Sommerdurst vs. Netzdruck", "Hausinstallation vs. Wasserwerk"],
    proof: ["Laboranalyse mit drei Messwerten", "Wegkarte Wasserwerk bis Haushalt", "Geschmackstest mit Faktenauflösung"],
    visuals: ["klares Glas Wasser vor Wasserwerk", "Laborpipette und Wasserprobe", "Rohrnetz-Plan neben realem Schieber"],
    hooks: ["„Dieses Lebensmittel kommt direkt aus deiner Wand.“", "„Warum Trinkwasser mehr Kontrollen hat als viele denken.“", "„Der Weg bis zum Wasserhahn ist länger als du glaubst.“"],
  },
  Fernwärme: {
    tensions: ["warme Wohnung vs. unterirdisches Netz", "Baustelle heute vs. Wärmewende morgen", "Zentralität vs. individuelle Fragen"],
    proof: ["Temperaturvergleich Vorlauf/Rücklauf", "Hausstation im echten Keller", "Baustellenfortschritt mit Nutzenkarte"],
    visuals: ["geöffnete Fernwärmetrasse mit gedämmten Rohren", "Leitwarte Wärme mit Team", "Hausstation mit beschrifteten Komponenten"],
    hooks: ["„Unter dieser Straße liegt ein Stück Wärmewende.“", "„Warum Rücklauf-Temperatur plötzlich spannend wird.“", "„Fernwärme ist unsichtbar – bis gebaut wird.“"],
  },
};

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

const campaignArcs = {
  trust: {
    name: "Vertrauen aufbauen",
    roles: ["Aufmerksamkeit", "Problem erklären", "Blick hinter die Kulissen", "Fachbeleg", "Menschen zeigen", "Community-Frage", "Service-Nutzen", "Abschluss mit Haltung"],
    promise: "Von Neugier über Beleg zu Vertrauen.",
  },
  education: {
    name: "Wissen vertiefen",
    roles: ["Einstiegsfrage", "Grundlage", "Mythos klären", "Detail vertiefen", "Beispielrechnung", "FAQ", "Praxisfall", "Merksatz"],
    promise: "Vom einfachen Einstieg zur fachlich soliden Erklärung.",
  },
  activation: {
    name: "Community aktivieren",
    roles: ["Provokante Frage", "Abstimmung", "Straßen-/Kommentarreaktion", "Auflösung", "Mitmachformat", "Teamantwort", "User Need", "Nächster Dreh"],
    promise: "Von Beteiligung zu sichtbarer Community-Regie.",
  },
  project: {
    name: "Projekt begleiten",
    roles: ["Warum jetzt?", "Status", "Baustellenblick", "Nutzen", "Einschränkung ehrlich erklären", "Fachstimme", "Nächster Meilenstein", "Danke/Abschluss"],
    promise: "Vom Anlass über Fortschritt zu transparenter Einordnung.",
  },
};

const criticalTopicSignals = {
  "Energiepreise & Markt": ["Preisbestandteile prüfen", "keine Preisversprechen formulieren", "Zeitbezug und Quelle ergänzen"],
  Tarife: ["Produktdetails gegen aktuelle Tarifseite prüfen", "keine individuelle Ersparnis versprechen"],
  Gas: ["Sicherheits- und Störfallhinweise fachlich freigeben", "keine Verharmlosung von Risiken"],
  Strom: ["Versorgungssicherheit differenziert formulieren", "keine absolute Ausfallsicherheit versprechen"],
  Windkraft: ["Bürgerfragen, Artenschutz und Geräusche ausgewogen behandeln", "Messwerte statt Behauptungen nutzen"],
  Photovoltaik: ["Ertrag, Förderung und Wirtschaftlichkeit nur beispielhaft erklären", "keine pauschale Rendite behaupten"],
  Wärmepumpen: ["Gebäudeeignung und Förderung nicht pauschalisieren", "Altbau-Fälle differenzieren"],
  Abwasser: ["Gesundheits- und Umweltbezug sachlich halten", "keine schockierende Ekel-Kommunikation ohne Nutzen"],
  Trinkwasser: ["Qualitätsaussagen mit aktueller Analyse oder offizieller Quelle belegen", "keine medizinischen Aussagen"],
  Fernwärme: ["Baustellen, Anschlussfragen und Kosten transparent einordnen", "keine universelle Lösung versprechen"],
  "Baustellen & Projekte": ["Zeitpläne als geplant kennzeichnen", "Belastungen ehrlich benennen"],
  "Starkregen & Hochwasser": ["keine Panik erzeugen", "offizielle Warn- und Verhaltenshinweise nutzen"],
  Versorgungssicherheit: ["Krisenkommunikation ruhig und präzise halten", "keine Garantien formulieren"],
  "Entstörung & Bereitschaft": ["Notfallwege und Zuständigkeiten exakt prüfen", "keine Reaktionszeiten versprechen"],
  "Rechnung verstehen": ["rechtliche und abrechnungsrelevante Angaben prüfen", "keine Einzelfallberatung simulieren"],
};

let topics = [...topicCatalog];
let selectedTopics = new Set(["Strom", "Photovoltaik", "Elektromobilität"]);
let currentIdeas = [];
let favorites = JSON.parse(localStorage.getItem("energie-ideenwerk-favorites") || "[]");
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
const campaignBoard = document.querySelector("#campaignBoard");
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
  return values.length ? values : ["Reel", "Carousel", "Story", "Post", "YouTube Long"];
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
    campaign: getCampaignSettings(),
  };
}

function detectTopicFromPlan(planText) {
  const normalized = planText.toLowerCase();
  const scored = topics.map((topic) => {
    const terms = [topic.name, ...(topic.keywords || [])].map((term) => term.toLowerCase());
    const score = terms.reduce((sum, term) => sum + (normalized.includes(term) ? 3 : 0), 0) +
      (topicSubthemes[topic.name] || []).reduce((sum, term) => sum + (normalized.includes(term.toLowerCase()) ? 2 : 0), 0);
    return { topic, score };
  }).sort((a, b) => b.score - a.score);
  return scored[0]?.score > 0 ? scored[0].topic : topics.find((topic) => selectedTopics.has(topic.name)) || topics[0];
}

function extractPlanTitle(planText, topicName, format) {
  const firstSentence = planText
    .replace(/\s+/g, " ")
    .split(/[.!?]/)
    .map((sentence) => sentence.trim())
    .find(Boolean);
  if (!firstSentence) return `${topicName}: konkreter ${format}-Plan`;
  const clean = firstSentence.length > 78 ? `${firstSentence.slice(0, 75).trim()}…` : firstSentence;
  return clean.match(new RegExp(topicName, "i")) ? clean : `${topicName}: ${clean}`;
}

function inferPlanMechanic(planText, format) {
  const text = planText.toLowerCase();
  if (format === "YouTube Long") return text.includes("interview") || text.includes("gespräch") ? "Expert:innen-Talk" : "Vor-Ort-Reportage";
  if (text.includes("myth") || text.includes("fakt")) return "Mythos/Fakt";
  if (text.includes("baustelle") || text.includes("projekt")) return "Projektupdate";
  if (text.includes("frage") || text.includes("kommentar")) return "Kommentar als Aufhänger";
  if (text.includes("azubi") || text.includes("team") || text.includes("mitarbeiter")) return "Mitarbeitenden-Moment";
  if (text.includes("erklär") || text.includes("wissen")) return "Erklärstück";
  if (format === "Carousel") return "Swipe-Checkliste";
  if (format === "Story") return "Mini-Sprechstunde";
  if (format === "Post") return "Foto mit Fußnote";
  return "Vor-Ort-Dreh";
}

function createIdeaFromPlan() {
  const planText = document.querySelector("#customPlanInput").value.trim();
  if (!planText) {
    showToast("Bitte trage zuerst deinen konkreten Plan ein.");
    return null;
  }
  const format = document.querySelector("#customPlanFormat").value;
  const tone = document.querySelector("#customPlanTone").value;
  const settings = getSettings();
  const topic = detectTopicFromPlan(planText);
  const subthemes = topicSubthemes[topic.name] || genericSubthemes;
  const subtheme = subthemes.find((item) => planText.toLowerCase().includes(item.toLowerCase())) || subthemes[hash(planText) % subthemes.length];
  const mechanic = inferPlanMechanic(planText, format);
  const planHook = planText.length > 110
    ? `„${planText.slice(0, 104).trim()} …“`
    : `„${planText}“`;
  const planConcept = `Ausgehend vom konkreten Plan: ${planText} Daraus wird ein ${format} mit klarer Dramaturgie, realen Motiven, fachlicher Einordnung und einer produktionstauglichen Shotlist.`;
  const proof = pick(proofPoints, hash(`${planText}-${topic.name}`));
  const visualApproach = `konkreter Produktionsdreh nach Plan; Motiv: ${pick(visualApproaches, hash(planText))}`;
  const template = { format, mechanic, title: "{topic}", concept: planConcept, hook: planHook };
  const criticalReview = runCriticalReview({
    topic: topic.name,
    subtheme,
    goal: settings.goal,
    audience: settings.audience,
    template,
    concept: planConcept,
    topicProof: proof,
    topicTension: "konkreter Plan vs. fachlich sichere Veröffentlichung",
  });
  const keywords = topic.keywords || [topic.name.replaceAll(" ", "")];
  return {
    id: `plan-${Date.now()}-${hash(planText)}`,
    topic: topic.name,
    format,
    mechanic,
    pillar: "Produktion",
    subtheme,
    occasion: "konkreter Redaktionsplan",
    protagonist: inferPlanProtagonist(planText),
    setting: inferPlanSetting(planText, topic.name),
    proof,
    visualApproach,
    mediaIndex: hash(planText) % getMediaOptions(topic.name).length,
    platform: document.querySelector("#platform").value,
    title: extractPlanTitle(planText, topic.name, format),
    hook: planHook,
    concept: planConcept,
    cta: inferPlanCta(planText, format),
    strength: `Der Beitrag basiert auf einem konkreten Produktionsplan und wird direkt in Drehlogik, O-Töne, Requisiten und Caption übersetzt. ${goalTweaks[settings.goal]} ${audienceTweaks[settings.audience]}`,
    criticalReview,
    preferredTone: tone,
    originalPlan: planText,
    hashtags: [
      "#EnergieIdeenwerk",
      ...keywords.slice(0, 2).map((keyword) => `#${keyword.replaceAll(" ", "")}`),
      "#EnergieWissen",
    ],
    score: 88,
  };
}

function inferPlanProtagonist(planText) {
  const text = planText.toLowerCase();
  if (text.includes("azubi")) return "eine Auszubildende oder ein Auszubildender im echten Arbeitsmoment";
  if (text.includes("hausbesitzer") || text.includes("kund")) return "eine Kundin oder ein Kunde mit konkreter Alltagsperspektive";
  if (text.includes("techniker") || text.includes("monteur")) return "eine Fachperson, die den Arbeitsschritt direkt vor Ort erklärt";
  if (text.includes("team")) return "ein Team aus Fachbereich und Kommunikation im gemeinsamen Dreh";
  return "eine Fachperson mit sichtbarem Praxisbezug";
}

function inferPlanSetting(planText, topicName) {
  const text = planText.toLowerCase();
  if (text.includes("baustelle")) return "auf einer realen Baustelle mit sicher freigegebenem Drehbereich";
  if (text.includes("anlage") || text.includes("pv") || text.includes("wind")) return "direkt an der Anlage mit ergänzenden Detailaufnahmen";
  if (text.includes("büro") || text.includes("beratung")) return "in einer Beratungssituation mit ergänzenden Schnittbildern";
  return getBriefingPlaybook({ topic: topicName }).locations[0];
}

function inferPlanCta(planText, format) {
  if (format === "YouTube Long") return "Welche Frage sollen wir im nächsten ausführlichen Video beantworten?";
  if (format === "Story") return "Stimme ab oder schick uns deine Frage zum Thema.";
  if (format === "Carousel") return "Speichere den Beitrag für später und teile ihn mit jemandem, der das wissen sollte.";
  return "Welche Perspektive sollen wir als Nächstes zeigen?";
}

function getCampaignSettings() {
  const startInput = document.querySelector("#campaignStart");
  if (startInput && !startInput.value) {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    startInput.value = date.toISOString().slice(0, 10);
  }
  return {
    theme: document.querySelector("#campaignTheme").value.trim(),
    duration: Number(document.querySelector("#campaignDuration").value),
    frequency: Number(document.querySelector("#campaignFrequency").value),
    start: document.querySelector("#campaignStart").value,
    arc: document.querySelector("#campaignArc").value,
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
  const playbook = topicPlaybooks[topic.name];
  const topicTension = playbook
    ? pick(playbook.tensions, seed + generationRound + index)
    : `${subtheme} aus Sicht von Alltag, Technik und Region`;
  const topicProof = playbook
    ? pick(playbook.proof, seed + generationSalt + index * 3)
    : proof;
  const topicVisual = playbook
    ? pick(playbook.visuals, seed + generationRound * 5 + index)
    : null;
  const topicHook = playbook
    ? pick(playbook.hooks, seed + generationRound * 7 + index)
    : template.hook;
  const visualApproachBase = visualApproaches[
    (generationRound * 17 + generationSalt + index * 7) % visualApproaches.length
  ];
  const visualApproach = topicVisual
    ? `${visualApproachBase}; Motiv: ${topicVisual}`
    : visualApproachBase;
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
      (template.format === "YouTube Long" && settings.goal !== "Reichweite" ? 3 : 0) +
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
  const depthSentence =
    ` Fachlicher Kern: ${topicTension}. Beleg im Beitrag: ${topicProof}.`;
  const criticalReview = runCriticalReview({
    topic: topic.name,
    subtheme,
    goal: settings.goal,
    audience: settings.audience,
    template,
    concept,
    topicProof,
    topicTension,
  });

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
    hook: topicHook,
    concept: `${concept}${depthSentence}${regionalCue}${expertiseCue}${emotionCue}${viralCue}`,
    cta: template.cta,
    strength: `${template.strength} Der Beitrag geht nicht allgemein über ${topic.name}, sondern spitzt auf „${subtheme}“ und den Konflikt „${topicTension}“ zu. ${goalTweaks[settings.goal]} ${audienceTweaks[settings.audience]}`,
    criticalReview,
    hashtags: [
      "#EnergieIdeenwerk",
      ...keywords.slice(0, 2).map((keyword) => `#${keyword.replaceAll(" ", "")}`),
      settings.regionality >= 6 ? "#Südsachsen" : "#EnergieWissen",
    ],
    score,
  };
}

function runCriticalReview({ topic, subtheme, goal, audience, template, concept, topicProof, topicTension }) {
  const text = `${topic} ${subtheme} ${goal} ${audience} ${template.mechanic} ${template.title} ${concept} ${topicProof} ${topicTension}`;
  const checks = [];
  const matchedRules = Object.entries(criticalTopicSignals)
    .filter(([signal]) => text.toLowerCase().includes(signal.toLowerCase()))
    .flatMap(([, rules]) => rules);

  checks.push("Fakten, Zahlen und konkrete Aussagen vor Veröffentlichung mit Fachbereich oder offizieller Quelle abgleichen.");
  checks.push("Keine absoluten Versprechen wie garantiert, immer, nie oder sicher ohne belegbaren Kontext verwenden.");

  if (matchedRules.length) checks.push(...matchedRules);
  if (settingsLikeNeedsSource(goal, template.mechanic)) {
    checks.push("Mindestens einen klar benannten Beleg einplanen: Messwert, Fachstimme, Projektstatus oder offizielle Seite.");
  }
  if (["Reichweite", "Interaktion"].includes(goal)) {
    checks.push("Hook darf aufmerksamkeitsstark sein, aber nicht dramatisieren oder Angst erzeugen.");
  }
  if (["Medien & Öffentlichkeit", "Kommunen", "Unternehmen"].includes(audience)) {
    checks.push("Formulierung zitierfähig halten: präzise, nüchtern, ohne übertriebene Marketing-Sprache.");
  }

  const uniqueChecks = [...new Set(checks)].slice(0, 5);
  const riskScore = Math.min(100, 28 + matchedRules.length * 12 + (goal === "Reichweite" ? 8 : 0) + (template.format === "Reel" ? 4 : 0));
  const label = riskScore >= 64 ? "Fachfreigabe empfohlen" : riskScore >= 44 ? "Beleg prüfen" : "Standardprüfung";
  return {
    riskScore,
    label,
    checks: uniqueChecks,
    guidance: ` Kritischer Qualitätscheck: ${label}. ${uniqueChecks[0]}`,
  };
}

function settingsLikeNeedsSource(goal, mechanic) {
  return ["Wissen vermitteln", "Transparenz schaffen", "Service & Hilfe", "Projekt begleiten"].includes(goal) ||
    /Fakt|Zahl|Kosten|FAQ|Guide|Check|Regulatorik|These|Mythos|Rechnung|Vergleich/i.test(mechanic);
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
  renderCampaignBoard(settings, activeTopics);
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

function generateFromConcretePlan() {
  const idea = createIdeaFromPlan();
  if (!idea) return;
  currentIdeas = [idea, ...currentIdeas.filter((existing) => !existing.id?.startsWith("plan-"))].slice(0, Math.max(1, Number(document.querySelector("#ideaCount").value)));
  emptyState.hidden = true;
  renderIdeas();
  renderCampaignBoard(getSettings(), [topics.find((topic) => topic.name === idea.topic) || { name: idea.topic }]);
  resultsSummary.innerHTML = `
    <span class="pulse"></span>
    Konkreter Plan wurde in Drehplan, Briefing und Caption übersetzt · ${escapeHtml(idea.format)}
  `;
  openBriefing(idea);
  if (window.innerWidth < 1050) {
    document.querySelector(".results-panel").scrollIntoView({ behavior: "smooth" });
  }
}

function renderCampaignBoard(settings, activeTopics) {
  if (!currentIdeas.length) {
    campaignBoard.hidden = true;
    campaignBoard.innerHTML = "";
    return;
  }
  const campaign = settings.campaign;
  const arc = campaignArcs[campaign.arc] || campaignArcs.trust;
  const totalSlots = Math.max(1, campaign.duration * campaign.frequency);
  const theme = campaign.theme || `${activeTopics.slice(0, 2).map((topic) => topic.name).join(" & ")} Kampagne`;
  const startDate = campaign.start ? new Date(`${campaign.start}T12:00:00`) : new Date();
  const planned = Array.from({ length: totalSlots }, (_, index) => {
    const idea = currentIdeas[index % currentIdeas.length];
    const date = new Date(startDate);
    const week = Math.floor(index / campaign.frequency);
    const dayOffsets = campaign.frequency === 2 ? [0, 3] : campaign.frequency === 3 ? [0, 2, 4] : [0, 1, 3, 5];
    date.setDate(startDate.getDate() + week * 7 + dayOffsets[index % dayOffsets.length]);
    return {
      idea,
      date,
      week: week + 1,
      role: arc.roles[index % arc.roles.length],
    };
  });
  campaignBoard.hidden = false;
  campaignBoard.innerHTML = `
    <div class="campaign-board-header">
      <div>
        <span class="step">KAMPAGNENPLAN</span>
        <h3>${escapeHtml(theme)}</h3>
        <p>${escapeHtml(arc.promise)} ${campaign.duration} ${campaign.duration === 1 ? "Woche" : "Wochen"} · ${campaign.frequency} Posts/Woche</p>
      </div>
      <button id="copyCampaignPlan" type="button">Plan kopieren</button>
    </div>
    <div class="campaign-timeline">
      ${planned.map((slot, index) => `
        <article class="campaign-slot">
          <div class="campaign-date">
            <strong>${formatCampaignDate(slot.date)}</strong>
            <span>Woche ${slot.week}</span>
          </div>
          <div>
            <span class="campaign-role">${escapeHtml(slot.role)}</span>
            <h4>${escapeHtml(slot.idea.title)}</h4>
            <p>${escapeHtml(slot.idea.format)} · ${escapeHtml(slot.idea.topic)} · ${escapeHtml(slot.idea.mechanic)}</p>
          </div>
          <button class="campaign-create-post" data-index="${currentIdeas.indexOf(slot.idea)}" type="button">Post erstellen</button>
        </article>
      `).join("")}
    </div>
  `;
  document.querySelector("#copyCampaignPlan").addEventListener("click", () => copyCampaignPlan(planned, theme, arc));
  document.querySelectorAll(".campaign-create-post").forEach((button) => {
    button.addEventListener("click", () => openPostStudio(currentIdeas[Number(button.dataset.index)]));
  });
}

function formatCampaignDate(date) {
  return date.toLocaleDateString("de-DE", { weekday: "short", day: "2-digit", month: "2-digit" });
}

async function copyCampaignPlan(planned, theme, arc) {
  const text = [
    `Kampagnenplan: ${theme}`,
    `Dramaturgie: ${arc.name} – ${arc.promise}`,
    "",
    ...planned.map((slot, index) =>
      `${index + 1}. ${formatCampaignDate(slot.date)} · Woche ${slot.week} · ${slot.role}\n${slot.idea.format} · ${slot.idea.topic} · ${slot.idea.mechanic}\n${slot.idea.title}\nHook: ${slot.idea.hook}\nPrüfung: ${slot.idea.criticalReview?.label || "Standardprüfung"}`,
    ),
  ].join("\n\n");
  try {
    await navigator.clipboard.writeText(text);
    showToast("Kampagnenplan wurde kopiert.");
  } catch {
    showToast("Kopieren war im Browser nicht möglich.");
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
            <button class="card-action briefing-action" data-index="${index}" type="button">▤ Briefing erstellen</button>
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
  document.querySelectorAll(".briefing-action").forEach((button) => {
    button.addEventListener("click", () =>
      openBriefing(currentIdeas[Number(button.dataset.index)]),
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
Interne Prüfung: ${idea.criticalReview?.label || "Standardprüfung"}
Prüfpunkte:
${(idea.criticalReview?.checks || ["Fakten vor Veröffentlichung gegenprüfen."]).map((check) => `- ${check}`).join("\n")}

${idea.hashtags.join(" ")}`;
}

function createCaption(idea, tone = "nahbar") {
  if (idea.format === "YouTube Long") return createYoutubeLongDescription(idea, tone);
  const seed = hash(`${idea.title}-${tone}-${studioVariant}`);
  const cleanHook = idea.hook.replace(/^„|“$/g, "").replace(/\.$/, "");
  const topicLine = captionTopicLine(idea, seed);
  const storyLine = captionStoryLine(idea, tone, seed);
  const valueLine = captionValueLine(idea, tone, seed);
  const formatLine = captionFormatLine(idea, seed);
  const cta = captionCta(idea, tone, seed);

  if (idea.format === "Story") {
    return `${cleanHook}

${topicLine}

${storyLine}

${cta}

${idea.hashtags.slice(0, 3).join(" ")}`;
  }

  if (idea.format === "Carousel") {
    return `${cleanHook} 👀

Swipe dich durch ${idea.subtheme} – ohne Fachchinesisch, aber mit echtem Aha-Moment.

${valueLine}

${formatLine}

${cta}

${idea.hashtags.join(" ")}`;
  }

  if (idea.format === "Reel") {
    return `${cleanHook} ⚡

${storyLine}

${valueLine}

${formatLine}

${cta}

${idea.hashtags.join(" ")}`;
  }

  return `${cleanHook}

${topicLine}

${storyLine}

${valueLine}

${cta}

${idea.hashtags.join(" ")}`;
}

function captionTopicLine(idea, seed) {
  return pick([
    `${idea.topic} klingt erstmal nach Technik. Eigentlich geht es aber um Alltag, Vertrauen und die Frage, was im Hintergrund zuverlässig funktionieren muss.`,
    `Hinter ${idea.subtheme} steckt mehr als ein Fachbegriff – nämlich Menschen, Entscheidungen und ziemlich viel unsichtbare Arbeit.`,
    `Man sieht oft nur das Ergebnis. Spannend wird es aber genau da, wo ${idea.topic} im Hintergrund beginnt.`,
    `${idea.topic} ist einer dieser Bereiche, die erst auffallen, wenn man genauer hinschaut.`,
  ], seed);
}

function captionStoryLine(idea, tone, seed) {
  const human = idea.protagonist.replace(/^eine |^ein /i, "");
  if (tone === "sachlich") {
    return pick([
      `Wir zeigen, was bei ${idea.subtheme} konkret passiert, welche Rolle ${human} spielt und welcher Beleg das Thema greifbar macht.`,
      `Im Fokus: ${idea.subtheme}, ein realer Schauplatz und eine Einordnung, die das Thema verständlich macht.`,
      `Dieser Beitrag ordnet ein, warum ${idea.subtheme} relevant ist und worauf man bei der Bewertung achten sollte.`,
    ], seed);
  }
  if (tone === "aktivierend") {
    return pick([
      `Kurz reinschauen lohnt sich: Bei ${idea.subtheme} steckt der überraschende Moment nicht am Anfang, sondern im Detail.`,
      `Rate mal: Was ist bei ${idea.subtheme} der Teil, den die meisten unterschätzen? Genau darum geht’s hier.`,
      `Wenn du dachtest, das Thema sei schnell erklärt: warte auf den Blick hinter die Kulissen.`,
    ], seed);
  }
  return pick([
    `Wir nehmen dich mit an einen Ort, den man im Alltag selten sieht – und zeigen, warum ${idea.subtheme} mehr mit dir zu tun hat, als man denkt.`,
    `Zwischen Technik, Team und Region entsteht hier ein Moment, der ziemlich gut zeigt, wie Versorgung im Alltag wirklich funktioniert.`,
    `Ein kleiner Blick hinter die Kulissen. Aber einer, der erklärt, warum ${idea.topic} nicht einfach „da“ ist.`,
  ], seed);
}

function captionValueLine(idea, tone, seed) {
  const proof = humanizeProofForCaption(idea.proof);
  if (tone === "sachlich") {
    return `Wichtig ist dabei: Wir arbeiten mit ${proof} und ordnen die Aussage so ein, dass sie nachvollziehbar bleibt.`;
  }
  if (tone === "aktivierend") {
    return pick([
      `Der Aha-Moment: ${proof} macht das Ganze plötzlich viel greifbarer.`,
      `Und ja – ${proof} spielt dabei eine größere Rolle, als man auf den ersten Blick vermutet.`,
      `Am Ende bleibt ein ziemlich einfacher Merksatz hängen. Genau dafür ist der Beitrag gemacht.`,
    ], seed);
  }
  return pick([
    `Was hängen bleiben soll: ${proof} macht aus einem abstrakten Thema etwas, das man sehen und verstehen kann.`,
    `Der Beitrag zeigt nicht nur die schöne Oberfläche, sondern auch den Arbeitsschritt dahinter.`,
    `So wird aus einem technischen Thema ein verständlicher Moment für die Region.`,
  ], seed);
}

function humanizeProofForCaption(proof = "einem konkreten Beispiel") {
  return String(proof)
    .replace("eine belastbare regionale Kennzahl", "einer Zahl aus der Region")
    .replace("ein sichtbares Vorher-Nachher-Ergebnis", "einem sichtbaren Vorher-Nachher-Moment")
    .replace("ein Originalton einer Fachperson", "einer Stimme aus dem Fachteam")
    .replace("ein praktischer Test vor der Kamera", "einem Test direkt vor der Kamera")
    .replace("eine verständliche Beispielrechnung", "einer Rechnung, die man wirklich nachvollziehen kann")
    .replace("ein Vergleich mit einem Alltagsgegenstand", "einem Vergleich aus dem Alltag")
    .replace("eine Karte oder ein konkreter Streckenverlauf", "einer Karte oder einem echten Weg")
    .replace("ein Zeitraffer des tatsächlichen Ablaufs", "einem Zeitraffer aus dem echten Ablauf")
    .replace("eine Messung mit vorher angekündigtem Ergebnis", "einer Messung mit Auflösung")
    .replace("drei echte Community-Antworten", "echten Antworten aus der Community");
}

function captionFormatLine(idea, seed) {
  const lines = {
    Reel: [
      "Im Reel: ein starker Einstieg, echte Bilder und eine kurze Auflösung ohne unnötiges Drumherum.",
      "Kurz, nah dran und mit einem Detail, das man beim nächsten Mal anders sieht.",
    ],
    Carousel: [
      "Im Carousel: erst die Frage, dann die Einordnung, dann der praktische Merksatz.",
      "Slide für Slide wird klarer, was wirklich hinter dem Thema steckt.",
    ],
    Story: [
      "In der Story darf die Community mitraten, reagieren und die nächste Frage stellen.",
      "Kurz antippen, mitraten, Auflösung mitnehmen.",
    ],
    Post: [
      "Ein Bild, ein Gedanke, eine klare Einordnung.",
      "Kein langer Vortrag – nur der Punkt, der hängen bleiben soll.",
    ],
  };
  return pick(lines[idea.format] || lines.Post, seed);
}

function captionCta(idea, tone, seed) {
  if (tone === "sachlich") return idea.cta;
  return pick([
    idea.cta,
    `Was würdest du dazu gern genauer sehen? Schreib’s in die Kommentare.`,
    `Welche Frage sollen wir dazu als Nächstes beantworten?`,
    `Speichern, wenn du solche Einblicke öfter sehen willst.`,
  ], seed);
}

function createYoutubeLongDescription(idea, tone = "nahbar") {
  const intro = tone === "sachlich"
    ? "In diesem Video ordnen wir das Thema ausführlich, verständlich und mit Blick auf die Region ein."
    : tone === "aktivierend"
      ? "Nimm dir ein paar Minuten: Dieses Thema wirkt alltäglich, hat aber mehr Tiefe, als man auf den ersten Blick sieht."
      : "Manche Energiethemen versteht man erst richtig, wenn man sich Zeit nimmt und hinter die Kulissen schaut.";
  return `${intro}

${idea.hook.replace(/^„|“$/g, "")}

Inhalt:
00:00 Einstieg und zentrale Frage
00:30 Warum das Thema relevant ist
02:00 Blick hinter die Kulissen
05:00 Fachliche Einordnung und Belege
08:00 Kritische Fragen, Grenzen und Missverständnisse
11:00 Fazit und nächste Schritte

Worum es geht:
${idea.concept}

Interne Prüfung vor Veröffentlichung:
${(idea.criticalReview?.checks || ["Fakten, Zahlen und konkrete Aussagen vor Veröffentlichung prüfen."]).map((check) => `- ${check}`).join("\n")}

${idea.cta}

${idea.hashtags.join(" ")}`;
}

let activeBriefingIdea = null;

const briefingPlaybooks = {
  Strom: {
    locations: ["Umspannwerk oder Netzstation", "Netzleitstelle", "Straßenraum mit sichtbarer Infrastruktur", "Werkstatt oder Einsatzfahrzeug"],
    otones: ["Was passiert, bevor Strom zuverlässig ankommt?", "Welche Schalthandlung oder Kontrolle wird häufig unterschätzt?", "Woran erkennt man, dass das Netz stabil arbeitet?", "Was sollen Kund:innen bei einer Störung zuerst tun?"],
    props: ["PSA/Helm", "Schaltplan oder Netzskizze", "Messgerät", "Einsatzfahrzeug", "Detailaufnahme Kabel/Schalter"],
  },
  Gas: {
    locations: ["Heizungsraum", "Hausanschlussraum", "Serviceeinsatz vor Ort", "Leitungsabschnitt oder Netzpunkt"],
    otones: ["Warum ist Sicherheit bei Gas immer der erste Punkt?", "Was bedeutet der typische Gasgeruch?", "Welche Prüfung zeigt man am besten vor der Kamera?", "Welche Handlung ist im Verdachtsfall richtig?"],
    props: ["Gaswarngerät", "Prüfprotokoll", "Werkzeugkoffer", "Warnhinweis", "Heizungsdetail"],
  },
  Photovoltaik: {
    locations: ["PV-Dach mit sicherem Zugang", "Wechselrichterraum", "Beratungssituation am Haus", "Blick auf Dachfläche und Verschattung"],
    otones: ["Was entscheidet, ob ein Dach wirklich passt?", "Welche Erwartung an PV stimmt oft nicht?", "Warum ist Eigenverbrauch so wichtig?", "Welche Frage sollte man vor der Planung immer stellen?"],
    props: ["PV-Moduldetail", "Wechselrichter", "Tablet mit Ertragskurve", "Sonnenstands-/Verschattungsskizze", "Sicherheitsausrüstung"],
  },
  Windkraft: {
    locations: ["Windpark", "Servicebereich am Turm", "Landschaftsperspektive mit Anlage", "Wartungssituation"],
    otones: ["Was wird bei einer Wartung tatsächlich geprüft?", "Welche Bürgerfrage kommt am häufigsten?", "Wie ordnet man Geräusche oder Schatten sachlich ein?", "Was sagt der Ertrag über einen guten Windtag?"],
    props: ["Helm und Kletterausrüstung", "Wartungscheckliste", "Messgerät", "Rotorblatt-Detail", "Karte des Standortes"],
  },
  Abwasser: {
    locations: ["Kläranlage", "Rechenanlage", "Labor", "Becken oder Kanalbetrieb", "Gewässer-Auslaufpunkt"],
    otones: ["Was landet täglich hier, obwohl es nicht in die Toilette gehört?", "Welche Stufe der Reinigung wird am häufigsten unterschätzt?", "Wie schützt Abwasserarbeit die Umwelt?", "Was sollte jede:r im Alltag vermeiden?"],
    props: ["Wasserprobe", "Laborflasche", "Schutzhandschuhe", "Rechen-Fundstücke sachlich arrangiert", "Ablaufskizze der Reinigung"],
  },
  Trinkwasser: {
    locations: ["Wasserwerk", "Labor", "Rohrnetzpunkt", "Haushaltsszene mit Wasserhahn"],
    otones: ["Warum ist Trinkwasser so streng kontrolliert?", "Welche Messwerte erklären Qualität verständlich?", "Wie kommt Wasser vom Werk bis zum Glas?", "Was können Haushalte selbst beachten?"],
    props: ["Wasserprobe", "Laborpipette", "Glas Wasser", "Rohrnetzplan", "Messgerät"],
  },
  Fernwärme: {
    locations: ["Fernwärmetrasse", "Hausstation", "Leitwarte", "Baustelle im Straßenraum"],
    otones: ["Was passiert unter der Straße?", "Warum ist eine Hausstation so wichtig?", "Welche Rolle spielt Fernwärme in der Wärmewende?", "Welche Einschränkungen müssen ehrlich erklärt werden?"],
    props: ["Rohrleitungsdetail", "Temperaturanzeige", "Baustellenschild", "Wärmeplan-Skizze", "PSA"],
  },
  Elektromobilität: {
    locations: ["öffentliche Ladesäule", "Ladepark", "Parkplatz mit E-Auto", "Beratungssituation zu Ladeinfrastruktur"],
    otones: ["Was bedeuten die Anzeigen an der Ladesäule?", "Welche Ladefrage kommt am häufigsten?", "Was unterscheidet öffentliches Laden von Laden zu Hause?", "Welche Alltagssorge lässt sich einfach erklären?"],
    props: ["Ladekabel", "Ladesäulen-Display", "E-Auto", "App-Screenshot als Platzhalter", "Steckertypen"],
  },
};

function getBriefingPlaybook(idea) {
  return briefingPlaybooks[idea.topic] || {
    locations: [idea.setting, "realer Ort mit Bezug zum Thema", "Arbeitsplatz einer Fachperson", "Alltagsszene der Zielgruppe"],
    otones: [`Warum ist ${idea.subtheme} für die Zielgruppe relevant?`, "Was wird häufig falsch verstanden?", "Welche konkrete Handlung oder Erkenntnis soll hängen bleiben?", "Was ist die ehrliche Grenze des Themas?"],
    props: ["Smartphone für Behind-the-Scenes", "Notizkarte mit Kernaussage", "thematisches Detailmotiv", "Mikrofon", "Freigabe-/Checkliste"],
  };
}

function getBriefingGoal(idea) {
  const goals = {
    Reel: "Aufmerksamkeit erzeugen, schnell erklären und zur Interaktion führen.",
    Story: "Community aktivieren, Rückfragen sammeln und Nähe erzeugen.",
    Carousel: "Speicherbaren Nutzwert liefern und ein komplexes Thema Schritt für Schritt erklären.",
    Post: "Eine klare Aussage oder Haltung mit starkem Bild und präziser Caption platzieren.",
    "YouTube Long": "Vertrauen und Verständnis durch Tiefe, Kapitelstruktur, echte Stimmen und kritische Einordnung aufbauen.",
  };
  return goals[idea.format] || "Relevanz, Verständnis und Vertrauen für das Thema aufbauen.";
}

function getCoreMessage(idea) {
  return `Das Thema „${idea.topic}“ wird nicht abstrakt erklärt, sondern über „${idea.subtheme}“ konkret gemacht: ${idea.hook.replace(/^„|“$/g, "")}`;
}

function getBriefingShotlist(idea) {
  if (idea.format === "YouTube Long") {
    return [
      "Hook/Cold Open: starke Alltagsszene oder kritische Frage, die das Thema sofort relevant macht.",
      "Establishing: Drehort zeigen, Thema einordnen, Versprechen des Videos formulieren.",
      "Fachperson on camera: kurze Einordnung, warum dieses Thema wichtig ist.",
      "B-Roll-Block: Anlage, Handgriffe, Detailaufnahmen, Displays, Pläne, Wege, Sicherheitsmomente.",
      "Erklärkapitel: Beispielrechnung, Messwert, Prozessgrafik oder Vorher-Nachher-Logik filmen.",
      "Kritische Fragen: Grenzen, Kosten, Aufwand, Sicherheit oder Missverständnisse transparent beantworten.",
      "Fazit: drei Merksätze, nächster Schritt, CTA und offene Community-Frage.",
    ];
  }
  if (idea.format === "Carousel") {
    return [
      "Titelbild: starkes reales Motiv mit klarer Headline-Fläche.",
      "Slide 2: Problem oder häufiges Missverständnis visuell zeigen.",
      "Slide 3: fachliche Auflösung mit Detailaufnahme oder Skizze.",
      "Slide 4: konkreter Tipp, Merksatz oder Entscheidungshilfe.",
      "Optional: Porträt/O-Ton als Vertrauensanker für letzte Karte.",
    ];
  }
  if (idea.format === "Story") {
    return [
      "Frame 1: Frage, Poll oder Slider mit starkem Motiv.",
      "Frame 2: kurze Auflösung mit Fachdetail.",
      "Frame 3: O-Ton oder Blick hinter die Kulissen.",
      "Frame 4: CTA, Fragensticker oder Abstimmung für Folgeinhalt.",
    ];
  }
  if (idea.format === "Reel") {
    return [
      "0–2 Sekunden: visueller Stopper oder überraschender Satz.",
      "2–5 Sekunden: echter Arbeitsmoment, Detail oder Problem zeigen.",
      "5–10 Sekunden: Fachperson erklärt die Kernaussage in einem Satz.",
      "10–18 Sekunden: Beleg, Messwert, Vorher/Nachher oder Alltagstransfer.",
      "18–25 Sekunden: Nutzen und CTA mit klarer Abschlussfrage.",
    ];
  }
  return [
    "Hero-Foto: reales Motiv mit Mensch, Technik oder regionalem Ort.",
    "Detailfoto: Beleg, Bauteil, Werkzeug oder Prozessschritt.",
    "Optionales Porträt: Fachperson mit kurzem Zitat.",
    "Abschlussmotiv: Nutzen für Alltag, Region oder Zielgruppe.",
  ];
}

function getBriefingImages(idea) {
  const playbook = getBriefingPlaybook(idea);
  return [
    `Hauptmotiv: ${idea.visualApproach}`,
    `Menschenmotiv: ${idea.protagonist}`,
    `Belegmotiv: ${idea.proof}`,
    `Drehort-/Kontextmotiv: ${playbook.locations[0]}`,
    "Sicherheits-/Arbeitsdetail, falls sichtbar und freigegeben",
  ];
}

function createBriefingText(idea) {
  const playbook = getBriefingPlaybook(idea);
  const shotlist = getBriefingShotlist(idea);
  const caption = createCaption(idea, idea.preferredTone || "nahbar");
  return [
    `PRODUKTIONSBRIEFING · ${idea.title}`,
    "",
    `Format: ${idea.format} · Plattform: ${idea.platform}`,
    `Thema: ${idea.topic} · Fokus: ${idea.subtheme}`,
    `Ziel des Posts: ${getBriefingGoal(idea)}`,
    `Kernaussage: ${getCoreMessage(idea)}`,
    `Zielgruppe/Perspektive: ${idea.protagonist}`,
    idea.originalPlan ? `Ausgangsplan: ${idea.originalPlan}` : "",
    "",
    "Benötigte Bilder / Shotlist:",
    ...shotlist.map((item, index) => `${index + 1}. ${item}`),
    "",
    "Drehorte:",
    ...playbook.locations.map((item) => `- ${item}`),
    "",
    "Vordefinierte O-Töne / Interviewfragen:",
    ...playbook.otones.map((item) => `- ${item}`),
    "",
    "Requisiten / Produktionscheckliste:",
    ...playbook.props.map((item) => `- ${item}`),
    "- Einverständnis/Freigabe für sichtbare Personen einholen",
    "- Sicherheitsvorgaben am Drehort prüfen",
    "- Fachliche Aussage und Zahlen vor Veröffentlichung gegenprüfen",
    "",
    "Caption / Beschreibung:",
    caption,
    "",
    `Hashtags: ${idea.hashtags.join(" ")}`,
    "",
    "Interne Prüfcheckliste:",
    ...(idea.criticalReview?.checks || ["Fakten vor Veröffentlichung prüfen."]).map((item) => `- ${item}`),
  ].join("\n");
}

function briefingFileName(idea) {
  const slug = `${idea.topic}-${idea.subtheme}-${idea.format}`
    .toLowerCase()
    .replace(/[^a-z0-9äöüß]+/gi, "-")
    .replace(/^-|-$/g, "");
  return `energie-ideenwerk-briefing-${slug || "produktion"}.pdf`;
}

function createBriefingHtml(idea) {
  const playbook = getBriefingPlaybook(idea);
  const shotlist = getBriefingShotlist(idea);
  const images = getBriefingImages(idea);
  const caption = createCaption(idea, idea.preferredTone || "nahbar");
  const section = (title, items) => `
    <section class="briefing-section">
      <h3>${escapeHtml(title)}</h3>
      <ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </section>
  `;
  return `
    <div class="briefing-hero">
      <span class="meta-tag primary">${escapeHtml(idea.format)}</span>
      <span class="meta-tag">${escapeHtml(idea.topic)}</span>
      <span class="meta-tag">${escapeHtml(idea.mechanic)}</span>
      <h3>${escapeHtml(idea.title)}</h3>
      <p>${escapeHtml(idea.hook)}</p>
    </div>
    <div class="briefing-grid">
      <div><span>Ziel</span><strong>${escapeHtml(getBriefingGoal(idea))}</strong></div>
      <div><span>Kernaussage</span><strong>${escapeHtml(getCoreMessage(idea))}</strong></div>
      <div><span>Zielgruppe/Perspektive</span><strong>${escapeHtml(idea.protagonist)}</strong></div>
      <div><span>Freigabe-Level</span><strong>${escapeHtml(idea.criticalReview?.label || "Standardprüfung")}</strong></div>
    </div>
    ${idea.originalPlan ? `<section class="briefing-section"><h3>Ausgangsplan</h3><p>${escapeHtml(idea.originalPlan)}</p></section>` : ""}
    ${section("Benötigte Bilder / Shotlist", shotlist)}
    ${section("Drehorte", playbook.locations)}
    ${section("Vordefinierte O-Töne / Interviewfragen", playbook.otones)}
    ${section("Requisiten / Produktionscheckliste", [
      ...playbook.props,
      "Einverständnis/Freigabe für sichtbare Personen einholen",
      "Sicherheitsvorgaben am Drehort prüfen",
      "Fachliche Aussage und Zahlen vor Veröffentlichung gegenprüfen",
    ])}
    ${section("Benötigte Motive", images)}
    <section class="briefing-section">
      <h3>Caption / Beschreibung</h3>
      <textarea readonly>${escapeHtml(caption)}</textarea>
      <p class="hashtags">${idea.hashtags.map(escapeHtml).join(" ")}</p>
    </section>
    ${section("Interne Prüfcheckliste", idea.criticalReview?.checks || ["Fakten vor Veröffentlichung prüfen."])}
  `;
}

function openBriefing(idea) {
  activeBriefingIdea = idea;
  document.querySelector("#briefingContent").innerHTML = createBriefingHtml(idea);
  document.querySelector("#briefingDialog").showModal();
}

async function downloadBriefingPdf() {
  if (!activeBriefingIdea) return;
  const button = document.querySelector("#downloadBriefingPdfButton");
  const content = document.querySelector("#briefingContent");
  if (!window.html2canvas || !window.jspdf?.jsPDF) {
    printBriefingFallback();
    return;
  }

  button.disabled = true;
  button.textContent = "PDF wird erstellt …";
  const exportNode = document.createElement("div");
  exportNode.className = "briefing-pdf-export";
  exportNode.innerHTML = `
    <div class="briefing-pdf-page">
      <div class="briefing-pdf-brand">
        <strong>Energie-Ideenwerk</strong>
        <span>Produktionsbriefing</span>
      </div>
      ${content.innerHTML}
    </div>
  `;
  document.body.appendChild(exportNode);

  try {
    const canvas = await window.html2canvas(exportNode, {
      scale: 2,
      backgroundColor: "#fffefa",
      useCORS: true,
      logging: false,
      windowWidth: exportNode.scrollWidth,
      windowHeight: exportNode.scrollHeight,
    });
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = 210;
    const pageHeight = 297;
    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const imgData = canvas.toDataURL("image/jpeg", 0.96);
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
    while (heightLeft > 0) {
      position -= pageHeight;
      pdf.addPage();
      pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }
    pdf.save(briefingFileName(activeBriefingIdea));
    showToast("Briefing-PDF wurde erstellt.");
  } catch {
    printBriefingFallback();
  } finally {
    exportNode.remove();
    button.disabled = false;
    button.textContent = "↓ PDF herunterladen";
  }
}

function printBriefingFallback() {
  const printWindow = window.open("", "_blank", "noopener,noreferrer");
  if (!printWindow || !activeBriefingIdea) {
    showToast("PDF-Export war im Browser nicht möglich.");
    return;
  }
  printWindow.document.write(`
    <!doctype html>
    <html lang="de">
      <head>
        <meta charset="utf-8" />
        <title>${escapeHtml(activeBriefingIdea.title)} · Briefing</title>
        <link rel="stylesheet" href="styles.css?v=12" />
      </head>
      <body class="briefing-print-body">
        <div class="briefing-pdf-export print-visible">
          <div class="briefing-pdf-page">
            <div class="briefing-pdf-brand">
              <strong>Energie-Ideenwerk</strong>
              <span>Produktionsbriefing</span>
            </div>
            ${document.querySelector("#briefingContent").innerHTML}
          </div>
        </div>
        <script>
          window.addEventListener("load", () => {
            window.focus();
            window.print();
          });
        <\/script>
      </body>
    </html>
  `);
  printWindow.document.close();
  showToast("Druckdialog zum Speichern als PDF wurde geöffnet.");
}

function createAiImagePrompt(idea) {
  if (!idea) return "";
  const palette = "Energie-Ideenwerk Look: warmes Orange, klares Blau, natürliche helle Bildsprache, regional, seriös, modern";
  const style = document.querySelector("#visualStyle")?.selectedOptions?.[0]?.text || "Editorial & klar";
  const formatInstruction = idea.format === "YouTube Long"
    ? "Erstelle ein realistisches YouTube-Thumbnail und Keyvisual für ein längeres Erklär- oder Reportagevideo, 16:9-kompatible Bildkomposition mit starkem Hauptmotiv, aber ohne Text im Bild."
    : `Erstelle ein realistisches Social-Media-Foto für Energie-Ideenwerk zum Thema „${idea.topic}“.`;
  const cameraVariant = pick([
    "weite Reportageaufnahme mit Mensch und Anlage im Verhältnis",
    "intime Nahaufnahme eines echten Handgriffs mit technischem Kontext im Hintergrund",
    "dynamische Halbtotalen-Perspektive mit regionalem Ort erkennbar",
    "ruhige Hero-Aufnahme bei Morgen- oder Abendlicht, ohne Werbeübertreibung",
  ], hash(idea.id || idea.title) + studioVariant);
  const subject = {
    Photovoltaik: "reale Photovoltaik-Anlage auf einem Dach, Techniker:in in Arbeitsschutz, keine Fantasie-Architektur",
    Windkraft: "Windenergieanlage in sächsischer Landschaft, Serviceteam, natürliche Größenverhältnisse",
    Elektromobilität: "öffentliche Ladesäule, E-Auto, echte Hand am Ladekabel, urban-regionaler Kontext",
    Abwasser: "moderne Kläranlage, Laborprobe, Wassertechnik, sauber und dokumentarisch",
    Trinkwasser: "Wasserwerk, Laboranalyse, klares Glas Wasser, hochwertige Nahaufnahme",
    Fernwärme: "Fernwärmetrasse, Hausstation oder Leitwarte, technisches Team im Einsatz",
    Gas: "sichere Gas-Servicekontrolle, Heizanlage, warme Wohnsituation plus technisches Detail",
    Strom: "Umspannwerk, Netzleitstelle oder Kabeltechnik, Fachkraft bei sicherer Arbeit",
    "Berufe & Ausbildung": "authentische Auszubildende im technischen Arbeitsmoment, Team, Werkstatt",
  }[idea.topic] || `authentische Szene rund um ${idea.topic}, Menschen, Technik und regionaler Nutzen`;
  return [
    formatInstruction,
    `Motiv: ${subject}.`,
    `Fachlicher Fokus: ${idea.subtheme}. Story-Konflikt: ${idea.concept.match(/Fachlicher Kern: ([^.]+)/)?.[1] || idea.title}.`,
    `Bildstil: ${style}, dokumentarisch, echte Anlage, echte Menschen, kein Text im Bild, keine Logos außer wenn dezent als Platzhalter, keine Illustration, keine Stockfoto-Klischees.`,
    `Komposition: ${cameraVariant}, Platz für kurze Headline im oberen oder unteren Drittel, 4:5 Instagram-Format, hochwertige Tiefenschärfe, natürliches Licht.`,
    palette,
  ].join(" ");
}

function syncAiImagePrompt() {
  const field = document.querySelector("#aiImagePrompt");
  if (!field || !activeStudioIdea) return;
  field.value = createAiImagePrompt(activeStudioIdea);
}

function aiGeneratorUrl() {
  const prompt = document.querySelector("#aiImagePrompt")?.value || "";
  return `https://chatgpt.com/?q=${encodeURIComponent(prompt)}`;
}

function studioSlideCount(idea) {
  if (idea.format === "Carousel") return 4;
  if (idea.format === "YouTube Long") return 6;
  if (idea.format === "Reel" || idea.format === "Story") return 3;
  return 1;
}

function visualDimensions(idea) {
  return idea.format === "Reel" || idea.format === "Story" || idea.format === "YouTube Long"
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
      x: 76, y: 104, text: "Energie", size: 48, color: "#ffffff",
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
      text: "#energieideen  ·  Energie für Chemnitz und Südsachsen",
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
    ctx.fillRect(layer.x, layer.y + layer.size * 0.16, layer.size * 2.05, Math.max(5, layer.size * 0.08));
    ctx.font = `600 ${Math.max(14, layer.size * 0.38)}px Urbanist, Arial`;
    ctx.fillStyle = layer.color;
    ctx.fillText("Energie-Ideenwerk", layer.x + 2, layer.y + layer.size * 0.55);
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
    const count = studioSlideCount(activeStudioIdea);
    const sceneDuration = activeStudioIdea.format === "YouTube Long" ? 3200 : 2500;
    const elapsed = (now - studioAnimationStarted) % (count * sceneDuration);
    const slide = Math.floor(elapsed / sceneDuration);
    const localProgress = Math.min(1, (elapsed % 2500) / 650);
    activeStudioSlide = slide;
    drawStudioSlide(canvas, activeStudioIdea, slide, localProgress);
    document.querySelector("#studioSlideLabel").textContent = `${activeStudioIdea.format === "YouTube Long" ? "Kapitel" : "Szene"} ${slide + 1} von ${count}`;
    studioAnimationId = requestAnimationFrame(frame);
  };
  studioAnimationId = requestAnimationFrame(frame);
}

function renderStudioVisual(animate = true) {
  if (!activeStudioIdea) return;
  const isVideo = activeStudioIdea.format === "Reel" || activeStudioIdea.format === "Story" || activeStudioIdea.format === "YouTube Long";
  const isLongVideo = activeStudioIdea.format === "YouTube Long";
  const count = studioSlideCount(activeStudioIdea);
  const canvas = document.querySelector("#postCanvas");
  document.querySelector("#studioFormatBadge").textContent = activeStudioIdea.format;
  document.querySelector("#videoIndicator").hidden = !isVideo;
  document.querySelector("#studioSlideLabel").textContent =
    `${isLongVideo ? "Kapitel" : isVideo ? "Szene" : "Motiv"} ${activeStudioSlide + 1} von ${count}`;
  document.querySelector("#studioNote").textContent = isVideo
    ? isLongVideo
      ? "Die Vorschau zeigt Kapitelbilder. Der Produktionsplan darunter beschreibt Aufbau, Kapitel und Retention-Punkte für ein längeres YouTube-Video."
      : "Die Vorschau nutzt ein echtes Themenmotiv. Der Drehplan darunter beschreibt drei reale Aufnahmen für das finale Reel."
    : count > 1
      ? "Alle Carousel-Slides können einzeln oder gemeinsam als PNG-Dateien heruntergeladen werden."
      : "Das Motiv wird lokal erstellt und kann direkt als PNG heruntergeladen werden.";
  document.querySelector("#downloadAssetButton").textContent = isVideo
    ? isLongVideo ? "↓ Kapitelbilder herunterladen" : "↓ Video herunterladen"
    : count > 1
      ? "↓ Alle Bilder herunterladen"
      : "↓ Bild herunterladen";
  document.querySelector("#productionTitle").textContent = isVideo
    ? isLongVideo ? "YouTube-Long-Konzept mit 6 Kapiteln" : "Videoansatz mit 3 realen Szenen"
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
    document.querySelector("#shotlist").innerHTML = isLongVideo
      ? `
        <li><strong>0:00–0:30 · Hook:</strong> Starke Alltagsfrage, klares Versprechen und visuelles Thema – ${subject}.</li>
        <li><strong>0:30–2:00 · Ausgangslage:</strong> Problem, Missverständnis oder regionale Relevanz verständlich aufbauen.</li>
        <li><strong>2:00–5:00 · Vor Ort:</strong> echte Anlage, Team, Handgriffe, B-Roll und konkrete Beobachtungen.</li>
        <li><strong>5:00–8:00 · Fachteil:</strong> Kennzahl, Beispielrechnung, Mythos oder technische Erklärung mit Beleg.</li>
        <li><strong>8:00–11:00 · Kritische Fragen:</strong> Grenzen, Kosten, Aufwand, Sicherheit oder Zielkonflikt fair einordnen.</li>
        <li><strong>11:00–Ende · Fazit:</strong> drei Merksätze, nächster Schritt und Community-Frage: „${escapeHtml(activeStudioIdea.cta)}“</li>
      `
      : `
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
  syncAiImagePrompt();
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
  const isLongVideo = activeStudioIdea.format === "YouTube Long";
  const slug = activeStudioIdea.topic.toLowerCase().replace(/[^a-z0-9äöüß]+/gi, "-");
  const mediaPath = selectedMediaPath();
  await loadMedia(mediaPath);
  if (!isVideo || isLongVideo) {
    stopStudioAnimation();
    const count = studioSlideCount(activeStudioIdea);
    for (let index = 0; index < count; index += 1) {
      const canvas = document.createElement("canvas");
      drawStudioSlide(canvas, activeStudioIdea, index);
      downloadCanvas(canvas, `energie-ideenwerk-${slug}-${isLongVideo ? "kapitel" : "slide"}-${index + 1}.png`);
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
  link.download = `energie-ideenwerk-${slug}-video.webm`;
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
  localStorage.setItem("energie-ideenwerk-favorites", JSON.stringify(favorites));
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
    "Konzept", "CTA", "Interne Prüfung", "Prüfpunkte", "Hashtags",
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
    idea.criticalReview?.label || "Standardprüfung",
    (idea.criticalReview?.checks || []).join(" | "),
    idea.hashtags.join(" "),
  ]);
  const csv = [headers, ...rows]
    .map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(";"))
    .join("\n");
  const blob = new Blob([`\ufeff${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `energie-ideenwerk-content-ideen-${new Date().toISOString().slice(0, 10)}.csv`;
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
  topics.push({ name, icon: "＋", keywords: [name.replaceAll(" ", ""), "EnergieIdeenwerk"] });
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

document.querySelectorAll("#campaignTheme, #campaignDuration, #campaignFrequency, #campaignStart, #campaignArc").forEach((field) => {
  const updateCampaignPreview = () => {
    if (!currentIdeas.length) return;
    const activeTopics = topics.filter((topic) => selectedTopics.has(topic.name));
    renderCampaignBoard(getSettings(), activeTopics);
  };
  field.addEventListener("input", updateCampaignPreview);
  field.addEventListener("change", updateCampaignPreview);
});

["virality", "regionality", "expertise", "emotion"].forEach((id) => {
  const slider = document.querySelector(`#${id}`);
  const output = document.querySelector(`#${id}Value`);
  slider.addEventListener("input", () => {
    output.textContent = slider.value;
  });
});

document.querySelector("#generateButton").addEventListener("click", generateIdeas);
document.querySelector("#generateFromPlanButton").addEventListener("click", generateFromConcretePlan);
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

const briefingDialog = document.querySelector("#briefingDialog");
document.querySelector("#closeBriefing").addEventListener("click", () => briefingDialog.close());
briefingDialog.addEventListener("click", (event) => {
  if (event.target === briefingDialog) briefingDialog.close();
});
document.querySelector("#copyBriefingButton").addEventListener("click", async () => {
  if (!activeBriefingIdea) return;
  try {
    await navigator.clipboard.writeText(createBriefingText(activeBriefingIdea));
    showToast("Briefing wurde kopiert.");
  } catch {
    showToast("Kopieren war im Browser nicht möglich.");
  }
});
document.querySelector("#downloadBriefingPdfButton").addEventListener("click", downloadBriefingPdf);
document.querySelector("#briefingToStudioButton").addEventListener("click", () => {
  if (!activeBriefingIdea) return;
  briefingDialog.close();
  openPostStudio(activeBriefingIdea);
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
document.querySelector("#visualStyle").addEventListener("change", syncAiImagePrompt);
document.querySelector("#regenerateVisual").addEventListener("click", () => {
  studioVariant += 1;
  document.querySelector("#captionText").value = createCaption(
    activeStudioIdea,
    document.querySelector("#captionTone").value,
  );
  updateCaptionLength();
  syncAiImagePrompt();
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

document.querySelector("#refreshAiPrompt").addEventListener("click", () => {
  if (!activeStudioIdea) return;
  studioVariant += 1;
  syncAiImagePrompt();
  showToast("KI-Bildprompt wurde neu formuliert.");
});

document.querySelector("#copyAiPrompt").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(document.querySelector("#aiImagePrompt").value);
    showToast("KI-Bildprompt wurde kopiert.");
  } catch {
    showToast("Kopieren war im Browser nicht möglich.");
  }
});

document.querySelector("#openAiGenerator").addEventListener("click", () => {
  if (!activeStudioIdea) return;
  window.open(aiGeneratorUrl(), "_blank", "noopener,noreferrer");
});

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
