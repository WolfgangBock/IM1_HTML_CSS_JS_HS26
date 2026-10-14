# Interaktive Medien 1 HS26 - HTML, CSS & JavaScript

Willkommen zum Kurs **Interaktive Medien 1**! Dieser Kurs führt dich systematisch in die Grundlagen der Webentwicklung ein.

## Kursstruktur

Der Kurs ist in **6 Module** gegliedert, die aufeinander aufbauen:

### [00-course-info](./00-course-info/) - Kursinformationen
Hier findest du:
- Detaillierter Kursablauf und Lernziele
- Technische Grundlagen
- HTTP-Protokoll Einführung
- Projekt-Ablaufpläne

**Start hier:** Lies zuerst die Kursdokumentation!

---

### [01-html-basics](./01-html-basics/) - HTML Grundlagen
**Lernziele:**
- HTML5-Grundstruktur verstehen
- Semantische Elemente einsetzen
- HTML-Attribute verwenden (class, id, src, href, alt)

**Inhalte:**
- `cheatsheets/` - Theoretische Grundlagen
- `examples/` - Vollständiges Arbeitsbeispiel
- `starter/` - Platz für deine Übungen

**Dauer:** ~ 2-3 Stunden

---

### [02-css-basics](./02-css-basics/) - CSS Grundlagen
**Lernziele:**
- CSS mit HTML verknüpfen
- Selektoren verstehen (Element, Klasse, ID)
- Grundlegende Gestaltung umsetzen

**Inhalte:**
- `cheatsheets/` - CSS-Theorie
- `examples/` - Vollständig gestaltete Beispielseite
- `starter/` - Platz für deine Übungen

**Wichtige Konzepte:** Box Model, Farben, Schriften, Abstände

**Dauer:** ~ 3-4 Stunden

---

### [03-js-basics](./03-js-basics/) - JavaScript Grundlagen
**Lernziele:**
- JavaScript einbinden
- Browser-Konsole nutzen
- Event-Listener verstehen
- DOM-Manipulation lernen

**Inhalte:**
- `cheatsheets/` - JavaScript-Grundlagen
- `examples/` - 6 interaktive Beispiele:
  - Console.log
  - Button Click Events
  - Text dynamisch ändern
  - Farben ändern
  - Input-Felder auslesen
  - Liste erstellen

**Wichtige Konzepte:** Events, DOM, Variables, Functions

**Dauer:** ~ 4-5 Stunden

---

### [04-css-layouts](./04-css-layouts/) - Fortgeschrittene Layouts
**Lernziele:**
- Flexbox für 1D-Layouts
- CSS Grid für 2D-Layouts
- Responsive Design umsetzen
- Moderne Layout-Patterns

**Inhalte:**
- **Flexbox Beispiele:** (5 Beispiele)
  - Basic Row, Column, Centered, Space Between, Gallery
- **Grid Beispiele:** (5 Beispiele)
  - Two/Three Column, Auto-fit, Card Layout, Holy Grail
- **Kombinierte Beispiele:** (3 Beispiele)
  - Header, Cards, Sidebar mit Flex + Grid

**Navigation:** Öffne `index.html` für eine Übersicht

**Dauer:** ~ 5-6 Stunden

---

### [05-project-museum](10-project-museum/) - Praxisprojekt: Museum Website
**Lernziele:**
- Alle Konzepte in einem echten Projekt anwenden
- Multi-Page Website erstellen
- Dark Mode implementieren
- Custom Fonts einbinden

**Struktur:**
- `starter/` - deine Arbeitsversion (Code-Along)
- `solution/` - Vollständige Lösung (Referenz)

**Features:**
- Mehrere HTML-Seiten (Home, Ausstellung, Künstler, Kontakt)
- Fortgeschrittenes CSS (Grid, Flexbox, Custom Properties)
- JavaScript Theme Toggle
- Responsive Design
- Custom Web Fonts

**Dauer:** ~ 8-10 Stunden

---

### [06-advanced-examples](./06-advanced-examples/) - Weiterführende Beispiele
**CSS Zen Garden**
- Erkunde, wie CSS das Design komplett verändert
- Experimentiere mit fortgeschrittenen CSS-Techniken
- Erstelle deine eigenen Designs

**Ideal für:** Studierende, die tiefer einsteigen möchten

---

## Empfohlener Lernpfad

1. **Woche 1-2:** HTML Basics → CSS Basics → JS Basics
2. **Woche 3:** CSS Layouts (Flexbox & Grid)
3. **Woche 4-5:** Museum Projekt
4. **Optional:** Advanced Examples

## Schnellstart

### Bevor du anfängst:

1. **Entwicklungsumgebung einrichten** → [Setup-Anleitung](./00-course-info/entwicklungsumgebung-setup.md)
   - VS Code installieren
   - Live Server Extension
   - Browser DevTools kennenlernen

2. **Häufige Fehler kennen** → [Fehler & Lösungen](./00-course-info/haeufige-fehler-und-loesungen.md)
   - Typische Anfängerfehler
   - Debugging-Strategien
   - Checklisten

### Los geht's:

```bash
# 1. Repository klonen oder herunterladen
git clone <repository-url>

# 2. Ersten Schritt öffnen
cd 01-html-basics
open solution/index.html  # macOS
start solution/index.html # Windows
xdg-open solution/index.html # Linux

# 3. Mit einem Code-Editor öffnen (z.B. VS Code)
code .
```

## Arbeitsweise

Für jedes Modul:

1. **Lesen:** Studiere die Theorie im `cheatsheets/` Ordner
2. **Verstehen:** Öffne die Beispiele im Browser und Code-Editor
3. **Üben:** Erstelle eigene Dateien im `starter/` Ordner
4. **Anwenden:** Nutze das Gelernte im nächsten Modul

## Empfohlene Tools

- **Code-Editor:** [Visual Studio Code](https://code.visualstudio.com/)
- **Browser:** Chrome, Firefox oder Edge (mit DevTools)
- **VS Code Extensions:**
  - Live Server (für lokale Entwicklung)
  - Prettier (Code-Formatierung)
  - HTML CSS Support

## Hilfreiche Ressourcen

### Dokumentation & Tutorials
- [MDN Web Docs](https://developer.mozilla.org/de/) - Beste Referenz für Web-Technologien
- [W3Schools](https://www.w3schools.com/) - Tutorials und Beispiele
- [CSS-Tricks](https://css-tricks.com/) - CSS-Tipps und -Tricks
- [JavaScript.info](https://javascript.info/) - Modernes JavaScript-Tutorial
- [Can I Use](https://caniuse.com/) - Browser-Kompatibilität prüfen

### Interaktive Lernspiele
Übe spielerisch und interaktiv:

- [CSS Diner](https://flukeout.github.io/) - Lerne CSS-Selektoren spielerisch (perfekt für Modul 02)
- [Grid Garden](https://cssgridgarden.com/#de) - CSS Grid meistern durch Garten-Puzzles (ideal für Modul 04)
- [Flexbox Defense](http://www.flexboxdefense.com/) - Flexbox lernen mit Tower Defense (ideal für Modul 04)

**Empfehlung:** Spiele CSS Diner nach Modul 02 und Grid Garden + Flexbox Defense nach Modul 04!

## Häufige Fragen

**Q: Wo fange ich an?**
A:
1. Zuerst: [Entwicklungsumgebung einrichten](./00-course-info/entwicklungsumgebung-setup.md)
2. Dann: `00-course-info/` lesen
3. Danach: Arbeite dich durch die Module 01-06

- **Q: Muss ich programmieren können?**
  - A: Nein! Dieser Kurs startet bei Null und erklärt alles Schritt für Schritt.
- **Q: Wie lange dauert der Kurs?**
  - A: ca. 30 Stunden. 
- **Q: Kann ich Module überspringen?**
  - A: Nicht empfohlen! Jedes Modul baut auf dem vorherigen auf. 
- **Q: Wo finde ich Lösungen?**
  - A: Beispiellösungen findest du in den `examples/` Ordnern und im Museum-Projekt unter `10-project-museum/solution/`. 
- **Q: Mein Code funktioniert nicht - was tun?**
  - A: Schau in die [Fehler & Lösungen](./00-course-info/haeufige-fehler-und-loesungen.md) - dort findest du die häufigsten Probleme und deren Lösungen!

## Support

Bei Fragen oder Problemen:
1. Schau in die `README.md` des jeweiligen Moduls
2. Konsultiere die Kursdokumentation in `00-course-info/`
3. Nutze die Developer Tools (F12) zur Fehlersuche
4. Frag deinen Dozenten

## Lizenz

Dieser Kurs ist für Bildungszwecke erstellt.

---

**Viel Erfolg beim Lernen!**

Beginne jetzt mit [00-course-info](./00-course-info/)

#### Todo
- Client-Server Arbeitsblatt erstellen
- Dateipfade Arbeitsblatt erstellen
- Screenshot -> Struktur (DOM) -> Klassen -> HTML/CSS
- Inhalt für Ordner 08-hosting-git
