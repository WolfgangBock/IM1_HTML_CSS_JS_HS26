# Grundlagen der HTML-Elemente

**Kurzfassung:**  
HTML besteht aus **Elementen**, die den Inhalt und die Struktur einer Webseite beschreiben.  
Ein Element kann aus einem **öffnenden und einem schliessenden Tag** bestehen oder **nur aus einem einzelnen Tag**.  
Zusätzlich können Elemente **Attribute** besitzen, die zusätzliche Informationen enthalten, und **Inhalte**, die zwischen den Tags stehen.

---

## Grundlagen der HTML-Elemente

HTML (HyperText Markup Language) ist die Sprache, mit der Webseiten strukturiert werden.  
Jede Webseite besteht aus einer Kombination verschiedener **Elemente** — zum Beispiel Überschriften, Absätze, Bilder oder Links.  
Ein HTML-Dokument ist eine **hierarchische Struktur** aus solchen Elementen.

---

## 1. Elemente mit öffnendem und schliessendem Tag

Die meisten HTML-Elemente haben eine **öffnende** und eine **schliessende** Markierung:

```html
<p>Das ist ein Absatz.</p>
```

- **`<p>`** ist der *öffnende Tag* (engl. *opening tag*).  
- **`</p>`** ist der *schliessende Tag* (engl. *closing tag*).  
- Der **Schrägstrich `/`** zeigt an, dass das Element hier endet.  
- **`Das ist ein Absatz.`** ist der **Inhalt** des Elements.

**Beispiele für Elemente mit Öffnungs- und Schliess-Tag:**
```html
<h1>Hauptüberschrift</h1>
<p>Ein kurzer Textabsatz.</p>
<a href="https://fhgr.ch">Zur FH Graubünden</a>
<div>Ein Container für andere Elemente</div>
```

Solche Elemente können **andere Elemente enthalten** – das nennt man *verschachteln* (engl. *nesting*):
```html
<p>Hier ist ein <strong>wichtiger</strong> Begriff.</p>
```
Das `<strong>`-Element ist innerhalb des `<p>`-Elements verschachtelt.

---

## 2. Elemente mit nur einem Tag (leere Elemente)

Einige HTML-Elemente enthalten **keinen Inhalt** und bestehen **nur aus einem Tag**.  
Sie werden *leere Elemente* oder *self-closing tags* genannt.

```html
<img src="bild.jpg" alt="Ein Beispielbild">
<br>
<hr>
<input type="text" placeholder="Dein Name">
```

- Sie **haben keinen schliessenden-Tag**.  
- Sie werden häufig für **grafische oder funktionale** Aufgaben verwendet:
  - `<img>` → Bilder einfügen  
  - `<br>` → Zeilenumbruch  
  - `<hr>` → horizontale Linie  
  - `<input>` → Eingabefeld in Formularen  

Früher wurden solche Tags oft als *self-closing* geschrieben (`<br />`), das ist aber im modernen HTML5 **nicht mehr nötig**.

---

## 3. Attribute

Ein **Attribut** liefert zusätzliche Informationen über ein Element.  
Es steht **im öffnenden Tag** und besteht aus einem **Namen** und einem **Wert**.

```html
<a href="https://fhgr.ch" target="_blank">Zur FHGR</a>
```

| Bestandteil | Erklärung |
|--------------|------------|
| `href` | Name des Attributs (Hyperlink-Referenz) |
| `"https://fhgr.ch"` | Wert des Attributs |
| `target="_blank"` | weiteres Attribut: Link in neuem Tab öffnen |

**Typische Attribute:**
| Attribut | Verwendung |
|-----------|-------------|
| `src` | Quelle eines Bildes oder Scripts |
| `alt` | Alternativtext für Bilder |
| `href` | Ziel einer Verknüpfung |
| `id` | eindeutige Kennung für CSS oder JS |
| `class` | Gruppierung von Elementen |
| `title` | Tooltip beim Überfahren mit der Maus |



---

## 4. Elementinhalt

Der **Elementinhalt** ist alles, was zwischen dem öffnenden und dem schliessenden Tag steht.  
Das kann Text, HTML oder sogar verschachtelte Strukturen sein.

Beispiel:
```html
<p>Dies ist ein <em>betonter</em> Absatz mit <a href="#">Link</a>.</p>
```

- Der Inhalt besteht aus Text und weiteren Elementen (`<em>`, `<a>`).  
- Der Browser zeigt daraus:  
  *Dies ist ein betonter Absatz mit Link.*

Der Elementinhalt kann also **Text, Inline-Elemente oder ganze Blöcke** umfassen.

---

## Zusammenfassung

| Begriff | Beispiel | Bedeutung |
|----------|-----------|-----------|
| **Öffnender Tag** | `<p>` | Start eines Elements |
| **Schliessender Tag** | `</p>` | Ende eines Elements |
| **Leeres Element** | `<img src="bild.jpg" alt="…">` | kein Inhalt, nur Eigenschaften |
| **Attribut** | `class="card"` | Zusatzinformation im Start-Tag |
| **Elementinhalt** | `Hallo Welt!` | das, was zwischen den Tags steht |

---

## Merksätze

1. **HTML beschreibt Inhalte, nicht das Aussehen.**  
   Das Design kommt durch CSS, die Logik durch JavaScript.

2. **Tags sind wie Container:**  
   Sie öffnen sich (`<p>`) und schliessen sich wieder (`</p>`).

3. **Attribute erklären Details:**  
   Etwa woher ein Bild kommt (`src`), oder wohin ein Link führt (`href`).

4. **Elemente können verschachtelt sein:**  
   Innenliegende Strukturen machen HTML flexibel und hierarchisch.
   
5. **Verschachtelungen dürfen sich nicht überkreuzen:**\
	richtig: `<p>Hallo <strong>Welt</strong>!</p>`\
	falsch: `<p>Hallo <strong>Welt!</p> </strong>`
	
### Weiterführende Links:
[mdn-HTML-Elemente-Referenz](https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements)
