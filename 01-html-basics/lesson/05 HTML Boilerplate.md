# Detaillierte Beschreibung des HTML-Codes

**Kurzfassung:**  
Diese HTML-Datei ist eine **minimalistische Beispielseite**, die eine einfache Benutzeroberfläche mit Überschrift, Button und Zähler darstellt.  
Sie bindet ein externes Stylesheet (`css/style.css`) und ein JavaScript (`js/script.js`) ein, das die Interaktivität (z. B. das Hochzählen beim Klick) steuert.

---

## Zusammenspiel der Dateien

| Datei | Aufgabe |
|--------|----------|
| **index.html** | Struktur & Inhalt der Seite |
| **css/style.css** | Gestaltung (Layout, Farben, Typografie) |
| **js/script.js** | Verhalten / Interaktivität |

Beim Laden der Seite wird zuerst das HTML gerendert, dann das CSS angewendet und schliesslich das JavaScript ausgeführt, das auf DOM-Elemente reagiert.

---

## Grundaufbau des Dokuments

```html
<!DOCTYPE html>
<html lang="de">
  <head> … </head>
  <body> … </body>
</html>
```

### Erklärung:
- **`<!DOCTYPE html>`**  
  Deklariert das Dokument als HTML5. Das hilft dem Browser, den modernen Standardmodus zu aktivieren.

- **`<html lang="de">`**  
  Startet das HTML-Dokument und gibt an, dass die Hauptsprache Deutsch ist. Das verbessert Barrierefreiheit und SEO.

---

## Kopfbereich (`<head>`)

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Eine einfache HTML-Seite</title>
  <link rel="stylesheet" href="css/style.css" />
</head>
```

### Details:
1. **`<meta charset="UTF-8" />`**  
   Legt die Zeichenkodierung auf UTF-8 fest (wichtig für Umlaute und Sonderzeichen).

2. **`<meta name="viewport" content="width=device-width, initial-scale=1.0" />`**  
   Sorgt dafür, dass die Seite auf mobilen Geräten korrekt skaliert wird. **Ohne diese Zeile funktioniert responsive Design nicht.**

3. **`<title>`**  
   Definiert den Titel, der im Browser-Tab angezeigt wird: *„Eine einfache HTML-Seite“*.

4. **`<link rel="stylesheet" href="css/style.css" />`**  
   Verknüpft ein externes Stylesheet. Die Datei liegt im Unterordner `css/` und enthält das Layout/Design der Seite (Farben, Abstände, Schriftarten etc.).

---

## Inhaltsbereich (`<body>`)

```html
<body>
  <main class="card">
    <h1>Hallo!</h1>
    <button class="primary-button" type="button">Drück mich</button>
    <p>Zähler: <span id="counter-value">1</span></p>
  </main>
  <script src="js/script.js"></script>
</body>
```

### Aufbau & Bedeutung:

- **`<main class="card">`**  
  Das zentrale Inhalts-Element der Seite.  
  Die Klasse `card` wird im CSS verwendet, um ein visuell hervorgehobenes Feld oder eine Karte zu gestalten (z. B. mit Schatten, Rahmen oder abgerundeten Ecken).

- **`<h1>Hallo!</h1>`**  
  Hauptüberschrift der Seite.

- **`<button class="primary-button" type="button">Drück mich</button>`**  
  Ein interaktiver Button mit der Beschriftung „Drück mich“.  
  - `class="primary-button"`: CSS-Klasse für das visuelle Design.  
  - `type="button"`: definiert ihn explizit als normalen Button (nicht zum Absenden eines Formulars).

- **`<p>Zähler: <span id="counter-value">1</span></p>`**  
  Ein Absatz mit Text *„Zähler:“* und einer eingebetteten **`<span>`**, die den Zählerwert anzeigt.  
  - `id="counter-value"` erlaubt es dem JavaScript, gezielt auf dieses Element zuzugreifen (z. B. den Wert zu erhöhen).

- **`<script src="js/script.js"></script>`**  
  Lädt das externe JavaScript, das die Logik der Seite steuert – typischerweise:
  - Klicks auf den Button abfangen,
  - den Zählerwert im `<span>` erhöhen,
  - und den neuen Wert wieder anzeigen.

---

## Typisches Funktionsprinzip (in `js/script.js`)

```js
const button = document.querySelector('.primary-button');
const counter = document.getElementById('counter-value');
let value = 1;

button.addEventListener('click', () => {
  value++;
  counter.textContent = value;
});
```

So würde der Zähler bei jedem Klick um eins erhöht werden.

---

## Zusammenfassung

| Bereich | Zweck | Beispiel |
|----------|--------|-----------|
| **Head** | Meta-Infos & Ressourcen | `<meta charset="UTF-8">`, `<link rel="stylesheet">` |
| **Body** | Sichtbarer Inhalt | Überschrift, Button, Zähler |
| **CSS** | Gestaltung | `class="card"`, `class="primary-button"` |
| **JS** | Interaktivität | Button-Klick → Zähler erhöhen |
