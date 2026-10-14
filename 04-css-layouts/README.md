# Lektion 4: CSS Layouts - Flexbox & Grid

## Lernziele

Nach dieser Lektion kannst du:
- Flexbox für eindimensionale Layouts verwenden
- CSS Grid für zweidimensionale Layouts einsetzen
- Responsive Layouts erstellen
- Gängige Layout-Patterns umsetzen

## Playground - Interaktive Beispiele

Dieser Ordner enthält eine Sammlung von praktischen Layout-Beispielen.
Öffne `index.html` für eine Übersicht aller Beispiele.

### Flexbox Beispiele

Flexbox eignet sich für **eindimensionale** Layouts (in einer Richtung):

- `flex-basic-row.html` - Grundlegende horizontale Anordnung
- `flex-column.html` - Vertikale Anordnung
- `flex-centered.html` - Elemente zentrieren
- `flex-space-between.html` - Gleichmäßige Verteilung
- `flex-wrap-gallery.html` - Umbruch bei mehreren Elementen

**Wichtigste Flexbox-Properties:**
```css
.container {
  display: flex;
  flex-direction: row | column;
  justify-content: center | space-between | space-around;
  align-items: center | flex-start | flex-end;
  flex-wrap: wrap | nowrap;
}
```

### Grid Beispiele

CSS Grid eignet sich für **zweidimensionale** Layouts (Zeilen und Spalten):

- `grid-two-column.html` - Zweispalten-Layout
- `grid-three-column.html` - Dreispalten-Layout
- `grid-auto-fit.html` - Automatische Spaltenanpassung
- `grid-card-layout.html` - Karten-Layout
- `grid-holy-grail.html` - Klassisches Website-Layout

**Wichtigste Grid-Properties:**
```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px;
}
```

### Kombinierte Beispiele (Flex + Grid)

Oft werden beide Techniken kombiniert:

- `grid-flex-header.html` - Header mit Grid und Flex
- `grid-flex-cards.html` - Kartenlayout kombiniert
- `grid-flex-sidebar.html` - Layout mit Sidebar

## Wann verwende ich was?

| Layout-Typ | Verwende |
|------------|----------|
| Navigation (horizontal) | **Flexbox** |
| Zentrieren | **Flexbox** |
| Bildergalerie | **Grid** oder **Flexbox** |
| Ganzes Page-Layout | **Grid** |
| Komponenten-Innenlayout | **Flexbox** |
| Komplexe 2D-Layouts | **Grid** |

## Aufgabe

1. Öffne die Beispiele im Browser
2. Öffne die DevTools (F12) und experimentiere mit den Werten
3. Erstelle ein eigenes Layout mit:
   - Flexbox für die Navigation
   - Grid für den Hauptinhalt
   - Responsive Verhalten (funktioniert auf kleinen Bildschirmen)

## Interaktives Lernen

Vertiefe dein Wissen mit diesen unterhaltsamen Lernspielen:

**[Flexbox Defense](http://www.flexboxdefense.com/)** - Tower Defense mit Flexbox
- Lerne Flexbox-Properties spielerisch
- Verteidige Türme mit CSS-Code
- 12 Level mit steigender Schwierigkeit

**[Grid Garden](https://cssgridgarden.com/#de)** - Gärtnern mit CSS Grid
- Meistere CSS Grid durch Puzzle
- Auf Deutsch verfügbar!
- 28 Level von Anfänger bis Fortgeschritten

**Empfehlung:** Spiele beide Spiele komplett durch - das dauert ca. 1-2 Stunden und festigt dein Wissen enorm!

## Nächste Schritte

Nach Abschluss dieser Lektion fährst du fort mit:
**05-project-museum** - Wende dein Wissen in einem echten Projekt an
