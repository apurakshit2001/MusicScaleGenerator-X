// transpose.js

const notesSharp = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const notesFlat = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

let currentNotation = "sharp";

function changeNotation() {
    currentNotation = document.getElementById("notationSelect").value;
    updateOutput(); // Re-render the chords based on the selected notation
}

function updateOutput() {
    const input = document.getElementById("inputChords").value;
    const chords = input.split(',').map(chord => chord.trim());
    document.getElementById("outputChords").value = chords.join(', ');
}

function transposeChords(direction) {
    const input = document.getElementById("inputChords").value;
    const chords = input.split(',').map(chord => chord.trim());
    const transposedChords = chords.map(chord => transposeChord(chord, direction));
    document.getElementById("outputChords").value = transposedChords.join(', ');
}

function transposeChord(chord, direction) {
    const notes = currentNotation === "sharp" ? notesSharp : notesFlat;

    // Extract the root note and modifiers
    const chordMatch = chord.match(/^([A-G][b#]?)(.*)$/);
    if (!chordMatch) return chord; // Return as is if the chord is not recognized

    const rootNote = chordMatch[1];
    const modifiers = chordMatch[2];

    let index = notes.indexOf(rootNote);
    if (index === -1) {
        return chord; // Return chord as is if not found in the notes array
    }

    let newIndex = index;
    if (direction === '+') {
        newIndex = (index + 1) % notes.length;
    } else if (direction === '-') {
        newIndex = (index - 1 + notes.length) % notes.length;
    }

    return notes[newIndex] + modifiers;
}

// Add event listeners
document.getElementById("transposeForward").addEventListener("click", () => transposeChords('+'));
document.getElementById("transposeBackward").addEventListener("click", () => transposeChords('-'));
document.getElementById("notationSelect").addEventListener("change", changeNotation);
document.getElementById("inputChords").addEventListener("input", updateOutput);


// toogle
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    navbar.classList.toggle('active');
    hamburger.classList.toggle('active');
}