# Munich Health Center – Biohacking Companion App

Companion-App zum [Munich Health Center](https://munichhealthcenter.de/).
Sie ergänzt die Behandlungen vor Ort mit:

- **Therapien-Übersicht** – alle MHC-Leistungen (Ausstattung, Schwerpunkte, Netzwerk) plus externe Verfahren wie INUSpherese®.
- **Supplement-Datenbank** – 63 Supplements mit Wirkung, Dosierung, Synergien und Evidenzlevel.
- **Symptom-Assistent** – wählbare Ziele/Beschwerden, lokale Empfehlungen + KI-Einschätzung.
- **Aktuelle News** – KI-kuratiert aus Biohacking, Longevity, Supplements.
- **Mobile-fähig (PWA)** – per "Zum Home-Bildschirm hinzufügen" wie eine native App nutzbar.

## Tech

- Statische HTML/CSS/JS-App, gehostet auf GitHub Pages
- Cloudflare Worker als Gemini-API-Proxy (versteckt den API-Key)
- Auto-Deploy über `auto_deploy.html` mit GitHub Personal Access Token

## Deployment

1. `auto_deploy.html` lokal öffnen
2. GitHub-Token mit `repo: write` einfügen (oder Fine-Grained mit `Contents: write` auf dieses Repo)
3. „Deploy" klicken → App wird live auf https://phoeser.github.io/munichhealthcenter/

## Hinweis

Die App ist kein Ersatz für medizinische Beratung. Sie ergänzt die Konsultationen im Munich Health Center mit allgemeinem Wissen und transparenter Informationsaufbereitung.
