# Didaktisch kommentierte Version von `css/style.css`

Diese kommentierte Fassung erklärt zentrale Regeln der CSS-Datei.  
Ziel: Studierende verstehen **Layout**, **Typografie**, **Komponenten-Styling** und **Interaktion (Hover)**.

---

## Original-CSS

```css
body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  background: #f5f5f5;
  color: #333;
}

.card {
  padding: 2rem;
  max-width: 400px;
  text-align: center;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.primary-button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 999px;
  background: #007acc;
  color: #ffffff;
}

.primary-button:hover {
  background: #000599;
}
```

---

## Schritt-für-Schritt-Erklärung

### 1) **`body`** – Grundlayout & Typografie
```css
body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  background: #f5f5f5;
  color: #333;
}
```
- **`margin: 0;`** – Entfernt den Standard-Aussenabstand des Browsers (verhindert weissen Rand).  
- **`min-height: 100vh;`** – Höhe mindestens so gross wie die **volle Viewport-Höhe** → erlaubt vertikales Zentrieren.  
- **Flex-Container für Zentrierung**
  - **`display: flex;`** – aktiviert Flexbox.  
  - **`align-items: center;`** – vertikale Zentrierung der Kinder (hier: `.card`).  
  - **`justify-content: center;`** – horizontale Zentrierung.  
- **Schriftfamilie:** `Arial, Helvetica, sans-serif` – Systemnahe, serifenlose Schrift.  
- **Farben:**  
  - **`background: #f5f5f5;`** – helles Grau als Seitenhintergrund.  
  - **`color: #333;`** – dunkles Grau als Standard-Textfarbe (gutes Kontrastverhältnis auf #f5f5f5).

**Didaktischer Hinweis:** Flexbox auf dem `body` ist ein schneller Weg, um Inhalte vollflächig zu zentrieren – ideal für Minimalbeispiele und einzelne Karten.

---

### 2) **`.card`** – Komponentencontainer
```css
.card {
  padding: 2rem;
  max-width: 400px;
  text-align: center;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}
```
- **`padding: 2rem;`** – Innenabstand für Luft um den Inhalt (1 rem ≈ Schriftgrösse; gut skalierbar).  
- **`max-width: 400px;`** – Deckelt die Breite → gute Lesbarkeit, verhindert zu breite Zeilen.  
- **`text-align: center;`** – zentriert Inline-Inhalte (Überschrift, Button, Text).  
- **`background: #ffffff;`** – weisser Kartenhintergrund auf grauer Seite → klare Abhebung.  
- **`border-radius: 12px;`** – abgerundete Ecken für „Card“-Look.  
- **`box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);`** – weicher Schatten für Tiefe (0 Versatz X, 10px Versatz Y, 30px Weichzeichnung, 8% Schwarz).

**Didaktischer Hinweis:** Karten sind ein gängiges UI-Muster. Achte auf ausreichende Abstände und gute Kontraste für Lesbarkeit.

---

### 3) **`.primary-button`** – Primäraktion
```css
.primary-button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 999px;
  background: #007acc;
  color: #ffffff;
}
```
- **Grösse & Abstände:**
  - **`padding: 0.75rem 1.5rem;`** – vertikal/horizontal → Klickfläche gross genug, gut für Touch.  
  - **`font-size: 1rem;`** – skaliert mit Root-Schriftgrösse.  
- **Rahmen:** `border: none;` – flacher Stil ohne Rahmen.  
- **`border-radius: 999px;`** – grosser Radius ergibt **Pill-Button** (komplett abgerundet).  
- **Farben:**  
  - **`background: #007acc;`** – Blau als Primärfarbe.  
  - **`color: #ffffff;`** – weisse Schrift, hoher Kontrast.

**Didaktischer Hinweis:** Für Barrierefreiheit **:focus**-Stile ergänzen (Tastaturbedienung!).

---

### 4) **Hover-Zustand** – Interaktion & Feedback
```css
.primary-button:hover {
  background: #000599;
}
```
- **`hover`-Pseudoklasse:** Wird aktiv, wenn der Mauszeiger über dem Button liegt.  
- **Farbänderung:** Dunkleres Blau für visuelles Feedback → Nutzer:innen sehen, dass der Button interaktiv ist.

**Didaktischer Hinweis:** Ergänze zusätzlich `:focus-visible` für Tastatur-User und `:active` für Klick-Feedback.

---

## Gute Praxis (Quick-Wins)

- **Kontrast prüfen:** `#007acc` auf weiss ist gut, aber für AAA-Standards ggf. anpassen.  
- **Focus-Styling hinzufügen:**  
  ```css
  .primary-button:focus-visible {
    outline: 3px solid #ffcc00;
    outline-offset: 3px;
  }
  ```
- **Hover auch auf Touch?** – Für Touch-Geräte zusätzlich **`active`**-Zustand erwägen.  
- **Bewegungen sparsam nutzen:** Optional leichte Transition für sanfte Farbwechsel:  
  ```css
  .primary-button { transition: background 160ms ease-in-out; }
  ```

---

## Lernziele (für den Unterricht)

- Flexbox-Zentrierung verstehen und anwenden  
- Komponenten-Design (Card, Button) mit Abständen, Radius, Schatten  
- Interaktive Zustände (Hover/Focus) für gutes UX & Accessibility

---

## Übungsaufgaben

1. **Responsive Feinschliff:** Erhöhe die `max-width` auf 480px ab 640px Viewport-Breite (Media Query).  
2. **Sekundärbutton:** Erstelle `.secondary-button` (grau) und positioniere ihn unter dem Primärbutton.  
3. **Kontrast-Optimierung:** Passe Farben, bis WCAG AA erfüllt ist; dokumentiere die Werte.

---
