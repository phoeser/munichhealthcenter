/* Therapien & Behandlungen
 * Quelle: Munich Health Center (munichhealthcenter.de) + Inuspherese (externer Anbieter)
 * Kategorien:
 *   - Ausstattung: gerätegestützte Anwendungen vor Ort
 *   - Schwerpunkt: thematische Begleitkonzepte
 *   - Netzwerk:   Partner-Experten/-Leistungen
 *   - Extern:     Verfahren außerhalb MHC (z.B. Inuspherese)
 */
const THERAPIES = [
  // ============ AUSSTATTUNG (8) ============
  {
    id: 'ihht',
    name: 'IHHT – Hypoxietraining',
    category: 'Ausstattung',
    emoji: '🫁',
    short: 'Intervall-Hypoxie/Hyperoxie-Training – wechselnde Sauerstoff-Mangel- und Überschuss-Phasen aktivieren mitochondriale Regeneration.',
    benefits: [
      'Trainiert defekte Mitochondrien aus dem System',
      'Verbessert Zellatmung und Energieproduktion',
      'Unterstützt Regeneration nach Belastung & Long-Covid',
      'Stärkt die Stressresistenz'
    ],
    indication: ['Erschöpfung', 'Long Covid', 'Sport-Regeneration', 'Anti-Aging'],
    link: 'https://munichhealthcenter.de/leistungen/hypoxietraining/'
  },
  {
    id: 'vns-analyse',
    name: 'VNS-Analyse (HRV)',
    category: 'Ausstattung',
    emoji: '📈',
    short: 'Messung der Herzraten-Variabilität zur Beurteilung des vegetativen Nervensystems – objektiver Marker für Stress, Erholung und Belastbarkeit.',
    benefits: [
      'Objektiviert Stress- & Regenerationszustand',
      'Zeigt Sympathikus/Parasympathikus-Balance',
      'Basis für individuelles Coaching',
      'Verlaufskontrolle therapeutischer Maßnahmen'
    ],
    indication: ['Stress', 'Burnout', 'Schlafprobleme', 'Sport-Performance'],
    link: 'https://munichhealthcenter.de/leistungen/vns-analyse/'
  },
  {
    id: 'infrarot-a',
    name: 'Infrarot-A (wIRA)',
    category: 'Ausstattung',
    emoji: '🔆',
    short: 'Wassergefilterte Infrarot-A-Strahlung dringt tief ins Gewebe ein, fördert Mikrozirkulation und Sauerstoffversorgung.',
    benefits: [
      'Erhöht Durchblutung & Sauerstoffsättigung',
      'Beschleunigt Wundheilung',
      'Linderung bei muskuloskelettalen Beschwerden',
      'Sehr verträglich ohne UV-Belastung'
    ],
    indication: ['Schmerzen', 'Wundheilung', 'Regeneration', 'Verspannungen'],
    link: 'https://munichhealthcenter.de/leistungen/infrarot-a/'
  },
  {
    id: 'bioadaptive-impuls',
    name: 'Bioadaptive Impulsanwendung',
    category: 'Ausstattung',
    emoji: '⚡',
    short: 'Elektrische Stimulation mit körperangepassten Impulsen reguliert das vegetative Nervensystem bei akuten und chronischen Schmerzen.',
    benefits: [
      'Schmerzlinderung über VNS-Aktivierung',
      'Löst muskuläre Dysfunktionen',
      'Nicht-invasiv & medikamentenfrei',
      'Wirkt schnell, oft schon nach 1–3 Anwendungen'
    ],
    indication: ['Rückenschmerzen', 'Migräne', 'Chronische Schmerzen', 'Verspannungen'],
    link: 'https://munichhealthcenter.de/leistungen/bioadaptive-impulsanwendung/'
  },
  {
    id: 'espinebot',
    name: 'eSpineBot',
    category: 'Ausstattung',
    emoji: '🦴',
    short: 'Roboter-gestützte Wirbelsäulen-Entlastung mit gezielter Druckanpassung – „Next-Level Rücken".',
    benefits: [
      'Mobilisiert einzelne Wirbelsegmente',
      'Entlastung der Bandscheiben',
      'Verbessert Beweglichkeit & Haltung',
      'Sanft, ohne manuelle Manipulation'
    ],
    indication: ['Rückenschmerzen', 'Bandscheibenprobleme', 'Wirbelsäule', 'Haltungsschäden'],
    link: 'https://munichhealthcenter.de/leistungen/espinebot/'
  },
  {
    id: 'hyperthermie',
    name: 'Ganzkörperhyperthermie',
    category: 'Ausstattung',
    emoji: '🌡️',
    short: 'Kontrollierte Anhebung der Körperkerntemperatur in den Fieberbereich – aktiviert Immunsystem und entgiftende Prozesse.',
    benefits: [
      'Imitiert „natürliches Fieber"',
      'Aktivierung von Hitzeschockproteinen',
      'Unterstützt Entgiftung & Immunfunktion',
      'Begleitend bei chronischen Beschwerden'
    ],
    indication: ['Chronische Infekte', 'Detox', 'Immunsystem', 'Onkologie-Begleitung'],
    link: 'https://munichhealthcenter.de/leistungen/ganzkoerperhyperthermie/'
  },
  {
    id: 'vitalpilze-shop',
    name: 'Vitalpilze & Nahrungsergänzung',
    category: 'Ausstattung',
    emoji: '🍄',
    short: 'Kuratierter Shop mit ausgewählten Qualitätsprodukten – Vitalpilze, Mikronährstoffe und Funktional-Supplements.',
    benefits: [
      'Geprüfte Qualität verschiedener Anbieter',
      'Beratung vor Ort',
      'Abgestimmt auf Behandlungskonzepte',
      'Reishi, Cordyceps, Löwenmähne, Chaga u.a.'
    ],
    indication: ['Immunsystem', 'Energie', 'Fokus', 'Schlaf'],
    link: 'https://munichhealthcenter.de/leistungen/vitalpilze-und-nahrungsergaenzungsmittel/'
  },
  {
    id: 'screenings',
    name: 'Screenings',
    category: 'Ausstattung',
    emoji: '🧪',
    short: 'Kompakte Analysen für eine schnelle Orientierung über ausgewählte Gesundheitswerte als Einstieg in personalisierte Konzepte.',
    benefits: [
      'Zügige Bestandsaufnahme',
      'Basis für individuelle Empfehlungen',
      'Verlaufskontrolle möglich',
      'Niedrigschwelliger Einstieg'
    ],
    indication: ['Erstcheck', 'Prävention', 'Verlaufskontrolle'],
    link: 'https://munichhealthcenter.de/leistungen/screenings/'
  },

  // ============ SCHWERPUNKTE / LEISTUNGEN (7) ============
  {
    id: 'praevention-epigenetik',
    name: 'Prävention, Epigenetik & Genetik',
    category: 'Schwerpunkt',
    emoji: '🧬',
    short: 'Spezialisten reflektieren persönliche Gesundheitsressourcen und ordnen Vitalität individuell ein – mit Blick auf Gen- und Epigenetik.',
    benefits: [
      'Individuelle Risikoeinschätzung',
      'Lifestyle-Hebel auf Gen-Expression',
      'Langfristige Prävention',
      'Personalisierte Gesundheitsstrategie'
    ],
    indication: ['Prävention', 'Anti-Aging', 'Familiäre Risiken', 'Longevity'],
    link: 'https://munichhealthcenter.de/leistungen/praevention-epigenetik-genetik/'
  },
  {
    id: 'long-covid',
    name: 'Long Covid & Post-Vac',
    category: 'Schwerpunkt',
    emoji: '🦠',
    short: 'Ganzheitliche Einordnung anhaltender Beschwerden im zeitlichen Zusammenhang mit COVID-19 oder Impfungen.',
    benefits: [
      'Strukturierte Analyse der Symptome',
      'Kombination aus IHHT, Hyperthermie & VNS',
      'Mitochondriale Regeneration',
      'Begleitung über mehrere Wochen'
    ],
    indication: ['Fatigue', 'Atemnot', 'Brain Fog', 'Belastungsintoleranz'],
    link: 'https://munichhealthcenter.de/leistungen/long-covid-postvirale-belastungszustaende/'
  },
  {
    id: 'chronische-schmerzen',
    name: 'Chronische Schmerzen',
    category: 'Schwerpunkt',
    emoji: '💢',
    short: 'Begleitende Ansätze bei chronischen Schmerzzuständen – individuell und technologiegestützt.',
    benefits: [
      'Multimodaler Ansatz statt Symptomunterdrückung',
      'Kombiniert Bioadaptive Impulse, Infrarot-A, Hyperthermie',
      'VNS-Analyse als Basis',
      'Reduziert Medikamentenbedarf'
    ],
    indication: ['Rückenschmerzen', 'Fibromyalgie', 'Migräne', 'Gelenkschmerzen'],
    link: 'https://munichhealthcenter.de/leistungen/chronische-schmerzen/'
  },
  {
    id: 'stoffwechsel-autoimmun',
    name: 'Stoffwechsel & Autoimmun',
    category: 'Schwerpunkt',
    emoji: '🔄',
    short: 'Individuelle Betrachtung von Stoffwechsel- und Autoimmunprozessen, unterstützt durch moderne Technologien.',
    benefits: [
      'Wurzelursachen-Ansatz',
      'Mikronährstoff-Optimierung',
      'IHHT & Hyperthermie modulieren Immunsystem',
      'Langfristige Begleitung'
    ],
    indication: ['Hashimoto', 'Rheuma', 'Insulinresistenz', 'Übergewicht', 'Allergien'],
    link: 'https://munichhealthcenter.de/leistungen/stoffwechsel-und-autoimmunprozesse/'
  },
  {
    id: 'wirbelsaeule',
    name: 'Wirbelsäulenregeneration',
    category: 'Schwerpunkt',
    emoji: '🧘',
    short: 'Gezielte Impulse für Balance, Beweglichkeit und spürbare Entlastung der Wirbelsäule.',
    benefits: [
      'Kombiniert eSpineBot, Bioadaptive Impulse, Infrarot-A',
      'Strukturelle + neuronale Entlastung',
      'Schnelle Schmerzreduktion',
      'Nachhaltige Beweglichkeit'
    ],
    indication: ['Rücken', 'Nacken', 'Bandscheiben', 'Haltung'],
    link: 'https://munichhealthcenter.de/leistungen/wirbelsaeulenregeneration/'
  },
  {
    id: 'mikronaehrstoffe',
    name: 'Mikronährstoff-Beratung',
    category: 'Schwerpunkt',
    emoji: '💊',
    short: 'Individuelle Empfehlungen zur gezielten Unterstützung von Wohlbefinden und Leistungsfähigkeit.',
    benefits: [
      'Auf Laborwerte gestützt',
      'Vermeidet sinnlose Mehrfach-Supplementierung',
      'Berücksichtigt Wechselwirkungen',
      'Verlaufskontrolle möglich'
    ],
    indication: ['Erschöpfung', 'Mangelzustände', 'Sport', 'Schwangerschaft'],
    link: 'https://munichhealthcenter.de/leistungen/mikronaehrstoffe/'
  },
  {
    id: 'gesundheitscoaching',
    name: 'Gesundheitscoaching',
    category: 'Schwerpunkt',
    emoji: '🎯',
    short: 'Mentor*innen begleiten individuell – alltagsnahe Strategien für Balance, Energie und Lebensqualität.',
    benefits: [
      'Praxistaugliche Routinen',
      'Mindset & Motivation',
      'Verbindet Lifestyle, Ernährung, Bewegung',
      'Langfristige Verhaltensänderung'
    ],
    indication: ['Burnout', 'Stressmanagement', 'Lifestyle', 'Schlaf', 'Gewicht'],
    link: 'https://munichhealthcenter.de/leistungen/gesundheitscoaching/'
  },

  // ============ NETZWERK-PARTNER (5) ============
  {
    id: 'aerztliche-leistungen',
    name: 'Ärztliche Leistungen',
    category: 'Netzwerk',
    emoji: '👨‍⚕️',
    short: 'Experten aus funktioneller und regenerativer Medizin im MHC-Netzwerk.',
    benefits: [
      'Schulmedizin + Funktionsmedizin',
      'Schnittstelle zu Diagnostik',
      'Rezeptfähige ärztliche Begleitung',
      'Erfahrene Spezialisten'
    ],
    indication: ['Komplexe Krankheitsbilder', 'Zweitmeinung', 'Diagnostik-Bedarf'],
    link: 'https://munichhealthcenter.de/ausstattung/aerztliche-leistungen/'
  },
  {
    id: 'genanalysen',
    name: 'Genanalysen',
    category: 'Netzwerk',
    emoji: '🧬',
    short: 'Präzise Genanalysen für personalisierte Gesundheits- und Präventionsansätze.',
    benefits: [
      'SNP-basierte Risiko-Profile',
      'Pharmakogenetik (Medikamenten-Verträglichkeit)',
      'Ernährungs- & Sport-Genetik',
      'Basis für Epigenetik-Coaching'
    ],
    indication: ['Personalisierte Medizin', 'Prävention', 'Familiäre Risiken'],
    link: 'https://munichhealthcenter.de/ausstattung/genanalysen/'
  },
  {
    id: 'persoenlichkeitsdiagnostik',
    name: 'Persönlichkeitsdiagnostik',
    category: 'Netzwerk',
    emoji: '🧠',
    short: 'Wissenschaftlich fundierte Innermetrix-Analyse für Selbsterkenntnis und persönliche Entwicklung.',
    benefits: [
      'Werte, Stärken, Verhaltensmuster sichtbar',
      'Basis für Coaching & Karriere',
      'Verbessert Teamarbeit & Kommunikation',
      'Erkenntnisse für Stress-Mustern'
    ],
    indication: ['Coaching', 'Karriereentwicklung', 'Stressbewältigung', 'Teams'],
    link: 'https://munichhealthcenter.de/ausstattung/melanie-schwarz/'
  },
  {
    id: 'epigenetik-coach',
    name: 'Epigenetik-Coaching',
    category: 'Netzwerk',
    emoji: '🔬',
    short: 'Epigenetik individuell verstanden und begleitet – Lifestyle-Hebel auf Gen-Aktivität.',
    benefits: [
      'Übersetzt Gendaten in Alltag',
      'Ernährung, Bewegung, Stress als Schalter',
      'Verlaufsmessung der bio. Alterung',
      'Synergetisch zu Genanalysen'
    ],
    indication: ['Anti-Aging', 'Prävention', 'Lifestyle-Optimierung'],
    link: 'https://munichhealthcenter.de/ausstattung/epigenetik-coach/'
  },
  {
    id: 'mikronaehrstoff-coach',
    name: 'Mikronährstoff-Coaching',
    category: 'Netzwerk',
    emoji: '🌿',
    short: 'Personalisierte Mikronährstoff-Konzepte durch spezialisierte Expert*innen.',
    benefits: [
      'Labor- statt Bauchgefühl-basiert',
      'Berücksichtigt Genetik & Stoffwechsel',
      'Individuelle Dosierung',
      'Synergien sinnvoll kombiniert'
    ],
    indication: ['Mangelzustände', 'Chronische Erschöpfung', 'Sport', 'Detox'],
    link: 'https://munichhealthcenter.de/ausstattung/mikronaehrstoff-coach/'
  },

  // ============ EXTERN (1) ============
  {
    id: 'inuspherese',
    name: 'INUSpherese® (Blut-Apherese)',
    category: 'Extern',
    emoji: '🩸',
    short: 'Therapeutische Blutwäsche, die Umweltgifte (Schwermetalle, Pestizide, Mikroplastik, PFAS) und Entzündungsmediatoren aus dem Blut filtert.',
    benefits: [
      'Entfernt gezielt körperfremde Umweltbelastungen',
      'Reduziert chronische Entzündungs-Last (z.B. CRP, TNF-α)',
      'Kann bei umweltbedingten Beschwerden Symptome lindern',
      'Verfahren wird ausschließlich von spezialisierten Zentren angeboten'
    ],
    indication: ['Schwermetallbelastung', 'Chronische Entzündungen', 'CFS/ME', 'Umweltkrankheiten', 'Long Covid'],
    note: 'INUSpherese® wird nicht im Munich Health Center angeboten – Verfahren der INUS Medical Center GmbH (Alzenau).',
    link: 'https://www.inus.de/'
  }
];

const THERAPY_CATEGORIES = [
  { id: 'all',          label: 'Alle' },
  { id: 'Ausstattung',  label: 'Ausstattung' },
  { id: 'Schwerpunkt',  label: 'Schwerpunkte' },
  { id: 'Netzwerk',     label: 'Netzwerk' },
  { id: 'Extern',       label: 'Extern' }
];
