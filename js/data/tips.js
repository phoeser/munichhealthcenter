/* Biohacking-Tipps
 * Strategien jenseits von Supplements.
 */
const TIPS = [
  // SCHLAF
  {
    id: 'schlaf-dunkel',
    category: 'Schlaf',
    icon: '🌙',
    title: 'Komplette Dunkelheit im Schlafzimmer',
    short: 'Selbst kleinste Lichtquellen unterdrücken Melatonin.',
    how: 'Blackout-Vorhänge, Schlafmaske und alle LEDs abkleben. Wenn du nachts ohne Licht nicht aufstehen kannst, verwende eine rote Taschenlampe.',
    tags: ['schlaf', 'melatonin', 'regeneration']
  },
  {
    id: 'schlaf-temperatur',
    category: 'Schlaf',
    icon: '❄️',
    title: 'Schlafzimmer auf 16–18 °C',
    short: 'Kühlerer Raum fördert Tiefschlaf und REM-Phasen.',
    how: 'Fenster auf oder Klimaanlage einstellen. Zum Abkühlen 30 min vor dem Schlafen warm duschen – die Hautgefäße weiten sich, Kerntemperatur sinkt danach.',
    tags: ['schlaf', 'temperatur', 'tiefschlaf']
  },
  {
    id: 'schlaf-blaulicht',
    category: 'Schlaf',
    icon: '🟡',
    title: 'Blaulicht-Filter ab Sonnenuntergang',
    short: 'Blaues Licht unterdrückt Melatonin bis zu 3 Stunden.',
    how: 'Orange Blueblocker-Brille 2–3 Stunden vor dem Schlafen tragen. Handy/Computer auf Nachtmodus (f.lux, Night Shift) oder ganz meiden.',
    tags: ['schlaf', 'licht', 'melatonin']
  },
  {
    id: 'schlaf-zeit',
    category: 'Schlaf',
    icon: '⏰',
    title: 'Konstante Schlafzeit',
    short: 'Gleiche Zeiten stärken deinen zirkadianen Rhythmus.',
    how: 'Jeden Tag (auch am Wochenende) zur gleichen Zeit ins Bett und aufstehen. Toleranz ±30 Minuten. Schlafrhythmus ist wichtiger als die reine Dauer.',
    tags: ['schlaf', 'zirkadian', 'routine']
  },
  {
    id: 'schlaf-koffein',
    category: 'Schlaf',
    icon: '☕',
    title: 'Kein Koffein nach 14 Uhr',
    short: 'Koffein hat eine Halbwertszeit von 5–6 Stunden.',
    how: 'Letzter Kaffee spätestens mittags. Abends bei Bedarf koffeinfreier Tee (Kamille, Lavendel) oder Magnesium-Glycinat.',
    tags: ['schlaf', 'koffein', 'einschlafen']
  },

  // LICHT & ZIRKADIAN
  {
    id: 'licht-morgen',
    category: 'Licht',
    icon: '☀️',
    title: 'Morgens 10 min Sonnenlicht',
    short: 'Sonnenlicht stellt deinen Cortisol-Rhythmus und die innere Uhr.',
    how: 'Innerhalb 30 min nach dem Aufwachen 5–15 min direkt ins Tageslicht (ohne Sonnenbrille, ohne Fensterscheibe). Selbst bei Wolken 1.000–10.000 Lux.',
    tags: ['licht', 'cortisol', 'energie', 'stimmung']
  },
  {
    id: 'licht-rot',
    category: 'Licht',
    icon: '🔴',
    title: 'Rotlicht-Therapie',
    short: 'Rot- und Infrarotlicht regen Mitochondrien an.',
    how: '10–20 min täglich vor einem hochwertigen Rotlichtpanel (600–850 nm), 30–60 cm Abstand. Gut für Haut, Regeneration, Energie.',
    tags: ['licht', 'mitochondrien', 'regeneration', 'haut']
  },
  {
    id: 'licht-mittag',
    category: 'Licht',
    icon: '🌞',
    title: 'Mittagssonne für Vitamin D',
    short: 'Mittagssonne liefert UVB – die einzige Quelle für körpereigenes Vitamin D.',
    how: '10–20 min zur Mittagszeit mit Haut im Sonnenlicht (ohne Sonnenschutz). Nur so bildet der Körper Vitamin D. Gesicht, Arme, Beine reichen.',
    tags: ['licht', 'vitamin-d', 'hormone']
  },

  // KÄLTE & HITZE
  {
    id: 'kaltduschen',
    category: 'Kälte & Hitze',
    icon: '🥶',
    title: 'Kalt duschen (Wim Hof)',
    short: 'Erhöht Dopamin, stärkt Immunsystem, trainiert Stressresistenz.',
    how: 'Start: 30 Sekunden kalt am Ende der normalen Dusche. Wöchentlich steigern auf 2–3 Minuten. Studie: +250 % Dopamin für bis zu 2 h.',
    tags: ['kaelte', 'dopamin', 'immun', 'stress']
  },
  {
    id: 'eisbad',
    category: 'Kälte & Hitze',
    icon: '🧊',
    title: 'Eisbad',
    short: 'Stärkster metabolischer und hormoneller Reiz.',
    how: '2–5 min bei 10–15 °C, 1–3× pro Woche. Nach dem Training kann Muskelwachstum hemmen – dann besser abends oder an Ruhetagen.',
    tags: ['kaelte', 'entzuendung', 'hormone', 'regeneration']
  },
  {
    id: 'sauna',
    category: 'Kälte & Hitze',
    icon: '🔥',
    title: 'Sauna 20 min, 4× pro Woche',
    short: 'Reduziert Herzinfarkt-Risiko um 50 % (finnische Studie).',
    how: '20 min bei 80–90 °C, 4× pro Woche. Erzeugt Hitzeschock-Proteine und ähnelt Cardio-Training. Wichtig: genug trinken, Elektrolyte ergänzen.',
    tags: ['hitze', 'herz', 'anti-aging', 'regeneration']
  },

  // ATMUNG
  {
    id: 'box-breathing',
    category: 'Atmung',
    icon: '🫁',
    title: 'Box Breathing (4-4-4-4)',
    short: 'Aktiviert den Parasympathikus. Navy-SEAL-Technik gegen Stress.',
    how: '4 Sek. einatmen – 4 Sek. halten – 4 Sek. ausatmen – 4 Sek. halten. 3–5 Minuten. Ideal vor anspruchsvollen Situationen.',
    tags: ['atmung', 'stress', 'fokus', 'entspannung']
  },
  {
    id: 'wim-hof-atmung',
    category: 'Atmung',
    icon: '💨',
    title: 'Wim-Hof-Atmung',
    short: 'Steigert Noradrenalin, stärkt Immunsystem, hebt Stimmung.',
    how: '30–40 tiefe Atemzüge, dann so lange wie möglich ausatmen (ohne Luft halten). 3 Runden. Morgens auf leerem Magen. Nicht beim Autofahren oder im Wasser!',
    tags: ['atmung', 'energie', 'immun', 'stimmung']
  },
  {
    id: 'nasenatmung',
    category: 'Atmung',
    icon: '👃',
    title: 'Nur durch die Nase atmen',
    short: 'Erhöht NO (Stickoxid), filtert Luft, verbessert Schlaf.',
    how: 'Tagsüber bewusst nur durch die Nase atmen. Nachts Mund-Tape (atemfrei) – verbessert Tiefschlaf, reduziert Schnarchen.',
    tags: ['atmung', 'schlaf', 'sport']
  },

  // ERNÄHRUNG
  {
    id: 'intervallfasten',
    category: 'Ernährung',
    icon: '⏱️',
    title: 'Intervallfasten (16:8)',
    short: 'Aktiviert Autophagie und verbessert Insulinsensitivität.',
    how: '16 Stunden fasten, 8 Stunden Essen (z. B. 12–20 Uhr). Während Fasten: Wasser, Kaffee, Tee, Elektrolyte. Frauen starten besser mit 14:10.',
    tags: ['fasten', 'autophagie', 'gewicht', 'insulin']
  },
  {
    id: 'proteine-morgen',
    category: 'Ernährung',
    icon: '🥩',
    title: '30 g Protein zum Frühstück',
    short: 'Stabilisiert Blutzucker, unterstützt Muskelaufbau, sättigt lange.',
    how: '30–40 g hochwertiges Protein (Eier, Fisch, Fleisch, Whey) innerhalb 1 h nach dem Aufwachen. Hält den ganzen Tag satt.',
    tags: ['ernaehrung', 'muskel', 'energie', 'gewicht']
  },
  {
    id: 'apfelessig',
    category: 'Ernährung',
    icon: '🍎',
    title: 'Apfelessig vor Mahlzeiten',
    short: 'Reduziert Blutzuckerspitzen um bis zu 30 %.',
    how: '1 EL Apfelessig in einem großen Glas Wasser 15 min vor kohlenhydratreichen Mahlzeiten. Mit Strohhalm trinken (Zahnschmelz schützen).',
    tags: ['ernaehrung', 'blutzucker', 'verdauung', 'gewicht']
  },
  {
    id: 'low-carb-abend',
    category: 'Ernährung',
    icon: '🥦',
    title: 'Kohlenhydrate abends reduzieren',
    short: 'Weniger Kohlenhydrate am Abend = besserer Schlaf und Hormonprofil.',
    how: 'Abends fokus auf Protein + Fett + Gemüse. Kleine Mengen komplexe Kohlenhydrate ok (Süßkartoffel, Reis). Keine schnellen Zucker.',
    tags: ['ernaehrung', 'schlaf', 'hormone', 'gewicht']
  },

  // BEWEGUNG
  {
    id: 'nef-training',
    category: 'Bewegung',
    icon: '💪',
    title: 'Krafttraining 3× pro Woche',
    short: 'Nichts ist so anti-aging wie Muskelmasse.',
    how: '3× pro Woche Ganzkörper oder Split. Schwere zusammengesetzte Übungen: Kniebeuge, Kreuzheben, Bankdrücken, Klimmzüge. Progressive Überlast ist der Schlüssel.',
    tags: ['bewegung', 'muskel', 'anti-aging', 'hormone']
  },
  {
    id: 'zone-2',
    category: 'Bewegung',
    icon: '🚴',
    title: 'Zone-2-Cardio 2–4× pro Woche',
    short: 'Maximiert Mitochondrien-Biogenese.',
    how: '30–60 min bei 60–70 % der max. Herzfrequenz (noch Gespräch möglich). Radfahren, Gehen mit Anstieg, Rudern. Ideal als Erholung und metabolischer Treibstoff.',
    tags: ['bewegung', 'ausdauer', 'mitochondrien', 'herz']
  },
  {
    id: 'hiit',
    category: 'Bewegung',
    icon: '⚡',
    title: 'HIIT 1–2× pro Woche',
    short: 'Hochintensives Intervalltraining steigert VO2max stark.',
    how: '8× 20 Sekunden maximal, 10 Sekunden Pause (Tabata). Oder 4× 4 min bei 90 %, 3 min Pause. Nach Aufwärmung. Vorsicht: nicht öfter als 2× pro Woche.',
    tags: ['bewegung', 'ausdauer', 'anti-aging']
  },
  {
    id: 'bewegung-alltag',
    category: 'Bewegung',
    icon: '🚶',
    title: '10.000 Schritte täglich',
    short: 'Low-Intensity-Movement den ganzen Tag verteilt.',
    how: 'Treppen statt Aufzug, 10-min-Spaziergang nach jedem Essen, Stehschreibtisch. Jede Bewegung über den Tag zählt mehr als eine einzige Einheit.',
    tags: ['bewegung', 'gewicht', 'blutzucker', 'stimmung']
  },
  {
    id: 'bewegung-post-meal',
    category: 'Bewegung',
    icon: '🚶‍♂️',
    title: '10-min-Gehen nach Mahlzeiten',
    short: 'Senkt Blutzuckerspitzen um bis zu 30 %.',
    how: 'Direkt nach dem Essen 10–15 min spazieren. Besonders wirksam nach Mittag- und Abendessen.',
    tags: ['bewegung', 'blutzucker', 'verdauung']
  },

  // STRESS & GEIST
  {
    id: 'meditation',
    category: 'Stress & Geist',
    icon: '🧘',
    title: 'Meditation 10 min täglich',
    short: 'Senkt Cortisol, verbessert Fokus und Emotionsregulation.',
    how: 'Apps wie Waking Up, Headspace oder einfach still sitzen mit Atembeobachtung. Gleiche Zeit täglich. 8 Wochen für nachweisbare Gehirnveränderungen.',
    tags: ['stress', 'fokus', 'schlaf', 'stimmung']
  },
  {
    id: 'dankbarkeit',
    category: 'Stress & Geist',
    icon: '🙏',
    title: 'Dankbarkeits-Journaling',
    short: 'Reduziert Stress und verbessert Stimmung nachhaltig.',
    how: 'Jeden Morgen oder Abend 3 Dinge aufschreiben, für die du dankbar bist. 5 Minuten reichen. Verändert neuronale Muster in 4–8 Wochen.',
    tags: ['stress', 'stimmung', 'schlaf']
  },
  {
    id: 'digital-detox',
    category: 'Stress & Geist',
    icon: '📵',
    title: 'Kein Handy in der ersten Stunde',
    short: 'Verhindert Cortisol-Spike und setzt deinen Fokus für den Tag.',
    how: 'Die erste Stunde nach dem Aufwachen ohne Smartphone. Kein E-Mail, kein Social Media. Stattdessen Sonnenlicht, Wasser, Bewegung, Planung.',
    tags: ['stress', 'fokus', 'morgen-routine']
  },
  {
    id: 'natur',
    category: 'Stress & Geist',
    icon: '🌲',
    title: 'Waldbaden (Shinrin-Yoku)',
    short: 'Reduziert Cortisol und stärkt Immunsystem.',
    how: '20 min in der Natur, ohne Handy, ohne Ziel. Phytonzide von Bäumen aktivieren NK-Zellen (Immunsystem). 2× pro Woche messbare Effekte.',
    tags: ['stress', 'immun', 'stimmung']
  },

  // HORMONE & OPTIMIERUNG
  {
    id: 'morning-routine',
    category: 'Routine',
    icon: '🌅',
    title: 'Die perfekte Morgen-Routine',
    short: 'Sonne, Wasser, Bewegung, Kälte – bevor du aufs Handy schaust.',
    how: '1. Sonnenlicht 5–10 min. 2. 500 ml Wasser mit Prise Salz + Zitrone. 3. 5 min Bewegung (Liegestützen, Spaziergang). 4. Kalte Dusche. Dann Frühstück.',
    tags: ['routine', 'energie', 'hormone', 'morgen']
  },
  {
    id: 'evening-routine',
    category: 'Routine',
    icon: '🌆',
    title: 'Evening Wind-Down',
    short: 'Aktiviert den Parasympathikus und bereitet auf Schlaf vor.',
    how: '2 h vor dem Schlafen: Licht dimmen, Blueblocker auf, kein Bildschirm 1 h davor. Ritual: Tee, Buch, Atemübung, warme Dusche. Immer gleiche Reihenfolge.',
    tags: ['routine', 'schlaf', 'entspannung']
  },
  {
    id: 'hrv-tracking',
    category: 'Tracking',
    icon: '📊',
    title: 'HRV täglich messen',
    short: 'Herzratenvariabilität ist der beste Marker für Regeneration.',
    how: 'Mit Apple Watch, Whoop, Oura oder HRV4Training täglich morgens messen. Sinkt = zu viel Stress/Training, Pause nötig. Steigt = gut regeneriert.',
    tags: ['tracking', 'regeneration', 'stress']
  },
  {
    id: 'blutwerte',
    category: 'Tracking',
    icon: '🩸',
    title: 'Jährliches Blutbild',
    short: 'Was nicht gemessen wird, kann nicht optimiert werden.',
    how: 'Mindestens: Vitamin D, B12, Ferritin, Omega-3-Index, TSH + fT3 + fT4, HbA1c, Testosteron (Männer), CRP. Bei Biohackern ausführlicher.',
    tags: ['tracking', 'hormone', 'vitamine']
  },
  {
    id: 'grounding',
    category: 'Stress & Geist',
    icon: '👣',
    title: 'Grounding (Erden)',
    short: 'Kontakt mit Erde reduziert Entzündungen und Cortisol.',
    how: '10–20 min barfuß auf Gras, Erde, Sand oder Stein. Kein Asphalt, kein Holz. Idealerweise morgens mit Sonnenlicht kombiniert.',
    tags: ['stress', 'entzuendung', 'schlaf']
  },
  {
    id: 'wasser-qualitaet',
    category: 'Ernährung',
    icon: '💧',
    title: 'Gefiltertes Wasser mit Mineralien',
    short: 'Leitungswasser belastet, destilliertes Wasser entmineralisiert.',
    how: 'Umkehrosmose-Filter + Remineralisierung (Himalaya-Salz, Mineraltropfen) oder hochwertiges Quellwasser in Glas. 2–3 Liter täglich.',
    tags: ['ernaehrung', 'entgiftung', 'mineralien']
  },

  // SAUERSTOFF – neu
  {
    id: 'hbot',
    category: 'Sauerstoff',
    icon: '🫧',
    title: 'Hyperbare Sauerstofftherapie (HBOT)',
    short: 'Hoher Sauerstoffdruck regeneriert Gewebe und stimuliert Stammzellen.',
    how: '60–90 min in einer Druckkammer bei 1,3–2,4 ATA, 10–40 Sitzungen. Anwendung: Regeneration, Long-Covid, Wundheilung, Anti-Aging. Nur in spezialisierten Zentren. Nicht bei COPD, Pneumothorax, bestimmten Ohrenerkrankungen.',
    tags: ['sauerstoff', 'regeneration', 'anti-aging', 'mitochondrien']
  },
  {
    id: 'ewot',
    category: 'Sauerstoff',
    icon: '💨',
    title: 'EWOT – Exercise With Oxygen Therapy',
    short: 'Training mit reinem Sauerstoff flutet die Mitochondrien.',
    how: '15 min moderates Cardio (Rad, Laufband) während du 90–95 % O2 einatmest. 2–3× pro Woche. Verbessert VO2max, Sauerstoffsättigung im Gewebe und Energie.',
    tags: ['sauerstoff', 'mitochondrien', 'ausdauer', 'energie']
  },
  {
    id: 'iht',
    category: 'Sauerstoff',
    icon: '⛰️',
    title: 'Intermittierendes Hypoxietraining (IHT)',
    short: 'Wechsel zwischen sauerstoffarm und normal trainiert die Mitochondrien.',
    how: 'Mit Maske oder Gerät zyklisch 5 min reduzierter Sauerstoff (9–12 %), 5 min Normalluft. 3–5 Zyklen, 3× pro Woche. Simuliert Höhentraining. Steigert EPO, Mitochondriendichte und Stressresistenz.',
    tags: ['sauerstoff', 'mitochondrien', 'ausdauer', 'anti-aging']
  },
  {
    id: 'co2-tolerance',
    category: 'Sauerstoff',
    icon: '🎈',
    title: 'CO2-Toleranz-Training',
    short: 'Höhere CO2-Toleranz = bessere Sauerstoffverwertung.',
    how: 'BOLT-Test: ruhig ausatmen, Nase zuhalten, Zeit bis zum ersten Atemreiz messen. Ziel > 40 s. Training: 5 min langsame Nasenatmung, dann 10 Schritte mit angehaltener Luft, Wiederholung. Reduziert Dyspnoe.',
    tags: ['sauerstoff', 'atmung', 'ausdauer', 'sport']
  },
  {
    id: 'altitude-training',
    category: 'Sauerstoff',
    icon: '🏔️',
    title: 'Schlafen in (simulierter) Höhe',
    short: 'Höhenstress stimuliert EPO und rote Blutkörperchen.',
    how: 'Live high, train low: 2000–2500 m schlafen, niedrig trainieren – oder Höhenzelt. 3–4 Wochen für Effekt. Alternative: regelmäßige Bergwochenenden > 1800 m.',
    tags: ['sauerstoff', 'ausdauer', 'regeneration']
  },
  {
    id: 'eisen-ferritin',
    category: 'Sauerstoff',
    icon: '🩸',
    title: 'Eisenwerte & Hämoglobin optimieren',
    short: 'Ohne Eisen keine Sauerstofftransport-Kapazität.',
    how: 'Ferritin jährlich checken (Ziel: Männer 80–150, Frauen 70–120 ng/ml). Bei niedrigen Werten: Leber, rotes Fleisch, Hülsenfrüchte + Vitamin C. Bei Bedarf: Eisenbisglycinat 20–40 mg. Zu hohes Ferritin (> 300) = Hinweis auf Entzündung.',
    tags: ['sauerstoff', 'energie', 'tracking']
  },

  // FASTEN – neu, eigene Kategorie
  {
    id: 'fasten-omad',
    category: 'Fasten',
    icon: '🍽️',
    title: 'OMAD – One Meal A Day',
    short: '23:1-Fenster für maximale Autophagie im Alltag.',
    how: 'Eine große, nährstoffdichte Mahlzeit pro Tag, meist nachmittags/abends. Während Fastenphase: Wasser, schwarzer Kaffee, Tee, Elektrolyte. Nur für Fortgeschrittene – erst nach Monaten 16:8.',
    tags: ['fasten', 'autophagie', 'gewicht', 'insulin', 'longevity']
  },
  {
    id: 'fasten-extended',
    category: 'Fasten',
    icon: '🗓️',
    title: '24–72 h verlängertes Fasten',
    short: 'Echte Autophagie startet ab ~24 h, Stammzell-Renewal ab 72 h.',
    how: '1× pro Monat 24 h oder 1× pro Quartal 72 h Wasserfasten. Elektrolyte (Salz, Kalium, Magnesium) Pflicht. Nicht bei Untergewicht, Schwangerschaft, Diabetes Typ 1. Brechen mit Knochenbrühe + leicht verdaulichem Protein.',
    tags: ['fasten', 'autophagie', 'anti-aging', 'longevity', 'sirtuine']
  },
  {
    id: 'fasten-fmd',
    category: 'Fasten',
    icon: '🥑',
    title: 'Fasting-Mimicking-Diet (FMD, 5 Tage)',
    short: 'Proteinarm, fettreich, ~800 kcal – ahmt Fasten nach.',
    how: '5 Tage am Stück ~800 kcal (Tag 1) und ~500 kcal (Tag 2–5), dominiert von Fett + Gemüse, unter 10 % Protein. 1× pro Quartal. Valter-Longo-Protokoll: reduziert IGF-1, aktiviert Autophagie, erhält Muskelmasse besser als reines Wasserfasten.',
    tags: ['fasten', 'autophagie', 'anti-aging', 'gewicht', 'longevity']
  },
  {
    id: 'fasten-refeed',
    category: 'Fasten',
    icon: '🍳',
    title: 'Richtig refeeden nach dem Fasten',
    short: 'Der Bruch macht den Unterschied – nicht das Fasten selbst.',
    how: 'Erst eine kleine Portion: Knochenbrühe, weiches Eigelb, fermentiertes Gemüse oder Avocado. 30–60 min warten. Dann normale Mahlzeit. Kein Zucker, keine großen Kohlenhydratmengen direkt – sonst Insulinspitze + Kreislaufprobleme.',
    tags: ['fasten', 'darm', 'blutzucker', 'verdauung']
  },
  {
    id: 'fasten-elektrolyte',
    category: 'Fasten',
    icon: '🧂',
    title: 'Elektrolyte während Fastenperioden',
    short: 'Kopfschmerz und Schwäche kommen fast immer von Mangel, nicht vom Fasten.',
    how: 'Pro Fasttag: ca. 3–5 g Natrium (Prise Meersalz im Wasser), 300–500 mg Magnesium, 1–2 g Kalium. Fertige Fasten-Salts oder selbst mischen. Kein Zucker, keine Zitronensäure im Übermaß.',
    tags: ['fasten', 'mineralien', 'energie']
  },
  {
    id: 'fasten-frauen',
    category: 'Fasten',
    icon: '♀️',
    title: 'Fasten für Frauen – Zyklusangepasst',
    short: 'In der Lutealphase weniger fasten, in der Follikelphase flexibler.',
    how: 'Follikelphase (Tag 1–14): 16:8 oder länger ok. Lutealphase (Tag 15–28): max. 13:11, mehr Protein, mehr Kohlenhydrate abends. Zyklus-App nutzen. Stop bei Zyklusverlust.',
    tags: ['fasten', 'hormone', 'zyklus']
  },
  {
    id: 'fasten-koffein',
    category: 'Fasten',
    icon: '☕',
    title: 'Kaffee als Fasten-Booster',
    short: 'Verstärkt Autophagie, unterdrückt Hunger – wenn pur.',
    how: 'Schwarzer Kaffee oder Espresso während des Fastens ok. Keine Milch, kein Zucker, keine Süßungsmittel mit Geschmack (löst Insulin aus). Bullet-Proof-Coffee bricht technisch das Fasten.',
    tags: ['fasten', 'autophagie', 'fokus']
  },

  // Ergänzungen Atmung
  {
    id: 'atmung-buteyko',
    category: 'Atmung',
    icon: '🌬️',
    title: 'Buteyko-Atmung für Allergiker & Asthmatiker',
    short: 'Flacheres Atmen erhöht CO2-Toleranz und öffnet Bronchien.',
    how: 'Normal durch die Nase ein, leicht aus, 3–5 s Pause. Über 10 min täglich. Wirkt bei Asthma, Heuschnupfen, Panikattacken. Nicht bei akuter Atemnot.',
    tags: ['atmung', 'immun', 'allergie', 'stress']
  },
  // ============ NEU: TRACKING & BIOMARKER ============
  {
    id: 'cgm-tracking',
    category: 'Tracking',
    icon: '📉',
    title: 'Glukose kontinuierlich messen (CGM)',
    short: 'Sensor am Oberarm zeigt 14 Tage, wie dein Körper auf Essen und Stress reagiert.',
    how: 'Abbott FreeStyle Libre 3 oder Dexcom G7 an den Oberarm kleben. 14 Tage lang Spikes, Stressreaktion und Schlaf-Glukose tracken. Ideal: 2× pro Jahr. Zeigt individuelle Trigger-Foods (z. B. Haferflocken spiken mehr als erwartet).',
    tags: ['tracking', 'blutzucker', 'ernaehrung', 'longevity']
  },
  {
    id: 'oura-whoop',
    category: 'Tracking',
    icon: '💍',
    title: 'HRV & Schlafphasen mit Ring/Band',
    short: 'Oura Ring oder Whoop trackt Schlafqualität, Readiness und Erholung rund um die Uhr.',
    how: 'Jeden Morgen HRV-Trend checken – sinkender Trend = Übertraining, Infekt oder Schlafdefizit. Readiness < 70 → Trainingsintensität reduzieren. Schlaf-Effizienz > 90 % anstreben. Wearable mindestens 14 Tage tragen, bevor Trends aussagekräftig sind.',
    tags: ['tracking', 'schlaf', 'stress', 'ausdauer']
  },
  {
    id: 'blutbild-erweitert',
    category: 'Tracking',
    icon: '🩸',
    title: 'Erweitertes Biomarker-Panel',
    short: 'Jährlich: hsCRP, HbA1c, ApoB, Nüchterninsulin, Homocystein, Vitamin D – das Biohacker-Basispanel.',
    how: 'Über Hausarzt oder IGeL: hsCRP (Entzündung), HbA1c (Langzeitzucker), ApoB (Herz-Risiko besser als LDL), Nüchterninsulin (Insulinresistenz früh), Homocystein (Methylierung), 25-OH-Vitamin D, freies T3/T4/TSH, Ferritin, Testosteron (Männer).',
    tags: ['tracking', 'longevity', 'herz', 'hormone']
  },

  // ============ NEU: KOGNITION & BRAIN ============
  {
    id: 'nootropic-stack',
    category: 'Stress & Geist',
    icon: '🧠',
    title: 'Nootropika-Starter-Stack',
    short: 'Koffein + L-Theanin 1:2 als sicherer Einstieg – bei Bedarf mit Löwenmähne für Langzeit-BDNF.',
    how: 'Morgens: 100 mg Koffein + 200 mg L-Theanin. Fokus-Peaks: zusätzlich 300 mg Alpha-GPC oder 250 mg Citicolin. Langfristig (8+ Wochen): 1 g Löwenmähne täglich für Nervenwachstum. Nicht täglich stapeln – Toleranz vermeiden.',
    tags: ['fokus', 'nootropic', 'gehirn', 'energie']
  },
  {
    id: 'dual-n-back',
    category: 'Stress & Geist',
    icon: '🎯',
    title: 'Dual-N-Back fürs Arbeitsgedächtnis',
    short: 'Einziges Gehirntraining, das nachweislich fluide Intelligenz verbessert. 20 min täglich.',
    how: 'Apps wie „Brain Workshop" oder „IQ Boost". 20 min 4× pro Woche über 4 Wochen. Schon ab Level N=3 spürbare Verbesserung von Fokus und Arbeitsgedächtnis. Kombinierbar mit Alpha-GPC oder Citicolin für stärkeren Effekt.',
    tags: ['gehirn', 'fokus', 'gedaechtnis', 'nootropic']
  },

  // ============ NEU: HORMONE ============
  {
    id: 'testosteron-natural',
    category: 'Ernährung',
    icon: '💪',
    title: 'Testosteron natürlich anheben',
    short: 'Krafttraining + Schlaf + Zink + Bor + ausreichend Cholesterin decken 80 % des Hebels ab.',
    how: '1) Krafttraining 3×/Woche (Compound-Übungen: Kniebeuge, Kreuzheben). 2) 7–9 h Schlaf, besonders REM. 3) Zink 15 mg + Bor 6 mg + Magnesium 400 mg abends. 4) Fett nicht unter 25 % der Kalorien (Cholesterin = Testosteron-Vorläufer). 5) Alkohol minimieren, Körperfett unter 20 %.',
    tags: ['hormone', 'testosteron', 'muskel', 'schlaf']
  },
  {
    id: 'zyklus-tracking',
    category: 'Tracking',
    icon: '🌙',
    title: 'Training am Zyklus ausrichten (Frauen)',
    short: 'Follikelphase: Kraft pushen. Lutealphase: Ausdauer, mehr Regeneration.',
    how: 'Follikelphase (Tag 1–14): Kraftrekorde, HIIT, intensive Einheiten. Östrogen steigt. Lutealphase (Tag 15–28): Zone 2, Yoga, mehr Kohlenhydrate, mehr Schlaf (Progesteron ↑). Tracking: Natural Cycles, Clue, oder Basaltemperatur. In den 3–5 Tagen vor der Periode: keine neuen PRs erwarten.',
    tags: ['hormone', 'sport', 'tracking']
  },

  // ============ NEU: LONGEVITY & AUTOPHAGY ============
  {
    id: 'senolytikum-pulse',
    category: 'Longevity',
    icon: '🧬',
    title: 'Monatlicher Senolytikum-Puls',
    short: 'Fisetin + Quercetin hochdosiert an 2 Tagen pro Monat – entfernt seneszente Zombie-Zellen.',
    how: 'An 2 aufeinanderfolgenden Tagen pro Monat: 20 mg/kg Fisetin + 1 g Quercetin (morgens, mit Fett). Pause die restlichen 28 Tage. Beobachtungsstudien deuten auf weniger Entzündung und bessere Gewebefunktion hin. Protokoll nach Mayo Clinic.',
    tags: ['longevity', 'senolytisch', 'anti-aging']
  },
  {
    id: 'protein-longevity',
    category: 'Ernährung',
    icon: '🥩',
    title: 'Protein nach Alter anpassen',
    short: 'Unter 50 J.: 1,2–1,6 g/kg. Über 50 J.: 1,6–2,2 g/kg gegen Sarkopenie.',
    how: 'Über 50: mehr Protein anstreben – der „mTOR-Bremse wegen Longevity"-Ansatz ignoriert das Sarkopenie-Risiko. Peter Attia empfiehlt 1,6–2,2 g/kg pro Tag, verteilt auf 3–4 Mahlzeiten à 30–50 g. Leucin-Schwelle (2,5 g/Mahlzeit) triggert Muskelaufbau.',
    tags: ['longevity', 'muskel', 'ernaehrung']
  },

  // ============ NEU: HERZ-KREISLAUF ============
  {
    id: 'zone2-mito',
    category: 'Bewegung',
    icon: '❤️',
    title: 'Zone-2-Cardio 3×/Woche',
    short: 'Intensität, bei der du noch Gespräche führen kannst – baut Mitochondriendichte auf.',
    how: '3× pro Woche 45–60 min bei 60–70 % Maximalpuls (≈ 180 minus Alter). Herzfrequenz so halten, dass du noch sprechen kannst – Radfahren, Zügig Gehen, Ruderergometer. Nach 3 Monaten: messbar bessere Laktat-Clearance und VO2max.',
    tags: ['ausdauer', 'mitochondrien', 'herz', 'longevity']
  }
];

const TIP_CATEGORIES = [
  'Alle', 'Schlaf', 'Licht', 'Kälte & Hitze', 'Atmung', 'Sauerstoff',
  'Ernährung', 'Fasten', 'Bewegung', 'Stress & Geist', 'Routine', 'Tracking', 'Longevity'
];
