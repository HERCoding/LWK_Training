const quizzes = {
  diseases: [
    {
        "image":  "assets/images/image1.jpeg",
        "disease":  "Echter Mehltau",
        "bbch":  "Anfang März (BBCH 25–29 – Bestockungsende)",
        "background":  "Pilz tritt bei kühlen Temperaturen und dichten Beständen auf",
        "month":  "März",
        "notes":  "Früher Bestandsschutz, v. a. bei anfälligen Sorten; Witterung beobachten"
    },
    {
        "image":  "assets/images/image2.jpeg",
        "disease":  "Echter Mehltau",
        "bbch":  "Anfang März (BBCH 25–29 – Bestockungsende)",
        "background":  "Pilz tritt bei kühlen Temperaturen und dichten Beständen auf",
        "month":  "März",
        "notes":  "Früher Bestandsschutz, v. a. bei anfälligen Sorten; Witterung beobachten"
    },
    {
        "image":  "assets/images/image3.jpeg",
        "disease":  "Echter Mehltau",
        "bbch":  "Anfang März (BBCH 25–29 – Bestockungsende)",
        "background":  "Pilz tritt bei kühlen Temperaturen und dichten Beständen auf",
        "month":  "März",
        "notes":  "Früher Bestandsschutz, v. a. bei anfälligen Sorten; Witterung beobachten"
    },
    {
        "image":  "assets/images/image4.jpeg",
        "disease":  "Echter Mehltau",
        "bbch":  "Anfang März (BBCH 25–29 – Bestockungsende)",
        "background":  "Pilz tritt bei kühlen Temperaturen und dichten Beständen auf",
        "month":  "März",
        "notes":  "Früher Bestandsschutz, v. a. bei anfälligen Sorten; Witterung beobachten"
    },
    {
        "image":  "assets/images/image5.jpeg",
        "disease":  "Gelbrost",
        "bbch":  "Stadium 31–34 (Beginn Schossen – 1.–2. Knoten sichtbar)",
        "background":  "Rostpilz breitet sich früh bei feuchter ; kühler Witterung aus",
        "month":  "April",
        "notes":  "Kontrolle besonders bei anfälligen Sorten; Spritzung bei ersten Symptomen"
    },
    {
        "image":  "assets/images/image6.jpeg",
        "disease":  "Gelbrost",
        "bbch":  "Stadium 31–34 (Beginn Schossen – 1.–2. Knoten sichtbar)",
        "background":  "Rostpilz breitet sich früh bei feuchter ; kühler Witterung aus",
        "month":  "April",
        "notes":  "Kontrolle besonders bei anfälligen Sorten; Spritzung bei ersten Symptomen"
    },
    {
        "image":  "assets/images/image7.jpeg",
        "disease":  "Gelbrost",
        "bbch":  "Stadium 31–34 (Beginn Schossen – 1.–2. Knoten sichtbar)",
        "background":  "Rostpilz breitet sich früh bei feuchter ; kühler Witterung aus",
        "month":  "April",
        "notes":  "Kontrolle besonders bei anfälligen Sorten; Spritzung bei ersten Symptomen"
    },
    {
        "image":  "assets/images/image8.jpeg",
        "disease":  "Gelbrost",
        "bbch":  "Stadium 31–34 (Beginn Schossen – 1.–2. Knoten sichtbar)",
        "background":  "Rostpilz breitet sich früh bei feuchter ; kühler Witterung aus",
        "month":  "April",
        "notes":  "Kontrolle besonders bei anfälligen Sorten; Spritzung bei ersten Symptomen"
    },
    {
        "image":  "assets/images/image9.jpeg",
        "disease":  "Braunrost",
        "bbch":  "Stadium 49–51 (Fahnenblatt bis Ährenschieben)",
        "background":  "Befällt obere Blätter ; schwächt Photosyntheseleistung",
        "month":  "Mai",
        "notes":  "Wichtig: Ertragssicherung durch gesundes Fahnenblatt"
    },
    {
        "image":  "assets/images/image10.jpeg",
        "disease":  "Braunrost",
        "bbch":  "Stadium 49–51 (Fahnenblatt bis Ährenschieben)",
        "background":  "Befällt obere Blätter ; schwächt Photosyntheseleistung",
        "month":  "Mai",
        "notes":  "Wichtig: Ertragssicherung durch gesundes Fahnenblatt"
    },
    {
        "image":  "assets/images/image11.jpeg",
        "disease":  "Braunrost",
        "bbch":  "Stadium 49–51 (Fahnenblatt bis Ährenschieben)",
        "background":  "Befällt obere Blätter ; schwächt Photosyntheseleistung",
        "month":  "Mai",
        "notes":  "Wichtig: Ertragssicherung durch gesundes Fahnenblatt"
    },
    {
        "image":  "assets/images/image12.jpeg",
        "disease":  "Septoria Tritici (Blattdürre)",
        "bbch":  "Anfang März (BBCH 32 – 65 Schossen - Blüte ) T1: EC 32-37 (Schossen) T2: EC 39 (Fahnenblatt)",
        "background":  "Blattpilzkrankheit ; feuchtwarmer Witterung ; häufige Niederschläge; geringere Assimilation",
        "month":  "April - Juni",
        "notes":  "Früher Bestandsschutz, v. a. bei anfälligen Sorten; Witterung beobachten"
    },
    {
        "image":  "assets/images/image13.jpeg",
        "disease":  "Septoria Tritici (Blattdürre)",
        "bbch":  "Anfang März (BBCH 32 – 65 Schossen - Blüte ) T1: EC 32-37 (Schossen) T2: EC 39 (Fahnenblatt)",
        "background":  "Blattpilzkrankheit ; feuchtwarmer Witterung ; häufige Niederschläge; geringere Assimilation",
        "month":  "April - Juni",
        "notes":  "Früher Bestandsschutz, v. a. bei anfälligen Sorten; Witterung beobachten"
    },
    {
        "image":  "assets/images/image14.jpeg",
        "disease":  "Ähren-Fusarium",
        "bbch":  "Anfang März (BBCH 49 – 65 Ährenschieben - Blüte )",
        "background":  "Blüte ist der wichtigste Infektionszeitpunkt; Fungizide schützen die offenen Blüten vor Sporeninfektion",
        "month":  "Mai - Juni",
        "notes":  "Warme Temperaturen ; feuchte Witterung während der Blüte ; vorzeitig weiß gebleichte Ährenteile ; schrumpelige Körner"
    },
    {
        "image":  "assets/images/image15.jpeg",
        "disease":  "Ähren-Fusarium",
        "bbch":  "Anfang März (BBCH 49 – 65 Ährenschieben - Blüte )",
        "background":  "Blüte ist der wichtigste Infektionszeitpunkt; Fungizide schützen die offenen Blüten vor Sporeninfektion",
        "month":  "Mai - Juni",
        "notes":  "Warme Temperaturen ; feuchte Witterung während der Blüte ; vorzeitig weiß gebleichte Ährenteile ; schrumpelige Körner"
    },
    {
        "image":  "assets/images/image16.jpeg",
        "disease":  "Halmbruch",
        "bbch":  "Anfang März (BBCH 30 – 39 Schossen - Fahenblatt )",
        "background":  "Infektion meist bereits im Herbst/Winter; Pilz wächst im Halmgewebe u. zerstört Leitbahnen; Wasser u. Nährstoffe eingeschränkt",
        "month":  "März - Mai",
        "notes":  "Oft durch enge Getreidefruchtfolge u. frühe Saat; durch feuchte u. kühle Witterung; dichte Bestände"
    },
    {
        "image":  "assets/images/image17.jpeg",
        "disease":  "Schneeschimmel",
        "bbch":  "Anfang März (BBCH 10 – 30 Keimblatt – Bestockung )",
        "background":  "Pilzinfektion bereits im Herbst; Hauptphase während des Winters; unter Schneedecke u. feuchter Witterung ; Schädigung nach der Schneeschmelze sichtbar",
        "month":  "Oktober - März",
        "notes":  "Frühe Saat und dichte Bestände; Schneedecke fördert Krankheit \u003e\u003e feuchtes Mikroklima; Folge : Lückige Bestände u. schlechte Bestockung"
    },
    {
        "image":  "assets/images/image18.jpeg",
        "disease":  "Schneeschimmel",
        "bbch":  "Anfang März (BBCH 10 – 30 Keimblatt – Bestockung )",
        "background":  "Pilzinfektion bereits im Herbst; Hauptphase während des Winters; unter Schneedecke u. feuchter Witterung ; Schädigung nach der Schneeschmelze sichtbar",
        "month":  "Oktober - März",
        "notes":  "Frühe Saat und dichte Bestände; Schneedecke fördert Krankheit \u003e\u003e feuchtes Mikroklima; Folge : Lückige Bestände u. schlechte Bestockung"
    }
],
  weeds: [
    {
        "image":  "assets/weeds/weed-image1.jpeg",
        "category":  "Kräuter",
        "name":  "Klettenlabkraut",
        "details":  "Herbst/Frühjahr; v. a. Wintergetreide, Raps",
        "fullText":  "Kräuter: Klettenlabkraut - Herbst/Frühjahr; v. a. Wintergetreide, Raps"
    },
    {
        "image":  "assets/weeds/weed-image2.jpeg",
        "category":  "Kräuter",
        "name":  "Klettenlabkraut",
        "details":  "Herbst/Frühjahr; v. a. Wintergetreide, Raps",
        "fullText":  "Kräuter: Klettenlabkraut - Herbst/Frühjahr; v. a. Wintergetreide, Raps"
    },
    {
        "image":  "assets/weeds/weed-image3.png",
        "category":  "Kräuter",
        "name":  "Kamille",
        "details":  "Herbst/Frühjahr; Getreide, Raps, Hackfrüchte",
        "fullText":  "Kräuter: Kamille - Herbst/Frühjahr; Getreide, Raps, Hackfrüchte"
    },
    {
        "image":  "assets/weeds/weed-image4.png",
        "category":  "Kräuter",
        "name":  "Windenknöterich",
        "details":  "Frühjahr; Sommergetreide, Mais, Zuckerrüben",
        "fullText":  "Kräuter: Windenknöterich - Frühjahr; Sommergetreide, Mais, Zuckerrüben"
    },
    {
        "image":  "assets/weeds/weed-image5.gif",
        "category":  "Kräuter",
        "name":  "Windenknöterich",
        "details":  "Frühjahr; Sommergetreide, Mais, Zuckerrüben",
        "fullText":  "Kräuter: Windenknöterich - Frühjahr; Sommergetreide, Mais, Zuckerrüben"
    },
    {
        "image":  "assets/weeds/weed-image6.jpeg",
        "category":  "Kräuter",
        "name":  "Windenknöterich",
        "details":  "Frühjahr; Sommergetreide, Mais, Zuckerrüben",
        "fullText":  "Kräuter: Windenknöterich - Frühjahr; Sommergetreide, Mais, Zuckerrüben"
    },
    {
        "image":  "assets/weeds/weed-image7.png",
        "category":  "Kräuter",
        "name":  "Hohlzahn",
        "details":  "Herbst/Frühjahr; Wintergetreide, Raps",
        "fullText":  "Kräuter: Hohlzahn - Herbst/Frühjahr; Wintergetreide, Raps"
    },
    {
        "image":  "assets/weeds/weed-image8.png",
        "category":  "Kräuter",
        "name":  "Ehrenpreis",
        "details":  "Herbst/Frühjahr; Wintergetreide, Raps",
        "fullText":  "Kräuter: Ehrenpreis - Herbst/Frühjahr; Wintergetreide, Raps"
    },
    {
        "image":  "assets/weeds/weed-image9.jpeg",
        "category":  "Kräuter",
        "name":  "Vogelmiere",
        "details":  "ganzjährig keimfähig; alle Kulturen, v. a. Winterungen",
        "fullText":  "Kräuter: Vogelmiere - ganzjährig keimfähig; alle Kulturen, v. a. Winterungen"
    },
    {
        "image":  "assets/weeds/weed-image10.jpeg",
        "category":  "Kräuter",
        "name":  "Ackerstiefmütterchen",
        "details":  "Herbst; Wintergetreide, Raps",
        "fullText":  "Kräuter: Ackerstiefmütterchen - Herbst; Wintergetreide, Raps"
    },
    {
        "image":  "assets/weeds/weed-image11.png",
        "category":  "Kräuter",
        "name":  "Ackerstiefmütterchen",
        "details":  "Herbst; Wintergetreide, Raps",
        "fullText":  "Kräuter: Ackerstiefmütterchen - Herbst; Wintergetreide, Raps"
    },
    {
        "image":  "assets/weeds/weed-image12.png",
        "category":  "Kräuter",
        "name":  "Rote Taubnessel",
        "details":  "Herbst/Frühjahr; Getreide, Hackfrüchte",
        "fullText":  "Kräuter: Rote Taubnessel - Herbst/Frühjahr; Getreide, Hackfrüchte"
    },
    {
        "image":  "assets/weeds/weed-image13.jpeg",
        "category":  "Kräuter",
        "name":  "Storchschnabel",
        "details":  "Herbst/Frühjahr; Getreide, Raps",
        "fullText":  "Kräuter: Storchschnabel - Herbst/Frühjahr; Getreide, Raps"
    },
    {
        "image":  "assets/weeds/weed-image14.png",
        "category":  "Kräuter",
        "name":  "Storchschnabel",
        "details":  "Herbst/Frühjahr; Getreide, Raps",
        "fullText":  "Kräuter: Storchschnabel - Herbst/Frühjahr; Getreide, Raps"
    },
    {
        "image":  "assets/weeds/weed-image15.png",
        "category":  "Kräuter",
        "name":  "Klatschmohn",
        "details":  "Herbst/Frühjahr; Wintergetreide",
        "fullText":  "Kräuter: Klatschmohn - Herbst/Frühjahr; Wintergetreide"
    },
    {
        "image":  "assets/weeds/weed-image16.jpeg",
        "category":  "Kräuter",
        "name":  "Kornblume",
        "details":  "Herbst/Frühjahr; Wintergetreide",
        "fullText":  "Kräuter: Kornblume - Herbst/Frühjahr; Wintergetreide"
    },
    {
        "image":  "assets/weeds/weed-image17.png",
        "category":  "Kräuter",
        "name":  "Kornblume",
        "details":  "Herbst/Frühjahr; Wintergetreide",
        "fullText":  "Kräuter: Kornblume - Herbst/Frühjahr; Wintergetreide"
    },
    {
        "image":  "assets/weeds/weed-image18.png",
        "category":  "Kräuter",
        "name":  "Acker-Kratzdistel",
        "details":  "mehrjährig, Austrieb Frühjahr; Getreide, Grünland",
        "fullText":  "Kräuter: Acker-Kratzdistel - mehrjährig, Austrieb Frühjahr; Getreide, Grünland"
    },
    {
        "image":  "assets/weeds/weed-image19.png",
        "category":  "Kräuter",
        "name":  "Hirtentäschel",
        "details":  "keimt ganzjährig; alle Kulturen",
        "fullText":  "Kräuter: Hirtentäschel - keimt ganzjährig; alle Kulturen"
    },
    {
        "image":  "assets/weeds/weed-image20.jpeg",
        "category":  "Kräuter",
        "name":  "Hirtentäschel",
        "details":  "keimt ganzjährig; alle Kulturen",
        "fullText":  "Kräuter: Hirtentäschel - keimt ganzjährig; alle Kulturen"
    },
    {
        "image":  "assets/weeds/weed-image21.png",
        "category":  "Kräuter",
        "name":  "Hahnenfuß",
        "details":  "Frühjahr; Grünland, feuchte Äcker",
        "fullText":  "Kräuter: Hahnenfuß - Frühjahr; Grünland, feuchte Äcker"
    },
    {
        "image":  "assets/weeds/weed-image22.jpeg",
        "category":  "Kräuter",
        "name":  "Hahnenfuß",
        "details":  "Frühjahr; Grünland, feuchte Äcker",
        "fullText":  "Kräuter: Hahnenfuß - Frühjahr; Grünland, feuchte Äcker"
    },
    {
        "image":  "assets/weeds/weed-image23.jpeg",
        "category":  "Kräuter",
        "name":  "Erdrauch",
        "details":  "Frühjahr; Getreide, Raps",
        "fullText":  "Kräuter: Erdrauch - Frühjahr; Getreide, Raps"
    },
    {
        "image":  "assets/weeds/weed-image24.jpeg",
        "category":  "Kräuter",
        "name":  "Erdrauch",
        "details":  "Frühjahr; Getreide, Raps",
        "fullText":  "Kräuter: Erdrauch - Frühjahr; Getreide, Raps"
    },
    {
        "image":  "assets/weeds/weed-image25.jpeg",
        "category":  "Kräuter",
        "name":  "Hundskerbel",
        "details":  "Herbst/Frühjahr; Wintergetreide",
        "fullText":  "Kräuter: Hundskerbel - Herbst/Frühjahr; Wintergetreide"
    },
    {
        "image":  "assets/weeds/weed-image26.jpeg",
        "category":  "Kräuter",
        "name":  "Hundskerbel",
        "details":  "Herbst/Frühjahr; Wintergetreide",
        "fullText":  "Kräuter: Hundskerbel - Herbst/Frühjahr; Wintergetreide"
    },
    {
        "image":  "assets/weeds/weed-image27.jpeg",
        "category":  "Kräuter",
        "name":  "Weißer Gänsefuß",
        "details":  "Massenkeimer; Mais, Rüben, Kartoffeln",
        "fullText":  "Kräuter: Weißer Gänsefuß - Massenkeimer; Mais, Rüben, Kartoffeln"
    },
    {
        "image":  "assets/weeds/weed-image28.jpeg",
        "category":  "Kräuter",
        "name":  "Weißer Gänsefuß",
        "details":  "Massenkeimer; Mais, Rüben, Kartoffeln",
        "fullText":  "Kräuter: Weißer Gänsefuß - Massenkeimer; Mais, Rüben, Kartoffeln"
    },
    {
        "image":  "assets/weeds/weed-image29.jpeg",
        "category":  "Kräuter",
        "name":  "Weißer Gänsefuß",
        "details":  "Massenkeimer; Mais, Rüben, Kartoffeln",
        "fullText":  "Kräuter: Weißer Gänsefuß - Massenkeimer; Mais, Rüben, Kartoffeln"
    },
    {
        "image":  "assets/weeds/weed-image30.png",
        "category":  "Gräser",
        "name":  "Ackerfuchsschwanz",
        "details":  "Herbst; Wintergetreide",
        "fullText":  "Gräser: Ackerfuchsschwanz - Herbst; Wintergetreide"
    },
    {
        "image":  "assets/weeds/weed-image31.jpeg",
        "category":  "Gräser",
        "name":  "Ackerfuchsschwanz",
        "details":  "Herbst; Wintergetreide",
        "fullText":  "Gräser: Ackerfuchsschwanz - Herbst; Wintergetreide"
    },
    {
        "image":  "assets/weeds/weed-image32.png",
        "category":  "Gräser",
        "name":  "Gemeiner Windhalm",
        "details":  "Herbst; Wintergetreide",
        "fullText":  "Gräser: Gemeiner Windhalm - Herbst; Wintergetreide"
    },
    {
        "image":  "assets/weeds/weed-image33.png",
        "category":  "Gräser",
        "name":  "Gemeiner Windhalm",
        "details":  "Herbst; Wintergetreide",
        "fullText":  "Gräser: Gemeiner Windhalm - Herbst; Wintergetreide"
    },
    {
        "image":  "assets/weeds/weed-image34.jpeg",
        "category":  "Gräser",
        "name":  "Trespe",
        "details":  "Herbst; Getreide",
        "fullText":  "Gräser: Trespe - Herbst; Getreide"
    },
    {
        "image":  "assets/weeds/weed-image35.jpeg",
        "category":  "Gräser",
        "name":  "Trespe",
        "details":  "Herbst; Getreide",
        "fullText":  "Gräser: Trespe - Herbst; Getreide"
    },
    {
        "image":  "assets/weeds/weed-image36.png",
        "category":  "Gräser",
        "name":  "Rispengras",
        "details":  "keimt ganzjährig; Grünland, Getreide",
        "fullText":  "Gräser: Rispengras - keimt ganzjährig; Grünland, Getreide"
    },
    {
        "image":  "assets/weeds/weed-image37.jpeg",
        "category":  "Gräser",
        "name":  "Rispengras",
        "details":  "keimt ganzjährig; Grünland, Getreide",
        "fullText":  "Gräser: Rispengras - keimt ganzjährig; Grünland, Getreide"
    },
    {
        "image":  "assets/weeds/weed-image38.png",
        "category":  "Gräser",
        "name":  "Weidelgras",
        "details":  "Frühjahr/Herbst; Grünland, Getreide",
        "fullText":  "Gräser: Weidelgras - Frühjahr/Herbst; Grünland, Getreide"
    },
    {
        "image":  "assets/weeds/weed-image39.png",
        "category":  "Gräser",
        "name":  "Weidelgras",
        "details":  "Frühjahr/Herbst; Grünland, Getreide",
        "fullText":  "Gräser: Weidelgras - Frühjahr/Herbst; Grünland, Getreide"
    },
    {
        "image":  "assets/weeds/weed-image40.jpeg",
        "category":  "Gräser",
        "name":  "Hühner-Hirse",
        "details":  "wärmeliebend; Mais, Hackfrüchte",
        "fullText":  "Gräser: Hühner-Hirse – wärmeliebend; Mais, Hackfrüchte"
    },
    {
        "image":  "assets/weeds/weed-image41.jpeg",
        "category":  "Gräser",
        "name":  "Hühner-Hirse",
        "details":  "wärmeliebend; Mais, Hackfrüchte",
        "fullText":  "Gräser: Hühner-Hirse – wärmeliebend; Mais, Hackfrüchte"
    },
    {
        "image":  "assets/weeds/weed-image42.jpeg",
        "category":  "Gräser",
        "name":  "Borsten-Hirse",
        "details":  "wärmeliebend; Mais, Hackfrüchte",
        "fullText":  "Gräser: Borsten-Hirse – wärmeliebend; Mais, Hackfrüchte"
    },
    {
        "image":  "assets/weeds/weed-image43.jpeg",
        "category":  "Gräser",
        "name":  "Borsten-Hirse",
        "details":  "wärmeliebend; Mais, Hackfrüchte",
        "fullText":  "Gräser: Borsten-Hirse – wärmeliebend; Mais, Hackfrüchte"
    }
]
};

quizzes.maizeWeeds = [
  {
    image: "assets/weeds-maize/maize-weed-image1.png",
    category: "Unkräuter im Mais",
    name: "Ackerstiefmütterchen",
    details: "Auftreten laut Vorlage (+ / +++ / -).",
    fullText: "",
    scheduleImage: "assets/weeds-maize-labels/maize-weed-label-1.png"
  },
  {
    image: "assets/weeds-maize/maize-weed-image2.png",
    category: "Unkräuter im Mais",
    name: "Borstenhirse-Arten",
    details: "Auftreten laut Vorlage (+ / +++ / -).",
    fullText: "",
    scheduleImage: "assets/weeds-maize-labels/maize-weed-label-2.png"
  },
  {
    image: "assets/weeds-maize/maize-weed-image3.png",
    category: "Unkräuter im Mais",
    name: "Kamille-Arten",
    details: "Auftreten laut Vorlage (+ / +++ / -).",
    fullText: "",
    scheduleImage: "assets/weeds-maize-labels/maize-weed-label-3.png"
  },
  {
    image: "assets/weeds-maize/maize-weed-image4.png",
    category: "Unkräuter im Mais",
    name: "Fingerhirse-Arten",
    details: "Auftreten laut Vorlage (+ / +++ / -).",
    fullText: "",
    scheduleImage: "assets/weeds-maize-labels/maize-weed-label-4.png"
  },
  {
    image: "assets/weeds-maize/maize-weed-image5.png",
    category: "Unkräuter im Mais",
    name: "Flughafer",
    details: "Original-Text aus der Vorlage.",
    fullText: "Flughafer (Mai – Juli)"
  },
  {
    image: "assets/weeds-maize/maize-weed-image6.png",
    category: "Unkräuter im Mais",
    name: "Hühnerhirse",
    details: "Auftreten laut Vorlage (+ / +++ / -).",
    fullText: "",
    scheduleImage: "assets/weeds-maize-labels/maize-weed-label-6.png"
  },
  {
    image: "assets/weeds-maize/maize-weed-image7.png",
    category: "Unkräuter im Mais",
    name: "Amarant-Arten",
    details: "Auftreten laut Vorlage (+ / +++ / -).",
    fullText: "",
    scheduleImage: "assets/weeds-maize-labels/maize-weed-label-7.png"
  },
  {
    image: "assets/weeds-maize/maize-weed-image8.png",
    category: "Unkräuter im Mais",
    name: "Franzosenkraut-Arten",
    details: "Auftreten laut Vorlage (+ / +++ / -).",
    fullText: "",
    scheduleImage: "assets/weeds-maize-labels/maize-weed-label-8.png"
  },
  {
    image: "assets/weeds-maize/maize-weed-image9.png",
    category: "Unkräuter im Mais",
    name: "Klettenlabkraut",
    details: "Auftreten laut Vorlage (+ / +++ / -).",
    fullText: "",
    scheduleImage: "assets/weeds-maize-labels/maize-weed-label-9.png"
  },
  {
    image: "assets/weeds-maize/maize-weed-image10.png",
    category: "Unkräuter im Mais",
    name: "Jährige Rispe",
    details: "Original-Text aus der Vorlage.",
    fullText: "Jährige Rispe (März – April)"
  },
  {
    image: "assets/weeds-maize/maize-weed-image11.png",
    category: "Unkräuter im Mais",
    name: "Weißer Gänsefuß",
    details: "Auftreten laut Vorlage (+ / +++ / -).",
    fullText: "",
    scheduleImage: "assets/weeds-maize-labels/maize-weed-label-11.png"
  },
  {
    image: "assets/weeds-maize/maize-weed-image12.png",
    category: "Unkräuter im Mais",
    name: "Flohknöterich",
    details: "Auftreten laut Vorlage (+ / +++ / -).",
    fullText: "",
    scheduleImage: "assets/weeds-maize-labels/maize-weed-label-12.png"
  },
  {
    image: "assets/weeds-maize/maize-weed-image13.png",
    category: "Unkräuter im Mais",
    name: "Windenknöterich",
    details: "Auftreten laut Vorlage (+ / +++ / -).",
    fullText: "",
    scheduleImage: "assets/weeds-maize-labels/maize-weed-label-13.png"
  },
  {
    image: "assets/weeds-maize/maize-weed-image14.png",
    category: "Unkräuter im Mais",
    name: "Melde",
    details: "Auftreten laut Vorlage (+ / +++ / -).",
    fullText: "",
    scheduleImage: "assets/weeds-maize-labels/maize-weed-label-14.png"
  },
  {
    image: "assets/weeds-maize/maize-weed-image15.png",
    category: "Unkräuter im Mais",
    name: "Schwarzer Nachtschatten",
    details: "Auftreten laut Vorlage (+ / +++ / -).",
    fullText: "",
    scheduleImage: "assets/weeds-maize-labels/maize-weed-label-15.png"
  },
  {
    image: "assets/weeds-maize/maize-weed-image16.png",
    category: "Unkräuter im Mais",
    name: "Bingelkraut",
    details: "Original-Text aus der Vorlage.",
    fullText: "Bingelkraut (März – Juni)"
  },
  {
    image: "assets/weeds-maize/maize-weed-image17.png",
    category: "Unkräuter im Mais",
    name: "Ackerfuchsschwanz",
    details: "Auftreten laut Vorlage (+ / +++ / -).",
    fullText: "",
    scheduleImage: "assets/weeds-maize-labels/maize-weed-label-17.png"
  },
  {
    image: "assets/weeds-maize/maize-weed-image18.png",
    category: "Unkräuter im Mais",
    name: "Vogelknöterich",
    details: "Auftreten laut Vorlage (+ / +++ / -).",
    fullText: "",
    scheduleImage: "assets/weeds-maize-labels/maize-weed-label-18.png"
  },
  {
    image: "assets/weeds-maize/maize-weed-image19.png",
    category: "Unkräuter im Mais",
    name: "Vogelmiere",
    details: "Auftreten laut Vorlage (+ / +++ / -).",
    fullText: "",
    scheduleImage: "assets/weeds-maize-labels/maize-weed-label-19.png"
  },
  {
    image: "assets/weeds-maize/maize-weed-image20.png",
    category: "Unkräuter im Mais",
    name: "Borstenhirse-Arten",
    details: "Auftreten laut Vorlage (+ / +++ / -).",
    fullText: "",
    scheduleImage: "assets/weeds-maize-labels/maize-weed-label-20.png"
  },
  {
    image: "assets/weeds-maize/maize-weed-image21.png",
    category: "Unkräuter im Mais",
    name: "Storchenschnabel",
    details: "Original-Text aus der Vorlage.",
    fullText: "Storchenschnabel (März – Juli)"
  },
  {
    image: "assets/weeds-maize/maize-weed-image22.png",
    category: "Unkräuter im Mais",
    name: "Persischer Ehrenpreis",
    details: "Auftreten laut Vorlage (+ / +++ / -).",
    fullText: "",
    scheduleImage: "assets/weeds-maize-labels/maize-weed-label-22.png"
  }
];

const mainTitleEl = document.getElementById("main-title");
const mainSubtitleEl = document.getElementById("main-subtitle");
const modeSelectEl = document.getElementById("mode-select");
const quizSectionEl = document.getElementById("quiz-section");

const startDiseasesBtn = document.getElementById("start-diseases");
const startWeedsBtn = document.getElementById("start-weeds");
const startMaizeWeedsBtn = document.getElementById("start-maize-weeds");
const backToMenuBtn = document.getElementById("back-to-menu");

const imageEl = document.getElementById("quiz-image");
const progressEl = document.getElementById("progress");
const answerBoxEl = document.getElementById("answer-box");
const diseaseAnswerEl = document.getElementById("disease-answer");
const weedAnswerEl = document.getElementById("weed-answer");

const diseaseEl = document.getElementById("answer-disease");
const bbchEl = document.getElementById("answer-bbch");
const backgroundEl = document.getElementById("answer-background");
const monthEl = document.getElementById("answer-month");
const notesEl = document.getElementById("answer-notes");

const weedTypeEl = document.getElementById("answer-weed-type");
const weedNameEl = document.getElementById("answer-weed-name");
const weedDetailsEl = document.getElementById("answer-weed-details");
const weedFullEl = document.getElementById("answer-weed-full");

const showAnswerBtn = document.getElementById("show-answer");
const nextImageBtn = document.getElementById("next-image");
const reshuffleBtn = document.getElementById("reshuffle");

const modeMeta = {
  diseases: {
    title: "Krankheiten im Getreide",
    subtitle: "Bild ansehen, kurz überlegen, dann Lösung mit allen Tabelleninfos einblenden."
  },
  weeds: {
    title: "Unkräuter im Getreide",
    subtitle: "Bild ansehen, zuordnen (Kräuter oder Gräser), dann Lösung anzeigen."
  },
  maizeWeeds: {
    title: "Unkräuter im Mais",
    subtitle: "Bild ansehen, einordnen und über den Lösungsbutton mit der Vorlage prüfen."
  }
};

let currentMode = null;
let deck = [];
let currentIndex = 0;

function shuffle(list) {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function setMode(mode) {
  currentMode = mode;
  const meta = modeMeta[mode];
  mainTitleEl.textContent = meta.title;
  mainSubtitleEl.textContent = meta.subtitle;

  modeSelectEl.classList.add("hidden");
  quizSectionEl.classList.remove("hidden");

  deck = shuffle(quizzes[mode]);
  currentIndex = 0;
  renderCard();
}

function backToMenu() {
  currentMode = null;
  mainTitleEl.textContent = "Pflanzen Trainer";
  mainSubtitleEl.textContent = "Wähle zuerst deinen Übungsbereich.";

  quizSectionEl.classList.add("hidden");
  modeSelectEl.classList.remove("hidden");
  answerBoxEl.classList.add("hidden");
}

function renderDiseaseAnswer(item) {
  diseaseAnswerEl.classList.remove("hidden");
  weedAnswerEl.classList.add("hidden");

  diseaseEl.textContent = item.disease;
  bbchEl.textContent = item.bbch;
  backgroundEl.textContent = item.background;
  monthEl.textContent = item.month;
  notesEl.textContent = item.notes;
}

function renderWeedAnswer(item) {
  weedAnswerEl.classList.remove("hidden");
  diseaseAnswerEl.classList.add("hidden");

  weedTypeEl.textContent = item.category;
  weedNameEl.textContent = item.name;
  weedDetailsEl.textContent = item.details;

  if (currentMode === "maizeWeeds") {
    weedDetailsEl.textContent = "Auftreten laut Vorlage: + = tritt auf, +++ = tritt sehr verstärkt auf, - = tritt nicht auf.";
    weedFullEl.innerHTML = "";

    if (item.fullText) {
      const text = document.createElement("p");
      text.className = "weed-note";
      text.textContent = item.fullText;
      weedFullEl.appendChild(text);
    }

    if (item.scheduleImage) {
      const scheduleImage = document.createElement("img");
      scheduleImage.src = item.scheduleImage;
      scheduleImage.alt = `Original-Auftreten für ${item.name}`;
      scheduleImage.className = "weed-schedule-image";
      weedFullEl.appendChild(scheduleImage);
    }
    return;
  }

  weedFullEl.textContent = item.fullText;
}

function renderCard() {
  const item = deck[currentIndex];
  imageEl.src = item.image;
  answerBoxEl.classList.add("hidden");
  progressEl.textContent = `Bild ${currentIndex + 1} von ${deck.length}`;

  if (currentMode === "diseases") {
    renderDiseaseAnswer(item);
  } else {
    renderWeedAnswer(item);
  }
}

function showNext() {
  currentIndex += 1;
  if (currentIndex >= deck.length) {
    deck = shuffle(quizzes[currentMode]);
    currentIndex = 0;
  }
  renderCard();
}

function restartWithShuffle() {
  deck = shuffle(quizzes[currentMode]);
  currentIndex = 0;
  renderCard();
}

startDiseasesBtn.addEventListener("click", () => setMode("diseases"));
startWeedsBtn.addEventListener("click", () => setMode("weeds"));
startMaizeWeedsBtn.addEventListener("click", () => setMode("maizeWeeds"));
backToMenuBtn.addEventListener("click", backToMenu);

showAnswerBtn.addEventListener("click", () => {
  answerBoxEl.classList.remove("hidden");
});

nextImageBtn.addEventListener("click", showNext);
reshuffleBtn.addEventListener("click", restartWithShuffle);
