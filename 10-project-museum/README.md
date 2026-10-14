# Projekt: Museum Website

## Projektübersicht

In diesem Projekt erstellst du eine vollständige Website für ein digitales Museum.
Das Projekt wendet alle bisher gelernten Konzepte an:
- Semantisches HTML
- Fortgeschrittenes CSS (Layouts, Custom Fonts, Dark Mode)
- JavaScript (Theme Toggle)

## Projektstruktur

### codealong/
Hier findest du die Startdateien für das Code-Along im Unterricht.
Dies ist deine Arbeitsversion - hier kannst du mitprogrammieren!

**Enthält:**
- HTML-Seiten (Index, Ausstellung, Künstler, Kontakt, Impressum)
- CSS-Dateien (Resets, Fonts, Styles)
- JavaScript (Theme Toggle)
- Bilder und Fonts

### solution/
Hier findest du die vollständige Lösung als Referenz.
**Tipp:** Schau erst in die Lösung, wenn du es selbst versucht hast!

## Features des Projekts

1. **Multi-Page Website**
   - Homepage mit Hero-Image
   - Ausstellungsseite
   - Künstlerseite
   - Kontaktformular
   - Impressum

2. **Fortgeschrittenes CSS**
   - Custom Web Fonts (BitcountGrid)
   - CSS Grid & Flexbox Layouts
   - CSS Reset für Browser-Konsistenz
   - CSS Custom Properties (Variablen)

3. **Dark Mode**
   - Theme Toggle Button
   - JavaScript für Theme-Switching
   - CSS Variables für Farbschema

4. **Responsive Design**
   - Mobile-First Ansatz
   - Flexible Layouts
   - Responsive Images

## Ablauf

Folge der Dokumentation in `00-course-info/ablauf_museum.md` für:
- Schritt-für-Schritt Anleitung
- Code-Along Übungen
- Best Practices

## Wichtige Konzepte

### CSS Custom Properties
```css
:root {
  --color-background: #ffffff;
  --color-text: #000000;
}

[data-theme="dark"] {
  --color-background: #000000;
  --color-text: #ffffff;
}
```

### JavaScript Theme Toggle
```javascript
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  document.documentElement.setAttribute('data-theme', 'dark');
});
```

### Semantisches HTML
```html
<main>
  <section class="hero">...</section>
  <section class="gallery">...</section>
</main>
```

## Bewertungskriterien

- Sauberer, strukturierter HTML-Code
- Semantische HTML-Elemente verwendet
- CSS Grid/Flexbox korrekt eingesetzt
- Responsives Design funktioniert
- JavaScript Theme Toggle funktioniert
- Code ist kommentiert und verständlich

## Nächste Schritte

Nach Abschluss dieses Projekts:
**06-advanced-examples** - Erkunde weiterführende Beispiele
