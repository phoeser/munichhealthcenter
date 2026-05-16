/* Supplement-Datenbank
 * Hinweis: Alle Angaben dienen der Information, ersetzen keine ärztliche Beratung.
 * Evidenzlevel: "hoch" = zahlreiche Humanstudien, "mittel" = einige Studien, "niedrig" = vorläufig/tierexperimentell.
 */
const SUPPLEMENTS = [
  // ============ VITAMINE ============
  {
    id: 'vitamin-d3',
    name: 'Vitamin D3',
    altNames: 'Cholecalciferol',
    category: 'Vitamin',
    tags: ['immun', 'knochen', 'stimmung', 'hormone', 'schlaf', 'energie'],
    short: 'Das „Sonnenvitamin" – essenziell für Immunsystem, Knochen, Stimmung und über 1000 Gene.',
    description: 'Vitamin D3 ist streng genommen ein Hormon und reguliert hunderte Gene. Bei 90 % aller Deutschen ist der Spiegel im Winter suboptimal. Werte zwischen 40–60 ng/ml gelten als optimal für Biohacker.',
    benefits: [
      'Stärkt Immunsystem und senkt Infektanfälligkeit',
      'Unterstützt Knochenmineralisierung (mit K2 + Magnesium)',
      'Verbessert Stimmung und kann saisonale Depression lindern',
      'Wichtig für Hormonproduktion, v. a. Testosteron',
      'Reduziert Entzündungswerte (CRP)'
    ],
    risks: [
      'Überdosierung (>10.000 IE täglich dauerhaft) kann Hyperkalzämie verursachen',
      'Ohne K2 kann Kalzium fehlgeleitet werden (Arterienverkalkung)',
      'Vor Einnahme 25-OH-Vitamin-D-Spiegel testen lassen'
    ],
    dosage: 'Standard: 1.000–4.000 IE täglich. Biohacker: 5.000 IE/Tag im Winter (nach Blutspiegel).',
    intake: 'Morgens oder mittags mit einer fetthaltigen Mahlzeit (fettlöslich). Immer mit K2 (MK-7) und Magnesium kombinieren.',
    synergies: ['vitamin-k2', 'magnesium', 'omega-3'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Sonnenlicht, fetter Fisch (Lachs, Makrele), Eigelb'
  },
  {
    id: 'vitamin-k2',
    name: 'Vitamin K2 (MK-7)',
    altNames: 'Menachinon-7',
    category: 'Vitamin',
    tags: ['knochen', 'herz', 'kreislauf', 'anti-aging'],
    short: 'Lenkt Kalzium in die Knochen statt in die Arterien. Essenzieller Partner zu Vitamin D3.',
    description: 'Vitamin K2 aktiviert Osteocalcin (bindet Kalzium in Knochen) und MGP (verhindert Arterienverkalkung). Besonders wichtig bei Vitamin-D3-Supplementierung.',
    benefits: [
      'Verhindert Gefäßverkalkung',
      'Stärkt Knochen und Zähne',
      'Synergie mit Vitamin D3',
      'Kann Herzinfarktrisiko senken (Rotterdam Study)'
    ],
    risks: [
      'Vorsicht bei Blutverdünnern (Marcumar/Warfarin) – Arzt konsultieren',
      'Gut verträglich auch in hohen Dosen'
    ],
    dosage: '100–200 µg MK-7 täglich (bei 2.000–5.000 IE D3). Biohacker bis 300 µg.',
    intake: 'Mit fetthaltiger Mahlzeit. Morgens kombiniert mit D3.',
    synergies: ['vitamin-d3', 'magnesium', 'kalzium'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Natto (fermentierte Sojabohnen), Hartkäse, Eigelb von Weidehühnern'
  },
  {
    id: 'vitamin-c',
    name: 'Vitamin C',
    altNames: 'Ascorbinsäure',
    category: 'Vitamin',
    tags: ['immun', 'haut', 'anti-oxidant', 'kollagen', 'eisen'],
    short: 'Starkes Antioxidans, essenziell für Kollagensynthese, Immunsystem und Eisenaufnahme.',
    description: 'Wasserlösliches Vitamin, das der Mensch nicht selbst herstellen kann. Bei Stress, Sport und Krankheit steigt der Bedarf. Hochdosen werden in der orthomolekularen Medizin eingesetzt.',
    benefits: [
      'Stärkt das Immunsystem',
      'Essenziell für Kollagenaufbau (Haut, Gelenke)',
      'Erhöht Eisenaufnahme um bis zu 300 %',
      'Starkes Antioxidans, schützt Zellen',
      'Reduziert oxidativen Stress nach Sport'
    ],
    risks: [
      'Über 2 g/Tag: Durchfall, Magenbeschwerden',
      'Bei Nierensteinen vorsichtig dosieren',
      'Ascorbinsäure kann Zahnschmelz angreifen (Flüssig)'
    ],
    dosage: 'Basis: 200–500 mg. Bei Erkältung/Sport: 1.000–3.000 mg verteilt über den Tag.',
    intake: 'Verteilt über den Tag (kurze Halbwertszeit). Liposomales Vitamin C für höhere Bioverfügbarkeit. Mit eisenhaltigen Mahlzeiten.',
    synergies: ['eisen', 'vitamin-e', 'glutathion'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Acerola, Hagebutte, Paprika, Zitrusfrüchte, Brokkoli'
  },
  {
    id: 'vitamin-b12',
    name: 'Vitamin B12',
    altNames: 'Methylcobalamin / Cobalamin',
    category: 'Vitamin',
    tags: ['energie', 'nerven', 'gehirn', 'blut', 'vegan'],
    short: 'Kritisch für Energieproduktion, Nervensystem und Blutbildung. Für Veganer Pflicht.',
    description: 'B12 kommt fast nur in tierischen Lebensmitteln vor. Aufnahme ist komplex und nimmt mit dem Alter ab. Methylcobalamin ist die bioaktive Form, die der Körper direkt nutzen kann.',
    benefits: [
      'Energieproduktion in Mitochondrien',
      'Stützt Nervensystem und Myelinscheide',
      'Wichtig für Blutbildung (Hämoglobin)',
      'Senkt Homocystein (Herzschutz)',
      'Unterstützt Gedächtnis und Stimmung'
    ],
    risks: [
      'Sehr sicher – keine bekannte Toxizität',
      'Bei bestimmten genetischen Varianten (MTHFR) Methyl-Form bevorzugen'
    ],
    dosage: 'Vegetarier/Veganer: 250–1.000 µg täglich. Biohacker: 1.000–5.000 µg 1–2× pro Woche.',
    intake: 'Sublingual (unter der Zunge) oder als Lutschtablette für beste Aufnahme. Morgens.',
    synergies: ['vitamin-b-komplex', 'folsaeure'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Leber, Fisch, Fleisch, Eier (fast null in rein pflanzlicher Kost)'
  },
  {
    id: 'vitamin-b-komplex',
    name: 'Vitamin B-Komplex',
    altNames: 'B1, B2, B3, B5, B6, B7, B9, B12',
    category: 'Vitamin',
    tags: ['energie', 'nerven', 'gehirn', 'stress', 'stoffwechsel'],
    short: 'Alle B-Vitamine in bioaktiver Form – Grundlage für Energiestoffwechsel und Nerven.',
    description: 'B-Vitamine arbeiten zusammen. Einzelgabe einer Form kann andere ins Ungleichgewicht bringen. Bei Stress, Sport und Alkoholkonsum steigt der Bedarf deutlich.',
    benefits: [
      'Energiestoffwechsel aus Kohlenhydraten, Fett und Eiweiß',
      'Unterstützt Nervensystem und Stressresistenz',
      'Wichtig für Neurotransmitter (Serotonin, Dopamin)',
      'Fördert Hautgesundheit und Haarwuchs',
      'Bei vielen Menschen mit MTHFR-Mutation kritisch'
    ],
    risks: [
      'Urin kann gelb werden (B2 – normal)',
      'Hochdosis B6 über Monate: Kribbeln in Händen/Füßen möglich',
      'Ab 100 mg B3 kann Flush auftreten'
    ],
    dosage: 'Typische Dosis einmal täglich laut Produkt. Auf „methylierte Formen" achten.',
    intake: 'Morgens zum Frühstück. Abends kann das Einschlafen stören.',
    synergies: ['magnesium'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Vollkorn, Hefe, Leber, Eier, Hülsenfrüchte, grünes Blattgemüse'
  },

  // ============ MINERALE ============
  {
    id: 'magnesium',
    name: 'Magnesium',
    altNames: 'Glycinat / Citrat / Malat / Threonat',
    category: 'Mineral',
    tags: ['schlaf', 'muskel', 'nerven', 'stress', 'energie', 'herz'],
    short: 'An über 300 Enzymreaktionen beteiligt. 80 % der Deutschen haben zu wenig.',
    description: 'Form ist entscheidend: Glycinat = Schlaf/Beruhigung, Citrat = Verdauung, Malat = Energie, Threonat = Gehirn (überquert Blut-Hirn-Schranke). Oxid schlecht verfügbar.',
    benefits: [
      'Verbessert Schlafqualität und Tiefschlaf',
      'Reduziert Stress und entspannt Muskulatur',
      'Normalisiert Blutdruck und Herzrhythmus',
      'Verringert Muskelkrämpfe und Zuckungen',
      'Aktiviert Vitamin D3',
      'Wichtig für ATP-Produktion (Energie)'
    ],
    risks: [
      'Überdosierung: Durchfall, besonders mit Citrat/Oxid',
      'Bei schwerer Niereninsuffizienz Vorsicht',
      'Von billigen Oxid-Präparaten absehen'
    ],
    dosage: '300–600 mg elementares Magnesium täglich. Biohacker oft 400 mg Glycinat abends.',
    intake: 'Glycinat/Threonat: abends zur Entspannung. Citrat/Malat: morgens. Mit oder ohne Nahrung.',
    synergies: ['vitamin-d3', 'kalium', 'zink'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Kürbiskerne, Mandeln, Spinat, dunkle Schokolade, Avocado'
  },
  {
    id: 'zink',
    name: 'Zink',
    altNames: 'Zink-Bisglycinat / Zinkpicolinat',
    category: 'Mineral',
    tags: ['immun', 'hormone', 'testosteron', 'haut', 'wundheilung'],
    short: 'Essentiell für Immunsystem, Testosteron, Wundheilung und über 300 Enzyme.',
    description: 'Zink-Bisglycinat und -picolinat sind am besten verfügbar. Zink konkurriert mit Kupfer um Aufnahme – bei langfristiger Hochdosis Kupfer beachten.',
    benefits: [
      'Stärkt Immunsystem (verkürzt Erkältungen)',
      'Wichtig für Testosteronproduktion',
      'Verbessert Hautbild (Akne)',
      'Fördert Wundheilung',
      'Beteiligt an DNA-Synthese',
      'Wirkt antioxidativ'
    ],
    risks: [
      'Über 40 mg/Tag dauerhaft: Kupfermangel',
      'Auf nüchternen Magen: Übelkeit möglich',
      'Bei Langzeit-Hochdosis Kupfer 1–2 mg ergänzen'
    ],
    dosage: '15–25 mg täglich. Bei akuter Erkältung kurzfristig bis 50 mg.',
    intake: 'Nicht auf leeren Magen. Abends mit Snack. Nicht gleichzeitig mit Eisen oder Kalzium.',
    synergies: ['vitamin-c', 'vitamin-d3'],
    avoid: ['eisen', 'kalzium'],
    evidence: 'hoch',
    sources: 'Austern, Rindfleisch, Kürbiskerne, Linsen, Cashews'
  },
  {
    id: 'eisen',
    name: 'Eisen',
    altNames: 'Eisen-Bisglycinat',
    category: 'Mineral',
    tags: ['energie', 'blut', 'frauen', 'sport'],
    short: 'Essenziell für Sauerstofftransport und Energie. Mangel häufig bei Frauen/Sportlern.',
    description: 'Nur bei nachgewiesenem Mangel (Ferritin-Wert) supplementieren. Eisen-Bisglycinat ist am besten verträglich. Eisenüberschuss ist oxidativ.',
    benefits: [
      'Verhindert Erschöpfung/Müdigkeit bei Mangel',
      'Transportiert Sauerstoff (Hämoglobin)',
      'Wichtig für Sportler (Ausdauer)',
      'Unterstützt Konzentration'
    ],
    risks: [
      'Nur bei Mangel einnehmen – Überschuss oxidiert',
      'Verdauungsbeschwerden, Verstopfung',
      'Ferritin > 200 meiden'
    ],
    dosage: 'Bei Mangel: 25–50 mg elementares Eisen. Alle 2 Tage besser als täglich (Hepcidin-Rebound).',
    intake: 'Auf nüchternen Magen mit Vitamin C. Nicht mit Kaffee, Tee, Milch oder Zink.',
    synergies: ['vitamin-c'],
    avoid: ['zink', 'kalzium', 'magnesium'],
    evidence: 'hoch',
    sources: 'Rindfleisch, Leber, Linsen, Spinat, Kürbiskerne'
  },
  {
    id: 'selen',
    name: 'Selen',
    altNames: 'Selenomethionin',
    category: 'Mineral',
    tags: ['schilddruese', 'anti-oxidant', 'immun', 'entgiftung'],
    short: 'Essenzielles Spurenelement für Schilddrüse, Glutathion-Produktion und Immunsystem.',
    description: 'Deutsche Böden sind selenarm. Selen ist Kofaktor der Glutathionperoxidase, einem wichtigen Antioxidans. Besonders wichtig für Schilddrüsenfunktion.',
    benefits: [
      'Unterstützt Schilddrüsenfunktion (T4→T3)',
      'Produziert Glutathion (Master-Antioxidans)',
      'Stärkt Immunsystem',
      'Schützt vor oxidativem Stress'
    ],
    risks: [
      'Obergrenze: 200 µg/Tag – darüber toxisch',
      'Überdosierung: Haarausfall, Knoblauchatem, Nagelveränderungen',
      'Paranusskonsum genau einplanen'
    ],
    dosage: '100–200 µg täglich. Eine Paranuss enthält ca. 50–100 µg.',
    intake: 'Morgens mit Mahlzeit.',
    synergies: ['jod', 'zink', 'vitamin-e'],
    avoid: [],
    evidence: 'hoch',
    sources: '2 Paranüsse decken Tagesbedarf, Fisch, Eier'
  },
  {
    id: 'jod',
    name: 'Jod',
    altNames: 'Kaliumiodid / Kelp',
    category: 'Mineral',
    tags: ['schilddruese', 'hormone', 'energie', 'gehirn'],
    short: 'Baustein für Schilddrüsenhormone. Deutschland ist Jodmangelgebiet.',
    description: 'Ohne Jod keine Schilddrüsenhormone. Selen ist wichtiger Partner. Bei Hashimoto Vorsicht – erst Arzt fragen.',
    benefits: [
      'Baustein für T3/T4',
      'Regelt Stoffwechsel',
      'Wichtig für Gehirnentwicklung',
      'Unterstützt Brustgesundheit'
    ],
    risks: [
      'Bei Hashimoto/Hyperthyreose NICHT ohne Arzt',
      'Über 1.000 µg/Tag kann Schilddrüse stören',
      'Immer mit Selen kombinieren'
    ],
    dosage: '100–200 µg täglich. Jodiertes Salz und Fisch oft ausreichend.',
    intake: 'Morgens mit Mahlzeit. Nicht spät, da anregend.',
    synergies: ['selen'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Seefisch, Algen (Kelp), jodiertes Salz'
  },

  // ============ FETTSÄUREN ============
  {
    id: 'omega-3',
    name: 'Omega-3 (EPA/DHA)',
    altNames: 'Fischöl / Algenöl',
    category: 'Fettsäure',
    tags: ['gehirn', 'herz', 'entzuendung', 'stimmung', 'haut', 'augen'],
    short: 'Entzündungshemmende Fettsäuren für Gehirn, Herz und Stimmung. Qualität ist entscheidend.',
    description: 'EPA wirkt eher entzündungshemmend, DHA baut Gehirn/Nerven auf. Omega-3-Index (Bluttest) sollte > 8 % liegen. Auf TOTOX-Wert achten (Oxidation).',
    benefits: [
      'Senkt Entzündungen im Körper',
      'Unterstützt Gehirnfunktion und Stimmung',
      'Senkt Triglyceride und schützt Herz',
      'Verbessert Hautbild (Ekzem, Akne)',
      'Unterstützt Augengesundheit',
      'Wichtig in Schwangerschaft für Gehirnentwicklung'
    ],
    risks: [
      'Niedrig-qualitative Öle oxidieren (ranzig)',
      'Bei Blutverdünnern: Arzt fragen',
      'Vor OP 1 Woche absetzen'
    ],
    dosage: '1.000–3.000 mg EPA+DHA täglich (nicht Fischöl gesamt).',
    intake: 'Zu fetthaltiger Mahlzeit. Tiefgefrorene Kapseln reduzieren Aufstoßen. Mit Vitamin E zum Schutz.',
    synergies: ['vitamin-d3', 'vitamin-e', 'astaxanthin'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Fetter Fisch (Lachs, Sardinen, Makrele), Algenöl (vegan)'
  },
  {
    id: 'mct-oel',
    name: 'MCT-Öl',
    altNames: 'Mittelkettige Triglyceride',
    category: 'Fettsäure',
    tags: ['energie', 'keto', 'fokus', 'fettverbrennung', 'gehirn'],
    short: 'Schnelle Energiequelle, die direkt zur Leber gelangt und Ketone bildet.',
    description: 'C8 (Caprylsäure) ist das potenteste MCT für Ketonproduktion. Wird direkt zur Leber transportiert und zu Energie umgewandelt – ohne Insulinantwort.',
    benefits: [
      'Schnelle Energie für Gehirn und Muskeln',
      'Unterstützt ketogene Ernährung',
      'Kann Appetit reduzieren',
      'Verbesserte mentale Klarheit',
      'Antibakteriell (gegen Candida)'
    ],
    risks: [
      'Zu schnelle Dosissteigerung: Magenkrämpfe, Durchfall',
      'Kalorienreich (9 kcal/g)'
    ],
    dosage: 'Start: 1 TL, steigern auf 1–2 EL täglich.',
    intake: 'Morgens im Bulletproof Coffee oder vor Workout. Langsam aufbauen.',
    synergies: ['omega-3'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Kokosöl (~15 % MCT), C8-MCT-Öl (konzentriert)'
  },

  // ============ AMINOSÄUREN ============
  {
    id: 'kreatin',
    name: 'Kreatin Monohydrat',
    altNames: 'Creapure',
    category: 'Aminosäure',
    tags: ['muskel', 'kraft', 'sport', 'gehirn', 'energie'],
    short: 'Eines der bestuntersuchten Supplements. Mehr Kraft, Muskel und mittlerweile auch Gehirn-Boost.',
    description: 'Kreatin ist nicht nur für Sportler – neue Studien zeigen Nutzen für Gehirn, Stimmung und gesundes Altern. Creapure (deutsch) ist Goldstandard.',
    benefits: [
      'Steigert Kraft und Muskelmasse um 5–15 %',
      'Verbessert Hochintensitäts-Leistung',
      'Verbessert Gedächtnis und Kognition',
      'Kann bei Depression helfen',
      'Schützt Gehirn bei Schlafmangel',
      'Unterstützt gesundes Altern'
    ],
    risks: [
      'Wassereinlagerung (Muskel, nicht subkutan)',
      'Sehr sicher – 30+ Jahre Forschung',
      'Bei Nierenerkrankung Arzt fragen'
    ],
    dosage: '3–5 g täglich. Ladephase (20 g/Tag für 5 Tage) optional.',
    intake: 'Jederzeit, aber täglich. In Wasser oder Shake. Zeitpunkt egal – wichtig ist Regelmäßigkeit.',
    synergies: ['beta-alanin', 'whey'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Rindfleisch, Wild (aber sehr geringe Mengen)'
  },
  {
    id: 'l-theanin',
    name: 'L-Theanin',
    altNames: 'Grüntee-Aminosäure',
    category: 'Aminosäure',
    tags: ['fokus', 'stress', 'schlaf', 'koffein', 'gaba'],
    short: 'Natürliche Aminosäure aus Grüntee. Entspannt ohne müde zu machen.',
    description: 'L-Theanin erhöht Alpha-Wellen im Gehirn (wacher, entspannter Zustand). Perfekter Partner zu Koffein: reduziert Nervosität, verbessert Fokus.',
    benefits: [
      'Reduziert Stress und Angst',
      'Verbessert Fokus (besonders mit Koffein)',
      'Fördert entspannte Wachheit',
      'Unterstützt Schlaf',
      'Erhöht GABA, Serotonin und Dopamin'
    ],
    risks: [
      'Sehr sicher – keine bekannten Nebenwirkungen',
      'Schwindel möglich bei sehr hohen Dosen'
    ],
    dosage: '100–400 mg täglich. Mit Kaffee: 200 mg L-Theanin + 100 mg Koffein.',
    intake: 'Mit Koffein für Fokus (morgens). Solo abends für Entspannung/Schlaf.',
    synergies: ['koffein', 'magnesium'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Grüner Tee, Matcha, Schwarztee (geringer)'
  },
  {
    id: 'glycin',
    name: 'Glycin',
    altNames: 'Aminosäure',
    category: 'Aminosäure',
    tags: ['schlaf', 'entspannung', 'kollagen', 'gehirn'],
    short: 'Beruhigende Aminosäure, senkt Körperkerntemperatur für besseren Tiefschlaf.',
    description: 'Glycin wirkt inhibitorisch im Gehirn (wie GABA) und senkt die Körperkerntemperatur – Voraussetzung für tiefen Schlaf. Günstig und effektiv.',
    benefits: [
      'Verbessert Schlafqualität',
      'Reduziert Einschlafzeit',
      'Erhöht Kollagenproduktion',
      'Stützt Entgiftung (Glutathion-Baustein)',
      'Kognitive Verbesserung am Morgen danach'
    ],
    risks: [
      'Sehr sicher – Geschmack süß, gut löslich',
      'Leichte Übelkeit bei > 10 g möglich'
    ],
    dosage: '3–5 g vor dem Schlafengehen.',
    intake: '30–60 min vor dem Schlafen in Wasser. Lässt sich auch in Tee/Kaffee lösen.',
    synergies: ['magnesium', 'l-theanin'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Knochenbrühe, Kollagen, Gelatine, Fleisch'
  },
  {
    id: 'acetyl-l-carnitin',
    name: 'Acetyl-L-Carnitin (ALCAR)',
    altNames: 'ALCAR',
    category: 'Aminosäure',
    tags: ['gehirn', 'energie', 'fokus', 'anti-aging', 'fettverbrennung'],
    short: 'Transportiert Fettsäuren in Mitochondrien. Verbessert Gehirnleistung und Energie.',
    description: 'Die acetylierte Form überquert die Blut-Hirn-Schranke und steigert Acetylcholin. Energie + Fokus in einem.',
    benefits: [
      'Mehr mentale Energie und Klarheit',
      'Unterstützt Fettverbrennung',
      'Schützt Nerven und Gehirn',
      'Kann Depressionssymptome lindern',
      'Verbesserte Spermienqualität',
      'Anti-Aging-Effekte'
    ],
    risks: [
      'Nebenwirkungen: Magen-Darm-Beschwerden (selten)',
      'Nicht spät am Abend (anregend)',
      'Bei Schilddrüsenproblemen Arzt fragen'
    ],
    dosage: '500–2.000 mg täglich.',
    intake: 'Morgens auf leeren Magen oder vor Workout.',
    synergies: ['alpha-liponsaeure', 'coq10'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Rotes Fleisch (aber nur Carnitin, nicht ALCAR)'
  },
  {
    id: 'tyrosin',
    name: 'L-Tyrosin',
    altNames: 'Aminosäure',
    category: 'Aminosäure',
    tags: ['fokus', 'stress', 'stimmung', 'motivation', 'dopamin'],
    short: 'Vorstufe für Dopamin und Noradrenalin. Hilft bei Stress und mentaler Erschöpfung.',
    description: 'Tyrosin ist besonders nützlich in stressigen Situationen (Prüfung, Schlafmangel, Krisen), wenn Neurotransmitter-Reserven erschöpft sind.',
    benefits: [
      'Steigert Dopamin und Fokus',
      'Hilft bei akutem Stress',
      'Verbessert Stimmung',
      'Kognitive Performance unter Schlafmangel'
    ],
    risks: [
      'Bei Schilddrüsenproblemen (Hyper) nicht empfohlen',
      'Nicht mit MAO-Hemmern',
      'Nicht abends – stimulierend'
    ],
    dosage: '500–2.000 mg 30 min vor Stresssituation.',
    intake: 'Auf leeren Magen, morgens oder vor anspruchsvollen Tätigkeiten.',
    synergies: ['vitamin-b-komplex'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Käse, Mandeln, Avocado, Hülsenfrüchte'
  },
  {
    id: 'taurin',
    name: 'Taurin',
    altNames: 'Aminosulfonsäure',
    category: 'Aminosäure',
    tags: ['herz', 'energie', 'sport', 'gehirn', 'anti-aging'],
    short: 'Vielseitige Aminosäure. Neue Longevity-Forschung zeigt Anti-Aging-Effekte.',
    description: 'Taurin-Spiegel sinken mit dem Alter um 80 %. Eine 2023-Studie an Tieren zeigte 12 % längere Lebensdauer durch Taurin-Supplementierung.',
    benefits: [
      'Senkt Blutdruck',
      'Verbessert sportliche Leistung',
      'Schützt Herz und Mitochondrien',
      'Kann Lebensdauer verlängern (Tierstudie)',
      'Beruhigt das Nervensystem'
    ],
    risks: [
      'Sehr sicher',
      'Selten: leichte Magenbeschwerden'
    ],
    dosage: '1.000–3.000 mg täglich.',
    intake: 'Jederzeit, ideal mit Mahlzeit oder vor Training.',
    synergies: ['magnesium', 'kreatin'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Fleisch, Fisch, Meeresfrüchte'
  },
  {
    id: '5-htp',
    name: '5-HTP',
    altNames: '5-Hydroxytryptophan',
    category: 'Aminosäure',
    tags: ['stimmung', 'schlaf', 'appetit', 'serotonin'],
    short: 'Direkte Serotonin-Vorstufe. Für Stimmung und Schlaf.',
    description: 'Aus Griffonia-Samen. Überquert Blut-Hirn-Schranke und wird direkt zu Serotonin. Kurzzeitig sehr wirksam, langfristig Vorsicht.',
    benefits: [
      'Hebt Serotoninspiegel',
      'Verbessert Stimmung',
      'Fördert Schlaf (als Melatonin-Vorstufe)',
      'Kann Appetit reduzieren'
    ],
    risks: [
      'NICHT mit Antidepressiva (Serotonin-Syndrom)',
      'Nicht über Monate ohne Pause',
      'Mit B6 und EGCG kombinieren für Periphere-Conversion-Blockade',
      'Kann Träume intensivieren'
    ],
    dosage: '50–200 mg. Bei Schlaf abends, bei Stimmung morgens.',
    intake: 'Auf leeren Magen, 30 min vor Mahlzeit oder dem Schlafen.',
    synergies: ['magnesium'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Griffonia simplicifolia (afrikanische Pflanze)'
  },

  // ============ ADAPTOGENE & KRÄUTER ============
  {
    id: 'ashwagandha',
    name: 'Ashwagandha',
    altNames: 'Withania somnifera / KSM-66',
    category: 'Adaptogen',
    tags: ['stress', 'schlaf', 'hormone', 'testosteron', 'cortisol'],
    short: 'Das wohl bekannteste Adaptogen. Senkt Cortisol, verbessert Stress-Resilienz.',
    description: 'Aus dem Ayurveda. KSM-66 und Sensoril sind klinisch getestete Extrakte. Wirkt langfristig (4–8 Wochen) für maximalen Effekt.',
    benefits: [
      'Senkt Cortisol um bis zu 30 %',
      'Verbessert Schlafqualität',
      'Erhöht Testosteron bei Männern',
      'Steigert Muskelkraft und VO2max',
      'Reduziert Angst',
      'Unterstützt Schilddrüse (v. a. Unterfunktion)'
    ],
    risks: [
      'Bei Hyperthyreose meiden',
      'Bei Autoimmunerkrankungen Vorsicht',
      'Nicht in Schwangerschaft',
      'Selten: leichte Magenbeschwerden'
    ],
    dosage: '300–600 mg KSM-66 täglich.',
    intake: 'Abends mit Mahlzeit für Schlafförderung, sonst morgens.',
    synergies: ['magnesium', 'rhodiola'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Kein nennenswertes Vorkommen in Lebensmitteln'
  },
  {
    id: 'rhodiola',
    name: 'Rhodiola Rosea',
    altNames: 'Rosenwurz',
    category: 'Adaptogen',
    tags: ['stress', 'energie', 'fokus', 'sport', 'ausdauer'],
    short: 'Adaptogen für Energie, Fokus und mentale Belastbarkeit.',
    description: 'Im Gegensatz zu Ashwagandha eher stimulierend. Sehr wirksam bei Burnout, Erschöpfung und Konzentrationsproblemen. 3 % Rosavine / 1 % Salidrosid als Qualitätsmarker.',
    benefits: [
      'Erhöht mentale und körperliche Energie',
      'Reduziert Erschöpfung und Burnout',
      'Verbessert Fokus und Gedächtnis',
      'Steigert sportliche Ausdauer',
      'Stabilisiert Stimmung'
    ],
    risks: [
      'Bei manischen Tendenzen meiden',
      'Nicht spät am Abend (stimulierend)',
      'Selten: Reizbarkeit'
    ],
    dosage: '200–600 mg standardisierter Extrakt täglich.',
    intake: 'Morgens und mittags vor dem Essen.',
    synergies: ['ashwagandha', 'l-theanin'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Wildgesammelte Pflanze aus arktischen Regionen'
  },
  {
    id: 'ginseng',
    name: 'Panax Ginseng',
    altNames: 'Koreanischer Ginseng',
    category: 'Adaptogen',
    tags: ['energie', 'fokus', 'immun', 'libido', 'anti-aging'],
    short: 'Klassisches Adaptogen aus der TCM. Energie, Libido und kognitive Schärfe.',
    description: 'Panax ginseng enthält Ginsenoside. Roter Ginseng (gedämpft) ist stärker als weißer. Wirkt langfristig kumulativ.',
    benefits: [
      'Steigert körperliche und mentale Energie',
      'Verbessert kognitive Funktion',
      'Unterstützt Libido und sexuelle Funktion',
      'Stärkt Immunsystem',
      'Kann Blutzucker regulieren'
    ],
    risks: [
      'Bei Bluthochdruck Vorsicht',
      'Kann Schlaf stören (nicht abends)',
      'Bei Östrogen-sensitiven Erkrankungen Arzt fragen'
    ],
    dosage: '200–400 mg standardisiert (4 % Ginsenoside).',
    intake: 'Morgens oder mittags. Kur-artig 8 Wochen mit Pause.',
    synergies: ['rhodiola', 'ashwagandha'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Nur als Wurzel/Extrakt'
  },
  {
    id: 'loewenmaehne',
    name: 'Löwenmähne (Lion\'s Mane)',
    altNames: 'Hericium erinaceus',
    category: 'Pilz',
    tags: ['gehirn', 'fokus', 'nerven', 'gedaechtnis', 'nootropic'],
    short: 'Der „Nerven-Pilz" – stimuliert NGF (Nerve Growth Factor).',
    description: 'Stimuliert die Produktion von Nerve Growth Factor (NGF) und Brain-Derived Neurotrophic Factor (BDNF). Fördert Nervenwachstum und Regeneration.',
    benefits: [
      'Verbessert Gedächtnis und Fokus',
      'Fördert Nervenwachstum (NGF/BDNF)',
      'Kann leichte kognitive Einschränkungen lindern',
      'Unterstützt Darmgesundheit',
      'Reduziert Ängstlichkeit und leichte Depression'
    ],
    risks: [
      'Bei Pilzallergie meiden',
      'Sehr sicher und gut verträglich'
    ],
    dosage: '500–3.000 mg Dual-Extrakt täglich.',
    intake: 'Morgens mit Mahlzeit. Dual-Extrakte (Wasser + Alkohol) bevorzugen.',
    synergies: ['acetyl-l-carnitin', 'omega-3'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Essbarer Pilz (sieht aus wie Löwenmähne)'
  },
  {
    id: 'reishi',
    name: 'Reishi',
    altNames: 'Ganoderma lucidum',
    category: 'Pilz',
    tags: ['immun', 'schlaf', 'stress', 'leber', 'anti-aging'],
    short: 'Der „Pilz der Unsterblichkeit" in der TCM. Beruhigend und immunstärkend.',
    description: 'Reishi enthält Triterpene und Polysaccharide, die das Immunsystem modulieren und Entzündungen reduzieren. Abends eingenommen fördert er erholsamen Schlaf.',
    benefits: [
      'Moduliert Immunsystem',
      'Verbessert Schlafqualität',
      'Reduziert Stress und Angst',
      'Schützt Leber',
      'Kann Entzündungen reduzieren'
    ],
    risks: [
      'Bei Blutverdünnern Vorsicht',
      'Selten: Magenbeschwerden, Nasenbluten (sehr hohe Dosen)'
    ],
    dosage: '500–2.000 mg Dual-Extrakt täglich.',
    intake: 'Abends für Schlafförderung.',
    synergies: ['ashwagandha', 'glycin'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Essbarer Pilz (Extrakt empfohlen)'
  },
  {
    id: 'cordyceps',
    name: 'Cordyceps',
    altNames: 'Cordyceps militaris / sinensis',
    category: 'Pilz',
    tags: ['energie', 'sport', 'ausdauer', 'immun', 'libido'],
    short: 'Energie- und Leistungs-Pilz. Steigert ATP-Produktion und VO2max.',
    description: 'Cordyceps erhöht die ATP-Produktion und Sauerstoffaufnahme. Von chinesischen Olympioniken genutzt. Cordyceps militaris (kultiviert) ist vergleichbar mit teurem sinensis.',
    benefits: [
      'Mehr Ausdauer und VO2max',
      'Steigert ATP-Produktion',
      'Kann Libido verbessern',
      'Stärkt Immunsystem',
      'Unterstützt Nierenfunktion'
    ],
    risks: [
      'Selten: trockener Mund, Übelkeit',
      'Bei Autoimmunerkrankungen Arzt fragen'
    ],
    dosage: '1.000–3.000 mg Dual-Extrakt täglich.',
    intake: 'Morgens oder vor dem Workout.',
    synergies: ['rhodiola', 'kreatin'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Pilz (wild sehr selten, kultivierte Form genauso wirksam)'
  },
  {
    id: 'bacopa',
    name: 'Bacopa Monnieri',
    altNames: 'Brahmi',
    category: 'Adaptogen',
    tags: ['gehirn', 'gedaechtnis', 'fokus', 'stress', 'nootropic'],
    short: 'Ayurvedisches Kraut für Gedächtnis und Lernen. Wirkt über Wochen kumulativ.',
    description: 'Bacopa braucht 8–12 Wochen für volle Wirkung. Standardisiert auf Bacoside (45–55 %). Besonders wirksam fürs Langzeitgedächtnis.',
    benefits: [
      'Verbessert Gedächtnis und Lernen',
      'Reduziert Angst',
      'Schützt Nerven',
      'Antioxidative Wirkung'
    ],
    risks: [
      'Kann Magen reizen (mit Nahrung nehmen)',
      'Kann Schilddrüsenhormone beeinflussen',
      'Nicht vor OP'
    ],
    dosage: '300–600 mg standardisiert (50 % Bacoside).',
    intake: 'Mit fetthaltiger Mahlzeit (fettlöslich). Morgens oder mittags.',
    synergies: ['loewenmaehne', 'acetyl-l-carnitin'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Nur als Pflanze/Extrakt'
  },
  {
    id: 'kurkuma',
    name: 'Kurkuma (Curcumin)',
    altNames: 'Curcumin C3 Complex',
    category: 'Kräuter',
    tags: ['entzuendung', 'gelenke', 'gehirn', 'anti-aging', 'anti-oxidant'],
    short: 'Starkes natürliches Entzündungshemmer. Mit Piperin/Liposomal für Bioverfügbarkeit.',
    description: 'Curcumin hat sehr niedrige Bioverfügbarkeit. Mit Piperin (schwarzer Pfeffer) × 2000. Liposomale oder Meriva-Formen sind noch besser.',
    benefits: [
      'Stark entzündungshemmend',
      'Lindert Gelenkschmerzen',
      'Schützt Gehirn',
      'Antioxidative Wirkung',
      'Kann Depressionssymptome lindern',
      'Unterstützt Leber-Entgiftung'
    ],
    risks: [
      'Mit Blutverdünnern vorsichtig',
      'Bei Gallensteinen meiden',
      'Hohe Dosen: Magenreizung'
    ],
    dosage: '500–2.000 mg täglich mit Piperin, oder 200–500 mg Liposomal.',
    intake: 'Mit fetthaltiger Mahlzeit. Aufgeteilt 2× täglich.',
    synergies: ['omega-3', 'resveratrol'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Kurkuma-Wurzel (goldene Milch)'
  },

  // ============ ANTIOXIDANTIEN & LONGEVITY ============
  {
    id: 'coq10',
    name: 'Coenzym Q10 (Ubiquinol)',
    altNames: 'Ubiquinol / Ubiquinon',
    category: 'Antioxidant',
    tags: ['herz', 'energie', 'anti-aging', 'mitochondrien', 'haut'],
    short: 'Mitochondrien-Treibstoff. Ubiquinol ist die aktive, besser verfügbare Form.',
    description: 'CoQ10 ist zentral für ATP-Produktion. Ab 40 Jahren sinkt körpereigene Produktion. Statine blockieren die Synthese – dann Supplementierung besonders wichtig.',
    benefits: [
      'Mehr Zellenergie (ATP)',
      'Schützt Herz',
      'Wichtig bei Statin-Einnahme',
      'Antioxidant für Mitochondrien',
      'Verbessert Hautqualität',
      'Kann Migräne reduzieren'
    ],
    risks: [
      'Sehr sicher',
      'Selten: leichte Übelkeit',
      'Nicht abends (energetisch)'
    ],
    dosage: '100–300 mg Ubiquinol täglich.',
    intake: 'Mit fetthaltiger Mahlzeit. Morgens oder mittags.',
    synergies: ['omega-3', 'vitamin-e', 'pqq'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Innereien, fetter Fisch, Rindfleisch'
  },
  {
    id: 'resveratrol',
    name: 'Resveratrol',
    altNames: 'Trans-Resveratrol',
    category: 'Antioxidant',
    tags: ['anti-aging', 'herz', 'sirtuine', 'longevity', 'anti-oxidant'],
    short: 'Polyphenol aus Rotwein-Trauben. Aktiviert Langlebigkeits-Gene (Sirtuine).',
    description: 'Resveratrol aktiviert SIRT1 und ahmt Kalorienrestriktion nach. Trans-Resveratrol aus japanischem Staudenknöterich ist Goldstandard.',
    benefits: [
      'Aktiviert Sirtuine (Langlebigkeits-Gene)',
      'Schützt Herz und Gefäße',
      'Antioxidative Wirkung',
      'Kann Blutzucker regulieren',
      'Synergie mit NMN/NR'
    ],
    risks: [
      'Bei Blutverdünnern Vorsicht',
      'Östrogenische Wirkung: Vorsicht bei hormonsensitiven Erkrankungen'
    ],
    dosage: '250–500 mg täglich Trans-Resveratrol.',
    intake: 'Morgens mit fetthaltiger Mahlzeit (fettlöslich).',
    synergies: ['nmn', 'quercetin', 'pterostilben'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Rotwein, Trauben, Beeren (in sehr geringen Mengen)'
  },
  {
    id: 'nmn',
    name: 'NMN',
    altNames: 'Nicotinamid-Mononukleotid',
    category: 'Longevity',
    tags: ['anti-aging', 'energie', 'longevity', 'nad', 'mitochondrien'],
    short: 'NAD+-Vorstufe. Zentrales Longevity-Supplement laut David Sinclair.',
    description: 'NAD+-Spiegel sinken mit dem Alter drastisch. NMN wird zu NAD+ umgewandelt, das für Mitochondrienfunktion und DNA-Reparatur kritisch ist.',
    benefits: [
      'Steigert NAD+-Spiegel',
      'Verbessert Mitochondrienfunktion',
      'Potenziell Anti-Aging-Effekte',
      'Mehr Energie',
      'Unterstützt DNA-Reparatur'
    ],
    risks: [
      'Forschung noch in Entwicklung',
      'Hohe Kosten',
      'Teilweise regulatorische Unsicherheit (EU)'
    ],
    dosage: '250–1.000 mg täglich (umstritten).',
    intake: 'Morgens auf leeren Magen. Sublingual oder liposomal für Bioverfügbarkeit.',
    synergies: ['resveratrol', 'trimethylglycin'],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Brokkoli, Avocado (sehr geringe Mengen)'
  },
  {
    id: 'astaxanthin',
    name: 'Astaxanthin',
    altNames: 'Haematococcus pluvialis',
    category: 'Antioxidant',
    tags: ['anti-oxidant', 'haut', 'augen', 'ausdauer', 'entzuendung'],
    short: 'Das stärkste natürliche Antioxidans. 500× stärker als Vitamin E.',
    description: 'Astaxanthin überquert die Blut-Hirn- und Blut-Retina-Schranke. Gibt Lachs seine rote Farbe. Aus Süßwasseralgen gewonnen.',
    benefits: [
      'Extrem starkes Antioxidans',
      'Schutz vor UV-Schäden (von innen)',
      'Verbessert Hautelastizität',
      'Schützt Augen vor Blaulicht',
      'Reduziert Entzündungen',
      'Verbessert Ausdauer'
    ],
    risks: [
      'Sehr sicher',
      'Haut kann leicht rötlicher werden (pigment)',
      'Nur auf Fermentations-Herkunft achten'
    ],
    dosage: '4–12 mg täglich.',
    intake: 'Mit fetthaltiger Mahlzeit (fettlöslich).',
    synergies: ['omega-3', 'vitamin-e', 'coq10'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Wildlachs, Krill, Süßwasseralgen'
  },
  {
    id: 'glutathion',
    name: 'Glutathion',
    altNames: 'Liposomales Glutathion / NAC',
    category: 'Antioxidant',
    tags: ['entgiftung', 'anti-aging', 'immun', 'leber', 'anti-oxidant'],
    short: 'Das „Master-Antioxidans". Zentral für Entgiftung und Leberschutz.',
    description: 'Glutathion wird aus Cystein, Glycin und Glutamin gebildet. NAC ist die Vorstufe. Liposomales oder sublinguales Glutathion direkt einnehmen.',
    benefits: [
      'Master-Antioxidans des Körpers',
      'Unterstützt Phase-II-Entgiftung',
      'Schützt Leber',
      'Stärkt Immunsystem',
      'Reduziert oxidativen Stress'
    ],
    risks: [
      'Selten: schwefeliger Geruch/Magenbeschwerden',
      'Orales Glutathion wenig wirksam – NAC oder liposomal'
    ],
    dosage: '250–500 mg liposomal oder 600–1.800 mg NAC täglich.',
    intake: 'Auf leeren Magen morgens oder vor dem Schlafen.',
    synergies: ['vitamin-c', 'alpha-liponsaeure', 'selen'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Spargel, Avocado, Molke (Glutathion instabil in Nahrung)'
  },
  {
    id: 'alpha-liponsaeure',
    name: 'Alpha-Liponsäure (ALA)',
    altNames: 'R-ALA',
    category: 'Antioxidant',
    tags: ['blutzucker', 'anti-oxidant', 'nerven', 'leber', 'mitochondrien'],
    short: 'Wasser- und fettlösliches Antioxidans. Reguliert Blutzucker und recycelt andere Antioxidantien.',
    description: 'R-ALA ist die biologisch aktive Form. Reguliert Blutzucker, regeneriert Vitamin C, E und Glutathion. Wirkt in Mitochondrien.',
    benefits: [
      'Verbessert Insulin-Sensitivität',
      'Senkt Blutzucker',
      'Wasser- und fettlöslich (universell)',
      'Recycelt andere Antioxidantien',
      'Hilft bei diabetischer Neuropathie'
    ],
    risks: [
      'Bei Hypoglykämie Vorsicht',
      'Kann Biotin-Aufnahme blockieren',
      'Seltener Hautausschlag'
    ],
    dosage: '300–600 mg R-ALA täglich.',
    intake: 'Auf leeren Magen, 30 min vor Mahlzeit.',
    synergies: ['acetyl-l-carnitin', 'coq10'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Spinat, Brokkoli, Innereien (Spurenmengen)'
  },
  {
    id: 'quercetin',
    name: 'Quercetin',
    altNames: 'Quercetin-Dihydrat',
    category: 'Antioxidant',
    tags: ['immun', 'allergie', 'anti-aging', 'senolytikum', 'entzuendung'],
    short: 'Pflanzliches Flavonoid. Antihistaminisch, anti-entzündlich, senolytisch.',
    description: 'Quercetin ist ein Senolytikum – es kann alternde („zombie") Zellen eliminieren. Kombiniert mit Fisetin besonders wirksam.',
    benefits: [
      'Wirkt antihistaminisch (bei Allergien)',
      'Starkes Antioxidans',
      'Senolytischer Effekt (eliminiert alte Zellen)',
      'Stärkt Immunsystem',
      'Verbessert Herzfunktion'
    ],
    risks: [
      'Niedrige Bioverfügbarkeit – mit Bromelain/Piperin verbessern',
      'Selten: Kopfschmerzen'
    ],
    dosage: '500–1.000 mg täglich, senolytisch: 1.500 mg 2 Tage/Monat.',
    intake: 'Mit fetthaltiger Mahlzeit. Mit Bromelain für Aufnahme.',
    synergies: ['vitamin-c', 'fisetin', 'bromelain'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Zwiebeln, Äpfel, Beeren, Grüntee, Kapern'
  },
  {
    id: 'pqq',
    name: 'PQQ',
    altNames: 'Pyrrolochinolinchinon',
    category: 'Antioxidant',
    tags: ['mitochondrien', 'energie', 'gehirn', 'anti-aging'],
    short: 'Stimuliert Mitochondrien-Biogenese (neue Mitochondrien).',
    description: 'PQQ ist der einzige bekannte Stoff, der nachweislich neue Mitochondrien bildet. Synergie mit CoQ10.',
    benefits: [
      'Bildet neue Mitochondrien',
      'Mehr Energie und Ausdauer',
      'Schützt Nervenzellen',
      'Kann Gedächtnis verbessern',
      'Anti-Aging-Effekte'
    ],
    risks: [
      'Gut verträglich',
      'Selten: Kopfschmerzen, Schlafstörungen bei hohen Dosen'
    ],
    dosage: '10–20 mg täglich.',
    intake: 'Morgens mit Frühstück.',
    synergies: ['coq10', 'nmn'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Natto, Petersilie, Grüntee (sehr geringe Mengen)'
  },

  // ============ SCHLAF & NEUROTRANSMITTER ============
  {
    id: 'melatonin',
    name: 'Melatonin',
    altNames: 'Schlafhormon',
    category: 'Hormon',
    tags: ['schlaf', 'jetlag', 'anti-oxidant', 'hormone'],
    short: 'Natürliches Schlafhormon. Niedrig dosieren – weniger ist mehr.',
    description: 'Studien zeigen: 0,3–0,5 mg sind oft wirksamer als die üblichen 3–10 mg. Auch ein potentes Antioxidans in den Mitochondrien.',
    benefits: [
      'Verkürzt Einschlafzeit',
      'Hilft bei Jetlag',
      'Starkes Antioxidans',
      'Unterstützt Immunsystem',
      'Reguliert zirkadianen Rhythmus'
    ],
    risks: [
      'Morgendliche Benommenheit bei Überdosis',
      'Kann Träume verstärken',
      'Bei hormonellen Erkrankungen Arzt fragen',
      'Nicht ideal für Kinder/Teenager'
    ],
    dosage: '0,3–1 mg etwa 30–60 min vor dem Schlafen. Bei Jetlag bis 3 mg.',
    intake: 'Abends bei gedämpftem Licht. Nicht bei heller Beleuchtung.',
    synergies: ['magnesium', 'glycin'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Kirschen, Pistazien (Spurenmengen)'
  },

  // ============ STOFFWECHSEL ============
  {
    id: 'berberin',
    name: 'Berberin',
    altNames: 'Berberis aristata',
    category: 'Kräuter',
    tags: ['blutzucker', 'stoffwechsel', 'darm', 'gewicht', 'cholesterin'],
    short: 'Pflanzenstoff, fast so wirksam wie Metformin bei Blutzucker.',
    description: 'Berberin aktiviert AMPK, einen zentralen Energiesensor. Reguliert Blutzucker und Cholesterin auf natürlichem Weg.',
    benefits: [
      'Senkt Blutzucker (ähnlich Metformin)',
      'Senkt Cholesterin',
      'Unterstützt Gewichtsverlust',
      'Verbessert Darmflora',
      'Aktiviert AMPK'
    ],
    risks: [
      'Kann Magen-Darm reizen',
      'Niedrige Bioverfügbarkeit',
      'Nicht in Schwangerschaft',
      'Interagiert mit vielen Medikamenten'
    ],
    dosage: '500 mg 2–3× täglich (Gesamt 1.000–1.500 mg).',
    intake: 'Vor oder zu den Mahlzeiten.',
    synergies: ['alpha-liponsaeure', 'zimt'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Berberitze, Goldfaden'
  },
  {
    id: 'spermidin',
    name: 'Spermidin',
    altNames: 'Polyamin',
    category: 'Longevity',
    tags: ['anti-aging', 'autophagie', 'longevity', 'haare', 'herz'],
    short: 'Induziert Autophagie (zelluläre Selbstreinigung) – wie Fasten in Pillenform.',
    description: 'Spermidin triggert Autophagie, den Recycling-Prozess der Zellen. In Weizenkeimen und gereiftem Käse besonders hoch.',
    benefits: [
      'Aktiviert Autophagie',
      'Unterstützt Haarwuchs',
      'Schützt Herz',
      'Anti-Aging-Effekte',
      'Kann Lebensdauer verlängern'
    ],
    risks: [
      'Sehr sicher',
      'In der Schwangerschaft meiden'
    ],
    dosage: '1–6 mg täglich.',
    intake: 'Morgens auf leeren Magen.',
    synergies: ['resveratrol', 'quercetin'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Weizenkeime, gereifter Käse, Soja, Pilze'
  },

  // ============ WEITERE ============
  {
    id: 'kollagen',
    name: 'Kollagen-Peptide',
    altNames: 'Hydrolysiertes Kollagen Typ I & III',
    category: 'Protein',
    tags: ['haut', 'gelenke', 'haare', 'anti-aging', 'darm'],
    short: 'Baustein für Haut, Haare, Nägel und Gelenke. Körpereigene Produktion sinkt ab 25.',
    description: 'Kollagen macht 30 % des Körperproteins aus. Mit Vitamin C eingenommen für bessere Synthese. Grass-fed oder Meeresfisch bevorzugen.',
    benefits: [
      'Verbessert Hautelastizität',
      'Stärkt Haare und Nägel',
      'Lindert Gelenkschmerzen',
      'Unterstützt Darmgesundheit',
      'Gute Glycin-Quelle'
    ],
    risks: [
      'Sehr sicher',
      'Bei Allergien auf Fisch/Rind beachten'
    ],
    dosage: '10–20 g täglich.',
    intake: 'Morgens mit Vitamin C im Kaffee/Smoothie. Oder nach dem Training.',
    synergies: ['vitamin-c', 'hyaluronsaeure'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Knochenbrühe, Haut/Bindegewebe von Tieren'
  },
  {
    id: 'probiotika',
    name: 'Probiotika',
    altNames: 'Lactobacillus / Bifidobakterien',
    category: 'Probiotika',
    tags: ['darm', 'immun', 'stimmung', 'verdauung', 'haut'],
    short: 'Lebende Bakterien für Darmgesundheit. Qualität und Vielfalt sind entscheidend.',
    description: 'Ein hochwertiges Probiotikum enthält mehrere Stämme, mindestens 10–50 Mrd. KBE und magensaftresistente Kapseln.',
    benefits: [
      'Verbessert Verdauung',
      'Stärkt Immunsystem',
      'Gut-Brain-Axis: beeinflusst Stimmung',
      'Hilft bei Reizdarm',
      'Kann Hautprobleme lindern'
    ],
    risks: [
      'Initial: Blähungen möglich',
      'Bei stark immunsupprimierten Personen Arzt fragen'
    ],
    dosage: '10–100 Mrd. KBE täglich, verschiedene Stämme.',
    intake: 'Auf nüchternen Magen morgens oder abends vor dem Schlafen.',
    synergies: ['praebiotika'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Sauerkraut, Kefir, Kimchi, Joghurt (fermentierte Lebensmittel)'
  },
  {
    id: 'elektrolyte',
    name: 'Elektrolyte',
    altNames: 'Natrium / Kalium / Magnesium',
    category: 'Mineral',
    tags: ['energie', 'sport', 'keto', 'fluessigkeit', 'muskel'],
    short: 'Natrium, Kalium, Magnesium. Essenziell bei Keto, Fasten, Sport und Hitze.',
    description: 'Bei Low-Carb/Keto verliert der Körper Natrium und Kalium schneller. Elektrolyte beugen Krämpfen, Müdigkeit und Kopfschmerzen vor.',
    benefits: [
      'Verhindert Muskelkrämpfe',
      'Mehr Energie und Fokus',
      'Wichtig bei Keto-Grippe',
      'Verbessert Sportleistung',
      'Hilft bei Dehydrierung'
    ],
    risks: [
      'Nicht übertreiben – Nieren regulieren',
      'Vorsicht bei Bluthochdruck (Natrium)'
    ],
    dosage: 'Natrium 1–3 g, Kalium 500–1.000 mg, Magnesium 200 mg täglich.',
    intake: 'Über den Tag verteilt in Wasser. Beim Sport wichtig.',
    synergies: ['magnesium'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Meersalz, Bananen, Avocado, Kokoswasser, grünes Blattgemüse'
  },
  {
    id: 'koffein',
    name: 'Koffein',
    altNames: 'Trimethylxanthin',
    category: 'Stimulans',
    tags: ['energie', 'fokus', 'sport', 'stimmung'],
    short: 'Weltweit meistkonsumiertes Nootropic. Richtig dosiert sehr effektiv.',
    description: 'Koffein blockiert Adenosin-Rezeptoren. Halbwertszeit 5–6 Stunden – deshalb nach 14 Uhr für besseren Schlaf meiden. Nicht nüchtern wegen Cortisol-Spike.',
    benefits: [
      'Steigert Wachheit und Fokus',
      'Verbessert sportliche Leistung',
      'Kann Stimmung heben',
      'Beschleunigt Fettverbrennung',
      'Antioxidative Wirkung (Kaffee)'
    ],
    risks: [
      'Toleranz bei täglicher Hochdosis',
      'Kann Schlaf stören (Halbwertszeit!)',
      'Herzrasen, Unruhe bei Empfindlichen',
      'Cortisol-Spike – nicht auf leeren Magen'
    ],
    dosage: '100–300 mg täglich, maximal 400 mg.',
    intake: '60–90 min nach Aufwachen, nicht nach 14 Uhr. Mit L-Theanin für ruhige Wachheit.',
    synergies: ['l-theanin', 'kreatin'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Kaffee, Grüner Tee, Matcha, Guarana'
  },
  {
    id: 'whey',
    name: 'Whey Protein',
    altNames: 'Molkenprotein-Isolat',
    category: 'Protein',
    tags: ['muskel', 'sport', 'saettigung', 'immun'],
    short: 'Hochwertigstes Protein mit bestem Aminosäureprofil. Ideal post-Workout.',
    description: 'Isolat > 90 % Protein, sehr schnell verfügbar. Grass-fed bevorzugen. Enthält auch immunstärkende Peptide (Immunoglobuline).',
    benefits: [
      'Optimal für Muskelaufbau',
      'Hoher Leucin-Gehalt (mTOR-Aktivierung)',
      'Unterstützt Glutathion-Produktion',
      'Sättigt stark',
      'Gute Aminosäuren-Bilanz'
    ],
    risks: [
      'Bei Laktoseintoleranz: Isolat nehmen',
      'Bei Akne-Neigung bedenken (IGF-1)',
      'Hochwertige Qualität wählen (Schwermetalle)'
    ],
    dosage: '20–40 g nach Training oder als Mahlzeit-Ergänzung.',
    intake: 'Innerhalb 1h nach Workout. Auch als schnelle Eiweißquelle.',
    synergies: ['kreatin'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Flüssigmolke (Käseherstellungs-Nebenprodukt)'
  },
  // ============ NEU: LONGEVITY & ANTIOXIDANTIEN ============
  {
    id: 'nac',
    name: 'NAC (N-Acetyl-Cystein)',
    altNames: 'N-Acetylcystein',
    category: 'Aminosäure',
    tags: ['detox', 'immun', 'leber', 'atmung', 'glutathion', 'anti-aging'],
    short: 'Vorläufer von Glutathion – dem Master-Antioxidans des Körpers. Standard-Biohacker-Supplement.',
    description: 'NAC liefert die Aminosäure Cystein, aus der der Körper Glutathion aufbaut. Wird klinisch bei Paracetamol-Vergiftung und Lungenerkrankungen eingesetzt. Beliebtes Supplement für Detox, Immunsystem und mentale Gesundheit.',
    benefits: [
      'Erhöht Glutathion-Spiegel in Leber, Lunge und Gehirn',
      'Schützt Leber vor Alkohol- und Medikamenten-Belastung',
      'Löst zähen Schleim in den Atemwegen',
      'Wirkt bei OCD, Trichotillomanie und Sucht-Verlangen',
      'Reduziert oxidativen Stress'
    ],
    risks: [
      'Selten: Übelkeit, Durchfall',
      'Schwefelgeschmack möglich',
      'Bei Asthmatikern erste Dosis vorsichtig testen'
    ],
    dosage: '600–1.800 mg täglich, aufgeteilt auf 1–2 Dosen.',
    intake: 'Nüchtern oder mit Vitamin C kombinieren für bessere Aufnahme.',
    synergies: ['glutathion', 'vitamin-c', 'glycin', 'alpha-liponsaeure'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Keine nennenswerten Nahrungsquellen – nur als Supplement.'
  },
  {
    id: 'apigenin',
    name: 'Apigenin',
    altNames: 'Kamillen-Flavonoid',
    category: 'Longevity',
    tags: ['schlaf', 'longevity', 'entspannung', 'nad', 'cd38', 'entzuendung'],
    short: 'Flavonoid aus Kamille – hemmt CD38 und erhöht dadurch NAD+. Schlaf-Booster der Longevity-Szene.',
    description: 'Apigenin wird von Longevity-Forschern wie David Sinclair empfohlen. Blockiert das Enzym CD38, das NAD+ abbaut – so steigt der Zellenergie-Level. Bindet zusätzlich an Benzodiazepin-Rezeptoren für entspannende Wirkung.',
    benefits: [
      'Hemmt CD38 → erhöht NAD+ indirekt',
      'Fördert tiefen Schlaf und schnelleres Einschlafen',
      'Senkt Entzündungsmarker',
      'Anti-östrogene Eigenschaften (bei Männern positiv)',
      'Antioxidative und neuroprotektive Wirkung'
    ],
    risks: [
      'Bei hohen Dosen Blutverdünnung möglich',
      'Vorsicht bei östrogenabhängigen Erkrankungen – Rücksprache mit Arzt',
      'Kann Sedierung verstärken (Alkohol, Schlafmittel meiden)'
    ],
    dosage: '50 mg abends (Standard-Biohacker-Dosis nach Sinclair). Kamillentee liefert zu wenig.',
    intake: '30–60 min vor dem Schlafengehen. Mit etwas Fett für bessere Aufnahme.',
    synergies: ['nmn', 'resveratrol', 'magnesium', 'melatonin'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Kamille, Petersilie, Sellerie, Artischocke (sehr niedrig dosiert)'
  },
  {
    id: 'fisetin',
    name: 'Fisetin',
    altNames: 'Flavonoid aus Erdbeeren',
    category: 'Longevity',
    tags: ['senolytisch', 'longevity', 'gehirn', 'anti-aging', 'entzuendung'],
    short: 'Senolytikum – entfernt seneszente „Zombie-Zellen". Einer der vielversprechendsten Longevity-Stoffe.',
    description: 'Fisetin hat in Maus-Studien seneszente Zellen abgebaut und die Lebensspanne verlängert. Aktuell laufen Humanstudien an der Mayo Clinic. Klassische Protokolle: hochdosiert über 2 Tage monatlich.',
    benefits: [
      'Senolytisch: entfernt alternde Zellen, die Entzündung auslösen',
      'Schützt das Gehirn (Neuroprotektion bei Alzheimer-Modellen)',
      'Stark antioxidativ',
      'Kann Sirtuine aktivieren',
      'Wirkt anti-entzündlich'
    ],
    risks: [
      'Langzeitwirkung beim Menschen noch in Studien',
      'Hoch dosiert sehr kurz anwenden (Hit-&-Run-Protokoll)',
      'Kann Medikamente (Blutverdünner) beeinflussen'
    ],
    dosage: 'Täglich: 100 mg. Senolytischer Puls: 20 mg/kg an 2 aufeinanderfolgenden Tagen pro Monat.',
    intake: 'Mit fettreicher Mahlzeit (fettlöslich). Schwarzpfeffer/Piperin verbessert Aufnahme.',
    synergies: ['quercetin', 'resveratrol', 'spermidin'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Erdbeeren (höchste natürliche Konzentration), Äpfel, Kakis, Zwiebeln'
  },
  {
    id: 'sulforaphan',
    name: 'Sulforaphan',
    altNames: 'Broccoli-Sprossen-Extrakt',
    category: 'Antioxidant',
    tags: ['detox', 'anti-aging', 'krebs', 'nrf2', 'entzuendung', 'leber'],
    short: 'Aktiviert den NRF2-Pathway – den Master-Schalter für körpereigene Antioxidantien.',
    description: 'Sulforaphan entsteht aus Glucoraphanin in Broccoli-Sprossen, wenn sie zerkaut werden. Aktiviert den NRF2-Transkriptionsfaktor, der hunderte entgiftende und antioxidative Gene einschaltet. Rhonda Patricks Lieblings-Supplement.',
    benefits: [
      'Aktiviert körpereigene Entgiftung (Phase-II-Enzyme)',
      'Senkt oxidativen Stress und Entzündung',
      'Starke Schutzwirkung gegen viele Krebsarten (präklinisch)',
      'Unterstützt die Leber-Entgiftung',
      'Kann Insulinresistenz verbessern'
    ],
    risks: [
      'Bei Schilddrüsenunterfunktion hohe Dosen meiden (goitrogen)',
      'Selten Magenbeschwerden'
    ],
    dosage: 'Täglich: 10–40 mg Sulforaphan oder 30 g frische Broccoli-Sprossen.',
    intake: 'Am besten morgens, mit Senf gegessen (Myrosinase aktiviert es). Supplement-Kapseln stabiler.',
    synergies: ['kurkuma', 'omega-3', 'glutathion'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Broccoli-Sprossen (höchste Konzentration), Broccoli, Rosenkohl, Rucola'
  },
  {
    id: 'urolithin-a',
    name: 'Urolithin A',
    altNames: 'Mitopure',
    category: 'Longevity',
    tags: ['mitochondrien', 'muskel', 'longevity', 'energie', 'autophagie'],
    short: 'Fördert Mitophagie – recycelt beschädigte Mitochondrien. Neueste Longevity-Entdeckung.',
    description: 'Urolithin A entsteht im Darm aus Ellagsäure (Granatapfel) – aber nur bei ca. 40 % der Menschen. Als Supplement (Mitopure) direkt verfügbar. Erste Humanstudien zeigen verbesserte Muskelkraft und Ausdauer bei Älteren.',
    benefits: [
      'Stimuliert Mitophagie (Recycling alter Mitochondrien)',
      'Verbessert Muskelkraft und Ausdauer bei Älteren',
      'Reduziert Entzündungsmarker',
      'Schützt das Immunsystem',
      'Kann die Hautalterung verlangsamen'
    ],
    risks: [
      'Gut verträglich, selten Magenbeschwerden',
      'Teuer als Markensupplement (Mitopure)',
      'Langzeitdaten beim Menschen noch ausstehend'
    ],
    dosage: '500 mg täglich (Standard-Biohacker-Dosis).',
    intake: 'Mit einer Mahlzeit, bevorzugt morgens.',
    synergies: ['coq10', 'pqq', 'nmn'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Indirekt über Ellagsäure: Granatapfel, Walnüsse, Himbeeren (nur bei passender Darmflora)'
  },
  {
    id: 'pterostilben',
    name: 'Pterostilben',
    altNames: 'Pterostilbene',
    category: 'Longevity',
    tags: ['anti-aging', 'nad', 'herz', 'gehirn', 'blutzucker'],
    short: 'Resveratrol-Verwandter – höhere Bioverfügbarkeit und längere Wirkdauer. Oft mit NMN kombiniert.',
    description: 'Pterostilben wird vom Körper 4-mal besser aufgenommen als Resveratrol und wirkt länger. Aktiviert Sirtuine und AMPK – die zentralen Longevity-Schalter. Beliebt als NMN-Partner statt Resveratrol.',
    benefits: [
      'Aktiviert Sirtuine und AMPK (wie Resveratrol, stärker)',
      'Senkt LDL-Cholesterin und Blutzucker',
      'Neuroprotektiv: schützt vor kognitivem Abbau',
      'Antioxidativ und anti-entzündlich',
      'Stabile orale Bioverfügbarkeit'
    ],
    risks: [
      'Kann LDL leicht erhöhen (selten)',
      'Wechselwirkung mit Blutverdünnern möglich',
      'Langzeit-Humanstudien noch begrenzt'
    ],
    dosage: '50–150 mg täglich.',
    intake: 'Morgens mit fettreicher Mahlzeit. Ideal mit NMN oder NR.',
    synergies: ['nmn', 'resveratrol', 'coq10'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Blaubeeren (höchste Quelle), Trauben, Mandeln'
  },

  // ============ NEU: NOOTROPIKA ============
  {
    id: 'alpha-gpc',
    name: 'Alpha-GPC',
    altNames: 'L-Alpha-Glycerylphosphorylcholin',
    category: 'Aminosäure',
    tags: ['gehirn', 'fokus', 'gedaechtnis', 'nootropic', 'acetylcholin'],
    short: 'Hochbioverfügbare Cholinquelle. Erhöht Acetylcholin im Gehirn – Top-Nootropikum.',
    description: 'Alpha-GPC überquert die Blut-Hirn-Schranke und liefert Cholin direkt für die Acetylcholin-Synthese. Klinisch gegen Alzheimer erforscht, bei Sportlern für Kraft-Output beliebt.',
    benefits: [
      'Verbessert Gedächtnis und Lernen',
      'Steigert Fokus und geistige Klarheit',
      'Erhöht Kraft-Output im Training (Growth-Hormone-Ausschüttung)',
      'Schützt das Gehirn im Alter',
      'Wirkt synergistisch mit Racetamen'
    ],
    risks: [
      'Selten: Kopfschmerzen, Reizbarkeit bei zu hoher Dosis',
      'Kann Depressionen bei dispositionierten Personen verstärken',
      'Möglicher Zusammenhang mit Herz-Kreislauf-Risiko (in Diskussion)'
    ],
    dosage: '300–600 mg täglich. Vor Training: 400 mg.',
    intake: 'Morgens oder vor kognitiver/körperlicher Leistung. Mit Fett einnehmen.',
    synergies: ['l-theanin', 'koffein', 'loewenmaehne', 'omega-3'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Eier, Leber, Milch (geringe Mengen)'
  },
  {
    id: 'citicolin',
    name: 'Citicolin (CDP-Cholin)',
    altNames: 'Cytidin-5-Diphosphocholin',
    category: 'Aminosäure',
    tags: ['gehirn', 'fokus', 'gedaechtnis', 'nootropic', 'acetylcholin'],
    short: 'Duales Nootropikum – liefert Cholin UND Uridin. Stabilisiert Zellmembranen im Gehirn.',
    description: 'Citicolin wird im Körper zu Cholin und Cytidin gespalten. Das Cytidin wird zu Uridin – beide verbessern Neurotransmitter-Funktion. In Europa als Medikament gegen Schlaganfall-Folgen zugelassen.',
    benefits: [
      'Verbessert Aufmerksamkeit und Reaktionsgeschwindigkeit',
      'Steigert Gedächtnis, besonders bei Älteren',
      'Schützt Nervenzellen (Neuroprotektion)',
      'Unterstützt Dopamin-Rezeptor-Dichte',
      'Beliebtes Baseline-Nootropikum (z.B. im „Mind Lab Pro")'
    ],
    risks: [
      'Gut verträglich, selten Kopfschmerzen',
      'Teurer als Alpha-GPC'
    ],
    dosage: '250–500 mg täglich. Klinische Studien: bis 2.000 mg.',
    intake: 'Morgens oder vor kognitiver Anforderung. Mit Mahlzeit.',
    synergies: ['l-theanin', 'koffein', 'omega-3', 'loewenmaehne'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Rinderleber, Eier, Fisch (geringe Mengen)'
  },
  {
    id: 'phosphatidylserin',
    name: 'Phosphatidylserin (PS)',
    altNames: 'PS',
    category: 'Aminosäure',
    tags: ['stress', 'cortisol', 'gedaechtnis', 'schlaf', 'gehirn'],
    short: 'Senkt erhöhte Cortisolspiegel – besonders nach Training oder bei Stress. Gut vor dem Schlafen.',
    description: 'Phosphatidylserin ist ein Phospholipid der Zellmembran, besonders reichlich im Gehirn. Studien zeigen signifikante Cortisol-Senkung nach intensivem Training und bessere Schlafqualität.',
    benefits: [
      'Senkt erhöhtes Cortisol (bis zu 30 % nach Training)',
      'Verbessert Schlafqualität bei Gestressten',
      'Unterstützt Gedächtnis und Konzentration',
      'Wirkt bei ADHS-Symptomen',
      'Sicher bei Langzeitanwendung'
    ],
    risks: [
      'Selten: Magenbeschwerden bei hoher Dosis',
      'Abends einnehmen kann Schlafqualität verbessern, nicht bei jedem tagsüber sinnvoll'
    ],
    dosage: '100–300 mg täglich. Abends oder nach Training.',
    intake: 'Mit einer fetthaltigen Mahlzeit.',
    synergies: ['ashwagandha', 'magnesium', 'omega-3', 'glycin'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Innereien (v.a. Hirn – historisch), Lecithin, Sojabohnen'
  },
  {
    id: 'ginkgo',
    name: 'Ginkgo Biloba',
    altNames: 'Fächerblattbaum-Extrakt',
    category: 'Kräuter',
    tags: ['gehirn', 'durchblutung', 'gedaechtnis', 'nootropic', 'tinnitus'],
    short: 'Erhöht die zerebrale Durchblutung. Klassiker gegen altersbedingte Gedächtnisprobleme.',
    description: 'Ginkgo-Blatt-Extrakt (EGb 761) ist eines der am besten erforschten Phytopharmaka. Verbessert die Mikrozirkulation, hat antioxidative Eigenschaften. In Deutschland Teil der leitliniengerechten Demenz-Behandlung.',
    benefits: [
      'Verbessert zerebrale Durchblutung',
      'Unterstützt Gedächtnis bei altersbedingtem Abbau',
      'Wirkt bei Tinnitus und Schwindel',
      'Antioxidative Wirkung im Gehirn',
      'Kann periphere arterielle Durchblutung fördern'
    ],
    risks: [
      'Blutverdünnend – 2 Wochen vor OPs absetzen',
      'Nicht mit Aspirin, ASS, Warfarin kombinieren (ohne Arzt)',
      'Selten: Kopfschmerzen, Magenbeschwerden'
    ],
    dosage: '120–240 mg täglich standardisierter Extrakt (EGb 761).',
    intake: 'Aufgeteilt auf 2 Dosen, mit Mahlzeiten.',
    synergies: ['omega-3', 'vitamin-b-komplex'],
    avoid: ['Blutverdünner'],
    evidence: 'hoch',
    sources: 'Ausschließlich als Extrakt – rohe Blätter nicht empfohlen.'
  },

  // ============ NEU: AMINOSÄUREN & PERFORMANCE ============
  {
    id: 'beta-alanin',
    name: 'Beta-Alanin',
    altNames: 'β-Alanin',
    category: 'Aminosäure',
    tags: ['sport', 'ausdauer', 'muskel', 'carnosin', 'leistung'],
    short: 'Vorläufer von Carnosin – puffert Muskelsäure ab. Verlängert die Leistung bei 1–4 min Belastung.',
    description: 'Beta-Alanin wird im Muskel mit Histidin zu Carnosin verknüpft. Carnosin puffert Wasserstoff-Ionen bei intensiver Belastung. Das „Kribbeln" (Paraesthesie) nach Einnahme ist harmlos.',
    benefits: [
      'Verlängert Time-to-Exhaustion bei hochintensiver Belastung',
      'Verbessert Sprints, HIIT, CrossFit',
      'Erhöht intramuskuläres Carnosin um bis zu 60 %',
      'Antioxidative Wirkung im Muskel',
      'Kann kognitive Funktion unter Stress verbessern'
    ],
    risks: [
      'Kribbeln/Prickeln auf der Haut (harmlos, vermeidbar durch Aufteilen)',
      'Benötigt 4+ Wochen Aufsättigung, um zu wirken'
    ],
    dosage: '3,2–6,4 g täglich, aufgeteilt auf 2–4 Dosen à 800 mg.',
    intake: 'Mit Mahlzeiten. Timing nicht kritisch – Akkumulation zählt.',
    synergies: ['kreatin', 'taurin'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Huhn, Rind, Fisch (indirekt über Carnosin)'
  },
  {
    id: 'citrullin',
    name: 'L-Citrullin (-Malat)',
    altNames: 'Citrullin Malat',
    category: 'Aminosäure',
    tags: ['sport', 'pump', 'stickoxid', 'durchblutung', 'ausdauer'],
    short: 'Effektiver als Arginin – erhöht Stickoxid, verbessert Pump und reduziert Muskelkater.',
    description: 'L-Citrullin wird im Körper zu Arginin umgewandelt und erhöht NO (Stickoxid), was die Gefäße erweitert. Die Malat-Form unterstützt zusätzlich den Energiestoffwechsel.',
    benefits: [
      'Bessere Durchblutung und Muskelpump',
      'Verbessert Ausdauer um 7–10 %',
      'Reduziert Muskelkater nach intensivem Training',
      'Kann Blutdruck leicht senken',
      'Unterstützt Erektionsqualität'
    ],
    risks: [
      'Sehr gut verträglich',
      'Selten: Magenbeschwerden'
    ],
    dosage: '6–8 g Citrullin-Malat 30–60 min vor Training. Täglich: 3–5 g.',
    intake: 'Vor dem Workout mit Wasser. Nüchtern gut aufgenommen.',
    synergies: ['kreatin', 'beta-alanin', 'elektrolyte'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Wassermelone (höchste natürliche Quelle), Kürbis, Gurke'
  },

  // ============ NEU: ENTSPANNUNG & SCHLAF ============
  {
    id: 'gaba',
    name: 'GABA',
    altNames: 'Gamma-Aminobuttersäure',
    category: 'Aminosäure',
    tags: ['stress', 'entspannung', 'schlaf', 'angst', 'cortisol'],
    short: 'Hauptsächlicher hemmender Neurotransmitter – beruhigt nach stressigem Tag.',
    description: 'GABA ist der wichtigste beruhigende Neurotransmitter. Ob orales GABA die Blut-Hirn-Schranke überquert, ist umstritten – viele spüren dennoch einen Effekt (möglicherweise über Darm-Hirn-Achse).',
    benefits: [
      'Fördert Entspannung und reduziert Ängstlichkeit',
      'Verbessert Schlafqualität (Einschlafen)',
      'Senkt Blutdruck leicht',
      'Kann Cortisol dämpfen',
      'Gut kombinierbar mit L-Theanin'
    ],
    risks: [
      'Selten: Kribbeln, Kurzatmigkeit bei hohen Dosen',
      'Wirkung individuell sehr unterschiedlich',
      'Tagsüber kann es müde machen'
    ],
    dosage: '100–750 mg bei Bedarf. Zum Schlafen: 500–750 mg.',
    intake: 'Abends oder bei akutem Stress. Auf nüchternen Magen.',
    synergies: ['l-theanin', 'magnesium', 'glycin', 'ashwagandha'],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Fermentierte Lebensmittel (Kimchi, Miso, Tempeh), grüner Tee'
  },
  {
    id: 'inositol',
    name: 'Myo-Inositol',
    altNames: 'Vitamin B8',
    category: 'Vitamin',
    tags: ['angst', 'hormone', 'blutzucker', 'pcos', 'stimmung'],
    short: 'Zuckeralkohol mit Vitamin-ähnlicher Funktion – hilft bei Angst, PCOS und Insulinresistenz.',
    description: 'Inositol reguliert Insulin- und Serotonin-Signalwege. Besonders wirksam bei PCOS (polyzystisches Ovarialsyndrom) und Panikstörung. Kombination Myo- + D-Chiro-Inositol (40:1) gilt als Goldstandard bei PCOS.',
    benefits: [
      'Verbessert Insulinsensitivität',
      'Reguliert Zyklus und Fruchtbarkeit bei PCOS',
      'Wirkt bei Angststörung und Panikattacken',
      'Unterstützt Stimmung bei Depression',
      'Senkt Triglyzeride'
    ],
    risks: [
      'Hohe Dosen (>12 g): Magenbeschwerden, Durchfall',
      'Wirkung braucht 2–8 Wochen'
    ],
    dosage: '2–4 g 2× täglich. PCOS: 4 g täglich.',
    intake: 'Morgens und abends in Wasser. Auch zu Mahlzeiten.',
    synergies: ['magnesium', 'chrom', 'vitamin-b-komplex'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Obst (v.a. Zitrus), Bohnen, Getreide'
  },

  // ============ NEU: METHYLIERUNG & MITO ============
  {
    id: 'tmg',
    name: 'TMG (Trimethylglycin)',
    altNames: 'Betain',
    category: 'Aminosäure',
    tags: ['methylierung', 'herz', 'leber', 'homocystein', 'longevity'],
    short: 'Methylgruppen-Spender – essenziell beim NMN-Stack, senkt Homocystein.',
    description: 'TMG (Betain) liefert Methylgruppen für den Homocystein-Stoffwechsel. NMN und NR verbrauchen Methylgruppen – TMG füllt den Speicher auf. David Sinclair nimmt es täglich mit seinem NMN.',
    benefits: [
      'Senkt Homocystein (Herz-Kreislauf-Risikofaktor)',
      'Unterstützt Leber-Entgiftung',
      'Gleicht Methylgruppen-Verbrauch durch NMN/NR aus',
      'Kann Leistungsfähigkeit steigern',
      'Schützt vor Fettleber'
    ],
    risks: [
      'Kann „fischigen" Körpergeruch verursachen (TMA)',
      'Hohe Dosen (>15 g): Magenbeschwerden'
    ],
    dosage: '500 mg – 2 g täglich. Mit NMN: 1 g pro 500 mg NMN.',
    intake: 'Morgens mit NMN/NR. Alternativ zu Mahlzeiten.',
    synergies: ['nmn', 'vitamin-b-komplex', 'folat'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Rote Beete, Spinat, Quinoa, Weizenkeime'
  },
  {
    id: 'methylfolat',
    name: 'Methylfolat',
    altNames: '5-MTHF, L-Methylfolat',
    category: 'Vitamin',
    tags: ['methylierung', 'stimmung', 'schwangerschaft', 'homocystein', 'mthfr'],
    short: 'Aktive Form von Folat – essenziell für Methylierung. Besonders für MTHFR-Genvariante.',
    description: 'Methylfolat ist die bioaktive Form, die der Körper direkt nutzen kann. Rund 40 % der Menschen haben eine MTHFR-Genvariante, die Folsäure schlecht aktiviert. Wichtig für DNA-Reparatur, Neurotransmitter und Schwangerschaft.',
    benefits: [
      'Wirkt bei Depression (besonders MTHFR-Träger)',
      'Essenziell in der Schwangerschaft (Neuralrohr)',
      'Senkt Homocystein',
      'Unterstützt DNA-Reparatur',
      'Besser verträglich als Folsäure'
    ],
    risks: [
      'Überdosis kann Reizbarkeit, Schlafprobleme auslösen (Überstimulation)',
      'Nicht einfach Folsäure gegen Methylfolat tauschen – niedrig anfangen',
      'Bei B12-Mangel maskierbar – B12 mittesten'
    ],
    dosage: '400–800 µg täglich (Standard). Therapeutisch: bis 5 mg.',
    intake: 'Morgens mit B12 zusammen. Langsam aufdosieren.',
    synergies: ['vitamin-b12', 'vitamin-b-komplex', 'tmg'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Dunkelgrünes Blattgemüse, Linsen, Spargel, Leber'
  },

  // ============ NEU: MINERALIEN ============
  {
    id: 'bor',
    name: 'Bor (Boron)',
    altNames: 'Boron',
    category: 'Mineral',
    tags: ['hormone', 'testosteron', 'knochen', 'gelenke', 'longevity'],
    short: 'Unterschätztes Spurenelement – erhöht freies Testosteron, stärkt Knochen.',
    description: 'Bor beeinflusst Hormonspiegel, besonders Testosteron und Östrogen. Studien zeigen einen Anstieg von freiem Testosteron nach 1 Woche Supplementierung. In der Nahrung in Mitteleuropa oft zu niedrig.',
    benefits: [
      'Erhöht freies Testosteron (bis +28 % in Studie)',
      'Senkt SHBG (bindet Sexualhormone)',
      'Unterstützt Knochenmineralisierung',
      'Reduziert Gelenkentzündung',
      'Kann kognitive Leistung steigern'
    ],
    risks: [
      'Sehr hohe Dosen (>20 mg/Tag) langfristig problematisch',
      'Niedriger Bedarf – nicht mehr ist besser'
    ],
    dosage: '3–10 mg täglich.',
    intake: 'Morgens mit einer Mahlzeit.',
    synergies: ['vitamin-d3', 'magnesium', 'zink'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Rosinen, Avocado, Aprikosen, Mandeln, Wein'
  },

  // ============ NEU: PILZE & ADAPTOGENE ============
  {
    id: 'chaga',
    name: 'Chaga (Schiefer Schillerporling)',
    altNames: 'Inonotus obliquus',
    category: 'Pilz',
    tags: ['immun', 'antioxidant', 'entzuendung', 'longevity', 'darm'],
    short: 'Einer der stärksten natürlichen Antioxidantien. „König der Heilpilze" in Sibirien.',
    description: 'Chaga wächst an Birken und enthält extrem viele Melanin, Beta-Glucane und Betulinsäure. ORAC-Wert (antioxidative Kapazität) ist einer der höchsten aller Naturstoffe. Traditionell als Tee getrunken.',
    benefits: [
      'Höchster ORAC-Wert aller Lebensmittel',
      'Moduliert das Immunsystem (Beta-Glucane)',
      'Antiviral und anti-entzündlich',
      'Unterstützt Darmschleimhaut',
      'Kann Blutzucker regulieren'
    ],
    risks: [
      'Enthält Oxalate – bei Nierensteinen vorsichtig',
      'Blutverdünnende Wirkung – vor OPs absetzen',
      'Bei Autoimmunerkrankungen mit Arzt absprechen'
    ],
    dosage: '500 mg – 2 g Extrakt (doppelt extrahiert) täglich.',
    intake: 'Morgens oder mittags als Pulver, Tee oder Tinktur.',
    synergies: ['reishi', 'cordyceps', 'vitamin-c'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Wächst wild an Birken; meist als Extrakt erhältlich.'
  },

  // ============ NEU: GELENKE & HAUT ============
  {
    id: 'hyaluronsaeure',
    name: 'Hyaluronsäure',
    altNames: 'HA',
    category: 'Longevity',
    tags: ['haut', 'gelenke', 'augen', 'bindegewebe', 'anti-aging'],
    short: 'Bindet das 1000-fache seines Gewichts an Wasser – für Haut, Gelenke und Augen.',
    description: 'Hyaluronsäure ist ein natürlicher Bestandteil der extrazellulären Matrix. Mit dem Alter sinken die Eigensynthese-Raten. Orale Einnahme wirkt belegt bei Hautfeuchte und leichter Arthrose.',
    benefits: [
      'Verbessert Hautfeuchtigkeit und -elastizität',
      'Reduziert Gelenkschmerzen bei Arthrose',
      'Unterstützt Augenbefeuchtung (trockene Augen)',
      'Fördert Wundheilung',
      'Schmiert Gelenke wie natürliche Gelenkflüssigkeit'
    ],
    risks: [
      'Sehr gut verträglich oral',
      'Injizierbare Form nur vom Arzt'
    ],
    dosage: '120–240 mg täglich (oral).',
    intake: 'Mit einer Mahlzeit. Mit Vitamin C für bessere Kollagenbildung.',
    synergies: ['kollagen', 'vitamin-c', 'glucosamin'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Knochenbrühe (wenig), nur als Extrakt in sinnvoller Dosis.'
  },
  {
    id: 'glucosamin',
    name: 'Glucosamin',
    altNames: 'Glucosamin-Sulfat',
    category: 'Longevity',
    tags: ['gelenke', 'knorpel', 'bewegung', 'anti-aging', 'arthrose'],
    short: 'Knorpel-Baustein – bei regelmäßiger Einnahme senkt es sogar die Gesamt-Sterblichkeit.',
    description: 'Glucosamin unterstützt den Knorpelaufbau und hat in Beobachtungsstudien eine ähnliche Wirkung wie regelmäßiges Moderate-Cardio-Training auf die Mortalität. Oft mit Chondroitin kombiniert.',
    benefits: [
      'Reduziert Gelenkschmerzen bei Arthrose',
      'Verlangsamt Knorpelabbau',
      'Senkt in Beobachtungsstudien Gesamt-Mortalität (-15 %)',
      'Anti-entzündlich',
      'Unterstützt Bindegewebe'
    ],
    risks: [
      'Bei Schalentier-Allergie: vegane Variante wählen',
      'Kann Blutzucker leicht erhöhen – bei Diabetes beobachten',
      'Wechselwirkung mit Warfarin möglich'
    ],
    dosage: '1.500 mg täglich (als Sulfat).',
    intake: 'Mit Mahlzeit. Aufteilen auf 2–3 Dosen reduziert Magenbeschwerden.',
    synergies: ['kollagen', 'hyaluronsaeure', 'omega-3', 'vitamin-c'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Schalen von Krustentieren (Extraktion), kleine Mengen in Knochenbrühe.'
  }
];

// Kategorien für Filter
const CATEGORIES = [
  { id: 'all', label: 'Alle' },
  { id: 'Vitamin', label: 'Vitamine' },
  { id: 'Mineral', label: 'Minerale' },
  { id: 'Fettsäure', label: 'Fettsäuren' },
  { id: 'Aminosäure', label: 'Aminosäuren' },
  { id: 'Adaptogen', label: 'Adaptogene' },
  { id: 'Pilz', label: 'Vitalpilze' },
  { id: 'Antioxidant', label: 'Antioxidantien' },
  { id: 'Longevity', label: 'Longevity' },
  { id: 'Kräuter', label: 'Kräuter' },
  { id: 'Protein', label: 'Proteine' },
  { id: 'Hormon', label: 'Hormone' },
  { id: 'Probiotika', label: 'Probiotika' },
  { id: 'Stimulans', label: 'Stimulanzien' }
];
