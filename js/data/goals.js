/* Ziel-/Problem-Mapping für den Empfehlungs-Algorithmus
 * Keywords werden auf Tags der Supplements und Tips gemappt.
 */
const GOALS = [
  // SCHLAF
  {
    label: 'Besser schlafen',
    keywords: ['schlaf', 'schlafen', 'einschlafen', 'durchschlafen', 'schlaflos', 'insomnia', 'erholung', 'müde morgens', 'tiefschlaf', 'rem'],
    tags: ['schlaf', 'entspannung'],
    featured: true
  },
  {
    label: 'Stress reduzieren',
    keywords: ['stress', 'gestresst', 'anspannung', 'cortisol', 'überfordert', 'burnout', 'nervos', 'nervös', 'unruhe', 'gelassenheit'],
    tags: ['stress', 'cortisol', 'entspannung'],
    featured: true
  },
  {
    label: 'Mehr Energie',
    keywords: ['energie', 'müde', 'erschöpft', 'antriebslos', 'kraft', 'power', 'fatigue', 'erschöpfung', 'lustlos', 'schlapp'],
    tags: ['energie', 'mitochondrien'],
    featured: true
  },
  {
    label: 'Fokus & Konzentration',
    keywords: ['fokus', 'konzentration', 'konzentrieren', 'aufmerksamkeit', 'klarheit', 'mental', 'denken', 'produktivität', 'nootropic', 'lernen', 'gedächtnis', 'gehirn'],
    tags: ['fokus', 'gehirn', 'gedaechtnis', 'nootropic'],
    featured: true
  },
  {
    label: 'Immunsystem stärken',
    keywords: ['immun', 'immunsystem', 'erkältung', 'grippe', 'infekt', 'anfällig', 'krank'],
    tags: ['immun'],
    featured: true
  },
  {
    label: 'Stimmung verbessern',
    keywords: ['stimmung', 'depression', 'traurig', 'niedergeschlagen', 'melancholie', 'wohlbefinden', 'glücklich', 'motivation'],
    tags: ['stimmung', 'dopamin', 'serotonin'],
    featured: true
  },
  {
    label: 'Muskelaufbau',
    keywords: ['muskel', 'muskelaufbau', 'kraft', 'bodybuilding', 'hypertrophie', 'masse', 'training', 'fitness', 'sport'],
    tags: ['muskel', 'kraft', 'sport'],
    featured: false
  },
  {
    label: 'Fettverbrennung / Abnehmen',
    keywords: ['abnehmen', 'gewicht', 'fett', 'fettverbrennung', 'diät', 'übergewicht', 'schlank', 'keto'],
    tags: ['gewicht', 'fettverbrennung', 'blutzucker'],
    featured: false
  },
  {
    label: 'Anti-Aging / Longevity',
    keywords: ['anti-aging', 'altern', 'longevity', 'lebensdauer', 'jung bleiben', 'haut', 'falten', 'regeneration'],
    tags: ['anti-aging', 'longevity', 'autophagie', 'sirtuine'],
    featured: true
  },
  {
    label: 'Gelenke & Bewegung',
    keywords: ['gelenk', 'gelenke', 'knie', 'rücken', 'entzündung', 'arthrose', 'beweglichkeit'],
    tags: ['gelenke', 'entzuendung'],
    featured: false
  },
  {
    label: 'Bessere Verdauung',
    keywords: ['verdauung', 'darm', 'darmgesundheit', 'magen', 'blähungen', 'reizdarm', 'mikrobiom'],
    tags: ['darm', 'verdauung'],
    featured: false
  },
  {
    label: 'Hormonbalance',
    keywords: ['hormon', 'hormone', 'testosteron', 'östrogen', 'libido', 'sexualität'],
    tags: ['hormone', 'testosteron'],
    featured: false
  },
  {
    label: 'Ausdauer / Sport',
    keywords: ['ausdauer', 'laufen', 'cardio', 'marathon', 'radfahren', 'vo2max'],
    tags: ['ausdauer', 'sport'],
    featured: false
  },
  {
    label: 'Haut, Haare, Nägel',
    keywords: ['haut', 'haare', 'nägel', 'akne', 'kollagen', 'schönheit'],
    tags: ['haut', 'haare'],
    featured: false
  },
  {
    label: 'Blutzucker regulieren',
    keywords: ['blutzucker', 'insulin', 'diabetes', 'zucker', 'hba1c'],
    tags: ['blutzucker', 'insulin'],
    featured: false
  },
  {
    label: 'Entgiftung',
    keywords: ['entgiftung', 'detox', 'leber', 'gifte', 'reinigung'],
    tags: ['entgiftung', 'leber'],
    featured: false
  },
  {
    label: 'Ängstlichkeit',
    keywords: ['angst', 'ängstlich', 'panik', 'sorgen', 'anxiety'],
    tags: ['stress', 'entspannung', 'gaba'],
    featured: false
  },
  {
    label: 'Allergien',
    keywords: ['allergie', 'allergien', 'heuschnupfen', 'histamin'],
    tags: ['allergie', 'immun'],
    featured: false
  },
  // NEU: Sauerstoff & Atmung
  {
    label: 'Sauerstoffversorgung',
    keywords: ['sauerstoff', 'oxygen', 'atemnot', 'kurzatmig', 'hoehe', 'höhe', 'atmen', 'luft', 'sao2', 'spo2', 'hyperbar', 'htc', 'hbot'],
    tags: ['sauerstoff', 'atmung', 'mitochondrien', 'regeneration'],
    featured: true
  },
  {
    label: 'Atemtraining',
    keywords: ['atemtraining', 'atemuebung', 'atemübung', 'atemtechnik', 'buteyko', 'wim hof', 'pranayama', 'co2', 'nasenatmung', 'mouth taping'],
    tags: ['atmung', 'stress', 'fokus', 'schlaf'],
    featured: false
  },
  // NEU: Fasten (eigene Kategorie, über Gewicht hinaus)
  {
    label: 'Fasten & Autophagie',
    keywords: ['fasten', 'intervallfasten', 'intermittent', 'autophagie', 'ketose', 'omad', 'longevity fasten', 'heilfasten', 'dry fasting', 'refeed'],
    tags: ['fasten', 'autophagie', 'insulin', 'anti-aging'],
    featured: true
  },
  // NEU: Mitochondrien / Zellenergie
  {
    label: 'Mitochondrien & Zellenergie',
    keywords: ['mitochondrien', 'zellenergie', 'atp', 'mito', 'zellatmung', 'coenzym', 'nad', 'zellkraftwerk'],
    tags: ['mitochondrien', 'energie', 'anti-aging'],
    featured: false
  },
  // NEU: Entzündung (komplementär)
  {
    label: 'Entzündung senken',
    keywords: ['entzuendung', 'entzündung', 'inflammation', 'chronisch entzuendet', 'crp', 'still inflammation'],
    tags: ['entzuendung', 'gelenke', 'immun'],
    featured: false
  },
  // NEU: Gehirn-Longevity
  {
    label: 'Kognitive Leistung',
    keywords: ['intelligenz', 'iq', 'mental performance', 'brain fog', 'nebel im kopf', 'vergessen', 'alzheimer', 'demenz', 'gedaechtnis', 'gedächtnis', 'klarheit'],
    tags: ['gehirn', 'nootropic', 'fokus', 'gedaechtnis'],
    featured: true
  },
  // NEU: Herz-Kreislauf
  {
    label: 'Herz & Kreislauf',
    keywords: ['herz', 'blutdruck', 'kreislauf', 'gefaesse', 'gefäße', 'cholesterin', 'ldl', 'apob', 'arterien'],
    tags: ['herz', 'kreislauf', 'durchblutung'],
    featured: false
  },
  // NEU: Leber/Detox
  {
    label: 'Leber & Entgiftung',
    keywords: ['leber', 'entgiftung', 'detox', 'alkohol abbauen', 'leberwerte', 'fettleber', 'leberreinigung'],
    tags: ['leber', 'detox'],
    featured: false
  },
  // NEU: Libido/Sexualität
  {
    label: 'Libido & Sexualität',
    keywords: ['libido', 'lust', 'sex', 'potenz', 'erektion', 'testosteron', 'hormonell schwach', 'sexuelle leistung'],
    tags: ['hormone', 'testosteron', 'durchblutung'],
    featured: false
  },
  // NEU: Methylierung/MTHFR
  {
    label: 'Methylierung & MTHFR',
    keywords: ['methylierung', 'mthfr', 'homocystein', 'b12 mangel', 'folat', 'methylfolat', 'methylgruppen'],
    tags: ['methylierung', 'vitamin-b-komplex'],
    featured: false
  },
  // NEU: Senolytisch/Zombie-Zellen
  {
    label: 'Senolytisch / Zellreinigung',
    keywords: ['senolytisch', 'zombie zellen', 'seneszenz', 'zellalterung', 'zellreinigung', 'zell-reinigung'],
    tags: ['senolytisch', 'longevity', 'anti-aging'],
    featured: false
  }
];
