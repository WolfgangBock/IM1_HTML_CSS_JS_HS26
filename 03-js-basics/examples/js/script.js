/* =================================
   JavaScript Grundlagen - Beispiele
   ================================= */

// Dies wird beim Laden der Seite ausgeführt
console.log("🚀 JavaScript wurde erfolgreich geladen!");
console.log("Öffnen Sie die Konsole (F12), um diese Nachricht zu sehen.");

// =================================
// Beispiel 1: Console.log Button
// =================================
const consoleButton = document.getElementById('console-button');

consoleButton.addEventListener('click', function() {
    console.log("👋 Hallo aus der Konsole!");
    console.log("Die aktuelle Zeit ist: " + new Date().toLocaleTimeString());
    console.log("Math.random() generiert: " + Math.random());
    alert("Schauen Sie in die Konsole (F12)!");
});


// =================================
// Beispiel 2: Button Click Counter
// =================================
const clickButton = document.getElementById('click-button');
const clickCountDisplay = document.getElementById('click-count');
let clickCount = 0;

clickButton.addEventListener('click', function() {
    clickCount++;
    clickCountDisplay.textContent = `Anzahl Klicks: ${clickCount}`;
    console.log(`Button wurde ${clickCount} mal geklickt`);
});


// =================================
// Beispiel 3: Text dynamisch ändern
// =================================
const changeTextButton = document.getElementById('change-text-button');
const dynamicText = document.getElementById('dynamic-text');

changeTextButton.addEventListener('click', function() {
    dynamicText.textContent = "Der Text wurde mit JavaScript geändert! 🎉";
    dynamicText.style.color = "#27ae60";
    dynamicText.style.fontWeight = "bold";
});


// =================================
// Beispiel 4: Hintergrundfarbe ändern
// =================================
const colorButton = document.getElementById('color-button');
const colorBox = document.getElementById('color-box');

// Array mit verschiedenen Farben
const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c'];
let currentColorIndex = 0;

colorButton.addEventListener('click', function() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    colorBox.style.backgroundColor = colors[currentColorIndex];
    console.log("Neue Farbe: " + colors[currentColorIndex]);
});


// =================================
// Beispiel 5: Input Feld auslesen
// =================================
const greetButton = document.getElementById('greet-button');
const nameInput = document.getElementById('name-input');
const greetingDisplay = document.getElementById('greeting');

greetButton.addEventListener('click', function() {
    const name = nameInput.value;

    if (name.trim() === '') {
        greetingDisplay.textContent = "Bitte geben Sie einen Namen ein!";
        greetingDisplay.style.color = "#e74c3c";
    } else {
        greetingDisplay.textContent = `Hallo ${name}! Schön Dich kennenzulernen! 👋`;
        greetingDisplay.style.color = "#16a085";
    }
});

// Enter-Taste im Input-Feld funktioniert auch
nameInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        greetButton.click();
    }
});


// =================================
// Beispiel 6: Elemente zur Liste hinzufügen
// =================================
const addTodoButton = document.getElementById('add-todo-button');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

addTodoButton.addEventListener('click', function() {
    const todoText = todoInput.value;

    if (todoText.trim() !== '') {
        // Neues <li>-Element erstellen
        const newTodoItem = document.createElement('li');
        newTodoItem.textContent = todoText;

        // Zur Liste hinzufügen
        todoList.appendChild(newTodoItem);

        // Input-Feld leeren
        todoInput.value = '';

        console.log("Neue Aufgabe hinzugefügt: " + todoText);
    } else {
        alert("Bitte geben Sie eine Aufgabe ein!");
    }
});

// Enter-Taste im Todo-Input
todoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTodoButton.click();
    }
});


// =================================
// Bonus: Interaktive Konsolen-Ausgabe
// =================================
console.log("%c🎨 Willkommen zu JavaScript Grundlagen!", "font-size: 20px; color: #3498db; font-weight: bold;");
console.log("%cProbieren Sie folgende Beispiele aus:", "font-size: 14px; color: #555;");
console.log("1️⃣ Console.log Button");
console.log("2️⃣ Click Counter");
console.log("3️⃣ Text ändern");
console.log("4️⃣ Farbe ändern");
console.log("5️⃣ Input auslesen");
console.log("6️⃣ Todo-Liste");
